import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../contexts/AuthContext";

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
      <div className="homeNavBar">
        <h2 className="logo">QuickMeet</h2>

        <div className="homeNavRight">
          <button className="historyBtn" onClick={() => navigate("/history")}>
            <RestoreIcon />
            <span>History</span>
          </button>

          <button
            className="logoutBtn"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="meetContainer">
        <div className="leftPanel">
          <div>
            <h1>Simple Meetings. Better Connections.</h1>

            <div style={{ display: "flex", gap: "10px" }}>
              <TextField
                onChange={(e) => setMeetingCode(e.target.value)}
                id="outlined-basic"
                label="Meeting Code"
                variant="outlined"
                className="textField"
              />
              <Button
                className="joinBtn"
                onClick={handleJoinVideoCall}
                variant="contained"
              >
                Join
              </Button>
            </div>
          </div>
        </div>
        <div className="rightPanel">
          <img srcSet="/bg02.png" alt="" />
        </div>
      </div>

      <footer className="footer">
        <p>© 2026 Rahul Tak | All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default withAuth(HomeComponent);
