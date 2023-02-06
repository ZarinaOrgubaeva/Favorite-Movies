import { useState } from "react";
import Header from "./components/header/Header";
import MainContent from "./components/main/Main";
function App() {
  const [movieList, setMovieList] = useState([
    {
      id: Math.random().toString(),
      title: "Твое имя",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwh6IsXdKTIXAanTdrZoSQn33cdExxzqCTA&usqp=CAU",
      rating: "5/5",
    },
    {
      id:  Math.random().toString(),
      title: "Naruto",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-RtRrnyleag02ZNgx88RN-NhqAxkZrLUv1w&usqp=CAU",
      rating: "5/5",
    },
    {
      id:  Math.random().toString(),
      title: "Атака титанов",
      img: "https://suzzy.ru/wp-content/uploads/2021/02/78yugh6457676-608x401.jpg",
      rating: "5/5",
    },
    {
      id:  Math.random().toString(),
      title: "Волейбол",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMzVdLHdLREp8eSBt_rtSUvs3-SWzFTFwQg&usqp=CAU",
      rating: "5/5",
    },
  ]);
  const addMovieHandler = (data) => {
    const updatedMovie = [...movieList];
    updatedMovie.push(data);
    setMovieList(updatedMovie);
    console.log("updatet",updatedMovie)
  };
  const deleteMovie =(id)=>{
    setMovieList([...movieList].filter(data => data.id !== id));
  }
  return (
    <>
      <Header onAddMovie={addMovieHandler} />
      <MainContent movieList={movieList} deleteMovie={deleteMovie}></MainContent>
    </>
  );
}

export default App;
