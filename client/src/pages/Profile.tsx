import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/Input";
const initialState = { firstName: "", lastName: "",imgUrl:"", email: "", password: "" };
function Auth() {
  // const state = useSelector(state => state.user)
  const dispatch = useDispatch();
  // const history = useHistory();
  // const classes = useStyles();
  const [form, setForm] = useState(initialState);
  const [isSignUp, setIsSignup] = useState(false);
  const signUpHandler = () => {
    setIsSignup(!isSignUp);
  };
  const handleChange = (e:any) =>{
    setForm({ ...form, [e.target.name]: e.target.value });}
  
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (isSignUp) {
      
      // dispatch(signup(form, history));
      
    } else {
      // dispatch(signin(form, history));
    }
  };
  // const responseGoogle = (res) => {
  //   const user = res?.profileObj;
  //   const token = res?.tokenId;
  //   try {
  //     dispatch({ type: 'AUTH', data: { user, token } });

  //     history.push('/');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <Container maxWidth="xs" style={{ marginTop: "50px"}}>
      <Paper className="flex flex-col" elevation={6}>
        <div className="">
          <Button
            variant={isSignUp ? "text" : "outlined"}
            style={{ flex: 1 }}
            onClick={signUpHandler}
          >
            Sign up
          </Button>
          <Button
            variant={!isSignUp ? "text" : "outlined"}
            style={{ flex: 1 }}
            onClick={signUpHandler}
          >
            Sign in
          </Button>
        </div>
        <Typography variant="h5" align="center">
          {isSignUp ? " Create Your Account" : "Sign In "}
        </Typography>
        <Typography variant="h6" align="center">
          {/* {state?.error ? state.error.data.message : ""} */}
        </Typography>
        <form >
          <Grid container alignContent="center">
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="imgUrl"
                  label="Profile"
                  handleChange={handleChange}
                />
              </>
            )}

            <Input
              name="email"
              label="Email"
              type="email"
              handleChange={handleChange}
              autoFocus
            />
            <Input
              name="password"
              label="Password"
              type="password"
              handleChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              className="m-[20%]"
              color="primary"
            >
              Submit
            </Button>
           
            {/* <Grid container alignItems='center' justifyContent="center">
              <GoogleLogin
                clientId="784711989351-6lbr6iv7hr359tmok5ftj2buraj6smqc.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={() => console.log("error")}
                cookiePolicy={"single_host_origin"}
                style={{ padding: "30px" }}
              />
            </Grid> */}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;