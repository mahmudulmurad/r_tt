
import { passwordRegex } from "common/utlis";
import { TAuthType } from "../auth.type";
import  {z} from "zod";
import { IErrorError, TState } from "common/decorator";

export type TSignInProps = {
  authTypeChange: (type: TAuthType) => void;
  errorState: TState<IErrorError | null>;
};

export type TSignInForm = {
  username: string;
  password: string;
};

// Sign in form input column
export const signInFormDefaultValue: TSignInForm = {
  username: "",
  password: "",
};
// Sign in form data validation
export const signInFormValidation =z.object({
  username: z.string().min(4, 'min 4 characters required').max(20),
  password: z
  .string()
  .min(8, "min 8 characters required")
  .refine((value) => passwordRegex.test(value), {
    message: "required capital,small,number & special character",
  }),
});
