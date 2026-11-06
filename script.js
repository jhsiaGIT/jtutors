/*
  JTutor Hub resource list
  To add a resource:
  1. Upload the PDF or file into resources/math/ or resources/science/ in GitHub.
  2. Add an entry below. Use a path such as "resources/math/algebra-practice.pdf".
*/
const resources = [
  // Example:
  // {
  //   title: "Algebra practice",
  //   subject: "math", // use "math" or "science"
  //   description: "A practice worksheet covering linear equations.",
  //   type: "PDF worksheet",
  //   file: "resources/math/algebra-practice.pdf"
  // }
];

const grid = document.getElementById("resourceGrid");
const search = document.getElementById("resourceSearch");
const filterButtons = document.querySelectorAll(".filter-button");
let activeFilter = "all";

function renderResources() {
  const query = search.value.trim().toLowerCase();
  const visible = resources.filter(item => {
    const matchesFilter = activeFilter === "all" || item.subject === activeFilter;
    const matchesSearch = `${item.title} ${item.description} ${item.type} ${item.subject}`.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  if (!visible.length) {
    grid.innerHTML = `<div class="empty-state">${resources.length === 0
      ? "Your resource library is getting ready. New math and science resources will appear here."
      : "No resources match that search. Try another keyword or subject."}</div>`;
    return;
  }

  grid.innerHTML = visible.map(item => {
    const isScience = item.subject === "science";
    const label = isScience ? "SCIENCE" : "MATHEMATICS";
    return `<article class="resource-card">
      <div class="resource-type ${isScience ? "science" : ""}">
        <span>${label}</span><span class="file-icon">↗</span>
      </div>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.description)}</p>
      <a href="${escapeAttribute(item.file)}" target="_blank" rel="noopener">${escapeHTML(item.type || "Open resource")} &nbsp; ↗</a>
    </article>`;
  }).join("");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function escapeAttribute(value) {
  return escapeHTML(value);
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle("active", item === button));
    renderResources();
  });
});
document.querySelectorAll("[data-filter-link]").forEach(link => {
  link.addEventListener("click", () => {
    activeFilter = link.dataset.filterLink;
    filterButtons.forEach(item => item.classList.toggle("active", item.dataset.filter === activeFilter));
    renderResources();
  });
});
search.addEventListener("input", renderResources);
document.getElementById("year").textContent = new Date().getFullYear();
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
renderResources();
