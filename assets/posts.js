// Single source of truth for the post index.
// Add new posts to the top of this array.
const POSTS = [
  {
    slug: "follow-one-event",
    title: "Follow one event: what Meta actually does inside a health brand's pixel fire",
    date: "2026-04-17",
    dateLabel: "Apr 17, 2026",
    dek: "A patient, step-by-step walkthrough of what happens to a single Purchase event — and the three silent failures no playbook explains.",
    href: "/posts/follow-one-event.html"
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
