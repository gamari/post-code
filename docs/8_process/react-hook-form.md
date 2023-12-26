# 概要

react-hook-formの利用方法

## 基本

- zodでschemaを作成

```ts
const userSchema = z.object({
  id: z.string().optional(),
  username: z.string().min(1, "ユーザー名を入力してください"),
  description: z.string().optional(),
  x_url: z.string().optional(),
});
```

- useFormで必要なものを作成
  - 

```ts
const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
} = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: initUser,
});
```