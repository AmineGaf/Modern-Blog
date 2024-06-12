document.addEventListener("DOMContentLoaded", () => {
    // get all category name
    const categoryItems = document.querySelectorAll(".category-item");
    // Get all post items
    const postItems = document.querySelectorAll(".post-item");

    // Add click event listeners to each category item
    categoryItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Get the selected category
        const category = item.getAttribute("data-category");
        // Loop through each post item and filter based on the selected category
        postItems.forEach((post) => {
          if (
            post.getAttribute("data-category") === category ||
            category === "All"
          ) {
            post.style.display = "flex";
          } else {
            post.style.display = "none";
          }
        });
      });
    });
  });