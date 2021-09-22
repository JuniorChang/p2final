<template>
  <div id="app">
    
    <img class="img-fluid topbanner" src='./assets/topBanner.jpg'/>

    

    <div class="container container-fluid .col-xs">
      
      <div class="alert alert-success my-3" v-if="status">
        {{ status }}
      </div>
      <ul class="nav nav-tabs my-3">
        <li class="nav-item">
          <button class="nav-link " aria-current="page" v-on:click= "addPlayer">
            Add Your Character
          </button>
        </li>
        <li class="nav-item">
          <button class="nav-link" aria-current="page" v-on:click= "listPlayer">
            List Players
          </button>
        </li>
      </ul>
      
      <img class="img-fluid body-img" src="./assets/bg.jpg" />

      

      <addPlayer v-if="page == 'addPlayer'" />
      <listPlayer v-if="page == 'listPlayer'"/>

      

    </div>

  </div>
</template>

<script>
import addPlayer from './components/addPlayer.vue';
import listPlayer from './components/listPlayer.vue';


export default {
  name: "App",
  components: {
    
    addPlayer,
    listPlayer,
    
  },
  data: function() {
    return {
      page: "addPlayer",
      status: "You may add player ",
    };
    
  },
  methods: {
    addPlayer: function() {
      this.page = "addPlayer";
      this.status = "Switching to Add Player";
    },
    listPlayer: function(){
      this.page = "listPlayer";
      this.status = "Listing Players";
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.topbanner {
  min-width: 100vw;

}
.container {
  position: absolute;
  top: 20;
  left: 0;
  max-width: 80vh;

}


.body-img {
  position: relative;
  opacity: 0.3;
  min-width: 100vw;
  top: 1500;
}
</style>
