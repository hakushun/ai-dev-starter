# 新規コンポーネント追加

以下の情報を教えてください。不足があれば質問します。

- **名前**: コンポーネント名（PascalCase）
- **役割**: 何を表示・操作するか（1〜2文）
- **props**: 必要な props と型（例: `label: string`, `onClick?: () => void`）
- **Storybook**: ストーリーを追加するか（Yes/No）
- **単体テスト**: テストを追加するか（Yes/No）

配置は `src/components/<Name>.tsx` とし、Tailwind でスタイルする。Jotai を使う場合は `src/store/` に atom を追加する。
