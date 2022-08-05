<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="floor in FloorList" :key="floor.id" :list="floor" />
    <Brand />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ListContainer from './ListContainer';
import Recommend from './Recommend';
import Rank from './Rank';
import Like from './Like';
import Floor from './Floor';
import Brand from './Brand';
export default {
  name: 'Home',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      FloorList: (state) => state.home.getFloorList,
    }),
  },
  mounted() {
    this.$store.dispatch('getFloorList');
  },

  methods: {},
};
</script>

<style lang="less" scoped></style>
