<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <div>
          Quotable Quotes
        </div>
        <v-spacer/>
      </v-card-title>
    </v-card>

    <v-list
      dense
      nav>
      <v-list-item v-for="quote in quotes" v-bind:key="quote">
        <v-card>
          <v-card-title>
            <div>
              {{ quote.content }}
            </div>
            <v-spacer/>
          </v-card-title>
          <div class="text-right pa-8">
            ~ {{ quote.author }}
          </div>
        </v-card>
        <v-spacer />
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { getAllQuotableQuotes } from "@/api/api";


export default Vue.extend({
  name: "QuotableQuotes",
  data: function () {
    return {
      quotes: []
    };
  },
  async mounted() {
    this.quotes = await getAllQuotableQuotes();
  }
});

</script>
