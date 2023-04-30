// Get the element to display the search results
const searchResults = document.getElementById("search-results");

// Define a function to display the search results
function displaySearchResults(data) {
  // Clear the previous search results
  searchResults.innerHTML = "";

  // Check if the data is valid and has items
  if (data && data.webPages && data.webPages.value && data.webPages.value.length > 0) {
    // Loop through the items in the data
    for (let item of data.webPages.value) {
      // Create a list item element
      let listItem = document.createElement("li");

      // Create a link element
      let link = document.createElement("a");

      // Set the link attributes
      link.href = item.url;
      link.target = "_blank";
      link.textContent = item.name;

      // Append the link to the list item
      listItem.appendChild(link);

      // Append the list item to the search results
      searchResults.appendChild(listItem);
    }
  } else {
    // Display a message that no results were found
    searchResults.textContent = "No results found for your query.";
  }
}