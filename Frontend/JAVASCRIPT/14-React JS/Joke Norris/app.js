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
  
} // end of JokeGenerator Component
