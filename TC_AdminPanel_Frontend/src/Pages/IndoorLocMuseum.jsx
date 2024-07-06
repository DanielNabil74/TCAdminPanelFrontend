import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import server from "../elserver";

const IndoorLocMuseum = () => {
  const {museum_name} = useParams()
  const [museumUsers, setMuseumUsers] = useState(null);
  const nav = useNavigate();

  const handleHome = () => {
    nav("/home");
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(server + "/selectMuseum", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ museum_name: museum_name }),
        });

        if (response.ok) {
          const result = await response.json();
          setMuseumUsers(result);
        } else {
          console.error("Failed to fetch users");
        }
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    if (museum_name) {
      fetchUsers();
    }
  }, [museum_name]);

  const Lefthalf = () => {
    return (
      <div style={styles.lefthalf}>
        <div style={styles.field}>
          <label style={{ fontWeight: "bold", marginRight: "5px" }}>
            Main hall
          </label>
        </div>
        <div style={styles.counters}>
          <label style={styles.prices}>Count: 40</label>
          <label style={styles.prices}>Avg capacity: 35</label>
          <label style={styles.prices}>Max capacity: 70</label>
          <label style={styles.prices}>Status: crowded</label>
        </div>
        <div style={styles.usersContainer}>
          <h2> Users in {museum_name}</h2>
          <table
            style={{
              width: "100%",
              border: "1px solid black",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <th style={styles.username}>Username</th>
                <th style={styles.username}>Role</th>
                <th style={styles.username}>Location</th>
              </tr>
            </thead>
            <tbody>
              {museumUsers &&
                museumUsers.users &&
                museumUsers.users.map((user, index) => (
                  <tr key={index}>
                    <td style={styles.username}>{user.username}</td>
                    <td style={styles.username}>{user.role}</td>
                    <td style={styles.username}>{user.location}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const Righthalf = () => {
    return (
      <div style={styles.righthalf}>
        <input style={styles.searchbar} placeholder="search" />
        <div style={styles.roomsContainer}>
          <button style={styles.current}>Main hall</button>
          <button style={styles.button}>room 1</button>
          <button style={styles.button}>room 2</button>
          <button style={styles.button}>room 3</button>
          <button style={styles.button}>room 4</button>
          <button style={styles.button}>room 5</button>
        </div>
        <button style={styles.greenButton}>Add rooms</button>
        <button style={styles.greenButton}>Enable</button>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.topbar}>
        <button style={styles.homeButton} onClick={handleHome}>
          Home
        </button>
        <label style={styles.pagename}>{museum_name}</label>
        <img
          style={styles.logoimage}
          src={"./images/Logo.png"}
          alt="first image"
        />
      </div>
      <div>
        <Lefthalf />
        <Righthalf />
      </div>
      <div style={styles.Bottombar}></div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    alignSelf: "center",
    verticalAlign: "center",
    width: "100%",
  },
  greenButton: {
    height: "20px",
    width: "90px",
    borderRadius: "10px",
    backgroundColor: "#008636",
    color: "white",
    margin: "5px 5px 0px 5px",
    fontSize: "10px",
    border: "1px solid black",
  },
  button: {
    height: "20px",
    width: "90px",
    borderRadius: "10px",
    backgroundColor: "#979B99",
    color: "black",
    marginTop: "5px",
    fontSize: "10px",
    border: "1px solid black",
  },
  current: {
    height: "20px",
    width: "90px",
    borderRadius: "10px",
    backgroundColor: "#F1EBEB",
    color: "black",
    marginTop: "5px",
    fontSize: "10px",
    border: "1px solid black",
  },
  logoimage: {
    width: "10%",
    height: "auto",
    marginBottom: "20px",
    float: "right",
    alignSelf: "right",
    justifyContent: "right",
    flexDirection: "row",
  },
  lefthalf: {
    alignSelf: "left",
    width: "85%",
    float: "left",
    display: "flex",
    flexDirection: "column",
    verticalAlign: "flex-start",
  },
  righthalf: {
    width: "10%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    float: "right",
    verticalAlign: "center",
    justifyContent: "center",
    paddingLeft: "5px",
    borderLeft: "1px solid black",
  },
  topbar: {
    flexDirection: "row",
    width: "100%",
  },
  Bottombar: {
    height: "100px",
  },
  username: {
    color: "#684326",
  },
  searchbar: {
    display: "flex",
    width: "95px",
    justifyContent: "left",
    flexDirection: "row",
    marginBottom: "10px",
  },
  roomsContainer: {
    backgroundColor: "#DDDADA",
    padding: "5px",
  },
  homeButton: {
    backgroundColor: "#684326",
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    marginRight: "15px",
  },
  pagename: {
    fontWeight: "bold",
    fontSize: "25px",
    margin: "20px 0px 0px 5px",
    paddingLeft: "15px",
    borderLeft: "1px solid black",
    marginLeft: "5px",
  },
  field: {
    fontWeight: "bold",
    marginBottom: "5px",
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
  },
  counters: {
    width: "95%",
    marginBottom: "5px",
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  prices: {},
  nameentry: {
    width: "528px",
  },
  infoentry: {
    width: "536px",
    height: "auto",
    marginLeft: "5px",
  },
  usersContainer: {
    backgroundColor: "#D9D9D9",
    height: "200px",
  },
  Tourist: {
    height: "20px",
    width: "140px",
    borderRadius: "8px",
    backgroundColor: "#979B99",
    color: "black",
    margin: "5px",
    fontSize: "10px",
    border: "1px solid black",
  },
  Tourguide: {
    height: "20px",
    width: "140px",
    borderRadius: "8px",
    backgroundColor: "#E0DDDD",
    color: "black",
    margin: "5px",
    fontSize: "10px",
    border: "1px solid black",
  },
};

export default IndoorLocMuseum;
