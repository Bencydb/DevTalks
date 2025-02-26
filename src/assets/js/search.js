function filterByCategory() {
    var selectedCategory = document.getElementById("category").value;
    var devtalkItems = document.querySelectorAll(".devtalk-item");
    devtalkItems.forEach(function(item) {
        var itemCategory = item.getAttribute("data-category");
        if (selectedCategory === "all" || itemCategory === selectedCategory) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}


document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let searchTerm = document.getElementById("searchInput").value.toLowerCase();
    let devtalkItems = document.querySelectorAll(".devtalk-item");

    devtalkItems.forEach(function(devtalk) {
        let devtalkName = devtalk.querySelector("h2").textContent.toLowerCase();
        if (devtalkName.includes(searchTerm)) {
            devtalk.style.display = "block";
        } else {
            devtalk.style.display = "none";
        }
    });
});


document.getElementById("searchInput").addEventListener("input", function() {
    let searchTerm = this.value.toLowerCase();
    let devtalkItems = document.querySelectorAll(".devtalk-item");

    if (!searchTerm) {
        devtalkItems.forEach(function(devtalk) {
            devtalk.style.display = "block";
        });
    }
});
