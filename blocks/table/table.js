fetch("https://main--mysite--priyanka6800.aem.page/products.json")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Fetched Data:", data);
  })
  .catch(error => {
    if (error.name === "TypeError") {
      console.error("Network error or CORS issue:", error);
    } else {
      console.error("Error fetching data:", error);
    }
  });
