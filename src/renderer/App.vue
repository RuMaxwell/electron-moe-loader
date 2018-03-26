<template>
  <div id="app">
    <function-bar></function-bar>
    <logo-search></logo-search>
    <pic-list class="pic-list"></pic-list>
    <download-manager class="download-manager"></download-manager>
    <button @click="debug">debug</button>
  </div>
</template>

<script>
import functionBar from "./components/functionBar";
import logoSearch from "./components/logoSearch";
import downloadManager from "./components/downloadManager";
import picList from "./components/picList";

import login from "../core/pixiv/login";

export default {
  name: "electron-moe-loader",
  components: { functionBar, logoSearch, downloadManager, picList },
  methods: {
    async debug() {
      await login();
    }
  }
};
</script>

<style>
/* CSS */
#app {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

html {
  height: 100%;
  width: 100%;
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  user-select: none;
  cursor: default;
  font-family: "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}

body {
  margin: 0;
  height: 100%;
  width: 100%;
}

.pic-list {
  flex-grow: 1;
}

.download-manager {
  width: 250px;
}

/* cyrillic */
@font-face {
  font-family: "Poiret One";
  font-style: normal;
  font-weight: 400;
  src: local("Poiret One"), local("PoiretOne-Regular"),
    url(~@/assets/UqyVK80NJXN4zfRgbdfbo5pcV_cx.woff2) format("woff2");
  unicode-range: U+0400-045f, U+0490-0491, U+04b0-04b1, U+2116;
}
/* latin-ext */
@font-face {
  font-family: "Poiret One";
  font-style: normal;
  font-weight: 400;
  src: local("Poiret One"), local("PoiretOne-Regular"),
    url(~@/assets/UqyVK80NJXN4zfRgbdfbo5BcV_cx.woff2) format("woff2");
  unicode-range: U+0100-024f, U+0259, U+1-1eff, U+2020, U+20a0-20ab, U+20ad-20cf,
    U+2113, U+2c60-2c7f, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Poiret One";
  font-style: normal;
  font-weight: 400;
  src: local("Poiret One"), local("PoiretOne-Regular"),
    url(~@/assets/UqyVK80NJXN4zfRgbdfbo55cVw.woff2) format("woff2");
  unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02bb-02bc, U+02c6, U+02da,
    U+02dc, U+2000-206f, U+2074, U+20ac, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(~@/assets/MaterialIcons-Regular.woff2) format("woff2");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px; /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: "liga";
}
</style>
