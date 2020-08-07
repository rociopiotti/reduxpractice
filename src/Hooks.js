import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesList } from "./actions/index";

const Hooks = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList());
  }, [dispatch]);

  console.log(movies);

  return (
    <>
      <div>HOOKS</div>
      {/* <button onClick={() => dispatch(getMoviesList())}>Get movies</button> */}
    </>
  );
};
export default Hooks;
