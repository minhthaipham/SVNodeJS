const api = "https://mocki.io/v1/18383ada-2d32-4a2b-b194-000a95056da8"

const getApi = () => {
    return fetch(api)
        .then(response => response.json())
        .then(data => {
            return data
        })
}