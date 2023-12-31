
## ファイル数のリミット

```sql
BEGIN
  IF (SELECT COUNT(*) FROM files WHERE code_id = NEW.code_id) >= 4 THEN
    RAISE EXCEPTION 'ファイルは３つまでです。';
  END IF;
  RETURN NEW;
END;
```