module.exports =  {
    normalizeURL

}

function normalizeURL(url) {
    url = new URL(url)
    const host = url.hostname
    const path = url.pathname
    const hosturl = url.host.replace(/(www\.)?/, '')
    const pathUrl = url.pathname.replace(/\/?$/, '')
    const normalUrl = `${hosturl}${pathUrl}`
    return normalUrl
}

