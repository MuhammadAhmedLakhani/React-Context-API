import logo from './logo.svg';
import './App.css';
import AppRouter from './config/router/router';
import LayoutApp from './components/Layout';
import { useContext, useReducer, useState } from 'react';
import User from './context/UserContext';
import Chat from './context/ChatContext'; 
import { theme } from 'antd';
import { reducer , InitialState } from './reducer';





function App() {

  let [user, setUser] = useState({ name: "Ahmed", email: "ahmed@gmail.com" })
  


 let [state,dispatch]= useReducer(reducer,InitialState)  


  


  


  return (
    <div>


      <h1>Theme : {state.theme}</h1>
      <button onClick={()=>dispatch({type : "updateTheme" })}>Update</button>
      


    
      {/* <User.Provider value={{user,setUser}}>

        <AppRouter />

      </User.Provider>
     */}

    </div>
  );
}

export default App;
