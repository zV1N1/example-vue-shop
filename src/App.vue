<template>
  <div>
      <the-header />
      <!-- <transition name="route">
        <router-view></router-view>
      </transition> -->
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>     
  </div>
</template>

<script>
import TheHeader from './components/header/TheHeader'

  export default {
    components: {
      TheHeader,
    }
  }
</script>

<style>
* {
  margin: 0px;
  padding: 0px
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

/* animation */
.route-enter-from {
    opacity: 0;
    transform: translateY(-30px)
}
.route-enter-active {
    transition: all 0.2s ease-out;
}
.route-enter-to {
    opacity: 1;
    transform: translateY(0)
}

.route-leave-from {
    opacity: 1;
    transform: translateY(0)
}

.route-leave-active {
    transition: all 0.2s ease-in;
}
.route-leave-to {
    opacity: 0;
    transform: translateY(30px)
}

</style>
