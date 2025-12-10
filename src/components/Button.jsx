import { Button } from 'antd';

function AppButton({title , obj}){

    console.log(obj)

    return (
        <Button type="primary">{title}</Button>
    )
}

export default AppButton;