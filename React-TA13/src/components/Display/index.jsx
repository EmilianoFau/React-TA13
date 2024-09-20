import React, { useContext } from "react";
import { UserContext } from '../../Context';

const Display = () => {
    const { username } = useContext(UserContext);
  
    return (
      <div>
        <h2>Nombre del Usuario: {username}</h2>
      </div>
    );
};

export default Display;
