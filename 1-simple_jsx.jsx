// Simple JSX Element
const JSX = <h1>Hello JSX!</h1>;

// Complex JSX Element
const JSX = 
<div>
  <h1>Title</h1>
  <p>Paragraph</p>
  <ul>
    <li>x</li>
    <li>y</li>
    <li>z</li>
  </ul>
</div>;

// Comments inside JSX
const JSX = <div>
  {/* Comments */}
</div>;

/*
With React, we can render this JSX directly to the HTML DOM using React's rendering API known as ReactDOM.

Use the ReactDOM.render() method to render this component to the page.
You can pass defined JSX elements directly in as the first argument and Use document.getElementById() to select the DOM node to render them to. 
*/

ReactDOM.render(JSX, document.getElementById(''));
