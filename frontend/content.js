const mountInterfaceToggle = (elem) => {
  const btn = document.createElement("button")
  btn.textContent = "Talk to Myc"
  btn.style.width = "100%"
  btn.addEventListener("click", () => {
    const interface = document.getElementById('interface')
    const isVisible = interface.style.display == "block"

    isVisible ? interface.style.display = "none" : interface.style.display = "block"
  })

  const firstChild = elem.firstElementChild

  elem.insertBefore(btn, firstChild)
  console.log("Successfully mounted interface toggle")
}

const mountInterface = (elem) => {
  const interface = document.createElement("section")
  interface.style.width = "100%"
  interface.style.height = "458.5px"
  interface.id = "interface"
  interface.style.display = "none"

  const firstChild = elem.firstElementChild

  elem.insertBefore(interface, firstChild)
  console.log("Successfully mounted interface")
}

window.onload = () => {
  let tries = 0;
  console.log("Searching for #secondary-inner")
  let secondaryInner = document.getElementById("secondary-inner")

  const forceSelect = setInterval(() => {
    if (!secondaryInner) {
      secondaryInner = document.getElementById("secondary-inner")
      console.log("#secondary-inner element not detected. Searching again. Current attempt:", tries)
      ++tries
    } else if (tries >= 5) {
      console.log("Maximum number of tries exceeded. Ending search")
      clearInterval(forceSelect)
    } else {
      clearInterval(forceSelect)
      mountInterface(secondaryInner)
      setTimeout(() => {
        mountInterfaceToggle(secondaryInner)
      }, 80)
    }
  }, 50)
}