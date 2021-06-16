<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <div v-if="name === ''">
          Your profile
        </div>
        <div v-else>
          Welcome to Vue, {{ name }}
        </div>
        <v-spacer/>
      </v-card-title>
      <div class="pa-8">
        <v-text-field
          v-model="name"
          label="Name"
        >
        </v-text-field>
        <div>
          Output of <code>iss</code>: {{ mainOut }} <br/>
          Output of <code>home</code>: {{ homeOut }}
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import api from "@/api/iss";


export default Vue.extend({
  name: "ISS-Home",
  data: function () {
    return {
      name: "",
      mainOut: "",
      homeOut: ""
    };
  },
  async mounted() {
    this.mainOut = await api.iss();
    this.homeOut = api.home();
    setTimeout(mounted, 1000);
  }
});

</script>
