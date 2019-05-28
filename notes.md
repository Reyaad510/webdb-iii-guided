select orders.orderId, customers.customerName, customers.city, orders.employeeId, orders.orderDate from Orders inner join customers on orders.customerId = customers.customerId


select orders.orderId, customers.customerName, customers.city, orders.orderDate, employees.firstName, employees.lastName 
from Orders
inner join customers on orders.customerId = customers.customerId
inner join employees on orders.employeeId = employees.employeeId



// Below concats names under one

select orders.orderId,
customers.customerName, 
customers.city,
orders.orderDate,
(employees.firstName || ' ' || employees.lastName) as Employee
from Orders
inner join customers on orders.customerId = customers.customerId
inner join employees on orders.employeeId = employees.employeeId


// Left join will show all the data from first data will come and attach any info from right table and if no value it will show as "null"

select *
from customers as c
left join orders as o on c.customerId = o.customerId



// Lists customers without orders

select *
from customers as c
left join orders as o on c.customerId = o.customerId
where o.orderId is null


// will show repeat customers

select c.customerName
from customers as c
left join orders as o on c.customerId = o.customerId
where o.orderId is not null
order by 1

// will show no repeated exercises using distinct

select distinct c.customerName
from customers as c
left join orders as o on c.customerId = o.customerId
where o.orderId is not null
order by 1

// aggregations, no of items grouped by order (orderId, 5)

select o.orderId, count(od.orderId) as ItemsCount
from orders as o
inner join orderdetails as od on o.orderId = od.orderId
group by o.orderId


// revenue per order

select o.orderId, round(sum(od.quantity * p.price), 2) as Revenue
from orders as o
inner join orderdetails as od on o.orderId = od.orderId
inner join products as p on od.productId = p.productId
group by o.orderId
order by Revenue desc


-- pagination
select * from customers
order by customerName -- optional
limit 5 -- per page --take
offset 0 -- ignore this many records -- skip


Schema

- structure of ...
  - database
  - table
- create tables
- add columns to tables



#migrations

- run yarn knex init to generate a ./knexfile.js
- modiffy knexfile.js to configure our db connections
- make sure copy knexConfig in index and paste it in knexfile.js in development:{}
- make a migration for each db schema change
- yarn knex migrate:make create_roles_table
- put info in table
- yarn knex migrate:latest
- When run should see empty array for .GET which means it works
-  yarn knex migrate:rollback will undo the latest migration which would be this email for us and can check on sql


yarn knex seed:make 001-roles
yarn knex seed:run

- Do .GET and will have info showing