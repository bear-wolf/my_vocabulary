-- user_word

DROP TABLE IF EXISTS user_word;

-- Status field: 0 -> closed; 1 -> completed
CREATE TYPE Status AS ENUM (0, 1);

CREATE TABLE user_word (
  id BIGSERIAL PRIMARY KEY,
  uuid VARCHAR(255) NOT NULL,
  user_uuid VARCHAR(36) NOT NULL,
  level_uuid VARCHAR(36) NOT NULL,
  topic_uuid VARCHAR(36) NOT NULL,
  status TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NULL
);