const changeTheme = document.getElementById('changetheme')

changeTheme.addEventListener('click', () => {
    const logo = document.getElementById('logo')
    const theme = document.getElementById('changetheme')

    const html = document.documentElement

    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        logo.src = './images/logo2.png'
        theme.style.background = 'url(\"./images/dark.png\")'
        theme.style.backgroundSize = '30px 30px'
        localStorage.setItem('darkTheme', 'false')
    } else {
        html.classList.add('dark')
        logo.src = './images/logo1.png'
        theme.style.background = 'url(\"./images/light.png\")'
        theme.style.backgroundSize = '30px 30px'
        localStorage.setItem('darkTheme', 'true')
    }
})