import { useState } from 'react';
import React from "react";
import Modal from 'react-modal';
import {useNavigate} from "react-router-dom"


const PendingLicenses = () => {
    const PopupComponent = ({ isOpen, onClose }) => {
      return (
        <Modal style={styles.popupcontainer} isOpen={isOpen} onRequestClose={onClose}>
            <div style={styles.popupcontainerhead}><h2>Reason of rejection</h2></div>
            <div><button style={styles.popupcontainerbutton}>Bad quality</button></div>
            <div><button style={styles.popupcontainerbutton}>Expired license</button></div>
            <div><button style={styles.popupcontainerbutton}>Incomplete photo</button></div>
            <div style={{display: 'flex',justifyContent:'center'}}><label htmlFor={1}>other reason</label></div>
            <div style={styles.popupcontainerbutton}><input type="text"/></div>
            <div style={styles.popupcontainerbutton}>
              <button style={{margin: '5px'}} onClick={onClose}>Submit</button>
              <button style={{margin: '5px'}} onClick={onClose}>Close</button>
            </div>
        </Modal>
      );
    };
    
    const Request = () => {
      const [isPopupOpen, setIsPopupOpen] = useState(false);
    
      const openPopup = () => {
        setIsPopupOpen(true);
      };
    
      const closePopup = () => {
        setIsPopupOpen(false);
      };
    
      return (
        <div style={styles.request}>
          <div>
            <text style={styles.name}>Tour guide name: John Doe</text>
          </div>
          <div style={styles.licenseimage}>
            <img style={styles.licenseimage} src={"./images/sample.png"} alt='sample image'/>
          </div>
          <div>
            <button style={styles.accept}>Accept</button>
            <button onClick={openPopup} style={styles.decline}>Decline</button>
            <PopupComponent isOpen={isPopupOpen} onClose={closePopup} style={styles.popupcontainer}/>
          </div>
        </div>
      );
    };

    const nav=useNavigate();

    const handleAccept = () => {

    };
    const handleDecline = () => {
      
    };
    const handlNext = () => {
      
    };
    const handlPrevious = () => {
      
    };
    const handlHome = () => {
      nav("/home")
    };

  return (
    <div style={styles.container}>
      <div style={styles.topbar}>
        <button style={styles.homeButton} onClick={handlHome}>Home</button>
        <label style={styles.pagename}>Pending licenses</label>
        <img style={styles.logoimage} src={"./images/Logo.png"} alt='first image'/>
      </div>
      <div>
        <Request />
      </div>
      <div style={styles.Bottombar}>
        <div>
          <button style={styles.homeButton}>Previous</button>
          <button style={styles.homeButton}>Next</button>
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
    marginTop: '50px',
  },
  request: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    verticalAlign: 'flex-start',
  },
  name: {
    alignSelf: 'center',

  },
  licenseimage: {
    width: '75%',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px',
  },
  accept: {
    backgroundColor: '#1B8600',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    marginRight: '15px',
  },
  decline:{
    backgroundColor: '#860000',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    marginRight: '15px',
  },
  popupcontainer: {
    content: {
      width: '200px', // Adjust the width as needed
      height: '250px', // Adjust the height as needed
      margin: 'auto', // Center the modal horizontally
    }
  },
  popupcontainerbutton:{
    alignSelf: 'center',
    justifyContent: 'center',
    margin: '5px',
    display: 'flex',
    width: '95%',
  },
  popupcontainerhead:{
    justifyContent: 'center',
    alignSelf: 'center',
    display: 'flex',
    fontSize: '12px',

  },
};

export default PendingLicenses;
