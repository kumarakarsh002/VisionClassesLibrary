function Logout(){
    alert("LogOut Button Pressed");
}


const contentContainer = document.getElementById("main-content");
const buttons = document.querySelectorAll(".dashboardsection-div-left-contentsection-button");




async function loadPage(page) {
    const response = await fetch(`Classes/${page}.html`);
    
    const html = await response.text();

    contentContainer.innerHTML = html;
    
};



//New Code
buttons.forEach(button => {
    

    button.addEventListener("click", () => {

        buttons.forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
        const page = button.dataset.page;
        localStorage.setItem("currentPage", page);
        loadPage(page);
    
    });
    
    
});


window.addEventListener("DOMContentLoaded", () => {

    const savedPage = localStorage.getItem("currentPage") || "Class8";

    loadPage(savedPage);

    // Active button bhi restore karo
    buttons.forEach(button => {
        if (button.dataset.page === savedPage) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

});    

