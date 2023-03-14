const app = Vue.createApp({
//   data() {
//     return {
//       category: [],
//       joke: "In honor of Chuck Norris, all McDonald's in Texas have an even larger size than the super-size. When ordering, just ask to be Chucksized.",
//       selectedCat: "",
//     };

//   },
  data() {
    return {
      async getCategory() {
        const res = await fetch("https://api.chucknorris.io/jokes/categories");
        const category = await res.json();
        console.log(category);
        // this.selectedCat = category.item
      },  
      category: [],
      joke: "In honor of Chuck Norris, all McDonald's in Texas have an even larger size than the super-size. When ordering, just ask to be Chucksized.",
      selectedCat: "",
    //   selectedCat: [ category ]
        }
      },

  methods: {
    async getJoke() {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const result = await res.json();
    //   console.log(result);
      this.joke = result.value
    },


  },
});
app.mount("#category");
