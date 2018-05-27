<template>
  <div>
    <h1>TrackList</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TrackList',
  props: ['playlistId'],
  methods: {
    ...mapActions(['getPlaylist']),
  },
  created() {
    this.getPlaylist();
  },
};
</script>
