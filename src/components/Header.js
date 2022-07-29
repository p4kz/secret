
export const Header = () => {
  const Header = function () {
    console.log( "created" )
    return Reflect.construct( HTMLElement, [], Header )
  }

  Header.prototype = Object.create( HTMLElement.prototype )

  Header.prototype.connectedCallback = function () {
    console.log( "connected" )
    this.innerHTML = "hello"
  }

  return customElements.define( "nav-bar", Header )
}

