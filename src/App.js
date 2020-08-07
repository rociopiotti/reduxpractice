import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoviesList } from "./actions";
import { bindActionCreators } from "redux";
// import Functional from "./Functional"
import Hooks from "./Hooks"



class App extends Component {
  componentDidMount() {
    // this.props.getMoviesList();
  }

  render() {
    // console.log(this.props)
    return <Hooks/>
      // <div className='App'>
      //   {this.props.movies
      //     ? this.props.movies.map((item) => (
      //         <div key={item.id}>{item.title}</div>
      //       ))
      //     : null}
      // </div>
    
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ getMoviesList }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(App);
