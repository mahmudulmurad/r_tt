import { IErrorError } from "../../../common/decorator";
import { TState } from "../../../common/decorator/useStateDecorator/useState.decorator";
import { TAuthType } from "../auth.type";
import * as z from "zod";

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
  username: z.string().min(4, 'Username must be at least 4 characters').max(20),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
