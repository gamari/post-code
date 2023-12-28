
  begin
    insert into public.users (id, username, avatar_url, email)
    values (new.id, new.raw_user_meta_data->>'username', new.raw_user_meta_data->>'avatar_url', new.email);
    return new;
  end;
