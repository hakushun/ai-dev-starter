---
name: e2e-playwright
description: Playwright で E2E テストを追加する手順。E2E 追加や「ログインの E2E を書いて」と依頼されたときに使用する。
---

# E2E テスト追加（Playwright）

## 手順

1. **配置**: `e2e/<feature>.spec.ts` にファイルを追加。
2. **インポート**: `import { test, expect } from "@playwright/test";`
3. **ベース URL**: `page.goto("/")` は `baseURL`（localhost:5173）に対する相対パス。絶対パスで開く場合は `page.goto("/about")` のようにする。
4. **クエリ**: `page.getByRole`, `page.getByText`, `page.getByTestId` を優先する。
5. **アサーション**: `expect(...).toBeVisible()`, `toBeEnabled()`, `toHaveText()` など。
6. **実行**: `pnpm run e2e`。dev サーバーは設定で自動起動される。

## 注意

- ページオブジェクトは必須ではない。短い spec なら直接 `page` で操作してよい。
- 不安定を避けるため、必要に応じて `page.waitForSelector` や `expect(...).toBeVisible()` で表示を待つ。
