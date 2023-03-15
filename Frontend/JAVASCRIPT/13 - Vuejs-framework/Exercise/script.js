const app = Vue.createApp({
  data() {
    return {
      category: [],
      joke: "empty",
      selectedCat: "",
    };
  },

  methods: {
    async getJoke() {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const result = await res.json();
      this.joke = result.value;
    },
    async getCategory() {
      const res = await fetch("https://api.chucknorris.io/jokes/categories");
      const category = await res.json();
      this.category = category;
      console.log(category);
    },
    // myfunction (par) {
    //   console.log(par);
    //   const res = await fetch("https://api.chucknorris.io/jokes/random?category=" + item);
    //   const result = await res.json();
    //   this.joke = result.value;
    //   this.selectedCat = par,
    // }
  },

  mounted() {
    this.getCategory();
    this.getJoke();
  },
});

app.mount("#category");

// count
const Counter = {
  data() {
    return {
      counter: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
};
Vue.createApp(Counter).mount("#counter");

// title
const AttributeBinding = {
  data() {
    return {
      message: "Page load" + new Date().toLocaleString(),
    };
  },
};
Vue.createApp(AttributeBinding).mount("#bind-attribute");

// button
const EventHandling = {
  data() {
    return {
      message: "Hello, Vue.js!",
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
  },
};
Vue.createApp(EventHandling).mount("#event-handling");

// input
const TwoWayBinding = {
  data() {
    return {
      message: "Hello Vue.js!",
    };
  },
};
Vue.createApp(TwoWayBinding).mount("#two-way-binding");

// IF
const ConditionalRendering = {
  data() {
    return {
      seen: true,
    };
  },
};
Vue.createApp(ConditionalRendering).mount("#conditional-rendering");

// FOR
const ListRendering = {
  data() {
    return {
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Bind something awesome" },
      ],
    };
  },
};
Vue.createApp(ListRendering).mount("#list-rendering");

// components 
const TodoItem = {
  template: `<li>This is one of the your task</li>`
}

const appTask = Vue.createApp({
  components: {
    TodoItem,
  },
});

appTask.mount("#newComponent");

// next components 
