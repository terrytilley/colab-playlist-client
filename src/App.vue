<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-if="isAuth"
      v-model="drawer"
      clipped
      fixed
      app
    >
      <Sidebar />
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left color="green">
      <v-toolbar-side-icon v-if="isAuth" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title @click="clickRoot" class="logo">Colab Playlists</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-if="isAuth" @click="logout">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-start>
          <v-flex>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Sidebar from './components/layout/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
  data() {
    return {
      drawer: true,
    };
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    clickRoot() {
      this.$router.push('/');
    },
    logout() {
      localStorage.removeItem('access_token');
      this.$store.commit('setToken', null);
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.logo {
  cursor: pointer;
}
</style>
