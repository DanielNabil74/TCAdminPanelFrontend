import { useState } from 'react';
import React from "react";
import Modal from 'react-modal';
import {useNavigate} from "react-router-dom"


const IndoorLocMain = () => {
    const Pressable = ({ onPress, children }) => {
      const handlePress = () => {
        if (onPress) {
          onPress();
        }
      };
    
      return (
        <div onClick={handlePress} style={{ cursor: 'pointer' }}>
          {children}
        </div>
      );
    };

    const nav = useNavigate();

    const handleMuseum = () => {
      nav("/IndoorLocMuseum")
    };
    const handleMuseumNot = () => {
      nav("/IndoorLocMuseumNot")
    };
    const handleHome = () => {
      nav("/home")
    };
  return (
    <div style={styles.container}>
      <div style={styles.topbar}>
        <button style={styles.homeButton} onClick={handleHome}>Home</button>
        <label style={styles.pagename}>Indoor localization management</label>
        <img style={styles.logoimage} src={"./images/Logo.png"} alt='first image'/>
      </div>

      <div style={styles.firstline}>
          <div style={styles.searchbar}><input placeholder='search'/></div>
      </div>

      <div style={styles.Bottombar}>
        <div style={{display: 'flex', width:'100%'}}>
          <Pressable style={styles.museumContainer} onPress={handleMuseum}>
            <button style={styles.museumContainer}>
              <img style={styles.licenseimage} src={"./images/sample.png"} alt='sample image'/> 
              <text style={styles.museumname}> Grand Egyptian museum</text>
              </button>
          </Pressable>
          <Pressable style={styles.museumContainer} onPress={handleMuseumNot}>
            <button style={styles.museumContainer}>
              <img style={styles.licenseimage} src={"./images/sample.png"} alt='sample image'/> 
              <text style={styles.museumname}> Pyramids </text>
              </button>
          </Pressable>
        </div>
        <div style={{display: 'flex', width:'100%'}}>
          <Pressable style={styles.museumContainer} onPress={handleMuseum}>
            <button style={styles.museumContainer}>
              <img style={styles.licenseimage} src={"./images/sample.png"} alt='sample image'/> 
              <text style={styles.museumname}> Coptic museum</text>
              </button>
          </Pressable>
          <Pressable style={styles.museumContainer} onPress={handleMuseum}>
            <button style={styles.museumContainer}>
              <img style={styles.licenseimage} src={"./images/sample.png"} alt='sample image'/> 
              <text style={styles.museumname}> National museum of Egyptian civilizations </text>
              </button>
          </Pressable>
        </div>
      </div>
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
    //alignSelf: 'center',
  //  verticalAlign: 'center',
  },
  homeButton: {
    backgroundColor: '#684326',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    marginRight: '15px',
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
    width: '80px', 
    height: 'auto', 
    marginBottom: '20px',
    float: 'right',
    alignSelf: 'right',
    justifyContent: 'right',
    flexDirection: 'row',
  },
  topbar: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  Bottombar: {
    height: '100px',
    marginTop: '10px',
  },
  request: {
    display: 'flex',
    width: '100%',
    //alignItems: 'center',
    //flexDirection: 'column',
    //verticalAlign: 'flex-start',
  },
  name: {
    alignSelf: 'center',

  },
  licenseimage: {
    width: '25%',
    display: 'flex',
    alignSelf: 'left',
    justifyContent: 'flex-start',
    alignItems: 'left',
    margin: '5px',
  },
  museumContainer: {
    width: '100vh',
    alignItems: 'center',
    display: 'flex',
    height: '100px',
    cursor: 'pointer',
   // justifyContent: 'center',
    margin: '3px',
   // borderRadius: '5px',
  //  border: '0px'
  },
  museumname:{
    fontSize: '20px',
    fontweight: 'bold',
    marginLeft: '5px',
  },
  searchbar:{
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'row',
    marginLeft: '10px',
  },
  addButtonContainer: {
    marginLeft: 'auto',
  },
  addbutton:{
    backgroundColor: '#684326',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    marginRight: '15px',
    justifyContent: 'flex-end',
    display: 'flex',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  firstline: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
};

export default IndoorLocMain;
