const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.controls__control');
const allSections = document.querySelector('.main-content');
function pageTransitions() {
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    //Sections Active
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {

            e.target.classList.add('active');
            //Remove selected from the other btns
            sectBtn.forEach((btn) => {
                btn.classList.remove('active');
            })
            //Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }

    })
    //Toggle theme 
    const themeBtn = document.querySelector('.theme-btn');
    const currentTheme = localStorage.getItem('currentTheme');

    currentTheme && allSections.classList.add('light-mode');

    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');

        element.classList.contains('light-mode')
            ? localStorage.setItem('currentTheme', 'light-mode')
            : localStorage.removeItem('currentTheme')
    })
}

pageTransitions();
