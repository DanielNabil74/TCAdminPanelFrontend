import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import server from "../elserver";

const Welcomepage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = async () => {
    const payload = { id, password };

    try {
      const response = await fetch(`${server}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Login successful:", result);

        localStorage.setItem("token", result.token);

        nav("/home", { replace: true });
      } else {
        const error = await response.json();
        console.error("Login failed:", error.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div style={styles.container}>
      <img style={styles.logoimage} src={"./images/Logo.png"} alt="first image" />
      <div>
        <label htmlFor="id">ID</label>
      </div>
      <div style={styles.textentry}>
        <input
          type="number"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <label style={styles.textentrylabel} htmlFor="password">
          Password
        </label>
      </div>
      <div style={styles.textentry}>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button style={styles.loginbutton} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    alignSelf: "center",
    verticalAlign: "center",
    height: "100vh",
  },
  login: {
    color: "black",
  },
  textentry: {
    backgroundColor: "#F1EBEB",
    margin: "10px",
    marginTop: "5px",
  },
  textentrylabel: {
    color: "black",
  },
  loginbutton: {
    height: "30px",
    width: "100px",
    borderRadius: "10px",
    backgroundColor: "#684326",
    color: "white",
    fontsize: 100,
    marginTop: "10px",
  },
  logoimage: {
    width: "200px", // Adjust width as needed
    height: "auto", // Maintain aspect ratio
    marginBottom: "20px",
  },
};

export default Welcomepage;
