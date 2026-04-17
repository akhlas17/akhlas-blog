// Single source of truth for the post index.
// Add new posts to the top of this array.
const POSTS = [
  {
    slug: "meta-classifies-funnels-not-domains",
    title: "Meta isn't classifying your domain. It's classifying your funnel.",
    date: "2026-04-17",
    dateLabel: "Apr 17, 2026",
    dek: "After watching dozens of health brands get restricted, the same pattern keeps showing up — and it isn't where anyone's looking.",
    href: "/posts/meta-classifies-funnels-not-domains.html"
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
