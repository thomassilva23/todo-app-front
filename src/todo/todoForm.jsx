import React from "react";
import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

const TodoForm = (props) => {
  const keyHandler = (e) => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };
  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          onChange={props.handleChange}
          onKeyUp={keyHandler}
          value={props.description}
        ></input>
      </Grid>

      <Grid cols="12 3 2">
        <IconButton
          btnStyle="primary"
          icon="plus"
          onClick={props.handleAdd}
        ></IconButton>
        <IconButton
          btnStyle="info"
          icon="search"
          onClick={props.handleSearch}
        ></IconButton>
        <IconButton
          btnStyle="danger"
          icon="close"
          onClick={props.handleClear}
        ></IconButton>
      </Grid>
    </div>
  );
};

export default TodoForm;
