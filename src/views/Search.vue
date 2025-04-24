<template>
  <v-container>
    <h1>Rick & Morty Explorer</h1>
    <v-form v-model="search">
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="nameCharacter"
            :rules="nameRules"
            variant="outlined"
            label="Character name"
            required
            ></v-text-field>
          </v-col>
            <v-btn @click="fetchCharacter" variant="tonal">
            Search
            </v-btn>
        </v-row>
      </v-form>

      <v-alert v-if="error" type="error" class="mt-4">
          {{ error }}
        </v-alert>

      <v-card v-if="character" class="mt-4" max-width="400">
        <v-img :src="character.image" height="200px"></v-img>
        <v-card-title>{{ character.name }}</v-card-title>
        <v-card-subtitle>
          {{ character.status }} - {{ character.species }}
        </v-card-subtitle>
        <v-card-text>
          Origen: {{ character.origin.name }}
        </v-card-text>
      </v-card>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'

  const nameCharacter = ref('')
  const character = ref(null)
  const error = ref('')
  const loading = ref(false)

  async function fetchCharacter() {
    character.value = null
    error.value = ''
    loading.value = true

    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nameCharacter.value}`)
      
      if(!res?.ok){
        throw new Error('Character not found');
      }
      const data = await res.json()

      console.log(data)
      character.value = data.results[0]
    } catch (err) {
      error.value = `Something went wrong: ${err}`
    } finally {
      loading.value = false
    }
  }
</script>
