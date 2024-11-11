<template>
  <div>
    <v-list-item @click="toggleItem" id="options">
      <template v-slot:prepend="{}">
        <div id="boxTitulo">
          <v-list-item-action start cols="8">
            <v-checkbox-btn :model-value="tarefa.completed"></v-checkbox-btn>
          </v-list-item-action>
          <v-list-item-title :class="{'text-decoration-line-through':tarefa.completed}">{{ tarefa.title }}</v-list-item-title>
        </div>
        
        <v-list-item id="menuOptions" right>
          <TarefaMenu :tarefa="tarefa" />
        </v-list-item>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TarefaMenu from './TarefaMenu.vue';

export default {
  name: 'TarefaComp',
  components: {
    TarefaMenu,
  },
  props: ['tarefa'],
  methods: {
    toggleItem() {
      this.$store.commit('tarefaMarcada', this.tarefa);
      this.$emit('toggle-selection', this.tarefa.title);
    },
    handleRemoveTarefa(id){
      this.$store.commit('removeTarefa', id);
    }
  }
}
</script>

<style>
#options{
  display: flex;
  width: 100%;
}

.v-list-item__prepend {
  width: 100%;
}

#options #boxTitulo{
  display: flex;
  width: 100%;
  align-items: center;
}
</style>