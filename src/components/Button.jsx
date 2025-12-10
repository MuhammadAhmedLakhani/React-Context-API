import { Button } from 'antd';
import user from "../context/UserContext.js"
import { useContext , useId } from 'react';

function AppButton({title , obj}){

    let user1 = useContext(user)

    const id = useId()

    console.log("user",user1)

    return (


        //updating context with the setUser
        <Button  onClick={()=> console.log(id)


        }   type="primary">{title}</Button>


    )
}

export default AppButton;