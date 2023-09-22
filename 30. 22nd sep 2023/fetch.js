const userList = document.getElementById("userList");

fetch("https://jsonplaceholder.typicode.com/todos")
.then(res => res.json())
.then(data => {
    data.forEach((e) => {
        const liElement = document.createElement("li");
        liElement.textContent = e.title;
        userList.appendChild(liElement);
    })
})
.catch(error => {
    console.error("Error fetching data:", error);
})
