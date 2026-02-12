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
const indexes = {
    mysubletter: 0,
    theliftingplatform: 0,
    cmsdataviewer: 0,
    myvirtualpet: 0
};

const websiteImages = {
    mysubletter: [
        { src: "ms-screenshots/ms-1.png", caption: "Junior year, I pitched my business idea to the Catamount Innovation Fund, an incubator club in the UVM business school. I was selected along with 3 other great startup ideas. The club provided me with mentorship, funding, and resources to help build my startup." },
        { src: "ms-screenshots/ms-2.png", caption: "MySubletter is under development, but will be officially launched in 2026. I look forward to providing a platform to support students, workers, and other travelers who struggle to find temporary, AFFORDABLE, housing, especially in an economy like today's." }
    ],
    theliftingplatform: [
        { src: "tlp-screenshots/tlp-1.png", caption: "Home Page: athletes get an overview of their PRs and a calendar they can edit with upcoming events." },
        { src: "tlp-screenshots/tlp-2.png", caption: "Profile: athletes can edit their profile, especially with PRs which get updated throughout the rest of the website." },
        { src: "tlp-screenshots/tlp-3.png", caption: "PR Tracker: athletes can keep track of all their PRs in an organized table view." },
        { src: "tlp-screenshots/tlp-4.png", caption: "Goals: athletes can enter goals with a target metric, date, priority level, and notes. They can also complete, edit, or delete these goals." },
        { src: "tlp-screenshots/tlp-5.png", caption: "Programming: athletes can view sample programming or input their own. This is what the input screen looks like. If they have their PRs updated in their profile, their programming output will automatically show them what weight total they should lift for each set." },
        { src: "tlp-screenshots/tlp-6.png", caption: "Barbell Builder: my favorite page! This is a fun game where users can practice correctly loading the bar to Olympic standards, with either a 15kg or 20kg bar." },
        { src: "tlp-screenshots/tlp-7.png", caption: "Barbell Builder (con't): here is a sample of the answer screen if the user did not get the total or plate combination correct." },
        { src: "tlp-screenshots/tlp-8.png", caption: "Percentages: the athletes can see the weight they should be lifting for each percentage of each different lift -- automatically populated if they fill out their PRs in their profile." },
        { src: "tlp-screenshots/tlp-9.png", caption: "Percentages (con't): athletes can calculate for a certain weight or percentage if they need one that's not found in the table (for example, 83%)." },
        { src: "tlp-screenshots/tlp-10.png", caption: "Lift Library: athletes can navigate through a library of resources explaining form, tips, and tricks for snatches and clean & jerks." },
    ],
    cmsdataviewer: [
        { src: "cmsdv-screenshots/cmsdv-1.png", caption: "Landing page. User can choose 4 tables from a dropdown to view, query, or join." },
        { src: "cmsdv-screenshots/cmsdv-3.png", caption: "This is the view of the schema of the selected table. It indicates the number of records, data types, primary and foreign keys, and nullable fields." },
        { src: "cmsdv-screenshots/cmsdv-2.png", caption: "This is the view of a table. Here you can edit or delete any column, row, or value. However, Primary Key attributes are enforced." },
        { src: "cmsdv-screenshots/cmsdv-4.png", caption: "This is the query builder. The user can perform the actions: select, filter, order by, sort by, limit, and aggregate functions." },
        { src: "cmsdv-screenshots/cmsdv-5.png", caption: "The query builder continued. A query preview dynamically updates as the user makes their selections here." },
        { src: "cmsdv-screenshots/cmsdv-6.png", caption: "This is the Join builder. Like the Query builder, it dynamically updates a preview of the operation. Users can choose types of joins and fields to join on, plus optional filters and groupings." },
        { src: "cmsdv-screenshots/cmsdv-7.png", caption: "This is a sample of query results the user would see after performing one." }

    ],
    myvirtualpet: [
        { src: "mvp-screenshots/mvp-1.png", caption: "This is the home page. It provides some facts about caring for different animals, and directs the user to other pages to get started." },
        { src: "mvp-screenshots/mvp-2.png", caption: "This is the animal shelter! Users can pick from the four cute animals up for adoption." },
        { src: "mvp-screenshots/mvp-3.png", caption: "This is the pet page, where you can interact with your adopted pet! They start off sad because they're low on happiness, hunger, and stimulation! :() " },
        { src: "mvp-screenshots/mvp-4.png", caption: "This is the pet store, where users buy food, treats, and toys to interact with their pet." },
        { src: "mvp-screenshots/mvp-5.png", caption: "The user can see how many of each item they currently have in their inventory." },
        { src: "mvp-screenshots/mvp-6.png", caption: "Cuddling your pet increases its happiness level!" },
        { src: "mvp-screenshots/mvp-7.png", caption: "Feeding your pet fixes its hunger level!" },
        { src: "mvp-screenshots/mvp-8.png", caption: "Making your pet do a trick fixes its boredom level! This also prompts them to make a super cute noise. Get all the bars to green!" },

    ]
};

function showWebsite(website) {
    const allWebsites = document.querySelectorAll('.website-content');
    allWebsites.forEach(site => {
        site.style.display = 'none';
    });

    // Remove active class from all tabs
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => tab.classList.remove('active'));
    
    document.getElementById(website).style.display = 'block';

    // Add active class to selected tab
    const tabMap = {
        'mysubletter': 'tab1',
        'theliftingplatform': 'tab2',
        'cmsdataviewer': 'tab3',
        'myvirtualpet': 'tab4'
    };
    document.getElementById(tabMap[website]).classList.add('active');  // ← Fixed!
    
    // Initialize the gallery for this website
    if (websiteImages[website] && websiteImages[website].length > 0) {
        const firstImage = websiteImages[website][0];
        document.getElementById(`gallery-image-${website}`).src = firstImage.src;
        document.getElementById(`gallery-caption-${website}`).textContent = firstImage.caption;
        indexes[website] = 0; // Reset to first image
    }
}

function changeImage(direction, website) {
    indexes[website] += direction;

    const images = websiteImages[website];

    // Loop if at end of gallery
    if (indexes[website] < 0) {
        indexes[website] = images.length - 1;
    } else if (indexes[website] >= images.length) {
        indexes[website] = 0;
    }
    
    // update image & caption
    const currentImage = images[indexes[website]];
    document.getElementById(`gallery-image-${website}`).src = currentImage.src;
    document.getElementById(`gallery-caption-${website}`).textContent = currentImage.caption;
}