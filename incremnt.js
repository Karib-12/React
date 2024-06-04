/*console.log(React);
console.log(ReactDOM);

const domContainer = document.querySelector("#root");

// for 1 p
// const myElement = React.createElement(
//   "div",
//   null,
//   React.createElement("p", null, "Hello World")
// );

// for multiple p
const myElement = React.createElement("div", null, [
    React.createElement("p", null, "Hello World"),
    React.createElement("p", null, "Thank you")
])

ReactDOM.render(myElement, domContainer);
*/

const domContainer = document.querySelector("#root");

const Increment = () => {
    const [counter, setCounter] = React.useState(0);
    return(
        <div>
            <h1 id="display">{ counter }</h1>
            <div>
                <button id="button" onClick={ () => setCounter(counter + 1) }>Increment +</button>
            </div>
        </div>
    );
};

ReactDOM.render(<Increment />, domContainer);

/* for multiple counter
ReactDOM.render(
    <div className="container">
        <Increment />
        <Increment />
        <Increment />
    </div>,
    domContainer
); */