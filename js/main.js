
const generateUser = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json()).then(data => displayUser(data.results[0]))
}

const displayUser = (user) => {
        const {gender,picture,name,email,phone,location,dob} = user;
        //change background conditionally based upon female or male value of gender object
        gender === "female" ? document.body.style.backgroundColor = "var(--dark-purple)"
            : document.body.style.backgroundColor = "var(--dark-blue)";
        //iterate over database results object
        document.querySelector('.name').innerHTML = `${name.first} ${name.last}`;
        document.querySelector('.email').innerHTML = `${email}`;
        document.querySelector('.phone').innerHTML = `${phone}`;
        document.querySelector('.location').innerHTML = `${location.country}`;
        document.querySelector('.age').innerHTML = `${dob.age}`;
        document.querySelector('.image').innerHTML = `<img src="${picture.large}" alt="${name.first}"/>`
}

const genUserBtn = document.querySelector('button');
genUserBtn.addEventListener('click',generateUser);

generateUser();