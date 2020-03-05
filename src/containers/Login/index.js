import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [logged, setLogged] = useState(false);

  return (
    <div>
      <div>Hello there!</div>
      {!logged ? (
        <button onClick={() => setLogged(!logged)}>Login</button>
      ) : (
        <>
          <div>You are logged</div>
          <Link to={`/dashboard`}>Go to Dashboard</Link>
        </>
      )}
    </div>
  );
};
