async function fetchUserData() {
  const dataContainer = document.getElementById("api-data");
  const apiurl = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(apiurl);
    console.log(response);
    users = await response.json();
    console.log(users);
    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");

    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    dataContainer.appendChild(userList);
  } catch {
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  fetchUserData();
});
