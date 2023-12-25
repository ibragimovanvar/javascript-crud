const tableBody = document.querySelector("tbody");
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

// Read (display existing data)
function displayData() {
  // Simulate fetching data from a server or database
  const data = [];

  data.forEach((person) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const ageCell = document.createElement("td");
    const idCell = document.createElement("td");

    nameCell.textContent = person.name;
    ageCell.textContent = person.age;
    idCell.textContent = person.id;

    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(idCell);

    tableBody.appendChild(row);
  });
}

displayData();

// Create (add new data)
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Fix 1: Use 'else if' for conditional checks
  if (!ageInput.value) {
    alert("Please enter your age.");
  } else if (!nameInput.value) {
    // Use 'else if' to check name only if age is valid
    alert("Please enter your name.");
  } else {
    // Proceed with form submission if both inputs are valid
    const name = nameInput.value;
    const age = ageInput.value;

    // Simulate sending data to a server or database
    const nextId = tableBody.rows.length + 1;
    const newRow = document.createElement("tr");
    const nameCell = document.createElement("td");
    const ageCell = document.createElement("td");
    const idCell = document.createElement("td");
    const editCell = document.createElement("td");

    // Fix 2: Create buttons independently
    const buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit"; // Set button text content
    const buttonDelete = document.createElement("button");
    buttonDelete.textContent = "Delete";

    nameCell.textContent = name;
    ageCell.textContent = age;
    idCell.textContent = nextId;

    newRow.appendChild(nameCell);
    newRow.appendChild(ageCell);
    newRow.appendChild(idCell);
    editCell.appendChild(buttonEdit);
    editCell.appendChild(buttonDelete);
    newRow.appendChild(editCell);

    tableBody.appendChild(newRow);

    // Clear form inputs
    nameInput.value = "";
    ageInput.value = "";
  }
});

// Update and Delete operations will require additional logic for identifying
// specific rows and interacting with a server or database.
// ... (previous code remains the same)

// Update a row when the "Edit" button is clicked
tableBody.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "BUTTON" && target.textContent === "Edit") {
    const row = target.closest("tr");
    const nameCell = row.querySelector("td:first-child");
    const ageCell = row.querySelector("td:nth-child(2)");

    // Replace text content with input fields
    nameCell.innerHTML = `<input type="text" value="${nameCell.textContent}">`;
    ageCell.innerHTML = `<input type="number" value="${ageCell.textContent}">`;

    // Add a "Save" button to the row
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    row.appendChild(saveButton);

    // Handle "Save" button click to update data
    saveButton.addEventListener("click", () => {
      const updatedName = nameCell.querySelector("input").value;
      const updatedAge = ageCell.querySelector("input").value;

      // Simulate sending update to server or database

      // Replace input fields with updated text content
      nameCell.textContent = updatedName;
      ageCell.textContent = updatedAge;

      // Remove the "Save" button
      row.removeChild(saveButton);
    });
  }
});

// Delete a row when the "Delete" button is clicked
tableBody.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "BUTTON" && target.textContent === "Delete") {
    const row = target.closest("tr");
    const id = row.querySelector("td:last-child").textContent;

    if (confirm("Are you sure you want to delete this row?")) {
      // Simulate sending delete request to server or database

      tableBody.removeChild(row);
    }
  }
});
