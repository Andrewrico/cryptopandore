<!-- APP.VIE - HTML
================================================================ -->

<template>
  <div id="app">

    <header id="header">
      <Header />
    </header>

    <aside id="leftside">
      <Leftside />
    </aside>

    <main id="main" title="">
      <transition name="router-animation" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
        <router-view />
      </transition>
    </main>

    <aside id="rightside">
      <Rightside />
    </aside>

    <footer id="footer">
      <Footer />
    </footer>

  </div>
</template>

<!-- APP.VIE - JS
================================================================ -->

<script>
import db from '@/firebase/init.js'
import Header from './components/grid/Header.vue'
import Leftside from './components/grid/Leftside.vue'
import Rightside from './components/grid/Rightside.vue'
import Footer from './components/grid/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Leftside,
    Rightside,
    Footer
  }
}
</script>

<!-- APP.VIE - CSS
================================================================ -->

<style>
/*
grid
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = ***/
#app {
    --app-header-height-small: 125px;
  --app-nav-height-small: 150px;
  --app-main-height-small: calc(100vh - 525px);
  --app-main-minheight-small: 150px;
  --app-aside-footer-height-small: 125px;
  --app-grid-template-columns: 125px 125px 2fr 2fr 125px 125px;
  --app-header-height-large: 150px;
  --app-aside-main-nav-minheight-large: 500px;
  --app-aside-main-nav-height-large: calc(100vh - 250px);
  --app-footer-height-large: 100px;
}

html {
  overflow: hidden;
  height: 100%;
}

html,
body {
  background: #000;
  margin: 0;
  padding: 0;
  display: block;
}

body {
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

#app {
  backface-visibility: hidden;
  width: auto;
  height: auto;
  overflow: hidden;
  display: grid;
  grid-template-areas: "head""nav""main""ad""ft";
  background-image: url("../src/assets/images/background.png");
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
  will-change: transform;
  border-collapse: collapse;
  color: var(--app-default-text-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family:
    'RobotoMono_Thin', 'RobotoMono_Light', 'RobotoMono_LightItalic',
    'VT323', 'ShareTechMono','softwareTester7','SpaceMono','Lekton','Oslo',
    'digital7Mono','BigPixelLight','CutiveMono','telegrama',
    'monospace','Helvetica','sans-serif';
}


#main {
  width: 100vw;
  height: 100vh;
  display: block;
  overflow: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  border:1px solid rgba(0, 238, 255, 0.897);
  background: rgba(4, 52, 58, 0.212);
  filter: drop-shadow(0 0 5px rgb(1, 76, 95));
  box-shadow: 20px 16px 227px -34px rgba(25, 224, 207, 0.81);
  padding: 8px;
}




@media screen and (min-width: 1028px) {
  #main {
  width: calc(100vw - 500px);
  }
}

#header,
#leftside,
#rightside,
#footer {
  background: rgba(35, 162, 255, 0.21);
  height: 100%;
}

[id="@header"],
[id="@leftside"],
[id="@rightside"],
[id="@footer"] {
  height: 100%;
}

#header {
  grid-area: head;
   width: 100%;
  height: 125px;
}

#leftside {
  grid-area: nav;
   height: 150px;
}

#main {
  grid-area: main;
   height: 80vh;
}

#rightside {
  grid-area: ad;
   width: 100%;
  height: 125px;
}

#footer {
  grid-area: ft;
   width: 100%;
  height: 125px;
}

::-moz-selection {
  background: aquamarine;
  color: #000;
  text-shadow: none;
}

::selection {
  background: aquamarine;
  color: #000;
  text-shadow: none;
}




/* scroll small screem */
@media screen and (max-height: 100vh) and (max-width: 1028px) {
  html {
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
  }
}

/* scroll large screem */
@media all and (max-height: 800px) and (min-width: 768px) {
  html {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
}

@media screen and (min-width: 1028px) {
  #app {
    grid-template-columns: 125px 125px 2fr 2fr 125px 125px;
    grid-template-areas: "head head head head head head""nav nav main main ad ad""nav nav main main ad ad""ft ft ft ft ft ft";
  }

  #header {
    height: var(--app-header-height-large);
  }

  #main,
  #leftside,
  #rightside {
    height: var(--app-aside-main-nav-height-large);
    min-height: var(--app-aside-main-nav-minheight-large);
  }

  #footer {
    height: var(--app-footer-height-large);
  }
}

@media screen and (min-width: 1268px) {
  #main {
    padding: 32px;
  }

  #header {
    border-bottom: 0;
  }

  #leftside {
    border-bottom: 0;
  }

  #footer {
    border-top: none;
  }
}

</style>