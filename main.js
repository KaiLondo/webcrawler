
// Description: This is the main file of the crawler.
// It is responsible for starting the crawling process and printing the report.
// Author: Lamin Bojang

const { crawlPage } = require('./crawl');
const { printReport } = require('./report');

async function main(){
    if (process.argv.length < 3){
        console.log('Please enter url. Usage: node main.js <example.com>');
        process.exit(0);
    }
    if (process.argv.length > 3){
        console.log('Please enter only one url. Usage: node main.js <example.com>');
        process.exit(0);
    }
    try {

        const baseURL = new URL(process.argv[2]);
        console.log(`crawler is starting at ${baseURL}`);
        
        const pages = await crawlPage(baseURL, baseURL, {});
        console.log('Crawling completed succesfully.');

        printReport(pages);

    }
    catch (error){
        console.error('There was a problem:', error);
    }

}
main();