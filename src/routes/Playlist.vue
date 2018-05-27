<template>
  <div>
    <TrackList :playlistId="playlistId" />
  </div>
</template>

<script>
import TrackList from '../components/TrackList';

export default {
  name: 'Playlist',
  components: {
    TrackList,
  },
  data() {
    return {
      playlistId: this.$route.params.id,
    };
  },
};
</script>
