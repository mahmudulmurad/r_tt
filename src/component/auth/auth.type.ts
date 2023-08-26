export type TAuthType = "login" | "signup";

export type TAuth = {
  type: TAuthType;
};

export type TAuthTypeChange = {
  authTypeChange: (type: TAuthType) => void;
};
