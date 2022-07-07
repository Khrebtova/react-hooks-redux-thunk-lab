import React, { useEffect } from "react";
import CatList from "./CatList";
import { useSelector, useDispatch } from "react-redux";
import { fetchCats } from './catsSlice';

function Cats() {
  const catPics = useSelector((state) => state.entities)
  const dispatch = useDispatch()

  console.log(catPics)

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  return (
    <div className="App">
      <h1>CatBook</h1>
      <CatList catPics={catPics}/>
    </div>
  );
}

export default Cats;
