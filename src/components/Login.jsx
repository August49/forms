import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormComponent from "./formComponent";
import { loginSchema } from "../schemas/schema";
import Input from "./Input";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormComponent onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Email"
        name="email"
        label="Email Address"
        type="email"
        register={register}
        errors={errors}
        styles={"form-control"}
      />
      <Input
        placeholder="Password"
        name="password"
        label="Password"
        type="password"
        register={register}
        errors={errors}
        styles={"form-control"}
      />
      <Input
        name="submit"
        type="submit"
        errors={errors}
        register={register}
        styles={"btn btn-primary"}
      />
    </FormComponent>
  );
}

export default Login;
