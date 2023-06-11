<template>
<div class="card">
    <img class="card-image h-1/2 w-full" :src="dish.image.toString()"/>
    <span class="card-title">Name: {{ dish.name }}</span>
    <span class="card-description">Description: {{ dish.description }}</span>
    <span class="card-price">Price{{ dish.currency + ' ' + dish.price}}</span>
    <span class="card-category">Category: {{ dish.category}}</span>
    <span class="card-category">Preparation time: {{ dish.prepTime}}</span>
</div>
</template>

<script setup lang="ts">
import { Dish } from '../models/dishes';

defineProps<{dish: Dish}>()

</script>

<style scoped>
.card{
    height: 300px;
    width: 300px;
}
</style>