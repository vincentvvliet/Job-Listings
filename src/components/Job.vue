<template>
  <div class="job">
    <img class="logo" alt="Logo" v-bind:src="job.logo">
    <div class="attributes">
      <div class="info">
        <div class="company">
          <h3>{{ job.company }}</h3>
        </div>
        <div class="new" v-if="job.new">
          <h5 class="new">NEW!</h5>
        </div>
        <div class="featured" v-if="job.featured">
          <h5 class="featured">FEATURED</h5>
        </div>
        <div class="position">
          <h3>{{ job.position }}</h3>
        </div>
        <div class="misc">
          <h4>{{ job.postedAt }} <span class="dot"></span> {{ job.contract }} <span class="dot"></span> {{
              job.location
            }}</h4>
        </div>
      </div>
    </div>
    <div class="tags">
      <button class="tag" @click="$emit('add-filter', 'role', job.role)">{{ job.role }}</button>
      <button class="tag" @click="$emit('add-filter', 'level', job.level)">{{ job.level }}</button>
      <button class="tag" v-for="language in job.languages"
              @click="$emit('add-filter', 'language', language)">
        {{ language }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    job: Object,
  }
};
</script>

<style scoped>
/* TODO fix font (style and weight) */
/* TODO create container for new and featured and make margin-right auto */
.job {
  background-color: white;
  box-shadow: 0 4px 8px 0 var(--dark-grayish-cyan);
  padding: 10px 25px;
  border-radius: 8px;
  overflow: hidden;
  margin: 15px 0;
}

.job:hover {
  border-left: 5px solid var(--dark-cyan);
}

.logo {
  margin-top: -232px;
  z-index: 1;
  height: 50px;
}

.tags {
  border-top: 1px solid var(--dark-grayish-cyan);
}

.company {
  color: var(--dark-cyan);
}

.new {
  background-color: var(--dark-cyan);
  color: white;
  border-radius: 15px;
  display: block;
  margin: auto;
  padding: 1px 4px;
  font-size: 0.9em;
}

.featured {
  background-color: var(--very-dark-grayish-cyan);
  color: white;
  border-radius: 15px;
  display: block;
  margin: auto;
  padding: 1px 4px;
  font-size: 0.9em;
}

.position {
  color: var(--very-dark-grayish-cyan);
  font-weight: bold;
}

.job:hover .position {
  color: var(--dark-cyan);
  cursor: pointer;
}

.misc {
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
  cursor: pointer;
}

.tag:hover {
  background-color: var(--dark-cyan);
  color: var(--grayish-cyan);
}

/* Mobile positioning */
.job {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 8px;
}

.attributes {
  grid-area: 1 / 1 / 3 / 5;
}

.info {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 5px;
}

.company {
  grid-area: 1 / 1 / 2 / 3;
}

.new {
  grid-area: 1 / 3 / 2 / 4;
}

.featured {
  grid-area: 1 / 4 / 2 / 5;
}

.position {
  grid-area: 2 / 1 / 3 / 5;
}

.misc {
  grid-area: 3 / 1 / 4 / 5;
}

.tags {
  grid-area: 3 / 1 / 5 / 5;
  display: flex;
  flex-wrap: wrap;
  padding-top: 5px;
}

.tags > * {
  margin: 7px;
}

@media only screen and (min-width: 768px) {
  /* Desktop positioning */
  .job {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 0;
    padding: 20px 30px 20px 10px;
  }

  .logo {
    grid-area: 1 / 1 / 4 / 2;
    display: block;
    width: 88px;
    height: auto;
    margin: auto;
  }

  .attributes {
    grid-area: 1 / 2 / 4 / 6;
  }

  .tags {
    grid-area: 1 / 6 / 4 / 10;
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .info {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }

  .company {
    grid-area: 1 / 1 / 2 / 2;
  }

  .featured {
    grid-area: 1 / 3 / 2 / 4;
    font-size: 0.85em;
  }

  .position {
    grid-area: 2 / 1 / 3 / 4;
  }

  .new {
    grid-area: 1 / 2 / 2 / 3;
    font-size: 0.85em;
  }

  .misc {
    grid-area: 3 / 1 / 4 / 4;
  }
}

</style>
