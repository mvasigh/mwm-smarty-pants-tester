# MWM Smarty Pants Tester

## Question 1

> You have a list/array of strings that represent dates and looks like this:
> [‘Oct 7, 2009’, ‘Nov 10, 2009’, ‘Jan 10, 2009’, ‘Oct 22, 2009’, …]
> The month is always the first three characters of full month name
> (‘January’ => ‘Jan’, ‘February’ => ‘Feb’, …).
> The day is one or two digits (1, 2, … 31), with no preceding zero. There is always a comma after the day. The year is always four digits. Write a routine (in any language) that will order this list of strings in date descending order. Do not use any built in date-­‐parsing library… write your own specific to this date format. Feel free to use, or not use, regex.

My solution to this question can be found in `/question-1/date_parser.js`. I wrote this date parsing library as a simple ES6 class, and kept the functionality pretty simple. I've also included some barebones tests in `/question-1/test.js`.

To run (requires Node.js):

```
$ cd question-1/
$ node test.js
```

## Question 2

> What are some ways to improve the security of a Unix/Linux system? Include general security guidelines and any specifics related to web servers and db servers.

## Question 3

> With the test data below, fill in the “???” in the recursive CTE query so that each item in category table is listed with its parents... [Full question](https://mouthwateringmedia.com/careers/smarty-pants-tester/)

```
BEGIN;
CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  parent_id INTEGER REFERENCES category(id) DEFERRABLE,
  name TEXT NOT NULL UNIQUE );
SET CONSTRAINTS ALL DEFERRED;
INSERT INTO category VALUES (1, NULL, 'animal');
INSERT INTO category VALUES (2, NULL, 'mineral');
INSERT INTO category VALUES (3, NULL, 'vegetable');
INSERT INTO category VALUES (4, 1, 'dog');
INSERT INTO category VALUES (5, 1, 'cat');
INSERT INTO category VALUES (6, 4, 'doberman');
INSERT INTO category VALUES (7, 4, 'dachshund');
INSERT INTO category VALUES (8, 3, 'carrot');
INSERT INTO category VALUES (9, 3, 'lettuce');
INSERT INTO category VALUES (10, 11, 'paradox1');
INSERT INTO category VALUES (11, 10, 'paradox2');
SELECT setval('category_id_seq', (select max(id) from category));

WITH RECURSIVE last_run(parent_id, id_list, name_list) AS (
  SELECT parent_id, ARRAY[id] AS id_list, ARRAY[name] AS name_list
  FROM category
  WHERE parent_id IS NULL
  UNION ALL
  SELECT
  	cat.parent_id,
  	array_cat(ARRAY[cat.id], lr.id_list),
  	array_cat(ARRAY[cat.name], lr.name_list)
  FROM last_run lr
  JOIN category cat
  ON cat.parent_id = lr.id_list[1]
  )
SELECT id_list, array_to_string(name_list, ', ')
FROM last_run
WHERE ORDER BY id_list;
ROLLBACK;
```

## Question 4

> Using HTML5/CSS 3 techniques make a 100 x 100px red square that rotates via an animation 90 degrees when you click on it. You’re allowed to use a small amount of javascript but most of the animation/rotation should be accomplished using HTML5/CSS3. Include a list of which browsers it works on.

Solution can be found in `/question-4/index.html`. You can also [view it on CodePen](https://codepen.io/vasighm/pen/jxXpog). This solution is compatible with IE 10+, Firefox 4+, all versions of Chrome, Edge and Safari, and Opera 11.5+ and incompatible with Opera Mini.

I interpreted the question as meaning that the circle should only rotate 90deg once, when clicked on. For continuous rotation on each click, the degree of rotation can be handled by additional JavaScript (better browser support) or by using a native CSS variable.

## Question 5

> In your view, what are the pros and cons of TDD (test driven development). When do you think TDD makes more/less sense (if ever)?

## Question 6

> Do you have any favorite coding related quotes or cartoons?

That's an easy one. Here are two:

> "Some people, when confronted with a problem, think ‘I know, I’ll use regular expressions.’ Now they have two problems." - Jamie Zawinski

[xkcd: Exploits of a Mom](https://xkcd.com/327/)
