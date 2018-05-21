import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import First from './first';
import App from './ManageSystem';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }

// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         {props.title}
//       </h1>
//       <p className="Dialog-message">
//         {props.message}
//       </p>
//     </FancyBorder>
//   );
// }

// function WelcomeDialog() {
//   return (
//     <Dialog
//       title="Welcome"
//       message="Thank you for visiting our spacecraft!" />

//   );
// }

// function SplitPane(props) {
//   return (
//     <div className="SplitPane">
//       <div className="SplitPane-left">
//         {props.left}
//       </div>
//       <div className="SplitPane-right">
//         {props.right}
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <SplitPane
//       left={
//         <Contacts />
//       }
//       right={
//         <Chat />
//       } />
//   );
// }

// ReactDOM.render(
//   <WelcomeDialog />,
//   document.getElementById('root')
// );



// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     //this.setState({temperature: e.target.value});
//     this.props.onTemperatureChange(e.target.value);
//   }

//   render() {
//     //const temperature = this.state.temperature;
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input
//           value={temperature}
//           onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {temperature: '', scale: 'c'};
//   }

//   handleCelsiusChange(temperature) {
//     this.setState({scale: 'c', temperature});
//   }

//   handleFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//   }

//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange} />

//         <TemperatureInput
//           scale="f"
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange} />

//         <BoilingVerdict
//           celsius={parseFloat(celsius)} />

//       </div>
//     );
//   }
// }

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }

// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// );



// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Is going:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Number of guests:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <Reservation />,
//   document.getElementById('root')
// );



// class FileInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(
//       this
//     );
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     alert(
//       `Selected file - ${
//         this.fileInput.files[0].name
//       }`
//     );
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Upload file:
//           <input
//             type="file"
//             ref={input => {
//               this.fileInput = input;
//             }}
//           />
//         </label>
//         <br />
//         <button type="submit">
//           Submit
//         </button>
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <FileInput />,
//   document.getElementById('root')
// );



// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite La Croix flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <FlavorForm />,
//   document.getElementById('root')
// );



// function FormattedDate(props) {
//   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <FormattedDate date={this.state.date} />
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />, 
//   document.getElementById('root')
// );




// function Square(props) {
//   if (props.highlight) {
//     return (
//       <button className="square" onClick={() => props.onClick()} style={{color: "red"}}> 
//         {props.value}
//       </button>
//     );
//   }else {
//   return (
//     <button className="square" onClick={() => props.onClick()}>
//       {props.value}
//     </button>
//   );
//   }
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} highlight={this.props.winnerLine.includes(i)}/>;
//   }
//   render() {
//     var rows = [];
//     for (var i=0; i<3 ; i++){
//       var row = [];
//       for (var j=3*i; j<3*i+3;j++){
//         row.push(this.renderSquare(j));
//       }
//       rows.push(<div className="board=row" key={i}> {row}</div>)
//     }
//     return (
//       <div>
//         {rows}
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       history: [{
//         squares: Array(9).fill(null),
//         lastStep: 'Game start',
//       }],
//       xIsNext: true,
//       stepNumber: 0,
//       sort: false,
//     };
//   }

//   handleClick(i) {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const squares = current.squares.slice();
//     if (calculateWinner(squares).winner || squares[i]) {
//       return;
//     }
//     if (this.state.stepNumber + 1 < history.length) {return}
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     const location = '('+ (Math.floor(i / 3)+1) + ',' + ((i % 3)+1) + ')';
//     const desc = squares[i] + ' moved to ' + location;
//     this.setState({
//       history: history.concat([{
//         squares: squares,
//         lastStep: desc,
//       }]),
//       xIsNext: !this.state.xIsNext,
//       stepNumber: history.length,
//     })
//   }

//   jumpTo(step) {
//   this.setState({
//     stepNumber: step,
//     xIsNext: (step % 2) ? false : true,
//     });
//   }

//   toggleSort() {
//     this.setState({
//       sort:!this.state.sort,
//     })
//   }
  
//   render() {
//     let history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares).winner;
//     const winnerLine = calculateWinner(current.squares).line;

//     let status;
//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//     }
//     if (this.state.sort){
//       history = this.state.history.slice();
//       history.reverse();
//     }
//     const moves = history.map((step,move) => {
//       const desc = step.lastStep;
//       if (move == this.state.stepNumber) {
//         return (
//           <li key={move}>
//             <a href="#" onClick={() => this.jumpTo(move)}><strong>{desc}</strong></a>
//          </li>
//         );
//       }
//       return (
//         <li key={move}>
//           <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
//          </li>
//       );
//     });
    
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board squares={current.squares} onClick={(i) => this.handleClick(i)} winnerLine={winnerLine}/>
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <button onClick={() => this.toggleSort()}>Sort</button>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// // ========================================

// ReactDOM.render(
//   <First />,
//   //<Game />,
//   document.getElementById('root')
// );

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return {winner:squares[a], line:[a, b, c]};
//     }
//   }
//   return {winner:null, line:[]};
// }



// class Circle extends React.Component {
//   render(){
//     var circleStyle = {
//       padding : 10,
//       margin: 20,
//       display: "inline-block",
//       backgroundColor: this.props.bgColor,
//       borderRadius: "50%",
//       width: 100,
//       height: 100
//     };

//     return(
//       <div style={circleStyle}>
//       </div>
//       );
//   }
// };

// function showCircle() {
//   var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
//   var renderData = [];
//   for (var i = 0; i < colors.length; i++) {
//     var ran = Math.floor(Math.random() * colors.length);
//     renderData.push(<Circle key={i+colors[ran]} bgColor = {colors[ran]}/>)
//   }

//   return renderData;
// };

// ReactDOM.render(
//   <div>
//     {showCircle()}
//   </div>,
//   document.getElementById('root')
// );


// class Counter extends React.Component {
//   render(){
//     var textStyle = {
//       fontSize: 72,
//       fontFamlily: "sans-serif",
//       color: "#333",
//       fontWeight: "bold"
//     };

//     return(
//       <div style={textStyle}>
//         {this.props.display}
//       </div>
//       );
//   }
// }

// class CounterParent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//   }

//   increase(e){
//     var currentCount = this.state.count;
//     if (e.shiftKey == true) {
//       currentCount += 10;
//     }else{
//       currentCount += 1;
//     }
//     this.setState({
//       count: currentCount
//     })
//   }

//   render(){
//     var backgroundStyle = {
//       padding: 50,
//       backgroundColor: "#FFC53A",
//       width: 250,
//       height: 100,
//       borderRadius: 10,
//       textAlign: "center"
//     };

//     var buttonStyle = {
//       fontSize: "1em",
//       width: 30,
//       height: 30,
//       fontFamlily: "sans-serif",
//       color: "#333",
//       fontWeight: "bold",
//       lineWeight: "3px"
//     };

//     return(
//       <div style={backgroundStyle}>
//         <Counter display={this.state.count}/>
//         <button style={buttonStyle} onClick={(e)=>this.increase(e)}>+</button>
//       </div>
//       )
//   }
// }

// ReactDOM.render(
//   <div>
//     <CounterParent/>
//   </div>,
//   document.getElementById('root')
// );



// class Colorizer extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       color: '',
//       bgColor: ''
//     };
//   }

//   colorValue(e){
//     this.setState({
//       color: e.target.value
//     })
//   }

//   ChangeColor(e){
//     this.setState({
//       bgColor: this.state.color
//     })

//     this._input.value = "";
//     this._input.focus();
//     console.log(this._input);
//     e.preventDefault();
//   }

//   render(){
//     var squareStyle = {
//       backgroundColor: this.state.bgColor
//     }

//     var self = this;

//     return(
//       <div className="colorArea">
//         <div style={squareStyle} className="colorSquare"></div>
//         <form onSubmit={(e)=>this.ChangeColor(e)}>
//           <input ref={function(el) {
//             self._input = el;
//           }} onChange={(e)=>this.colorValue(e)} placeholder="Please enter a color"/>
//           <button type="submit">Show</button>
//         </form>
//       </div>
//       )
//   }
// }

// ReactDOM.render(
//   <div>
//     <Colorizer/>
//   </div>,
//   document.getElementById('root')
// );