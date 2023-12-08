<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>MY GAME PAGeee </ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Blank</ion-title>
          </ion-toolbar>
        </ion-header>
  
        
  
        <div id="container">
          <strong>Mundo Pirata</strong>
          <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script  lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import ApiGame from '@/services/ApiGame'
  export default {
    async created(){
      let p = await ApiGame.getPelicula()
      console.log(p)
    }
  }
  </script>
  
  <style scoped>
  #container {
    text-align: center;
    
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: blue;
  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
    background-color: yellow;
  }
  
  #container p {
    font-size: 16px;
    line-height: 22px;
    
    color: #8c8c8c;
    
    margin: 0;
    background-color: red;
  }
  
  #container a {
    text-decoration: none;
  }
  </style>
  