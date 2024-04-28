import { useState } from 'react';
import React from "react";
import Modal from 'react-modal';

const PopupComponent = ({ isOpen, onClose }) => {
  return (
    <Modal style={styles.popupcontainer} isOpen={isOpen} onRequestClose={onClose}>
        <div style={styles.popupcontainerhead}><text style={styles.popupcontainerhead}>Are you sure you want to delete this museum?</text></div>
        <div style={styles.popupcontainerbutton}>
          <button style={{margin: '5px', backgroundColor: '#860000',color: 'white'}} onClick={onClose}>Yes</button>
          <button style={{margin: '5px', backgroundColor: '#008636',color: 'white'}} onClick={onClose}>No</button>
        </div>
    </Modal>
  );
};

const Request = () => {
  
  return (
    <div style={styles.request}>
      <div style={styles.field}>
        <label style={{fontWeight:'bold',marginRight:'5px'}}>Museum name:</label>
        <label>Pyramids</label>
      </div>
      <div style={styles.field}>
        <label style={{fontWeight:'bold',marginRight:'5px'}}>Tickets prices:</label>
        <label style={styles.prices}>Foreign: 100$</label>
        <label style={styles.prices}>Egyptian adult: 50 EGP</label>
        <label style={styles.prices}>Egyptian student: 10 EGP</label>
      </div>
      <div style={styles.field}>
        <div style={styles.name}><label>Museum info: </label></div>
        <div style={styles.infoentry}><text>The Egyptian pyramids are ancient masonry structures located in Egypt. Sources cite at least 118 identified "Egyptian" pyramids. Approximately 80 pyramids were built within the Kingdom of Kush, now located in the modern country of Sudan. Of those located in modern Egypt, most were built as tombs for the country's pharaohs and their consorts during the Old and Middle Kingdom periods.</text>
        </div>
      </div>
      <div style={styles.field}>
        <div style={styles.photos}>
          <div>
            <label style={styles.name}>Museum photo: </label>
            <img style={styles.image} src='./images/sample.png'/>
          </div>

          <div>
            <label style={styles.name}>Museum map: </label>
            <img style={styles.image} src='./images/sample.png'/>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};



const Museum = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.topbar}>
        <button style={styles.homeButton}>Home</button>
        <label style={styles.pagename}>Pyramids</label>
        <img style={styles.logoimage} src={"./images/Logo.png"} alt='first image'/>
      </div>
      <div>
        <Request />
      </div>
      <div style={styles.Bottombar}>
        <div>
          <button style={styles.Edit}>Edit</button>
          <button onClick={openPopup} style={styles.cancel}>Delete</button>
          <PopupComponent isOpen={isPopupOpen} onClose={closePopup} style={styles.popupcontainer}/>
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
  Edit:{
    backgroundColor: '#008636',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    marginRight: '15px',
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
    fontWeight: 'bold',
    marginRight: '5px',
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
    backgroundColor: '#860000',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    marginRight: '15px',
  },
  field:{
    fontweight: 'bold',
    marginBottom: '5px',
    display: 'flex',
    flexDirection: 'row',
  },
  prices:{
    margin: '0px 25px',
  },
  nameentry:{
    width: '528px',
  },
  infoentry:{
    width: '536px',
    height: 'auto',
    marginLeft: '5px',
  },
  image: {
    width: '100px',
    height: 'auto',
  },
  popupcontainer: {
    content: {
      width: '200px', // Adjust the width as needed
      height: '80px', // Adjust the height as needed
      margin: 'auto', // Center the modal horizontally
    },
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
    alignItems: 'center',
    display: 'inline-block',
    fontSize: '12px',
    textAlign: 'center',
  },
};

export default Museum;
