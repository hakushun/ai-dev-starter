---
name: refactor-react
description: リファクタ時にテストと Storybook をどう更新するか。コンポーネントのリファクタ依頼時に使用する。
---

# リファクタ時のテスト・Storybook

- コンポーネントの props や構造を変えたら、対応する `*.test.tsx` と `*.stories.tsx` を必ず更新する。
- テストが落ちたら意図を保ちつつアサーションやクエリを修正する。テストを削除して済ませない。
- Storybook のストーリーで props や decorators を変更した場合、表示が崩れていないか確認する。
- リファクタ後に `pnpm run test:run` と `pnpm run typecheck` を実行して通す。
