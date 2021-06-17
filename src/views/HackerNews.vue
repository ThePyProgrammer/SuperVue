<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <div>
          Hacker News
        </div>
      </v-card-title>
        <v-spacer/>
    </v-card>

    <v-list
      dense
      nav>
      <v-list-item v-for="article in articles" v-bind:key="article.title">
        <v-card>
          <v-card-title>
            <div>
              {{ article.title }}
            </div>
            <v-spacer/>
          </v-card-title>
          <div class="pa-8">
            {{ article.getContent() }}
          </div>
        </v-card>
        <v-spacer />
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { getAllTopStories } from "@/api/api";


export default Vue.extend({
  name: "QuotableQuotes",
  data: function () {
    return {
      articles: []
    };
  },
  async mounted() {
    this.articles = await getAllTopStories();
  }
});

</script>
