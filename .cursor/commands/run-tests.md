# テスト実行手順

- **単体**: `pnpm run test:run` — Vitest。`src/**/*.test.{ts,tsx}` を実行。
- **E2E**: `pnpm run e2e` — Playwright。dev サーバーを自動起動してから `e2e/*.spec.ts` を実行。
- **Storybook**: `pnpm run storybook` — ブラウザでコンポーネントを確認。ビルドは `pnpm run build:storybook`。

失敗時は `pnpm run typecheck` と `pnpm run lint` も確認する。解釈に困ったら debugger サブエージェント（`/debugger`）の利用を検討する。
