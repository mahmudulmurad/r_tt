import { IErrorError } from "../../../common/decorator";
import { TState } from "../../../common/decorator/useStateDecorator/useState.decorator";
import { TAuthTypeChange } from "../auth.type";
import { z } from "zod";

export enum EGENDER {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export type TSignUpProps = TAuthTypeChange & {
  errorState: TState<IErrorError | null>;
};

export type TSignUpForm = {
  username: string;
  email: string;
  gender: string;
  age: string;
  password: string;
};

// Sign in form input column
export const signUpFormDefaultValue: TSignUpForm = {
  username: "",
  email: "",
  gender: EGENDER.MALE,
  age: "",
  password: "",
};

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

// Sign in form data validation
export const signUpFormValidation = z.object({
  username: z.string().min(4, "Username must be at least 4 characters").max(20),
  email: z.string().email(),
  gender: z.nativeEnum(EGENDER).refine(
    (value) => {
      return Object.values(EGENDER).includes(value);
    },
    { message: "Please select a valid gender." }
  ),
  age: z.string().refine(
    (value) => {
      const birthDate = new Date(value);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - birthDate.getFullYear();

      return age >= 18;
    },
    {
      message: "You must be at least 18 years old.",
    }
  ),
  password: z.string().refine((value) => passwordRegex.test(value), {
    message:
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
  }),
});
