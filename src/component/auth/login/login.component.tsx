import { Box } from "@mui/material";
import {  UiLabelField } from "../../../ui";
import {
  TSignInForm,
  TSignInProps,
  signInFormDefaultValue,
  signInFormValidation,
} from "./login.decorator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UiButton } from "../../../ui/UiButton/button.component";
import { UiFormTextField } from "../../../ui/Form/UiFormTextField";

function LoginComponent({ authTypeChange, errorState }: TSignInProps) {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TSignInForm>({
    resolver: zodResolver(signInFormValidation),
    defaultValues: signInFormDefaultValue,
  });

  const onSubmit = (value: any) => {
    console.log(value);
  };

  return (
    <Box>
      <UiLabelField
        component="label"
        title="Login"
        className="text-2xl w-full flex items-center justify-center mt-10"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="m-4">
          <UiFormTextField
            control={control}
            errors={errors}
            name="username"
            label="Username"
            placeholder="Enter your username"
            variant="standard"
          />
        </Box>
        <Box className="m-4">
          <UiFormTextField
            control={control}
            errors={errors}
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            variant="standard"
          />
        </Box>
        <Box>
          <UiButton
            onClick={handleSubmit(onSubmit)}
            title="login"
            type="submit"
            fullWidth
            isLoading={isSubmitting}
          />
        </Box>
        <Box>
          <UiButton
            title="signUp"
            onClick={() => authTypeChange("signup")}
            variant="outlined"
          />
        </Box>
      </form>
    </Box>
  );
}

export default LoginComponent;
