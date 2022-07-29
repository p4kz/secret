
export const Header = () => {
  const Header = function () {
    return Reflect.construct( HTMLElement, [], Header )
  }

  Header.prototype = Object.create( HTMLElement.prototype )

  Header.prototype.connectedCallback = function () {
    this.innerHTML = `
      <div class="navbar">
        <div class="navbar__logo">
          <a class="navbar__link" target="_blank" href="https://github.com/p4kz">p4k</a>
        </div>
        <ul class="navbar__list">
          <li>
            <a class="navbar__link" href="#">Home</a>
            <a class="navbar__link" href="#">Sobre</a>
          </li>
        </ul>
      </div>
    `
  }

  return customElements.define( 'nav-bar', Header )
}
