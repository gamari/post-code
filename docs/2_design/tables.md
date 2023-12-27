# 概要

テーブル設計を記載します。

## テーブル構成

| テーブル名 | 説明                                   |
| ---------- | -------------------------------------- |
| codes      | 悪いコードの情報を格納するテーブル     |
| files      | ファイルの情報を格納するテーブル       |
| tags       | 悪いコードのタグ情報を格納するテーブル |

## DB 詳細

**codes テーブル**

| カラム名    | データ型  | NULLABLE | 制限               |
| ----------- | --------- | -------- | ------------------ |
| id          | INT       | FLASE    |                    |
| title       | TEXT      | FALSE    | 1 < title < 61     |
| language    | TEXT      | TRUE     |                    |
| user_id     | INT       | FALSE    |                    |
| description | TEXT      | TRUE     | description < 2001 |
| created_at  | TIMESTAMP | 作成日時 |                    |
| updated_at  | TIMESTAMP | 更新日時 |                    |

**users テーブル**

| カラム名    | データ型 | NULLABLE | 制限              |
| ----------- | -------- | -------- | ----------------- |
| id          | UUID     | FALSE    |
| username    | TEXT     | FALSE    | 1 < username < 30 |
| avatar_url  | TEXT     | TRUE     |                   |
| email       | TEXT     | FALSE    | 3 < email < 256   |
| description | TEXT     | TRUE     | description < 256 |

**files テーブル**

| カラム名    | データ型     | NULLABLE     | 制限            |
| ----------- | ------------ | ------------ | --------------- |
| id          | INT          | FALSE        |                 |
| name        | VARCHAR(255) | FALSE        | 1 < name < 80   |
| user_id     | INT          | FALSE        |                 |
| content     | TEXT         | TRUE         | content < 10001 |
| description | TEXT         | ファイル内容 |
| code_id     | INT          | コード ID    |
| created_at  | TIMESTAMP    | 作成日時     |
| updated_at  | TIMESTAMP    | 更新日時     |

**favorites テーブル**

| カラム名 | データ型  | 制限 |
| -------- | --------- | ---- |
| id       | INT       |      |
| user_id  | FK(users) |      |
| language | FK(codes) |      |
