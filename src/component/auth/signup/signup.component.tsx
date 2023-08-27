import { Box } from "@mui/material";
import { UiLabelField } from "../../../ui";
import { TSignUpForm, TSignUpProps, signUpFormDefaultValue, signUpFormValidation } from "./signup.decorator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UiFormTextField } from "../../../ui/Form/UiFormTextField";
import { UiButton } from "../../../ui/UiButton/button.component";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa6";

function SignupComponent({ authTypeChange, errorState }: TSignUpProps) {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TSignUpForm>({
    resolver: zodResolver(signUpFormValidation),
    defaultValues: signUpFormDefaultValue
    ,
  });

  const onSubmit = (value: any) => {
    console.log(value);
  };
  return (
    <Box>
    <UiLabelField
      component="label"
      title="New Registration"
      className="text-2xl w-full flex items-center justify-center mt-10"
    />
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className="my-7 w-3/4 mx-auto  text-center">
        <UiFormTextField
          style={{ fontSize: "8px" }}
          control={control}
          errors={errors}
          name="username"
          label="Username"
          placeholder="Enter your username"
          variant="standard"
        />
      </Box>
      <Box className="my-7 w-3/4 mx-auto text-center">
        <UiFormTextField
          control={control}
          errors={errors}
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
          variant="standard"
        />
      </Box>
      <Box className="my-7 w-3/4 mx-auto text-center">
        <UiFormTextField
          control={control}
          errors={errors}
          name="gender"
          label="Gender"
          placeholder="Select your gender"
          type="email"
          variant="standard"
        />
      </Box>
      <Box className="my-7 w-3/4 mx-auto text-center">
        <UiFormTextField
          control={control}
          errors={errors}
          name="age"
          label="D.O.B"
          placeholder=""
          type="date"
          variant="standard"
        />
      </Box>
      <Box className="my-7 w-3/4 mx-auto text-center">
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


      <Box className="my-4 mx-auto w-1/2 text-center transition-all duration-300 transform hover:scale-105">
        <UiButton
          onClick={handleSubmit(onSubmit)}
          title="Sign up"
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          color="secondary"
          style={{ borderRadius: "20px" }}
        />
      </Box>

      <UiLabelField
          title="Or sign up using"
          className="mx-4 text-xs flex items-center justify-center text-zinc-500"
        />

        <Box className="m-4 flex justify-center items-center gap-2">
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
        className="mx-4 text-xs flex items-center justify-center text-zinc-500"
      />

      <Box className="m-4 text-center">
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
