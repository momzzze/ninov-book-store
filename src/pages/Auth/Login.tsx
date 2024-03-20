import { SubmitHandler, useForm } from "react-hook-form";
import { loginUser } from "../../services/user.services";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./auth.css";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

type Inputs = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      const response = await loginUser(data);
      if (!response.message) {
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
        navigate("/");
      }
      throw new Error(response.message);
    } catch (error) {
      const typedError = error as Error;
      setError("root", { message: typedError.message });
    }
  };

  return (
    <div className="position__middle">
      <div className="position__container">
        <div className="left-side-container">
          <h2 className="login-header">LOGIN</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input type="email" {...register("email")} placeholder="Email" />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
            />
          </div>
          <button
            className="submit-auth-button"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
          {errors.root && <p>{errors.root.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
