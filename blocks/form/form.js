export default async function decorate(block) {
    block.innerHTML = `
        <form id="feedback-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email ID:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="experience">Overall Experience:</label>
            <select id="experience" name="experience" required>
                <option value="Good">Good</option>
                <option value="Moderate">Moderate</option>
                <option value="Bad">Bad</option>
            </select>
            
            <label for="comments">Comments:</label>
            <textarea id="comments" name="comments" required></textarea>
            
            <button type="submit">Submit</button>
        </form>
        <p id="response-message" style="display:none;"></p>
    `;

    const form = block.querySelector("#feedback-form");
    const responseMessage = block.querySelector("#response-message");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://main--mysite--priyanka6800.aem.live/form.json", {
                method: "POST",
                headers: { "Content-Type": "form/json" },
                body: JSON.stringify(data),
            });
            
            if (response.ok) {
                responseMessage.textContent = "Feedback submitted successfully!";
                responseMessage.style.display = "block";
                form.reset();
            } else {
                responseMessage.textContent = "Failed to submit feedback. Please try again.";
                responseMessage.style.display = "block";
            }
        } catch (error) {
            responseMessage.textContent = "An error occurred. Please try again later.";
            responseMessage.style.display = "block";
        }
    });
}
