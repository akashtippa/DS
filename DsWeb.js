describe("DragonSlayer WebApp",function(){


    
    it("DS Login", async() => {

        
        browser.driver.manage().window().maximize();
        await browser.get('https://app-staging.dragonslayertravel.com/onboarding/invite').then(function(){
            console.log("Page loaded");
        });
		    await element(by.linkText("Click here")).click();
            await element(by.name("email")).click();
            browser.sleep(2000);
            await element(by.name("email")).sendKeys('master99@yopmail.com');
            browser.sleep(2000);
            await element(by.name("password")).sendKeys('123456789');
            browser.sleep(2000);
            await element(by.xpath("//button[@type='submit']")).click();
            browser.sleep(3000);
            const chill = await element(by.xpath("//app-tours-layout/div/div[2]"));
            chill.click();


            

       

       
    });
    afterEach(function(){
        browser.sleep(3000);
        console.log("Finished")
    });


    
    


    

});