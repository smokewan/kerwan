// Speaker data for each branch
const speakersData = {
    davao: [
        "Select","Rex Bugcalao", "Rose Ann Lim", "Ted Sombrio", "Airine Escabarte", "Romelyn Latonio",
        "Roland Chevy Lim", "Gina Bugcalao", "Raquel Jorolan", "Ronald Mamontayao Mejia", 
        "Anabele Mallantoc", "Larry Bacares", "Arlene Acosta", "Cristina Gayotin", 
        "Noe Abarquez Neñeria II", "Brenda Escarda Lanotes", "Rem Almira Liu Chiong"
    ],
    cebu: [
        "Select","Rex Bugcalao", "Bernard Cybel Misa", "Whang Helen Ang", "Jose Arvin Tordillo", 
        "Bonifacio Tordillo Jr.", "Delmer Ben S Tillo", "Jenneth Baculao", "Susie Chan", 
        "Ma. Ruby Colonia", "Ricky Paul Ong Tio"
    ],
    cdo: [
        "Select","Faith Ann", "Elizabeth", "Rex Bugcalao", "Lindy Lou Valendez", "Ted Sombrio", 
        "Manuelito Uy Acabal", "Wendy Handumon", "Gloria Jean Lim Acabal", "Ma. Theresa Palma", 
        "Anabele Mallantoc", "Epifanio Caro Jr.", "Michael Lu Chan", "Rommel Robert G Handumon", 
        "King Miñoza", "Trinitas Susan Hojas Gonda"
    ]
};

// Function to populate speaker selection dropdowns
function populateSpeakerOptions(branch) {
    const speakers = speakersData[branch];
    if (speakers) {
        const dropdowns = document.querySelectorAll(".speaker-choice-dropdown");
        dropdowns.forEach(dropdown => {
            dropdown.innerHTML = ""; // Clear existing options
            speakers.forEach(speaker => {
                const option = document.createElement("option");
                option.value = speaker;
                option.textContent = speaker;
                dropdown.appendChild(option);
            });
        });
    }
}

// Event listener to handle branch selection
document.addEventListener("DOMContentLoaded", () => {
    const branchSelect = document.getElementById("branchSelect");
    branchSelect.addEventListener("change", () => {
        const selectedBranch = branchSelect.value;
        populateSpeakerOptions(selectedBranch);
    });

    // Initial load for default branch
    populateSpeakerOptions(branchSelect.value);
});
