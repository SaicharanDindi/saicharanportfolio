/* =========================================
   5. PROJECT DETAILS & IMAGE GALLERY
========================================= */

const projects = {

    medipredict: {

        category: "MACHINE LEARNING",

        title: "MediPredict",

        description:
            "A machine learning-based disease prediction system.",

        overview:
            "MediPredict explores how machine learning can be used to analyse healthcare-related data and generate preliminary disease predictions. The project involves data preparation, processing and model evaluation.",

        problem:
            "Understanding health-related data and exploring how predictive models can assist in identifying possible disease patterns.",

        features: [
            "Healthcare dataset preprocessing",
            "Data cleaning and validation",
            "Machine learning-based prediction",
            "Model evaluation",
            "Prediction result presentation"
        ],

        technologies: [
            "Python",
            "Machine Learning",
            "Data Processing",
            "Pandas"
        ],

        images: [
            "assets/medipredict.png",
            "assets/medipredict-2.png",
            "assets/medipredict-3.png"
        ],

        github: "https://github.com/SaicharanDindi"

    },


    numberplate: {

        category: "COMPUTER VISION",

        title: "Real-Time Number Plate Detection",

        description:
            "A computer vision application for vehicle number plate detection and text recognition.",

        overview:
            "This project uses computer vision techniques to identify vehicle number plates. It combines object detection and optical character recognition to detect plates and extract their text.",

        problem:
            "Automatically identifying vehicle number plates from images or video frames instead of manually reading them.",

        features: [
            "Vehicle number plate detection",
            "Image processing using OpenCV",
            "Object detection using YOLO",
            "Text extraction using OCR",
            "Real-time detection workflow"
        ],

        technologies: [
            "Python",
            "OpenCV",
            "YOLO",
            "OCR"
        ],

        images: [
            "assets/numberplate.png",
            "assets/numberplate-2.png",
            "assets/numberplate-3.png"
        ],

        github: "https://github.com/SaicharanDindi"

    }

};


// Modal elements

const projectModal = document.getElementById("projectModal");

const modalClose = document.getElementById("modalClose");

const modalCategory = document.getElementById("modalCategory");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalOverview = document.getElementById("modalOverview");

const modalProblem = document.getElementById("modalProblem");

const modalFeatures = document.getElementById("modalFeatures");

const modalTech = document.getElementById("modalTech");

const modalGallery = document.getElementById("modalGallery");

const modalGithub = document.getElementById("modalGithub");


// Open project details

function openProject(projectId) {

    const project = projects[projectId];

    if (!project) return;

    // Basic information

    modalCategory.textContent = project.category;

    modalTitle.textContent = project.title;

    modalDescription.textContent = project.description;

    modalOverview.textContent = project.overview;

    modalProblem.textContent = project.problem;


    // Project images

    modalGallery.innerHTML = "";

    project.images.forEach((imagePath, index) => {

        const image = document.createElement("img");

        image.src = imagePath;

        image.alt = `${project.title} screenshot ${index + 1}`;

        image.loading = "lazy";

        image.onerror = function () {
            this.remove();
        };

        modalGallery.appendChild(image);

    });


    // Project features

    modalFeatures.innerHTML = "";

    project.features.forEach(feature => {

        const item = document.createElement("li");

        item.textContent = feature;

        modalFeatures.appendChild(item);

    });


    // Technologies

    modalTech.innerHTML = "";

    project.technologies.forEach(technology => {

        const tag = document.createElement("span");

        tag.textContent = technology;

        modalTech.appendChild(tag);

    });


    // GitHub link

    modalGithub.href = project.github;


    // Show modal

    projectModal.classList.add("show");

    projectModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    modalClose.focus();

}


// Close modal

function closeProject() {

    projectModal.classList.remove("show");

    projectModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

}


// Connect project buttons

document.querySelectorAll("[data-open-project]").forEach(button => {

    button.addEventListener("click", () => {

        openProject(button.dataset.openProject);

    });

});


// Close button

modalClose.addEventListener("click", closeProject);


// Close by clicking outside

projectModal.addEventListener("click", event => {

    if (event.target === projectModal) {

        closeProject();

    }

});


// Close with Escape key

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        projectModal.classList.contains("show")
    ) {

        closeProject();

    }

});