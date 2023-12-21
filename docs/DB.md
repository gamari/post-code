# 概要

Database の定義を書く。

## テーブル構成

| テーブル名      | 説明                                             |
| --------------- | ------------------------------------------------ |
| bad_codes       | 悪いコードの情報を格納するテーブル               |
| files           | ファイルの情報を格納するテーブル                 |
| bad_codes_files | 悪いコードとファイルの関連情報を格納するテーブル |
| tags            | 悪いコードのタグ情報を格納するテーブル           |

## DB 詳細

**users テーブル**

| カラム名    | データ型 | NULLABLE | 制限              |
| ----------- | -------- | -------- | ----------------- |
| id          | UUID     | FALSE    |
| username    | TEXT     | FALSE    | 1 < username < 30 |
| avatar_url  | TEXT     | TRUE     |                   |
| email       | TEXT     | FALSE    | 3 < email < 256   |
| description | TEXT     | TRUE     | description < 256 |

**favoritesテーブル**

| カラム名   | データ型     | 制限                 |
| ---------- | ------------ | -------------------- |
| id         | INT          |                      |
| user_id      | FK(users) |                      |
| language   | FK(codes) |                      |


**codes テーブル**

| カラム名   | データ型     | 制限                 |
| ---------- | ------------ | -------------------- |
| id         | INT          |                      |
| title      | VARCHAR(255) | 悪いコードのタイトル |
| language   | VARCHAR(255) | 言語                 |
| user_id    | INT          | 登録者 ID            |
| created_at | TIMESTAMP    | 作成日時             |
| updated_at | TIMESTAMP    | 更新日時             |

**files テーブル**

| カラム名   | データ型     | 制限        |
| ---------- | ------------ | ----------- |
| id         | INT          | ファイル ID |
| name       | VARCHAR(255) | ファイル名  |
| created_at | TIMESTAMP    | 作成日時    |
| updated_at | TIMESTAMP    | 更新日時    |

