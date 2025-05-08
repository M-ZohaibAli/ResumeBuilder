document.addEventListener("DOMContentLoaded", function() {
    const generatePDFButton = document.getElementById("generatePDF");
    if (generatePDFButton) {
        generatePDFButton.addEventListener("click", async () => {
            // Show generating animation
            generatePDFButton.classList.add('generating-pdf');
            generatePDFButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';

            // Basic Info & Summary
            const name = document.getElementById("fullName").value || "MUHAMMAD ZOHAIB ALI";
            const title = document.getElementById("title").value || "FULL STACK DEVELOPER";
            const email = document.getElementById("email").value || "hello@reallygreatsite.com";
            const phone = document.getElementById("phone").value || "+123-456-7890";
            const location = document.getElementById("location").value || "Pakistan, Attock, Kamra";
            const linkedin = document.getElementById("linkedin").value || "";
            const github = document.getElementById("github").value || "";
            const portfolio = document.getElementById("portfolio").value || "";
            const summary = document.getElementById("summaryText").value || 
                "Full Stack Web Developer skilled in PHP, JavaScript, React, Node.js, and database management. Focused on building responsive and efficient web solutions.";

            // Tech Stack / Skills
            const languages = document.getElementById("languages").value || "JavaScript, PHP";
            const frameworks = document.getElementById("frameworks").value || "React, Node.js, Express";
            const databases = document.getElementById("databases").value || "MongoDB, MySQL";
            const tools = document.getElementById("tools").value || "Bootstrap, Tailwind";

            // Populate Basic Info Preview
            document.getElementById("previewName").textContent = name.toUpperCase();
            document.getElementById("previewTitle").textContent = title.toUpperCase();
            
            // Contact Info
            let contactHTML = `<span><i class="fas fa-envelope"></i> ${email}</span>`;
            if (phone) contactHTML += ` | <span><i class="fas fa-phone"></i> ${phone}</span>`;
            if (location) contactHTML += ` | <span><i class="fas fa-map-marker-alt"></i> ${location}</span>`;
            if (linkedin) contactHTML += ` | <span><i class="fab fa-linkedin"></i> ${linkedin}</span>`;
            if (github) contactHTML += ` | <span><i class="fab fa-github"></i> ${github}</span>`;
            if (portfolio) contactHTML += ` | <span><i class="fas fa-globe"></i> ${portfolio}</span>`;
            
            document.getElementById("previewContact").innerHTML = contactHTML;
            
            // Summary
            document.getElementById("previewSummary").textContent = summary;

            // Work Experience Preview
            const previewExperienceContainer = document.getElementById("previewExperienceContainer");
            previewExperienceContainer.innerHTML = "";
            
            // Add default experience if none exists
            if (document.querySelectorAll(".work-entry").length === 0) {
                const defaultExperience = `
                    <div class="preview-entry">
                        <div class="preview-entry-header">
                            <div>
                                <span class="preview-entry-title">FULL STACK DEVELOPER</span> - 
                                <span class="preview-entry-company">CODEOXIDE</span>
                            </div>
                            <div class="preview-entry-date">2024 - 2025</div>
                        </div>
                        <div class="preview-entry-description">
                            <p>Built full-stack apps with React, Node.js, and Express.</p>
                            <p>Developed APIs and managed MongoDB/MySQL.</p>
                            <p>Created responsive UIs with HTML, CSS, and JavaScript.</p>
                        </div>
                    </div>
                    <div class="preview-entry">
                        <div class="preview-entry-header">
                            <div>
                                <span class="preview-entry-title">FULL STACK DEVELOPER</span> - 
                                <span class="preview-entry-company">GAMEOXIDE</span>
                            </div>
                            <div class="preview-entry-date">2025 - present</div>
                        </div>
                        <div class="preview-entry-description">
                            <p>Built gaming web features with PHP, React and Node.js.</p>
                            <p>Integrated APIs and optimized with MongoDB.</p>
                            <p>Delivered responsive, high-performance UI</p>
                            <p>Visit: https://gameoxider.ftgd.</p>
                        </div>
                    </div>
                `;
                previewExperienceContainer.innerHTML = defaultExperience;
            } else {
                document.querySelectorAll(".work-entry").forEach(entry => {
                    const companyName = entry.querySelector(".company-name").value || "Company Name";
                    const jobTitle = entry.querySelector(".job-title").value || "Job Title";
                    const jobLocation = entry.querySelector(".job-location").value;
                    const startDate = entry.querySelector(".start-date").value;
                    const endDate = entry.querySelector(".end-date").value;
                    const description = entry.querySelector(".description").value;
                    
                    // Format dates
                    const formattedStart = startDate ? new Date(startDate).toLocaleDateString('en-US', {year: 'numeric', month: 'short'}) : '';
                    const formattedEnd = endDate ? new Date(endDate).toLocaleDateString('en-US', {year: 'numeric', month: 'short'}) : 'Present';
                    const dateRange = formattedStart ? `${formattedStart} - ${formattedEnd}` : '';
                    
                    const expBlock = document.createElement("div");
                    expBlock.classList.add("preview-entry");
                    expBlock.innerHTML = `
                        <div class="preview-entry-header">
                            <div>
                                <span class="preview-entry-title">${jobTitle.toUpperCase()}</span> - 
                                <span class="preview-entry-company">${companyName.toUpperCase()}</span>
                            </div>
                            ${dateRange ? `<div class="preview-entry-date">${dateRange}</div>` : ''}
                        </div>
                        <div class="preview-entry-description">
                            ${description.split('\n').filter(line => line.trim()).map(line => `<p>${line}</p>`).join('')}
                        </div>
                        ${jobLocation ? `<div class="text-muted"><small><i class="fas fa-map-marker-alt"></i> ${jobLocation}</small></div>` : ''}
                    `;
                    previewExperienceContainer.appendChild(expBlock);
                });
            }

            // Education Preview
            const previewEducationContainer = document.getElementById("previewEducationContainer");
            previewEducationContainer.innerHTML = "";
            
            // Add default education if none exists
            if (document.querySelectorAll(".education-entry").length === 0) {
                const defaultEducation = `
                    <div class="preview-entry">
                        <div class="preview-entry-header">
                            <div>
                                <span class="preview-entry-title">COMPLETED FULL STACK WEB DEVELOPMENT CERTIFICATION</span> - 
                                <span class="preview-entry-company">FREECODECAMP</span>
                            </div>
                            <div class="preview-entry-date">2024 - 2025</div>
                        </div>
                    </div>
                    <div class="preview-entry">
                        <div class="preview-entry-header">
                            <div>
                                <span class="preview-entry-title">INTERMEDIATE IN COMPUTER SCIENCE</span> - 
                                <span class="preview-entry-company">FIC KAMRA</span>
                            </div>
                            <div class="preview-entry-date">2025 - 2027</div>
                        </div>
                    </div>
                `;
                previewEducationContainer.innerHTML = defaultEducation;
            } else {
                document.querySelectorAll(".education-entry").forEach(edu => {
                    const degree = edu.querySelector(".education-degree").value || "Degree";
                    const institution = edu.querySelector(".education-institution").value || "Institution";
                    const startDate = edu.querySelector(".education-start").value;
                    const endDate = edu.querySelector(".education-end").value;
                    const description = edu.querySelector(".education-description").value;
                    
                    // Format dates
                    const formattedStart = startDate ? new Date(startDate).toLocaleDateString('en-US', {year: 'numeric', month: 'short'}) : '';
                    const formattedEnd = endDate ? new Date(endDate).toLocaleDateString('en-US', {year: 'numeric', month: 'short'}) : 'Present';
                    const duration = formattedStart ? `${formattedStart} - ${formattedEnd}` : '';
                    
                    const eduBlock = document.createElement("div");
                    eduBlock.classList.add("preview-entry");
                    eduBlock.innerHTML = `
                        <div class="preview-entry-header">
                            <div>
                                <span class="preview-entry-title">${degree.toUpperCase()}</span> - 
                                <span class="preview-entry-company">${institution.toUpperCase()}</span>
                            </div>
                            ${duration ? `<div class="preview-entry-date">${duration}</div>` : ''}
                        </div>
                        ${description ? `<div class="preview-entry-description">${description.split('\n').filter(line => line.trim()).map(line => `<p>${line}</p>`).join('')}</div>` : ''}
                    `;
                    previewEducationContainer.appendChild(eduBlock);
                });
            }

            // Skills Preview
            const previewSkillsContainer = document.getElementById("previewSkillsContainer");
            previewSkillsContainer.innerHTML = "";
            
            // Create skills section with progress bars
            let skillsHTML = '<div class="skills-container">';
            
            // Programming Languages
            if (languages) {
                skillsHTML += `
                    <div class="skill-category">
                        <h4>PROGRAMMING LANGUAGES</h4>
                        <div class="skill-tags">
                            ${languages.split(',').map(lang => `<span class="skill-tag">${lang.trim()}</span>`).join('')}
                        </div>
                    </div>
                `;
            }
            
            // Frameworks
            if (frameworks) {
                skillsHTML += `
                    <div class="skill-category">
                        <h4>FRAMEWORKS & LIBRARIES</h4>
                        <div class="skill-tags">
                            ${frameworks.split(',').map(fw => `<span class="skill-tag">${fw.trim()}</span>`).join('')}
                        </div>
                    </div>
                `;
            }
            
            skillsHTML += '</div>'; // Close first skills-container
            
            // Databases and Tools
            if (databases || tools) {
                skillsHTML += '<div class="skills-container mt-4">';
                
                if (databases) {
                    skillsHTML += `
                        <div class="skill-category">
                            <h4>DATABASES</h4>
                            <div class="skill-tags">
                                ${databases.split(',').map(db => `<span class="skill-tag">${db.trim()}</span>`).join('')}
                            </div>
                        </div>
                    `;
                }
                
                if (tools) {
                    skillsHTML += `
                        <div class="skill-category">
                            <h4>TOOLS & PLATFORMS</h4>
                            <div class="skill-tags">
                                ${tools.split(',').map(tool => `<span class="skill-tag">${tool.trim()}</span>`).join('')}
                            </div>
                        </div>
                    `;
                }
                
                skillsHTML += '</div>'; // Close second skills-container
            }
            
            // Skills Summary Section
            const skillsSummaryEntries = document.querySelectorAll("#skills-summary-entries .skill-entry");
            if (skillsSummaryEntries.length > 0) {
                skillsHTML += '<div class="skills-container mt-4"><div class="skill-category"><h4>SKILLS SUMMARY</h4>';
                
                skillsSummaryEntries.forEach(entry => {
                    const category = entry.querySelector(".skill-category").value || "Skill Category";
                    const level = entry.querySelector(".skill-level").value || "0";
                    
                    skillsHTML += `
                        <div class="progress-container">
                            <div class="progress-label">
                                <span>${category.toUpperCase()}</span>
                                <span>${level}%</span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: ${level}%"></div>
                            </div>
                        </div>
                    `;
                });
                
                skillsHTML += '</div></div>';
            }
            
            // Expertise Section
            const expertiseEntries = document.querySelectorAll("#expertise-entries .skill-entry");
            if (expertiseEntries.length > 0) {
                skillsHTML += '<div class="skills-container mt-4"><div class="skill-category"><h4>EXPERTISE</h4><div class="skill-tags">';
                
                expertiseEntries.forEach(entry => {
                    const expertise = entry.querySelector(".expertise-area").value || "Expertise Area";
                    skillsHTML += `<span class="skill-tag">${expertise}</span>`;
                });
                
                skillsHTML += '</div></div></div>';
            }
            
            // Additional Skills Section
            const additionalSkillsEntries = document.querySelectorAll("#additional-skills-entries .skill-entry");
            if (additionalSkillsEntries.length > 0) {
                skillsHTML += '<div class="skills-container mt-4"><div class="skill-category"><h4>ADDITIONAL SKILLS</h4><div class="skill-tags">';
                
                additionalSkillsEntries.forEach(entry => {
                    const skill = entry.querySelector(".additional-skill").value || "Skill";
                    const level = entry.querySelector(".skill-level-select").value;
                    
                    if (level) {
                        skillsHTML += `<span class="skill-tag">${skill} (${level})</span>`;
                    } else {
                        skillsHTML += `<span class="skill-tag">${skill}</span>`;
                    }
                });
                
                skillsHTML += '</div></div></div>';
            }
            
            previewSkillsContainer.innerHTML = skillsHTML;

            // Show Preview Section
            document.getElementById("resumePreview").style.display = "block";

            // Generate PDF using html2pdf.js with better settings
            const options = {
                margin: 10,
                filename: `${name.replace(/\s+/g, '_')}_Resume.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { 
                    scale: 2,
                    logging: true,
                    useCORS: true,
                    letterRendering: true,
                    allowTaint: true
                },
                jsPDF: { 
                    unit: 'mm', 
                    format: 'a4', 
                    orientation: 'portrait',
                    hotfixes: ["px_scaling"] 
                },
                pagebreak: { 
                    mode: ['avoid-all', 'css', 'legacy'] 
                }
            };
            
            // Get the resume preview element
            const element = document.getElementById("resumePreview");
            
            try {
                // Generate the PDF
                await html2pdf().set(options).from(element).save();
                
                // Reset button state
                generatePDFButton.classList.remove('generating-pdf');
                generatePDFButton.innerHTML = '<i class="fas fa-file-pdf"></i> Generate PDF Resume';
            } catch (error) {
                console.error("PDF generation error:", error);
                alert("There was an error generating the PDF. Please try again.");
                
                // Reset button state even if there's an error
                generatePDFButton.classList.remove('generating-pdf');
                generatePDFButton.innerHTML = '<i class="fas fa-file-pdf"></i> Generate PDF Resume';
            }
        });
    }
});