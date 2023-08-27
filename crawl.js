module.exports =  {
    normalizeURL

}

function normalizeURL(url) {
    const normalUrl = url.replace(/(https?:\/\/)?(www\.)?/, '').replace(/\/?$/, '')
    return normalUrl
}

// console.log(normalizeURL("https://example.com/"))
// return only  blog.boot.dev/path

// url = "https://blog.boot.dev/path/"
//  console.log(url. replace(/(https?:\/\/)?(www\.)?/, ''). replace(/\/?$/, ''));

//  the code above will return blog.boot.dev/path/