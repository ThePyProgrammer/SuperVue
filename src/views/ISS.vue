<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <div>
          International Space Station Data
        </div>
        <v-spacer/>
      </v-card-title>
      <div class="pa-8">
        <div>
          {{ mainOut }}
        </div>
      </div>
    </v-card>

    <v-list
      dense
      nav>
      <v-list-item v-for="astronaut in astronauts" v-bind:key="astronaut">
        <v-card>
          <v-card-title>
            <div>
              <code>{{ astronaut }}</code>
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
import api from "@/api/main";

export default Vue.extend({
  name: "ISS-Home",
  data: function () {
    return {
      name: "",
      mainOut: "",
      astronauts: []
    };
  },
  async mounted() {
    this.mainOut = await api.main();
    this.astronauts = await api.getAstronauts();
  }
});

</script>
