# AI エージェント向けガイド

## 言語・コミュニケーション

- 回答は日本語で行う。
- 指示に曖昧な点があれば、作業前に質問して解消する。
- 指示されたこと以外の変更は加えない。追加したい場合は、完了後に提案する。

## スタック

- **基盤**: TypeScript, React, Vite
- **スタイル**: Tailwind CSS
- **状態管理**: Jotai（`src/store/` に atom）
- **ルーティング**: TanStack Router（`src/routeTree.ts` でコードベース定義）
- **データ取得**: TanStack Query（必要に応じて）
- **Lint / フォーマット**: Oxlint, Oxfmt
- **テスト**: Vitest（単体）, Storybook（UI）, Playwright（E2E）

## 品質

- コード変更後は既存のテストが通ることを確認する。`pnpm run test:run`, `pnpm run typecheck`, `pnpm run lint` を実行する。
- ライブラリ起因のエラーが疑われる場合は、該当ライブラリの GitHub Issues で同様の事象を検索する。

## サブエージェント

次のサブエージェントを `/name` で呼び出せる。

- **verifier**: 完了した作業の検証。実装とテストが期待どおりか確認する。例: `/verifier confirm the auth flow is complete`
- **test-runner**: テストの実行と失敗時の分析・修正。例: `/test-runner run unit and e2e`
- **debugger**: エラー・テスト失敗のデバッグ。例: `/debugger investigate this error`
- **a11y-checker**: アクセシビリティチェック（WCAG・aria・キーボード操作等）。修正は提案のみ。
- **dependency-auditor**: 依存関係の脆弱性スキャンと更新確認（Node / pnpm）。修正は提案のみ。
- **security-reviewer**: インジェクション・XSS・シークレット等のコードレビュー。

## プロジェクト内の Cursor 設定

- **ルール**: `.cursor/rules/*.mdc` — ファイル種別ごとの規約
- **スキル**: `.cursor/skills/*/SKILL.md` — コンポーネント追加・E2E 追加・リファクタの手順
- **コマンド**: `.cursor/commands/*.md` — 依頼テンプレートと検証手順
