<template>
  <v-layout>
    <v-flex xs12 sm10 offset-sm1>
      <v-avatar :size="150">
        <img :src="user.image" />
      </v-avatar>
      <div>
        <h3 class="headline mb-0">{{ user.displayName }}</h3>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Profile',
  computed: {
    ...mapGetters(['user']),
  },
};
</script>

<style scoped>
</style>
