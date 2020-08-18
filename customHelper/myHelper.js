const Helper = codecept_helper;
var fs = require('fs');

class MyHelper extends Helper {
    
    fillIframeField(text){
        const ele = this.helpers['Protractor'].browser.findElement(By.id("rte"));
        ele.sendKeys(text);
    }

    attachTheFile(path){
        const ele = this.helpers['Protractor'].browser.findElement(By.id("pictures"));
        ele.sendKeys(path);
    }

    // _passed(){
    //     if (fs.existsSync('wynik.txt')){
    //         fs.appendFile('wynik.txt', '\nOferta dodana prawidłowo', (err) => {
    //           if (err) throw err;
              
              
    //       });
    //     }
    // }
}
module.exports = MyHelper;