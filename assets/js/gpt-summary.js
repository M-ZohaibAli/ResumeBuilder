document.addEventListener("DOMContentLoaded", function() {
    const generateSummaryBtn = document.getElementById("generateSummaryBtn");
    if (generateSummaryBtn) {
        generateSummaryBtn.addEventListener("click", async function() {
            const name = document.getElementById("fullName").value || "the candidate";
            const title = document.getElementById("title").value || "professional";
            const languages = document.getElementById("languages").value || "";
            const frameworks = document.getElementById("frameworks").value || "";
            const databases = document.getElementById("databases").value || "";
            const tools = document.getElementById("tools").value || "";

            // Get work experience details
            let experienceDetails = [];
            document.querySelectorAll(".work-entry").forEach(entry => {
                const company = entry.querySelector(".company-name").value || "";
                const jobTitle = entry.querySelector(".job-title").value || "";
                const description = entry.querySelector(".description").value || "";
                if (company || jobTitle || description) {
                    experienceDetails.push({
                        company,
                        jobTitle,
                        description
                    });
                }
            });

            // Get education details
            let educationDetails = [];
            document.querySelectorAll(".education-entry").forEach(entry => {
                const degree = entry.querySelector(".education-degree").value || "";
                const institution = entry.querySelector(".education-institution").value || "";
                if (degree || institution) {
                    educationDetails.push({
                        degree,
                        institution
                    });
                }
            });

            // Prepare prompt for GPT-4
            let prompt = `Write a professional resume summary for ${name}, a ${title}. `;

            if (languages) prompt += `Technical skills include: ${languages}. `;
            if (frameworks) prompt += `Frameworks: ${frameworks}. `;
            if (databases) prompt += `Databases: ${databases}. `;
            if (tools) prompt += `Tools: ${tools}. `;

            if (experienceDetails.length > 0) {
                prompt += "Work experience includes: ";
                experienceDetails.forEach(exp => {
                    if (exp.jobTitle) prompt += `${exp.jobTitle} at ${exp.company}. `;
                    if (exp.description) prompt += `${exp.description}. `;
                });
            }

            if (educationDetails.length > 0) {
                prompt += "Education includes: ";
                educationDetails.forEach(edu => {
                    if (edu.degree) prompt += `${edu.degree} from ${edu.institution}. `;
                });
            }

            prompt += "Make the summary concise (3-4 sentences), professional, and tailored for a technical resume. Focus on achievements and skills.";

            // Show loading state
            const originalText = generateSummaryBtn.innerHTML;
            generateSummaryBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
            generateSummaryBtn.disabled = true;

            try {
                const url = 'https://unlimited-gpt-4.p.rapidapi.com/chat/completions';
                const options = {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer aca0ad0a0amshf0c8deef66bfc55p15e8d3jsna7d415b25b79',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: 'gpt-4',
                        messages: [
                            {
                                role: 'system',
                                content: 'You are a helpful assistant.'
                            },
                            {
                                role: 'user',
                                content: prompt
                            }
                        ],
                        max_tokens: 150,
                        temperature: 0.7
                    })
                };

                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }

                const data = await response.json();
                const summary = data.choices[0].message.content;

                // Set the generated summary in the textarea
                document.getElementById("summaryText").value = summary;
                document.getElementById("charCount").textContent = `${summary.length} / 500`;

            } catch (error) {
                console.error("Error generating summary:", error);
                alert("Failed to generate summary. Please try again or write your own.");
            } finally {
                // Restore button state
                generateSummaryBtn.innerHTML = originalText;
                generateSummaryBtn.disabled = false;
            }
        });
    }
});