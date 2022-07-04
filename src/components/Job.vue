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
    <div class="tags">
      <button class="tag" @click="console.log(role)">{{ role }}</button>
      <button class="tag">{{ level }}</button>
      <button class="tag" v-for="language in languages">{{ language }}</button>
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
  background-color: white;
  box-shadow: 0 4px 8px 0 var(--dark-grayish-cyan);
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 10px 30px 10px 10px;
  border-radius: 8px;
  overflow: hidden;
  margin: 15px 0;
}
.job:hover {
  border-left: 5px solid var(--dark-cyan);
}

.logo {
  grid-area: 1 / 1 / 4 / 2;
  display: block;
  margin: auto;
}

.attributes {
  grid-area: 1 / 2 / 4 / 6;
}

.tags {
  grid-area: 1 / 6 / 4 / 10;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
  color: var(--dark-cyan);
  grid-area: 1 / 1 / 2 / 2;
}

.new {
  background-color: var(--dark-cyan);
  color: white;
  grid-area: 1 / 2 / 2 / 3;
  border-radius: 15px;
  display: block;
  margin: auto;
  padding: 2px 10px;
}

.featured {
  background-color: var(--very-dark-grayish-cyan);
  color: white;
  grid-area: 1 / 3 / 2 / 4;
  border-radius: 15px;
  display: block;
  margin: auto;
  padding: 2px 10px;
}

.position {
  color: var(--dark-cyan);
  grid-area: 2 / 1 / 3 / 4;
  font-weight: bold;
}

.job:hover .position {
  color: var(--dark-cyan);
}

.misc {
  grid-area: 3 / 1 / 4 / 4;
  color: var(--dark-grayish-cyan);
}

.dot {
  background-color: var(--dark-grayish-cyan);
  height: 3px;
  width: 3px;
  margin: 3px 10px;
  border-radius: 50%;
  display: inline-block;
}

.tag {
  background-color: var(--grayish-cyan);
  color: var(--dark-cyan);
  border-radius: 5px;
  border: none;
  font-weight: bold;
  display: inline-block;
  font-size: inherit;
  padding: 5px 10px;
  margin: 0 8px;
}

.tag:hover {
  background-color: var(--dark-cyan);
  color: var(--grayish-cyan);
}

</style>
