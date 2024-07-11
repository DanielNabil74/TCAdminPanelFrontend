import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import server from "../elserver";
import "./styles.css";

const IndoorLocMuseum = () => {
  const { musid } = useParams();
  const [museumName, setMuseumName] = useState(null);
  const [museumUsers, setMuseumUsers] = useState([]);
  const [newData, setNewData] = useState(false);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    const getMuseumName = async () => {
      try {
        const response = await fetch(`${server}/museum/${musid}`);
        const data = await response.json();
        setMuseumName(data.value.museum_name);
      } catch (error) {
        console.error("Error fetching museum data:", error);
      }
    };
    getMuseumName();
  }, [musid]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(server + `/selectMuseum/${museumName}`);
        const data = await response.json();

        const roomsResponse = await fetch(server + `/getRooms/${museumName}`);
        const hashmap = await roomsResponse.json();

        const roomMap = {};
        hashmap.forEach((room) => {
          roomMap[room.room_name] = room.location;
        });

        const usersWithMatchedRooms = data.map((user) => {
          const userLocation = user.location;
          const matchedRoomName =
            Object.keys(roomMap).find(
              (roomName) => roomMap[roomName] === userLocation
            ) || "No match";

          return {
            username: user.username,
            role: user.role,
            location: matchedRoomName,
          };
        });

        setMuseumUsers(usersWithMatchedRooms);
        setNewData(true);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    if (museumName) {
      fetchUsers();
    }

    const intervalId = setInterval(() => {
      fetchUsers();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [museumName]);

  useEffect(() => {
    if (newData) {
      const timeoutId = setTimeout(() => setNewData(false), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [newData]);

  const Lefthalf = () => {
    const userCount = museumUsers ? museumUsers.length : 0;

    return (
      <div style={styles.lefthalf}>
        {museumName !== "The Great Cairo Library" ? (
          <div style={styles.centeredContent}>
          <h2>Indoor localization has not been enabled here yet</h2>
            <button style={{...styles.greenButton,color:"#F1EBEB"}}>Add rooms</button>
            <button style={styles.greenButton}>Enable</button>
          </div>
        ) : (
          <>
            <div style={styles.counters}>
              <label style={styles.prices}>Count: {userCount}</label>
              <label style={styles.prices}>Avg capacity: 35</label>
              <label style={styles.prices}>Max capacity: 70</label>
              <label style={styles.prices}>
                Status: {userCount > 35 ? "crowded" : "normal"}
              </label>
            </div>
            <div style={styles.usersContainer}>
              <h2> Users in {museumName}</h2>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.cell}>Username</th>
                    <th style={styles.cell}>Role</th>
                    <th style={styles.cell}>Location</th>
                  </tr>
                </thead>
                <TransitionGroup component="tbody">
                  {museumUsers && museumUsers.length > 0 ? (
                    museumUsers.map((user, index) => (
                      <CSSTransition key={index} timeout={500} classNames="row">
                        <tr>
                          <td style={styles.cell}>
                            {user.username || "Unknown"}
                          </td>
                          <td style={styles.cell}>{user.role}</td>
                          <td style={styles.cell}>{user.location}</td>
                        </tr>
                      </CSSTransition>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="3"
                        style={{ ...styles.cell, textAlign: "center" }}
                      >
                        No users found
                      </td>
                    </tr>
                  )}
                </TransitionGroup>
              </table>
            </div>
          </>
        )}
      </div>
    );
  };

  const Righthalf = () => {
    return (
      <div style={styles.righthalf}>
        <input style={styles.searchbar} placeholder="search" />
        <div style={styles.roomsContainer}>
          <button style={styles.button}>Main hall</button>
          <button style={styles.button}>Arts Hall</button>
          <button style={styles.button}>Arts Room</button>
          <button style={styles.button}>Secretary Room</button>
          <button style={styles.button}>Secretary Terase</button>
          <button style={styles.button}>Conference Room</button>
          <button style={styles.button}>Conference Terase</button>
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
        <label style={styles.pagename}>{museumName}</label>
        <img
          style={styles.logoimage}
          src={"../../images/Logo.png"}
          alt="first image"
        />
      </div>
      <div>
        <Lefthalf />
        {museumName === "The Great Cairo Library" && <Righthalf />}
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
    height: "25px",
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
    textAlign: "center",
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
    alignSelf: "center"
  },
  counters: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "10px",
  },
  prices: {
    fontWeight: "bold",
    fontSize: "15px",
    margin: "0 10px",
  },
  usersContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  cell: {
    border: "1px solid black",
    padding: "8px",
    textAlign: "left",
  },
  centeredContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
};

export default IndoorLocMuseum;
