import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormComponent from "./assets/components/formComponent";
import Input from "./assets/components/Input";
import Login from "./assets/components/Login";

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
