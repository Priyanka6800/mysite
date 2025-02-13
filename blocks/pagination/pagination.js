export default async function decorate(block) {
    try {
        const response = await fetch("http://localhost:3000/products.json");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        const products = data.data;

        if (!Array.isArray(products) || products.length === 0) {
            console.error("No products found.");
            return;
        }

        let itemsPerPage = 20;
        let displayedItems = itemsPerPage;

        function renderTable() {
            block.innerHTML = ""; 
            const visibleProducts = products.slice(0, displayedItems);

            const table = document.createElement("table");
            table.classList.add("styled-table");

            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");

            Object.keys(products[0]).forEach(header => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });

            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement("tbody");
            visibleProducts.forEach(item => {
                const row = document.createElement("tr");
                Object.values(item).forEach(value => {
                    const td = document.createElement("td");
                    td.textContent = value;
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            });

            table.appendChild(tbody);
            block.appendChild(table);
            renderPagination();
        }

        function renderPagination() {
            const paginationDiv = document.createElement("div");
            paginationDiv.classList.add("pagination-container");

            const totalText = document.createElement("p");
            totalText.textContent = `Showing ${displayedItems} of ${products.length} products`;
            totalText.classList.add("total-text");

            const showMoreButton = document.createElement("button");
            showMoreButton.textContent = "Show More";
            showMoreButton.classList.add("show-more-btn");
            showMoreButton.style.display = displayedItems >= products.length ? "none" : "block";

            showMoreButton.addEventListener("click", () => {
                displayedItems += itemsPerPage;
                renderTable();
            });

            paginationDiv.appendChild(totalText);
            paginationDiv.appendChild(showMoreButton);
            block.appendChild(paginationDiv);
        }

        renderTable();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
