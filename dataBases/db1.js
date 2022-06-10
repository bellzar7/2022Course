// create table users1
// (
//     id     int          not null primary key auto_increment,
//     name   varchar(100) not null,
//     age    int          not null,
//     gender varchar(6)   not null
// );
// #створили табл нову
//
// show tables;
// insert into users1 values (null, 'Oleg', 10, 'male');
// # записуємо в табл юзерс1 нового юзера з такими даними
//
// select * from users;
//
// select * from users where name = 'oleg';
// select * from users where gender ='male';
//
// select * from users where name like '%o%';
// # % - пропуск скільки небуть значень(букв)
// select * from users where name like '__e%';
// # __ - одне _ один пропуск літери
// select * from users where name like '_o%s';
//
// select * from users where age = 20;
// select * from users where age != 20;
// select * from users where age > 20;
// select * from users where age <= 20;
//
// select * from users where age >= 20 and age <=30;
// # одинакові зазначенням вирази, той, що зверху і знизу. Той що знизу швидше працює!
//     select * from users where age between 16 and 30;
//
// select * from users where age between 20 and 30 or name='max';
// select * from users where age between 20 and 30 and name='max' or gender='male';
//
// select * from users where age in (4,16,34,50);
//
// select * from users where length(name) > 5;
// select name,age from users where length(name) > 5;
//
// select * from users order by id asc ;
// # order by asc - посортувати за айді, asc - за зростанням
// select * from users order by id desc;
// # order by id desc - сортує по айді у зворотньому порядку
//
// select * from users limit 2;
// # limit 2 - бере порційно перших 2 юзерів
// select * from users where gender='female' limit 3;
// # тут взяли перших трьох дівчат
// select * from users where gender='female' order by age desc limit 5;
// # перших п'ять дівчат відсортованих по віку за спаданням
// select * from users limit 2 offset 3;
// # кажемо - візьми пропусти перших трьох і візьми наступних двох
//
// select max(age) from users;
// # знаходим користувача з найбільшим віком
// select max(age) as max_age from users;
// # знаходим користувача з найбільшим віком та перейменовуємо його за допомогою as
// select min(age) as min_age from users;
// # аналогічно але з мінімальним
// select count(*) as count from users;
// #підраховує скільки всіх юзерів
// select count(*) as count, gender from users group by gender;
// #підрахували кількість по гендеру (скільки користувачів певного гендеру)
// select avg(age) from users;
// # вирахували середній арифметичний вік всіх юзерів
// select sum(age) from users;
// # вирахували суму всіх age
//
// delete from users where name like '%kos';
// #видалили юзера в якого ім'я закінчується на 'kos'
//
// update users set age=2 where id=4;
// # поміняти з юзерів, поставити ейдж 2 в юзера з айді 4