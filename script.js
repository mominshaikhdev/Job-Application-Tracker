let jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $175,000",
    description:
      "Build leading cross-platform mobile applications using React Native. Work alongside product managers and UI/UX designers.",
    status: "NOT APPLIED",
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$60,000 - $80,000",
    description:
      "Design and develop pixel-perfect layouts for high-profile clients. Must have a strong portfolio and experience with modern web design tools.",
    status: "NOT APPLIED",
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    description:
      "Transform complex data into compelling visual stories. Deep knowledge of D3.js, React, and strong analytical skills required.",
    status: "NOT APPLIED",
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    description:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "NOT APPLIED",
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $130,000",
    description:
      "Create seamless user experiences and interfaces. Close collaboration with product teams to translate requirements into engaging designs.",
    status: "NOT APPLIED",
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description:
      "Build robust web applications and APIs. Work extensively with Node.js and React to deliver high-performance enterprise tools.",
    status: "NOT APPLIED",
  },
  {
    id: 7,
    companyName: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    description:
      "Join our fast-growing startup and work on core platform features. Experience with Node.js, React, and MongoDB is essential.",
    status: "NOT APPLIED",
  },
  {
    id: 8,
    companyName: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$150,000 - $180,000",
    description:
      "Lead the frontend architecture. Mentor junior developers and drive technical decisions. Deep expertise in React and TypeScript required.",
    status: "NOT APPLIED",
  },
];

let currentTab = "All";

// DOM Elements
const jobContainer = document.getElementById("job-container");
const dashTotal = document.getElementById("dash-total");
const dashInterview = document.getElementById("dash-interview");
const dashRejected = document.getElementById("dash-rejected");
const tabJobCount = document.getElementById("tab-job-count");
const tabButtons = document.querySelectorAll(".tab-btn");

render();

// Tab Event Listeners
tabButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    tabButtons.forEach((btn) => {
      btn.classList.remove("bg-blue-600", "text-white");
      btn.classList.add("bg-white", "text-slate-600", "border-slate-200");
    });
    e.target.classList.remove("bg-white", "text-slate-600", "border-slate-200");
    e.target.classList.add("bg-blue-600", "text-white");

    currentTab = e.target.getAttribute("data-tab");
    render();
  });
});

// the rendering() function
function render() {
    updateDashboardCounts();
    
    const filteredJobs = jobs.filter(job => {
        if (currentTab === "All") return true;
        if (currentTab === "Interview" && job.status === "INTERVIEW") return true;
        if (currentTab === "Rejected" && job.status === "REJECTED") return true;
        return false;
    });

    
    tabJobCount.textContent = filteredJobs.length;
    
    jobContainer.innerHTML = "";

    // Empty State Check
    if (filteredJobs.length === 0) {
        jobContainer.innerHTML = `
            <div class="bg-white rounded-lg border border-slate-200 p-12 flex flex-col items-center justify-center text-center">
                <svg class="w-16 h-16 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <h3 class="text-lg font-bold text-slate-800 mb-1">No jobs available</h3>
                <p class="text-sm text-slate-500">Check back later for new job opportunities.</p>
            </div>
        `;
        return;
    }

