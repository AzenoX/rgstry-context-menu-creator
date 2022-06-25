<script setup lang="ts">
import Form from './components/Form.vue'
import Code from './components/Code.vue'
</script>

<template>
  <h1>.reg Generator</h1>
  <h2>Add actions in context menu easily :)</h2>
  <p>Add <strong>Open folder as ... project</strong> and <strong>Edit with ...</strong>.</p>

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
