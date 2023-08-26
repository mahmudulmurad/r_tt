import { IErrorError } from "../../../common/decorator";
import { TState } from "../../../common/decorator/useStateDecorator/useState.decorator";
import { TAuthType } from "../auth.type";
import { z } from "zod";

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
export const signInFormValidation = z.object({
  username: z.string({
    required_error: "Username is required",
    invalid_type_error: "Username must be a string",
  }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .length(8, { message: "Must be exactly 8 characters long" }),
});
