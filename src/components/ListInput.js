import React, { Component } from 'react';
import { Input } from 'antd';

class ListInput extends Component {
  constructor (props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress (e) {
    // e.key = "Backspace" / "Enter"
    switch (e.key) {
      case "Backspace":
        console.log('backspace');
        // If input black, remove this element
        this.props.checkRemoveItem(this.props.index);
        break;
      case "Enter":
        // Add new input, focus new element
        this.props.addItem(); 
        break;
      default:
    }
  }

  render () {
    return (
      <li>
        <Input
          type="text"
          onKeyDown={this.handleKeyPress}
          value={this.props.item}
          onChange={e => {this.props.updateListItem(this.props.index, e.target.value)}}
          autoFocus
        />
      </li>
    )
  }
}

export default ListInput;
