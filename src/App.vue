<script>
import Job from './components/Job.vue'
import * as json from "../data.json";
import Filter from "./components/Filter.vue";

export default {
  components: {
    Job,
    Filter,
  },
  data() {
    const jobs = json['default']
    const job_info = []
    const tags = [{name: "Frontend"}, {name:"CSS"}, {name:"JavaScript"}, {name:"Python"}]
    jobs.forEach(job => {
      // const filters = [job.role, job.level].concat(job.languages)
      // const tags = [] // TODO tag functionality
      // const clear = false // TODO clear functionality
      // // Check if clear
      // if (clear) {
      //   tags.length = 0
      // }
      // // Apply filters
      // if (filters.some((element) => tags.includes(element))) {
      //   // TODO move pushing to array inside if statement
      //   console.log("here");
      // }

      job_info.push({
        id: job.id,
        company: job.company,
        logo: job.logo,
        new: job.new,
        featured: job.featured,
        position: job.position,
        role: job.role,
        level: job.level,
        postedAt: job.postedAt,
        contract: job.contract,
        location: job.location,
        languages: job.languages,
        tools: job.tools,
      })
    })
    return {
      posts: job_info,
      filters: tags,
    }
  },
  methods: {
    // Clear filters
    clear(event) {
      tags.length = 0
    }
  }
}
</script>

<template>
  <header>
    <img alt="Header image" src="../images/bg-header-desktop.svg" width="1440"/>
  </header>

  <main>
    <div class="filters">
<!--      TODO fix filters-->
<!--      <filter v-for="filter in filters"-->
<!--              :name="filter.name"/>-->

<!--      TODO remove below when filters fixed-->
      <div class="container">
        <div class="filter">
          Frontend
        </div>
        <button class="delete">X</button>
      </div>

      <div class="container">
        <div class="filter">
          CSS
        </div>
        <button class="delete">X</button>
      </div>

      <div class="container">
        <div class="filter">
          JavaScript
        </div>
        <button class="delete">X</button>
      </div>

      <div class="container">
        <div class="filter">
          Python
        </div>
        <button class="delete">X</button>
      </div>

      <button class="clear">Clear</button>
    </div>

    <job
        v-for="post in posts"
        :id="post.id"
        :company="post.company"
        :logo="post.logo"
        :new="post.new"
        :featured="post.featured"
        :position="post.position"
        :role="post.role"
        :level="post.level"
        :postedAt="post.postedAt"
        :contract="post.contract"
        :location="post.location"
        :languages="post.languages"
        :tools="post.tools"
    />
  </main>
</template>

<style>
@import '../images/base.css';

#app {
  display: block;
  padding: 0 2rem;
  max-width: 1440px;
  margin: 0 auto;
  font-weight: normal;
}

header {
  line-height: 1.5;
  display: flex;
  place-items: center;
  background-color: hsl(180, 29%, 50%);
}
/*TODO*/
/*main {*/
/*  position:relative;*/
/*  z-index: -1;*/
/*}*/

.filters {
  background-color: white;
  box-shadow: 0 4px 8px 0 var(--dark-grayish-cyan);
  padding: 10px 40px;
  border-radius: 8px;
  display: flex;
}

.clear {
  background-color: inherit;
  color: var(--dark-cyan);
  font-weight: bold;
  border: none;
  margin-left: auto;
}

.clear:hover {
  text-decoration: underline;
}

</style>
