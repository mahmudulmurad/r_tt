import { Box } from "@mui/material";
import { UiLabelField } from "../../../ui";
import { TSignInProps } from "./login.decorator";

function LoginComponent({ authTypeChange, errorState }: TSignInProps) {
  return (
    <Box>
      <UiLabelField title="Login" />
    </Box>
  );
}

export default LoginComponent;
