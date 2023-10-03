import { FaGoogle, FaGithub, FaFacebook,  FaInstagram, FaTwitter, } from "react-icons/fa";

import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl font-semibold">Login With</h2>
        <button className="btn btn-outline btn-info w-full ">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full mt-2">
          <FaGithub></FaGithub>
          GitHub
        </button>
      </div>

      <div className="p-4 mb-6">
        <h2 className="text-2xl font-semibold">Find Us On</h2>
        <a className="p-4 flex gap-2 items-center border rounded-t-lg " href="">
            <FaFacebook className="mr-2 text-blue-400"></FaFacebook>Facebook
        </a>
        <a className="p-4 flex gap-2 items-center border-x " href="">
            <FaTwitter className="mr-2 text-blue-700"></FaTwitter> Twitter
        </a>
        <a className="p-4 flex gap-2 items-center border rounded-b-lg " href="">
            <FaInstagram className="mr-2 text-red-400"></FaInstagram> Instagram
        </a>
      </div>

{/* Q Zone */}
      <div className="p-4 space-y-3 mb-6 bg-slate-200 space-y-6">
        <h2 className="text-2xl font-semibold">Q-Zone</h2>
        <img src= {qZone1} alt="" />
        <img src= {qZone2} alt="" />
        <img src= {qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
