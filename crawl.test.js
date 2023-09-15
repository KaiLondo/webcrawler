const {test, expect} = require ('@jest/globals')
const { normalizeURL, getURLsFromHTML } = require ('./crawl.js')

function testNormalizeUrl (input, expected) {
    test(`normalize url ${input} to become => ${expected}`, () => {
        expect(normalizeURL (input)).toBe(expected)
    })
}

testNormalizeUrl('http://example.com/', 'example.com')
testNormalizeUrl("https://blog.boot.dev/path/", 'blog.boot.dev/path')
testNormalizeUrl('https://developer.mozilla.org/en-US/blog/', 'developer.mozilla.org/en-US/blog')
testNormalizeUrl("https://www.twitch.tv/thePrimeagen/about/", "twitch.tv/thePrimeagen/about")


// Test getURLsFromHTML function
test('getURLsFromHTML', () => {
    const htmlBody = `
    <html>
        <body>
            <a href="https://blog.boot.dev"><span>Go to Boot.dev</span></a>
        </body>
    </html>
    `
    const urls = getURLsFromHTML(htmlBody, 'https://boot.dev')
    expect(urls).toEqual(['https://blog.boot.dev'])
})

test('getURLsFromHTML', () => {
    const htmlBody = `
<html>
    <body>
        <a href="https://blog.boot.dev"><span>Go to Boot.dev</span></a>
        <a href="/about"><span>About Boot.dev</span></a>
        <a href="/contact"><span>Contact Boot.dev</span></a>
    </body>
</html>
`
    const urls = getURLsFromHTML(htmlBody, 'https://boot.dev')
    expect(urls).toEqual(['https://blog.boot.dev', 'https://boot.dev/about', 'https://boot.dev/contact'])
})