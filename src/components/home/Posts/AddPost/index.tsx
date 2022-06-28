import * as Yup from "yup";
import { Form, Formik } from "formik";

import { addNewPost } from "../../../../app/features/postsSlice";
import { useAppDispatch } from "../../../../app/hooks";
import UiFormInput from "../../../ui/Form/Input";
import UiFormTextarea from "../../../ui/Form/Textarea";

const HomePostsAddPost = () => {
  const dispatch = useAppDispatch();
  const ValidationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "عنوان پست نمیتواند کمتر از 2 کاراکتر باشد")
      .max(32, "عنوان پست نمیتواند بیشتر از 32 کاراکتر باشد")
      .required("این فیلد ضروری است"),

    body: Yup.string()
      .min(8, "متن پست نمیتواند کمتر از 8 کاراکتر باشد")
      .max(255, "متن پست نمیتواند بیشتر از 255 کاراکتر باشد")
      .required("این فیلد ضروری است"),
  });

  const onSubmit = (value: { title: string; body: string }) => {
    dispatch(addNewPost(value));
  };

  return (
    <div>
      <div className="lg:my-4 my-2">
        <h1 className="font-bold lg:text-2xl text-base">اضافه کردن پست جدید</h1>
      </div>

      <Formik
        initialValues={{ title: "", body: "" }}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="w-full">
              <UiFormInput
                errors={{ filed: errors.title }}
                touched={{ filed: touched.title }}
                name="title"
                placeholder="عنوان پست"
              />
            </div>

            <div className="w-full lg:my-4 my-2">
              <UiFormTextarea
                errors={{ filed: errors.body }}
                touched={{ filed: touched.body }}
                name="body"
                placeholder="متن پست"
              />
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="h-full w-full border rounded-md p-3 text-white bg-gray-900"
              >
                ارسال
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default HomePostsAddPost;
