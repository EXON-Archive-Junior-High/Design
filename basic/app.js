const changeTheme = document.getElementById('changetheme')
const logo = document.getElementById('logo')

changeTheme.addEventListener('click', () => {
    const html = document.documentElement

    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        logo.src = './images/logo2.png'
        localStorage.setItem('darkTheme', 'false')
    } else {
        html.classList.add('dark')
        logo.src = './images/logo1.png'
        localStorage.setItem('darkTheme', 'true')
    }
})