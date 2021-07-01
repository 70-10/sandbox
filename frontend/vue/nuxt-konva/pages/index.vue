<template>
  <section class="container">
    <v-stage :config="configKonva">
      <v-layer>
        <v-circle @dragstart="handleDragStart" @dragend="handleDragEnd" :config="configCircle"></v-circle>
        <v-text :config="text"></v-text>
      </v-layer>
    </v-stage>
  </section>
</template>

<script>
const width = process.client ? window.innerWidth : 800
const height = process.client ? window.innerHeight : 800
export default {
  data: () => ({
    configKonva: {
      width,
      height
    },

    text: {
      x: 20,
      y: 60,
      text:
        "COMPLEX TEXT\n\nAll the world's a stage, and all the men and women merely players. They have their exits and their entrances.",
      fontSize: 18,
      fontFamily: 'Calibri',
      fill: '#555',
      width: 300,
      padding: 20,
      align: 'center',
      draggable: true
    },
    configCircle: {
      text: 'Text Circle',
      x: 100,
      y: 100,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true
    },

    isDragging: false
  }),
  methods: {
    handleDragStart() {
      this.isDragging = true
    },
    handleDragEnd() {
      this.isDragging = false
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
