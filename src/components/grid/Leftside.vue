<!-- @leftside HTML
============================================================= -->
<template>
  <div id="@leftside">

    <div class="cell-grid">
      <nav class="$menu">
        <div class="menu-item">
          <a class="$button" >
            <router-link class="router-link"  to="/" exact>Console</router-link>
          </a>
        </div>
        <div class="menu-item">
          <a class="$button">
            <router-link class="router-link" :to="{ name: 'News' }">News</router-link>
          </a>
        </div>
        <div class="menu-item">
          <a class="$button">
            <router-link class="router-link" :to="{ name: 'Exchanges' }">Exchanges</router-link>
          </a>
        </div>
        <div class="menu-item">
          <a class="$button">
            <router-link class="router-link" :to="{ name: 'Trackers' }">Trackers</router-link>
          </a>
        </div>
        <div class="menu-item">
          <a class="$button">
            <router-link class="router-link" :to="{ name: 'Communities' }">Communities</router-link>
          </a>
        </div>
        <div class="menu-item">
          <a class="$button">
            <router-link class="router-link" :to="{ name: 'People' }">People</router-link>
          </a>
        </div>
      </nav>
    </div>

  </div>
</template>

<!-- @leftside JS
============================================================= -->

<script >
export default {
  name: 'Leftside',
  methods: {
//     onDeactivate() {
//     document.body.scrollTop = 0;
// },
  }
}
</script>

<!-- @leftside CSS
============================================================= -->

<style scoped>
/*
mobil-first
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = ***/
[id^="@leftside"] {
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  max-width: 100%;
}
/*
   $menu sm
   -----------------------*/
[class="$menu"] {
  display: grid !important;
  grid-gap: 16px;
  width: 100%;
  height: 90%;
  grid-template-columns: 1fr 1fr;
  transition: 0.7s  ease-in;
}
/*
   .menu-item sm
   -----------------------*/
.menu-item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
/*
   $button sm
   -----------------------*/
[class^="$button"] {
  display: inline-flex;
  height: auto;
  width: var(--button-size-large);
  transition: 0.4s ease-out!important;
}
/*
   .router-link sm
   -----------------------*/
.router-link {
  /* backface-visibility: hidden; */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 2;
  width: 100%;
  color: var(--button-text-color);
  background: var(--button-bg-color-primary);
  border: var(--button-border-inset);
  font-family: var(--button-family-font);
  font-size: var(--button-font-size-normal);
  letter-spacing:var(--button-letter-spacing);
  text-decoration: none !important;
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
  box-shadow: var(--button-active-box-shadow-active);
  outline: 6px inset rgba(5, 209, 202, 0.326);
  transform: translatex(1px);
}

/*
1028px m
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = ***/
@media screen and (min-width: 1028px) {
  [class^="$menu"] {
    grid-gap: 16px;
    grid-template-columns: 1fr;
    height: 70%;
  }

  [class^="$button"] {
    align-self: flex-start;
    width: var(--button-size-normal)
  }

  .router-link {
    line-height: 3;
  }
}

/*
1268px l
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = ***/
@media screen and (min-width: 1268px) {
  [class^="$button"] {
    /* font-size: var(--button-font-size-normal); */
     font-size: 17px;
  }
}
</style>