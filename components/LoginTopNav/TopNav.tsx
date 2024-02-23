
import logo from '../../assets/images/UR_logo.png'
import { AiOutlineLogin } from "react-icons/ai";

function LoginTopNav() {

    return (
      <div className="bg-white py-2 px-12 text-black flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className=" w-12 mr-2" />
          <span className="text-lg font-bold">ASSET MANAGEMENT SYSTEM </span>
        </div>
        <button className=" flex flex-row items-center bg-my-blue text-white px-2 gap-1 py-2 rounded-lg hover:bg-blue-600 w-32 justify-center h-10"> <AiOutlineLogin />Sign In</button>
      </div>
    );
  };


export default LoginTopNav
