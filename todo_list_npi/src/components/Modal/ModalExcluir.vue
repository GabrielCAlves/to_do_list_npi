<template>
    <div>
        <v-dialog
            v-model="dialog"
            max-width="400"
            persistent
            >

            <v-card title="Excluir" text="Deseja realmente apagar esta tarefa?">
                <template v-slot:actions>
                <v-spacer></v-spacer>

                <v-btn @click="$emit('cancelarEdicao')" color="red">
                    Não
                </v-btn>

                <v-btn @click="$store.dispatch('removeTarefa', tarefa.id), $emit('edicaoConfirmada')" color="green">
                    Sim
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
      }
    },
  }
</script>

<style>

</style>