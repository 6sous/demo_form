create table
  tag (
    id int primary key auto_increment not null,
    name varchar(255) not null,
    color varchar(255) not null
  );

CREATE TABLE
  item (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
  );

CREATE TABLE
  tem_has_tags (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    item_id INT NOT NULL,
    tag_id INT NOT NULL,
    CONSTRAINT `fk_item_id` FOREIGN KEY (`item_id`) REFERENCES `item` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_tag_id` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  );