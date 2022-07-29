create database QLNH

create table ThucDon(
    Id int identity(1,1),
    Name nvarchar(55)
)

select * from ThucDon

insert into ThucDon values (
    N'Mon chinh'
)
insert into ThucDon values (
    N'Mon phu'
)

create table MonAn(
    Id int identity(1,1),
    Name nvarchar(55),
    ThucDon nvarchar(55) ,
    CreatedAt nvarchar(250) ,
    Image text
)