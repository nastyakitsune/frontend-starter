import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth as authActions } from "../../store/symbiotes/actions";
import { auth as authSelectors } from "../../store/selectors";

export const Login = () => {
  const isLogged = useSelector(authSelectors.isLoggedUser);

  const dispatch = useDispatch();

  const onLoginBtnClick = () => dispatch(authActions.login());

  return (
    <div>
      <div>Hello there!</div>
      {!isLogged ? (
        <button onClick={onLoginBtnClick}>Login</button>
      ) : (
        <>
          <div>You are logged</div>
          <Link to={`/dashboard`}>Go to Dashboard</Link>
        </>
      )}
    </div>
  );
};
