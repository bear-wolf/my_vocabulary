CREATE TABLE topics (
  id BIGSERIAL PRIMARY KEY,
  uuid VARCHAR(255) NOT NULL,
  title VARCHAR(100) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NULL
);

CREATE UNIQUE INDEX levels_uuid_unique_idx ON levels(uuid);