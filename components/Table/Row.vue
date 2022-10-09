<script setup lang="ts">
defineProps<{
  id: number,
  rank: number,
  name: string
}>()
</script>

<template>
  <tr>
    <th scope="row">{{ rank }}</th>
    <td>
    <NuxtLink :to="`/restaurants/${id}`">
    {{ name }}
    </NuxtLink>
    </td>
  </tr>

</template>