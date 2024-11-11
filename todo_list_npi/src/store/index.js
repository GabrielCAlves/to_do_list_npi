import { createStore } from 'vuex'
import api from '@/services/api'

export default createStore({
  state: {
    itemsTarefa: [
      {id: 1, title: 'Tirar o lixo', description: 'Separar pelo tipo de material para reciclagem', completed: false},
      {id: 2, title: 'Passear com o cachorro', description: 'Levar o Salsicha pro parque depois da casa da tia', completed: false},
      {id: 3, title: 'Varrer a calçada', description: 'Tirar o excesso de areia da frente de casa', completed: false},
    ]
  },
  getters: {
  },
  mutations: {
    setTarefas(state, tarefas) {
      state.itemsTarefa = tarefas;
    },
    addTarefa(state, tarefaNova){
      if(tarefaNova.title && tarefaNova.description){
        state.itemsTarefa.push({ id: tarefaNova.id, title: tarefaNova.title,  description: tarefaNova.description, completed: tarefaNova.completed });
      }
    },
    updateTarefa(state, novaTarefa){
      let tarefa = state.itemsTarefa.filter(tarefa => tarefa.id == novaTarefa.id)[0]
      if(tarefa){
        tarefa.title = novaTarefa.title;
        tarefa.description = novaTarefa.description;
      }
    },
    removeTarefa(state, id){
      state.itemsTarefa = state.itemsTarefa.filter( tarefa => tarefa.id !== id);
    },
    tarefaMarcada(state, tarefaSelecionada){
      let tarefa = state.itemsTarefa.filter(tarefa => tarefa.id == tarefaSelecionada.id)[0]
      tarefa.completed = !tarefa.completed;
    }
  },
  actions: {
    async fetchTarefas({ commit }) {
      try {
        const response = await api.get('/api/todos');
        commit('setTarefas', response.data);
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    },
    async addTarefa({ commit }, tarefaNova) {
      try {
        const response = await api.post('/api/todos', tarefaNova);
        commit('addTarefa', response.data);
      } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
      }
    },
    async updateTarefa({ commit }, tarefaAtualizada) {
      try {
        await api.put(`/api/todos/${tarefaAtualizada.id}`, tarefaAtualizada);
        commit('updateTarefa', tarefaAtualizada);
      } catch (error) {
        console.error('Erro ao atualizar tarefa:', error);
      }
    },
    async removeTarefa({ commit }, id) {
      try {
        await api.delete(`/api/todos/${id}`);
        commit('removeTarefa', id);
      } catch (error) {
        console.error('Erro ao remover tarefa:', error);
      }
    }
  },
  modules: {
  }
})
