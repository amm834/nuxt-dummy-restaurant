<script setup lang="ts">
import data from "@/data.json";

const route = useRoute();
const id = Number(route.params.id);
const restaurant = data.find((restaurant) => restaurant.id === id);
if (!restaurant) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
</script>

<template>
    <div>
        <NavBar class="mb-4" />
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="restaurant.imageUrl" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{restaurant.name}}</h5>
                        <p>Total Store : {{restaurant.numberOfStores}}</p>
                        <p>{{restaurant.content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
