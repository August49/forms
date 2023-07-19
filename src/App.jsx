import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormComponent from "./components/formComponent";
import Input from "./components/Input";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
