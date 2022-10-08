CREATE DATABASE sge_db

use sge_db

CREATE TABLE `roles` (
  `role_id` VARCHAR(38) NOT NULL,
  `role_name` VARCHAR(255),
  `can_create_student` TINYINT(1),
  `can_read_student` TINYINT(1),
  `can_update_student` TINYINT(1),
  `can_delete_student` TINYINT(1),
  `can_create_employee` TINYINT(1),
  `can_read_employee` TINYINT(1),
  `can_update_employee` TINYINT(1),
  `can_delete_employee` TINYINT(1),
  `can_create_class` TINYINT(1),
  `can_read_class` TINYINT(1),
  `can_update_class` TINYINT(1),
  `can_delete_class` TINYINT(1),
  `can_create_discipline` TINYINT(1),
  `can_read_discipline` TINYINT(1),
  `can_update_discipline` TINYINT(1),
  `can_delete_discipline` TINYINT(1),
  `can_vinculate_student` TINYINT(1),
  `can_vinculate_employee` TINYINT(1),
  `can_vinculate_class` TINYINT(1),
  `can_vinculate_discipline` TINYINT(1),
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,
  PRIMARY KEY (`role_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `roles` (`role_id`,`role_name`,`can_add_employee`,`can_create_lead`,`can_edit_lead`,`can_vinculate_lead`,`can_delete_lead`,`created_at`) VALUES (uuid(),'manager',1,1,1,1,1,NOW());
INSERT INTO `roles` (`role_id`,`role_name`,`can_add_employee`,`can_create_lead`,`can_edit_lead`,`can_vinculate_lead`,`can_delete_lead`,`created_at`) VALUES (uuid(),'employee',0,1,1,0,0,NOW());

CREATE TABLE `users` (
  `user_id` VARCHAR(38) NOT NULL,
  `email` VARCHAR(255) UNIQUE,
  `name` VARCHAR(255),
  `role_id_fk` VARCHAR(38),
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,
  PRIMARY KEY (`user_id`),
  FOREIGN KEY (`role_id_fk`) REFERENCES `roles` (`role_id`) ON DELETE SET NULL 
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `persons` (
  `person_id` VARCHAR(38) NOT NULL,
  `email` VARCHAR(255),
  `phone` VARCHAR(255),
  `name` VARCHAR(255),
  `age` TINYINT,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,
  `user_id_fk` VARCHAR(38) NOT NULL,
  `status` VARCHAR (30),
  PRIMARY KEY (`person_id`),
  FOREIGN KEY (`user_id_fk`) REFERENCES `users` (`user_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `functions` (
  `functions_id` VARCHAR(38) NOT NULL,
  `name` VARCHAR(255),
  PRIMARY KEY (`functions_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `person_functions` (
  `person_functions_id` VARCHAR(38) NOT NULL,
  `person_id_fk` VARCHAR(38) NOT NULL,
  `functions_id_fk` VARCHAR(38) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,  
  PRIMARY KEY (`person_functions_id`),
  FOREIGN KEY (`person_id_fk`) REFERENCES `persons` (`person_id`) ON DELETE CASCADE,
  FOREIGN KEY (`functions_id_fk`) REFERENCES `functions` (`functions_id`) ON DELETE CASCADE  
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `users_integrations` (
  `user_integration_id` VARCHAR(38) NOT NULL,
  `integration_url` VARCHAR(500) UNIQUE ,
  `integration_token` VARCHAR(50) UNIQUE,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,
  `user_id_fk` VARCHAR(38) NOT NULL,
  PRIMARY KEY (`user_integration_id`),
  FOREIGN KEY (`user_id_fk`) REFERENCES `users` (`user_id`) ON DELETE CASCADE 
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `discipline` (
  `discipline_id` VARCHAR(38) NOT NULL,
  `name` VARCHAR(255),
  `professor_id_fk` VARCHAR(38) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,  
  PRIMARY KEY (`discipline_id`),
  FOREIGN KEY (`professor_id_fk`) REFERENCES `persons` (`person_id`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `class` (
  `class_id` VARCHAR(38) NOT NULL,
  `name` VARCHAR(255),
  `discipline_id_fk` VARCHAR(38) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,  
  PRIMARY KEY (`class_id`),
  FOREIGN KEY (`discipline_id_fk`) REFERENCES `discipline` (`discipline_id`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `class_students` (
  `class_students_id` VARCHAR(38) NOT NULL,
  `class_id_fk` VARCHAR(38) NOT NULL,
  `students_id_fk` VARCHAR(38) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,  
  PRIMARY KEY (`class_students_id`),
  FOREIGN KEY (`class_id_fk`) REFERENCES `class` (`class_id`) ON DELETE CASCADE,
  FOREIGN KEY (`students_id_fk`) REFERENCES `persons` (`person_id`) ON DELETE CASCADE  
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `schools` (
  `school_id` VARCHAR(38) NOT NULL,
  `name` VARCHAR(255),
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,  
  PRIMARY KEY (`school_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `schools_persons` (
  `schools_persons_id` VARCHAR(38) NOT NULL,
  `school_id_fk` VARCHAR(38) NOT NULL,
  `persons_id_fk` VARCHAR(38) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,  
  PRIMARY KEY (`schools_persons_id`),
  FOREIGN KEY (`school_id_fk`) REFERENCES `schools` (`school_id`) ON DELETE CASCADE,
  FOREIGN KEY (`persons_id_fk`) REFERENCES `persons` (`person_id`) ON DELETE CASCADE  
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
