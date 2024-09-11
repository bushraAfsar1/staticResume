document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.getElementById("skillsSection") as HTMLDivElement;
    const toggleSkillsButton = document.getElementById("toggleSkillsButton") as HTMLButtonElement;

    toggleSkillsButton.addEventListener("click", () => {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
            toggleSkillsButton.textContent = "Hide Skills";
        } else {
            skillsSection.style.display = "none";
            toggleSkillsButton.textContent = "Show Skills";
        }
    });
});
