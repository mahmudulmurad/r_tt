import { IErrorError } from "../../../common/decorator";
import { TState } from "../../../common/decorator/useStateDecorator/useState.decorator";
import { TAuthType } from "../auth.type";

export type TSignInProps = {
  authTypeChange: (type: TAuthType) => void;
  errorState: TState<IErrorError | null>;
};
