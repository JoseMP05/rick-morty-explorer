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
            v-model="name"
            :rules="nameRules"
            variant="outlined"
            label="Character name"
            required
            ></v-text-field>
          </v-col>
            <v-btn variant="tonal">
            Search
            </v-btn>
        </v-row>
      </v-form>
  </v-container>
</template>
