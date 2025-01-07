# webpro_06
2024/11/17

## ファイル一覧
ファイル名 | 説明
-|-
app8.js | サーバーの方
bbs.js | クライアントの方
bbs.html | HTMLファイル


## 起動方法
1. ターミナルを開く．
1. 下記のように，cdコマンドでapp5.jsまた，同時に扱う他のhtmlファイルやejsファイルのあるディレクトリに移動する．
    ```javascript
    $ cd webpro_06
    ```
1. nodeコマンドを使用してapp8.jsを起動する．
    ```javascript
    $ node app8.js
    ```
1. telnetコマンドを使用しポートに接続する
    ```javascript
    $ telnet localhost 8080
    ```
1. 扱いたいプログラムを選択する．
    ```javascript
    GET /"扱うプログラム名" HTTP/1.1
    Host: localhost
    ```
1. WebブラウザのURL欄に下記のURLを入力しページを表示する．
    ```javascript
    http://localhost:8080/bbs.html
    ```

## 編集したファイルをGitで管理する
1. ターミナルを開く．
1. 下記のように，cdコマンドでapp5.jsまた，同時に扱う他のhtmlファイルやejsファイルのあるディレクトリに移動する．
    ```javascript
    $ cd webpro_06
    ```
1. 下記のコマンドを順に入力する．コメントには変更理由や変更内容を書く．
    ```javascript
    $ git add .
    $ git commit -am 'コメント'
    $ git push
    ```

## 仕様①連続投稿数のカウント

### 仕様の説明
同じ名前の人が連続して投稿をすると何回連続して投稿しているかをカウントすることができる．
名前を変更するとカウントが１に戻り再度カウントを開始する．

### 使用するための手順
1. 名前とメッセージを入力し，送信ボタンを押す．
2. 画面上部で連続投稿数がカウントされる．

### フローチャート
```mermaid
flowchart TD;

start["開始"];
end1["料金の請求"]
end11["料金の請求"]
end2["ハンター試験参加"]
end3["終了"]
if1{"何を注文するか"}
if2{"火加減"}
ura1{"火加減"}

start --> if1
if1 -->|焼肉定食| if2
if1 -->|ステーキ定食| ura1
if1 -->|唐揚げ定食| if2
if2 -->|弱火|end1
if2 -->|普通|end1
if2 -->|強火|end1
ura1 -->|弱火|end2
ura1 -->|普通|end11
ura1 -->|強火|end11
end1 --> end3
end11 --> end3
end2 --> end3
```
## 仕様②再投稿ボタン
### 機能の説明
このプログラムはガチャを引くにあたって，ガチャを引く回数に対する目当てのものを引ける確率を計算するプログラムである．
出力する確率は，目当てのものが引けない確率・１つ以上引ける確率・２つ以上引ける確率の３つである．

### 使用するための手順

1. 排出率と試行回数（ガチャを引く回数）を入力する．
2. 送信を押す．

### フローチャート

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
nyuryoku1["排出率の入力"]
nyuryoku2["試行回数の入力"]
keisan["確率の計算"]
if1{"排出率は0以上か"}
if2{"試行回数は0以上か"}
syu0["出ないときの確率の出力"]
syu1["1体以上の確率の出力"]
syu2["2体以上の確率の出力"]


start --> nyuryoku1
nyuryoku1 --> nyuryoku2
nyuryoku2 --> keisan
keisan --> if1
if1 --> |yes|if2
if1 --> |no|nyuryoku1
if2 --> |yes|syu0 
syu0 --> syu1 
syu1 --> syu2 
if2 --> |no|nyuryoku2
syu2 --> end1
```

## 仕様③絵文字ボタン
### 機能の説明
このプログラムはガチャを引くにあたって，ガチャを引く回数に対する目当てのものを引ける確率を計算するプログラムである．
出力する確率は，目当てのものが引けない確率・１つ以上引ける確率・２つ以上引ける確率の３つである．

### 使用するための手順

1. 排出率と試行回数（ガチャを引く回数）を入力する．
2. 送信を押す．

### フローチャート

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
nyuryoku1["排出率の入力"]
nyuryoku2["試行回数の入力"]
keisan["確率の計算"]
if1{"排出率は0以上か"}
if2{"試行回数は0以上か"}
syu0["出ないときの確率の出力"]
syu1["1体以上の確率の出力"]
syu2["2体以上の確率の出力"]


start --> nyuryoku1
nyuryoku1 --> nyuryoku2
nyuryoku2 --> keisan
keisan --> if1
if1 --> |yes|if2
if1 --> |no|nyuryoku1
if2 --> |yes|syu0 
syu0 --> syu1 
syu1 --> syu2 
if2 --> |no|nyuryoku2
syu2 --> end1
```