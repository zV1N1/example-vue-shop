<template>
    <span class="badge">
        <slot></slot>
    </span>
</template>

<script>
export default {

}
</script>

<style>
.badge {
  display: inline-block;
  padding: 0.15rem 1.25rem;
  background-color: #f0b800;
  color: black;
  border-radius: 30px;
}

</style>