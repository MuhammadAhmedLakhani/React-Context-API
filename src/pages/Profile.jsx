import { Outlet } from "react-router-dom";
import LayoutApp from "../components/Layout";
import AppCard from "../components/Appcard";
import { useContext, useReducer, useState } from "react";
import Chat from "../context/ChatContext";

function Profile() {
    let [obj, setObj] = useState({ name: "Ghous", age: 30 })

    let [chat, setChat] = useState(["message"])




    return (
        <div>
            <Chat.Provider value={{chat, setChat}}>



            <LayoutApp>
                <h1>Profile Page</h1>
                <AppCard obj = {obj} />
                <Outlet />
            </LayoutApp>

            </Chat.Provider>
        </div>
    )
}

export default Profile;