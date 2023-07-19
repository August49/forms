import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormComponent from "./assets/components/formComponent";
import Input from "./assets/components/form";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

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

export default App;
