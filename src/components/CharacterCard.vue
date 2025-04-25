<template>
  <v-card class="mt-4 bg-white" variant="flat">
    <v-img :src="image" aspect-ratio="1/1"></v-img>
    <v-card-title>{{ name }}</v-card-title>
    <v-card-subtitle>
    {{ species }} - 
    <span :class="statusClass" class="py-0 px-3 rounded-pill">{{ status }}</span>
    </v-card-subtitle>
    <v-card-text>
      Origen: {{ origin?.name }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { Status } from '@/api/rick&mortyApi'
import { computed } from 'vue';

  const props = defineProps({
    name: { type: String, required: true },
    status: { type: String, required: true },
    species: String,
    origin: {
      type: Object as () => { name: string } | null,
      required: false
    },
    image: { type: String, required: true }
  })
  
  const statusClass = computed(() => {

    if(props.status === Status.Alive)
      return "bg-green-darken-2"
    else if(props.status === Status.Dead)
      return "bg-red-darken-2"

    return "bg-grey-darken-1"
  })
</script>