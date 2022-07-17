//make years and days array
function generateArray(start, end) {
  let arr = [];
  for (start; start <= end; start++) {
    arr.push(start);
  }
  return arr;
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//1-31
const days = generateArray(1, 31);
//1900-today
const years = generateArray(1900, new Date().getFullYear());

//calculate age
function calculateAge(birthday) {
  //milliseconds in a year 1000*24*60*60*365.24 = 31556736000; 
  let today = new Date(),
  //birthay has 'Dec 25 1998'
  dob = new Date(birthday),
  //difference in milliseconds
  diff = today.getTime() - dob.getTime(),
  //convert milliseconds into years
  years = Math.floor(diff / 31556736000),
  //1 day has 86400000 milliseconds
  days_diff = Math.floor(diff % 31556736000 / 86400000),
  //1 month has 30.4167 days
  months = Math.floor(days_diff / 30.4167),
  days = Math.floor(days_diff % 30.4167);

  console.log(`${years} years ${months} months ${days} days`);
  return `${years} years ${months} months ${days} days`;
}


class AgeCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 1,
      month: 'Jan',
      year: 1999,
      age: '...' };


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
  }

  handleDayChange(e) {
    this.setState({
      day: e.target.value });

  }

  handleMonthChange(e) {
    this.setState({
      month: e.target.value });

  }

  handleYearChange(e) {
    this.setState({
      year: e.target.value });

  }

  handleSubmit(e) {
    e.preventDefault();

    const day = this.state.day,
    month = this.state.month,
    year = this.state.year;

    let age = calculateAge(`${month} ${day} ${year}`);

    this.setState({
      age: age });


  }

  render() {

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("h1", null, "Age Calculator"), /*#__PURE__*/
    React.createElement("form", { onSubmit: this.handleSubmit }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement(Input, { arr: days, handleChange: this.handleDayChange, val: this.state.day }), /*#__PURE__*/
    React.createElement(Input, { arr: months, handleChange: this.handleMonthChange, val: this.state.month }), /*#__PURE__*/
    React.createElement(Input, { arr: years, handleChange: this.handleYearChange, val: this.state.year })), /*#__PURE__*/

    React.createElement("button", { type: "submit" }, "Calculate")), /*#__PURE__*/

    React.createElement("article", null, /*#__PURE__*/
    React.createElement("h2", null, "Your age is"), /*#__PURE__*/
    React.createElement("span", null, this.state.age)), /*#__PURE__*/

    React.createElement("footer", null, "Made with ", /*#__PURE__*/React.createElement("a", { href: "https://reactjs.org/", target: "_blank" }, "ReactJS")));


  }}



function Input(props) {
  let options = props.arr.map(item => /*#__PURE__*/React.createElement("option", { value: item, key: item }, item));

  return /*#__PURE__*/React.createElement("select", { onChange: props.handleChange, value: props.val },
  options);

}



ReactDOM.render( /*#__PURE__*/React.createElement(AgeCalculator, null), document.getElementById('root'));