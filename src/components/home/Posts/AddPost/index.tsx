import React, { useState } from "react";
import { addNewPost } from "../../../../app/features/postsSlice";
import { useAppDispatch } from "../../../../app/hooks";

const HomePostsAddPost = () => {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<{ title: string; body: string }>({
    title: "",
    body: "",
  });

  const onChange = (value: string, filed: "title" | "body") => {
    setForm((prevState: any) => ({ ...prevState, [filed]: value }));
  };
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(addNewPost(form));
    setForm({ title: "", body: "" });
  };

  return (
    <div>
      <div className="lg:my-4 my-2">
        <h1 className="font-bold lg:text-2xl text-base">اضافه کردن پست جدید</h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="w-full">
          <input
            className="border p-3 rounded-md focus:outline-none w-full"
            type="text"
            value={form.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange(e.target.value, "title")
            }
            placeholder="عنوان پست"
          />
        </div>
        <div className="w-full lg:my-4 my-2">
          <textarea
            className="border p-3 rounded-md focus:outline-none w-full h-44"
            value={form.body}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              onChange(e.target.value, "body")
            }
            placeholder="متن پست"
          ></textarea>
        </div>
        <div className="w-full">
          <button className="h-full w-full border rounded-md p-3 text-white bg-gray-900">
            ارسال
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomePostsAddPost;
