# 要件定義

## 背景

NON PICKUP Rank 28 の `撮影選別・現像証跡パネル` は、Lightroom Classicの選別理由、現像意図、書き出し用途を証跡化するパネルとして閉域アルファ化します。

## ユーザー価値

- 採用写真ごとに用途、現像メモ、再編集メモをレポート化する
- 入力、確認、履歴保存、次アクションを同じ作業単位で扱う。
- MVP後の磨き込みで UI/UX、責務分割、手動テスト、配布準備を同時に確認できる。

## MVP

- 代表データ4種を処理できる。
- 必須項目不足を error、補助項目不足を warning として分ける。
- リリース前 docs、QCDS、security/privacy、traceability、release evidence をそろえる。

## 非目標

- 実ユーザーデータのクラウド同期。
- 有料販売ページ、Google Play Console、BOOTH 商品ページの実公開。
- Codex 側での手動テスト代行。
