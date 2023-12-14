# 概要

必要なSQLに関して

## languagesテーブルの作成

```sql
create table public.languages (
    id serial primary key,
    name character varying(255) not null unique,
    display character varying(255) not null,
);

```


## updated_atの設定

```sql
-- Enable MODDATETIME extension
create extension if not exists moddatetime schema extensions;

-- This will set the `updated_at` column on every update
create trigger handle_updated_at before update on bad_codes
  for each row execute procedure moddatetime (updated_at);
```


## bad_codesのSQL作成

```sql
create table
  bad_codes (
    id SERIAL not null,
    title varchar(255) not null,
    user_id uuid not null,
    created_at timestamp not null,
    updated_at timestamp not null,
    primary key (id)
  );

create table
  files (
    id SERIAL not null,
    name varchar(255) not null,
    user_id uuid not null,
    created_at timestamp not null,
    updated_at timestamp not null,
    primary key (id)
  );

create table
  bad_codes_files (
    bad_code_id int not null,
    file_id int not null,
    created_at timestamp not null,
    updated_at timestamp not null,
    primary key (bad_code_id, file_id),
    foreign key (bad_code_id) references bad_codes (id) on delete cascade,
    foreign key (file_id) references files (id) on delete cascade
  );

alter table bad_codes
add constraint bad_codes_user_id_fkey foreign key (user_id) references users (id) on delete cascade;

alter table files
add constraint files_user_id_fkey foreign key (user_id) references users (id) on delete cascade;
```

**row level securityの設定**

```sql
-- bad_codes
CREATE POLICY allow_read_bad_codes_anon ON bad_codes FOR SELECT USING (true);
create policy allow_insert_bad_codes_auth on bad_codes for insert with check (auth.uid() is not null);
create policy allow_update__bad_codes_auth on bad_codes for update using (auth.uid() = bad_codes.user_id);
create policy allow_delete_bad_codes_auth on bad_codes for delete using (auth.uid() = bad_codes.user_id);

-- files
create policy allow_insert_files_auth on files for insert with check (auth.uid() is not null);
create policy allow_update_files_auth on files for update using (auth.uid() = files.user_id);
create policy allow_delete_files_auth on files for delete using (auth.uid() = files.user_id);

-- bad_codes_files
create policy allow_insert_bad_codes_files_auth on bad_codes_files for insert with check (auth.uid() is not null);
create policy allow_delete_bad_codes_files_auth on bad_codes_files for delete using (auth.uid() = (select user_id from bad_codes where bad_codes.id = bad_codes_files.bad_code_id));
```

## Tagを作ったら

```sql
-- tags
create policy allow_insert_tags_auth on tags for insert with check (auth.uid() is not null);
create policy allow_delete_tags_auth on tags for delete using (auth.uid() = (select user_id from bad_codes where bad_codes.id = (select bad_code_id from bad_codes_tags where bad_codes_tags.tag_id = tags.id)));

-- bad_codes_tags
create policy allow_insert_bad_codes_tags_auth on bad_codes_tags for insert with check (auth.uid() is not null);
create policy allow_delete_bad_codes_tags_auth on bad_codes_tags for delete using (auth.uid() = (select user_id from bad_codes where bad_codes.id = bad_codes_tags.bad_code_id));
```
