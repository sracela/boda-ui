import React, { useState } from "react";
import { auth } from "../../firebase/clientApp";
import {
  // useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

// https://firebase.google.com/docs/auth/web/google-signin
// https://github.com/csfrequency/react-firebase-hooks/tree/edab3f3f3b5ec01c8aafcc6096755dfcc69e4408/auth#social-login-example
const GoogleSignInCustom = () => {
  //   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (error) {
    console.log(error);
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate("/home");
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "250px",
        justifyContent: "center",
        margin: "0 auto",
        gap: "1rem",
      }}
    >
      {" "}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        class="de-button medium"
        onClick={() => signInWithEmailAndPassword(email, password)}
      >
        <span>ENTRAR</span>
      </button>
    </div>
  );
};

export default GoogleSignInCustom;
