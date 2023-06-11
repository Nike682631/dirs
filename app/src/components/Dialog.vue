<template>
  <div v-if="show">
    <div class="backdrop-blur fixed top-0 bottom-0 left-0 right-0 z-20"></div>
    <div
      class="bg-white grid grid-flow-row auto-rows-max rounded-3xl fixed min-w-60v min-h-20v z-30 top-32 left-32 right-32 bottom-32"
    >
      <font-awesome-icon
        class="p-1 rounded-md h-8 w-8 bg-white transition ease-in-out delay-150 hover:scale-110 text-red-600 absolute top-3 right-3"
        icon="fa-solid fa-xmark"
        @click="closeDialog"
      />
      <div class="p-6 text-3xl font-bold text-orange-500">{{ title }}</div>
      <div class="grid grid-cols-3 grid-rows-5 px-5 scroll-smooth">
        <input
          class="flex text-slate-700 rounded-md px-5 self-center justify-self-start border-2 h-12"
          type="text"
          placeholder="Name"
          v-model="payloadDish.name"
        />
        <input
          class="flex text-slate-700 rounded-md px-5 self-center justify-self-start border-2 h-12"
          type="number"
          placeholder="Price"
          v-model="payloadDish.price"
        />
        <input
          class="flex text-slate-700 rounded-md p-5 my-5 self-center justify-self-start border-2 h-12"
          type="text"
          placeholder="Image URL"
          v-model="payloadDish.image"
        />
        <textarea
          class="flex text-slate-700 rounded-md p-2 border-2 col-span-3 h-20 w-full mr-3"
          type="textarea"
          placeholder="Description"
          v-model="(payloadDish.description as string)"
        />
        <input
          class="flex text-slate-700 rounded-md p-5 my-5 self-center justify-self-start border-2 h-12"
          type="number"
          placeholder="Preparation Time"
          v-model="payloadDish.prepTime"
        />
        <select
          class="flex text-slate-700 rounded-md my-5 p-2 w-3/4 bg-white self-center justify-self-start border-2 h-12"
          name="Availability"
          v-model="payloadDish.availability"
        >
          <option v-for="item in Availability" :value="item">{{ item }}</option>
        </select>
        <select
          class="flex text-slate-700 rounded-md my-5 p-2 w-3/4 bg-white self-center justify-self-start border-2 h-12"
          name="Category"
          v-model="payloadDish.category"
        >
          <option v-for="item in Category" :value="item">{{ item }}</option>
        </select>
        <span
          class="flex text-slate-700 rounded-md my-5 col-span-3 w-32 items-center self-center justify-self-start h-12"
        >
          <input
            class="p-5 m-2 border-2"
            type="checkbox"
            placeholder="Sold out"
            v-model="payloadDish.soldOut"
          />
          <label>Sold out?</label>
        </span>
        <button
          class="absolute bottom-3 right-3 rounded-full bg-amber-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white h-11 w-52"
          @click="Submit"
          >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { createOrUpdateDish } from "../api/api";
import { Dish, Availability, Category } from "../models/dishes";

const props = defineProps<{ title: String; show: Boolean; dish: Dish }>();

const emit = defineEmits(['refreshDishes', 'closeDialog'])
const payloadDish = ref<Dish>(props.dish);

function closeDialog() {
    emit('closeDialog')
}
async function Submit() {
    if(payloadDish.value){
        try{
            await createOrUpdateDish(payloadDish.value)
            emit('refreshDishes')
            closeDialog()
        } catch(error){
            alert(error)
        }
    }
}
</script>
