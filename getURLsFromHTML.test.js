const {test, expect} = require ('@jest/globals')

const { JSDOM } = require("jsdom");
const { getURLsFromHTML } = require('./crawl.js');  // Import your function here

test('should extract URLs from HTML', () => {
  const htmlBody = `
    <html>
        <body>
            <a href="https://blog.boot.dev"><span>Go to Boot.dev</span></a>
            <a href="/about"><span>About Boot.dev</span></a>
        </body>
    </html>
  `;

  const baseURL = 'https://boot.dev';
  
  const expected = ['https://blog.boot.dev/', 'https://boot.dev/about'];
  const result = getURLsFromHTML(htmlBody, baseURL);
  
  expect(result).toEqual(expected);
});
