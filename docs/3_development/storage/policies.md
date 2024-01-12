
## 制限

```
create policy "ユーザー画像の操作" on storage.objects for all using (
  bucket_id = 'user-images' and
  (auth.role() = 'authenticated' and
   auth.uid() = object_name[:length(auth.uid())])
);
```