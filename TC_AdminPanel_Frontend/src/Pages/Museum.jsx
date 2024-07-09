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

  const handleHome = () => {
    nav("/home");
  };

  const handleEdit = () => {
    nav(`/EditMuseum/${musid}`,{musid});
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this museum?")) {
      try {
        const response = await fetch(`${server}/deleteMuseum/${museumData.museum_name}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          nav("/MuseumInfo"); 
        } else {
          throw new Error('Failed to delete museum');
        }
      } catch (error) {
        console.error("Error deleting museum:", error.message);
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.topbar}>
        <button style={styles.homeButton} onClick={handleHome}>Home</button>
        {museumData && <label style={styles.pagename}>{museumData.museum_name}</label>}
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
              {museumData.ticket_tourist && <label style={styles.prices}>Foreign: {museumData.ticket_tourist}</label>}
              {museumData.ticket_adult && <label style={styles.prices}>Egyptian adult: {museumData.ticket_adult}</label>}
              {museumData.ticket_student && <label style={styles.prices}>Egyptian student: {museumData.ticket_student}</label>}
            </div>
            <div style={styles.field}>
              <div style={styles.name}><label>Museum info:</label></div>
              {museumData.museinfo && <div style={styles.infoentry}><text>{museumData.museinfo}</text></div>}
            </div>
            <div style={styles.field}>
              <div style={styles.photos}>
                <div>
                  {museumData.musuem_image && <>
                    <label style={styles.name}>Museum photo:</label>
                    <img style={styles.image} src={`${server}/${museumData.musuem_image}`} alt='Museum photo'/>
                  </>}
                </div>
                <div>
                  {museumData.map && <>
                    <label style={styles.name}>Museum map:</label>
                    <img style={styles.image} src={`${server}/${museumData.map}`} alt='Museum map'/>
                  </>}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div style={styles.Bottombar}>
        <div>
          <button style={styles.Edit} onClick={handleEdit}>Edit</button>
          <button style={{...styles.Edit, backgroundColor: "red"}} onClick={handleDelete}>Delete</button>
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
    backgroundColor: 'green',
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
    margin: '15px',
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
