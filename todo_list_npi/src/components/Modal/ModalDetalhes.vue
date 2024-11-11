<template>
    <div>
        <v-dialog
            v-model="dialog"
            max-width="400"
            persistent
            >

            <v-card title="Detalhes" text="Coloque uma caixa de texto não editável abaixo">
                <p>{{ tarefa.descricao }}</p>
                <template v-slot:actions>
                <v-spacer></v-spacer>

                <v-btn @click="$emit('cancelarEdicao')" color="black">
                    Fechar
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
        title: null
      }
    },
    created(){
        this.title = this.tarefa.title
    }
  }
</script>

<style>

</style>