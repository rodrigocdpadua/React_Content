/*
One of the most important topics in React is state. State consists of any data your application needs to know about, that can change over time.
You want your apps to respond to state changes and present an updated UI when necessary.
React offers a nice solution for the state management of modern web applications.
*/
class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
            name: "dd",
            number: 12
        }
    }
    render() {
        const number = this.state.number;
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{number}</h1>
            </div>
        );
    }
};
/*
You have access to the state object throughout the life of your component.
You can update it, render it in your UI, and pass it as props to child components.

React provides a method for updating component state called setState.
You call the setState method within your component class like so: this.setState(), passing in an object with key-value pairs.
The keys are your state properties and the values are the updated state data.
*/
this.setState({
    name: "React Rocks!"
});
// React expects you to never modify state directly, instead always use this.setState() when state changes occur.