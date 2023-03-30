//Selectors
const btn = document.querySelector('#generate');
const avatar = document.querySelector('.rounded-full');

//Events
btn.addEventListener('click',fetchUser);

//GET request to the random user API
function fetchUser() {
    showSpinner();
    fetch('https://randomuser.me/api')
    .then((res) => res.json())
    .then((user) => {
        hideSpinner();
        userInfo(user.results[0]);
    });
}

//gets the detailed information of the returned random user on calling the API
function userInfo(randomUser) {
    const user = document.querySelector('#user');
    document.body.style.backgroundColor = randomUser.gender === 'female' ?  "purple" : "blue";
    user.innerHTML = `
    <div class="flex justify-between">
        <div class="flex">
            <img
            class="w-48 h-48 rounded-full mr-8"
            src="${randomUser.picture.large}"
            />
            <div class="space-y-3">
            <p class="text-xl">
                <span class="font-bold">Name: </span>${randomUser.name.first} ${randomUser.name.last}
            </p>
            <p class="text-xl">
                <span class="font-bold">Email: </span> ${randomUser.email}
            </p>
            <p class="text-xl">
                <span class="font-bold">Phone: </span> ${randomUser.phone}
            </p>
            <p class="text-xl">
                <span class="font-bold">Location: </span> ${randomUser.location.city} ${randomUser.location.country}
            </p>
            <p class="text-xl"><span class="font-bold">Age: </span> ${randomUser.dob.age}</p>
            </div>
        </div>
    </div>
    `;
}

function showSpinner() {
    document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
    document.querySelector('.spinner').style.display = 'none';
}

fetchUser();