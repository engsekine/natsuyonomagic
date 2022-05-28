const test = document.getElementById('test')
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    if (test.classList.contains('test2')) {
        test.classList.remove('test2')
    } else {
        test.classList.add('test2')
    }
})