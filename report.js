// Description: Report module for printing the report
//  Author: Lamin Bojang

function printReport(pages) {
    //sort pages by count
    const sortedPages = Object.entries(pages).sort((a, b) => b[1] - a[1]);

    console.log(`Found ${Object.keys(pages).length} pages`)   
    console.log('Pages sorted by number of links:');
    // console.log(sortedPages);
    
    // Header
    maxUrlLength = 75
    console.log(`+${'-'.repeat(maxUrlLength + 2)}+-------+`);
    console.log(`| ${'URL'.padEnd(maxUrlLength)} | Count |`);
    console.log(`+${'-'.repeat(maxUrlLength + 2)}+-------+`);

    // for (const sortedPage of sortedPages) {
    //     console.log(`Found ${sortedPage[1]} links to page: ${sortedPage[0]}`);
    // }

    // Rows
  for (const sortedPage of sortedPages) {
    let count = sortedPage[1];
    let url = sortedPage[0];
    let urlSpaces = ' '.repeat(75 - url.length);
    let countSpaces = ' '.repeat(5 - count.toString().length);

    console.log(`| ${url}${urlSpaces} | ${count}${countSpaces} |`);
  }
};


module.exports = { printReport };