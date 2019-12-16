import "babel-core/register";
import "babel-polyfill";

const gqlUrl = "http://localhost:9000/";
const preTag = document.querySelector("#preTag");

const fetchData = async () => {
    const response = await fetch(gqlUrl, {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            query: `
                query {
                    greeting
                }
            `
        })
    });

    preTag.innerHTML = JSON.stringify(await response.json());
}

fetchData();