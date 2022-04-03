DELETE FROM _images WHERE id = "3dd4476c-37e8-4ebc-be17-134735a08135";

TRUNCATE TABLE _images;

UPDATE _images
SET date = "1503-02-30"
WHERE id = "3ba2dfe0-71c7-4a45-9dcf-56e8b4f8ec04";

SELECT * from _images;

CREATE TABLE IF NOT EXISTS _images (
  id VARCHAR(255) PRIMARY KEY,
  subtitle VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  file VARCHAR(255) NOT NULL,
  tags VARCHAR(255) NOT NULL,
  collection VARCHAR(255) NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES _users(id)
)