/*
db.teacher.find()
db.teacher.aggregate([
    {
        $group: {
            _id: '',                         //лишаємо айді щоб там нічого не писало
            min: {$min: '$payment'},         //знайшли мінімальне зі всіх
            max: {$max: '$payment'},        //знайшли максимальне зі всіх
            serednye: {$avg: '$payment'},  //знайшли середнє зі всіх
            suma: {$sum: '$payment'}      //знайшли суму зі всіх
        }
    }
])

db.teacher.aggregate([
    {
        $group: {
            _id: '$lesson',                  //тепер групувати юуде по лессонах
            min: {$min: '$payment'},
            max: {$max: '$payment'},
            serednye: {$avg: '$payment'},
            suma: {$sum: '$payment'},
            kilkistTicheriv: {$sum: 1}        //перемножається сума погрупованого на цю цифру
        }
    },
    {
        $sort: {serednye: 1}  //новий агрегатний об'єкт, сюди передається вся інфа з
                              // попереднього і тут ми посортували все по кею середнє за зростанням
    }
])

db.teacher.aggregate([
    {
        $group: {
            _id: '$lesson',
            count: {$sum: 1}
        }
    },
    {
        $sort: {_id: 1}
    },
    {
        $project: {
            lesson: '$_id',  // агрегат проджект, тут ми редагуємо шо і як буде виглядати.
                             // Зараз створили кей лессон і передали туди значення айді
            count: 1,   //каунт включили в фінальний вигляд
            _id: 0     //айдішку вимкнули
        }
    }
])

db.teacher.aggregate([
    {
        $match: {                                    // find в агрегатках заміняється на match
            class_curator: {$gt: 5}                  // знайшли всіх з  class_curator більше 5
        }
    },
    {
        $lookup: {                         // lookup - об'єднання таблиць
            from: 'students',              // звідки або яку таблицю приєднуємо
            localField: 'class_curator',   // куди приєднюємо в яку табл до якого кея
            foreignField: 'class',         // Що саме буде приєднано
            as: 'myStudents'               // Переіменувалю цей кей яку вставимо
        }
    },
    {$skip: 2},                          //пропустили перші 2
    {$limit: 2}                          //взяли тільки двох наступних
])

db.teacher.aggregate([
    {
        $match: {
            class_curator: {$gt: 5}
        }
    },
    {
        $lookup: {
            from: 'students',
            localField: 'class_curator',
            foreignField: 'class',
            as: 'myStudents'
        }
    },
    {
        $match: {
            'myStudents.parents.profession': 'programmer' //знайшли викладача в якого хоч один студент має парентса програміста
        }
    }
])

db.teacher.aggregate([
    {
        $match: {
            class_curator: {$gt: 5}
        }
    },
    {
        $lookup: {
            from: 'students',
            localField: 'class_curator',
            foreignField: 'class',
            as: 'myStudents'
        }
    },
    {$unwind: '$myStudents'} ,    //$unwind - тепер у кожного тічера не масив студентів, а до тічера по черзі кожен учень як об'єкт приєднюється
    {$unwind: '$myStudents.parents'},  //розбили масив з парентсами, тепер є тічер з кожним учнем по 2 рази і має учень по черзі своїх батьків
    {$match: {'myStudents.parents.profession':'doctor'}},
    {$count:'doctorCount'}      //підрахували скільки в нас є таких студентів в яких хоть один з батьків доктор
])*/
