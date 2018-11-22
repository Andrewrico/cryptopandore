<!-- @header - HTML
================================================================ -->

<template>
  <div id="@header">

    <div class="cell-grid">
        <div class="title-price">
          <div v-for="( value, key ) in cryptos" v-bind:key="key">
            <span title="Courtesy of cryptocompare.com">{{ key }}=${{ value.USD }}</span>
          </div>
        </div>
        <div class="title-note">
          <span>{{ subtitle }}</span>
        </div>
    </div>

    <div class="cell-grid">
        <div class="title-main">
          <span class="earth"></span>
          <h1 class="title-header">
            {{ title }}
          </h1>
        </div>
    </div>    
  </div>
</template>


<!-- @header - JS
================================================================ -->

<script>
import axios from 'axios'

export default {
  name: 'Header',
  data: () => ({
    title: 'CryptoPandore',
    subtitle: 'Inspired by Blockchain technologies',
    cryptos: [],
    errors: []
  }),
  created() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD')
      .then(response => {
        this.cryptos = response.data
        console.log(response)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<!-- @header - CSS
================================================================ -->

<style scoped>

/*
mobil-first
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = ***/
[id^="@header"] {
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.8em;
}

.title-header {
  margin: 0;
  text-shadow: initial;
  color:rgba(167, 255, 255, 0);
   color:rgb(167, 255, 255);
  font-family: 'softwareTester7', monospace;
  font-size: 32px;
  font-weight: 100;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  z-index: 9999;
  letter-spacing: 6px;
  text-shadow:0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0), 1px 1px #000;;
}

.cell-grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  justify-items: stretch;
  transition: ease-in 0.5s;
}

.earth {
  position: absolute;
  width: 50px;
  height: 50px;
  z-index: 9999;
  border-radius: 50%;
  background-size: cover;
  box-shadow: -20px -20px 50px 5px rgba(0, 105, 98, 0.175) inset, 0 0 50px 2px rgb(11, 191, 179);
  animation: spin 500s linear infinite;
  transform: rotate(5deg);
  background-image: url("/static/imgs/earth.jpg");
}

.title-main {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px auto;
  font-family: 'software';
  
}

.title-note {
  padding: 2px 0;
  font-size: 0.8em;
  width: 250px;
  margin: auto;
  font-family: 'ShareTechMono', monospace;
  font-style: italic;
  color: rgba(0, 255, 216, 0.65);
  background: rgba(0, 255, 255, 0.18);
  border-top: 1px solid #00ffd8;
  transition: ease-out 0.4s;
}

.title-price {
  padding: 4px 0;
  display: flex;
  justify-content: space-around;
  font-size: 1em;
  font-family: 'digital7Mono', monospace;
  width: 250px;
  letter-spacing: 1px;
  margin: 0 auto;
  color: rgb(0, 255, 217);
  background: rgba(0, 255, 255, 0.18);
  transition: ease-out 0.4s;
}

.flicker {
  -webkit-animation: text-flicker 3s linear infinite;
  animation: text-flicker 3s linear infinite;
}

.offset {
  -webkit-animation: letter-flicker 2s linear infinite;
  animation: letter-flicker 2s linear infinite;
}

/*
768px m
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = ***/
@media screen and (min-width: 768px) {
  .title-main {
    grid-column: 1 / 4;
    grid-row-start: 2;
    font-size: 1.2em;
  }

  .title-note {
    align-self: flex-start;
    grid-column: 1 / 2;
    grid-row-start: 1;
    width: 250px;
    margin: 0;
    padding: 0;
    padding: 4px;
    border-top: 0;
    transition: ease-in 0.5s;
  }

  .title-price {
    align-self: flex-start;
    grid-column: 2/ 4;
    grid-row-start: 1;
    min-width: 0;
    width: 250px;
    margin: 0;
    padding: 0;
    padding: 4px;
    font-size: 1em;
    transition: ease-in 0.5s;
  }
}

/*
1028px l
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = ***/
@media screen and (min-width: 1028px) {

  .title-note,
  .title-price {
    padding: 8px 0;
  }
}
</style>