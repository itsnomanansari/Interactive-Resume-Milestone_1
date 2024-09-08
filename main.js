// Function to toggle the visibility of a section
function toggleSection(buttonId, sectionId) {
    var toggleButton = document.getElementById(buttonId);
    var section = document.querySelector(sectionId);
    if (toggleButton && section) {
        toggleButton.addEventListener('click', function () {
            section.classList.toggle('hide');
        });
    }
}
// Toggle functionality for all sections
toggleSection('togglePersonalInfo', '#personal-info .profile');
toggleSection('toggleEducation', '#education ul');
toggleSection('toggleSkills', '#skills .skill-list');
toggleSection('toggleWorkExperience', '#work-experience ul');
