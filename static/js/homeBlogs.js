const numArticles = articles.length;

const blogsContainer = document.querySelector(".blogs__content");
const blogsControls = document.querySelector(".blogs__controls");
const nextBlogBtn = document.querySelector(".blogs__next");
const prevBlogBtn = document.querySelector(".blogs__prev");
let articleIndex = 1;

const blog = ({
  image,
  body,
  title,
  category,
}) => `<img src="/media/${image}" alt="Article image">
            <h3><a href="/blogs/single_blog/${title}">${title}</a></h3>
            <p>${body}</p>
            <footer>
              <p>${category}</p>
              <a href="/blogs/single_blog/${title}">See More</a>
            </footer>`;

const addArticle = (newIndex, oldIndex) => {
  const blogSection = document.createElement("section");
  blogSection.classList.add("article");
  blogSection.innerHTML = blog(articles[newIndex].fields);
  blogsContainer.replaceChild(
    blogSection,
    document.querySelectorAll(".article")[oldIndex]
  );
};

const replaceArticle = (newArticle, oldIndex) => {
  blogsContainer.replaceChild(
    newArticle,
    document.querySelectorAll(".article")[oldIndex]
  );
};

// Blogs controls
for (let i = 0; i < numArticles; i++) {
  const spanElm = document.createElement("span");
  if (i === 1) spanElm.classList.add("active");
  spanElm.addEventListener("click", () => changeArticle(i));
  blogsControls.appendChild(spanElm);
}

const changeArticle = (i) => {
  articleIndex = i;
  let prevArticle = !i ? numArticles - 1 : i - 1;
  let nextArticle = i === numArticles - 1 ? 0 : i + 1;
  addArticle(articleIndex, 1);
  addArticle(prevArticle, 0);
  addArticle(nextArticle, 2);
  clearActive();
  blogsControls.querySelectorAll("span")[i].classList.add("active");
};

// Show Articles
for (let i = articleIndex - 1; i < articleIndex + 2; i++) {
  const blogSection = document.createElement("section");
  blogSection.classList.add("article");
  blogSection.innerHTML = blog(articles[i].fields);
  blogsContainer.insertBefore(blogSection, nextBlogBtn);
}

// Clear active blog control
const clearActive = () => {
  Array.from(blogsControls.children).forEach((spanElm) =>
    spanElm.classList.remove("active")
  );
};

// Next article
nextBlogBtn.addEventListener("click", () => {
  let index;
  if (articleIndex + 1 === numArticles) articleIndex = 0;
  else articleIndex++;

  if (articleIndex + 1 === numArticles) index = 0;
  else index = articleIndex + 1;

  const firstBlog = document.querySelectorAll(".article")[1];
  const secondBlog = document.querySelectorAll(".article")[2];

  addArticle(index, 2);
  replaceArticle(secondBlog, 1);
  replaceArticle(firstBlog, 0);
  clearActive();

  blogsControls
    .querySelectorAll("span")
    [articleIndex !== -1 ? articleIndex : numArticles - 1].classList.add(
      "active"
    );
});

// Previous Article
prevBlogBtn.addEventListener("click", () => {
  let index;
  if (!articleIndex) articleIndex = numArticles - 1;
  else articleIndex--;

  if (!articleIndex) index = numArticles - 1;
  else index = articleIndex - 1;

  const firstBlog = document.querySelectorAll(".article")[0];
  const secondBlog = document.querySelectorAll(".article")[1];

  addArticle(index, 0);
  replaceArticle(firstBlog, 1);
  replaceArticle(secondBlog, 2);
  clearActive();

  blogsControls
    .querySelectorAll("span")
    [articleIndex !== numArticles ? articleIndex : 0].classList.add("active");
});
