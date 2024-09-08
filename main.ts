// Function to toggle the visibility of a section
function toggleSection(buttonId: string, sectionId: string) {
    const toggleButton = document.getElementById(buttonId) as HTMLButtonElement | null;
    const section = document.querySelector(sectionId) as HTMLElement | null;

    if (toggleButton && section) {
        toggleButton.addEventListener('click', () => {
            section.classList.toggle('hide');
        });
    }
}

// Toggle functionality for all sections
toggleSection('togglePersonalInfo', '#personal-info .profile');
toggleSection('toggleEducation', '#education ul');
toggleSection('toggleSkills', '#skills .skill-list');
toggleSection('toggleWorkExperience', '#work-experience ul');
