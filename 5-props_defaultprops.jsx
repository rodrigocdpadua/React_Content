const CurrentDate = (props) => {
    return (
      <div>
        <p>The current date is: {props.date}</p>
      </div>
    );
  };
  
class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <h3>What date is it?</h3>
            <CurrentDate date={Date()}/>
        </div>
        );
    }
};

/*
React also has an option to set default props.
React assigns default props if props are undefined, but if you pass null as the value for a prop, it will remain null.
*/
const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
        <h2>{props.items}</h2>
      </div>
    )
};

ShoppingCart.defaultProps = {items: 0};

/*
It's considered a best practice to set propTypes when you know the type of a prop ahead of time.
You can define a propTypes property for a component in the same way you defined defaultProps.
Doing this will check that props of a given key are present with a given type.
*/
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.propTypes = {quantity: PropTypes.number.isRequired};

/*
The ES6 class component uses a slightly different convention to access props.
Anytime you refer to a class component within itself, you use the this keyword.
To access props within a class component, you preface the code that you use to access it with this.
*/
{this.props.tempPassword}