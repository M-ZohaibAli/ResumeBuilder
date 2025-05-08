document.addEventListener("DOMContentLoaded", function() {
    /* ----------------- Work Experience Section ----------------- */
    function createExperienceEntry() {
        const container = document.createElement("div");
        container.classList.add("work-entry");
        container.innerHTML = `
            <div class="mb-3">
                <label class="form-label">Company Name</label>
                <input type="text" class="form-control company-name" placeholder="e.g., Tech Solutions Inc.">
            </div>
            <div class="mb-3">
                <label class="form-label">Job Title</label>
                <input type="text" class="form-control job-title" placeholder="e.g., Frontend Developer">
            </div>
            <div class="mb-3">
                <label class="form-label">Location</label>
                <input type="text" class="form-control job-location" placeholder="e.g., San Francisco, CA">
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label class="form-label">Start Date</label>
                    <input type="date" class="form-control start-date">
                </div>
                <div class="col">
                    <label class="form-label">End Date</label>
                    <input type="date" class="form-control end-date" placeholder="Or leave empty if Present">
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">Description</label>
                <textarea class="form-control description" rows="4" placeholder="Enter bullet points or a short summary..."></textarea>
            </div>
            <button type="button" class="btn btn-danger btn-sm remove-experience">
                <i class="fas fa-trash"></i> Remove
            </button>
        `;
        return container;
    }

    const addExperienceBtn = document.getElementById("addExperienceBtn");
    const workExperienceContainer = document.getElementById("work-experience-container");
    if (addExperienceBtn && workExperienceContainer) {
        addExperienceBtn.addEventListener("click", () => {
            const newEntry = createExperienceEntry();
            workExperienceContainer.appendChild(newEntry);
        });

        workExperienceContainer.addEventListener("click", (e) => {
            if (e.target.closest(".remove-experience")) {
                e.target.closest(".work-entry").remove();
            }
        });
    }
});