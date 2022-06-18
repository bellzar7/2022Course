/*
db.students.find()

// робота з масивами
db.students.find({lessons: {$all: ['english', 'mathematics']}}) // знайшли студіків в яких в лессонах є і інгліш і математика
db.students.find({'lessons.0': 'english'}) //знайшли студіків в яких в лессонах під 0 індексом інгліш
db.students.find({}, {lessons: {$slice: 2}}) //знайшли всіх за доп {}, потім сказали, що в масиві лессонах показувати тільки перших два елементи
db.students.find({lessons: {$size: 2}}) // знайшли всіх студіків в яких масив лессонс розмір має розмір - 2

db.students.updateOne(
    {_id: ObjectId('62ab7903f470af547b38764b')},
    {$push: {lessons: 'python'}}                  //ми в студента з таким айді, в його масив лессонс запушили ще один елемент - 'pythons'
)
db.students.updateOne(
    {_id: ObjectId('62ab7903f470af547b38764b')},
    {$push: {lessons: ['pythons', 'js']}}          //ми в студента з таким айді, в його масив лессонс запушили ще один масив з елементами
)

db.students.updateOne(
    {_id: ObjectId('62ab7903f470af547b38764b')},
    {$pop: {lessons: -1}}          //ми в студента з таким айді, з його масиву лессонс видалили перший елемент
)
db.students.updateOne(
    {_id: ObjectId('62ab7903f470af547b38764b')},
    {$pop: {lessons: 1}}          //ми в студента з таким айді, з його масиву лессонс видалили останній елемент
)

db.students.updateOne(
    {_id: ObjectId('62ab7903f470af547b38764b')}, //як видалити елемент з масиву 1 крок
    {$unset: {'lessons.2': 0}}         //ми в студента з таким айді, з його масиву лессонс елемент під індексом 2 перетворили на null
)
db.students.updateOne(
    {_id: ObjectId('62ab7903f470af547b38764b')}, //як видалити елемент з масиву 2 крок
    {$pull: {lessons: null}}          //ми в студента з таким айді, з його масиву лессонс видалили елемент зі значенням null
)
db.students.updateOne(
    {_id: ObjectId('62ab7903f470af547b38764b')}, //якщо це не масив, а звертаємось до ключа, то $unset видаляє повністю ключ
    {$unset: {name: 0}}
)

db.students.find()
db.students.updateOne(
    {_id: ObjectId('62ab7903f470af547b38764b')},
    {$addToSet: {lessons: 'js'}} //$addToSet добавляє в масив елемент тільки якщо його немає в цьому масиві, якщо вже є, то нічо не робить
)

db.students.updateOne(
    {_id: ObjectId('62ab7903f470af547b38764b')},         //добавляємо в масив декілька елементів, пушимо в масив лессонс масив зі значеннями,
    {$push: {lessons: {$each: ['java', 'python', 'mysql']}}} //але прописуємо $each і цей оператор буде брати по черзі кожен елемент в масиві який ми прописали
    // і додавати до масиву лессонс і виходить, що ми пушимо не масив, а декілька елементів
)
db.students.updateOne(
    {_id: ObjectId('62ab7903f470af547b38764b')},
    {$addToSet: {lessons: {$each: ['java', 'python', 'mysql']}}} //теж саме, що і зверху але не пушимо, а $addToSet
)

db.students.find({parents: {$exists: 1}, 'parents.profession': null}) //знайшли студіків в яких хоч один батько не працює
db.students.updateMany(
    {parents: {$exists: 1}, 'parents.profession': null}, //вибрали всіх в кого є парентс і і нема профешн у парентса
    {$set: {'parents.$[item].profession': 'waiter'}},    //$[item] - так звернулись до кожного об'єкту масива парентс до його профешнс і сетнули йому офіціанта
    {arrayFilters: [{'item.profession': null}]}          //але сетнули не всім, а за допомогою arrayFilters відфільтрували тільки тих, в кого не було взагалі професії і ним додали профешн веітер
)
db.students.find({parents: {$exists: 1}})

db.students.aggregate([
    {$addFields:{  //$addFields - створює віртуальне поле яке не зберігається в базі данних
            countOfLessons:{$cond:{if:{$isArray:'$lessons'}, then:{$size:'$lessons'}, else:0}} //$cond - записує данні з якоїсь умови.
            // Дослівно ми записали: якщо (іф), лессонс явлається масивом($isArray:'$lessons'), то буде countOfLessons = розміру масиву лессонс(then:{$size:'$lessons'}), а якщо лессонс не масив або інші випадки, то буде = 0
        }},
    {$match:{countOfLessons:{$gt:2}}},  //знайшли студіків в яких кількість елементів в масиві лессонс більше ніж 2
    {$project:{countOfLessons:0}}  // вимкнули поле countOfLessons, так як в фіналі воно клієнту не потрібне
])*/
