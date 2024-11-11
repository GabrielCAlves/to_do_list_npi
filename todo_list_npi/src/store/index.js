import { createStore } from 'vuex'

export default createStore({
  state: {
    itemsTarefa: [
      {id: 1, title: 'Tirar o lixo', descricao: 'Separar pelo tipo de material para reciclagem', concluido: false},
      {id: 2, title: 'Passear com o cachorro', descricao: 'Levar o Salsicha pro parque depois da casa da tia', concluido: false},
      {id: 3, title: 'Varrer a calçada', descricao: 'Tirar o excesso de areia da frente de casa', concluido: false},
    ]
  },
  getters: {
  },
  mutations: {
    addTarefa(state, tarefaNova){
      if(tarefaNova.title && tarefaNova.descricao){
        state.itemsTarefa.push({ id: new Date().getTime(), title: tarefaNova.title,  descricao: tarefaNova.descricao, concluido: false });

        this.inputField = null;
      }
    },
    removeTarefa(state, id){
      state.itemsTarefa = state.itemsTarefa.filter( tarefa => tarefa.id !== id);
    },
    updateTarefa(state, novaTarefa){
      let tarefa = state.itemsTarefa.filter(tarefa => tarefa.id == novaTarefa.id)[0]
      tarefa.title = novaTarefa.title;
      tarefa.descricao = novaTarefa.descricao;
    },
    tarefaMarcada(state, tarefaSelecionada){
      let tarefa = state.itemsTarefa.filter(tarefa => tarefa.id == tarefaSelecionada.id)[0]
      tarefa.concluido = !tarefa.concluido;
    }
  },
  actions: {
  },
  modules: {
  }
})
