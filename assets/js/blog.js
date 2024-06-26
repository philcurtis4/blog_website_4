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


/* form handling */

function getBlogs () {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    return blogs;
}

function outputBlogs () {
    // get the raw blogs from local

    const blogs = getBlogs();

    //target the container

    const container = document.querySelector('main');

    //clear existing obj

     //container.innerHTML = "";

    //loop over each object in the array and output a blog in our main container

    for (const blogObj of blogs) {
        container.insertAdjacentHTML('beforeend', `
            <article class="blog-post">
                <h3 class="postTitle">${blogObj.title}</h3>
                <p class="content">${blogObj.content}</p>
                <p class="postedBy">posted by ${blogObj.username} on ${blogObj.date}</p>
            </article>
            `)
    }
    
}

outputBlogs();

