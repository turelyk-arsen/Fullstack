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
    myfunction (par) {
      console.log(par);
      const res = await fetch("https://api.chucknorris.io/jokes/random?category=" + item);
      const result = await res.json();
      this.joke = result.value;
      this.selectedCat = par,
    }
  },

  mounted() {
    this.getCategory();
    this.getJoke()
  }
});

app.mount("#category");
