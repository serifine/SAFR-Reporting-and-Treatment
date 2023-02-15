<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const emote = '/me copied an emote from a button click.'
function copy() {
  navigator.clipboard.writeText(emote)
}
</script>

<template>
  <v-app>
    <v-toolbar title="SAFR Reporting and Treatment">
      <router-link class="menu-item" to="/">Home</router-link>
      <router-link class="menu-item" to="reports">Reports</router-link>
    </v-toolbar>

    <RouterView />
  </v-app>
</template>

<style scoped>
.menu-item {
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  padding-right: 16px;
}

.menu-item.router-link-active {
  color: red;
}
</style>
