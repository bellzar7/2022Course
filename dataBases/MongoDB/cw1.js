/*
db.users.find()
//знайшли все в юзерс

db.users.insertOne({car: 'BMW', model: 's3'})
//додали стовбець в таблицю кар і модел

db.users.find({gender: 'female'})
//шукаємо за гендером

db.users.find({_id: ObjectId('61c349812af8d3c1b80e3852')})
// за айді шукаємо, потрібно шукати саме за айді:обджект айді: і його айді

db.users.find({gender: 'female', rating: 2})
//шукаємо тих в кого гендер фемейл та рейтинг 2

db.users.find(
    {gender: 'female', rating: 2},
    {_id: 0, name: 1, age: true}
)
//Знайшли юзерів з gender:'female', rating:2 і вивели в інфу про них тільки {name:1, age:true}
db.users.find(
    {gender: 'female', rating: 2},
    {_id: 0, address: false}
)
//Знайшли юзерів з gender:'female', rating:2 і вивели всю інфу про їх окрім {_id:0, address:false}
db.users.find(
    {gender: 'female', rating: 2},
    {name: 1, _id: false}
)
//Знайшли юзерів з gender:'female', rating:2 і вивели тільки нейм і айді потрібно прописувати шоб вимкнути

db.users.find(
    {
        $or: [
            {rating: 2},
            {rating: 5},
            {age: 12}
        ]
    }
)
// оператор  $or, знаходимо юзерів або з {rating:2} або з {rating:5} або з {age:12}
db.users.find(
    {
        $and: [
            {rating: 2},
            {age: 34}
        ]
    }
)
// оператор  $and, знаходимо юзерів в кого {rating:2} і {age:34}

db.users.find({age: {$in: [25, 12, 26]}})
// шукаємо юзерів в якого вік відповідає тим числам, що в масиві
db.users.find({age: {$nin: [25, 12, 26]}})
// шукаємо юзерів в якого вік не відповідає тим числам, що в масиві
db.users.find({
    age: {
        $not: {
            $in: [25, 26]
        }
    }
})
// шукаємо юзерів в якого вік не відповідає тим числам, що в масиві

db.users.find({name: /^a/i})
//шукаємо ім'я яке починається на а
db.users.find({name: /a$/i})
//шукаємо ім'я яке закінчується на а
db.users.find({name: /^a/i})
//шукаємо ім'я яке починається на а, і - в кінці для того щоб неважливо який регістр було
db.users.find({name: /^.{2}t/i})
//шукаємо ім'я яке пропускає перші 2 букви і третя має бути т
db.users.find({name: /^k.*a$/i})
//шукаємо ім'я яке починається на к і закінчується на а
db.users.find({name: /.*v.*!/i})
//шукаємо ім'я яке має в середині хоч одну v

db.users.find().sort({rating: 1})
// посортували за рейтингом від меншого до більшого
db.users.find().sort({rating: -1})
// посортували за рейтингом від більшого до меншого
db.users.find().sort({rating: 1, age: -1})
// посортували за рейтингом від меншого до більшого,
// а якщо рейтинги співпадають, то сортуємо за ейджем від більшого до меншого

db.users.find().sort({rating: 1, age: -1}).limit(2)
// посортували за рейтингом від меншого до більшого,
// а якщо рейтинги співпадають, то сортуємо за ейджем від більшого до меншого і взяли перших двох
db.users.find().sort({rating: 1, age: -1}).limit(2).skip(2)
// посортували за рейтингом від меншого до більшого,
// а якщо рейтинги співпадають, то сортуємо за ейджем від більшого до меншого,
// пропустили перших двох і взяли наступних двох

db.users.find({rating: {$gt: 2}}) // >
// шукаємо юзерів в яких рейтинг більше ніж 2
db.users.find({rating: {$gte: 2}}) // >=
// шукаємо юзерів в яких рейтинг більше-рівне ніж 2
db.users.find({rating: {$lt: 2}}) // <
// шукаємо юзерів в яких рейтинг менше ніж 2
db.users.find({rating: {$lte: 2}}) // <=
// шукаємо юзерів в яких рейтинг менше-рівне ніж 2
db.users.find({rating: {$ne: 2}}) // !=
// шукаємо юзерів в яких рейтинг не дорівнює 2
db.users.find({rating: {$eq: 2}}) // ==
// шукаємо юзерів в яких рейтинг дорівнює 2


db.users.updateOne(
    {gender: 'male'},
    {$set: {gender: 'animal'}}
)
//першому юзеру який попадеться з {gender:'male'} ми міняємо {$set:{gender:'animal'}},
// без $set все зітреться і запише тільки {gender:'animal'}
db.users.updateMany(
    {gender: 'male'},
    {$set: {gender: 'animal'}}
)
//всім юзерам в з {gender:'male'} ми міняємо {$set:{gender:'animal'}},
// без $set все зітреться і запише тільки {gender:'animal'}


db.users.find({parents: {$size: 2}}) // только цифра
//шукаємо всіх юзерів в яких розмір масива з парентсами = 2
db.users.find({parents: {$exists: 0}})
//шукаємо юзерів в яких поля парентс немає взагалі

db.users.updateMany(
    {parents: {$exists: 1}},
    {$set: {'parents.$[]': 'Не знаю'}}  // .$[] обращение ко всем елементам массива
)
//всім в кого є батьки, поміняли назву кожного батька на 'Не знаю'

db.users.updateMany(
    {_id: ObjectId("61c357e82af8d3c1b80e385f")},
    {
        $set: {
            parents: [{father: {name: 'Kiril', age: 88}}, {father: {name: 'Leha', age: 56}}, {
                mother: {
                    name: 'Anna',
                    age: 75
                }
            }]
        }
    }
)
//всім юзерам з цим айді міняємо поле парентс на те, що записано вище

db.users.updateOne({_id: ObjectId("62a8d5c08aaef4581bbe4a50")},
    {$push: {studying: 'node'}}
)
//юзеру з цим айді, запушили в масив стадінг значення 'noda'
db.users.updateOne({_id: ObjectId("62a8d5c08aaef4581bbe4a50")},
    {$pull: {studying: 'java'}}
)
//юзеру з цим айді, видалили з масиву стадінг значення 'java'

db.users.find({'address.city': 'Kyiv'})
//шукаємо юзера в якого адреса міста Київ
db.users.find({'address.city': /lviv/i})
//шукаємо юзера в якого адреса міста Львів, записали регуляркою щоб було пофіг на регістр

db.users.deleteMany({_id:ObjectId("62a8d5c08aaef4581bbe4a50")})
//видалили всіх юзерів з цим айді
db.users.deleteMany({_id:ObjectId("62a8d5c08aaef4581bbe4a50")})
//видалили юзера з цим айді

db.users.find({'parents.1.father.age': 56})
db.users.find({parents: 'Masha'})
db.users.find({'parents.father.name': 'Kiril'})

*/
