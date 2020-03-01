const Helper = codecept_helper;

class MyHelper extends Helper {

    fillIframeField(text){
        const ele = this.helpers['Protractor'].browser.findElement(By.id("rte"));
        ele.sendKeys(text);
    }

    attachTheFile(path){
        const ele = this.helpers['Protractor'].browser.findElement(By.id("pictures"));
        ele.sendKeys(path);
    }
}
module.exports = MyHelper;