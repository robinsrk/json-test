fetch('https://randomuser.me/api/')
.then(res => res.json())
.then(data => {
    console.log(data.results[0]);
})











// document.getElementById("submit").addEventListener("click", function() {
//     const inputName = document.getElementById("inputName").value;
//     const inputText = document.getElementById("inputText").value;
//     const post = { title: inputName, body: inputText };
//     passToPost(post);
// })

// function passToPost(postInfo) {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(postInfo),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
// }
// function getUser(users) {
//     const userNames = users.map(user => user.username);
//     const ul = document.getElementById("usersContainer");

//     for (let i = 0; i < userNames.length; i++) {
//         const username = userNames[i];
//         const li = document.createElement("li");
//         li.innerText = username;
//         ul.appendChild(li);
//         // li.innerText = username;
//         // ul.appendChild(li);
//     }
// }
