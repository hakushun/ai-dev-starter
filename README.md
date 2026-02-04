# AI 駆動開発スターター

TypeScript + React + Vite を基盤に、Tailwind / Jotai / TanStack Router・Query と、Oxlint・Oxfmt / Vitest・Storybook・Playwright を導入したフロントエンド用スターター。Cursor（および AI エージェント）向けの rules・skills・サブエージェント・commands と MCP 設定を含む。

## 必要環境

- Node.js 20.19+（package.json の engines および Vite 7 の要件）。推奨: .mise.toml で指定したバージョン（本プロジェクトは `node = "latest"` を指定）。Node が古い場合は `mise install` で .mise.toml のバージョンに合わせること。
- pnpm

## Node バージョン管理（mise）

**Node は .mise.toml で管理する。** このプロジェクトでは [mise](https://mise.jdx.dev/) で Node と pnpm のバージョンを指定している。Node は利用可能な最新バージョンを使用する設定とする。

```bash
# mise が未導入の場合
curl https://mise.run | sh

# プロジェクトルートで実行すると .mise.toml のバージョンが使われる
mise install
node -v   # .mise.toml の node バージョン
pnpm -v
```

## セットアップ

```bash
pnpm install
```

## スクリプト

| コマンド                   | 説明                                                                              |
| -------------------------- | --------------------------------------------------------------------------------- |
| `pnpm run dev`             | 開発サーバー起動（http://localhost:5173）                                         |
| `pnpm run build`           | 本番ビルド                                                                        |
| `pnpm run preview`         | ビルド成果物のプレビュー                                                          |
| `pnpm run lint`            | Oxlint でリント                                                                   |
| `pnpm run format`          | Oxfmt でフォーマット                                                              |
| `pnpm run format:check`    | フォーマットチェックのみ                                                          |
| `pnpm run typecheck`       | TypeScript 型チェック                                                             |
| `pnpm run verify`          | typecheck + lint + test:run を一括実行                                            |
| `pnpm run test`            | Vitest を watch モードで実行                                                      |
| `pnpm run test:run`        | Vitest を 1 回実行                                                                |
| `pnpm run test:coverage`   | カバレッジ付きでテスト実行                                                        |
| `pnpm run storybook`       | Storybook 起動（http://localhost:6006）。Accessibility パネルで a11y チェック可能 |
| `pnpm run build:storybook` | Storybook の静的ビルド                                                            |
| `pnpm run e2e`             | Playwright E2E（dev サーバーは自動起動）                                          |
| `pnpm run e2e:ui`          | Playwright UI モード                                                              |

## MCP（Cursor）

プロジェクトの `.cursor/mcp.json` で MCP サーバーを定義している。

**重要**: API トークン（GitHub など）は **環境変数で渡し、mcp.json には直書きしない**こと。流出を防ぐため、本番用のトークンは設定ファイルに記載しない。`.cursor/mcp.json.example` をコピーして `mcp.json` を作成し、必要な環境変数（例: `GITHUB_PERSONAL_ACCESS_TOKEN`）を設定して利用する。

- **GitHub / Playwright**: Cursor のユーザー設定で MCP を有効にしている場合は、そのまま利用できる。プロジェクトで追加したい場合は `.cursor/mcp.json` の `mcpServers` に設定を足す。GitHub の場合は `GITHUB_PERSONAL_ACCESS_TOKEN` を環境変数で渡す設定を推奨する。

MCP を使う前に、各サービス（GitHub, Figma など）のトークンや実行環境を用意すること。

## サブエージェント（Cursor）

`.cursor/agents/` に次のサブエージェントを定義している。`/name` で呼び出せる。

- **verifier**: 完了した作業の検証。実装とテストが期待どおりか確認する。例: `/verifier confirm the auth flow is complete`
- **test-runner**: テストの実行と失敗時の分析・修正。例: `/test-runner run unit and e2e`
- **debugger**: エラー・テスト失敗のデバッグ。例: `/debugger investigate this error`
- **a11y-checker**: アクセシビリティチェック（WCAG・aria・キーボード操作等）。修正は提案のみ。
- **dependency-auditor**: 依存関係の脆弱性スキャンと更新確認（Node / pnpm）。修正は提案のみ。
- **security-reviewer**: インジェクション・XSS・シークレット等のコードレビュー。

詳細は [AGENTS.md](./AGENTS.md) を参照。

## その他

- **src/App.tsx / App.css / App.test.tsx**: Vite デフォルトのサンプルとして残している。本アプリのエントリは `src/main.tsx` の RouterProvider と `src/pages/` のページコンポーネント。
- **CI**: GitHub Actions で push/PR 時に typecheck・lint・test:run・build を実行する（`.github/workflows/ci.yml`）。
- **Oxfmt**: 現状 alpha のため、Prettier に戻す場合は `oxfmt --migrate=prettier` の逆手順や Prettier の再導入を検討する。
- **テスト環境**: 単体テストは happy-dom を使用（jsdom は ESM 周りで問題が出る場合があるため）。
