import { Outlet } from "react-router-dom";
import LayoutApp from "../components/Layout";
import AppCard from "../components/Appcard";
import { useState } from "react";

function Profile() {
    let [obj, setObj] = useState({ name: "Ghous", age: 30 })

    return (
        <div>
            <LayoutApp>
                <h1>Profile Page</h1>
                <AppCard obj = {obj} />
                <Outlet />
            </LayoutApp>

        </div>
    )
}

export default Profile;