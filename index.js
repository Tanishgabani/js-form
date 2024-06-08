document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const ul = document.getElementById("userList");

  // Add event listener to the form
  form.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const addressInput = document.getElementById("address");
    const ageInput = document.getElementById("age");
    const mobileInput = document.getElementById("mobile");

    const name = nameInput.value.trim();
    const address = addressInput.value.trim();
    const age = ageInput.value.trim();
    const mobile = mobileInput.value.trim();

    // Validate inputs
    if (!name || !address || !age || !mobile) {
      return alert("All fields are required");
    }

    // Create list item
    const listItem = document.createElement("li");
    listItem.innerHTML = `
          <strong>Name:</strong> ${name}<br>
          <strong>Address:</strong> ${address}<br>
          <strong>Age:</strong> ${age}<br>
          <strong>Mobile:</strong> ${mobile}<br>
          <button class="delete-btn">Delete</button>
      `;
    ul.appendChild(listItem);

    // Clear form inputs
    nameInput.value = "";
    addressInput.value = "";
    ageInput.value = "";
    mobileInput.value = "";

    // Add event listener to delete button
    const deleteBtn = listItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      ul.removeChild(listItem);
    });
  }
});
