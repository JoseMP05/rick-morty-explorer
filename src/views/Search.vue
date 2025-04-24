<template>
  <v-container>
    <h1>Rick & Morty Explorer</h1>
    <v-form v-model="search" @submit.prevent>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="nameCharacter"
              label="Character name"
              variant="outlined"
              required
              :rules="nameRules"
              @keyup.enter="fetchCharacter"
              >
            </v-text-field>
          </v-col>
          <v-btn @click="fetchCharacter" variant="tonal">
          Search
          </v-btn>
        </v-row>
      </v-form>

      <v-alert v-if="error" type="error" class="mt-4">
          {{ error }}
        </v-alert>
      <v-row>
        <v-col cols="4" v-for="character in characters" :key="character.id">
          <v-card class="mt-4" max-width="400">
            <v-img :src="character.image" height="200px"></v-img>
            <v-card-title>{{ character.name }}</v-card-title>
            <v-card-subtitle>
              {{ character.status }} - {{ character.species }}
            </v-card-subtitle>
            <v-card-text>
              Origen: {{ character.origin?.name }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'

  const nameCharacter = ref('')
  const characters = ref(null)
  const error = ref('')
  const loading = ref(false)

  async function fetchCharacter() {
    characters.value = null
    error.value = ''
    loading.value = true

    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nameCharacter.value}`)
      
      if(!res?.ok){
        throw new Error('Character not found');
      }
      const data = await res.json()

      characters.value = data.results
      console.log(characters.value)
    } catch (err) {
      error.value = `Something went wrong: ${err}`
    } finally {
      loading.value = false
    }
  }
</script>
