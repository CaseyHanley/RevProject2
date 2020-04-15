create table users(
u_id number(10) primary key,
username varchar2(50) unique not null,
password varchar2(50) not null,
firstname varchar2(50) not null,
lastname varchar2(50) not null,
account_type varchar2(50)not null

);
select * from menu_items;
select * from users;

create table deliveryAddress(
a_id number(10)primary key,
u_id number(10),
state varchar2(10) not null,
address varchar2(50) not null,
address2 varchar2(50) default null,
zipcode number(20) not null,
comments varchar2(50)

);

drop table menu_Items;
select * from menu_Items;

create table menu_Items(
stock_id number(10),
description varchar2(50),
productname varchar2(50),
price number(10)

);


create table extras(
e_id number(10),
descriptions varchar2(50),
ingredientname varchar2(10),
price number(10)
-- used with extras

);

select * from orders;
create table orders(
o_id number(10) primary key,
u_id number(10),
productname1 varchar2(50),
productname2 varchar2(50),
productname3 varchar2(50),
productname4 varchar2(50),
productname5 varchar2(50),
productname6 varchar2(50),
productname7 varchar2(50),
extra1 varchar2(50),
extra2 varchar2(50),
price number(10),
comments varchar2(50),
status varchar2(50),
pickup number(1)

);


create table order_Archive(
o_id number(10) primary key,
u_id number(10),
productname1 varchar2(50),
productname2 varchar2(50),
productname3 varchar2(50),
productname4 varchar2(50),
productname5 varchar2(50),
productname6 varchar2(50),
productname7 varchar2(50),
extra1 varchar2(50),
extra2 varchar2(50),
price number(10),
comments varchar2(50),
status varchar2(50),
pickup number(1)
);



create table discountcodes(
dc_id number(10),
discountname varchar2(30),
discountamount number(10)

);


Alter Table orders add CONSTRAINT uid2_key FOREIGN KEY (u_id) REFERENCES users(u_id) ON DELETE CASCADE;

Alter Table order_Archive add CONSTRAINT uid3_key FOREIGN KEY (u_id) REFERENCES users(u_id) ON DELETE CASCADE;
Alter Table order_Archive add CONSTRAINT oid_key FOREIGN KEY (o_id) REFERENCES orders(o_id) ON DELETE CASCADE;

Alter Table deliveryAddress add CONSTRAINT uid_key FOREIGN KEY (u_id) REFERENCES users(u_id) ON DELETE CASCADE;


