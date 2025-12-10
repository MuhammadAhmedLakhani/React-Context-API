import { Button } from 'antd';
import user from "../context/UserContext.js"
import { useContext } from 'react';

function AppButton({title , obj}){

    let user1 = useContext(user)


    console.log(user1)

    return (
        <Button type="primary">{title}</Button>
        

    )
}

export default AppButton;