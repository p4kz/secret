import { Header } from "../components/Header.js"
import { setupCounter } from "../modules/counter.js"

export const home = () => {
  const home = document.querySelector('[data-app]')

  Header()

  home.innerHTML = `
    <nav-bar></nav-bar>
    <div>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
    </div>
  `

  setupCounter(document.querySelector('#counter'))
}
