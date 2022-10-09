<script setup lang="ts">
import data from '@/data.json';
import { TableRow } from '../../.nuxt/components';

const route =useRoute()
const id = Number(route.params.id)
const restaurant = data.find((restaurant) => restaurant.id === id)

</script>

<template>
<div>
<div class="row">
<div class="col-md-2">
<div>
    <img :src="restaurant.imageUrl" alt="image">
</div>
<div>
</div>
</div>
</div>
</div>
</template>