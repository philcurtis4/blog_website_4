/* Blog Dark Mode */

const darkModeButtonBlog = document.querySelector('#dark-mode-button-blog');
const headerClass = document.querySelector('header');
const mainElement = document.querySelector('main');
const bodyElement = document.querySelector('body');
const articleElement = document.querySelector('article');
const footerEl = document.querySelector('footer h3');

console.log(darkModeButtonBlog.id);
let darkModeBlog = function () {
    
    //changes to the styles
    darkModeButtonBlog.classList.toggle('darkMode');
    headerClass.classList.toggle('darkMode');
    bodyElement.classList.toggle('darkMode');
    mainElement.classList.toggle('darkMode');
    footerEl.classList.toggle('darkMode');
    //articleElement.classList.toggle('darkMode');


    //change the dark mode button to light mode
    if (darkModeButtonBlog.textContent === 'Dark Mode') {
        darkModeButtonBlog.innerHTML = 'Light Mode';
       console.log(darkModeButtonBlog.textContent)
    } else {
        darkModeButtonBlog.innerHTML = 'Dark Mode';
        
    }

    const articles = [...document.querySelectorAll('article')];
    const blogTitles = [...document.querySelectorAll('h3')];
    const blogContent = [...document.querySelectorAll('.content')];
    const postedByEl = [...document.querySelectorAll('.postedBy')];

               for(let i = 0; i < articles.length; i++){
                  articles[i].classList.toggle('darkMode');
                  blogTitles[i].classList.toggle('darkMode');
                  blogContent[i].classList.toggle('darkMode');
                  postedByEl[i].classList.toggle('darkMode');
              }

    

            

}


    darkModeButtonBlog.addEventListener('click', darkModeBlog);