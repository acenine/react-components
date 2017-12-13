












var GroceryList = (props) => (
  <ul>
    {props.items.map(item => <GroceryListItem item = {item} />
     )}
  </ul>

);

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style = {style} onMouseOver = {this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}> {this.props.item}</li>
      )
  }

};
// var Eggs = () => (
//   <li>eggs</li>
// );
// var Bacon = () => (
//   <li>bacon</li>
// );
ReactDOM.render(<GroceryList items = {['hello', "hey"]}/>, document.getElementById("app"))