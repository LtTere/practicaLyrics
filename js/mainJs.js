
const myApi= 'https://musicdemons.com/api/v1-test/artist'

async function llamadaApi(){
    let artist= await fetch(myApi)
    artist = await artist.json()
    const baseArtist = artist.results[0]
   console.log(baseArtist)
    
}

llamadaApi()






