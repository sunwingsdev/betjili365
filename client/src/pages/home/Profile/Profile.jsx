import Sidebar from "@/components/home/Sidebar/Sidebar";
import Container from "@/components/shared/Container";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="bg-primary-primaryColor py-6">
      <Container>
        <div className="flex gap-2">
          <div className="w-[24%] rounded hidden md:block">
            <Sidebar />
          </div>
          <div className="w-full md:w-[76%] rounded">
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
