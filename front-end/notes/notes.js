function Logout(){
    alert("LogOut Button Pressed");
}


const contentContainer = document.getElementById("main-content");
const buttons = document.querySelectorAll(".dashboardsection-div-left-contentsection-button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // SPA content loading here
        const fileName = button.getAttribute("data-file");

        localStorage.setItem("savedPage", fileName);

        // Go fetch the file from your computer/server
        fetch(fileName)
            .then(response => {
                // Unpack the file into plain text (HTML)
                return response.text(); 
            })
            .then(htmlData => {
                // Put that HTML text inside our container!
                contentContainer.innerHTML = htmlData; 
            })
            .catch(error => {
        // If something goes wrong, print it to the screen!
        console.error(error);
        contentContainer.innerHTML = `<h2 style="color:red;">Error!</h2><p>${error.message}</p>`;
    });

    });

});

// ⭐ NEW: CHECK MEMORY WHEN THE PAGE RELOADS
// Go look in the notebook to see if a page was saved
const lastVisitedPage = localStorage.getItem("savedPage");

if (lastVisitedPage) {
    // Find the exact button that matches the saved page
    const buttonToClick = document.querySelector(`[data-file="${lastVisitedPage}"]`);
    
    // If the button exists, make the code "click" it automatically!
    if (buttonToClick) {
        buttonToClick.click();
    }
}