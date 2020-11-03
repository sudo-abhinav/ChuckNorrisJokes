function api() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => {
            return response.json();
        })
        .then((dataApi) => {
            var joke = dataApi.value;
            // console.log(joke);
            const textarea = document.querySelector("#data");
            textarea.innerHTML = joke;

        })
        .catch();
}

api();