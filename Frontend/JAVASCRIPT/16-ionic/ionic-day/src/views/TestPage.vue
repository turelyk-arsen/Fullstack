<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>My Page</ion-title>

        <ion-button fill="outline" router-link="/home"> Home </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card color="light"
        ><ion-card-header>
          <ion-card-title>Hello {{ firstName }}</ion-card-title>
          <img
            :class="gender"
            v-bind:src="picture"
            :alt="`${firstName} ${lastName}`"
          />
          <ion-card-subtitle>{{ firstName }} {{ lastName }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>Email: {{ email }}</ion-card-content>

        <ion-button v-on:click="getUser()" :class="gender"
          >Get Random User</ion-button
        >

        <!-- <ion-card-content>
          Here's a small text description for the card content. Nothing more,
          nothing less.
        </ion-card-content> -->
      </ion-card>

      <!-- <h1>Hello {{ firstName }}</h1>
      <img
        :class="gender"
        v-bind:src="picture"
        :alt="`${firstName} ${lastName}`"
      />
      <h1>{{ firstName }} {{ lastName }}</h1>
      <h3>Email: {{ email }}</h3>
      <ion-button v-on:click="getUser()" :class="gender"
        >Get Random User</ion-button
      > -->
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/vue";

export default {
  name: "MyPage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
  },
  data() {
    return {
      firstName: "",
      // lets add more data
      lastName: "",
      email: "",
      gender: "",
      // our little api .. remeber ;) ?
      picture: "",
    };
  },
  methods: {
    // add any methods here
    async getUser() {
      //console.log(this.firstName);
      //by using"THIS."
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      console.log(results);
      // this.firstName = 'Igor',
      // this.lastName = 'Techno Lord Trainer',
      // this.email = 'igor.marty@cap4lab.com',
      // this.gender = 'female',
      // this.picture = 'https://randomuser.me/api/portraits/women/10.jpg'
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },

  mounted() {
    // add any initialization code here
  },
};
</script>
