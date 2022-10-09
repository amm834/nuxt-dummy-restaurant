<script setup lang="ts">
import data from '@/data.json'


const restaurants = {
  first: [...data].splice(0, 25),
  second: [...data].splice(25, 25),
}
</script>

<template>
  <div>
    <NavBar />
    <div class="container row my-4">
      <h2 class="mb-5">Top 50 Restaurants</h2>
      <div class="col-md-2 w-50">
        <table class="table table-striped">
          <TableHeader />
          <tbody>

            <TableRow v-for="(restaurant, index) in restaurants.first" :id="restaurant.id" :key="restaurant.id"
              :rank="restaurant.rank" :name="restaurant.name" />
          </tbody>
        </table>
      </div>
      <div class="col-md-2 w-50">
        <table class="table table-striped">
          <TableHeader />
          <tbody>
            <TableRow v-for="(restaurant, index) in restaurants.second" :id="restaurant.id" :key="restaurant.id"
              :rank="restaurant.rank" :name="restaurant.name" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
