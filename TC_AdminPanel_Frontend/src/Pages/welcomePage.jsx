import React from "react";

const Welcomepage = () => {
  const styles = {
    container: {
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    login: {
      color: 'black',
    },
    textentry: {
      backgroundColor: '#808080',
      margin: '10px',
      padding: '5px',
    },
    textentrylabel: {
      color: 'black',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.login}>Login</h1>
      <div style={styles.textentry}>
        <input type="number" />
        <label htmlFor="">Your ID</label>
      </div>
      <div style={styles.textentry}>
        <input type="number" />
        <label style={styles.textentrylabel} htmlFor="">
          Your password
        </label>
      </div>
    </div>
  );
};

export default Welcomepage;
