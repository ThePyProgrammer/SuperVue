<template>
  <v-container fluid>
<!--    <v-card>-->
<!--      <div class="pa-8">-->
<!--        <div align="center">-->
<!--          <vue-code-highlight language="kotlin">-->
<!--            <pre>fun hello(world: String) = "hello $world"</pre>-->
<!--            <pre>fun hello&lt;T&gt;hello(world: () -> T) = "hello ${world()}"</pre>-->
<!--          </vue-code-highlight>-->
<!--        </div>-->
<!--      </div>-->
<!--    </v-card>-->
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
        <div v-if="renderComponent">
          Output of <code>iss</code>: {{ mainOut }}
        </div>
        <v-text-field
          v-model="name"
          label="Search a possible Joke"
        >
        </v-text-field>
        <div>
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
      homeOut: "",
      renderComponent: true
    };
  },
  methods: {
    methodThatForcesUpdate() {
      // ...
      this.$forceUpdate();  // Notice we have to use a $ here
      // ...
    }
  },
  async mounted() {
    this.mainOut = await api.main();
    this.homeOut = await api.home();
  }
});

</script>
