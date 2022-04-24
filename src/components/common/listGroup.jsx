import React, { Component } from "react";

class ListGroup extends Component {
  state = {};
  render() {
    const { items, textProperty, valueProperty, onItemSelect, selectedItem } =
      this.props;
    return (
      <ul className="list-group">
        {items.map((item) => {
          return (
            <li
              key={item[valueProperty]}
              className={
                item === selectedItem
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                onItemSelect(item);
              }}
            >
              {item[textProperty]}
            </li>
          );
        })}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
