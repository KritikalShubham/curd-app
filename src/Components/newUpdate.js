import * as React from 'react';
import {useEffect , useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const theme = createTheme();

//  content link for futher reference
// https://github.com/mui/material-ui/blob/v5.10.4/docs/data/material/getting-started/templates/sign-up/SignUp.js

export default function SignUp() { 
    const navigate = useNavigate();

    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    // const [checkbox, setCheckbox] = useState(false);
    const [id, setID] = useState(null);
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
}, []);

    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setID(data.get('id'));
    setFirstName(data.get('firstName'));
    setLastName(data.get('lastName'));
    
    if(firstName==='' ||lastName===''){
        alert('FirstName and Lastname is required');
        navigate('/read');
    }else{
        firstName = firstName[0].toUpperCase()+firstName.slice(1);
        lastName = lastName[0].toUpperCase()+lastName.slice(1);
        console.log(firstName);
        axios.put(`/user/${id}`, {
            id,
            firstName,
            lastName,    
        })
        navigate('/read');
        };
    }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <Box 
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <AccountCircleRoundedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Update User
          </Typography>
         
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  fullWidth
                  id="firstName"
                //   label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  id="lastName"
                //   label="Last Name"
                  name="lastName"
                />
              </Grid>
            </Grid>
        
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update User
            </Button>
        
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}