import React from "react";

const Request = () => {
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
        <button style={styles.decline}>Decline</button>
      </div>
    </div>
  );
};



const PendingLicenses = () => {
  return (
    <div style={styles.container}>
      <div style={styles.topbar}>
        <button style={styles.homeButton}>Home</button>
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
};

export default PendingLicenses;
