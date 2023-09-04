import { Box } from "@mui/material";
import {
  TSignUpForm,
  TSignUpProps,
  signUpFormDefaultValue,
  signUpFormValidation,
} from "./signup.decorator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa6";
import { UiFormDatePicker, UiFormTextField, UiFromSelectField } from "ui/form";
import { UiButton, UiLabelField } from "ui/common";
import { EGENDER } from "common/enums";
import { enumToList } from "services";

function SignupComponent({ authTypeChange, errorState }: TSignUpProps) {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TSignUpForm>({
    resolver: zodResolver(signUpFormValidation),
    defaultValues: signUpFormDefaultValue,
  });

  const onSubmit = (value: TSignUpForm) => {
    console.log(value);
  };

  return (
    <Box className="flex flex-col justify-center items-center w-full h-full">
      <UiLabelField
        component="label"
        title="New Registration"
        className="text-xl my-4"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 justify-center items-center w-full mb-2"
      >
        <Box className="w-3/4">
          <UiFormTextField
            control={control}
            errors={errors}
            name="username"
            label="Username"
            placeholder="enter your username"
            variant="outlined"
          />
        </Box>
        <Box className="w-3/4">
          <UiFormTextField
            control={control}
            errors={errors}
            name="email"
            label="Email"
            placeholder="enter your email"
            type="email"
            variant="outlined"
          />
        </Box>
        <Box className="w-3/4">
          <UiFromSelectField
            control={control}
            errors={errors}
            name="gender"
            variant="outlined"
            label="Select gender"
            options={enumToList(EGENDER)}
          />
        </Box>
        <Box className="w-3/4">
          <UiFormDatePicker
            control={control}
            errors={errors}
            name="age"
            label="D.O.B"
          />
        </Box>

        <Box className="w-3/4">
          <UiFormTextField
            control={control}
            errors={errors}
            name="password"
            label="Password"
            placeholder="enter your password"
            type="password"
            variant="outlined"
          />
        </Box>

        <Box className="my-2 w-1/2 transition-all duration-300 transform hover:scale-105">
          <UiButton
            onClick={handleSubmit(onSubmit)}
            title="sign up"
            type="submit"
            fullWidth
            isLoading={isSubmitting}
            color="secondary"
            style={{ borderRadius: "20px" }}
          />
        </Box>

        <UiLabelField
          title="Or sign up using"
          className="text-xs text-zinc-500"
        />

        <Box className="my-2 flex justify-center items-center gap-2">
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
          title="Or login using"
          className="text-xs text-zinc-500"
        />

        <Box className="text-center">
          <UiButton
            title="login"
            onClick={() => authTypeChange("login")}
            variant="text"
          />
        </Box>
      </form>
    </Box>
  );
}

export default SignupComponent;
