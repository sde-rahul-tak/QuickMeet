import * as React from "react";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  CssBaseline,
  Paper,
  Snackbar
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Authentication() {

  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [name, setName] = React.useState();
  const [error, setError] = React.useState();
  const [message, setMessage] = React.useState();

  const [formState, setFormState] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  const {handleRegister, handleLogin} = React.useContext(AuthContext);

  const navigate = useNavigate();

  
  

  let handleAuth = async ()=>{
    try {
      if (formState === 0){
        let result = await handleLogin(username, password);

        if(result){
        navigate("/home");  
      }
        
      }
      if(formState === 1){
        let result = await handleRegister(name, username, password);
        console.log(result);
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
        setPassword(""); 
        setUsername("");

      }
    } catch(err){      
      let message = (err.response.data.message);
      setError(message);
    }
  }

  

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={6}
          sx={{
            marginTop: 8,
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 3,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

         <div>
          <Button variant={formState === 0 ? "contained" : " "} onClick={()=> {setFormState(0)}}>
            Sign In
          </Button>
          <Button variant={formState === 1 ? "contained" : " "} onClick={()=> {setFormState(1)}}>
            Sign Up
          </Button>
         </div>

          <Box component="form"  sx={{ mt: 3 }}>

            
            {formState === 1 ? <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Full Name"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e)=> setName(e.target.value)}
              value={name}
            /> : <></>}
            

              <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e)=> setUsername(e.target.value)}
              value={username}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />

            <p style={{color : "red"}}>{error}</p>
            
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2, borderRadius: 2 }}
              onClick={handleAuth}
            >
            {formState === 0 ? "login" : "Register"}
            </Button>

          </Box>
        </Paper>

              <Snackbar

                open = {open}
                autoHideDuration={4000}
                message = {message}
                onClose={() => setOpen(false)}
              />
        
      </Container>
    </>
  );
}