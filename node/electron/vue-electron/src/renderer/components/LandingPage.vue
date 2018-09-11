<template>
  <div id="main" class="container-fluid">
    <div class="row">
      <div class="col-9">
        <nav class="navbar sticky-top navbar-light bg-light">
          <input type="text" class="form-control" placeholder="Search" value="https://www.github.com/">
        </nav>
        <webview id="browse" src="https://www.github.com/" style="display:inline-flex; width:100%; height:100vh"></webview>
      </div>
      <div class="col">
        test
      </div>
    </div>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
#main {
  padding: 0;
}
</style>
