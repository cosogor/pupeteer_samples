// Сначала стоит взглянуть на документацию к puppeteer.
// Можно обратить внимание на то, что тут имеется огромное количество различных методов,
// которые позволяют нам не только имитировать щелчки мышью по элементам страниц,
// но и заполнять формы, и читать со страниц данные.
//https://habr.com/ru/company/ruvds/blog/341348/

const puppeteer = require('puppeteer');
async function getPic() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.setViewport({width: 1000, height: 500})
    await page.screenshot({path: 'google.png'});
    await browser.close();
}
getPic();

