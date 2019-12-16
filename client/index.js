const gqlUrl = "http://localhost:9000/"

async function fetchData() {
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

    const responseBody = await response.json();
    console.log(responseBody);
}

fetchData();