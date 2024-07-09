import { expect, Page} from "@playwright/test";

export default class Assert {

    constructor(private page: Page){}

    async assertTitle(title: string){
        await expect(this.page).toHaveTitle(title);
    }

    async asserttitleContains(title: string){
       const pagetitle = await this.page.title();
       expect(pagetitle).toContain(title)
    }

    async asseturl(url: string){
        await expect(this.page).toHaveURL(url);
    }

    async asserturlContains(title: string){
        const pageURL = this.page.url();
        expect(pageURL).toContain(title)
    }
}