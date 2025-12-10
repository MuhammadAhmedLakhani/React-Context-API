import { Button } from 'antd';
import user from "../context/UserContext.js"
import { useContext } from 'react';

function AppButton({title , obj}){

    let user1 = useContext(user)


    console.log("user",user1)

    return (


        //updating context with the setUser
        <Button  onClick={()=>user1.setUser({name:"MuhammadAhmed",email:"MA@gmail.com"})


        }   type="primary">{title}</Button>


    )
}

export default AppButton;