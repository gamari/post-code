begin
  declare
    new_username text := new.raw_user_meta_data->>'name';
  begin
    if exists(select 1 from public.users where username = new_username) then
      new_username := new_username || left(md5(random()::text), 4);
    end if;

    insert into public.users (id, username, avatar_url, email)
    values (new.id, new_username, null, new.email);

    return new;
  end;
end;
