import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RouteComponentProps } from "react-router";

interface SignUpInputs {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC<RouteComponentProps> = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    errors,
    formState: { isSubmitting },
  } = useForm<SignUpInputs>();
  const onSubmit: SubmitHandler<SignUpInputs> = (data, e) => {
    e?.preventDefault();
    console.log(data);
  };
  return (
    <form
      className="flex flex-col w-3/4 max-w-md mx-auto mt-20 sm:text-lg dark:text-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="input-style"
        name="email"
        placeholder="Email"
        ref={register({
          required: "You need to input an email",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "You need to input a valid email",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <input
        className="mt-2 input-style"
        name="name"
        placeholder="Your name or nickname"
        ref={register({
          required: "You need to input a name",
        })}
      />
      {errors.name && <p>{errors.name.message}</p>}
      <input
        className="mt-2 input-style"
        name="password"
        type="password"
        placeholder="Password"
        ref={register({
          required: "You must enter a password",
          minLength: {
            value: 6,
            message: "Password length must be >= 6",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <input
        className="mt-2 input-style"
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        ref={register({
          required: "You must enter a password",
          validate: (value) =>
            value === watch("password") || "The passwords do not match",
        })}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      <input
        disabled={isSubmitting}
        type="submit"
        value="SIGN UP"
        className="py-2 mt-3 bg-pink-600 border-2 border-gray-300 rounded-md cursor-pointer text-gray-50 dark:border-gray-900"
      />
    </form>
  );
};

export default Signup;