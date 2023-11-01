<template>
  <div>
    <button @click="goSwitch()">切換到 {{ switchTo}}</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const switcher = ref(false)
const switchTo = computed(()=>{
  return switcher.value ? 'info' : 'bank'
})

const router = useRouter()

function goSwitch() {
  router.push({ name: switchTo.value })
  switcher.value = !switcher.value
}
</script>