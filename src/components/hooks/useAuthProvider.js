import { useEffect, useState } from "react";
import authService from "../services/auth";

export default function useAuthProvider() {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
      //TODO  chequear si ya hay token guardado en sessionStorage
      
    }, [])
    
    const signin = (credentials,cb) => {
      //TODO cambiar por async-await
      authService.login(credentials,cb).then(res=>{
        setUser("user")
        cb()
      }).catch(error=>{
        console.log(error)
      });

    };
  
    const signout = cb => {
  
        setUser(null);
        cb()
    };
  
    return {
      user,
      signin,
      signout
    };
  }