function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json()) // Convert the response to JSON
    .then((json) => {
      renderBooks(json); // Call renderBooks with the parsed JSON
    })
    .catch((error) => console.error('Error fetching data:', error)); // Handle errors
}

// Render the book titles on the webpage
function renderBooks(books) {
  const bookList = document.getElementById('book-list'); // Assuming there's a <ul> or <div> with this ID
  bookList.innerHTML = ''; // Clear any existing content

  // Create list items for each book and append them to the book list
  books.forEach((book) => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name; // Set the text to the book's name
    bookList.appendChild(listItem); // Append the list item to the book list
  });
}

// Call fetchBooks when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
});



