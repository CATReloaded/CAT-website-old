const numArticles = articles.length;

const blogsContainer = document.querySelector(".blogs__content");
const blogsControls = document.querySelector(".blogs__controls");
const nextBlogBtn = document.querySelector(".blogs__next");
const prevBlogBtn = document.querySelector(".blogs__prev");
let articleIndex = 1;

const blog = ({
  image,
  body,
  likes,
  comments_num,
  title,
}) => `<img src="/media/${image}" alt="Article image">
            <h3>${title}</h3>
            <p>${body}</p>
            <footer>
              ${
                likes
                  ? `<span class="blogs__content__likes"><img src="/static/images/heart.svg" alt="like icon">${likes}</span>`
                  : ""
              }
              ${
                comments_num
                  ? `<span class="blogs__content__comments"><img src="/static/images/comment.svg" alt="comment icon">${comments_num}</span>`
                  : ""
              }
              <a href="{% url 'single_blog' article.title %}">See More</a>
            </footer>`;

// Blogs controls
for (let i = 0; i < numArticles; i++) {
  const spanElm = document.createElement("span");
  if (i === 1) spanElm.classList.add("active");
  blogsControls.appendChild(spanElm);
}

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

  const blogSection = document.createElement("section");
  blogSection.classList.add("article");
  blogSection.innerHTML = blog(articles[index].fields);
  blogsContainer.replaceChild(
    blogSection,
    document.querySelectorAll(".article")[2]
  );

  blogsContainer.replaceChild(
    secondBlog,
    document.querySelectorAll(".article")[1]
  );

  blogsContainer.replaceChild(
    firstBlog,
    document.querySelectorAll(".article")[0]
  );

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

  const blogSection = document.createElement("section");
  blogSection.classList.add("article");
  blogSection.innerHTML = blog(articles[index].fields);
  blogsContainer.replaceChild(
    blogSection,
    document.querySelectorAll(".article")[0]
  );

  blogsContainer.replaceChild(
    firstBlog,
    document.querySelectorAll(".article")[1]
  );

  blogsContainer.replaceChild(
    secondBlog,
    document.querySelectorAll(".article")[2]
  );

  clearActive();
  blogsControls
    .querySelectorAll("span")
    [articleIndex !== numArticles ? articleIndex : 0].classList.add("active");
});
