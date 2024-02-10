const initializeInterface = () => {
  const secondaryInner = document.querySelector('#secondary-inner')
  
  const interface = document.createElement("section")
  interface.style.width = "100%"
  interface.style.height = "480px"
  interface.style.backgroundColor = "blue"
  interface.id = "interface"
  interface.style.display = "none"
  
  const firstChild = secondaryInner.firstElementChild
  
  secondaryInner.insertBefore(interface, firstChild)
}

const toggleInterface = () => {
  const interface = document.querySelector('#interface')
  console.log(interface)
  const isVisible = interface.style.display == "block"
  console.log(isVisible)

  isVisible ? interface.style.display = "none" : interface.style.display = "block"
}

document.addEventListener("load", () => {
  if (!document.querySelector('#interface')) initializeInterface()
})