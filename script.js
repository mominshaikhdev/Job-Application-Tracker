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

  const filteredJobs = jobs.filter((job) => {
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

  // Rendering Cards
  filteredJobs.forEach((job) => {
    let badgeStyle = "bg-slate-100 text-slate-600";
    if (job.status === "INTERVIEW") badgeStyle = "bg-green-100 text-green-700";
    if (job.status === "REJECTED") badgeStyle = "bg-red-100 text-red-700";

    const card = document.createElement("div");
    card.className =
      "bg-white p-5 rounded-lg border border-slate-200 shadow-sm relative transition-all hover:shadow-md";
    card.innerHTML = `
            <button onclick="deleteJob(${job.id})" class="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>

            <h3 class="text-lg font-bold text-slate-800">${job.companyName}</h3>
            <p class="text-sm text-slate-600 mb-2">${job.position}</p>
            
            <div class="text-xs text-slate-500 mb-4 flex flex-wrap gap-2 items-center">
                <span>${job.location}</span>
                <span>•</span>
                <span>${job.type}</span>
                <span>•</span>
                <span>${job.salary}</span>
            </div>

            <div class="mb-4">
                <span class="text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider ${badgeStyle}">
                    ${job.status}
                </span>
            </div>

            <p class="text-sm text-slate-600 mb-5 leading-relaxed">
                ${job.description}
            </p>

            <div class="flex gap-3">
                <button onclick="updateStatus(${job.id}, 'INTERVIEW')" class="text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-sm border ${job.status === "INTERVIEW" ? "border-green-600 bg-green-50 text-green-700" : "border-green-500 text-green-600 hover:bg-green-50"} transition-colors">
                    Interview
                </button>
                <button onclick="updateStatus(${job.id}, 'REJECTED')" class="text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-sm border ${job.status === "REJECTED" ? "border-red-600 bg-red-50 text-red-700" : "border-red-500 text-red-600 hover:bg-red-50"} transition-colors">
                    Rejected
                </button>
            </div>
        `;
    jobContainer.appendChild(card);
  });
}

// Global functions for these event handlers
window.updateStatus = function(id, newStatus) {
    const jobIndex = jobs.findIndex(j => j.id === id);
    if (jobIndex > -1) {
        jobs[jobIndex].status = newStatus;
        render(); // Re-render updates the UI updates dashboard
    }
}

window.deleteJob = function(id) {
    jobs = jobs.filter(j => j.id !== id);
    render(); // Re-render handles UI removal
}

function updateDashboardCounts() {
    const total = jobs.length;
    const interview = jobs.filter(j => j.status === "INTERVIEW").length;
    const rejected = jobs.filter(j => j.status === "REJECTED").length;

    dashTotal.textContent = total;
    dashInterview.textContent = interview;
    dashRejected.textContent = rejected;
}