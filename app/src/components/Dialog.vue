<template>
  <div v-if="show">
    <div class="backdrop-blur fixed top-0 bottom-0 left-0 right-0 z-20"></div>
    <div
      class="bg-white grid grid-flow-row auto-rows-max rounded-3xl fixed min-w-60v min-h-20v z-30 top-32 left-32 right-32 bottom-32"
    >
      <font-awesome-icon
        class="p-1 rounded-md h-8 w-8 bg-white transition ease-in-out delay-150 hover:scale-110 text-red-600 absolute top-3 right-3"
        icon="fa-solid fa-xmark"
      />
      <div class="p-6 text-3xl font-bold text-orange-500">{{ title }}</div>
      <div class="grid grid-cols-3 grid-rows-5 px-5 scroll-smooth">
        <input
          class="flex rounded-md px-5 self-center justify-self-start border-2 h-12"
          type="text"
          placeholder="Name"
        />
        <input
          class="flex rounded-md px-5 self-center justify-self-start border-2 h-12"
          type="number"
          placeholder="Price"
        />
        <input
          class="flex rounded-md p-5 my-5 self-center justify-self-start border-2 h-12"
          type="text"
          placeholder="Image URL"
        />
        <textarea
          class="flex rounded-md p-2 border-2 col-span-3 h-20 w-full mr-3"
          type="textarea"
          placeholder="Description"
        />
        <input
          class="flex rounded-md p-5 my-5 self-center justify-self-start border-2 h-12"
          type="number"
          placeholder="Preparation Time"
        />
        <select
          class="flex rounded-md my-5 p-2 w-3/4 bg-white self-center justify-self-start border-2 h-12"
          name="Availability"
        >
          <option value="breakfast">Breakfast</option>
        </select>
        <select
          class="flex rounded-md my-5 p-2 w-3/4 bg-white self-center justify-self-start border-2 h-12"
          name="Category"
        >
          <option value="starter">Starter</option>
        </select>
        <span class="flex rounded-md my-5 col-span-3 w-32 items-center self-center justify-self-start h-12">
            <input
              class="p-5 m-2 border-2"
              type="checkbox"
              placeholder="Sold out"
            />
            <label>Sold out?</label>
        </span>
        <button
          class="absolute bottom-3 right-3 rounded-full bg-amber-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white h-11 w-52"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: String; show: Boolean }>();
</script>
