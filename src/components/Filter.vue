<template>
  <div class="container">
    <div class="filter">
      {{ filter.name }}
    </div>
    <button class="delete" @click="$emit('remove-filter', filter)">X</button>
  </div>
</template>

<script>
export default {
  props: {
    filter: Object,
  },
};
</script>

<style>
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
  cursor: pointer;
}
</style>
