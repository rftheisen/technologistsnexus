const data = {
  "BCI": [
    {
      "title": "Neuralink Successfully Implanted in Human",
      "date": "2025-02-08",
      "summary": "Neuralink Implants First Human",
      "link": "https://www.theguardian.com/science/2025/feb/08/elon-musk-chip-paralysed-man-noland-arbaugh-chip-brain-neuralink"
    }
  ],
  "Cybersecurity": [
    {
      "title": "Post-Quantum Encryption Now Mandatory in Gov Contracts",
      "date": "2025-05-10",
      "summary": "The US government mandates quantum-resistant algorithms in federal systems.",
      "link": "https://example.com/post-quantum"
    }
  ]
};

const tree = document.getElementById("tree");
const searchInput = document.getElementById("search");

function renderTree(filter = "") {
  tree.innerHTML = "";
  for (const category in data) {
    const catEl = document.createElement("div");
    catEl.className = "category";
    catEl.textContent = category;

    const list = document.createElement("ul");
    list.className = "item-list";

    data[category].forEach(item => {
      if (
        item.title.toLowerCase().includes(filter) ||
        item.summary.toLowerCase().includes(filter)
      ) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.link;
        a.target = "_blank";
        a.textContent = item.title;
        a.setAttribute("data-summary", item.summary);
        li.appendChild(a);
        list.appendChild(li);
      }
    });

    if (list.children.length > 0 || filter === "") {
      catEl.addEventListener("click", () => {
        list.style.display = list.style.display === "none" ? "block" : "none";
      });
      tree.appendChild(catEl);
      tree.appendChild(list);
    }
  }
}

searchInput.addEventListener("input", e => {
  const term = e.target.value.trim().toLowerCase();
  renderTree(term);
});

renderTree();
