import React, { Component } from 'react';
import ListInput from './ListInput';

class List extends Component {
  constructor (props) {
    super(props);

    this.state = {
      listItems: [
        "Get a bigger place",
        "Get a Siberian Cat",
      ]
    };

    this.inputRefs = []; // Used to focus inputs on delete

    this.addListItem = this.addListItem.bind(this);
    this.updateListItem = this.updateListItem.bind(this);
    this.checkRemoveItem = this.checkRemoveItem.bind(this);
  }

  addListItem () {
    const listItems = [...this.state.listItems, ""];
    this.setState({ listItems });
  }

  updateListItem (index, value) {
    const listItems = this.state.listItems;
    listItems[index] = value;
    this.setState({ listItems });
  }

  checkRemoveItem (index) {
    const isntLastInput = this.state.listItems.length > 1;
    const currentInputEmpty = this.state.listItems[index] === "";
    if (isntLastInput && currentInputEmpty) {
      const listItems  = this.state.listItems;
      listItems.splice(index, 1);
      this.setState({ listItems });

      const prev = index - 1;
      // Use a 100ms delay to focus, or else previous input will delete last character
      // Note: Cannot use state to prevent character deletion instead because
      // The previous input doesn't pick up keydown event in this situation (tested)
      if (this.inputRefs[prev]) setTimeout(this.inputRefs[prev].focus, 100);
      // TODO: Use redux for more reliable focus state/timing
    }
  }

  render () {
    return (
      <ul>
        {this.state.listItems.map((item, i) => {
          return (
            <ListInput
              key={i}
              ref={input => this.inputRefs[i] = input}
              index={i}
              item={item}
              addItem={this.addListItem}
              updateListItem={this.updateListItem}
              checkRemoveItem={this.checkRemoveItem}
              unsetBackspace={this.unsetBackspace}
            />
          )
        })}
      </ul>
    );
  }
}

export default List;
