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
  
      
      const table = document.createElement("table");
      table.style.borderCollapse = "collapse";
      table.style.width = "100%";
  
      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");
      headerRow.style.backgroundColor = "#f2f2f2";
  
      const headers = Object.keys(products[0]); 
      headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header;
        th.style.border = "1px solid black";
        th.style.padding = "8px";
        th.style.textAlign = "left";
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);
  
      
      const tbody = document.createElement("tbody");
      products.forEach((item) => {
        const row = document.createElement("tr");
        Object.values(item).forEach((value) => {
          const td = document.createElement("td");
          td.textContent = value;
          td.style.border = "1px solid black";
          td.style.padding = "8px";
          row.appendChild(td);
        });
        tbody.appendChild(row);
      });
      table.appendChild(tbody);
  
     
      block.innerHTML = ""; 
      block.appendChild(table);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  