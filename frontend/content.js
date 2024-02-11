const cropped = `
<svg width="80" height="234" viewBox="0 0 80 234" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="80" height="234" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_1_3" transform="matrix(0.0125 0 0 0.0042735 -2.6375 -0.581196)"/>
</pattern>
<image id="image0_1_3" width="500" height="500" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAOnRFWHRDb21tZW50AHhyOmQ6REFGOGJtOVAwZUE6NixqOjg3Mjk5MDcxNjI3NjMzMDUzNSx0OjI0MDIxMDIyEfPOhQAABN9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgogICAgICAgIDxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogICAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgICAgICAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICAgICAgICA8ZGM6dGl0bGU+CiAgICAgICAgPHJkZjpBbHQ+CiAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5vIC0gMTwvcmRmOmxpPgogICAgICAgIDwvcmRmOkFsdD4KICAgICAgICA8L2RjOnRpdGxlPgogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgoKICAgICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogICAgICAgIHhtbG5zOkF0dHJpYj0naHR0cDovL25zLmF0dHJpYnV0aW9uLmNvbS9hZHMvMS4wLyc+CiAgICAgICAgPEF0dHJpYjpBZHM+CiAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+CiAgICAgICAgPEF0dHJpYjpDcmVhdGVkPjIwMjQtMDItMTA8L0F0dHJpYjpDcmVhdGVkPgogICAgICAgIDxBdHRyaWI6RXh0SWQ+N2FkZGE1M2UtZWViMi00ZTdiLWEzZjgtOWM2MjA1Njk1NDNjPC9BdHRyaWI6RXh0SWQ+CiAgICAgICAgPEF0dHJpYjpGYklkPjUyNTI2NTkxNDE3OTU4MDwvQXR0cmliOkZiSWQ+CiAgICAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgICAgICA8L3JkZjpsaT4KICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgPC9BdHRyaWI6QWRzPgogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgoKICAgICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogICAgICAgIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgICAgICAgPHBkZjpBdXRob3I+U2Fkb2thdCBSYXVwb3ZhPC9wZGY6QXV0aG9yPgogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgoKICAgICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogICAgICAgIHhtbG5zOnhtcD0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyc+CiAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5DYW52YTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgICAgIAogICAgICAgIDwvcmRmOlJERj4KICAgICAgICA8L3g6eG1wbWV0YT76uDq2AAAc0ElEQVR4nOzdQUvU+x7H8e+N8yh6FD2H8yh6JjUZKlgUkpsMiULSlcEsIgiqTaJtAoUITNqIBSWBWklF1uTcxYV7OdzbOR2bmf/M575eS5n/7/dZzRv+C+cf3W63WwDASDvR9AAA4NcJOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA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"/>
</defs>
</svg>
`

const attention = {
  animation: [
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(-2deg)' },
    { transform: 'rotate(2deg)' },
    { transform: 'rotate(0deg)' }
  ],
  options: {
    duration: 1000,
    iterations: 1,
    easing: "ease"
  }
}

const grow = {
  animation: [
    { height: '0' },
    { height: '448px' }
  ],
  options: {
    duration: 300,
    iterations: 1,
    fill: 'forwards'
  }
}

const shrink = {
  animation: [
    { height: '448px' },
    { height: '0' }
  ],
  options: {
    duration: 300,
    iterations: 1,
    fill: 'forwards'
  }
}

let buttonToggled = false
let stores = {
  dropdown: undefined,
  video: undefined,
  btn: undefined,
  currentTime: 0
}
const toggleDropdown = () => {
  if(!buttonToggled) {
    stores.dropdown.animate(grow.animation, grow.options)
    stores.video.pause()
    stores.btn.textContent = "Close Conversation"
    stores.btn.backgroundColor = "var(--yt-spec-badge-chip-background)"
    stores.btn.color = "white"
    stores.btn.borderRadius = "0 0 8px 8px"
    buttonToggled = true
  } else {
    stores.dropdown.animate(shrink.animation, shrink.options)
    stores.video.play()
    stores.btn.textContent = "Talk to MYC"
    stores.btn.borderRadius = "8px"
    buttonToggled = false
  }
}

const mountDropdownToggle = (elem) => {
  const btn = document.createElement("button")
  btn.textContent = "Talk to MYC"
  btn.style.width = "100%"
  btn.style.transition = "200ms ease"
  btn.style.backgroundColor = "var(--yt-spec-text-primary)"
  btn.style.color = "var(--yt-spec-text-primary-inverse)"
  btn.style.padding = "0 var(--ytd-margin-3x)"
  btn.style.fontFamily = '"Roboto", "Arial", sans-serif'
  btn.style.font = "1.4rem"
  btn.style.lineHeight = "2rem"
  btn.style.fontWeight = "500"
  btn.style.border = "none"
  btn.style.borderRadius = "8px"
  btn.style.height = "32px"
  btn.style.cursor = "pointer"
  btn.id = "toggle-interface"
  btn.addEventListener("click", toggleDropdown)

  const firstChild = elem.firstElementChild

  elem.insertBefore(btn, firstChild)
  stores.btn = btn
  console.log("Successfully mounted interface toggle")
}

const mountDropdown = (elem) => {
  const dropdown = document.createElement("section")
  dropdown.style.width = "100%"
  dropdown.style.height = "0"
  dropdown.id = "dropdown"
  dropdown.innerHTML = cropped
  dropdown.style.display = "flex"
  dropdown.style.justifyContent = "center"
  dropdown.style.alignItems = "center"
  dropdown.style.overflow = "hidden"
  dropdown.style.backgroundColor = "var(--yt-spec-text-primary)"

  const firstChild = elem.firstElementChild

  elem.insertBefore(dropdown, firstChild)
  stores.dropdown = dropdown
  console.log("Successfully mounted interface")
}

window.onload = () => {
  // window.location.href

  let tries = 0
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
      
      mountDropdownToggle(secondaryInner)
      setTimeout(() => {
        mountDropdown(secondaryInner)
      }, 500)

      stores.video = document.querySelector('.video-stream.html5-main-video')
      stores.video.addEventListener("pause", () => {
        if(!buttonToggled) {
          stores.btn.animate(attention.animation, attention.options)
        }
      })
      stores.video.addEventListener("play", () => {
        if (buttonToggled) {
          stores.btn.textContent = "Talk to MYC"
          stores.dropdown.animate(shrink.animation, shrink.options)
          buttonToggled = false
        }
      })
      stores.video.addEventListener("timeupdate", () => {
        stores.currentTime = stores.video.currentTime.toFixed(3)
        console.log(stores.currentTime)
      })
    }
  }, 800)
}