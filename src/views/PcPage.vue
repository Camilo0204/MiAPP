<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>MY GAME APP</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Juegos Para Pc</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-list>
          <ion-item v-for="game in games" :key="game.name">
            <ion-label>
              <h2>{{ game.name }}</h2>
              <p>{{ game.description }}</p>
              <p>Año: {{ game.year }}</p>
              <p>Autor: {{ game.author }}</p>
            </ion-label>
          </ion-item>          
        </ion-list>
        
          <ion-button href="/">
            <ion-icon slot="start" name="star"></ion-icon>
            Atras
          </ion-button> 
          <br>
      <br>
      <br>      
      </div>
      
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/vue';

export default {
  data() {
    return {
      games: [],
    };
  },
  mounted() {
    this.loadJsonData();
  },
  methods: {
    async loadJsonData() {
      try {
        const response = await import('@/assets/gamesPc.json');
        this.games = response.default;
        console.log(this.games);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: "";
}

#container strong {
  font-size: 20px;
  line-height: 26px;
  background-color: yellow;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #000000;
  
  margin: 0;
  background-color: rgb(10, 170, 50);
}

#container a {
  text-decoration: none;
}
</style>