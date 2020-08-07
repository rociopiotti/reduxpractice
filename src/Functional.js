import React from "react";
import { connect } from "react-redux";
import { getMoviesList } from "./actions";

const Functional = ({ movies, getMoviesList }) => {
  console.log(movies);
  return (
    <>
      <div>Functional component</div>
      <button onClick={() => getMoviesList()}>Get movies</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = { getMoviesList };

export default connect(mapStateToProps, mapDispatchToProps)(Functional);
