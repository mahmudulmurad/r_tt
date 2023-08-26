import React, { useState } from "react";
import { IErrorError } from "../../common/decorator";
import { TAuth, TAuthType } from "./auth.type";
import { Box } from "@mui/material";
import LoginComponent from "./login/login.component";
import SignupComponent from "./signup/signup.component";

function Auth() {
  const errorState = useState<IErrorError | null>(null);
  const [getErrorState, setErrorState] = errorState;

  const [authType, setAuthType] = useState<TAuth>({
    type: "login",
  });

  const authTypeChange = (type: TAuthType) => {
    setAuthType((prevState) => ({ ...prevState, type }));
    setErrorState(null);
  };
  return (
    <Box>
      {authType.type === "login" && (
        <LoginComponent
          authTypeChange={authTypeChange}
          errorState={errorState}
        />
      )}
      {authType.type === "signup" && (
        <SignupComponent
          authTypeChange={authTypeChange}
          errorState={errorState}
        />
      )}
    </Box>
  );
}

export default Auth;
