
SELECT * from _collections;

CREATE TABLE IF NOT EXISTS _collections (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  file VARCHAR(255) NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES _users(id)
)