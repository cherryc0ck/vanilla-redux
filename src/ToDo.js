import React from "react";
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { actionCreators } from './store';

function ToDo ({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps){
  console.log("mapDispatchToProps");
  return {
    onBtnClick: () => {
      dispatch(actionCreators.deleteToDo(ownProps.id))
      console.log("onBtnClick");
      }
    }
}

export default connect(null, mapDispatchToProps) (ToDo);