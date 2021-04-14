export const getGitfs = async (category) =>{

    const searchValue = category;
    const maxResult = 10;
    const apiKey = 'Vm0McadpjPG92fGehcaEZjHbyYnZz0tc'

    const url = `https://api.giphy.com/v1/gifs/search?q=${searchValue}&limit=${maxResult}&api_key=${apiKey}`;
    // const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${maxResult}&api_key=${apiKey}`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });
    return gifs;
}