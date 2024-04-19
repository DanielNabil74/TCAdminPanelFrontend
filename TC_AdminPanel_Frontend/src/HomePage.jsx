import React from "react";

const Lefthalf = () => {
  return (
    <div style={styles.lefthalf}>
      <h1>Welcome</h1>
      <h1 style={styles.username}>John Doe</h1>
    </div>
  );
};

const Righthalf = () => {
  return (
    <div style={styles.righthalf}>
      <button style={styles.button}>Pending licenses</button>
      <button style={styles.button}>Museum info</button>
      <button style={styles.button}>Indoor localization management</button>
    </div>
  );
};;
//export default Lefthalf;


const Homepage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.topbar}>
        <img style={styles.logoimage} src={"./images/Logo.png"} alt='first image'/>
      </div>
      <div>
        <Lefthalf />
        <Righthalf />
      </div>
      <div style={styles.Bottombar}>

      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
    display: 'flex',
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    verticalAlign: 'center',
  //  height: '100vh',
    width: '100%',
  },
  button:{
    height: '75px',
    width: '250px',
    
    borderRadius: '10px',
    backgroundColor: '#684326',
    color: 'white',
    marginTop: '30px',
    fontSize: '20px',
  },
  logoimage:{
    width: '10%', 
    height: 'auto', 
    marginBottom: '20px',
    float: 'right',
    alignSelf: 'right',
    justifyContent: 'right',
    flexDirection: 'row',
  },
  lefthalf: {
    alignSelf: 'left',
    width: '55%',
   // height: '100vh',
    float: 'left',
   // flex: 1,
    paddingTop: '100px',
    paddingBottom: '100px',
    //flexDirection: 'column',
    borderRight: '1px solid black',
  },
  righthalf: {
   // paddingTop: '100%',
    width: '40%',
    height: '100 vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    float: 'right',
    verticalAlign: 'center',
    justifyContent: 'center',
  },
  topbar: {
    flexDirection: 'row',
    width: '100%',
  },
  Bottombar: {
    height: '100px',
  },
  username: {
    color: '#684326',
  },
};

export default Homepage;
