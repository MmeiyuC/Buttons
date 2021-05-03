document.getElementById('change-image').addEventListener('click', image)
document.getElementById('change-text').addEventListener('click', text)
document.getElementById('hide').addEventListener('click', hide)
document.getElementById('show').addEventListener('click', show)
document.getElementById('background').addEventListener('click', background)

function image () {
  document.getElementById('image').src = 'images/JBA.jpeg'
}

function text () {
  document.getElementById('text').innerHTML = 'New Text'
}

function hide () {
  document.getElementById('text').style.display = 'none'
}

function show () {
  document.getElementById('text').style.display = 'block'
}

function background () {
  document.body.style.backgroundColor = '#ffd166'
}
