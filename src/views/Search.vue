<template>
  <v-container>
    <h1>Rick & Morty Explorer</h1>
    <v-form ref="searchForm" v-model="isFormValid" @submit.prevent="handleSubmit">
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="nameCharacter"
              label="Character name"
              placeholder="Eg: Jerry Smith"
              variant="outlined"
              :rules="rulesName"
              >
            </v-text-field>
          </v-col>
          <v-btn type="submit" variant="tonal">
          Search
          </v-btn>
        </v-row>
      </v-form>

      <v-alert v-if="error" type="error" class="mt-4">
          {{ error }}
        </v-alert>
      <v-row>
        <v-col cols="4" v-for="n in 6" :key="n" v-if="loading">
          <v-skeleton-loader
            :loading="loading"
            :elevation="2"
            type="card"
            class="mt-4"
            max-width="400"
          />
        </v-col>
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

<script setup lang="ts">
  import { ref } from 'vue'

  const rulesName = [
    value => !!value || 'Field is required',
    value => value.length >= 3 || 'Name must be at least 3 characters long'
  ]

  const isFormValid = ref(false)
  const searchForm = ref(null)

  async function handleSubmit() {
    const validate = await searchForm.value?.validate()
    isFormValid.value = validate.valid
    if (isFormValid.value) {
      console.log('fetching...')
      await fetchCharacter()
    }
  }

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
        throw new Error('Keep trying')
      }
      const data = await res.json()
      
      // if(data.info.count > 200)
      //   throw new Error('Character not found');

      characters.value = data.results
      console.log(data)

    } catch (err) {
      error.value = err
    } finally {
      console.log("finished")
      loading.value = false
    }
  }
</script>
