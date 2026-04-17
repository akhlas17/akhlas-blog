// Single source of truth for the post index.
// Add new posts to the top of this array.
const POSTS = [
  {
    slug: "meta-health-faq-nobody-writes",
    title: "The Meta health FAQ nobody writes",
    date: "2026-04-17",
    dateLabel: "Apr 17, 2026",
    dek: "Twelve questions from health brand owners, with the answers their ad rep won't give them.",
    href: "/posts/meta-health-faq-nobody-writes.html"
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
