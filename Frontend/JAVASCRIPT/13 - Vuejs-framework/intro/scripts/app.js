const app = Vue.createApp({
  // 1. template
  //   template: "<h1>Hello World</h1>",
  // 2. template and adding data
  //   template: "<h1>Hello {{firstName}}</h1>",

  // 2. add
  data() {
    // DATA is a function, it will return that is an object
    return {
      // 2. add the first BUT in static ... at the moment
      firstName: "Gabriel",
      // lets add more data
      lastName: "LeMe",
      email: "gabriel.abreu-damaso@cap4lab.com",
      gender: "male",
      // our little api ...
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  }, // end of data()

  //event v-on: click= 'gender
  // lets set the method!
  // we don't like static code => we like dynamic stuff
  methods: {
    async getUser() {
      // console.log(this.firstName)
      // by using this
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
        console.log(results)

      //     this.firstName = "Igor",
      //     this.lastName = "Techno Lord",
      //     this.email = "igor.marty@cap4lab.com",
      //     this.gender = "female",
      //     this.picture = "https://randomuser.me/api/portraits/women/10.jpg";

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});
// if you want to mount this script to app in HTML
// you will need to type/create the app.mount and you pass it to the selector
app.mount("#app");
