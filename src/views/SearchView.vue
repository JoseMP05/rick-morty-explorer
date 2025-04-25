<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" offset-md="3">
        <h1 class="mb-4 text-center">Rick & Morty Explorer</h1>
        <CharacterSearchForm
          @search="getCharacter"
        />
      </v-col>
    </v-row>
    <v-alert v-if="error" type="error" class="mt-4" closable>
      {{ error }}
    </v-alert>
    <v-row>
      <v-col cols="6" sm="4" md="3" v-for="n in 9" :key="n" v-if="loading">
        <v-skeleton-loader
          :loading="loading"
          :elevation="2"
          type="image, card, text"
          class="mt-4"
        />
      </v-col>
      <v-col cols="6" sm="4" md="3" v-for="character in characters" :key="character.id">
        <CharacterCard 
          :name="character.name"
          :status="character.status"
          :species="character.species"
          :origin="character.origin"
          :image="character.image"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { fetchCharacter, type Result } from '@/api/rick&mortyApi'
  import CharacterCard from '@/components/CharacterCard.vue'
  import CharacterSearchForm from '@/components/CharacterSearchForm.vue'

  const characters = ref<Result[] | null>(null)
  const error = ref('')
  const loading = ref(false)

  async function getCharacter(nameCharacter:string) {
    characters.value = null
    error.value = ''
    loading.value = true
    
    try {
      const data = await fetchCharacter(nameCharacter)
      console.log(data.info)
      characters.value = data.results
    } catch (err) {
      error.value = err instanceof Error ? err.message : String(err)
    } finally {
      loading.value = false
    }
  }
</script>
