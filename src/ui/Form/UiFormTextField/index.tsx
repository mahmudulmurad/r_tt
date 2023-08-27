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
} from "../../UiTextInputFiled/textField.component";

interface IUiFormTextFieldProps<
  TFormType extends FieldValues,
  TName extends FieldPath<TFormType>
> extends IUiInputTextFieldProps {
  name: TName;
  control: Control<TFormType>;
  errors?: FieldErrors<TFormType>;
  prefix?: string;
  helperText?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onEnter?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export function UiFormTextField<
  TFormType extends FieldValues,
  TName extends FieldPath<TFormType>
>(props: IUiFormTextFieldProps<TFormType, TName>) {
  const error = get(props.errors || {}, props.name);
  const { onEnter, prefix, helperText, onChange } = props;
 

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
              if (prefix) {
                let value: string | number = event.target.value;
                if (typeof value === "string") {
                  if (
                    (prefix && value.indexOf(prefix) !== -1) ||
                    value.indexOf(prefix.slice(0, prefix?.length - 1)) !== -1
                  ) {
                    value = prefix + value.slice(prefix?.length);
                  } else {
                    value = prefix + value;
                  }
                }

                const updatedEvent = {
                  ...event,
                  target: {
                    ...event.target,
                    value: value,
                  },
                };
                field.onChange(updatedEvent);
              } else {
                field.onChange(event);
              }
            }}
          />
        );
      }}
    />
  );
}
