-- user_level

DROP TABLE IF EXISTS user_level;

-- Status field: 0 -> closed; 1 -> open 2 -> progress
CREATE TYPE Status AS ENUM (0, 1, 2);

CREATE TABLE user_level (
  id BIGSERIAL PRIMARY KEY,
  uuid VARCHAR(255) NOT NULL,
  user_uuid VARCHAR(255) NOT NULL,
  level_uuid VARCHAR(255) NOT NULL,
  status Status,
  progress NUMBER DEFAULT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NULL
);