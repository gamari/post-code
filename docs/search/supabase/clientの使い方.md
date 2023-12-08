

## Server Component

```ts
const Component = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: badCode } = await supabase
    .from("bad_codes")
    .select()
    .eq("code_id", code_id)
    .maybeSingle();

    return <></>
}
```

## Client Component

```ts
const supabase = createClientComponentClient();

const handleCreateCode = async (e: React.FormEvent) => {
e.preventDefault();

const {
    data: { user },
} = await supabase.auth.getUser();

if (!user?.id) return;

const { data, error } = await supabase
    .from("bad_codes")
    .insert({
    profile_id: user.id,
    })
    .select();

console.log(data);

if (!!data?.length) {
    router.push(`/code/${data[0].code_id}/edit`);
}
};
```



