

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