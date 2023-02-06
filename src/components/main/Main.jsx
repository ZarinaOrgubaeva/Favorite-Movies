import React, { useState } from "react";
import { MovieList } from "../addMovie/MovieList";
import Modal2 from "../modal/modal2/Modal2";

const MainContent = ({ movieList,deleteMovie }) => {
  const [deleteBtn, setDelete] = useState(false);
  const deleteBtnHandler = () => {
    setDelete((prevState) => !prevState);
  };
  const confirmBtnHandler = () => {
    setDelete((prevState) => !prevState);
   deleteMovie()
  };
  return (
    <>
      {movieList.map((movie, index) => {
        return [
          <MovieList
            key={index}
            title={movie.title}
            img={movie.img}
            rating={movie.rating}
            id={movie.id}
            deleteBtnHandler={deleteBtnHandler}
          />,
        ];
      })}

      {deleteBtn ? <Modal2 onCancel={deleteBtnHandler} deleteMovie={confirmBtnHandler} /> : null}
    </>
  );
};
export default MainContent;
//style
