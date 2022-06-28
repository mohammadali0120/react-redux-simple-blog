import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchPosts } from "../../../app/features/postsSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import HomePostsAddPost from "./AddPost";
import HomePostsPostItem from "./PostItem";

const HomePosts = () => {
  const dispatch = useAppDispatch();
  const { posts, postsStatus } = useAppSelector((state) => state.posts);
  const path = useLocation().pathname;

  // it will fetch the new posts when route changes
  useEffect(() => {
    dispatch(fetchPosts(10));
  }, [path,dispatch]);

  return (
    <div>
      <div>
        <HomePostsAddPost />
      </div>
      {postsStatus === "loading" ? (
        <div>
          <p>در حال بارگزاری...</p>
        </div>
      ) : postsStatus === "succeeded" ? (
        <div className="flex flex-wrap lg:-mx-4 -mx-2">
          {posts.map((post: { id: number; title: string; body: string }) => {
            return (
              <HomePostsPostItem
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <p>خطایی بوجود امده است.</p>
        </div>
      )}
    </div>
  );
};

export default HomePosts;
