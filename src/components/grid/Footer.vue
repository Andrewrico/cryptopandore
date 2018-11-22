
<!-- @footer HTML 
============================================================= -->
<template>
  <div id="@footer">

    <div class="cell-grid">
      <div class="$icon">
        <a  title="Twitter" v-bind:href="twitterUrl" target="_blank" rel="noopener">
          <i class="fab fa-twitter"></i>
        </a>
        <a title="Github" v-bind:href="githubUrl" target="_blank" rel="noopener">
         <i class="fab fa-github-alt"></i>
        </a>
      </div>
    </div>

    <div class="cell-grid">
      <nav class="$menu">
        <div class="menu-item">
          <a class="$button">
            <router-link class="router-link" :to="{ name: 'Submmit' }">Submit </router-link>
          </a>
        </div>
        <div class="menu-item">
          <a class="$button">
            <router-link class="router-link" :to="{ name: 'Donate' }">Donate </router-link>
          </a>
        </div>
        <div class="menu-item">
          <a class="$button">
            <router-link class="router-link" :to="{ name: 'Disclaimer' }">Disclaimer</router-link>
          </a>
        </div>
      </nav>
    </div>

    <div class="cell-grid">
      <div class="title-footer">
        <i class="fa fa-copyright"></i>
        {{ copyright }}
      </div>
    </div>

  </div>
</template>


<!-- @footer JS 
============================================================= -->
<script>

export default {
  name: 'Footer',
  data() {
    return {
      copyright: '2018 Cryptopandore LLC. All Rights Reserved',
      twitterUrl: 'https://twitter.com/cryotpandore',
      githubUrl: 'https://github.com/',
    }
  }
}

</script>


<!-- @footer CSS
============================================================= -->

<style scoped>
[id^="@footer"] {
  --title-footer-text-shadow: 1px 0.5px 0.5px #000;
  --title-footer-text-color: #fff;
  --title-footer-font-family: 'VT323', monospace;
  --title-footer-font-size: 13px;

--fa-text-color: rgb(155, 240, 229);
 --fa-bg-color: rgba(0, 16, 16, 0.874);
 --fa-border-inset: 0.5px inset rgba(0, 255, 255, 0.716);
 --fa-border-outset: 0.5px outset rgba(0, 255, 255, 0.716);
 --fa-box-shadow-active: 1px 1px 30px rgba(38, 198, 218, 1);
 --fa-bg-color-hover: #d8ffff;
 --fa-text-active-color: #005f5f;
}

/* mobil-first
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
[id^="@footer"] {
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  width: 100%;
  align-content: space-between;
  text-align: center;
}

.title-footer {
  text-shadow: var(--title-footer-text-shadow);
  color: var(--title-footer-text-color);
  font-family: var(--title-footer-font-family);
  font-size:  var(--title-footer-font-size);
  font-weight: 100;
  letter-spacing: 2px;
  width: 100%;
}

.cell-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%;
  width: 96%;
  margin: auto;
}

[class^="$menu"] {
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 100%;
  justify-content: space-between;
  transition: 0.5s ease-in-out;
}
.menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
/*
   $button
   -----------------------*/
[class^="$button"] {
  display: inline-flex;
  min-width: 80px;
  width: 100%;
}

.router-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 2.4;
  width: 100%;
  padding: 0 12px;
  background: var(--button-bg-color-secondary);
  border: var(--button-border-outset);
  color: var(--button-text-color);
  font-family: var(--button-family-font);
  font-size: var(--button-font-size-small);
  letter-spacing: var(--button-letter-spacing-small);
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  z-index: 5;
  cursor: pointer;
}

.router-link:hover {
  background: var(--button-active-bg-color-link);
  color: var(--button-active-text-color-link);
}

.router-link-active {
  background: var(--button-active-bg-color-link);
  color: var(--button-active-text-color-link);
  border:var(--button-active-border-link);
  box-shadow: var(--button-active-box-shadow-active);
 transform: translatex(1px);
  outline: 6px outset rgba(5, 209, 202, 0.326);
} 

/*
   $icon
   -----------------------*/
 [class^="$icon"] .fab {
  color: var(--fa-text-color);
  background: var(--fa-bg-color);
  border: var(--fa-border-inset);
  font-size: 1.4em;
  margin: 2px;
  padding: 4px;
  border-radius: 50%;
  text-shadow: 1px 1px #000;
}

[class^="$icon"] .fab:hover {
  color: var(--fa-text-active-color);
  background: var(--fa-bg-color-hover);
}

[class^="$icon"] .fab:active {
  box-shadow: var(--fa-box-shadow-active);
  transform: translateY(2px);
}

/* 768px
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
@media screen and (min-width: 768px) {
  [class^="$menu"] {
    max-width: 70%;
  }
}

/* 1028px
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
@media screen and (min-width: 1028px) {
  [class^="$button"] {
    align-self: center;
    min-width: 150px;
    width: 10%;
    max-width: 100%;
  }

  .router-link {
    line-height: 2;
  }

  .cell-grid:nth-child(2) {
    order: 3;
  }

  [id^="@footer"] {
    grid-template-columns: 250px calc(100vw - 750px) 500px;
    grid-gap: 0px;
    max-height: 100%;
    align-content: center;
  }

  [class^="$menu"] {
    max-width: 100%;
    transition: 0.2s ease-out;
    justify-content: space-around;
  }
}

/* 1268px
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
@media screen and (min-width: 1268px) {
  [id^="@footer"] {
    grid-template-columns: 250px calc(100vw - 800px) 550px;
  }
}

/* 1366px
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
@media screen and (min-width: 1366px) {
  [class^="$title-footer"] {
    font-size: 1.2em;
    text-indent: 140px;
    transition: 0.3s;
  }
}

</style>