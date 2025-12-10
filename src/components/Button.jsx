import { Button } from 'antd';
import user from "../context/UserContext.js"
import { useContext } from 'react';
import Chat from '../context/ChatContext.js';

function AppButton({title , obj}){

    let user1 = useContext(user)
    let chat1 = useContext(Chat)


    console.log("user",user1)
    console.log("chat",chat1)

    return (


        //updating context with the setUser
        <Button  onClick={()=>user1.setUser({name:"MuhammadAhmed",email:"MA@gmail.com"})


        }   type="primary">{title}</Button>


    )
}

export default AppButton;