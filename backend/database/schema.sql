CREATE TABLE
  tag (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL
  );

CREATE TABLE
  item (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
  );

CREATE TABLE
  item_has_tags (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    item_id INT NOT NULL,
    tag_id INT NOT NULL,
    CONSTRAINT fk_item_has_tags_item_id FOREIGN KEY (item_id) REFERENCES item (id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_item_has_tags_tag_id FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE ON UPDATE CASCADE
  );

INSERT INTO
  item (title, description)
VALUES
  (
    'Ordinateur portable',
    'Ordinateur portable puissant avec un processeur rapide et un grand espace de stockage.'
  ),
  (
    'Smartphone',
    'Smartphone dernier cri avec un écran haute résolution et une caméra avancée.'
  ),
  (
    'Casque audio sans fil',
    'Casque audio confortable avec une qualité sonore exceptionnelle et une connectivité sans fil.'
  ),
  (
    'Livre électronique',
    'Liseuse légère avec un écran anti-reflet et une autonomie de batterie prolongée.'
  ),
  (
    'Appareil photo numérique',
    'Appareil photo professionnel avec des fonctionnalités avancées pour capturer des images de haute qualité.'
  );

CREATE TABLE
  user (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(255) NOT NULL,
    hashed_password VARCHAR(255) NOT NULL
  );

CREATE TABLE
  user_has_items (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_id INT NOT NULL,
    item_id INT NOT NULL,
    CONSTRAINT fk_user_has_items_user_id FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_user_has_items_item_id FOREIGN KEY (item_id) REFERENCES item (id) ON DELETE CASCADE ON UPDATE CASCADE
  );