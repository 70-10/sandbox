<template>
  <div>
    <hollow-dots-spinner
      class="loading"
      :animation-duration="1000"
      :dot-size="15"
      :dots-num="3"
      color="#ff1d5e"
    />
  </div>
</template>

<script>
import { HollowDotsSpinner } from "epic-spinners";
export default {
  components: {
    HollowDotsSpinner
  }
};
</script>

<style scoped>
.loading {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  margin: auto;
}
</style>
