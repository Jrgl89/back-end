function onSubmit() {
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    displayComment(name, comment);
}

function displayComment(name, comment) { 
    const comments = document.getElementById("comments");
    
    comments.innerHTML += `
    <div class="flex">
    <span class="font-bold">${name}</span> :
    ${comment}
    </div>
    `;
}