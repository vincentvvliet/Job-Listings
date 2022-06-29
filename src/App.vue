<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Header image" src="./assets/bg-header-desktop.svg" width="1440"/>
  </header>

  <main>
    <div>
      <h1>Filters</h1>
    </div>

    <!--      TODO Create jobs for each job in data.json-->
    <div class="job">
      <div class="attributes">
        <img class="logo" alt="Logo" src="./assets/faceit.svg">
        <div class="info">
          Information
        </div>
      </div>
      <div class="tag">
        Tags
      </div>
    </div>
  </main>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.job {
  background-color: white;
  padding: 35px;
  border-radius: 8px;
  border: 1px solid black;
  overflow: hidden;
}

.logo {
  margin-right: 25px;
  width: 10%;
  float: left;
}

.info {
  width: 80%;
  float: left;
}

.tag {
  text-align: right;
}

.attributes, .tag {
  float: left;
  width: 45%;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsl(180, 29%, 50%);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: block;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    margin-bottom: 80px;
    background-color: hsl(180, 29%, 50%);
  }
}
</style>
