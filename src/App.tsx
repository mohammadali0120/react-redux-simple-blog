import { Routes, Route } from "react-router-dom";
import HomeIndex from "./components/home/Index";
import HomePosts from "./components/home/Posts";
import React from "react";
import LayoutsHeader from "./components/layouts/Header";
import HomePostsPost from "./components/home/Posts/Post";
import UiFormInput from "./components/ui/Form/Input";

//
import * as Yup from "yup";
import { Form, Formik } from "formik";

const App = () => {
  const RouterContent = (component: React.ReactNode) => {
    return component;
  };
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "نام نمیتواند کمتر از 2 کاراکتر باشد")
      .max(32, "نام نمیتواند بیشتر از 32 کاراکتر باشد")
      .required("این فیلد ضروری است"),
  });

  return (
    <div>
      <LayoutsHeader />
      <div className="lg:container px-4 lg:my-4 my-2">
        <Routes>
          <Route path="/" element={RouterContent(<HomeIndex />)}></Route>
          <Route path="/posts" element={RouterContent(<HomePosts />)}></Route>

          <Route
            path="/posts/:postId"
            element={RouterContent(<HomePostsPost />)}
          />
        </Routes>
      </div>
      {/* <div className="lg:container px-4 lg:my-4 my-2">
        <h1>Signup</h1>

        <Formik
          initialValues={{
            firstName: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <UiFormInput
                errors={{ filed: errors.firstName }}
                touched={{ filed: touched.firstName }}
                name="firstName"
                placeholder="نام"
              />

              <button type="submit">submit</button>
            </Form>
          )}
        </Formik>
      </div> */}
    </div>
  );
};

export default App;
