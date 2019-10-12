// Without the Facade Pattern our getUser and getUserPosts function are more bloated & repetitive

function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json());
}

function getUserPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json());
}

getUsers().then(users => {
  users.forEach(user => {
    getUserPosts(user.id).then(posts => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});

// We'll need to build our own API down here and simplify the two functions above
