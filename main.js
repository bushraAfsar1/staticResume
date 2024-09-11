document.addEventListener("DOMContentLoaded", function () {
    var skillsSection = document.getElementById("skillsSection");
    var toggleSkillsButton = document.getElementById("toggleSkillsButton");
    toggleSkillsButton.addEventListener("click", function () {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
            toggleSkillsButton.textContent = "Hide Skills";
        }
        else {
            skillsSection.style.display = "none";
            toggleSkillsButton.textContent = "Show Skills";
        }
    });
});
