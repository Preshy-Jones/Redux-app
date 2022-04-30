import { useSelector, useDispatch } from "react-redux";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import { increment, decrement, loading } from "./store/actions";
import { ToastContainer, toast, bounce, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Counter from "./components/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Login from "./components/login/Login";
import { useEffect } from "react";
import { loadUser } from "./store/actions/authActions";

function App() {
  // toast.success("Preshy Jones rules", {
  //   toastId: "success",
  // });
  // toast.error("Warning", { toastId: "error" });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Counter />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Post />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
