<template>
  <div class="container">
    <img class="full" src="./assets/full.png"/>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.full {
  max-width: 90%;
  max-height: 90vh;
  animation: boom;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}

@keyframes boom {
  0% {
    filter: drop-shadow(0 0 6px #aaa);
  }
  50% {
    filter: drop-shadow(0 0 12px #eee);
  }
  100% {
    filter: drop-shadow(0 0 6px #aaa);
  }
}
</style>
