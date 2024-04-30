import React, { useState } from 'react'
import Layout from "../components/Layout";
import { Box,Button,TextField,Typography } from '@mui/material';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

export default function Register() {
    const [isSignup, setIsSignup]= useState(false);
    const [input, setInput]=useState({name:"",email:"",password:""})
    // console.log(isSignup);
    const handleChange = (e) =>  { setInput((prevState)=>({...prevState,
    [e.target.name] : e.target.value}))}
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input )
    }
    const resetState = () => { setIsSignup(!isSignup);
    setInput({name:"", email:"", password:""})}
  return (
    <div>
        <Layout/>
        <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection={"column"} maxWidth={400} 
            alignItems={"center"} justifyContent={"center"} 
            margin ="auto" marginTop={5} padding={3} 
            borderRadius={5} 
            boxShadow={"5px 5px 10px #ccc" }  
            sx={{
                ":hover": {
                boxShadow:"10px 10px 20px #ccc" ,
            },
        }}
            >
                <Typography variant="h3" padding={2} textAlign="center">{isSignup ? "Signup": "Login"}</Typography>
                { isSignup && ( <TextField onChange={handleChange} name="name" value={input.name}  margin="normal" type={"text"} varient="outlined" placeholder='Name'/>)}
               <TextField onChange={handleChange} name="email" value={input.email} margin="normal" type={"email"} varient="outlined" placeholder='Email'/>
                <TextField onChange={handleChange} name="password" value={input.password} margin="normal" type={"password"} varient="outlined" placeholder='Password'/>
                <Button endIcon={isSignup ? <HowToRegOutlinedIcon/> : <LoginOutlinedIcon/>} type="submit" sx={{marginTop:3}}variant="contained" color="warning">{isSignup ? "Signup" : "Login"} </Button>
                <Button endIcon={isSignup ?  <LoginOutlinedIcon/> : <HowToRegOutlinedIcon/> } onClick={resetState} sx={{marginTop:3, borderRadius:3}} color="primary">Change to 
                {isSignup? " Login":" Signup"}</Button>

            </Box>
        </form>
        </div>
  )
}









// import React from "react";
// import Layout from "../components/Layout";
// import { CssBaseline } from "@material-ui/core";

// // import hero from "./assets/3.svg";
// import {
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   FormLabel,
//   FormControl,
//   RadioGroup,
//   Radio,
//   InputLabel,
//   Switch,
//   Select,
//   MenuItem,
//   Button,
// } from "@material-ui/core";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

// import DateFnsUtils from "@date-io/date-fns";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   inputField: {
//     width: "100%",
//     margin: theme.spacing(1, 0),
//   },
// }));

// const Register = () => {
//   const classes = useStyles();

//   return (
//     <div>
//         <Layout/>
//         <CssBaseline/>
    
//     <div className="box" >
//       <div className="box-primary">
//         {/* <img src={hero} height="300px" alt="" /> */}
//       </div>
//       <div className="box-secondary">
//      <form  >
//        {/* 1) TextField */}
//         <TextField
//           placeholder="Enter Your First Name"
//           label="First Name"
//           variant="outlined"
//           fullWidth
//           className={classes.inputField}
//         />

//         {/* 2) TextField */}
//         <TextField
//           placeholder="Enter Your Last Name"
//           label="Last Name"
//           variant="outlined"
//           fullWidth
//           className={classes.inputField}
//         />

//         {/* 3) TextField */}
//         <TextField
//           placeholder="Enter Your E-mail Address"
//           label="E-mail"
//           variant="outlined"
//           fullWidth
//           className={classes.inputField}
//         />

//         {/* 4) TextField */}
//         <TextField
//           placeholder="Enter Your Phone Number"
//           label="Phone"
//           variant="outlined"
//           fullWidth
//           className={classes.inputField}
//         />

//         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//           {/* 5) Date Picker */}
//           <KeyboardDatePicker
//             disableToolbar
//             variant="inline"
//             format="MM/dd/yyyy"
//             margin="normal"
//             label="Date of Admission"
//             value={null}
//             fullWidth
//           />

//           {/* 4) Time Picker */}
//           <KeyboardTimePicker
//             margin="normal"
//             label="Time of Admission"
//             value={null}
//             fullWidth
//           />
//         </MuiPickersUtilsProvider>

//         {/* Radio Buttons */}
//         <FormControl className={classes.inputField}>
//           <FormLabel>Choose Your Gender</FormLabel>
//           <RadioGroup row name="gender">
//             <FormControlLabel
//               value="female"
//               control={<Radio />}
//               label="Female"
//             />
//             <FormControlLabel value="male" control={<Radio />} label="Male" />
//             <FormControlLabel value="other" control={<Radio />} label="Other" />
//           </RadioGroup>
//         </FormControl>

//         {/* Select */}
//         <FormControl fullWidth className={classes.inputField}>
//           <InputLabel id="demo-simple-select-label">
//             Select Your Course
//           </InputLabel>

//           <Select>
//             <MenuItem value="">Choose your course</MenuItem>
//             <MenuItem value="Web Development">Web Development</MenuItem>
//             <MenuItem value="App Development">App Development</MenuItem>
//             <MenuItem value="UI/UX">UI/UX</MenuItem>
//           </Select>
//         </FormControl>

//         {/*  Switch */}
//         <FormControlLabel
//           className={classes.inputField}
//           control={<Switch />}
//           label="Send me regular updates"
//         />

//         {/* Checkbox */}
//         <FormControlLabel
//           style={{ display: "block", marginBottom: 15 }}
//           control={<Checkbox />}
//           label="I aggree all terms and conditions"
//         />

//         <Button variant="contained" color="primary" type="submit">
//           create new account
//         </Button>
//     </form>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Register;
