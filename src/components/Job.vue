<template>
  <div class="job">
    <img class="logo" alt="Logo" v-bind:src="logo">
    <div class="attributes">
      <div class="info">
        <div class="company">
          <h3 style="font-weight: bold">{{ company }}</h3>
        </div>
        <div class="new" v-if="this.new">
          <h5>NEW!</h5>
        </div>
        <div class="featured" v-if="this.featured">
          <h5>FEATURED</h5>
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
  box-shadow: 0 4px 8px 0 hsl(180, 8%, 52%);
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  overflow: hidden;
  margin: 15px 0;
}
.job:hover {
  border-left: 5px solid hsl(180, 29%, 50%);
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
  grid-column-gap: 0;
  grid-row-gap: 0;
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
  border-radius: 15px;
  color: white;
  background-color: hsl(180, 29%, 50%);
  display: block;
  margin: auto;
  padding: 2px 10px;
}

.featured {
  grid-area: 1 / 3 / 2 / 4;
  border-radius: 15px;
  color: white;
  background-color: hsl(180, 14%, 20%);
  display: block;
  margin: auto;
  padding: 2px 10px;
}

.position {
  grid-area: 2 / 1 / 3 / 4;
  color: hsl(180, 14%, 20%);
  font-weight: bold;
}

.job:hover .position {
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
