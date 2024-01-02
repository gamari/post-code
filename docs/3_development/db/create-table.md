
## Notifications

```sql
CREATE TABLE public.notifications (
    id serial PRIMARY KEY,
    user_id uuid NOT NULL,
    comment_id integer,
    like_id integer,
    is_checked boolean NOT NULL DEFAULT false,
    created_at timestamp with time zone NOT NULL DEFAULT current_timestamp,
    CONSTRAINT notifications_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    CONSTRAINT notifications_comment_id_fkey FOREIGN KEY (comment_id) REFERENCES comments (id) ON DELETE SET NULL,
    CONSTRAINT notifications_like_id_fkey FOREIGN KEY (like_id) REFERENCES likes (id) ON DELETE SET NULL
);
```



## Userテーブル

```sql
create table users (
  id uuid references auth.users not null primary key,
  username text,
  avatar_url text,
  email text
);
alter table users
  enable row level security;
create policy "自身のみ閲覧可能" on users
  for select using (auth.uid() = id);
create policy "自身のみ更新可能" on users
  for update using (auth.uid() = id);
``` 

- usersテーブルの作成
- row level securityの有効化


## tagsテーブルの作成

```sql
create table public.tags (
  id serial primary key,
  name text not null,
  logo_type text
);

create table public.code_tags (
  code_id integer references public.codes(id),
  tag_id integer references public.tags(id),
  primary key (code_id, tag_id)
);
```
- [ ] Triggerで5個までにする