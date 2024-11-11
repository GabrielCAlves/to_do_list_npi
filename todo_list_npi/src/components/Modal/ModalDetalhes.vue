<template>
    <div>
        <v-dialog
            v-model="dialog"
            max-width="400"
            persistent
            >

            <v-card title="Detalhes">
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
p{
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
</style>