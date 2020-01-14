

const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=f0b52e549db24d9bb22777e582a0a0f0"

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}