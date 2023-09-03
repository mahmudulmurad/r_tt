import {
  Control,
  Controller,
  FieldErrors,
  FieldPath,
  FieldValues,
  get,
} from "react-hook-form";

import {
  IUiSelectFieldProps,
  UiSelectFiled,
} from "../../common/UiSelectFiled/select.component";

interface IUiFormSelectFieldProps<
  TFormType extends FieldValues,
  TName extends FieldPath<TFormType>
> extends IUiSelectFieldProps {
  name: TName;
  control: Control<TFormType>;
  errors?: FieldErrors<TFormType>;
  afterChange?: (data: { name: string; value: unknown }) => void;
}

export function UiFromSelectField<
  TFormType extends FieldValues,
  TName extends FieldPath<TFormType>
>(props: IUiFormSelectFieldProps<TFormType, TName>) {
  const error = get(props.errors || {}, props.name);
  const { afterChange } = props;

  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field: { onChange, value } }) => {
        return (
          <UiSelectFiled
            {...props}
            error={!!error?.message}
            value={value}
            onChange={(e, child, data) => {
              if (onChange) {
                onChange(e, child, data);
              }
              afterChange &&
                afterChange({ name: e.target.name, value: e.target.value });
            }}
          />
        );
      }}
    />
  );
}
