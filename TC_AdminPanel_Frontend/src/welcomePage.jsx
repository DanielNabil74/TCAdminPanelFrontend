import React from "react";
import {useNavigate} from "react-router-dom"



const Welcomepage = () => {
  
  const nav = useNavigate();


  const handleLogin=() => {
    nav("/home")
  };

  return (
    <div style={styles.container}>
      <img style={styles.logoimage} src={"./images/Logo.png"} alt='first image'/>
      <div>
        <label htmlFor="">ID</label>
      </div>
      <div style={styles.textentry}>
        <input type="number" />
      </div>
      <div>
        <label style={styles.textentrylabel} htmlFor=""> Password </label>
      </div>
      <div style={styles.textentry}>
        <input type="password" />
      </div>
      <button style={styles.loginbutton} onClick={() => handleLogin()}>login</button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    verticalAlign: 'center',
    height: '100vh'
  },
  login: {
    color: 'black',
  },
  textentry: {
    backgroundColor: '#F1EBEB',
    margin: '10px',
    marginTop: '5px',
  },
  textentrylabel: {
    color: 'black',
  },
  loginbutton:{
    height: '30px',
    width: '100px',
    borderRadius: '10px',
    backgroundColor: '#684326',
    color: 'white',
    fontsize: 100,
    marginTop: '10px',
  },
  logoimage:{
    width: '200px', // Adjust width as needed
    height: 'auto', // Maintain aspect ratio
    marginBottom: '20px',
  },
};
export default Welcomepage;
