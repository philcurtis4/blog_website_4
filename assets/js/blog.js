/* Blog Dark Mode */

const darkModeButtonBlog = document.querySelector('#dark-mode-button-blog');
const headerClass = document.querySelector('header');


console.log(darkModeButtonBlog.id);
let darkModeBlog = function () {
    
    //changes to the styles
    darkModeButtonBlog.classList.toggle('darkMode');
    headerClass.classList.toggle('darkMode');
    


    //change the dark mode button to light mode
    if (darkModeButtonBlog.textContent === 'Dark Mode') {
        darkModeButtonBlog.innerHTML = 'Light Mode';
       console.log(darkModeButtonBlog.textContent)
    } else {
        darkModeButtonBlog.innerHTML = 'Dark Mode';
        
    }

}


    darkModeButtonBlog.addEventListener('click', darkModeBlog);