/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/authActions";
import SC from "../../themes/StyledComponents";
import "./Nav.scss";

export default function Nav() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    return <Navigate to="/" />;
  };

  return (
    <SC.nav className="nav">
      <span>Nav</span>
      <button onClick={() => handleLogout()}>Logout</button>
    </SC.nav>
  );
}
