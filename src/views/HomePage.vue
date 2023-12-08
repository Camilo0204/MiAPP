<template>
  <ion-page>
    <ion-header :translucent="true">
      
      <ion-toolbar>
        <ion-title>MY GAME APP</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="background-image">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large" id="titulo">You Welcome Gamer!!</ion-title>
        </ion-toolbar>
      </ion-header>
            

      <div id="container">
        <strong>Mundo Pirata</strong>
        <p> <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components"> </a></p>
        
        <ion-list>
          <br>
          <br>
          <br>
            
          <ion-button href="/ps1">
            <ion-icon slot="start" name="star"></ion-icon>
            💥Juegos Play Station 1
          </ion-button>
          <br>
          <ion-button href="/ps2">
            <ion-icon slot="start" name="star"></ion-icon>
            💥Juegos Play Station 2
          </ion-button>
          <br>
          <ion-button href="/xboxclasico">
            <ion-icon slot="start" name="star"></ion-icon>
            💥Juegos Xbox Clasico
          </ion-button>
          <br>
          <ion-button href="/xbox360">
            <ion-icon slot="start" name="star"></ion-icon>
            💥Juegos Xbox 360
          </ion-button>
          <br>
          <ion-button href="/pc">
            <ion-icon slot="start" name="star"></ion-icon>
            💥Juegos PC
          </ion-button>
    
        </ion-list>
        <p id="kml">Copyright 2023<br>Created by: JuanCamiloJaimes</p>

      </div>
            
    </ion-content>
  </ion-page>
</template>

<script  lang="ts">

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import ApiGame from '@/services/ApiGame';
export default {
  
  }  


</script>

<style scoped>

#titulo{ 
  font-family: arial, helvetica, roboto, "new times roman", lato;
  font-weight: bold;
  width: 120%;
  height: 100%;
  background-color: rgb(2, 191, 78);
  font-size: 30px;
  text-align: center;
}
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgb(11, 11, 151);
  
}
#background-image {
  background-image: url('@/public/img/imgFondo.png') 0 0/100% 100% no-repeat;/* reparar */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}

#container strong {
  font-size: 50px;
  line-height: 26px;
  background-color: yellow;
}

#container p {
  font-size: 20px;
  line-height: 22px;
  color: #000000;
  margin: 0;
  background-color: rgb(0, 255, 55);
}

#container a {
  text-decoration:line-through;  
}
</style>
