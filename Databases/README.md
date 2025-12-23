# Database Exercises – SQL Queries


## Question 1

```sql
SELECT a.content_id, a.title, b.category_name
FROM content a
LEFT JOIN category b
ON a.category_id = b.category_id;
```
![Q1 Output](screenshots/q1.png)


## Question 2

```sql
SELECT title, rating, views_in_millions
FROM content
ORDER BY views_in_millions DESC;
```
![Q2 Output](screenshots/q2.png)


## Question 3

```sql
SELECT a.category_name, AVG(b.rating) AS average_rating
FROM category a
LEFT JOIN content b
ON a.category_id = b.category_id
GROUP BY a.category_id;
```
![Q3 Output](screenshots/q3.png)


## Question 4

```sql
SELECT a.title, a.rating, a.views_in_millions AS views, b.category_name
FROM content a
LEFT JOIN category b
ON a.category_id = b.category_id
WHERE a.views_in_millions >= 100
AND a.rating >= 8.5;
```
![Q4 Output](screenshots/q4.png)


## Question 5

```sql
EXPLAIN ANALYZE
SELECT a.category_id, a.title, b.category_name
FROM content a
LEFT JOIN category b
ON a.category_id = b.category_id;
```

```sql
CREATE INDEX idx_category_id ON content(category_id);
```
### Before Indexing
![Q5 Before Index](screenshots/q5-a.png)

### After Indexing
![Q5 After Index](screenshots/q5-b.png)




# The 3 Why's

## Why #1: Why do we use Foreign Keys?
Foreign key is a column or set of columns that referes to a primary key or unique key 
in another table. It helps to maintain the data intigrity between the two tables. 
In our database content.category_id is a foreign key that referes to category_id in 
category table. 
It helps to prevent any entry in the content table whose category_id is not present in 
the category table. 


## Why #2: Why is ACID important for this database?
ACID properties help ensure that concurrent updates behave correctly. Without ACID properties there would be no proper isolation.
For example, if 100 users are already watching a show and two new users join at the same time both transactions may read the same current view count and increment it by one. Without isolation the view count would become 101 instead of 102 thus resulting in a race condition.


## Why #3: Why would we create an index on category_id?
We create an index on category_id for faster lookup of records based on category. Without an index, if we search by category PostgreSQL has to perform a sequential scan on the entire table thus checking each row one by one. With an index, PostgreSQL can directly jump to the relevant rows with the same category_id making the query significantly faster.





