const btn = document.getElementById('jokeBtn')
const joke = document.getElementById('joke')


btn.addEventListener('click', getJokeFunc)
getJokeFunc()

//Arrow Function
// const getJokeFunc = async () => {
//     const config = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     const res = await fetch("https://icanhazdadjoke.com", config)
//     const data = await res.json();

//     console.log(data)
//     joke.textContent = data.joke;

// }


//Traditional Function
async function getJokeFunc() {
        const config = {
        headers: {
            Accept: "application/json"
        }
    }

    const res = await fetch("https://icanhazdadjoke.com", config)
    const data = await res.json();

    console.log(data)
    joke.textContent = data.joke;
}


