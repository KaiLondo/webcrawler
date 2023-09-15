// Description: Report module for printing the report
//  Author: Lamin Bojang

function printReport(pages) {
    // ...
    console.log(`Found ${Object.keys(pages).length} pages`)   
    //sort pages by count
    const sortedPages = Object.entries(pages).sort((a, b) => b[1] - a[1]);

    console.log('Pages sorted by number of links:');
    console.log(sortedPages);
    
    for (const sortedPage of sortedPages) {
        console.log(`Found ${sortedPage[1]} links to page: ${sortedPage[0]}`);
    }
};


module.exports = { printReport };