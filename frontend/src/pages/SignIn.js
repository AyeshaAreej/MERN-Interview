import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

export const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const value = {
      username: values.username,
      password: values.password,
    };

    fetch(`http://localhost:8000/loginn`, {
      method: "post",
      body: JSON.stringify(value),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.status == "ok") {
          localStorage.setItem("user-token", JSON.stringify(result.token));
          console.log("done");
          navigate("/home");
        } else {
          console.log("error");
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="bg-lightPink h-screen flex justify-center">
      <div className="flex flex-col justify-center items-center bg-lightGreen rounded-lg my-36  px-10 md:px-20">
        <div className="brandName">
          {/* <img src={logo} alt="" /> */}
          <h1>BETA App</h1>
        </div>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required("Username is required"),
            password: Yup.string()
              .min(6, "Password must be 6 characters at minimum")
              .required("Password is required"),
          })}
        >
          {({
            touched,
            errors,
            handleSubmit,
            handleBlur,
            values,
            handleChange,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <div className="heading">
                  <h1>Sign In</h1>
                </div>
                <label htmlFor="username" style={{ fontSize: 20 }}>
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your Username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username}
                />
                {touched.username && errors.username ? (
                  <div
                    className="error"
                    style={{
                      fontSize: 12,
                      color: "red",
                      textTransform: "lowercase",
                    }}
                  >
                    {" "}
                    {errors.username}
                  </div>
                ) : null}

                <label htmlFor="pwd1" style={{ fontSize: 20 }}>
                  Password
                </label>
                <input
                  type="password"
                  id="pwd1"
                  name="password"
                  placeholder="Enter password"
                  autoComplete="false"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                />
                {touched.password && errors.password ? (
                  <div
                    className="error"
                    style={{
                      fontSize: 12,
                      color: "red",
                      textTransform: "lowercase",
                    }}
                  >
                    {" "}
                    {errors.password}
                  </div>
                ) : null}

                <button type="submit" onClick={handleSubmit}>
                  SIGNIN
                </button>
                <span>
                  Don't have an account? <Link to="/signup">SignUp</Link>
                </span>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
