import React from "react";
import {useNavigate} from "react-router-dom"

const ProfileTG = () => {
  const nav = useNavigate();

const handlePendingreq = () => {
  nav("/PendingLicenses")
};

const handleMuseumInfo = () => {
  nav('/MuseumInfo')
};

const handleIndoorLoc = () => {
  nav('/IndoorLocMain')
};
const handleHome = () => {
  nav('/home')
};

const Lefthalf = () => {
  return (
    <div style={styles.lefthalfContainer}>
      <div style={styles.lefthalf}>
      <img style={styles.profilephoto} src={"./images/Formal.png"} alt='Profile photo'/>
      </div>
    </div>
  );
};

const Righthalf = () => {
  return (
    <div style={styles.righthalfContainer}>
      <div style={styles.righthalf}>
        <button style={styles.button} onClick={handlePendingreq}>Pending licenses</button>
        <button style={styles.button} onClick={handleMuseumInfo}>Museum info</button>
        <button style={styles.button} onClick={handleIndoorLoc}>Indoor localization management</button>
      </div>
    </div>
  );
};;


  return (
    <div style={styles.container}>
      <div style={styles.topbar}>
        <button style={styles.homeButton} onClick={handleHome}>Home</button>
        <label style={styles.pagename}>User2 - Tour guide</label>
        <img style={styles.logoimage} src={"./images/Logo.png"} alt='first image'/>
      </div>
      <div style={{width: '100%'}}>
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
    cursor: 'pointer',
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
  lefthalfContainer: {
    alignSelf: 'left',
    justifyContent: 'left',
    alignItems: 'left',
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    float: 'left',
    borderRight: '1px solid black',
    height: '400px',
    //borderLeft: '4px solid reds',
  },
  lefthalf: {
    alignSelf: 'left',
    justifyContent: 'left',
    alignItems: 'left',
    display: 'flex',
    flexDirection: 'row',
   // width: '20%',
    float: 'left',
   // borderRight: '1px solid black',
    //borderLeft: '4px solid reds',
  },
  righthalfContainer: {
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    float: 'right',
    verticalAlign: 'center',
    justifyContent: 'center',
  },
  righthalf: {
    width: '75%',
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
  homeButton: {
    backgroundColor: '#684326',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    marginRight: '15px',
    cursor: 'pointer',

    //margin: '10px', // Adjust margin as needed
  },
  pagename:{
    fontweight: 'bold',
    fontSize: '25px',
    margin: '20px 0px 0px 5px',
    paddingLeft: '15px',
    borderLeft: '1px solid black',
    marginLeft: '5px',
  },
  profilephoto: {
    width: '200px',
    aspectRatio: '1',
    borderRadius: '100px'
  },
};

export default ProfileTG;
