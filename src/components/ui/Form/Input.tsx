import { Field } from "formik";

interface Props {
  placeholder: string;
  name: string;
  errors: { filed: string | undefined };
  touched: { filed: boolean | undefined };
}

const UiFormInput = ({ placeholder, name, errors, touched }: Props) => {
  return (
    <div className="w-full">
      <Field
        className="border p-3 rounded-md focus:outline-none w-full"
        name={name}
        placeholder={placeholder}
      />
      {errors.filed && touched.filed ? (
        <div>
          <p className="text-red-600 lg:text-sm text-xs"> {errors.filed} </p>
        </div>
      ) : null}
    </div>
  );
};

export default UiFormInput;
