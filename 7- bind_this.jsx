/*
In addition to setting and updating state, you can also define methods for your component class.
A class method typically needs to use the this keyword so it can access properties on the class (such as state and props)
inside the scope of the method. There are a few ways to allow your class methods to access this.
*/
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Hello"
        };
        this.handleClick = this.handleClick.bind(this);
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    handleClick() {
        this.setState({
            text: "You clicked!"
        });
    }

//Sometimes you might need to know the previous state when updating the state.
    toggleVisibility(){
        this.setState(state => ({
            visibility: state.visibility ? false : true
        }));
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.text}</h1>
            </div>
        );
    }
};