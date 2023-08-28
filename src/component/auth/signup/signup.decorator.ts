
import { IErrorError, TState } from "common/decorator";
import { TAuthTypeChange } from "../auth.type";
import { z } from "zod";
import { EGENDER } from "common/enums";
import { passwordRegex } from "common/utlis";



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



// Sign in form data validation
export const signUpFormValidation = z.object({
  username: z.string().min(4, "min 4 characters required").max(20),
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
      return age >= 16;
    },
    {
      message: "16+ required",
    }
  ),
  password: z
    .string()
    .min(8, "min 8 characters required")
    .refine((value) => passwordRegex.test(value), {
      message: "required capital,small,number & special character",
    }),
});
