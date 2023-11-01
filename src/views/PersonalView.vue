<template>
  <div class="personal">
    <h1>This is an personal page</h1>
    <PersonalSwitch />
    <router-view></router-view>
  </div>
</template>

<script>
import PersonalSwitch from '@/components/PersonalSwitch.vue'

export default {
  name: 'PersonalView',
  components: {
    PersonalSwitch
  }
}
</script>