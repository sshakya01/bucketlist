\c bucketlist

DROP TABLE IF EXISTS lists;

CREATE TABLE lists (
  id SERIAL PRIMARY KEY,
  list TEXT,
  status VARCHAR(64)
);


INSERT INTO lists (list, status) VALUES
  (
    'Go to Space',
    'Need to do'
  ),
  ( 'Bike in Central Park',
    'Done'
    ),
  ( 'Live in New York for a Year',
    'Done'
  );
