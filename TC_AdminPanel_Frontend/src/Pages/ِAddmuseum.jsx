import { useState } from 'react';
import React from "react";
import { useNavigate } from 'react-router-dom';
import server from '../elserver';

const Addmuseum = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    museum_name: '',
    ticket_tourist: '',
    ticket_adult: '',
    ticket_student: '',
    museinfo: '',
  });
  const [museumPhoto, setMuseumPhoto] = useState(null);
  const [museumMap, setMuseumMap] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (type === 'photo') {
      setMuseumPhoto(file);
    } else if (type === 'map') {
      setMuseumMap(file);
    }
  };

  const handleHome = () => {
    nav("/home");
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to exit?")) {
      nav("/MuseumInfo");
    }
  };

  const handleAdd = async () => {
    if (window.confirm("Are you sure you want to add this museum?")) {
      try {
        // Add Museum
        const addMuseumResponse = await fetch(`${server}/addMuseum`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const addMuseumResult = await addMuseumResponse.json();
        console.log('Add Museum Result:', addMuseumResult);

        // Update Map
        const mapFormData = new FormData();
        mapFormData.append('image', museumMap);
        const updateMapResponse = await fetch(`${server}/updateMap/${formData.museum_name}`, {
          method: 'PUT',
          body: mapFormData,
        });
        const updateMapResult = await updateMapResponse.text();
        console.log('Update Map Result:', updateMapResult);

        // Update Image
        const imageFormData = new FormData();
        imageFormData.append('image', museumPhoto);
        const updateImageResponse = await fetch(`${server}/updateImage/${formData.museum_name}`, {
          method: 'PUT',
          body: imageFormData,
        });
        const updateImageResult = await updateImageResponse.text();
        console.log('Update Image Result:', updateImageResult);

        alert('Museum added successfully!');
        nav("/MuseumInfo");
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Check console for details.');
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.topbar}>
        <button style={styles.homeButton} onClick={handleHome}>Home</button>
        <label style={styles.pagename}>Add museum</label>
        <img style={styles.logoimage} src={"./images/Logo.png"} alt='first image'/>
      </div>
      <div style={styles.request}>
        <div style={styles.field}>
          <label>Museum name: </label>
          <input
            name="museum_name"
            style={styles.nameentry}
            value={formData.museum_name}
            onChange={handleChange}
          />
        </div>
        <div style={styles.field}>
          <label>Tickets prices:</label>
          <input
            name="ticket_tourist"
            style={styles.prices}
            placeholder='Foreign'
            value={formData.ticket_tourist}
            onChange={handleChange}
          />
          <input
            name="ticket_adult"
            style={styles.prices}
            placeholder='Egyptian adult'
            value={formData.ticket_adult}
            onChange={handleChange}
          />
          <input
            name="ticket_student"
            style={styles.prices}
            placeholder='Egyptian student'
            value={formData.ticket_student}
            onChange={handleChange}
          />
        </div>
        <div style={styles.field}>
          <label style={styles.name}>Museum info: </label>
          <textarea
            name="museinfo"
            style={styles.infoentry}
            value={formData.museinfo}
            onChange={handleChange}
          />
        </div>
        <div style={styles.field}>
          <div style={styles.photos}>
            <div>
              <label>Museum photo: </label>
              <input type="file" onChange={(e) => handleFileChange(e, 'photo')} />
            </div>
            <div>
              <label>Museum map: </label>
              <input type="file" onChange={(e) => handleFileChange(e, 'map')} />
            </div>
          </div>
        </div>
      </div>
      <div style={styles.Bottombar}>
        <div>
          <button style={styles.homeButton} onClick={handleAdd}>Add</button>
          <button style={styles.cancel} onClick={handleCancel}>Cancel</button>
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
  },
  homeButton: {
    backgroundColor: '#684326',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    marginRight: '15px',
  },
  pagename: {
    fontWeight: 'bold',
    fontSize: '25px',
    margin: '20px 0px 0px 5px',
    paddingLeft: '15px',
    borderLeft: '1px solid black',
    marginLeft: '5px',
  },
  logoimage: {
    width: '10%', 
    height: 'auto', 
    marginBottom: '20px',
    float: 'right',
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
    flexDirection: 'column',
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
  cancel: {
    backgroundColor: '#484747',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    marginRight: '15px',
  },
  field: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  prices: {
    margin: '5px',
  },
  nameentry: {
    width: '528px',
  },
  infoentry: {
    width: '536px',
    height: '100px',
  },
};

export default Addmuseum;
