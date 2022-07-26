<script>
import Job from './components/Job.vue'
import json from "../data.json";
import Filter from "./components/Filter.vue";

export default {
  components: {
    Job,
    Filter,
  },
  data() {
    return {
      filters: [],
    }
  },
  computed: {
    jobs() {
      const roleFilter = this.filters.find(filter => filter.type === 'role');
      const levelFilter = this.filters.find(filter => filter.type === 'level');
      const languageFilters = this.filters.filter(filter => filter.type === 'language');

      return json.filter(job => {
        return (!roleFilter || job.role === roleFilter.name) &&
            (!levelFilter || job.level === levelFilter.name) &&
            (languageFilters.length === 0 || languageFilters.every(({name}) => job.languages.includes(name)));
      })
    },
  },
  methods: {
    /**
     * Clear all filters.
     */
    clear() {
      this.filters.splice(0, this.filters.length);
    },
    /**
     * Add a filter.
     * @param {String} type - filter type
     * @param {String} name - filter name
     */
    addFilter(type, name) {
      if (!this.filters.some(element => element.name === name)) {
        this.filters.push({type, name});
      }
    },
    /**
     * Remove a filter.
     * @param {Object} filter - Filter object
     */
    removeFilter(filter) {
      this.filters.splice(this.filters.indexOf(filter), 1);
    },
  }
}
</script>

<template>
  <header>
    <img alt="Header image" src="../images/bg-header-desktop.svg"/>
  </header>

  <main>
    <div class="filter-container" v-if="filters.length > 0">
      <div class="filters">
        <Filter v-for="filter in filters"
                :filter="filter"
                @remove-filter="removeFilter"
        />
      </div>
      <button class="clear" @click="clear">Clear</button>
    </div>

    <Job
        v-for="job in jobs"
        :job="job"
        @add-filter="addFilter"
    />
  </main>
</template>

<style>
:root {
  --dark-cyan: hsl(180, 29%, 50%);
  --grayish-cyan: hsl(180, 52%, 96%);
  --dark-grayish-cyan: hsl(180, 8%, 52%);
  --very-dark-grayish-cyan: hsl(180, 14%, 20%);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-family: 'League Spartan', sans-serif;
  font-size: 15px;
}

body {
  background: hsl(180, 52%, 96%);
  color: hsl(180, 8%, 52%);
  transition: color 0.5s, background-color 0.5s;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  display: block;
  font-weight: normal;
}

header {
  line-height: 1.5;
  display: flex;
  place-items: center;
  background-color: hsl(180, 29%, 50%);
}

header > img {
  width: 100%;
}

main {
  max-width: 375px;
  padding: 0 2rem;
  margin: 0 auto;
}

.filter-container {
  background-color: white;
  box-shadow: 0 4px 8px 0 var(--dark-grayish-cyan);
  padding: 10px;
  border-radius: 8px;
  margin-top: -25px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.filters {
  display: inline-block;
  grid-area: 1 / 1 / 2 / 5;
}

.clear {
  background-color: inherit;
  color: var(--dark-grayish-cyan);
  font-weight: bold;
  border: none;
  margin-left: auto;
  grid-area: 1 / 5 / 2 / 6;
}

.clear:hover {
  text-decoration: underline;
  color: var(--dark-cyan);
  cursor: pointer;
}

@media only screen and (min-width: 768px) {
  *,
  *::before,
  *::after {
    font-size: 20px;
  }

  main {
    max-width: 1440px;
  }

  .filters {
    display: flex;
  }

  .filter-container {
    padding: 15px 40px;
  }
}

</style>
