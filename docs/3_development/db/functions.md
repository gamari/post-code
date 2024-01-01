## ユーザー作成

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


## ファイル数のリミット

```sql
BEGIN
  IF (SELECT COUNT(*) FROM files WHERE code_id = NEW.code_id) >= 4 THEN
    RAISE EXCEPTION 'ファイルは３つまでです。';
  END IF;
  RETURN NEW;
END;
```

## Tagのリミット

```sql
BEGIN
  IF (SELECT COUNT(*) FROM code_tags WHERE code_id = NEW.code_id) >= 4 THEN
    RAISE EXCEPTION 'ファイルは3個までです。';
  END IF;
  RETURN NEW;
END;
```

