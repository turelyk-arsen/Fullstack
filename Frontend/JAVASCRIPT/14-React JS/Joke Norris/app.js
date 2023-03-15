"use strict"; // activate strict mode

// this line creates a shorthand alias for the React.createElement function
const e = React.createElement;

class JokeGenerator extends React.Component {
  constructor(props) {
    // constructor method for the class
    super(props); // super(props): this call the 'super method'
    // this.state: this initializes the component state
    // it's an object that store that can be updated and accessed by the component
    this.state = {
      joke: "empty",
      categories: [],
      selectedCat: "",
    }; // end of the constructor
  }
  // retrieve random joke from the API
  async getRndJoke() {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const jsonRes = await res.json();
    const jokeValue = jsonRes.value;
    // this.setState() : this update the component's state by calling the setState method
    // with a new state object that sets the joke property to the new joke value
    this.setState(() => ({
      joke: jokeValue,
    }));
  }

  async getCategories() {
    const res = await fetch("https://api.chucknorris.io/jokes/categories");
    const cats = await res.json();
    this.setState(() => ({
      categories: cats,
    }));
  }
  // lets build the asynchronous function that retrieves a joke from the chuck norris API
  // that matches a specified category (check constructor)
  async getCatJoke(catParam) {
    const res = await fetch(
      "https://api.chucknorris.io/jokes/random?category=" + catParam
    );
    const jsonRes = await res.json();
    const jokeValue = jsonRes.value;
    // update the data
    this.setState(() => ({
      joke: jokeValue,
      selectedCat: catParam,
    }));
  }
  // put into the DOM
  componentDidMount() {
    this.getRndJoke();
    this.getCategories();
  }
  // render method is used to render the component to the DOM
  // it returns a call to the createElement() function
  // to create a React tElements (HTML) JSX
  // with a div containing the following child elements:
  render() {
    return e(
      // e is a shorthand for the React.createElement function see const above
      "div",
      null,
      e("h1", null, `Jokes - ${this.state.selectedCat}`),
      e(
        "ul",
        null,
        this.state.categories.map((cat) =>
          e(
            "li",
            {
              className: this.state.selectedCat === cat ? "selected" : "",
              onClick: () => this.getCatJoke(cat),
            },
            cat
          )
        )
      ),
      e("p", null, this.state.joke),
      e("button", { onClick: () => this.getRndJoke() }, "Make my day")
    );
  }
} // end of JokeGenerator Component

const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(e(JokeGenerator));
