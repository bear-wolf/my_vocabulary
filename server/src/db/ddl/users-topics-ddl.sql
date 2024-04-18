-- user_topic

DROP TABLE IF EXISTS user_topic;

-- Status field: 0 -> closed; 1 -> open

CREATE TABLE user_topic (
  id BIGSERIAL PRIMARY KEY,
  uuid VARCHAR(255) NOT NULL,
  user_uuid VARCHAR(255) NOT NULL,
  topic_uuid VARCHAR(255) NOT NULL,
  status NUMBER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NULL
);