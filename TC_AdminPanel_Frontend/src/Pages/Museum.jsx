import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import server from '../elserver';

const Museum = () => {
  const { musid } = useParams();
  const [museumData, setMuseumData] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const fetchMuseumData = async () => {
      try {
        const response = await fetch(`${server}/museum/${musid}`);
        if (!response.ok) {
          throw new Error('Museum not found');
        }
        const data = await response.json();
        setMuseumData(data.value);
      } catch (error) {
        console.error("Error fetching museum:", error.message);
      }
    };
    fetchMuseumData();
  }, [musid]);

    // const openPopup = () => {
    //     setIsPopupOpen(true);
    // };

    // const closePopup = () => {
    //     setIsPopupOpen(false);
    // };

    const handleHome = () => {
        nav("/home");
    };

    const handleEdit = () => {
        nav("/AddMuseum");
    };

    const handleDelete = () => {
        
    };

    return (
      <div style={styles.container}>
        <div style={styles.topbar}>
          <button style={styles.homeButton} onClick={handleHome}>Home</button>
          <label style={styles.pagename}>{museumData ? museumData.museum_name : ''}</label>
          <img style={styles.logoimage} src={"../../images/Logo.png"} alt='first image'/>
        </div>
        <div>
          {museumData && (
            <div style={styles.request}>
              <div style={styles.field}>
                <label style={{ fontWeight: 'bold', marginRight: '5px' }}>Museum name:</label>
                <label>{museumData.museum_name}</label>
              </div>
              <div style={styles.field}>
                <label style={{ fontWeight: 'bold', marginRight: '5px' }}>Tickets prices:</label>
                <label style={styles.prices}>Foreign: {museumData.ticket_tourist}</label>
                <label style={styles.prices}>Egyptian adult: {museumData.ticket_adult}</label>
                <label style={styles.prices}>Egyptian student: {museumData.ticket_student}</label>
              </div>
              <div style={styles.field}>
                <div style={styles.name}><label>Museum info:</label></div>
                <div style={styles.infoentry}><text>{museumData.museinfo}</text></div>
              </div>
              <div style={styles.field}>
                <div style={styles.photos}>
                  <div>
                    <label style={styles.name}>Museum photo:</label>
                    <img style={styles.image} src={`${server}/${museumData.musuem_image}`} alt='Museum photo'/>
                  </div>
                  <div>
                  <label style={styles.name}>Museum map:</label>
                  <img style={styles.image} src={`${server}/${museumData.map}`} alt='Museum map'/>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div style={styles.Bottombar}>
        <div>
          <button style={styles.Edit} onClick={handleEdit}>Edit</button>
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
    Edit: {
      backgroundColor: '#008636',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '5px',
      marginRight: '15px',
    },
    logoimage: {
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
    field: {
      fontWeight: 'bold',
      marginBottom: '5px',
      display: 'flex',
      flexDirection: 'row',
    },
    prices: {
      margin: '0px 25px',
    },
    infoentry: {
      width: '536px',
      height: 'auto',
      marginLeft: '5px',
      fontSize: '18px', 
    },
    image: {
      width: '200px', 
      height: 'auto',
    },
  };


export default Museum;
