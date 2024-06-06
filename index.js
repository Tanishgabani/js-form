document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let age = document.getElementById("age").value;
    let mobile = document.getElementById("mobile").value;
    let country = document.getElementById("country").value;

    if (
      name === "" ||
      address === "" ||
      age === "" ||
      mobile === "" ||
      country === ""
    ) {
      alert("all fields are reuired");
      return;
    }

    let userlist = document.getElementById("userList");

    let listItem = document.createElement("li");

    listItem.innerHTML = `
      <strong>Name:</strong> ${name}<br>
      <strong>Address:</strong> ${address}<br>
      <strong>Age:</strong> ${age}<br>
      <strong>Mobile:</strong> ${mobile}<br>
      <strong>Country:</strong> ${country}
      <button class="delete-button">Delete</button>
  `;

    userlist.appendChild(listItem);

    document.getElementById("userForm").reset();

    let deleteButton = listItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
      userList.removeChild(listItem);
    });
  });
