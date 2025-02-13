export default async function decorate(block) {
    if (!block) {
        console.error("Block element not found");
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/products.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data);

        if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
            console.error("Fetched data is not an array or is empty:", data);
            return;
        }

        const products = data.data;
        let itemsPerPage = 20;
        let displayedItems = itemsPerPage;

        function renderTable() {
            block.innerHTML = ""; 
            const visibleProducts = products.slice(0, displayedItems);

    
            const table = document.createElement("table");
            table.classList.add("styled-table"); 

            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");

            const headers = Object.keys(visibleProducts[0]);
            headers.forEach((header) => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement("tbody");
            visibleProducts.forEach((item, index) => {
                const row = document.createElement("tr");
                row.classList.add(index % 2 === 0 ? "even-row" : "odd-row"); 
                Object.values(item).forEach((value) => {
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
            const paginationContainer = document.createElement("div");
            paginationContainer.classList.add("pagination-container");

            const totalLoaded = document.createElement("p");
            totalLoaded.textContent = `Showing ${displayedItems} of ${products.length} products`;
            totalLoaded.classList.add("total-text");

            const showMoreButton = document.createElement("button");
            showMoreButton.textContent = "Show More";
            showMoreButton.classList.add("show-more-btn");
            showMoreButton.style.display = displayedItems >= products.length ? "none" : "block";

            showMoreButton.addEventListener("click", () => {
                displayedItems += itemsPerPage;
                renderTable();
            });

            paginationContainer.appendChild(totalLoaded);
            paginationContainer.appendChild(showMoreButton);
            block.appendChild(paginationContainer);
        }

        renderTable();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
