# Prettier, ESLint, stylelint を導入した CRA(+TS)プロジェクトを素早く立ち上げる(w/ VSCode)

もう少し詳しく知りたい方は[**こちらの記事**](https://www.2754-tech-blog.com/articles/art01EMVGYAWR)が参考になります。

### 0. VSCode に以下の 3 つの拡張機能をインストールしておく

- Prettier - Code formatter(`esbenp.prettier-vscode`)
- ESLint(`dbaeumer.vscode-eslint`)
- stylelint(`stylelint.vscode-stylelint`)

### 1. CRA(+TS)プロジェクトの作成

```zsh:ターミナル
$ npx create-react-app --typescript <アプリ名>
```

### 2. ESLint の set up（ESLint は CRA に元々含まれている）

```zsh:ターミナル
$ yarn eslint --init

? How would you like to use ESLint?
=> To check syntax, find problems, and enforce code style

? What type of modules does your project use?
=> JavaScript modules (import/export)

? Which framework does your project use?
=> React

? Does your project use TypeScript?
=> Yes

? Where does your code run?
=> Browser

? How would you like to define a style for your project?
=> Use a popular style guide

? Which style guide do you want to follow?
=> Airbnb: https://github.com/airbnb/javascript

? What format do you want your config file to be in?
=> JavaScript

? Would you like to install them now with npm?
=> No
```

### 3. 必要なパッケージのインストール

```zsh:ターミナル
$ yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-prefer-arrow stylelint stylelint-config-standard stylelint-order stylelint-config-recess-order
```

### 4. `<アプリ名>`のルートディレクトリに、このリポジトリの中身を丸ごとコピーする。

### 5. 完了！

---

# 各ファイルの役割

- `.vscode/settings.json`: ワークスペースの設定(VSCode)
- `.eslintignore`: ESLint に ignore して欲しいファイルを設定
- `.eslintrc.js`: ESLint の設定ファイル
- `.prettierignore`: Prettier に ignore して欲しいファイルを設定
- `.prettierrc.js`: Prettier の設定ファイル
- `.stylelintrc.js`: stylelint の設定ファイル
- `README.md`: 本稿
- `tsconfig.eslint.json`: 関係ないコードが parse されるのを防ぐ

# ESLint 関連補足

### 用語

- parser: ソースコードを特定の言語仕様に合わせた AST(抽象構文木) に変換するもの
- plugin: ESLint に独自のルールを追加するもの
- shareable config: 複数のルールをまとめたもの

### .eslintrc.js の設定項目の意味

- env: プログラムの実行環境を指定
- extends: shareable config を指定（リストの後ろにあるものが優先される）
- parser: 使用する parser を指定
- parserOptions: parser の実行オプションを指定
- plugin: 使用する plugin を指定
- rules: ルールの設定
