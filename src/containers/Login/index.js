import React, { useState } from "react";

export const Login = () => {
  const [logged, setLogged] = useState(false);

  return (
    <div>
      <div>Hello there!</div>
      {logged ? (
        <div>You are logged!</div>
      ) : (
        <button onClick={setLogged(!logged)}>Login</button>
      )}
    </div>
  );
};
