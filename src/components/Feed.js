import React, { useEffect, useState } from 'react'
import ".././Style/Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from '.././firebase';
import { addDoc, collection, doc, onSnapshot, orderBy, query,serverTimestamp } from "firebase/firestore";
import { getAuth, getIdToken, onAuthStateChanged } from "firebase/auth";
import firebase from ".././firebase"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';
import { async } from '@firebase/util';
function Feed() {
    const user = useSelector(selectUser)
    const [posts,setPosts] = useState([])
    const [input,setInput]= useState("")


    // const [loading,setLoading] = useState(false)
    // const [tokenId,setTokenId] = useState("")
    //  console.log("user -> ",user)
    // //keep track authenticate user 
    //  useEffect( ()=>{
    //     const auth = getAuth();
    //     onAuthStateChanged(auth, async (user) => {
    //         if (user) {
    //           const token = await getIdToken(user);
    //           setTokenId(token)
    //           console.log("token -> ",token)
    //         }
    //       });
        
    //     //var token = await FirebaseAuth.instance.currentUser().getIdToken();

    //     if(tokenId==""){
    //      setLoading(true)
    //     }else{
    //      setLoading(false)
    //     }
        
    // },[])

    // keep track updated posts 
    useEffect( ()=>{
        console.log("feed useeffects start") 
        // collection ref
        const colRef=collection(db,"posts")
        // queries
        const q = query(colRef,orderBy("timestamp","desc"))
        // snapshots --> docs 
        const unsub = onSnapshot(q, (snapshot)=>{
            console.log("docs --->", snapshot.docs)
            setPosts(snapshot.docs.map(doc => (
                {
                    id : doc.id,
                    data : doc.data()
                }
            )
                ))
            console.log("feed useeffects end") 
        })
        return () => {
         unsub();
        }
 
    //   db.collection("posts").onSnapshot((snapshot)=>{
    //    setPosts(
    //     snapshot.docs.map((doc)=>(
    //         {
    //             id : doc.id,
    //             data : doc.data()
    //         }
    //     ))
    //    )
    //   })
    },[])

  
    // add post on click - in firestore
    const sendPost = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db,"posts"),{
                name : user.displayName,
                description : user.email,
                message : input,
                photoUrl : user.photoUrl || "",
                timestamp : serverTimestamp()
            })
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.log(error.message);
        }
        setInput("")
       
        // V8
        
        // db.collection('posts').add({
        //     name : "Pankaj Suryavanshi",
        //     description : "This is a test",
        //     message : input,
        //     photoUrl : "",
        //     timestamp : serverTimestamp()     
        // })
    }


    return (
      
     
            <div className='feed'>
            <div className="feed__inputContainer">
             <div className="feed__input">
                <CreateIcon></CreateIcon>
                <form >
                    <input value={input} onChange={e=>setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>Submit</button>
                </form>   
             </div>
             <div className="feed__inputOptions">            
                <InputOption Icon={ImageIcon} color="#70B5F9" title="Photo"/>
                <InputOption Icon={SubscriptionsIcon} color="#E7A33E" title="Video"/>
                <InputOption Icon={EventNoteIcon} color="#C0CBCD" title="Event"/>
                <InputOption Icon={CalendarViewDayIcon} color="#7FC15E" title="Write article"/>
            </div>
            </div>
            
             {/* Posts */}
             { console.log("Posts",posts)}
             <FlipMove>
             {
             posts.map(({id,data : {name,description,message,photoUrl}})=>(
              <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
              />   
             ))
            }
             </FlipMove>
             
             {/* <Post
             name="Pankaj Suryavanshi"
             description="This is a test"
             message="WOW this worked"/> */}
        </div>
  )
}

export default Feed