<script>
import Job from './components/Job.vue'
import * as json from "../data.json";

export default {
  components: {
    Job
  },
  data() {
    const jobs = json['default']
    const job_info = []
    jobs.forEach(job => {
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
      posts: job_info
    }
  },
}
</script>

<template>
  <header>
    <img alt="Header image" src="../images/bg-header-desktop.svg" width="1440"/>
  </header>

  <main>
    <div class="filters">
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
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
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
}

.filter {
  background-color: var(--grayish-cyan);
  color: hsl(180, 29%, 50%);
  border-radius: 5px 0 0 5px;
  font-weight: bold;
  display: inline-block;
  padding: 2px 10px;
}

.container {
  display: inline-flex;
  margin: 0 8px;
}

.delete {
  background-color: hsl(180, 29%, 50%);
  color: var(--grayish-cyan);
  border-radius: 0 5px 5px 0;
  font-weight: bold;
  display: inline-block;
  padding: 2px 10px;
  border: none;
}

.delete:hover {
  color: white;
  background-color: var(--very-dark-grayish-cyan);
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
    background-color: hsl(180, 29%, 50%);
  }
}
</style>
