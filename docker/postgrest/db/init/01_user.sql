-- 01_user.sql
-- 匿名ユーザー用ロール
CREATE ROLE web_anon NOLOGIN;

-- User テーブル作成
CREATE TABLE public."User" (
  id          SERIAL PRIMARY KEY,
  name        TEXT    NOT NULL,
  email       TEXT    UNIQUE NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- web_anon に対する権限付与
GRANT SELECT, INSERT, UPDATE, DELETE
  ON public."User" TO web_anon;

-- 既存のテーブル／ロール定義の後に追加
GRANT USAGE ON SEQUENCE public."User_id_seq" TO web_anon;
-- または
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO web_anon;
