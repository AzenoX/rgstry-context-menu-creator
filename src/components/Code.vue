<template>
  <div class="mt-5">
    <div id="code_wrapper">{{ code }}</div>
    <div>
      <button id="copy" class="btn btn-primary m-1" @click.prevent="copyURL" :disabled="hasCode">Copy code</button>
      <button id="download" class="btn btn-primary m-1" @click.prevent="downloadFile" :disabled="hasCode">Download .reg file</button>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "Code",
  computed: {
    code() {
      return store.state.code;
    },
    hasCode() {
      return this.code.length > 0 ? false : 'disabled';
    }
  },
  methods: {
    async copyURL() {
      try {
        await navigator.clipboard.writeText(this.code);
        this.$toast.open({
          message: 'Code Copied',
          type: 'success',
        });
      } catch($e) {
        this.$toast.open({
          message: 'Something went wrong!',
          type: 'error',
        });
      }
    },
    downloadFile() {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.code));
      element.setAttribute('download', 'file.reg');

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }
  }
}
</script>

<style scoped lang="scss">
#code_wrapper{
  min-height: 10px;

  width: 60%;
  padding: 1em;
  margin: 1em auto;
  background: #37474f;

  text-align: left;
  color: #fff;
  overflow-wrap: break-word;
}
</style>
