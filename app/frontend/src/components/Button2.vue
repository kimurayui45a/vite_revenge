<template>
  <div>
    <h3>{{ message }}</h3>
    <button @click="count++">押してみて</button>
    <p>Button clicks: {{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Vueは恐ろしいよ!',
      count: 0
    };
  }
};
</script>

<style scoped>
h3 {
  color: red;
}
</style>
