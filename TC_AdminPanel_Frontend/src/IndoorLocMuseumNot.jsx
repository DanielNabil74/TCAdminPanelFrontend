import React from "react";
import {useNavigate} from "react-router-dom"

const IndoorLocMuseum = () => {
    const nav = useNavigate();
    const handleHome = () => {
      nav('/home')
    };
    const Lefthalf = () => {
      return (
        <div style={styles.lefthalf}>
          <div  style={styles.Message}>
            <label style={styles.prices}>This museum currently doesn’t support indoor localization</label>
          </div>
          <div style={styles.Message}>
            <label style={styles.prices}>(add rooms to enable it)</label>
          </div>
        </div>
      );
    };
    const Righthalf = () => {
      return (
        <div style={styles.righthalf}>
          <input style={styles.searchbar} placeholder='search'/>
          <div style={styles.roomsContainer}>

          </div>
          <button style={styles.greenButton}>Add rooms</button>
          <button style={styles.greyButton}>Enable</button>
        </div>
      );
    };;


  return (
    <div style={styles.container}>
      <div style={styles.topbar}>
        <button style={styles.homeButton} onClick={handleHome}>Home</button>
        <label style={styles.pagename}>Pyramids</label>
        <img style={styles.logoimage} src={"./images/Logo.png"} alt='first image'/>      </div>
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
  greenButton:{
    height: '20px',
    width: '90px',
    borderRadius: '10px',
    backgroundColor: '#008636',
    color: 'white',
    margin: '5px 5px 0px 5px',
    fontSize: '10px',
    border: '1px solid black'
  },
  greyButton:{
    height: '20px',
    width: '90px',
    borderRadius: '10px',
    backgroundColor: '#5C635F',
    color: 'white',
    margin: '5px 5px 0px 5px',
    fontSize: '10px',
    border: '1px solid black'
  },
  button:{
    height: '20px',
    width: '90px',
    borderRadius: '10px',
    backgroundColor: '#979B99',
    color: 'black',
    marginTop: '5px',
    fontSize: '10px',
    border: '1px solid black'
  },
  current:{
    height: '20px',
    width: '90px',
    borderRadius: '10px',
    backgroundColor: '#F1EBEB',
    color: 'black',
    marginTop: '5px',
    fontSize: '10px',
    border: '1px solid black'
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
    width: '85%',
    float: 'left',
    display: 'flex',
    flexDirection: 'column',
    verticalAlign: 'flex-start',
  },
  righthalf: {
   // paddingTop: '100%',
    width: '10%',
    height: '100 vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    float: 'right',
    verticalAlign: 'center',
    justifyContent: 'center',
    paddingLeft: '5px',
    borderLeft: '1px solid black',
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
  searchbar:{
    display: 'flex',
    width: '95px',
    justifyContent: 'left',
    flexDirection: 'row',
    marginBottom: '10px',
  },
  roomsContainer:{
    backgroundColor: '#DDDADA',
    padding: '5px',
    width: '90px',
    height: '200px',
  },
  homeButton: {
    backgroundColor: '#684326',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    marginRight: '15px',
  },
  pagename:{
    fontweight: 'bold',
    fontSize: '25px',
    margin: '20px 0px 0px 5px',
    paddingLeft: '15px',
    borderLeft: '1px solid black',
    marginLeft: '5px',
  },
  field:{
    fontweight: 'bold',
    marginBottom: '5px',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  Message:{
    width: '95%',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    verticalAlign: 'center',
    alignItems: 'center',
  },
  prices:{
   // margin: '0px 50px 0px 0px',
   // fontWeight: 'bold',
  },
  nameentry:{
    width: '528px',
  },
  infoentry:{
    width: '536px',
    height: 'auto',
    marginLeft: '5px',
  },
  usersContainer: {
    backgroundColor: '#D9D9D9',
    height: '200px',
    //alignSelf: 'center',
  },
  Tourist:{
    height: '20px',
    width: '140px',
    borderRadius: '8px',
    backgroundColor: '#979B99',
    color: 'black',
    margin: '5px',
    fontSize: '10px',
    border: '1px solid black'
  },
  Tourguide:{
    height: '20px',
    width: '140px',
    borderRadius: '8px',
    backgroundColor: '#E0DDDD',
    color: 'black',
    margin: '5px',
    fontSize: '10px',
    border: '1px solid black'
  },
};

export default IndoorLocMuseum;
