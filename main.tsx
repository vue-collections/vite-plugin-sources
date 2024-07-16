import { createApp, defineComponent, h, onMounted } from 'vue'

import './global.css'

const App = defineComponent({
  setup() {
    onMounted(()=>{
      document.addEventListener('DOMNodeInserted', ev=>{

      })
    })

    return ()=>(
      <div>
        <h1 title="css新世界" accessKey="3" tabindex="1">hi,css</h1>
        <div className="square"></div>

        <p>
          <a href="https://gitee.com" target="any">gitee</a> &nbsp; | &nbsp;
          <a href="https://github.com" target="any">github</a>
        </p>


      </div>
    )
  }
})

createApp(App).mount('#app')
