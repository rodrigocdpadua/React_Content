/*
Components are the core of React.
Everything in React is a component and here you will learn how to create one.

To create a component with a function,
You simply write a JavaScript function that returns either JSX or null. 
*/
const MyComponent = function() {
  return (<div>Text</div>);
}
// One important thing to note is that React requires your function name to begin with a capital letter.

const MyComponent = () => {
  return (<div>Text</div>);
}
//MyComponent is defined with an ES6 arrow function because this is a very common practice when using React.

//The other way to define a React component is with the ES6 class syntax.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    )
  }
};
/*
The MyComponent class has a constructor defined within it that calls super().
It uses super() to call the constructor of the parent class, in this case React.Component.
The constructor is a special method used during the initialization of objects that are created with the class keyword.
It is best practice to call a component's constructor with super, and pass props to both.
This makes sure the component is initialized properly.
*/
