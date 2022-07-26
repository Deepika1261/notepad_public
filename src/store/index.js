import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    note:"",
    note_heading:"",
    id:0,
    notes:[],
    selected_note:null
  },
  getters: {
  },
  mutations: {
    reset(state){
      state.note = '',
      state.note_heading = ''
      state.id=state.id+1
    },
    addNote(state){
      let my_note={
          note_heading:state.note_heading,
          note:state.note,
          id: state.id,
      }
      state.notes.push(my_note)
      console.log(state.notes[0])
      this.commit('reset')
    },
    deleteNote(state,payload){
      const idx = state.notes.indexOf(payload.the_note)
      state.notes.splice(idx,1)
    },
    editNote(state,payload){
      state.selected_note = JSON.parse(JSON.stringify(payload.the_note));
    },
    submitNote(state,payload){
      payload.note.note_heading=state.selected_note.note_heading;
      payload.note.note=state.selected_note.note;
      state.selected_note=null;
    },
    discardNote(state){
      state.selected_note=null;
    }
  },
  actions: {
  },
  modules: {
  }
})
