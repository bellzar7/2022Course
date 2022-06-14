/*
/!*select distinct name from users;
# якщо імена повторюються, то distinct показує лише унікальні імена, тобто не повторює
select max(age) from users
union
select min(age) from users;
#об'єднали два запити за доп. union*!/

/!*create table user
(
    id       int primary key auto_increment,
    username varchar(255) not null,
    password varchar(255) not null,
    profile_id int not null unique ,
    foreign key (profile_id) references profile(id)
);

create table profile
(
    id      int auto_increment primary key,
    name    varchar(255) not null,
    surname varchar(255) not null,
    age     int          not null default 18
);

select * from user;
select * from user join profile p on p.id = user.profile_id;
select user.id, user.username, profile.* from user join profile on profile.id = user.profile_id;*!/

create table cities
(
    id int primary key auto_increment,
    city varchar(255) null
);

create table alberto
(
    id int primary key auto_increment,
    name varchar(100) not null ,
    age int not null,
    city_id int null ,
    foreign key (city_id) references cities(id)
);

# select * from alberto join cities on cities.id = alberto.city_id;
# select * from alberto left join cities on cities.id = alberto.city_id;
# select * from alberto right join cities on cities.id = alberto.city_id;
*/
