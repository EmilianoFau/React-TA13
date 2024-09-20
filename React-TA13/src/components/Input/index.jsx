import React, { useContext } from "react";
import { UserContext } from '../../Context';
import Styles from "./index.module.css";

const Input = () => {
    const { setUsername } = useContext(UserContext);
  
    const handleInputChange = (event) => {
      setUsername(event.target.value);
    };
  
    return (
      <div>
        <input 
          type="text" 
          onChange={handleInputChange} 
          placeholder="Escribí pa..." 
        />
      </div>
    );
  };
  
  export default Input;