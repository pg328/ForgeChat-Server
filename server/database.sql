CREATE DATABASE messages;

CREATE TABLE message(
	message_id serial PRIMARY KEY,
	content VARCHAR(255)
);