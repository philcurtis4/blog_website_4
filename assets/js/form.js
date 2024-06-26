/*grab form by query */

const form = document.querySelector('form');

/* function that collects the data and saves it as an object in an array*/

function getBlogs () {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    return blogs;
}

function createBlog (eventObj) {
    eventObj.preventDefault();

    //grab each input element

    const usernameInput = document.querySelector('#username');
    const titleInput = document.querySelector('#title');
    const contentInput = document.querySelector('#content');

    //get the value of each input

    const userNameVal = usernameInput.value;
    const titleVal = titleInput.value;
    const contentVal = contentInput.value;

    //create date value object

    const dateObj = new Date();

    //get each time value

    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    const year = dateObj.getFullYear();

    const objHours = dateObj.getHours();
    const hour = objHours > 12 ? objHours -12 : objHours;
    
    const minutes = dateObj.getMinutes();

    //combine them all into a string

    const dateStr = `${month}/${date}/${year} ${hour}:${minutes}`;
    console.log(dateStr);
    //create an object that has each value and date 

    const blogObj = {
        username: userNameVal,
        title: titleVal,
        content: contentVal,
        date: dateStr
    };
    

    //pull old data from local or have empty array

    const blogs = getBlogs();

    //push the blogs obj to the blogs array then convert to JSON

    blogs.push(blogObj);
    const jsonArray = JSON.stringify(blogs);

    //save the blogs array to the local storage
    

    localStorage.setItem('blogs', jsonArray);

    //reset form values

    
    window.location = "./blog.html";

    

    
}

form.addEventListener('submit', createBlog);