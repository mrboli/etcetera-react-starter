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

    this.addListItem = this.addListItem.bind(this);
    this.updateListItem = this.updateListItem.bind(this);
    this.checkRemoveItem = this.checkRemoveItem.bind(this);
  }

  addListItem () {
    this.setState({ listItems: [...this.state.listItems, ""] });
  }

  updateListItem (index, value) {
    const newList = this.state.listItems;
    newList[index] = value;
    this.setState({ listItems: newList });
  }

  checkRemoveItem (index) {
    console.log('checking remove', index, this.state.listItems[index]);
    if (this.state.listItems[index] === "") {
      console.log('empty!')
      const newList = this.state.listItems;
      newList.splice(index, 1);
      console.log('newlist', newList);
      this.setState({ listItems: newList });
    }
  }

  render () {
    return (
      <ul>
        {this.state.listItems.map((item, i) => {
          return (
            <ListInput
              key={i}
              index={i}
              item={item}
              addItem={this.addListItem}
              updateListItem={this.updateListItem}
              checkRemoveItem={this.checkRemoveItem}
            />
          )
        })}
      </ul>
    );
  }
}

export default List;
