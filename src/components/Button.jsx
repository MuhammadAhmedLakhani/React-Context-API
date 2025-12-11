import { Button } from 'antd';
import User from "../context/UserContext.js"
import { useContext , useId } from 'react';

function AppButton({title , obj}){

    let user1 = useContext(User)

    const id = useId()

    console.log("user",user1)

    return (


        //updating context with the setUser
        <Button  onClick={()=>user1.setUser({name:"Ghous",email:"ghous@gmail.com"})


        }   type="primary">{title}</Button>


    )
}

export default AppButton;