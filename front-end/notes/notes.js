function Logout() {
    alert("LogOut Button Pressed");
}


const contentContainer = document.getElementById("main-content");
const buttons = document.querySelectorAll(".dashboardsection-div-left-contentsection-button");




async function loadPage(page) {
    const response = await fetch(`Classes/${page}.html`);

    const html = await response.text();

    contentContainer.innerHTML = html;
    if (page === "Class12") {
        initClass12();
    }
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



// Class12
function initClass12() {
    const chips = document.querySelectorAll(".content-mainchipsdiv-chips");

    chips.forEach(chip => {
        chip.addEventListener("click", () => {
            chips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
        });
    });

    const pdfFiles = [
        {
            title: "FORCE & LAWS OF MOTION PDF.pdf",
            pages: "17 pages",
            size: "2 MB",
            file: "./welcomekit.pdf",
            downloadName: "Force_and_Laws.pdf"
        },
        {
            preview: "motion-preview.jpg",
            title: "NEWTON LAWS PDF.pdf",
            pages: "12 pages",
            size: "1.5 MB",
            file: "./newton.pdf",
            downloadName: "Newton_Laws.pdf"
        },
        {
            title: "NEWTON LAWS PDF.pdf",
            pages: "12 pages",
            size: "1.5 MB",
            file: "./newton.pdf",
            downloadName: "Newton_Laws.pdf"
        },
        {
            title: "NEWTON LAWS PDF.pdf",
            pages: "12 pages",
            size: "1.5 MB",
            file: "./newton.pdf",
            downloadName: "Newton_Laws.pdf"
        }
    ];


    const pdfList = document.getElementById("pdf-list");

    pdfFiles.forEach(pdf => {

        pdfList.innerHTML += `
    <div class="pdf-card">

        

        <div class="pdf-info">

            <div class="pdf-icon">PDF</div>

            <div class="pdf-text">
                <div class="pdf-title">${pdf.title}</div>
                <div class="pdf-meta">
                    ${pdf.pages} • PDF • ${pdf.size}
                </div>
            </div>

        </div>

        <div class="pdf-actions">

            <a href="${pdf.file}" target="_blank" class="action-btn">
                👁️ View
            </a>

            <a href="${pdf.file}" download="${pdf.downloadName}" class="action-btn">
                ⬇️ Download
            </a>

        </div>

    </div>
    `;

    });
}
