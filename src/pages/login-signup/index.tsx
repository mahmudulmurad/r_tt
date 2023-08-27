import Box from "@mui/material/Box";
import Auth from "../../component/auth/auth.component";

const LoginSignup = () => {
  return (
    <Box
      className="flex justify-center items-center h-screen bg-gradient-to-r
     from-violet-500 to-fuchsia-500"
    >
      <Box className="h-9/10 w-1/4 bg-white drop-shadow-lg rounded-lg">
        <Auth />
      </Box>
    </Box>
  );
};

export default LoginSignup;
