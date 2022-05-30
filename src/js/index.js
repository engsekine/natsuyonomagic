const test = document.getElementById('test')
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
  if (test.classList.contains('test2')) {
    test.classList.remove('test2')
  } else {
    test.classList.add('test2')
  }
})
btn.addEventListener('click', () => {
  test.classList.toggle('test3')
})

//Grab divs with the class name 'match-height'
let getDivs = document.getElementsByClassName('match-height')

//Find out how my divs there are with the class 'match-height'
let arrayLength = getDivs.length
let heights = []

//Create a loop that iterates through the getDivs variable and pushes the heights of the divs into an empty array
for (let i = 0; i < arrayLength; i++) {
  heights.push(getDivs[i].offsetHeight)
}

//Find the largest of the divs
function getHighest() {
  return Math.max(...heights)
}

//Set a variable equal to the tallest div
let tallest = getHighest()

//Iterate through getDivs and set all their height style equal to the tallest variable
for (let i = 0; i < getDivs.length; i++) {
  getDivs[i].style.height = tallest + 'px'
}

//マウスボタン押したとき発動
window.addEventListener('mousedown', () => {
  console.log('mousedown')
})
//マウスボタン離したとき発動
window.addEventListener('mouseup', () => {
  console.log('mouseup')
})
//マウス動かしたとき発動
window.addEventListener('mousemove', () => {
  console.log('mousemove')
})
//キーボード入力文字押したとき発動
window.addEventListener('keypress', () => {
  console.log('keypress')
})
//キーボード押ているとき発動
window.addEventListener('keydown', () => {
  console.log('keydown')
})
//キーボード離したとき発動
window.addEventListener('keyup', () => {
  console.log('keyup')
})
//スクロールしたとき発動
window.addEventListener('scroll', () => {
  console.log('scroll')
})
//全てのロードが完了したら発動
window.addEventListener('load', () => {
  console.log('load')
})
//DOMが完成したら発動
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
})
//formを変更して入力ボタン押したとき発動
const form = document.forms.form
form.change.addEventListener('change', () => {
  console.log('change')
})
//submitボタン押したとき発動
const button = document.forms.form
button.addEventListener('submit', () => {
  console.log('submit')
})
//クリック時に発動
button.addEventListener('click', () => {
  console.log('click')
})
