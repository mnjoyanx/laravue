<template>
  <div>
    <navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./partials/Navbar/Navbar";
export default {
  components: { Navbar },
};
</script>

<style>
.container {
  width: 80%;
  margin: 0 auto;
}
</style>
