// Single source of truth for the post index.
// Add new posts to the top of this array.
const POSTS = [
  {
    slug: "meta-pixel-is-watching",
    title: "Meta's pixel is in the waiting room, and your brand is paying the bill",
    date: "2026-04-17",
    dateLabel: "Apr 17, 2026",
    dek: "A field note for brand owners who think they're just running a Facebook ad.",
    href: "/posts/meta-pixel-is-watching.html"
  }
];

(function render() {
  const list = document.getElementById("post-list");
  if (!list) return;
  const full = list.classList.contains("full");
  const items = full ? POSTS : POSTS.slice(0, 5);
  list.innerHTML = items.map(p => `
    <li>
      <a class="row" href="${p.href}">
        <span class="date"><time datetime="${p.date}">${p.dateLabel}</time></span>
        <span class="title">${p.title}</span>
      </a>
    </li>
  `).join("");
})();
