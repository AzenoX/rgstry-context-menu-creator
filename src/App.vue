<script setup lang="ts">
import Form from './components/Form.vue'
import Code from './components/Code.vue'
</script>

<template>
  <h1>RGstry - .reg Generator</h1>
  <p>Add <strong>Open folder as ... project</strong> and <strong>Edit with ...</strong> in context menu.</p>

  <Form/>
  <Code/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 4em;
}
</style>
