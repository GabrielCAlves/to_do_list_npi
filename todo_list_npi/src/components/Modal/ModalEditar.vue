<template>
    <div>
        <v-dialog
            v-model="dialog"
            max-width="400"
            persistent
            >

            <v-card title="Editar" text="Informe o novo título/descrição">
                <v-text-field class="px-3" label="Título" variant="outlined" v-model="title"></v-text-field>
                
                <v-text-field class="px-3" label="Descrição" variant="outlined" v-model="description"></v-text-field>
                <template v-slot:actions>
                <v-spacer></v-spacer>

                <v-btn @click="$emit('cancelarEdicao')" color="red">
                    Cancelar
                </v-btn>

                <v-btn @click="$store.dispatch('updateTarefa', {id: tarefa.id, title: title,  description: description, completed: tarefa.completed}), $emit('edicaoConfirmada')" color="green">
                    Confirmar
                </v-btn>
                </template>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
  export default {
    props: ['tarefa'],
    data () {
      return {
        dialog: true,
        title: null,
        description: null
      }
    },
    created(){
        this.title = this.tarefa.title
        this.description = this.tarefa.description
    }
  }
</script>

<style>

</style>