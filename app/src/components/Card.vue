<template>
  <div
    class="card grid grid-flow-row border border-slate-300 bg-white hover:bg-sky-200 hover:border-slate-400 rounded-3xl min-h-80 w-72"
  >
    <div class="relative rounded-3xl w-full">
      <div class="flex z-10 absolute bottom-8 right-2">
        <font-awesome-icon
          class="p-1 mr-2 rounded-md h-5 w-5 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-gray-500"
          icon="fa-solid fa-pen"
          @click="editDish()"
          />
          <font-awesome-icon
          class="p-1 rounded-md h-5 w-5 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-red-600"
          icon="fa-solid fa-trash"
          @click="deleteDish()"
        />
      </div>
      <img
        class="card-image relative z-0 top-0 left-0 rounded-t-3xl w-full"
        :src="dish.image"
      />
    </div>
    <div class="grid place-items-center so">
      <span class="card-title">Name: {{ dish.name }}</span>
      <span class="card-description">Description: {{ dish.description }}</span>
      <span class="card-price"
        >Price: {{ dish.currency + " " + dish.price }}</span
      >
      <span class="card-category">Category: {{ dish.category }}</span>
      <span class="card-category">Preparation time: {{ dish.prepTime }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Dish } from "../models/dishes";

const props = defineProps<{ dish: Dish }>();
const emit = defineEmits<{ 
    (e: 'editSelecedDish', dish: Dish): Dish 
    (e: 'deleteSelectedDish', dish: Dish): Dish 
}>();

function editDish(){
    emit('editSelecedDish', props.dish)
}

function deleteDish(){
    emit('deleteSelectedDish', props.dish)
}

</script>

<style scoped>
span {
  display: block;
}
</style>
