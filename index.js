async function fetchAvatarUrl(userId){
    const response = await fetch (`https://catappapi.herokuapp.com/users/${userId}`)
    const data = await response.json()
    return data.imageUrl
    
    /*return fetch (`https://catappapi.herokuapp.com/users/${userId}`)
      .then(response => response.json())
      .then(data => data.imageUrl)*/
}

const result = fetchAvatarUrl(123)

async function fetchCatAvatars(userId){
    const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
    const user = await response.json()
    return await Promise.all(user.cats.map(async function(catId){
        const response = await fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
        const catData = await response.json()
        return catData.imageUrl
    }))
    /*const catImageUrls = []
    for(const catId of user.cats){
        const response = await fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
        const catData = await response.json()
        catImageUrls.push(catData.imageUrl)
    }

    return catImageUrls*/
    /* 
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
    */
}

const secondResult = fetchCatAvatars(123)

