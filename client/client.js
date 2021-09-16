window.addEventListener('DOMContentLoaded', main);
import Logger from '../logger/index.js';

function main() {
    const button = document.querySelector('#buttonTest');
    Logger.setCustomerId('test_123');

    button.addEventListener('click', onButtonClick);
    document.querySelector('#errorButton').addEventListener('click', () => {
        document.querySelector('#result').textContent = 'fetching data...';

        getDummyData();
    })
}

async function getDummyData() {
    try {
        const result = await simulateFetchingData();
        
    } catch(err) {
        const errorLog = {
            methodName: 'getDummyData -> simulateFetchingData',
            data: {},
            type: 'Error',
            errorMessage: err
        }

        document.querySelector('#result').textContent = err;
        Logger.Log(errorLog);
    }
}

function simulateFetchingData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('got some error inside!')
        }, 3000);
    });
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
        Logger.Log({ methodName: '', errorMessage: 'some error occured', type: 'Error' });
    }, 3000)

    Logger.Log(message);
}

