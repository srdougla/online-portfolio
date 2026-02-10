function hideSection(sectionName) {
    document.getElementById(sectionName).style.display = 'none';
}

// ----------------------------------------- WORK EXPERIENCE PAGE -----------------------------------------
// Get all nodes and job info cards
const nodes = document.querySelectorAll('.node');
const jobInfoCards = document.querySelectorAll('.job-info');
const closeButtons = document.querySelectorAll('.close-btn');

// Function to close all job info cards
function closeAllCards() {
    jobInfoCards.forEach(card => {
        card.classList.remove('active');
    });
    nodes.forEach(node => {
        node.classList.remove('active');
    });
    document.body.classList.remove('info-open');
}

// Add click event to each node
nodes.forEach(node => {
    node.addEventListener('click', function() {
        const jobId = this.getAttribute('data-job');
        const jobInfo = document.getElementById(jobId);
        
        // Check if this card is already open
        const isActive = jobInfo.classList.contains('active');
        
        // Close all cards first
        closeAllCards();
        
        // If it wasn't active, open it
        if (!isActive) {
            jobInfo.classList.add('active');
            this.classList.add('active');
            document.body.classList.add('info-open');
        }
    });
});

// Add click event to close buttons
closeButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        closeAllCards();
    });
});

// Close card when clicking on backdrop
document.body.addEventListener('click', function(e) {
    // Check if click is on the backdrop (body with info-open class)
    if (document.body.classList.contains('info-open') && 
        !e.target.closest('.job-info') && 
        !e.target.closest('.node')) {
        closeAllCards();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeAllCards();
    }
});

nodes.forEach(node => {
    node.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ----------------------------------------- WEBSITES PAGE -----------------------------------------
function showWebsite(siteName) {
    const allWebsites = document.querySelectorAll('.website-content');
    allWebsites.forEach(site => {
        site.style.display = 'none';
    });
    
    document.getElementById(siteName).style.display = 'block';
}