import React, { useState } from "react";
import { Field } from "formik";

interface Props {
  placeholder: string;
  name: string;
  errors: { filed: string | undefined };
  touched: { filed: boolean | undefined };
  onEmitChange: Function;
}

const UiFormTextarea = ({
  placeholder,
  name,
  errors,
  touched,
  onEmitChange,
}: Props) => {
  const [input, setInput] = useState("");

  const onChange = (value: string) => {
    setInput(value);

    onEmitChange(value);
  };

  return (
    <div className="w-full">
      <Field
        component="textarea"
        className="border p-3 rounded-md focus:outline-none w-full h-44"
        name={name}
        placeholder={placeholder}
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
      {errors.filed && touched.filed ? <div><p className="text-red-600 lg:text-sm text-xs"> {errors.filed} </p></div> : null}
    </div>
  );
};

export default UiFormTextarea;
