<template>
  <div>
    <h1>{{ playlist.name }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TrackList',
  computed: {
    ...mapGetters(['playlist']),
  },
};
</script>
