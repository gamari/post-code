# 概要

初期化処理に関して


- Supabaseのプロジェクト作成
- Authentication
  - Provier
    - email
      - verificationの無効化

## Database



**User作成のFunctionとトリガー**


- auth.usersに新規ユーザーが作成されたら、public.usersにも作成する
- auth.usersの`raw_user_meta_data`には、`username`と`avatar_url`が入っているので、それを使ってpublic.usersを作成する