describe('Promise example', function(){
    

    it('understanding promise', function(){

        browser.driver.manage().window().maximize();
        browser.get("https://app-staging.dragonslayertravel.com/onboarding/invite");
        browser.sleep(3000);
        

     
        var li = element(by.xpath("/html/body/app-root/app-invite/div/div/div[1]/div[2]/form/div/span/a")).click();
        // var li = element(by.partialLinkText('Click here')).click();
        // expect(li.getText()).toBe('Click here');
        browser.sleep(3000);
        element(by.name("email")).click();
        element(by.name("email")).sendKeys('master99@yopmail.com');
        element(by.name("password")).sendKeys('123456789');
        element(by.buttonText("Log In")).click();
        
        browser.sleep(4000);
        

        

       
        var li = element(by.xpath("//app-tours-layout/div/div[2]")).click();
      
        browser.sleep(2000);
        var li = element(by.xpath("//app-tours-layout/div/div[3]")).click();
        expect(li.getText()).toBe('Cultural');
        browser.sleep(2000);
        var li = element(by.xpath("//app-tours-layout/div/div[4]")).click();
        expect(li.getText()).toBe('Active');
        browser.sleep(2000);
        var li = element(by.xpath("//app-tours-layout/div/div[5]")).click();
        expect(li.getText()).toBe('Adventure');
        browser.sleep(2000);
        element(by.xpath("//app-tours-layout/div/div[6]")).click();
     
        browser.sleep(2000);
        //A La Carte Travel
        var li = element(by.xpath("//div[2]/div/span[2]")).click();
        expect(li.getText()).toBe('A La Carte Travel');
        browser.sleep(2000);
        var li = element(by.xpath("//app-alacart-layout/div/div[2]")).click();
        expect(li.getText()).toBe('Hotels');
        browser.sleep(2000);
        var li = element(by.xpath("//app-alacart-layout/div/div[3]")).click();
        expect(li.getText()).toBe('Dining');
        browser.sleep(2000);

        
        element(by.id("tips_tab")).click();
        browser.sleep(2000);
        element(by.xpath("//div[2]/div/p")).click();
        browser.sleep(2000);
        element(by.name("title")).sendKeys("Mytips");
        element(by.name("recommendedTimeToVisit")).element(by.cssContainingText('option', 'Summer')).click();
        browser.sleep(2000);
        element(by.name("category")).element(by.cssContainingText('option', 'Chill')).click();
        browser.sleep(2000);
        element(by.id("search_places")).sendKeys("India")
        browser.sleep(2000);
        //element(by.xpath("/html/body/app-root/app-application-layout/app-tips/div/div/div/div[2]/div[1]/form/div[1]/ng4geo-autocomplete/div/ul/li[1]/a")).click();
        element(by.xpath("(//*[contains(text(),'India')])[1]")).click();
        browser.sleep(4000)
        
        element(by.buttonText("Post Now")).click();
        browser.sleep(3000);



         //Local Tab
        
        element(by.id("local_tab")).click();
        browser.sleep(2000);
        element(by.xpath("//app-local-layout/div/div/div[2]")).click();
        browser.sleep(2000);
        element(by.xpath("//app-local-layout/div/div/div[3]")).click();
        browser.sleep(2000);
        element(by.xpath("//app-local-layout/div/div/div[4]")).click();
        browser.sleep(2000);
        element(by.id("local_tab")).click();
        browser.sleep(2000);
        element(by.xpath("(//button[@type='button'])[2]")).click();
        browser.sleep(2000);
        element(by.id("local_tab")).click();
        browser.sleep(2000);
        element(by.xpath("(//button[@type='button'])[2]")).click();
        browser.sleep(2000);
        element(by.name("Dallas")).click();
        browser.sleep(2000);
        element(by.xpath("(//button[@type='button'])[2]")).click();
        browser.sleep(2000);
        element(by.id("city_list")).sendKeys("Aspen");
        browser.sleep(2000);

        element(by.name("Aspen")).click();
        browser.sleep(2000);
    });
});
