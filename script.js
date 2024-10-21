// Mobile Menu Functionality
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const body = document.body;
const menuLinks = document.querySelectorAll('.nav-links a');

// Toggle mobile menu
function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open');
}

// Event listener for hamburger menu
hamburger.addEventListener('click', toggleMenu);

// Close menu when clicking links
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') &&
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)) {
        toggleMenu();
    }
});













// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector("header");
    if (window.scrollY > 50) {
        navbar.style.background = "#1a252f";
    } else {
        navbar.style.background = "#2c3e50";
    }
});

// Project items
const projects = [
    {
        title: "Weather Dashboard App",
        description: "A responsive weather dashboard that allows users to search for current weather conditions in various cities using a weather API",
        image: "./images/weather.png",
    },
    {
        title: "Home Budget App",
        description: "A simple budgeting app that allows users to create, update, and delete their expenses and income.",
        image: "./images/budget.png",
    },
    {
        title: "Task Management App (Todo App)",
        description: "A todo app that lets users manage their todo lists and stores each todo in browser's local storage",
        image: "./images/todo.png",
    },
    {
        title: "Appwrite Blog App",
        description: "A blog app that fetches blog posts from Appwrite's database and displays them on the page. Users can also add comments to the blog posts.",
        image: "./images/appwrite.png",
    },
    {
        title: "Course List App",
        description: "A course list app that allows users to add, update, and delete courses. Using Zustand Store and Zustand Middleware.",
        image: "./images/zustand.png",
    },
];

// Populate projects
const projectGrid = document.querySelector(".project-grid");

projects.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");

    projectItem.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    `;
    projectGrid.appendChild(projectItem);
});

// Skills
const skills = [
    {
        name: "HTML5",
        icon: "fab fa-html5"
    },
    {
        name: "CSS3",
        icon: "fab fa-css3-alt"
    },
    {
        name: "Bootstrap",
        icon: "fab fa-bootstrap"
    },
    {
        name: "JavaScript",
        icon: "fab fa-js"
    },
    {
        name: "Tailwind CSS",
        icon: "fab fa-tailwind"
    },
    {
        name: "React",
        icon: "fab fa-react"
    },
    {
        name: "Node.js",
        icon: "fab fa-node-js"
    },
    {
        name: "Git",
        icon: "fab fa-git-alt"
    },
    {
        name: "Python",
        icon: "fab fa-python"
    }
];

// Populate skills
const skillsGrid = document.querySelector(".skills-grid");
skills.forEach((skill) => {
    const skillItem = document.createElement("div");
    skillItem.classList.add("skill-item");
    skillItem.innerHTML = `
        <i class="${skill.icon}"></i>
        <p>${skill.name}</p>
    `;
    skillsGrid.appendChild(skillItem);
});

// Form submission
const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    console.log("Form submitted:");
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
    alert("Thank you for your message! I'll get back to you soon.");
    contactForm.reset();
});

// Add animation on scroll
window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".project-item, .skill-item");
    elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.8) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});
