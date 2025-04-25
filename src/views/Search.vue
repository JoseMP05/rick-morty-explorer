<template>
  <v-container>
    <h1>Rick & Morty Explorer</h1>
    <v-form ref="searchForm" v-model="isFormValid" @submit.prevent="handleSubmit">
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <!-- <v-text-field
              v-model="nameCharacter"
              label="Character name"
              placeholder="Eg: Jerry Smith"
              variant="outlined"
              :rules="rulesName"
              >
            </v-text-field> -->
            <v-combobox
              v-model="nameCharacter"
              label="Character name"
              placeholder="Eg: Jerry Smith"
              :items="history"
              :rules="rulesName"
              density="comfortable"
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              @keyup.enter="handleSubmit"
            ></v-combobox>
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
        <v-col cols="4" v-for="n in 9" :key="n" v-if="loading">
          <v-skeleton-loader
            :loading="loading"
            :elevation="2"
            type="card"
            class="mt-4"
            max-width="400"
          />
        </v-col>
        <v-col cols="3" v-for="character in characters" :key="character.id">
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
  import { fetchCharacter } from '@/api/rick&mortyApi'
  import CharacterCard from '@/components/CharacterCard..vue'

  import { ref } from 'vue'

  const historyStorage = localStorage.getItem('history')
  const history = ref(JSON.parse(historyStorage || '[]'))
  const nameCharacter = ref(null)


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
      console.log('fetching...', history.value)

      if(!history.value.includes(nameCharacter.value)){
        history.value.unshift(nameCharacter.value)
        if(history.value.length > 3)
          history.value.pop()
        localStorage.setItem('history', JSON.stringify(history.value))
      }

      console.log(localStorage.getItem('history'))

      await getCharacter()
    }
  }

  const characters = ref(null)
  const error = ref('')
  const loading = ref(false)

  async function getCharacter() {
    characters.value = null
    error.value = ''
    loading.value = true

    try {
      const data = await fetchCharacter(nameCharacter.value)

      characters.value = data.results
    } catch (err) {
      error.value = err
    } finally {
      console.log("finished")
      loading.value = false
    }
  }
</script>
