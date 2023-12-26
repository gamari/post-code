# 概要

alterまとめ


## Viewの修正

**Nameの修正**

ALTER VIEW public.user_public_info RENAME TO public_users;

**Viewの作成**

CREATE OR REPLACE VIEW public_users AS
SELECT u.id, u.username,  u.avatar_url, u.description, u.x_url
FROM users u;

**列変更**

ALTER VIEW public_users
RENAME COLUMN avatar_url TO description;


