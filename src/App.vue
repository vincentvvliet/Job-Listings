<script src="./retrieveData.js">
import Job from './components/Job.vue'
import retrieveData from './retrieveData.js'

export default {
  components: {
    Job
  },
  data() {
    const jobs = retrieveData.getData("data.json")
    console.log(jobs)
    const job_info = []
    jobs.forEach(job => {
      job_info.append({
        id: job.id,
        company: job.company,
        logo: '.' + job.logo,
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
    <img alt="Header image" src="./images/bg-header-desktop.svg" width="1440"/>
  </header>

  <main>
    <div>
      <h1>Filters</h1>
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
@import 'images/base.css';

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
  margin: 15px 0;
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
