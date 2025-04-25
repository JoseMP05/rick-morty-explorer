<template>
  <v-form ref="searchForm" v-model="isFormValid" @submit.prevent="handleSubmit">
    <v-row>
      <v-col cols="12" md="8">
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
      <v-col cols="12" md="4">      
        <v-btn type="submit" variant="tonal" class="bg-primary">
        Search
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
  import { history, addToHistory } from '@/services/history'
  import { ref, defineEmits } from 'vue'

  interface SearchForm {
    validate: () => Promise<{ valid: boolean }>
  }

  const rulesName = [
    (value:string) => !!value || 'Field is required',
    (value:string) => value.length >= 3 || 'Name must be at least 3 characters long'
  ]

  const emit = defineEmits(['search'])

  const nameCharacter = ref<string | null>(null)
  const isFormValid = ref(false)
  const searchForm = ref<SearchForm | null>(null)

  async function handleSubmit() {
    const validate = await searchForm.value?.validate()
    isFormValid.value = validate?.valid || false

    if (!isFormValid.value)
      return

    addToHistory(nameCharacter.value as string)
    emit('search', nameCharacter.value)
  }
</script>

<style scoped>
  .v-btn{
    height: calc(100% - 22px);
  }
</style>