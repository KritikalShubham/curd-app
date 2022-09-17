import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const theme = createTheme();
//  content link for futher reference
// https://github.com/mui/material-ui/blob/v5.10.4/docs/data/material/getting-started/templates/sign-up/SignUp.js

export default function SignUp() { 
    const navigate = useNavigate();
    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let firstName=data.get('firstName');
    let lastName=data.get('lastName');
    // let checkbox=data.get('checkBox')==='Checked'?true:false;
    if(firstName==='' ||lastName===''){
       alert('FirstName and Lastname is required');
       navigate('/form');
    }else{
    axios.post(`/user`, {
        firstName,
        lastName,
        // checkbox   
      }) 
    navigate('/read');
    }
      };

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
            Add User
          </Typography>
         
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
            {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox name='checkBox' value="checkBox" color="primary" />}
                  label="I agree to the Terms and Conditions"
                />
            </Grid> */}
            </Grid>
        
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add User
            </Button>
        
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}