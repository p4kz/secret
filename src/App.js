
import './styles/global.css'

export default function App() {
  const App = document.createElement('div')
  
  App.classList.add('App')

  App.innerHTML = `
    <div class="command">
      <div class="command__header">
        <p>Prompt de Comando</p>
      </div>

      <div class="command__box">
        <p>Secret-project [versão 1.0.0] <br> (c) 2022 Eric Machado Mendonça, alguns direitos reservados.</p>
        <textarea 
          class="command__text" 
          cols="90" rows="20" 
          placeholder="/help para detalhes"
        >
        </textarea>
      </div>
    
    </div>
  `

  return App
}