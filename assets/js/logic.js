/* creat darkmode */

const darkModeButton = document.querySelector('#dark-mode-button');
const headerClass = document.querySelector('header');
const sectionClass = document.querySelector('section');
const submitClass = document.querySelector('.submit');
const formBoxClass = document.querySelector('.formBox')


let darkMode = function () {
    
    //changes to the styles
    darkModeButton.classList.toggle('darkMode');
    headerClass.classList.toggle('darkMode');
    sectionClass.classList.toggle('darkMode');
    submitClass.classList.toggle('darkMode');
    formBoxClass.classList.toggle('darkMode');


    //change the dark mode button to light mode
    if (darkModeButton.textContent === 'Dark Mode') {
        darkModeButton.innerHTML = 'Light Mode';
       
    } else {
        darkModeButton.innerHTML = 'Dark Mode';
        
    }

    

    const labels = [...document.querySelectorAll('label')];

               for(let i = 0; i < labels.length; i++){
                  labels[i].classList.toggle('darkMode');
              }
}

darkModeButton.addEventListener('click', darkMode);




