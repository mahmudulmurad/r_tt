import { Box } from "@mui/material";
import { UiLabelField } from "../../../ui";
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
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa6";

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
    <Box className="flex flex-col justify-center items-center w-full h-full">
      <UiLabelField component="label" title="Login" className="text-xl mt-4" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 justify-center items-center w-full"
      >
        <Box className="w-3/4">
          <UiFormTextField
            control={control}
            errors={errors}
            name="username"
            label="username"
            placeholder="Enter your username"
            variant="standard"
          />
        </Box>
        <Box className="w-3/4">
          <UiFormTextField
            control={control}
            errors={errors}
            name="password"
            label="password"
            placeholder="Enter your password"
            type="password"
            variant="standard"
          />
        </Box>
        <Box className="w-3/4 mx-auto text-right">
          <UiLabelField
            title="Forgot password?"
            className="text-xs text-zinc-500 cursor-pointer hover:text-green-500"
          />
        </Box>

        <Box className="my-3 w-1/2 transition-all duration-300 transform hover:scale-105">
          <UiButton
            onClick={handleSubmit(onSubmit)}
            title="login"
            type="submit"
            fullWidth
            isLoading={isSubmitting}
            color="secondary"
            style={{ borderRadius: "20px", fontSize: "12px" }}
          />
        </Box>

        <UiLabelField
          title="Or sign up using"
          className="text-xs text-zinc-500"
        />

        <Box className="mb-4 flex justify-center items-center gap-2">
          <Box
            className="bg-orange-700 w-7 h-7 rounded-full flex justify-center items-center
           transition-all duration-300 transform hover:scale-125"
          >
            <FaGoogle className="text-white text-md cursor-pointer" />
          </Box>
          <Box
            className="bg-blue-500 w-7 h-7 rounded-full flex justify-center items-center
           transition-all duration-300 transform hover:scale-125"
          >
            <FaFacebookF className="text-white text-md cursor-pointer" />
          </Box>
          <Box
            className="bg-sky-400 w-7 h-7 rounded-full flex justify-center items-center
           transition-all duration-300 transform hover:scale-125"
          >
            <FaTwitter className="text-white text-md cursor-pointer" />
          </Box>
        </Box>

        <UiLabelField
          title="Or sign up using"
          className="mt-4 text-xs text-zinc-500"
        />

        <UiButton
          title="signUp"
          onClick={() => authTypeChange("signup")}
          variant="text"
        />
      </form>
    </Box>
  );
}

export default LoginComponent;
