<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <div>
          <highlightjs language='kotlin' code="fun hello&lt;T&gt;(world: () -> T) = 'hello ${world}'" />
          <pre><code class="kotlin"></code></pre>
        </div>
        <v-spacer/>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home"
});

</script>
