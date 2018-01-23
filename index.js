async function fetchAvatarUrl(userId){
    const response = await fetch (`https://catappapi.herokuapp.com/users/${userId}`)
    const data = await response.json()
    return data.imageUrl
    
    /*return fetch (`https://catappapi.herokuapp.com/users/${userId}`)
      .then(response => response.json())
      .then(data => data.imageUrl)*/
}

const result = fetchAvatarUrl(123)
// console.log(result)

function fetchCatAvatars(userId){
    return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            const promises = user.cats.map(catId =>
                fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
                .then(response => response.json())
                .then(catData => catData.imageUrl)
            )
            return Promise.all(promises)
        })
}

const secondResult = fetchCatAvatars(123)
console.log(secondResult)
