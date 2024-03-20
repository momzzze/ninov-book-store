import { useSelector } from "react-redux";
import { AuthState } from "../state";

const Home = () => {
  const user = useSelector((state: AuthState) => state.user);

  return (
    <div>
      <h1>Home</h1>
      <p>{user?.role}</p>
      <p>{user?.email}</p>
    </div>
  );
};

export default Home;
