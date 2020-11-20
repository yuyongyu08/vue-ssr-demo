<template>
  <div>
    The visited URL is: {{ url }}
    <foo/>
    <bar/>
    <baz/>
  </div>
</template>

<script>
const Foo = () => import('./Foo.vue')
const Bar = () => import('./Bar.vue')
const Baz = () => import('./Baz.vue')

export default {
  data() {
    url: "Hello Vue SSR";
  },
  created() {},
  components: {
    Foo,
    Bar,
    Baz
  }
};
</script>

<style>
</style>