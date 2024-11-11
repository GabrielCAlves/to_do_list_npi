<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Vue.js
          </v-list-item-title>
          <v-list-item-subtitle>
            To-Do List
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list id="drawer_col" density="compact" nav>
        <v-list-item id="drawer_options" v-for="item in items" :prepend-icon="item.icon" :title="item.title" :value="item.title" :key="item.title" :to="item.to" link></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app prominent color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
        <template v-slot:image>
          <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>To-Do List</v-app-bar-title>

        <v-spacer></v-spacer>
      </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
        {title: 'Tarefa(s)', icon: 'mdi-view-dashboard', to:'/'},
        {title: 'Sobre', icon: 'mdi-information', to:'/sobre'},
      ]
    }),
  }
</script>

<style>
#drawer_options{
  display: flex;
}

#drawer_options .v-list-item__prepend {
  width: fit-content;
}

#drawer_options div.v-list-item-title{
  width: fit-content;
}

#drawer_options .v-list-item-title{
  margin-left: 15px;
}

.v-list-item__spacer {
    display: none;
}
</style>