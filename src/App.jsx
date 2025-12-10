import logo from './logo.svg';
import './App.css';
import AppRouter from './config/router/router';
import LayoutApp from './components/Layout';
import { useContext, useState } from 'react';
import User from './context/UserContext';
import Chat from './context/ChatContext'; 


function App() {

  let [user, setUser] = useState({ name: "Ahmed", email: "ahmed@gmail.com" })
  let [chat, setChat] = useState([])







  return (
    <div>


    
      <User.Provider value={{user,setUser}}>

        <AppRouter />

      </User.Provider>
    

    </div>
  );
}

export default App;
