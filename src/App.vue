<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-toolbar title="SAFR Reporting and Treatment" color="red">
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
  font-weight: 600;
  padding-right: 16px;
  color: white;
}

.menu-item.router-link-active {
  font-weight: 700
}
</style>
