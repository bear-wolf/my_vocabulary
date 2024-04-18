-- user_level

DROP TABLE IF EXISTS user_level;

-- Status field: 0 -> closed; 1 -> open

CREATE TABLE user_level (
  id BIGSERIAL PRIMARY KEY,
  uuid VARCHAR(255) NOT NULL,
  user_uuid VARCHAR(255) NOT NULL,
  level_uuid VARCHAR(255) NOT NULL,
  status NUMBER DEFAULT 0,
  progress NUMBER DEFAULT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NULL
);