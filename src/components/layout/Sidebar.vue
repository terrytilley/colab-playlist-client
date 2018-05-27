<template>
  <div>
    <v-subheader>Playlists</v-subheader>
    <template v-for="(item) in items">
      <v-list :key="item.name" dense>
        <v-list-tile @click="clickPlaylist(item.id)">
          <v-list-tile-content>
            <v-list-tile-title v-html="item.name"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </template>
  </div>
</template>

<script>
import api from '../../api';

export default {
  name: 'Sidebar',
  data() {
    return {
      items: [],
    };
  },
  methods: {
    clickPlaylist(id) {
      this.$router.push({
        name: 'Playlist',
        params: { id },
      });
    },
  },
  async mounted() {
    const { token } = this.$store.getters;

    await api.getPlaylists(token).then(res => {
      res.data.items.forEach(({ id, name, collaborative }) => {
        if (collaborative) this.items.push({ id, name });
      });
    });
  },
};
</script>
