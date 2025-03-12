import { Outlet } from "react-router";
import ParticlesBg from "../components/particles/ParticlesBg";

const HomeLayout = () => {
  return (
    <>
      <div className="relative">
        <Outlet />
        <ParticlesBg />
      </div>
    </>
  );
};

export default HomeLayout;
