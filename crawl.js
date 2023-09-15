// Description: Crawl a website and return a list of all the pages on the site.
// Author: Lamin Bojang

const { JSDOM } = require('jsdom')

module.exports =  {
    normalizeURL,
    getURLsFromHTML,
    crawlPage,
}

function normalizeURL(url) {
    urlObject = new URL(url)

    const hosturl = urlObject.hostname.replace(/(www\.)?/, '')
    const pathUrl = urlObject.pathname.replace(/\/?$/, '')
    const normalUrl = `${hosturl}${pathUrl}`
    return normalUrl
}

function getURLsFromHTML(urlString, baseURL) {
    const urls = [];
    const dom = new JSDOM(urlString);
    const links = dom.window.document.querySelectorAll('a');
    for (const link of links) {
        let href = link.getAttribute('href');
        if (href.startsWith('/')) {
            href = baseURL + href; // add the base url to the href
        }
        try {
            const urlObj = new URL(href);
            urls.push(urlObj.href);
        }
        catch (err) {
            console.log(err.message);
        }
    }
    return urls;
}

async function crawlPage(baseURL, currentUrl, pages) {
    
            // Parse the base and current URLs
    const baseURLObject = new URL(baseURL);
    const currentUrlObject = new URL(currentUrl);

    // Check if the current URL is on the same domain as the base URL
    if (baseURLObject.hostname !== currentUrlObject.hostname) {
      console.log(`Skipping ${currentUrl}, different domain from base URL.`);
      return pages;
    }
    const normalCurrentUrl = normalizeURL(currentUrl);
    // Check if the current URL has already been crawled
    if (pages[normalCurrentUrl]) {
        console.log(`Skipping ${currentUrl}, already crawled.`);
        pages[normalCurrentUrl]++;
        return pages;
    }
    // Add the current URL to the set of crawled pages
    pages[normalCurrentUrl] = 1;
    console.log(`Crawling ${currentUrl}`);

    try {
    // Fetch the current URL
    const response = await fetch(currentUrl);
    
  
      if (!response.ok) {
        console.log(`HTTP error! status: ${response.status}`);
        return pages;
      }
  
      const contentType = response.headers.get('Content-Type');
  
      if (!contentType || !contentType.includes('text/html')) {
        console.log(`Not a HTML page! ${contentType}`);
        return pages;
      }
      
      const htmlBody = await response.text();

    // Get all the URLs on the current page
    const urls = getURLsFromHTML(htmlBody, baseURL);

    // Crawl each of those URLs
    for (const url of urls) {
        pages = await crawlPage(baseURL, url, pages);
    }
    
    } catch (err) {
      console.error(`error fetching webpage: ${err.message} on ${currentUrl}`);;
    }
    return pages;
  }
