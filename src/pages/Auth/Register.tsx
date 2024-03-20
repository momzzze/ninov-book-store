import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { registerUser } from "../../services/user.services";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
import { useNavigate } from "react-router-dom";

const registerSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  rePassword: z.string().min(6),
});

type Inputs = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(registerSchema),
  });
  const dispatch = useDispatch();
  const redirect=useNavigate();
  const registerHandler: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      const response = await registerUser(data);

      if (response.message) {
        if (response.message.includes("E11000 duplicate key error")) {
          if (response.message.includes("username")) {
            throw new Error("Username already exists");
          } else if (response.message.includes("email")) {
            throw new Error("Email already exists");
          }
        } else {
          throw new Error(response.message);
        }
      }
      console.log(response);
      
      dispatch(
        setLogin({
          user: {
            email: response.email,
            role: response.role,
            userId: response.userId,
          },
          token: response.token,
        })
      );
      redirect("/");
    } catch (error) {
      const typedError = error as Error;
      setError("root", { message: typedError.message });
    }
  };

  return (
    <div className="">
      <form className="" onSubmit={handleSubmit(registerHandler)}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" {...register("username")} placeholder="username" />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email")} placeholder="email" />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
          />
        </div>
        <div>
          <label htmlFor="rePassword">Confirm Password</label>
          <input
            type="password"
            {...register("rePassword")}
            placeholder="Confirm Password"
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Register"}
        </button>
        {errors.root && <p>{errors.root.message}</p>}
      </form>
    </div>
  );
};

export default Register;
