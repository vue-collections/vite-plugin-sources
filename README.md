# vite-plugin-sources

辅助阅读设备和无障碍访问

```html
<meta name="format-detection" content="telephone-no" />

<link rel="stylesheet" href="system.css" title="system"/>
<link rel="alternate stylesheet" href="dark.css" title="dark"/>
<link rel="alternate stylesheet" href="light.css" title="light"/>

<p>
  <a href="https://gitee.com" target="any">gitee</a> &nbsp; | &nbsp;
  <a href="https://github.com" target="any">github</a>
</p>

<img src="" draggable="false"/>

<form inert></form>

```

```css
@layer { }

@counter-style fixed {
  system: fixed;
  symbols: 1 2 3;
}

html, body {
  scroll-behavior: smooth;
  -webkit-user-drag: none;
  -webkit-user-modify: read-write-plaintext-only;
  pointer-events: none;
}

```

```js
const base64 = window.btoa

document.addEventListener('DOMNodeInserted', ev=>{})

new MutationObserver((mutationList, observer)=>{

}).observe(document, {
  attributes:true,

})

class ElButton extends HTMLElement {
  connectedCallback() {}
  disconnectedCallback() {}
  adoptedCallback() {}
  attributeChangedCallback() {}
}

document.querySelector('link[href=dark.css]').disabled = false

```
