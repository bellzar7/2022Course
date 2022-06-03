function goWork(isJobCompliete) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isJobCompliete) {
                resolve(5000)
            } else reject('no job no money')
        }, 500)
    })
}

function goToEgypt(moneyForTyre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (moneyForTyre < 450) {
                reject('ooops malo cash')
            } else {
                resolve(moneyForTyre - 450)
            }
        }, 250)
    })
}

function buySouvenirs(momey, souvenirCount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const totalPrice = souvenirCount * 10;
            if (totalPrice > momey) {
                reject('Not enough money to buy souvenirs')
            } else {
                resolve(`Here you go ${souvenirCount} items`)
            }
        }, 100)
    })
}


// goWork(true)
//     .then(resolve => {
//         console.log('cool, you zarobyv', resolve, '$');
//         return goToEgypt(resolve);
//     })
//     .then(moneyAfterTour => {
//         console.log('It was a great vacation', moneyAfterTour);
//    return  buySouvenirs(moneyAfterTour, 15)
//     })
//     .then(respons=> {
//         console.log(respons);
//     })
//     .catch(reject => {
//         console.log('sorry, bro, but', reject);
//     })
//
// async function worcation() {
//     try {
//         const money = await goWork(true);
//         console.log('cool, you zarobyv', money, '$');
//
//         const moneyAfterTour = await goToEgypt(money);
//         console.log('It was a great vacation', moneyAfterTour);
//
//         const item = await buySouvenirs(moneyAfterTour, 10000)
//         console.log(item);
//
//     } catch (e) {
//         console.log('woowoowoo fuck,', e);
//     }
// }
// worcation()