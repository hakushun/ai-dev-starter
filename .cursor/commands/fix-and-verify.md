# 修正後の検証

コードを修正したら、以下を必ず実行する。

1. `pnpm run typecheck` — 型エラーなし
2. `pnpm run lint` — Oxlint エラーなし
3. `pnpm run test:run` — 単体テストが通る
4. 変更が UI や API に影響する場合は `pnpm run e2e` で E2E を通す

すべて通ったら修正完了。失敗したら debugger または test-runner サブエージェントで原因を切り分ける。
