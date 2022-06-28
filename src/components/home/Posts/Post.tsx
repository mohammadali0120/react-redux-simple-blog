import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../../app/features/postsSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

const HomePostsPost = () => {
  const dispatch = useAppDispatch();
  const params: any = useParams();

  const getPost = useAppSelector((state) => state.posts.post);
  const postStatus = useAppSelector((state) => state.posts.postStatus);

  useEffect(() => {
    dispatch(fetchPostById(parseInt(params.postId)));
  }, [params, dispatch]);

  return (
    <>
      {postStatus === "loading" ? (
        <div>
          <p>در حال بارگزاری...</p>
        </div>
      ) : postStatus === "succeeded" ? (
        <div>
          <div>
            <strong className="lg:text-2xl text-base text-gray-800">
              #{getPost?.id}
            </strong>
          </div>
          <div>
            <h1 className="font-bold lg:text-2xl text-base">
              {getPost?.title}{" "}
            </h1>
          </div>
          <div>
            <p>{getPost?.body}</p>
          </div>
        </div>
      ) : (
        <div>
          <p>خطایی بوجود امده است.</p>
        </div>
      )}
    </>
  );
};

export default HomePostsPost;
