import React from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { onLogin } from "../../app/redux/actions/action";

const Login: React.FC = () => {
  const initialValues = { email: "", password: "", devicetype: "web" };
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const handleSubmit = async (values: any) => {
    const resp: any = await dispatch(onLogin(values));
    if (resp.payload) {
      toastAlert(resp.payload);
      navigate("/dashboard");
    }
  };

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum"),
  });

  const toastAlert = (loginval: any) => {
    if (loginval.token) {
      toast.success("Login Successful", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else if (!loginval.token) {
      toast.warn("Invaild Login!!!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  //   const Login = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <Grid container spacing={0} >
              <Grid item xs={12} style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >
                <Card >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardHeader>Login </CardHeader>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <form onSubmit={(e) => {
                        e.preventDefault();
                        formik.handleSubmit(e);
                      }} noValidate>
                        <h3>Login</h3>
                        <p className="text-medium-emphasis">
                          Sign In to Admin account
                        </p>
                        <TextField
  inputProps={{ "data-testid": "email" }}
  sx={{ width: 350 }}
                          id="email"
                          variant="standard"
                          name="email"
                          label="Email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          className={
                            errors.email && touched.email
                              ? "input-error form-control mt-1"
                              : "mb-3"
                          }
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                        />
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="error"
                        />{" "}<br />
                        <TextField
  inputProps={{ "data-testid": "password" }}
  sx={{ width: 350 }}
                          id="password"
                          variant="standard"
                          name="password"
                          label="Password"
                          type="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          className={
                            errors.password && touched.password
                              ? "input-error form-control mt-1"
                              : "mb-3"
                          }
                          error={touched.password && Boolean(errors.password)}
                          helperText={touched.password && errors.password}
                        />
                        <ErrorMessage
                          name="password"
                          component="span"
                          className="error"
                        /><br />
                        <Button color="primary" variant="contained" data-testid="submitButton" style={{ width: "350" }} type="submit" className={
                          !(dirty && isValid)
                            ? "disabled-btn"
                            : " btn btn-primary"
                        }
                          disabled={!(dirty && isValid)}>
                          Login
                        </Button></form>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
