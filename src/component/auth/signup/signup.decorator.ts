import { IErrorError } from "../../../common/decorator";
import { TState } from "../../../common/decorator/useStateDecorator/useState.decorator";
import { TAuthTypeChange } from "../auth.type";

export type TSignUpProps = TAuthTypeChange & {
  errorState: TState<IErrorError | null>;
};
