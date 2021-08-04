function renderMetas(metas) {
  if (!metas || !metas.length) return;
  metas.unshift({ slug: "All" });
  const target = document.querySelector(".metas-container");
  let html = "";
  for (let i = 0; i < metas.length; i++) {
    const showSlug = metas[i].slug;
    const slug = showSlug.length > 15 ? showSlug.slice(0, 8) + "..." : showSlug;
    const style = `text-align: ${i % 2 === 0 ? "right" : "left"}`;
    html += `<div style="top: ${i * 100}px;" class='meta-line'>
      <span style="${style}" class="meta-line-s" data-meta="${showSlug}" onclick="handleClickMeta(${i});">${slug}</span>
    </div>`;
  }
  target.innerHTML += html;
}

const temp = { articleItems: null };

function handleClickMeta(index) {
  if (!temp.articleItems) {
    temp.articleItems = document.querySelectorAll(".article-item");
  }
  const { articleItems } = temp;
  const { target } = this.event;
  const slug = target.getAttribute("data-meta");
  if (!slug) return;
  const effect = document.querySelector(".meta-effect-circle");
  effect.style.transform = `translate3d(${index % 2 === 0 ? 100 : 0}px, ${
    index * 100
  }px, 0)`;
  articleItems.forEach(item => {
    const metaType = item.getAttribute("data-artilce-type");
    item.style.display = "none";
    setTimeout(() => {
      item.style.display =
        index === 0 ? "block" : metaType === slug ? "block" : "none";
    }, 0);
  });
}
