begin
  insert into public.users (id, username, avatar_url, email)
  values (new.id, left(md5(random()::text), 10), new.raw_user_meta_data->>'avatar_url', new.email);
  return new;
end;