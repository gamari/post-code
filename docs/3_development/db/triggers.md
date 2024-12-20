## 通知トリガー

```sql
CREATE TRIGGER trigger_new_comment
AFTER INSERT ON comments
FOR EACH ROW
EXECUTE FUNCTION notify_new_comment();
```


## 公開日のトリガー


```sql
ALTER TABLE public.codes
ADD COLUMN published_date timestamp with time zone null;

CREATE OR REPLACE FUNCTION set_published_date()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.is_public = true AND OLD.is_public = false AND OLD.published_date IS NULL THEN
    NEW.published_date = NOW();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_published_date
BEFORE UPDATE ON public.codes
FOR EACH ROW
EXECUTE FUNCTION set_published_date();
```


## タグ数リミット

check_code_tags_limit

```sql
CREATE TRIGGER check_code_tags_limit
BEFORE INSERT ON code_tags
FOR EACH ROW EXECUTE FUNCTION enforce_tag_limit();
```