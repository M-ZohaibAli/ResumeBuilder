document.addEventListener("DOMContentLoaded", function() {
    /* ----------------- Custom Skills Sections ----------------- */
    // Skills Summary
    function createSkillsSummaryEntry() {
        const container = document.createElement("div");
        container.classList.add("skill-entry");
        container.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">Skill Category</label>
                        <input type="text" class="form-control skill-category" placeholder="e.g., Front-End Development">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="form-label">Skill Level (0-100)</label>
                        <input type="number" class="form-control skill-level" min="0" max="100" placeholder="e.g., 85">
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-danger btn-sm remove-skill-summary">
                <i class="fas fa-trash"></i> Remove
            </button>
        `;
        return container;
    }

    const addSkillsSummaryBtn = document.getElementById("addSkillsSummaryBtn");
    const skillsSummaryEntries = document.getElementById("skills-summary-entries");
    if (addSkillsSummaryBtn && skillsSummaryEntries) {
        addSkillsSummaryBtn.addEventListener("click", () => {
            const newEntry = createSkillsSummaryEntry();
            skillsSummaryEntries.appendChild(newEntry);
        });

        skillsSummaryEntries.addEventListener("click", (e) => {
            if (e.target.closest(".remove-skill-summary")) {
                e.target.closest(".skill-entry").remove();
            }
        });
    }

    // Expertise
    function createExpertiseEntry() {
        const container = document.createElement("div");
        container.classList.add("skill-entry");
        container.innerHTML = `
            <div class="mb-3">
                <label class="form-label">Expertise Area</label>
                <input type="text" class="form-control expertise-area" placeholder="e.g., Full Stack Development">
            </div>
            <div class="mb-3">
                <label class="form-label">Description (optional)</label>
                <textarea class="form-control expertise-description" rows="2" placeholder="Brief description of your expertise"></textarea>
            </div>
            <button type="button" class="btn btn-danger btn-sm remove-expertise">
                <i class="fas fa-trash"></i> Remove
            </button>
        `;
        return container;
    }

    const addExpertiseBtn = document.getElementById("addExpertiseBtn");
    const expertiseEntries = document.getElementById("expertise-entries");
    if (addExpertiseBtn && expertiseEntries) {
        addExpertiseBtn.addEventListener("click", () => {
            const newEntry = createExpertiseEntry();
            expertiseEntries.appendChild(newEntry);
        });

        expertiseEntries.addEventListener("click", (e) => {
            if (e.target.closest(".remove-expertise")) {
                e.target.closest(".skill-entry").remove();
            }
        });
    }

    // Additional Skills
    function createAdditionalSkillsEntry() {
        const container = document.createElement("div");
        container.classList.add("skill-entry");
        container.innerHTML = `
            <div class="mb-3">
                <label class="form-label">Skill Name</label>
                <input type="text" class="form-control additional-skill" placeholder="e.g., Project Management">
            </div>
            <div class="mb-3">
                <label class="form-label">Skill Level (optional)</label>
                <select class="form-control skill-level-select">
                    <option value="">Select level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Expert">Expert</option>
                </select>
            </div>
            <button type="button" class="btn btn-danger btn-sm remove-additional-skill">
                <i class="fas fa-trash"></i> Remove
            </button>
        `;
        return container;
    }

    const addAdditionalSkillsBtn = document.getElementById("addAdditionalSkillsBtn");
    const additionalSkillsEntries = document.getElementById("additional-skills-entries");
    if (addAdditionalSkillsBtn && additionalSkillsEntries) {
        addAdditionalSkillsBtn.addEventListener("click", () => {
            const newEntry = createAdditionalSkillsEntry();
            additionalSkillsEntries.appendChild(newEntry);
        });

        additionalSkillsEntries.addEventListener("click", (e) => {
            if (e.target.closest(".remove-additional-skill")) {
                e.target.closest(".skill-entry").remove();
            }
        });
    }
});