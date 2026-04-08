function searchNumber() {
    const number = document.getElementById('userInput').value;
    const resultPanel = document.getElementById('resPanel');
    
    if (number.length < 10) {
        alert("Please enter a valid 10-digit number.");
        return;
    }

    // Showing Loading State
    document.getElementById('resName').innerText = "Searching Database...";
    document.getElementById('resPhone').innerText = number;
    
    // Yahan hum future mein API connect karein gay
    setTimeout(() => {
        // Filhal ye demo data dikhaye ga
        document.getElementById('resName').innerText = "Record Found (Demo)";
        document.getElementById('resCnic').innerText = "42101-XXXXXXX-X";
        document.getElementById('resAddress').innerText = "Sialkot, Punjab, Pakistan";
        alert("Success: Record fetched from Hamza's Server!");
    }, 2000);
}
