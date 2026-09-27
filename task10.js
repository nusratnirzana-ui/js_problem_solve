function fetchWithTimeout(url, ms) {
    const fetchPromise = fetch(url);
    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request Timed Out")), ms)
    );
    return Promise.race([fetchPromise, timeoutPromise]);
}
fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 2000)
    .then(response => response.json())
    .then(data => console.log("Fetched Data:", data))
    .catch(error => console.error("Error:", error.message));