DROP TABLE _collections_images;

SELECT _collections_images.*, _images.* 
FROM _images 
JOIN _collections_images ON _images.id = _collections_images.image_id
AND _collections_images.collection_id = "a12157e5-a1d8-4187-bd53-375b4fe35762";

CREATE TABLE IF NOT EXISTS _collections_images (
  id VARCHAR(255) PRIMARY KEY,
  date DATE NOT NULL,

  collection_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (collection_id) REFERENCES _collections(id),

  image_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (image_id) REFERENCES _images(id),
  
  user_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES _users(id)

);

INSERT INTO _collections_images(id, date, collection_id, image_id, user_id )
VALUES(
	"141233",
    "2020-10-05",
    "d65964e3-7f20-4afe-9a83-636501d0a082",
    "7d1cf75e-b1fb-4c46-bba4-0af964df2958",
    "4934fdd4-7dc3-4c51-8266-9455454f7ee9"
);