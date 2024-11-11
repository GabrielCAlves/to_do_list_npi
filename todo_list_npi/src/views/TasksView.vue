<template>
  <div>
    <v-col cols="12" sm="12">
      <div id="campoAddTarefa">
        <v-text-field
          id="inputAddTarefa"
          v-model="inputField"
          hide-details="auto"
          label="Informe uma tarefa"
          clearable
          required
        ></v-text-field>
        
        <v-text-field
          id="inputDescricao"
          v-model="inputField2"
          hide-details="auto"
          label="Adicione uma descrição (E pressione Enter)"
          clearable
          @keyup.enter="handleAddTarefa"
          required
        ></v-text-field>
      </div>
    </v-col>

    <v-list :selected="settingsSelection" select-strategy="leaf">
      <div v-for="tarefa, index in $store.state.itemsTarefa" :key="index">
        <TarefaComp :tarefa="tarefa" @toggle-selection="toggleSelection(index)"/>
      </div>
    </v-list>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TarefaComp from '../components/tarefas/Tarefa.vue';

export default defineComponent({
  name: 'TasksView',
  data: () => ({
      settingsSelection: [],
      inputField: null,
      inputField2: null,
  }),
  components: {
    TarefaComp
  },
  methods: {
    toggleSelection(title) {
      const index = this.settingsSelection.indexOf(title);
      if (index === -1) {
        this.settingsSelection.push(title);
      } else {
        this.settingsSelection.splice(index, 1);
      }
    },
    handleAddTarefa(){
      this.$store.dispatch('addTarefa', {id: new Date().getTime(), title: this.inputField, description: this.inputField2, completed: false});
      this.inputField = null;
      this.inputField2 = null;
    }
  },
  mounted() {
    this.$store.dispatch('fetchTarefas');
  },
});
</script>

<style>
  #campoAddTarefa{
    width: 50%;
    display: flex;
    flex-flow: column;
    justify-self: center;
  }

  #campoAddTarefa #inputAddTarefa{
    width: 500px;
  }

  #campoAddTarefa #inputDescricao{
    margin-top: 50px;
  }
</style>