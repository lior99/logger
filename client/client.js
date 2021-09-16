window.addEventListener('DOMContentLoaded', main);
import Logger from '../logger/index.js';

function main() {
    const button = document.querySelector('#buttonTest');
    Logger.setCustomerId('test_123');

    button.addEventListener('click', onButtonClick);
}

function onButtonClick(event) {
    const msTime = new Date().getTime();

    const message = {        
            methodName: 'method_name_goes_here',
            data: {
                params: [
                    { param: [] },
                    { param: 'user should get some data' }     
                ]                
            }
    }

    setTimeout(() => {
        // simulate async operation
        Logger.Log({ methodName: '', error: 'some error occured' });
    }, 3000)

    Logger.Log(message);
}

