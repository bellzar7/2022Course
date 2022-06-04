// function goWork(isJobCompliete) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isJobCompliete) {
//                 resolve(5000)
//             } else reject('no job no money')
//         }, 500)
//     })
// }
//
// function goToEgypt(moneyForTyre) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (moneyForTyre < 450) {
//                 reject('ooops malo cash')
//             } else {
//                 resolve(moneyForTyre - 450)
//             }
//         }, 250)
//     })
// }
//
// function buySouvenirs(momey, souvenirCount) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const totalPrice = souvenirCount * 10;
//             if (totalPrice > momey) {
//                 reject('Not enough money to buy souvenirs')
//             } else {
//                 resolve(`Here you go ${souvenirCount} items`)
//             }
//         }, 100)
//     })
// }
//
//
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

/*
function standUp(wakeup) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wakeup) {
                resolve(100);
                console.log('good morning, dear, you have 100power of energy');
            } else {
                reject('are you crazy, wake up')
            }
        },500)
    })
}

function goToTheGym(energy) {
    return new Promise(resolve => {
        setTimeout(()=>{
            const energyAfterGym = energy-40;
            resolve (energyAfterGym)
        },1000)
    })
}

function learnJS(energia){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (energia<60){
                reject('maan, you are so tired, go to sleep and comeback later');
            } else {resolve('yeah man, that wel be a great day, you are molodetc')}
        },300)
    })
}

standUp(true)
.then(value => {
    console.log('i must go to the gym');
    return goToTheGym(value)
})
.then(value => {
    console.log('good work at gym, you have',value,'% of energy');
    return learnJS(value)
})
.then(value => {
    console.log(value);
})
.catch(e=>{
    console.log('sorry, but', e);
})
.finally(()=> console.log('see you tomorrow'));
*/
