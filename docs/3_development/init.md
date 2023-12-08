# 概要

初期化処理に関して


- Supabaseのプロジェクト作成
- Authentication
  - Provier
    - email
      - verificationの無効化

## Database

**Userテーブル**

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



**User作成のFunctionとトリガー**

```sql
create function public.handle_new_user()
returns trigger as
$$
  begin
    insert into public.users (id, username, avatar_url, email)
    values (new.id, new.raw_user_meta_data->>'username', new.raw_user_meta_data->>'avatar_url', new.email);
    return new;
  end;
$$
language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
    execute procedure public.handle_new_user();
```

- auth.usersに新規ユーザーが作成されたら、public.usersにも作成する
- auth.usersの`raw_user_meta_data`には、`username`と`avatar_url`が入っているので、それを使ってpublic.usersを作成する