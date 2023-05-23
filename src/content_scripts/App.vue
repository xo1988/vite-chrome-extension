<template>
  <div class="contentsview">
    <img :src="logo"/>
    <span>this is a test</span>
  </div>
</template>

<script setup lang="ts">
console.log('content scripts')
import logo from '../../public/vue.svg'
</script>

<style scoped>
.contentsview {
  position: fixed;
  right: 0px;
  bottom: 0;
}
</style>