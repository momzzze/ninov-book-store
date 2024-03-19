import { useForm } from "react-hook-form";
import { loginUser } from "../../services/user.services";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};
type ApiResponse = {
  token: string;
  userId: string;
  role: string;
  email: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const onSubmit = async (data: Inputs) => {
    try {
      const response = await loginUser(data);
      dispatch(setLogin({
        user: {
            email: response.email,
            role: response.role,
            userId: response.userId
        },
        token: response.token
      }));
        navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <input type="email" {...register("email")} placeholder="Email" />
        <input type="password" {...register("password")} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
