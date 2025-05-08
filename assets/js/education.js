document.addEventListener("DOMContentLoaded", function() {
    /* ----------------- Education Section ----------------- */
    function createEducationEntry() {
        const container = document.createElement("div");
        container.classList.add("education-entry");
        container.innerHTML = `
            <div class="mb-3">
                <label class="form-label">Degree</label>
                <input type="text" class="form-control education-degree" placeholder="e.g., B.Sc. in Computer Science">
            </div>
            <div class="mb-3">
                <label class="form-label">Institution</label>
                <input type="text" class="form-control education-institution" placeholder="e.g., University Name">
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label class="form-label">Start Date</label>
                    <input type="date" class="form-control education-start">
                </div>
                <div class="col">
                    <label class="form-label">End Date</label>
                    <input type="date" class="form-control education-end" placeholder="Or leave empty if ongoing">
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">Description</label>
                <textarea class="form-control education-description" rows="3" placeholder="Optional: GPA, honors, or other details..."></textarea>
            </div>
            <button type="button" class="btn btn-danger btn-sm remove-education">
                <i class="fas fa-trash"></i> Remove
            </button>
        `;
        return container;
    }

    const addEducationBtn = document.getElementById("addEducationBtn");
    const educationContainer = document.getElementById("education-container");
    if (addEducationBtn && educationContainer) {
        addEducationBtn.addEventListener("click", () => {
            const newEducationEntry = createEducationEntry();
            educationContainer.appendChild(newEducationEntry);
        });

        educationContainer.addEventListener("click", (e) => {
            if (e.target.closest(".remove-education")) {
                e.target.closest(".education-entry").remove();
            }
        });
    }
});