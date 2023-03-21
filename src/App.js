import React,{useEffect, useState} from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {login,logout} from ".././src/features/userSlice"
import Widgets from './components/Widgets';
function App() {
  const [userData,setUserData] = useState({}) 
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
 
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        const uid = userAuth.uid;
        localStorage.setItem('user', JSON.stringify(user));
        console.log("user from app onAuthChange :",userAuth)
        dispatch(login({
          email : userAuth.email,
          uid : userAuth.uid,
          displayName : userAuth.displayName, 
          photoUrl : userAuth.photoURL,
        }))
        
        
      } else {
        dispatch(logout())
        localStorage.removeItem('user');
      }
    }); 
  },[])
 
  // useEffect(() => {
  //   if(user){
  //     console.log("First UseEFfect - User is not logged in")
  //     setUserData(user)      
  //     console.log("userData --> ",userData)
  //     dispatch(login({
  //       email : userData.email,
  //       uid : userData.uid,
  //       displayName : userData.displayName, 
  //       photoUrl : userData.photoURL,
  //     }))
  //     return  
  //   }   
  // },[])

  return (
    <div className="app">
       
        {/* Header */}
        {/* <Header /> */}

      {!user ? (<Login />) :
        (
          <>
           <Header />
           <div className="app__body">
            {/* Sidebar */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
            <Widgets></Widgets>
          </div>
          </>
         
        )
      }




    </div>
  );
}

export default App;
