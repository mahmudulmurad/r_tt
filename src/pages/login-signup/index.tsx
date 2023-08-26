import Box from "@mui/material/Box";
import Auth from "../../component/auth/auth.component";

const LoginSignup = () => {
  return (
    <Box
      className="flex justify-center items-center h-screen bg-gradient-to-r
     from-violet-500 to-fuchsia-500"
    >
      <Box className=" h-3/4 w-1/4 bg-white drop-shadow-lg rounded">
        <Auth />
      </Box>
    </Box>
  );
};

export default LoginSignup;
