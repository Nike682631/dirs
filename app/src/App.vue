<template>
  <div id="app">
    Let's create the four crud points first!

    <span class="text-3xl font-bold underline">
      yello
    </span>
    <section>
      <h1>Create</h1>
      <span class="text-3xl font-bold underline">Hi</span>
      <button>Add new dish</button>
    </section>
    <section>
      <h1>Read</h1>
      {{ dishes.map(dish => dish.name) }}
    </section>
    <section>
      <h1>Update</h1>
    </section>
    <section>
      <h1>Delete</h1>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Dish } from './models/dishes';

const dishes = ref<Array<Dish>>([])

</script>
