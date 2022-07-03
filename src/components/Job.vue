<template>
  <div class="job">
    <img class="logo" alt="Logo" v-bind:src="logo">
<!--    <img class="logo" alt="Logo" src="../../images/account.svg">-->
    <div class="attributes">
      <div class="info">
        <div class="company">
          <h3 style="font-weight: bold">{{ company }}</h3>
        </div>
        <div class="new">
          <h4>{{ this.new }}</h4>
        </div>
        <div class="featured">
          <h4>{{ featured }}</h4>
        </div>
        <div class="position">
          <h3 style="font-weight: bold">{{ position }}</h3>
        </div>
        <div class="misc">
          <h4>{{ postedAt }} <span class="dot"></span> {{ contract }} <span class="dot"></span> {{ location }}</h4>
        </div>
      </div>
    </div>
    <div class="tag">
      <h4>{{ role }} {{ level }} {{ languages }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'id',
    'company',
    'logo',
    'new',
    'featured',
    'position',
    'role',
    'level',
    'postedAt',
    'contract',
    'location',
    'languages',
    'tools',
  ]
}
;
</script>

<style scoped>
.job {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.logo {
  grid-area: 1 / 1 / 4 / 2;
  display: block;
  margin: auto;
}

.attributes {
  grid-area: 1 / 2 / 4 / 6;
}

.tag {
  grid-area: 1 / 6 / 4 / 10;
  display: block;
  margin: auto;
}

.info {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.info > * {
  margin: 10px;
}

.company {
  grid-area: 1 / 1 / 2 / 2;
  color: hsl(180, 29%, 50%);
}

.new {
  grid-area: 1 / 2 / 2 / 3;
}

.featured {
  grid-area: 1 / 3 / 2 / 4;
}

.position {
  grid-area: 2 / 1 / 3 / 4;
  color: hsl(180, 14%, 20%);
  font-weight: bold;
}

.position:hover {
  color: hsl(180, 29%, 50%);
}

.misc {
  grid-area: 3 / 1 / 4 / 4;
  color: hsl(180, 8%, 52%);
}

.dot {
  height: 3px;
  width: 3px;
  margin: 3px 10px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>
