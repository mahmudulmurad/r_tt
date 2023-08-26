import { Box } from "@mui/material";
import { UiInputTextField, UiLabelField } from "../../../ui";
import {
  TSignInForm,
  TSignInProps,
  signInFormDefaultValue,
  signInFormValidation,
} from "./login.decorator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function LoginComponent({ authTypeChange, errorState }: TSignInProps) {
  const {
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TSignInForm>({
    resolver: zodResolver(signInFormValidation),
    defaultValues: signInFormDefaultValue,
  });

  return (
    <Box>
      <UiLabelField
        component="label"
        title="Login"
        className="text-2xl w-full flex items-center justify-center mt-10"
      />
      <form>
        <Box className="m-4">
          <UiInputTextField
            name="username"
            label="Username"
            placeholder="Enter your username"
            variant="standard"
          />
        </Box>
        <Box className="m-4">
          <UiInputTextField
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            variant="standard"
          />
        </Box>
      </form>
    </Box>
  );
}

export default LoginComponent;
