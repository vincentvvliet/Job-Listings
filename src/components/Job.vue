<template>
  <div class="job">
    <div class="attributes">
      <img class="logo" alt="Logo" src='{{ logo }}'>
      <img class="logo" alt="Logo" src='../images/insure.svg'>
      <div class="info">
        Information
        <h4>{{ company }}</h4>
      </div>
    </div>
    <div class="tag">
      Tags
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
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
