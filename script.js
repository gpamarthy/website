const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const progressBar = document.getElementById("progressBar");
const year = document.getElementById("year");

const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
root.setAttribute("data-theme", initialTheme);
themeToggle.setAttribute("aria-pressed", initialTheme === "dark");

const updateTheme = () => {
  const currentTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", currentTheme);
  themeToggle.setAttribute("aria-pressed", currentTheme === "dark");
  localStorage.setItem("theme", currentTheme);
};

themeToggle.addEventListener("click", updateTheme);

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (targetId.length > 1) {
      event.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    }
  });
});

const revealItems = document.querySelectorAll("[data-reveal]");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
revealItems.forEach((item) => observer.observe(item));

const updateProgress = () => {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;
};

window.addEventListener("scroll", updateProgress);
window.addEventListener("load", updateProgress);

if (year) {
  year.textContent = new Date().getFullYear();
}
