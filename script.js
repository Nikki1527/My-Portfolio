document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const adminLink = document.getElementById('adminLink');
    const adminModal = document.getElementById('adminModal');
    const closeModal = document.querySelector('.modal .close');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const themeToggle = document.getElementById('themeToggle');
    
    // Initialize theme
    initTheme();
    loadData();

    // Theme toggle functionality
    themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
    });

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    adminLink.addEventListener('click', (e) => {
        e.preventDefault();
        adminModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        adminModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === adminModal) {
            adminModal.style.display = 'none';
        }
    });
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(`${tab}-tab`).classList.add('active');
        });
    });
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'a') {
            e.preventDefault();
            adminModal.style.display = 'block';
        }
    });

});

// Theme Toggle Functions
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeIcon();
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    const isDarkMode = document.body.classList.contains('dark-mode');
    if (isDarkMode) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggle.title = 'Switch to Light Mode';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.title = 'Switch to Dark Mode';
    }
}

function getBase64Image(file, callback) {
    if (!file) {
        callback(null);
        return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
        callback(reader.result);
    };
    reader.readAsDataURL(file);
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
function loadData() {
    // Default Data
    const defaultData = {
        heroData: {
            title: 'Nikhitha Reddy Kistapati',
            subtitle: 'Aspiring AIML Student | QA Automation Enthusiast',
            profileEmail: 'nikhithakistapati@gmail.com',
            profileLinkedIn: 'https://www.linkedin.com/in/nikhithareddy27',
            profilePhone: '+91 9704948846',
            profileGithub: 'https://github.com/Nikki1527',
            profileHackerrank: 'https://www.hackerrank.com/profile/nikki27_ai',
            profileImage: 'passportsize.jpeg' 
        },
        aboutData: {
            text: "I am an AIML student and QA automation enthusiast with hands-on experience in Playwright automation testing. I enjoy building automated test frameworks for web applications using JavaScript and TypeScript. My experience includes implementing Page Object Model, XPath, and CSS selectors to create reliable and maintainable test scripts. I am passionate about improving software quality and continuously learning new technologies in automation testing and software development.",
            projectsCompleted: '4+',
            aboutImage: 'passportsize.jpeg' 
        },
        educationData: [
            { degree: 'Bachelor Of Technology', institution: 'Mohan Babu University', year: '2022 - 2026', description: 'Pursuing 4th year in the Specialization of Artificial Intellegice and Machine Learning' },
            { degree: 'PreUniversity', institution: 'Sri Viveka Junior College', year: '2020 - 2022', description: 'Completed my Pre-University in the Stream of Science Background(MPC)' },
            { degree: 'High School', institution: 'Br Oxford English Medium School', year: '2014 - 2020', description: 'Completed my Schooling in SSC' }
        ],
        internshipsData: [
            {
                position: 'Project Intern',
                company: 'Infosys SpringBoard',
                duration: 'Dec 2024 - Feb 2025',
                location: 'Remote',
                description: 'At Infosys Springboard, I worked as a Project Intern and developed a personalized learning chatbot to guide students and job seekers through adaptive learning paths. Using NLP and conversational AI, the bot provided tailored course recommendations, answered queries, and improved learner engagement by 30%. I also integrated the chatbot into a web-based platform to ensure accessibility and seamless user experience.',
                technologies: ['Python', 'Rasa', 'HTML', 'CSS', 'JavaScript', 'Git', 'Flask'],
                logo:'sp.avif' 
            }
        ],
        certificationsData: [
            {name: 'Certified System Administrator', issuer: 'ServiceNow', date: '6/21/2025', credentialId: '27226314' },
            {name: 'Certified Application Developer', issuer: 'ServiceNow', date: '7/8/2025', credentialId: '27292835' }
        ],
        achievementsData: [
            {

                title: 'Co-Ordinator of ISTE',
                organization: 'Indian Society For Technical Education',
                year: '2022-2026',
                
            },
            {
                title: 'Finalist of SAP HackFest2k25',
                organization: 'SAP',
                year: '2025',
                icon: 'fas fa-star'
            }
        ],
        

        skillsData: [
            { name: 'Git', category: 'Tools & Technologies', level: 90, icon: 'fab fa-git-alt' },
            { name: 'GitHub', category: 'Tools & Technologies', level: 90, icon: 'fab fa-github' },
            { name: 'Flask', category: 'Tools & Technologies', level: 88, icon: 'fas fa-flask' },
            { name: 'FastAPI', category: 'Tools & Technologies', level: 85, icon: 'fas fa-bolt' },
            { name: 'React', category: 'Tools & Technologies', level: 88, icon: 'fab fa-react' },
            { name: 'Node.js', category: 'Tools & Technologies', level: 86, icon: 'fab fa-node-js' },
            { name: 'Express', category: 'Tools & Technologies', level: 85, icon: 'fas fa-server' },
            { name: 'Next.js', category: 'Tools & Technologies', level: 84, icon: 'fas fa-forward' },
            { name: 'n8n', category: 'Tools & Technologies', level: 82, icon: 'fas fa-project-diagram' },
            { name: 'VS Code', category: 'Tools & Technologies', level: 92, icon: 'fas fa-code' },
            { name: 'Docker', category: 'Tools & Technologies', level: 84, icon: 'fab fa-docker' },
            { name: 'Streamlit', category: 'Tools & Technologies', level: 83, icon: 'fas fa-stream' },
            { name: 'MongoDB', category: 'Databases', level: 86, icon: 'fas fa-database' },
            { name: 'MySQL', category: 'Databases', level: 87, icon: 'fas fa-database' },
            { name: 'PostgreSQL', category: 'Databases', level: 85, icon: 'fas fa-database' },
            { name: 'Python', category: 'Languages', level: 92, icon: 'fab fa-python' },
            { name: 'SQL', category: 'Languages', level: 89, icon: 'fas fa-code' },
            { name: 'JavaScript', category: 'Languages', level: 88, icon: 'fab fa-js' },
            { name: 'HTML', category: 'Languages', level: 90, icon: 'fab fa-html5' },
            { name: 'CSS', category: 'Languages', level: 89, icon: 'fab fa-css3-alt' },
            { name: 'TypeScript', category: 'Languages', level: 84, icon: 'fas fa-code' },
            { name: 'AI/ML', category: 'AI/ML', level: 86, icon: 'fas fa-brain' },
            { name: 'Generative AI', category: 'AI/ML', level: 87, icon: 'fas fa-robot' },
            { name: 'Prompt Engineering', category: 'AI/ML', level: 88, icon: 'fas fa-comments' },
            { name: 'Web Testing', category: 'Testing', level: 88, icon: 'fas fa-vial' },
            { name: 'POM', category: 'Testing', level: 86, icon: 'fas fa-sitemap' },
            { name: 'Playwright', category: 'Testing', level: 87, icon: 'fas fa-theater-masks' }
        ],
        projectsData: [
            {
                title: 'Orange HRM Web Testing',
                description: 'Automated end-to-end testing suite for the OrangeHRM application covering login, employee workflows, and key UI validations using scalable test architecture.',
                technologies: ['JavaScript', 'TypeScript', 'Playwright', 'POM'],
                url: 'https://github.com/Nikki1527/OrangeHrmweb-testing',
                icon: 'fas fa-vial',
                github: 'https://github.com/Nikki1527/OrangeHrmweb-testing',
                appLink: ''
            },
            {
                title: 'Portfolio',
                description: 'Responsive personal portfolio website showcasing my projects, skills, certifications, internships, and achievements with an editable admin panel.',
                technologies: ['HTML', 'CSS', 'JavaScript'],
                url: 'https://github.com/Nikki1527',
                icon: 'fas fa-code',
                github: 'https://github.com/Nikki1527',
                appLink: 'https://your-portfolio.com/'
            },
            {
                title: 'VegCart',
                description: 'An e-commerce platform for fresh vegetables and groceries with user-friendly shopping experience.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'Playwright', 'XPath'],
                url: 'https://github.com/Nikki1527/VegCart.git',
                icon: 'fas fa-shopping-cart',
                github: 'https://github.com/Nikki1527/VegCart.git',
                appLink: ''
            }
        ],
        contactData: {
            email: 'nikki27.ai@gmail.com',
            phone: '+91 9704948846',
            location: 'AndhraPradesh, India'
        }
    };
    
    // Check if data already exists in localStorage. If not, save the default data.
    // Force reload data to update image filenames
    saveData('heroData', defaultData.heroData);
    saveData('aboutData', defaultData.aboutData);
    saveData('educationData', defaultData.educationData);
    saveData('internshipsData', defaultData.internshipsData);
    saveData('certificationsData', defaultData.certificationsData);
    saveData('achievementsData', defaultData.achievementsData);
    saveData('skillsData', defaultData.skillsData);
    saveData('projectsData', defaultData.projectsData);
    saveData('contactData', defaultData.contactData);
    
    // Hero Section
    const heroData = JSON.parse(localStorage.getItem('heroData')) || {};
    if (heroData.title) document.getElementById('heroTitle').textContent = heroData.title;
    if (heroData.subtitle) document.getElementById('heroSubtitle').textContent = heroData.subtitle;
    if (heroData.profileEmail) document.getElementById('profileEmail').href = `mailto:${heroData.profileEmail}`;
    if (heroData.profileEmail) document.getElementById('profileEmail').textContent = heroData.profileEmail;
    if (heroData.profileLinkedIn) document.getElementById('profileLinkedIn').href = heroData.profileLinkedIn;
    if (heroData.profilePhone) document.getElementById('profilePhone').href = `tel:${heroData.profilePhone}`;
    if (heroData.profilePhone) document.getElementById('profilePhone').textContent = heroData.profilePhone;
    if (heroData.profileGithub) document.getElementById('profileGithub').href = heroData.profileGithub;
    if (heroData.profileHackerrank) document.getElementById('profileHackerrank').href = heroData.profileHackerrank;
    if (heroData.profileImage) {
        document.getElementById('profileImagePreview').src = heroData.profileImage;
        document.getElementById('profileImagePreview').style.display = 'block';
    }

    // About Section
    const aboutData = JSON.parse(localStorage.getItem('aboutData')) || {};
    if (aboutData.text) document.getElementById('aboutText').textContent = aboutData.text;
    if (aboutData.projectsCompleted) document.getElementById('projectsCompleted').textContent = `${aboutData.projectsCompleted}`;
    if (aboutData.aboutImage) {
        document.getElementById('aboutImage').src = aboutData.aboutImage;
        document.getElementById('aboutImage').style.display = 'block';
        document.getElementById('aboutIcon').style.display = 'none';
    }

    // Education
    const educationData = JSON.parse(localStorage.getItem('educationData')) || [];
    renderEducation(educationData);

    // Internships
    const internshipsData = JSON.parse(localStorage.getItem('internshipsData')) || [];
    renderInternships(internshipsData);

    // Certifications
    const certificationsData = JSON.parse(localStorage.getItem('certificationsData')) || [];
    renderCertifications(certificationsData);

    // Achievements
    const achievementsData = JSON.parse(localStorage.getItem('achievementsData')) || [];
    renderAchievements(achievementsData);

    // Skills
    const skillsData = JSON.parse(localStorage.getItem('skillsData')) || [];
    renderSkills(skillsData);

    // Projects
    const projectsData = JSON.parse(localStorage.getItem('projectsData')) || [];
    renderProjects(projectsData);

    // Contact
    const contactData = JSON.parse(localStorage.getItem('contactData')) || {};
    if (contactData.email) document.getElementById('contactEmail').textContent = contactData.email;
    if (contactData.phone) document.getElementById('contactPhone').textContent = contactData.phone;
    if (contactData.location) document.getElementById('contactLocation').textContent = contactData.location;
    
    // Update footer social links
    const socialLinks = document.querySelectorAll('.social-links a');
    if (socialLinks.length > 0 && heroData.profileGithub) socialLinks[0].href = heroData.profileGithub;
    if (socialLinks.length > 1 && heroData.profileLinkedIn) socialLinks[1].href = heroData.profileLinkedIn;

    // Prefill admin panel with current data
    document.getElementById('adminHeroTitle').value = heroData.title || '';
    document.getElementById('adminHeroSubtitle').value = heroData.subtitle || '';
    document.getElementById('adminProfileEmail').value = heroData.profileEmail || '';
    document.getElementById('adminProfileLinkedIn').value = heroData.profileLinkedIn || '';
    document.getElementById('adminProfilePhone').value = heroData.profilePhone || '';
    document.getElementById('adminProfileGithub').value = heroData.profileGithub || '';
    document.getElementById('adminProfileHackerrank').value = heroData.profileHackerrank || '';
    document.getElementById('adminAboutText').value = aboutData.text || '';
    document.getElementById('adminProjectsCompleted').value = aboutData.projectsCompleted || '';
    document.getElementById('adminContactEmail').value = contactData.email || '';
    document.getElementById('adminContactPhone').value = contactData.phone || '';
    document.getElementById('adminContactLocation').value = contactData.location || '';
}
function updateHero() {
    const title = document.getElementById('adminHeroTitle').value;
    const subtitle = document.getElementById('adminHeroSubtitle').value;
    const profileEmail = document.getElementById('adminProfileEmail').value;
    const profileLinkedIn = document.getElementById('adminProfileLinkedIn').value;
    const profilePhone = document.getElementById('adminProfilePhone').value;
    const profileGithub = document.getElementById('adminProfileGithub').value;
    const profileHackerrank = document.getElementById('adminProfileHackerrank').value;
    const profileImageFile = document.getElementById('adminProfileImage').files[0];

    getBase64Image(profileImageFile, (profileImage) => {
        const heroData = { title, subtitle, profileEmail, profileLinkedIn, profilePhone, profileGithub, profileHackerrank, profileImage };
        saveData('heroData', heroData);
        loadData();
        alert('Hero section updated successfully!');
    });
}
function updateAbout() {
    const aboutText = document.getElementById('adminAboutText').value;
    const projectsCompleted = document.getElementById('adminProjectsCompleted').value;
    const aboutImageFile = document.getElementById('adminAboutImage').files[0];

    getBase64Image(aboutImageFile, (aboutImage) => {
        const aboutData = { text: aboutText, projectsCompleted, aboutImage };
        saveData('aboutData', aboutData);
        loadData();
        alert('About section updated successfully!');
    });
}
function updateContact() {
    const email = document.getElementById('adminContactEmail').value;
    const phone = document.getElementById('adminContactPhone').value;
    const location = document.getElementById('adminContactLocation').value;

    const contactData = { email, phone, location };
    saveData('contactData', contactData);
    loadData();
    alert('Contact information updated successfully!');
}
function addSkill() {
    const name = document.getElementById('skillName').value;
    const level = document.getElementById('skillLevel').value;
    const icon = document.getElementById('skillIcon').value;

    if (!name || !level) {
        alert('Please fill in all skill fields.');
        return;
    }

    const skillsData = JSON.parse(localStorage.getItem('skillsData')) || [];
    skillsData.push({ name, level, icon });
    saveData('skillsData', skillsData);
    renderSkills(skillsData);
    document.getElementById('skillName').value = '';
    document.getElementById('skillLevel').value = '';
    document.getElementById('skillIcon').value = '';
}

function addProject() {
    const title = document.getElementById('projectTitle').value;
    const description = document.getElementById('projectDescription').value;
    const technologies = document.getElementById('projectTechnologies').value.split(',').map(tech => tech.trim());
    const url = document.getElementById('projectUrl').value;
    const icon = document.getElementById('projectIcon').value;
    const github = document.getElementById('projectGithub').value;
    const appLink = document.getElementById('projectAppLink').value;
    const imageFile = document.getElementById('projectImage').files[0];

    if (!title || !description || !technologies) {
        alert('Please fill in all project fields.');
        return;
    }

    getBase64Image(imageFile, (image) => {
        const projectsData = JSON.parse(localStorage.getItem('projectsData')) || [];
        projectsData.push({ title, description, technologies, url, icon, image, github, appLink });
        localStorage.setItem('projectsData', JSON.stringify(projectsData));
        renderProjects(projectsData);
        document.getElementById('projectTitle').value = '';
        document.getElementById('projectDescription').value = '';
        document.getElementById('projectTechnologies').value = '';
        document.getElementById('projectUrl').value = '';
        document.getElementById('projectIcon').value = '';
        document.getElementById('projectImage').value = '';
        document.getElementById('projectGithub').value = '';
        document.getElementById('projectAppLink').value = '';
    });
}

function addEducation() {
    const degree = document.getElementById('educationDegree').value;
    const institution = document.getElementById('educationInstitution').value;
    const year = document.getElementById('educationYear').value;
    const description = document.getElementById('educationDescription').value;

    if (!degree || !institution || !year) {
        alert('Please fill in all education fields.');
        return;
    }

    const educationData = JSON.parse(localStorage.getItem('educationData')) || [];
    educationData.push({ degree, institution, year, description });
    saveData('educationData', educationData);
    renderEducation(educationData);
    document.getElementById('educationDegree').value = '';
    document.getElementById('educationInstitution').value = '';
    document.getElementById('educationYear').value = '';
    document.getElementById('educationDescription').value = '';
}

function addInternship() {
    const position = document.getElementById('internshipPosition').value;
    const company = document.getElementById('internshipCompany').value;
    const duration = document.getElementById('internshipDuration').value;
    const location = document.getElementById('internshipLocation').value;
    const description = document.getElementById('internshipDescription').value;
    const technologies = document.getElementById('internshipTechnologies').value.split(',').map(tech => tech.trim());
    const logoFile = document.getElementById('internshipLogo').files[0];

    if (!position || !company || !duration) {
        alert('Please fill in all internship fields.');
        return;
    }

    getBase64Image(logoFile, (logo) => {
        const internshipsData = JSON.parse(localStorage.getItem('internshipsData')) || [];
        internshipsData.push({ position, company, duration, location, description, technologies, logo });
        saveData('internshipsData', internshipsData);
        renderInternships(internshipsData);
        document.getElementById('internshipPosition').value = '';
        document.getElementById('internshipCompany').value = '';
        document.getElementById('internshipDuration').value = '';
        document.getElementById('internshipLocation').value = '';
        document.getElementById('internshipDescription').value = '';
        document.getElementById('internshipTechnologies').value = '';
        document.getElementById('internshipLogo').value = '';
    });
}

function addCertification() {
    const name = document.getElementById('certificationName').value;
    const issuer = document.getElementById('certificationIssuer').value;
    const date = document.getElementById('certificationDate').value;
    const expiry = document.getElementById('certificationExpiry').value;
    const credentialId = document.getElementById('certificationCredentialId').value;
    const url = document.getElementById('certificationUrl').value;
    const pdfFile = document.getElementById('certificationPdf').files[0];

    if (!name || !issuer || !date) {
        alert('Please fill in required certification fields.');
        return;
    }

    getBase64Image(pdfFile, (pdf) => {
        const certificationsData = JSON.parse(localStorage.getItem('certificationsData')) || [];
        certificationsData.push({ name, issuer, date, expiry, credentialId, url, pdf });
        saveData('certificationsData', certificationsData);
        renderCertifications(certificationsData);
        document.getElementById('certificationName').value = '';
        document.getElementById('certificationIssuer').value = '';
        document.getElementById('certificationDate').value = '';
        document.getElementById('certificationExpiry').value = '';
        document.getElementById('certificationCredentialId').value = '';
        document.getElementById('certificationUrl').value = '';
        document.getElementById('certificationPdf').value = '';
    });
}

function addAchievement() {
    const title = document.getElementById('achievementTitle').value;
    const organization = document.getElementById('achievementOrganization').value;
    const year = document.getElementById('achievementYear').value;
    const description = document.getElementById('achievementDescription').value;
    const icon = document.getElementById('achievementIcon').value;

    if (!title || !organization || !year) {
        alert('Please fill in required achievement fields.');
        return;
    }

    const achievementsData = JSON.parse(localStorage.getItem('achievementsData')) || [];
    achievementsData.push({ title, organization, year, description, icon });
    saveData('achievementsData', achievementsData);
    renderAchievements(achievementsData);
    document.getElementById('achievementTitle').value = '';
    document.getElementById('achievementOrganization').value = '';
    document.getElementById('achievementYear').value = '';
    document.getElementById('achievementDescription').value = '';
    document.getElementById('achievementIcon').value = '';
}

// Render Functions
function renderSkills(skills) {
    const skillsGrid = document.getElementById('skillsGrid');
    const adminSkillsList = document.getElementById('adminSkillsList');
    skillsGrid.innerHTML = '';
    adminSkillsList.innerHTML = '';

    const categoryIcons = {
        'Languages': 'fas fa-code',
        'AI/ML': 'fas fa-microchip',
        'Testing': 'fas fa-vial',
        'Databases': 'fas fa-database',
        'Tools & Technologies': 'fas fa-tools'
    };

    const categoryOrder = ['Languages', 'AI/ML', 'Testing', 'Databases', 'Tools & Technologies'];

    const groupedSkills = {};
    skills.forEach((skill, index) => {
        const category = skill.category || 'Other';
        if (!groupedSkills[category]) {
            groupedSkills[category] = [];
        }
        groupedSkills[category].push({ ...skill, index });
    });

    const orderedCategories = [
        ...categoryOrder.filter((category) => groupedSkills[category]),
        ...Object.keys(groupedSkills).filter((category) => !categoryOrder.includes(category))
    ];

    orderedCategories.forEach((category) => {
        let categoryTags = '';
        let adminItems = '';

        groupedSkills[category].forEach((skill) => {
            const iconClass = skill.icon || 'fas fa-tools';
            const levelText = skill.level ? `${skill.level}%` : 'N/A';

            categoryTags += `
                <span class="skill-tag">${skill.name}</span>
            `;

            adminItems += `
                <div class="admin-item">
                    <div class="admin-item-content">
                        <h4>${skill.name} (${levelText})</h4>
                        <p>${category} • ${iconClass}</p>
                    </div>
                    <div class="admin-item-actions">
                        <button class="delete-btn" onclick="deleteItem('skillsData', ${skill.index})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `;
        });

        skillsGrid.innerHTML += `
            <div class="skill-category-card">
                <div class="skill-card-header">
                    <i class="${categoryIcons[category] || 'fas fa-layer-group'} skill-group-icon"></i>
                    <h3 class="skill-group-heading">${category}</h3>
                </div>
                <div class="skill-tags">
                    ${categoryTags}
                </div>
            </div>
        `;

        adminSkillsList.innerHTML += `
            <h4 class="admin-skill-heading">${category}</h4>
            ${adminItems}
        `;
    });
}

function renderProjects(projects) {
    const projectsGrid = document.getElementById('projectsGrid');
    const adminProjectsList = document.getElementById('adminProjectsList');
    projectsGrid.innerHTML = '';
    adminProjectsList.innerHTML = '';

    projects.forEach((project, index) => {
        
        // Front-end display
        projectsGrid.innerHTML += `
            <div class="project-card">
                <div class="project-card-header" style="background: linear-gradient(135deg, #5b21b6 0%, #1e40af 100%);">
                    ${project.icon ? `<i class="${project.icon}"></i>` : ''}
                </div>
                <div class="project-card-body">
                    <h3 class="project-title">${project.title}</h3>
                    ${project.image ? `<div class="project-snippet-image"><img src="${project.image}" alt="${project.title}" /></div>` : ''}
                    <p class="project-description">${project.description}</p>
                    <div class="project-technologies">
                        ${project.technologies ? project.technologies.map(tech => `<span class="technology-tag">${tech}</span>`).join('') : ''}
                    </div>
                    <div class="project-links">
                        ${project.appLink ? `<a href="${project.appLink}" target="_blank" rel="noopener" class="project-link-btn"><i class="fas fa-external-link-alt"></i> Live App</a>` : ''}
                        ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener" class="project-link-btn github"><i class="fab fa-github"></i> GitHub</a>` : ''}
                    </div>
                </div>
            </div>
        `;

        // Admin list
        adminProjectsList.innerHTML += `
            <div class="admin-item">
                <div class="admin-item-content">
                    <h4>${project.title}</h4>
                    <p>${project.description}</p>
                </div>
                <div class="admin-item-actions">
                    <button class="delete-btn" onclick="deleteItem('projectsData', ${index})"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
    });
}

function renderEducation(education) {
    const educationGrid = document.getElementById('educationGrid');
    const adminEducationList = document.getElementById('adminEducationList');
    educationGrid.innerHTML = '';
    adminEducationList.innerHTML = '';

    education.forEach((edu, index) => {
        // Front-end display
        educationGrid.innerHTML += `
            <div class="education-card">
                <div class="education-icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <h3 class="education-degree">${edu.degree}</h3>
                <p class="education-institution">${edu.institution}</p>
                <span class="education-year">${edu.year}</span>
                <p class="education-description">${edu.description}</p>
            </div>
        `;

        // Admin list
        adminEducationList.innerHTML += `
            <div class="admin-item">
                <div class="admin-item-content">
                    <h4>${edu.degree}</h4>
                    <p>${edu.institution}, ${edu.year}</p>
                </div>
                <div class="admin-item-actions">
                    <button class="delete-btn" onclick="deleteItem('educationData', ${index})"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
    });
}

function renderInternships(internships) {
    const internshipsGrid = document.getElementById('internshipsGrid');
    const adminInternshipsList = document.getElementById('adminInternshipsList');
    internshipsGrid.innerHTML = '';
    adminInternshipsList.innerHTML = '';

    internships.forEach((intern, index) => {
        // Front-end display
        internshipsGrid.innerHTML += `
            <div class="internship-card">
                <div class="internship-icon">
                    <i class="fas fa-briefcase"></i>
                </div>
                ${intern.logo ? `<div class="internship-logo"><img src="${intern.logo}" alt="${intern.company} logo"></div>` : ''}
                <h3 class="internship-position">${intern.position}</h3>
                <p class="internship-company">${intern.company}</p>
                <span class="internship-duration">${intern.duration}</span>
                ${intern.location ? `<p class="internship-location">📍 ${intern.location}</p>` : ''}
                <p class="internship-description">${intern.description}</p>
                ${intern.technologies && intern.technologies.length > 0 ? `
                    <div class="internship-technologies">
                        ${intern.technologies.map(tech => `<span class="technology-tag-internship">${tech}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        `;

        // Admin list
        adminInternshipsList.innerHTML += `
            <div class="admin-item">
                <div class="admin-item-content">
                    <h4>${intern.position} at ${intern.company}</h4>
                    <p>${intern.duration}</p>
                </div>
                <div class="admin-item-actions">
                    <button class="delete-btn" onclick="deleteItem('internshipsData', ${index})"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
    });
}

function renderCertifications(certifications) {
    const certificationsGrid = document.getElementById('certificationsGrid');
    const adminCertificationsList = document.getElementById('adminCertificationsList');
    certificationsGrid.innerHTML = '';
    adminCertificationsList.innerHTML = '';

    certifications.forEach((cert, index) => {
        
        // Front-end display
        certificationsGrid.innerHTML += `
            <div class="certification-card">
                <div class="certification-icon">
                    <i class="fas fa-certificate"></i>
                </div>
                <h3 class="certification-name">${cert.name}</h3>
                <p class="certification-issuer">${cert.issuer}</p>
              
                <div class="certification-details">
                    <span class="certification-date">${cert.date}</span>
                    ${cert.expiry ? `<span class="certification-expiry">Expires: ${cert.expiry}</span>` : ''}
                </div>
                ${cert.credentialId ? `<div class="certification-credential">ID: ${cert.credentialId}</div>` : ''}
                ${cert.url ? `<a href="${cert.url}" target="_blank" rel="noopener" class="certification-verify">Verify Credential</a>` : ''}
            </div>
        `;

        // Admin list
        adminCertificationsList.innerHTML += `
            <div class="admin-item">
                <div class="admin-item-content">
                    <h4>${cert.name}</h4>
                    <p>Issuer: ${cert.issuer}</p>
                </div>
                <div class="admin-item-actions">
                    <button class="delete-btn" onclick="deleteItem('certificationsData', ${index})"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
    });
}

function renderAchievements(achievements) {
    const achievementsGrid = document.getElementById('achievementsGrid');
    const adminAchievementsList = document.getElementById('adminAchievementsList');
    achievementsGrid.innerHTML = '';
    adminAchievementsList.innerHTML = '';

    achievements.forEach((achieve, index) => {
       
        
        // Front-end display
        achievementsGrid.innerHTML += `
            <div class="achievement-card">
                <div class="achievement-icon">
                    <i class="${achieve.icon || 'fas fa-trophy'}"></i>
                </div>
                <h3 class="achievement-title">${achieve.title}</h3>
                <p class="achievement-organization">${achieve.organization}</p>
                <span class="achievement-year">${achieve.year}</span>
                <p class="achievement-description">${achieve.description}</p>
            </div>
        `;

        // Admin list
        adminAchievementsList.innerHTML += `
            <div class="admin-item">
                <div class="admin-item-content">
                    <h4>${achieve.title}</h4>
                    <p>${achieve.organization}, ${achieve.year}</p>
                </div>
                <div class="admin-item-actions">
                    <button class="delete-btn" onclick="deleteItem('achievementsData', ${index})"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
    });
}

// Delete function
function deleteItem(key, index) {
    const data = JSON.parse(localStorage.getItem(key)) || [];
    data.splice(index, 1);
    saveData(key, data);
    loadData(); // Reload all data to ensure consistency
}