document.addEventListener("DOMContentLoaded", function() {
    // Professional Summary Character Count
    const summaryText = document.getElementById("summaryText");
    const charCount = document.getElementById("charCount");
    if (summaryText && charCount) {
        summaryText.addEventListener("input", () => {
            const count = summaryText.value.length;
            charCount.textContent = `${count} / 500`;
        });
    }
});