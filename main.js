
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

        // for (const [url, data] of Object.entries(pages)) {
        //     console.log(`Found ${data.count} links to page: ${url}`);
        // }
        printReport(pages);

    }
    catch (error){
        console.error('There was a problem:', error);
    }

}
main();