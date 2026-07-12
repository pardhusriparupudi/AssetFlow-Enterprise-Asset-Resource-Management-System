import { useState } from "react";
import "../login.css";
function Login({ setLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleLogin() {
    alert("Inside handleLogin");

    console.log("Email:", email);
    console.log("Password:", password);

    if (email === "" || password === "") {
        alert("Please enter Email and Password");
        return;
    }

    alert("Before setLoggedIn");

    setLoggedIn(true);

    alert("After setLoggedIn");
}
  return (
    <div className="login-container">

      <div className="login-box">

        <h1>AssetFlow</h1>

        <h3>Enterprise Asset Management System</h3>

        <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <button
        onClick={() => {
            alert("Button Clicked");
            handleLogin();
            }}
            >
                Login
                </button>

        <p>Forgot Password?</p>

      </div>

    </div>
  );
}

export default Login;