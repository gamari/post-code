## bad_codes

```sql

create table
  public.bad_codes (
    id serial,
    title character varying(255) not null,
    user_id uuid not null,
    created_at timestamp with time zone null,
    updated_at timestamp with time zone null,
    description text null,
    constraint bad_codes_pkey primary key (id),
    constraint bad_codes_user_id_fkey foreign key (user_id) references users (id) on delete cascade
  ) tablespace pg_default;
```

## favorites

```sql
CREATE TABLE public.favorites (
  id SERIAL,
  user_id UUID NOT NULL,
  bad_code_id INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT favorites_pkey PRIMARY KEY (id),
  CONSTRAINT favorites_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users (id) ON DELETE CASCADE,
  CONSTRAINT favorites_bad_code_id_fkey FOREIGN KEY (bad_code_id) REFERENCES public.bad_codes (id) ON DELETE CASCADE
);
```

## comments

```sql
CREATE TABLE public.comments (
  id SERIAL,
  bad_code_id INTEGER NOT NULL,
  user_id UUID NOT NULL,
  comment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT comments_pkey PRIMARY KEY (id),
  CONSTRAINT comments_bad_code_id_fkey FOREIGN KEY (bad_code_id) REFERENCES public.bad_codes (id) ON DELETE CASCADE,
  CONSTRAINT comments_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users (id) ON DELETE CASCADE
);
```
