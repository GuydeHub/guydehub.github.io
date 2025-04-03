function SendNotif(text) {
  var notif = document.createElement("div")
  notif.style.height = "225px"
  notif.style.width = "350px"
  notif.style.backgroundColor = "grey"
  notif.style.top = "50%"
  notif.style.left = "50%"
  notif.style.position = "absolute"
  var closeButton = document.createElement("button")
  notif.appendChild(closeButton)
  closeButton.innerHTML = "Close"
  closeButton.addEventListener("click", function() {
    document.body.removeChild(notif)
  })
  var label = document.createElement("h1")
  label.innerHTML = text
  label.style.fontFamily = "cursive"
  notif.style.textAlign = "center"
  notif.appendChild(label)
  document.body.appendChild(notif)
}
SendNotif("test")
