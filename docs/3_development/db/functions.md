## 足跡の確認処理

```sql
CREATE OR REPLACE FUNCTION check_footprint_exists(ip VARCHAR, code INTEGER)
RETURNS BOOLEAN AS $$
DECLARE
    exists BOOLEAN;
BEGIN
    SELECT EXISTS (
        SELECT 1 FROM code_footprints
        WHERE ip_address = ip AND code_id = code AND visited_on = CURRENT_DATE
    ) INTO exists;

    RETURN exists;
END;
$$ LANGUAGE plpgsql;
```

## コメント通知作成 Function

```sql
CREATE OR REPLACE FUNCTION notify_new_comment() RETURNS TRIGGER AS $$
BEGIN
    IF NEW.user_id <> (SELECT user_id FROM codes WHERE id = NEW.code_id) THEN
        INSERT INTO notifications(user_id, comment_id)
        VALUES ((SELECT user_id FROM codes WHERE id = NEW.code_id), NEW.id);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

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

## Tag のリミット

```sql
BEGIN
  IF (SELECT COUNT(*) FROM code_tags WHERE code_id = NEW.code_id) >= 4 THEN
    RAISE EXCEPTION 'ファイルは3個までです。';
  END IF;
  RETURN NEW;
END;
```
