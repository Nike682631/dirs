<template>
  <div id="app" class="p-2 bg-amber-200 h-screen w-full">
    <section class="flex justify-end pt-2 pr-2">
      <button
        class="rounded-full bg-red-400 mr-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white h-11 w-52"
        @click="clearDishes"
      >
        Clear all dishes
      </button>
      <button
        class="rounded-full bg-green-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white h-11 w-52"
        @click="addDish"
      >
        Add new dish
      </button>
    </section>
    <dish-dialog
      :title="dialogTitle"
      :show="show"
      :dish="selectedDish"
      @refresh-dishes="fetchDishes"
      @close-dialog="show = !show"
    />
    <section>
      <div class="grid gap-4 grid-cols-4 py-12">
        <card
          v-for="dish in dishes"
          :dish="dish"
          @edit-seleced-dish="(dish) => editDish(dish)"
          @delete-selected-dish="(dish) => deleteDish(dish)"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref } from "vue";
import { Dish, Availability, Category } from "./models/dishes";
import { clearAllDishes, deleteDishById, getDishes } from "./api/api";
import Card from "./components/Card.vue";
import DishDialog from "./components/Dialog.vue";

const dishes = ref<Array<Dish>>([]);
const show = ref<Boolean>(false);
const dialogTitle = ref<string>("Add new dish");

const dish = {
    name: "",
    description: "",
    price: 0,
    image:
      "",
      currency: "Euro",
      category: Category.MainCourse,
    availability: Availability.Weekdays,
    soldOut: false,
    prepTime: 0,
  }

const selectedDish = reactive<Dish>(dish);

const demoDish: Dish[] = [
  {
    name: "Pizza",
    description: "Just a normal pizza",
    price: 100,
    image:
      "https://pixabay.com/get/g894b5de2dd78e15309c729065a5920e5d47aa81269fd6a665e90e118ebed3f88c54c49ca5d0945672e3f90ed6d5b3a8c3374054138b51f1b3e14ba4a1ee15a8218ed30441adff8793fa9bc3556fef5ca_1280.jpg",
    currency: "Euro",
    category: Category.MainCourse,
    availability: Availability.Weekdays,
    soldOut: false,
    prepTime: 30,
  },
  {
    name: "Pancake",
    description: "Just a normal pancake",
    price: 100,
    image:
      "https://pixabay.com/get/g5e3de5855e9f9300da1cebb17a11cd9bd01b6a3ae9acc62428c1a49daf7deb9ff55b71347e7c7fe6824034222cc3524a631e75a11a32a6560cd80acdb99578ea8be8e8d04936c8d547f69a579ea1149a_1280.jpg",
    currency: "Euro",
    category: Category.MainCourse,
    availability: Availability.Weekdays,
    soldOut: false,
    prepTime: 30,
  },
];

function addDish() {
  dialogTitle.value = "Add Dish"
  show.value = true;
}

async function editDish(dish: Dish) {
  dialogTitle.value = "Edit Dish"
  setTimeout(() => {
    Object.assign(selectedDish, dish)
  },1000)
  show.value = true;
}

async function deleteDish(dish: Dish) {
  if (dish._id) {
    try {
      deleteDishById(dish._id);
      await fetchDishes();
    } catch (error) {
      console.log(error);
    }
  }
}

async function fetchDishes() {
  try {
    const response = await getDishes();
    dishes.value = response && response.data ? response.data.data : demoDish;
  } catch (error) {
    console.log(error);
  }
}

async function clearDishes() {
  try {
    await clearAllDishes();
    await fetchDishes();
  } catch (error) {
    console.log(error);
  }
}

onBeforeMount(async () => {
  await fetchDishes();
});
</script>
