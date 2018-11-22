<!-- @rightside HTML
============================================================= -->
<template>
		<div id="@rightside">
      <a class="$button">
         <router-link class="router-link" :to="{ name: 'ICO' }">ICO</router-link>
      </a>
		</div>
</template>


<!-- @rightside JS
============================================================= -->
<script>

export default {
  name: 'Rightside',
}
</script>


<!-- @rightside CSS
============================================================= -->
<style scoped>

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
  line-height: 2.5;
  width: 75%;
  margin: 16px auto;
  padding: 0 12px;
  border-radius: 2px;
  background: var(--button-bg-color-secondary);
  border: var(--button-border-outset);
  color: var(--button-text-color);
  font-family: var(--button-family-font);
  font-size: var(--button-font-size-normal);
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


@media screen and (min-width: 1028px) {
  .router-link {
  margin: 0px auto;
  }
}
</style>