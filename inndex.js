document.addEventListener("DOMContentLoaded", function () {
    const pageLinks = document.querySelectorAll('.word');
    const content = document.getElementById('content');

    function showContent(pageName) {
        // You can customize the content based on the selected page
        switch (pageName) {
            case 'hobbies':
                content.innerHTML = 'Dr Saeed is an eminent scientist from the Food Scientist and technology community with the vision of "Ensuring Food Safety through diversified modules including assesment and dissemination of information to the public". In addition to his expertise in Food Safety,he has been able to achieve excellence in food nutrition';
                break;
            case 'education':
                content.innerHTML = 'Content for Education';
                break;
            case 'experience':
                content.innerHTML = 'Content for Experience';
                break;
            // Add more cases for additional pages
            default:
                content.innerHTML = 'Default Content';
        }
    
    }

    pageLinks.forEach(link => {
        link.addEventListener('click', function () {
            const pageName = this.getAttribute('data-page');
            showContent(pageName);
        });
    });
});
// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});




