const createNode = (el) => {
    return document.createElement(el);
}
const append = (parent, el) => {
    return parent.appendChild(el);
}

const getUsers = async () => {
    let response = await fetch('https://randomuser.me/api/?results=12');
    let data = response.json();
    return data;
}

getUsers()
    .then(data => {
        let users = data.results;
        users.map((user) => {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');

            li.classList.add('col-sm-12', 'col-md-4', 'col-lg-3');
            img.src = user.picture.medium;
            span.innerHTML = `${user.name.first} ${user.name.last}`;

            append(li, img)
            append(li, span)
            append(document.getElementById('users'), li);
        });

    })