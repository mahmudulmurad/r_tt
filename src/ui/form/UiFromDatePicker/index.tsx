import {
  Control,
  Controller,
  FieldErrors,
  FieldPath,
  FieldValues,
  get,
} from 'react-hook-form';
import { IUiDatePickerProps, UiDatePicker } from 'ui/common';

interface IUiFormDatePickerProps<TFormType extends FieldValues, TName extends FieldPath<TFormType>>
  extends IUiDatePickerProps {
  name: TName;
  control: Control<TFormType>;
  errors?: FieldErrors<TFormType>;
  label?: string;
}

export function UiFormDatePicker<TFormType extends FieldValues, TName extends FieldPath<TFormType>>(
  props: IUiFormDatePickerProps<TFormType, TName>
) {
  const { label} = props;
  const error = get(props.errors || {}, props.name);
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field:{value, onChange} }) => {
        return (
          <UiDatePicker
            {...props}
            error={!!error?.message}
            value={value as string}
            onChange={onChange}
            label={label}
          />
        );
      }}
    />
  );
}
