import Header from "../sheard/Header/Header";
import LeftSideNav from "../sheard/LeftSideNav/LeftSideNav";
import Navbar from "../sheard/Navbar";
import RightSideNav from "../sheard/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header> </Header>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border">
          <h2 className="text-4xl">News Comming Soon</h2>
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
