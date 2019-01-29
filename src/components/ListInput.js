import React, { Component } from 'react';
import { Input } from 'antd';

class ListInput extends Component {
  constructor (props) {
    super(props);

    this.focus = this.focus.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  focus () {
    this.textInput.focus();
  }

  handleKeyPress (e) {
    // e.key = "Backspace" / "Enter"
    switch (e.key) {
      case "Backspace":
        // If input blank, remove this element
        this.props.checkRemoveItem(this.props.index);
        break;
      case "Enter":
        // Add new input, focus new element
        this.props.addItem(); 
        break;
      default:
        break;
    }
  }

  render () {
    return (
      <li>
        <Input
          ref={input => this.textInput = input}
          type="text"
          value={this.props.item}
          onKeyDown={this.handleKeyPress}
          onChange={e => {this.props.updateListItem(this.props.index, e.target.value)}}
          autoFocus
        />
      </li>
    )
  }
}

export default ListInput;
