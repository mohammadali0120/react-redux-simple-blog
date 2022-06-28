import { Link } from "react-router-dom";
import { removePost } from "../../../app/features/postsSlice";
import { useAppDispatch } from "../../../app/hooks";
import trashIcon from "../../../assets/images/trash.png";

interface Props {
  id: number;
  title: string;
  body: string;
}

const HomePostsPostItem = ({ id, title, body }: Props) => {
  const dispatch = useAppDispatch();

  const removePostById = (id: number) => {
    dispatch(removePost(id));
  };

  return (
    <div className="lg:w-1/3 w-full text-left">
      <div className="bg-gray-100 shadow-md lg:m-4 m-2 rounded-md lg:p-4 p-2">
        <div>
          <div>
            <strong className="lg:text-2xl text-base text-gray-800">
              #{id}
            </strong>
          </div>
          <div>
            <h1 className="font-bold lg:text-2xl text-base text-gray-800 whitespace-nowrap overflow-hidden overflow-ellipsis">
              {title}
            </h1>
          </div>
          <div>
            <p className="text-gray-500 whitespace-nowrap overflow-hidden overflow-ellipsis">
              {body}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div
            className="w-5 h-5  cursor-pointer"
            onClick={() => removePostById(id)}
          >
            <img className="w-full h-full" src={trashIcon} alt="trash-icon" />
          </div>
          <div className="">
            <Link to={`/posts/${id}`} className="block dir-ltr text-blue-500">
              Read More...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePostsPostItem;
