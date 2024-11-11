<template>
    <div>
        <v-menu :location="location">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" icon="">
                    <v-icon icon="mdi-dots-vertical"></v-icon>
                </v-btn>
            </template>

            <v-list id="listaMenu">
                <v-list-item id="optionsTarefa" v-for="(item, index) in items" :key="index" @click="item.click()">
                    <div id="conjOptions">
                        <v-icon>{{ item.icon }}</v-icon>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </div>
                </v-list-item>
            </v-list>
        </v-menu>
        <ModalEditar v-if="items[0].mostrarModal" @cancelarEdicao="items[0].mostrarModal = false" @edicaoConfirmada="items[0].mostrarModal = false" :tarefa="tarefa"/>
        <ModalExcluir v-if="items[1].mostrarModal" @cancelarEdicao="items[1].mostrarModal = false" @edicaoConfirmada="items[1].mostrarModal = false" :tarefa="tarefa"/>
        <ModalDetalhes v-if="items[2].mostrarModal" @cancelarEdicao="items[2].mostrarModal = false" :tarefa="tarefa"/>
    </div>
</template>

<script>
import ModalDetalhes from "../Modal/ModalDetalhes.vue";
import ModalEditar from "../Modal/ModalEditar.vue"
import ModalExcluir from '../Modal/ModalExcluir.vue'

export default {
    name: "TarefaMenu",
    props: ['tarefa'],
    data(){
        return{
            items: [
                {icon: "mdi-pencil", title: 'Editar', mostrarModal: false, click(){this.mostrarModal = true} },
                {icon: "mdi-trash-can", title: 'Excluir', mostrarModal: false, click(){this.mostrarModal = true} },
                {icon: "mdi-information-variant", title: 'Detalhes', mostrarModal: false, click(){this.mostrarModal = true} },
            ],
        }
    },
    components: { 
        ModalEditar,
        ModalExcluir,
        ModalDetalhes
    },
}
</script>

<style>
.v-btn {
    box-shadow: none;
}

.v-btn:hover {
    box-shadow: none;
    background-color: rgb(223, 223, 223);
}

#conjOptions{
    display: flex;
}

.v-list-item-title{
    margin-left: 15px;
}

</style>