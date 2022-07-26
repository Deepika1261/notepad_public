<template>
  <div>
  <v-toolbar flat app>
    <v-toolbar-title class="display-2 grey--text">
      <span class="font-weight-light">Add</span>
      <span>Notes</span>
    </v-toolbar-title>
  </v-toolbar>
    <v-container>
      <v-row class="mb-6">
        <v-col cols="12">
          <v-card class="pa-4" outlined tile color="indigo lighten-4" :elevation=6>
            <form>
              <v-text-field v-model="$store.state.note_heading" label="HEADING" required></v-text-field>
              <v-text-field v-model="$store.state.note" label="BODY" required></v-text-field>
              <v-btn depressed color="primary" class="mr-5" @click="$store.commit('addNote')">Add</v-btn>
              <v-btn depressed color="error">Clear</v-btn>
            </form>
          </v-card>
        </v-col>
      </v-row>
      <v-flex d-flex>
        <v-layout wrap>
            <v-flex md4 v-for="note in $store.state.notes" :key="note.id">
              <v-hover class="mb-4">
                <template v-slot:default="{ hover }">
                <v-card color="indigo lighten-4" max-width="350" height="300" :elevation="hover ? 24 : 6" class="mx-auto">
                <v-card-title class="pa-1 ma-2">
                <v-row justify="space-between" class="pa-3">
                  <v-btn text icon>
                    note
                  </v-btn>
                  <v-btn text icon @click="$store.commit('deleteNote',{the_note:note})">
                    <v-icon dark>
                      mdi-delete
                    </v-icon>
                  </v-btn>
                </v-row>
                <input v-if="$store.state.selected_note!=null && $store.state.selected_note.id==note.id" v-model="$store.state.selected_note.note_heading" class="body-plain" style="display:block;">
                <v-card-text v-else class="pa-0 ma-0">
                <div class=" title text-truncate">{{ note.note_heading }}</div>
                </v-card-text>
              </v-card-title>
              <v-textarea
                v-if="$store.state.selected_note!=null && $store.state.selected_note.id==note.id"
                solo
                name="input-7-4"
                label="Solo textarea"
                v-model="$store.state.selected_note.note"
                style="height=160px;">
              </v-textarea>
              <v-card-text v-else class="body-1 font-weight-medium" style=" height:160px; overflow-y: scroll">
                {{ note.note }}
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                  <v-row justify="center">
                  <v-btn v-if="$store.state.selected_note==null" class="ma-2" outlined @click="$store.commit('editNote',{the_note:note})">Edit Note</v-btn>
                  <v-btn v-if="$store.state.selected_note!=null && $store.state.selected_note.id==note.id" class="ma-2 mr-5" outlined @click="$store.commit('submitNote',{note:note})">Update</v-btn>
                  <v-btn v-if="$store.state.selected_note!=null && $store.state.selected_note.id==note.id" class="ma-2 error" outlined @click="$store.commit('discardNote')">Discard</v-btn>
                  </v-row>
                </v-list-item>
            </v-card-actions>
            </v-card>
            </template>
            </v-hover>
            </v-flex>
        </v-layout>
      </v-flex>
    </v-container>
  </div>
</template>

