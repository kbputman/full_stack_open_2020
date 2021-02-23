Cypress.Commands.add("login", ({ username, password }) => {
  cy.request("POST", "http://localhost:3001/api/login", {
    username,
    password,
  }).then((response) => {
    localStorage.setItem("loggedBlogAppUser", JSON.stringify(response.body));
    cy.visit("http://localhost:3000");
  });
});
Cypress.Commands.add("createBlog", ({ title, author, url, likes = 0 }) => {
  cy.request({
    url: "http://localhost:3001/api/blogs/",
    method: "POST",
    body: { title, author, url, likes },
    headers: {
      Authorization: `bearer ${
        JSON.parse(localStorage.getItem("loggedBlogAppUser")).token
      }`,
    },
  });
  cy.visit("http://localhost:3000");
});

Cypress.Commands.add("createUser", ({ name, username, password }) => {
  cy.request({
    url: "http://localhost:3001/api/users/",
    method: "POST",
    body: { name, username, password },
  });
  cy.visit("http://localhost:3000");
});
