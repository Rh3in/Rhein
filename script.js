const header = document.querySelector("[data-header]");
const navLinks = [...document.querySelectorAll("[data-nav-links] a")];
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const caseCards = [...document.querySelectorAll("[data-tags]")];
const copyEmailButton = document.querySelector("[data-copy-email]");
const hero = document.querySelector(".hero");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

const updateHeroEdgeLights = () => {
  if (!hero) return;

  const rect = hero.getBoundingClientRect();
  hero.classList.toggle("hide-edge-lights", rect.bottom < window.innerHeight * 0.45);
};

const setActiveNavLink = () => {
  const current = [...document.querySelectorAll("main section[id], footer[id]")]
    .filter((section) => section.getBoundingClientRect().top < 180)
    .at(-1);

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", current?.id && link.hash === `#${current.id}`);
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    caseCards.forEach((card) => {
      const tags = card.dataset.tags?.split(" ") ?? [];
      card.classList.toggle("is-hidden", filter !== "all" && !tags.includes(filter));
    });
  });
});

copyEmailButton?.addEventListener("click", async () => {
  const email = copyEmailButton.dataset.copyEmail ?? "";
  const originalText = copyEmailButton.textContent;

  try {
    await navigator.clipboard.writeText(email);
    copyEmailButton.textContent = "已复制";
    setTimeout(() => {
      copyEmailButton.textContent = originalText;
    }, 1600);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

window.addEventListener("scroll", () => {
  updateHeader();
  updateHeroEdgeLights();
  setActiveNavLink();
});

updateHeader();
updateHeroEdgeLights();
setActiveNavLink();
