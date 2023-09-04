const {test, expect} = require ('@jest/globals')
const { normalizeURL } = require ('./crawl.js')

function testNormalizeUrl (input, expected) {
    test(`normalize ${input}`, () => {
        expect(normalizeURL (input)).toBe(expected)
    })
}

testNormalizeUrl('http://example.com/', 'example.com')
testNormalizeUrl("https://blog.boot.dev/path/", 'blog.boot.dev/path')
testNormalizeUrl('https://developer.mozilla.org/en-US/blog/', 'developer.mozilla.org/en-US/blog')
testNormalizeUrl("https://www.twitch.tv/thePrimeagen/about/", "twitch.tv/thePrimeagen/about")