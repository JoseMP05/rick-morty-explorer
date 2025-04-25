<template>
  <v-card class="mt-4 bg-white" variant="flat">
    <v-img :src="image" aspect-ratio="1/1"></v-img>
    <v-card-title>{{ name }}</v-card-title>
    <v-card-subtitle>
      {{ status }} - {{ species }}
    </v-card-subtitle>
    <v-card-text>
      Origen: {{ origin?.name }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">

  defineProps({
    name: { type: String, required: true },
    status: { type: String, required: false },
    species: String,
    origin: {
      type: Object as () => { name: string } | null,
      required: false
    },
    image: { type: String, required: false }
  })
</script>