<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <div>
          Programming Jokes
        </div>
        <v-spacer/>
      </v-card-title>
<!--      <v-text-field-->
<!--        v-model="name"-->
<!--        label="Search a possible Joke"-->
<!--      >-->
<!--      </v-text-field>-->
    </v-card>

    <v-list
      dense
      nav>
      <v-list-item v-for="joke in jokes" v-bind:key="joke">
<!--        <v-list-item-content>-->
<!--          <v-list-item-title>-->
<!--            {{ joke }}-->
<!--          </v-list-item-title>-->
<!--        </v-list-item-content>-->
    <v-card>
      <v-card-title>
        <div>
          <code>{{ joke }}</code>
        </div>
        <v-spacer/>
      </v-card-title>
    </v-card>
        <v-spacer />
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { getJokes } from "@/api/api";


export default Vue.extend({
  name: "JokesList",
  data: function () {
    return {
      jokes: []
    };
  },
  async mounted() {
    this.jokes = await getJokes();
  }
});

</script>
