import React from "react";
import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/actions/authActions";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(signOut());
    navigate("/login");
  };

  // useEffect(() => {
  //   Axios.get("https://skyewalletapi.herokuapp.com/getauthenticateduserdata", {
  //     headers: {
  //       Authorization: "Bearer" + " " + localStorage.getItem("token"),
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       setUserAuthenticated(true);
  //       setUserData(response.data);
  //       setAuthenticationStatus(true);
  //       console.log(userData);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       //        console.log("hello");
  //       console.log(error);
  //       setUserAuthenticated(false);
  //       setAuthenticationStatus(true);
  //       //        setErrorMessage(error.response.data.message);
  //     });
  // }, []);
  return (
    <div className="flex pt-6 pb-4 md:px-28 bg-background">
      <a className="mr-auto" href="/">
        <img src="https://skyewallet.com/img/skye-logo-white.svg" alt="" />
      </a>
      <ul className="flex text-white">
        <li className="mr-8">
          <Link to="/posts">Posts</Link>
        </li>
        <li className="mr-8">
          <Link to="/">Counter</Link>
        </li>
        {auth._id ? (
          <div className="flex">
            <li className="mr-8">Logged in as {auth.name}</li>
            <li className="cursor-pointer" onClick={logout}>
              Log out
            </li>
          </div>
        ) : (
          <div className="flex">
            <li className="mr-8">
              <Link to="/login">Login</Link>
            </li>

            <li className="mr-8">
              <Link to="/signup">SignUp</Link>
            </li>
          </div>
        )}

        {/* <li className="mr-8">
          <a href="#">
            {" "}
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default NavBar;
