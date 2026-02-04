---
name: frontend-component
description: 新規 React コンポーネントの追加手順。コンポーネント追加時や「Button を追加して」と依頼されたときに使用する。
---

# 新規コンポーネント追加

## 手順

1. **配置**: `src/components/<Name>.tsx` にファイルを作成。関数コンポーネントで、props は型付きで定義する。
2. **スタイル**: Tailwind のユーティリティクラスを使用する。
3. **ストーリー**: `src/components/<Name>.stories.tsx` を作成。Jotai を使う場合は `Provider` と `createStore()` でデコレータをかける。
4. **単体テスト**: `src/components/<Name>.test.tsx` を作成。`within(render(...).container)` でクエリをスコープする。Jotai 利用時は `Provider` でラップする。
5. **export**: 必要に応じて `src/components/index.ts` などから re-export する。

## ひな形

- コンポーネント: 関数、props 型、return で JSX。
- ストーリー: `Meta<typeof Component>`, `StoryObj`, `Default` ストーリーを 1 つ。
- テスト: `describe`, `it`, `render` + `within(container)` で 1 件以上。
