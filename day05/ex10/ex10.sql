SELECT title AS 'Title', summary AS 'Summary', prod_year
FROM film AS f
INNER JOIN genre AS g
ON f.id_genre = g.id_genre
WHERE g.name = 'erotic'
ORDER BY prod_year DESC;
