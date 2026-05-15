const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    productCards.forEach(function (card) {
      const productText = card.textContent.toLowerCase();

      if (productText.includes(searchText)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}