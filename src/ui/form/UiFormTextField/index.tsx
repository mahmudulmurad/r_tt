import React from "react";
import {
  Control,
  Controller,
  FieldErrors,
  FieldPath,
  FieldValues,
  get,
} from "react-hook-form";
import {
  IUiInputTextFieldProps,
  UiInputTextField,
} from "../../common/UiTextInputFiled/textField.component";

interface IUiFormTextFieldProps<
  TFormType extends FieldValues,
  TName extends FieldPath<TFormType>
> extends IUiInputTextFieldProps {
  name: TName;
  control: Control<TFormType>;
  errors?: FieldErrors<TFormType>;
  helperText?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onEnter?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export function UiFormTextField<
  TFormType extends FieldValues,
  TName extends FieldPath<TFormType>
>(props: IUiFormTextFieldProps<TFormType, TName>) {
  const error = get(props.errors || {}, props.name);
  const { onEnter, helperText, onChange } = props;
 

  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => {
        return (
          <UiInputTextField
            {...props}
            error={!!error?.message}
            helperText={error?.message ? error?.message : helperText}
            value={field?.value ? field.value : ""}
            onEnter={(
              event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
            ) => {
              if (onEnter) {
                onEnter(event);
              }
            }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (onChange) {
                onChange(event);
              }
              field.onChange(event);
            }}
          />
        );
      }}
    />
  );
}
