import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { ComponentPropsWithoutRef, InputHTMLAttributes } from "react";
import { useField } from "formik";

type InputFieldProps = $ElementProps<typeof Input> & {
  label: string;
  name: string;
};

export function InputField({ label, ...props }: InputFieldProps) {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} id={field.name} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
}
