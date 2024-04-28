import { useState } from 'react';
import React from "react";
import Modal from 'react-modal';

const Request = () => {

  return (
    <div style={styles.request}>
      <div style={styles.field}>
        <label>Museum name: </label>
        <input style={styles.nameentry}/>
      </div>
      <div style={styles.field}>
        <label>Tickets prices:</label>
        <input style={styles.prices} placeholder='Foreign'/>
        <input style={styles.prices} placeholder='Egyptian adult'/>
        <input style={styles.prices} placeholder='Egyptian student'/>
      </div>
      <div style={styles.field}>
        <label style={styles.name}>Museum info: </label>
        <textarea style={styles.infoentry}/>
      </div>
      <div style={styles.field}>
        <div style={styles.photos}>
          <div>
            <label>Museum photo: </label>
            <button>Attach file</button>
          </div>

          <div>
            <label>Museum map: </label>
            <button>Attach file</button>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};



const Addmuseum = () => {
  return (
    <div style={styles.container}>
      <div style={styles.topbar}>
        <button style={styles.homeButton}>Home</button>
        <label style={styles.pagename}>Add museum</label>
        <img style={styles.logoimage} src={"./images/Logo.png"} alt='first image'/>
      </div>
      <div>
        <Request />
      </div>
      <div style={styles.Bottombar}>
        <div>
          <button style={styles.homeButton}>Add</button>
          <button style={styles.cancel}>Cancel</button>
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
    width: '10%', 
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
  },
  Bottombar: {
    height: '100px',
    marginTop: '20px',
  },
  request: {
    display: 'flex',
    width: '100%',
   // alignItems: 'center',
    flexDirection: 'column',
    verticalAlign: 'flex-start',
  },
  name: {
    verticalAlign: 'top',
  },
  photos: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  accept: {
    backgroundColor: '#1B8600',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    marginRight: '15px',
  },
  cancel:{
    backgroundColor: '#484747',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    marginRight: '15px',
  },
  field:{
    fontweight: 'bold',
    marginBottom: '5px'
  },
  prices:{
    margin: '5px',
  },
  nameentry:{
    width: '528px',
  },
  infoentry:{
    width: '536px',
    height: '100px',
  },
};

export default Addmuseum;
