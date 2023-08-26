import { Box } from "@mui/material";
import { UiLabelField } from "../../../ui";
import { TSignUpProps } from "./signup.decorator";

function SignupComponent({ authTypeChange, errorState }: TSignUpProps) {
  return (
    <Box>
      <UiLabelField title="Registration" />
    </Box>
  );
}

export default SignupComponent;
