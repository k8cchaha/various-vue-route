<template>
  <div class="about">
    <h1>This is an info page</h1>
    <span class="multi-line">
      {{ qq }}
    </span>
  </div>
</template>

<script setup>
const qq = '哈哈哈囉囉\n喔喔喔'

</script>

<style>
.multi-line {
  white-space: pre-line;
  display: inline-block;
  text-align: left;
}
</style>