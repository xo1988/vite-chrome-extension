import { createApp } from "vue"
import App from "./App.vue"

window.onload = async () => {
  const el = document.querySelector('body')
  if (el) {
    el.insertAdjacentHTML(
      'afterend',
      '<div id="xxx"></div>',
    )
    const app = createApp(App)
    app.mount('#xxx')
  }
}
