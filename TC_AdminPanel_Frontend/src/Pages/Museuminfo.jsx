import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import server from '../elserver';

const Museuminfo = () => {
  const [museums, setMuseums] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const nav = useNavigate();

  useEffect(() => {
    const fetchMuseums = async () => {
      try {
        const response = await fetch(`${server}/museums`); 
        if (response.ok) {
          const data = await response.json();
          setMuseums(data);
        } else {
          console.error('Failed to fetch museums:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching museums:', error);
      }
    };

    fetchMuseums();
  }, []); 

  const handleMuseum = (museumId) => {
    nav(`/Museum/${museumId}`,{museumId});
  };

  const handleHome = () => {
    nav("/home");
  };

  const handleAdd = () => {
    nav("/AddMuseum");
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`${server}/searchMuseum/${searchInput}`);
      if (response.ok) {
        const data = await response.json();
        setMuseums(data.museums);
      } else {
        console.error('Failed to fetch search results:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.topbar}>
        <button style={styles.homeButton} onClick={handleHome}>Home</button>
        <label style={styles.pagename}>Museum info</label>
        <img style={styles.logoimage} src={"./images/Logo.png"} alt='first image'/>
      </div>

      <div style={styles.firstline}>
        <div style={styles.searchbar}>
          <input
            placeholder='Search'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div style={styles.addButtonContainer}><button style={styles.addbutton} onClick={handleAdd}>Add</button></div>
      </div>

      <div style={styles.Bottombar}>
        {museums.map((museum) => (
          <div key={museum.musid} style={styles.museumContainer} onClick={() => handleMuseum(museum.musid)}>
            <img style={styles.licenseimage} src={server + '/' + museum.musuem_image || "../../images/sample.png"} alt='sample image' />
            <text style={styles.museumname}>{museum.museum_name}</text>
          </div>
        ))}
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
    // height: '100px',
    // width: '100vh',
     flexDirection:'row',
     marginTop: '10px',
     display: 'flex',
     width: '100%',
     flexWrap: 'wrap',
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
    width: '440px',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: '100px',
    cursor: 'pointer',
   // justifyContent: 'center',
    margin: '3px',
    backgroundColor: '#E0DDDD',
    borderRadius: '5px',
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

export default Museuminfo;
