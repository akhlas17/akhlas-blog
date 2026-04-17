// Single source of truth for the post index.
// Add new posts to the top of this array.
const POSTS = [
  {
    slug: "meta-health-tracking-field-guide",
    title: "The Meta health tracking field guide",
    date: "2026-04-17",
    dateLabel: "Apr 17, 2026",
    dek: "What the docs won't tell you, the popular playbooks have wrong, and your ad rep won't admit.",
    href: "/posts/meta-health-tracking-field-guide.html"
  }
];

(function render() {
  const list = document.getElementById("post-list");
  if (!list) return;
  const full = list.classList.contains("full");
  const items = full ? POSTS : POSTS.slice(0, 5);
  if (!items.length) {
    list.innerHTML = `<li class="empty"><span class="title">First piece lands soon.</span></li>`;
    return;
  }
  list.innerHTML = items.map(p => `
    <li>
      <a class="row" href="${p.href}">
        <span class="date"><time datetime="${p.date}">${p.dateLabel}</time></span>
        <span class="title">${p.title}</span>
      </a>
    </li>
  `).join("");
})();
