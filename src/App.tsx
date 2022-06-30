import { Routes, Route } from "react-router-dom";
import HomeIndex from "./components/home/Index";
import HomePosts from "./components/home/Posts";
import React from "react";
import LayoutsHeader from "./components/layouts/Header";
import HomePostsPost from "./components/home/Posts/Post";

const App = () => {
  const RouterContent = (component: React.ReactNode) => {
    return component;
  };

  return (
    <div>
      <LayoutsHeader />
      <div className="lg:container px-4 lg:my-4 my-2">
        <Routes>
          <Route path="/" element={RouterContent(<HomeIndex />)}></Route>
          <Route path="/posts" element={RouterContent(<HomePosts />)}></Route>

          <Route
            path="/posts/:postId"
            element={RouterContent(<HomePostsPost />)}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
