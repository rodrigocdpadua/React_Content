/*
React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component.
These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time.
This can be before they are rendered, before they update, before they receive props, before they unmount, and so on.
*/

// The componentWillMount() method is called before the render() method when a component is being mounted to the DOM.
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log("x");
    }
    render() {
        return <div />
    }
};

/*
The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount().
This method is called after a component is mounted to the DOM. Any calls to setState() here will trigger a re-rendering of your component.
When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.
*/
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUsers: null
        };
    }
    componentDidMount() { // It sets state after 2.5 seconds to simulate calling a server to retrieve data.
        setTimeout(() => {
            this.setState({
                activeUsers: 1273
            });
        }, 2500); 
    }
    render() {
        return (
            <div>
                <h1>Active Users: {this.state.activeUsers}</h1>
            </div>
        );
    }
}

//Then, in componentWillUnmount(), remove this same event listener. You can pass the same arguments to document.removeEventListener(). It's good practice to use this lifecycle method to do any clean up on React components before they are unmounted and destroyed. Removing event listeners is an example of one such clean up action
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }
    handleEnter() {
        this.setState((state) => ({
            message: state.message + 'You pressed the enter key! '
        }));
    }
    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
};

// React provides a lifecycle method you can call when child components receive new state or props, and declare specifically if the components should update or not. The method is shouldComponentUpdate(), and it takes nextProps and nextState as parameters.
class OnlyEvens extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I update?');
        return nextProps.value % 2 == 0;
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render() {
        return <h1>{this.props.value}</h1>;
    }
}

class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.addValue = this.addValue.bind(this);
    }
    addValue() {
        this.setState(state => ({
            value: state.value + 1
        }));
    }
    render() {
        return (
            <div>
                <button onClick={this.addValue}>Add</button>
                <OnlyEvens value={this.state.value} />
            </div>
        );
    }
}