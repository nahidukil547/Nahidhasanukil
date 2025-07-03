const themeBody=document.querySelector('body')
const themeBtn=document.querySelector('#theme-btn')
const darkBtn=themeBtn.children[0];
const lightBtn=darkBtn.nextElementSibling;

let currentTheme= localStorage.getItem('theme');
applyTheme(currentTheme)

themeBtn.addEventListener('click',()=>{
    if (currentTheme === 'light') {
        currentTheme = 'dark';
    } else {
        currentTheme = 'light';
    }
    localStorage.setItem('theme',currentTheme)
    applyTheme(currentTheme)
});

function applyTheme(theme){
    if(theme === 'light'){
        themeBody.classList.remove('dark');
        themeBody.classList.add('light');

        darkBtn.classList.add('hidden');
        darkBtn.classList.remove('visible');

        lightBtn.classList.add('visible')
        lightBtn.classList.remove('hidden')
    }else{
        themeBody.classList.remove('light');
        themeBody.classList.add('dark');

        darkBtn.classList.add('visible');
        darkBtn.classList.remove('hidden');

        lightBtn.classList.add('hidden')
        lightBtn.classList.remove('visible')
    }
}


const card= document.querySelectorAll('.card')
card.forEach((event)=>{
    const cardBody= event.children[0];
    const cardOverlay=cardBody.nextElementSibling;
        
    
    const closeBtn = cardOverlay.querySelector('#close-btn')

    cardBody.addEventListener('click', (event) => {
        event.preventDefault(); 
        cardOverlay.classList.remove('hidden');
        cardOverlay.classList.add('visible');
    });

    closeBtn.addEventListener('click', () => {

        cardOverlay.classList.remove('visible');
        cardOverlay.classList.add('hidden');
    });
})
