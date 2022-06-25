<template>
  <form class="mt-5" @submit="generateCode">
    <div class="mb-3">
      <label for="actionName" class="form-label">Software Name</label>
      <input type="text" id="actionName" class="form-control" v-model="actionName"/>
    </div>
    <div class="mb-3">
      <label for="path" class="form-label">Path to software</label>
      <input type="text" id="path" class="form-control" v-model="path" @input="fillIconPathInput">
    </div>
    <div class="mb-3">
      <label for="iconPath" class="form-label">Icon Path (Should take .exe file, it seems not work with .ico file. Ex: ../software.exe)</label>
      <input type="text" id="iconPath" class="form-control" v-model="iconPath">
    </div>
    <button type="submit" class="btn btn-primary">Generate .reg file</button>
  </form>
</template>

<script>
import store from '../store/index'

export default {
  name: "Form",
  data() {
    return {
      actionName: '',
      path: '',
      iconPath: '',
    }
  },
  methods: {
    fillIconPathInput() {
      this.iconPath = this.path;
    },
    generateCode(e) {
      e.preventDefault();

      store.state.code = this.getGeneratedCode();
    },
    getGeneratedCode() {
      const iconPath = this.iconPath.replaceAll('\\', '\\\\');
      const path = this.path.replaceAll('\\', '\\\\');

      const actionFullName = `Edit with ${this.actionName}`;
      const actionFolderFullName = `Open folder as ${this.actionName} project`;

      const lines = [
        ` Windows Registry Editor Version 5.00`,
        ` ; Open files`,
        ` [HKEY_CLASSES_ROOT\\*\\shell\\${actionFullName}]`,
        ` @="${actionFullName}"`,
        ` "Icon"="${iconPath},0"`,
        ` [HKEY_CLASSES_ROOT\\*\\shell\\${actionFullName}\\command]`,
        ` @="\\"${path}\\" \\"%1\\""`,
        ` ; This will appear when you right click on a folder`,
        ` [HKEY_CLASSES_ROOT\\Directory\\shell\\${this.actionName}]`,
        ` @="${actionFolderFullName}"`,
        ` "Icon"="\\"${iconPath}\\",0"`,
        ` [HKEY_CLASSES_ROOT\\Directory\\shell\\${this.actionName}\\command]`,
        ` @="\\"${path}\\" \\"%1\\""`,
        ` ; This will appear when you right click inside a folder`,
        ` [HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\${this.actionName}]`,
        ` @="${actionFolderFullName}"`,
        ` "Icon"="\\"${iconPath}\\",0"`,
        ` [HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\${this.actionName}\\command]`,
        ` @="\\"${path}\\" \\"%V\\""\n`
      ];

      return lines.join('\n');
    }
  }
}
</script>

<style scoped lang="scss">
form {
  width: 60%;
  margin: 0 auto;
  text-align: left;
}
</style>