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
      // our little api ...
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
});
// if you want to mount this script to app in HTML
// you will need to type/create the app.mount and you pass it to the selector
app.mount("#app");
