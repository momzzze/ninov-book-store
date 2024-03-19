import { UseSelector, useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);
  
  return (
    <div>
      <h1>Home</h1>
      <p>{user?.role}</p>
      <p>{user?.email}</p>
    </div>
  );
};

export default Home;
