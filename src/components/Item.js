import React, { useEffect } from "react";

class Item extends React.Component {




  render() {
    return (
      <div
        onClick={this.props.onClick}
        className={`item${this.props.item.purchased ? " purchased" : ""}`}
      >
        <p>{this.props.item.name}</p>
      </div>
    );
  }
}

export default Item;

