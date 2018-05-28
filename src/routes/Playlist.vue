<template>
  <div>
    <TrackList />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TrackList from '../components/TrackList';

export default {
  name: 'Playlist',
  components: {
    TrackList,
  },
  methods: {
    ...mapActions(['getPlaylist']),
  },
  computed: {
    playlistId() {
      return this.$route.params.id;
    },
  },
  created() {
    this.getPlaylist(this.playlistId);
  },
};
</script>
