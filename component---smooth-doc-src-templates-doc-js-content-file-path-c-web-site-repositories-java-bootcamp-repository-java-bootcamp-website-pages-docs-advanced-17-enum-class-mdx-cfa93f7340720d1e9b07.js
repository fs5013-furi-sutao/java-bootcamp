"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6034],{69771:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var a=t(63696),l=t(43023);function r(e){const n=Object.assign({h1:"h1",a:"a",div:"div",h2:"h2",h3:"h3",p:"p",pre:"pre",code:"code",br:"br"},(0,l.RP)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h1,{id:"17-列挙子-enum-の使い方基本",style:{position:"relative"}},a.createElement(n.a,{href:"#17-%E5%88%97%E6%8C%99%E5%AD%90-enum-%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9%E5%9F%BA%E6%9C%AC","aria-label":"17 列挙子 enum の使い方基本 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"17. 列挙子 Enum の使い方（基本）"),"\n",a.createElement("p",{className:"goal"},"Enum とは何かが分かり、enum を実装、利用できるようになること"),"\n",a.createElement(n.h2,{id:"学習",style:{position:"relative"}},a.createElement(n.a,{href:"#%E5%AD%A6%E7%BF%92","aria-label":"学習 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"学習"),"\n",a.createElement(n.h3,{id:"enum-クラスを知る",style:{position:"relative"}},a.createElement(n.a,{href:"#enum-%E3%82%AF%E3%83%A9%E3%82%B9%E3%82%92%E7%9F%A5%E3%82%8B","aria-label":"enum クラスを知る permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Enum クラスを知る"),"\n",a.createElement(n.p,null,"Enum クラスとは何かを Web で調べてください。\r\n検索キーワードは、「 ",a.createElement(n.a,{href:"https://www.google.com/search?q=java+enum"},"java enum")," 」です。\r\n3 種類ぐらい説明記事やサンプルコードを読んで、Enum クラスとは何か、Enum クラスの使い方をつかみましょう。"),"\n",a.createElement(n.h2,{id:"enum-とは",style:{position:"relative"}},a.createElement(n.a,{href:"#enum-%E3%81%A8%E3%81%AF","aria-label":"enum とは permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Enum とは"),"\n",a.createElement(n.p,null,"Enum は enumeration（エナメレーション）の略で、意味的には「列挙」「数え上げること」「一覧表」となる。"),"\n",a.createElement(n.h3,{id:"読み方",style:{position:"relative"}},a.createElement(n.a,{href:"#%E8%AA%AD%E3%81%BF%E6%96%B9","aria-label":"読み方 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"読み方"),"\n",a.createElement(n.p,null,"なので読み方は、英語的には「エナム」となるが、日本では「イーナム」で通ることが多い。"),"\n",a.createElement(n.h3,{id:"列挙子",style:{position:"relative"}},a.createElement(n.a,{href:"#%E5%88%97%E6%8C%99%E5%AD%90","aria-label":"列挙子 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"列挙子"),"\n",a.createElement(n.p,null,"列挙子と言われても、なかなか一般的に使わない言葉だが、「問題点を列挙する」というと「問題点を 1 つ 1 つ挙げていく」という意味合いになる。"),"\n",a.createElement(n.p,null,"Enum の役割的にも、Enum は「要素を列挙したもの」ということになる。"),"\n",a.createElement(n.h2,{id:"enumの宣言",style:{position:"relative"}},a.createElement(n.a,{href:"#enum%E3%81%AE%E5%AE%A3%E8%A8%80","aria-label":"enumの宣言 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Enumの宣言"),"\n",a.createElement(n.p,null,"Enum は次のような構文で宣言する。"),"\n",a.createElement(n.p,null,"ここでは「果物」を例としたい。ファイル名は FruitType.java となる。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java",meta:'title="FruitTypes.java'},"enum FruitType {\r\n\r\n    APPLE,\r\n    ORANGE,\r\n    BANANA,\r\n    PEACH,\r\n    ;\r\n\r\n}\r\n\n")),"\n",a.createElement(n.p,null,"この Enum では「果物（FruitTypes）は、りんご（APPLE）、みかん（ORANGE）、バナナ（BANANA）、モモ（PEACH）のいずれかである」と宣言している。"),"\n",a.createElement(n.p,null,"見て分かる通り、宣言に利用されているキーワードは enum で、class ではない。つまり、Enum はクラスではない。"),"\n",a.createElement(n.p,null,"ように見えるが、Java の内部的には enum は、抽象クラス Enum を継承（extends）したクラスである。"),"\n",a.createElement(n.p,null,"OpenJDK 15: ",a.createElement(n.code,null,"Class Enum<E extends Enum<E>>"),a.createElement(n.br),"\n",a.createElement(n.a,{href:"https://cr.openjdk.java.net/~iris/se/15/latestSpec/api/java.base/java/lang/Enum.html"},"https://cr.openjdk.java.net/~iris/se/15/latestSpec/api/java.base/java/lang/Enum.html")),"\n",a.createElement(n.p,null,"上記で例に出した enum 宣言は、以下のクラス宣言と等価（結果が同じ）となる。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java"},"class FruitType {\r\n    public static final FruitType APPLE = new FruitType();\r\n    public static final FruitType ORANGE = new FruitType();\r\n    public static final FruitType BANANA = new FruitType();\r\n    public static final FruitType PEACH = new FruitType();\r\n\r\n    // 外部からインスタンス化できないようにする\r\n    private FruitType() {}\r\n}\n")),"\n",a.createElement(n.h3,{id:"enum-と-class-の違い",style:{position:"relative"}},a.createElement(n.a,{href:"#enum-%E3%81%A8-class-%E3%81%AE%E9%81%95%E3%81%84","aria-label":"enum と class の違い permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"enum と class の違い"),"\n",a.createElement(n.p,null,"ただし、enum がクラスと違うのは、暗黙的に便利なメソッドが備わることである。暗黙的に備わっているメソッドについては後述する。"),"\n",a.createElement(n.h3,{id:"enum-の値はなぜ大文字か",style:{position:"relative"}},a.createElement(n.a,{href:"#enum-%E3%81%AE%E5%80%A4%E3%81%AF%E3%81%AA%E3%81%9C%E5%A4%A7%E6%96%87%E5%AD%97%E3%81%8B","aria-label":"enum の値はなぜ大文字か permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"enum の値はなぜ大文字か？"),"\n",a.createElement(n.p,null,"enum の 値について、表記を大文字にしているのは、Java の一般的な慣習で定数は大文字としているからだ。そのため、小文字で表記してもコンパイルエラーにはならない。"),"\n",a.createElement(n.p,null,"しかし、Java の標準 API や多くのフレームワークでも enum の値は「すべて大文字で単語の区切りはアンダースコア」となっている。"),"\n",a.createElement(n.p,null,"そのため、このルールを守った方が、共同開発する際には他のチームメイトが、コードをメンテしやすくなる。"),"\n",a.createElement(n.h2,{id:"enum-の値の使い方",style:{position:"relative"}},a.createElement(n.a,{href:"#enum-%E3%81%AE%E5%80%A4%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9","aria-label":"enum の値の使い方 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"enum の値の使い方"),"\n",a.createElement(n.p,null,"enum の値は、クラスにおける static フィールドとほぼ同じである。"),"\n",a.createElement(n.p,null,"enum の値、すなわちインスタンスへのアクセスは、static フィールドへのアクセスと同じ「enum名. 値の名称」となる。"),"\n",a.createElement(n.p,null,"上記で作成した FruitType の列挙子を使ってみる。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java"},"System.out.println(FruitType.BANANA);\n")),"\n",a.createElement(n.p,null,"実行結果:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"BANANA\n")),"\n",a.createElement(n.p,null,"もちろん、FruitType で定義したもの以外を呼び出すことはできない（コンパイルエラー）。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java"},"// コンパイルエラー\r\nFruitType.GORILLA;\n")),"\n",a.createElement(n.p,null,"enum で定義した値は、Enum 自身のインスタンスである。String や Integer ではない。つまり、FruitType. BANANA は、「果物の 1 つとしてのバナナ」を表現していることになる。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java"},"boolean isBananaFruitType = FruitType.BANANA instanceof FruitType;\r\nSystem.out.println(isBananaFruitType);\n")),"\n",a.createElement(n.p,null,"実行結果:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"true\n")),"\n",a.createElement(n.p,null,"enum はクラスと同じように型として扱える。変数として宣言したり、enum のインスタンスを参照したりすることができる。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java"},"FruitType myFavoriteFruitType = FruitType.PEACH;\r\nFruitType myHateFruitType = FruitType.APPLE;\r\n\r\nshowFruitType(myFavoriteFruitType);\r\n\r\npublic void showFruitType(FruitType fruitType) {\r\n    System.out.println(fruitType);\r\n}\n")),"\n",a.createElement(n.p,null,"つまり、enum はクラスのインスタンスと同じように扱えるものである。"),"\n",a.createElement(n.h3,{id:"enum-はインスタンスを生成できない",style:{position:"relative"}},a.createElement(n.a,{href:"#enum-%E3%81%AF%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%82%92%E7%94%9F%E6%88%90%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84","aria-label":"enum はインスタンスを生成できない permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Enum はインスタンスを生成できない"),"\n",a.createElement(n.p,null,"Enum が通常のクラスと違う最大のポイントは「インスタンスの生成を enum の外部からできない」ことである。enum として存在するインスタンスは、enum 内であらかじめ定義した値に限られる。"),"\n",a.createElement(n.p,null,"これが Enum の存在意義である。"),"\n",a.createElement(n.p,null,"だからこそ、enum の各インスタンスは、実行されるプログラムの中で「ただ 1 つしかない」ことが保証される「定数」として扱える。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java"},"// コンパイルエラー\r\nFruitType fruitType = new FruitType();\n")),"\n",a.createElement(n.h3,{id:"enum-はアプリの中で設定値として利用される",style:{position:"relative"}},a.createElement(n.a,{href:"#enum-%E3%81%AF%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E4%B8%AD%E3%81%A7%E8%A8%AD%E5%AE%9A%E5%80%A4%E3%81%A8%E3%81%97%E3%81%A6%E5%88%A9%E7%94%A8%E3%81%95%E3%82%8C%E3%82%8B","aria-label":"enum はアプリの中で設定値として利用される permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Enum は、アプリの中で設定値として利用される"),"\n",a.createElement(n.p,null,"以上の性質から、Enum はアプリの中で設定値として利用されることが多い。"),"\n",a.createElement(n.p,null,"今回の FruitType の例では、プログラム上では、果物には「りんご」「みかん」「バナナ」「モモ」の 4 種類しか存在しないことが保証される。"),"\n",a.createElement(n.p,null,"アプリで言えば、例えば会員のランクを表す列挙子として MemberRank という enum を作ったとしよう。"),"\n",a.createElement(n.p,null,"SILVER と GOLD という値を定義すれば、会員ランクには 2 種類しか存在しないことが保証される。"),"\n",a.createElement(n.p,null,"アプリを改修したい時でも、「一般会員」を増やすなら、ここに GENERAL を増やすだけで、改修が可能となる。"),"\n",a.createElement(n.h2,{id:"enum-を使ってみる",style:{position:"relative"}},a.createElement(n.a,{href:"#enum-%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B","aria-label":"enum を使ってみる permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Enum を使ってみる"),"\n",a.createElement(n.h3,{id:"enum-と-enum-の比較",style:{position:"relative"}},a.createElement(n.a,{href:"#enum-%E3%81%A8-enum-%E3%81%AE%E6%AF%94%E8%BC%83","aria-label":"enum と enum の比較 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Enum と Enum の比較"),"\n",a.createElement(n.p,null,"以下は、if や switch の条件判定に Enum を使うケース。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java"},'FruitType fruitType = FruitType.BANANA;\r\n\r\nif (fruitType == FruitType.BANANA) {\r\n    System.out.println("バナナ");\r\n}\n')),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java"},'FruitType fruitType = FruitType.BANANA;\r\nswitch (fruitType) {\r\n    case APPLE:\r\n        System.out.println("りんご");\r\n        break;\r\n    case ORANGE:\r\n        System.out.println("みかん");\r\n        break;\r\n    case BANANA:\r\n        System.out.println("バナナ");\r\n        break;\r\n    case PEACH:\r\n        System.out.println("モモ");\r\n        break;\r\n}\n')),"\n",a.createElement(n.p,null,"この通り、Enum 同士の比較は == で可能となる。equals() メソッドでも比較は可能だが、可読性が悪くなるので、オススメできない。"),"\n",a.createElement(n.p,null,"Java の equals() メソッドの挙動について、しっかり理解している人は、文字列を比較する事例から「== だと、保持する値は同じだけれども、インスタンスが違ったら false になるのでマズいのでは？」と心配するかもしれない。"),"\n",a.createElement(n.p,null,"しかし、enum ではその心配は不要となる。"),"\n",a.createElement(n.p,null,"なぜなら、enum の値、つまりインスタンスは、実行されるプログラム上で必ず 1 つだけになることが保証されているからである。Enum インスタンスの比較は == で OK である。"),"\n",a.createElement(n.h2,{id:"enum-が暗黙的に持つメソッド",style:{position:"relative"}},a.createElement(n.a,{href:"#enum-%E3%81%8C%E6%9A%97%E9%BB%99%E7%9A%84%E3%81%AB%E6%8C%81%E3%81%A4%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89","aria-label":"enum が暗黙的に持つメソッド permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Enum が暗黙的に持つメソッド"),"\n",a.createElement(n.p,null,"Enum には標準で備わっているメソッドがある。以下で説明するものは、enum であれば、定義、実装をしないでも共通的に使えるものである。"),"\n",a.createElement(n.h3,{id:"name-メソッド",style:{position:"relative"}},a.createElement(n.a,{href:"#name-%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89","aria-label":"name メソッド permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"name() メソッド"),"\n",a.createElement(n.p,null,"name は enum の値の名称を String として返すメソッドである。変数が参照しているのがどの値なのかを確認する時などに利用する。"),"\n",a.createElement(n.p,null,"name() メソッドは、enum 値（インスタンス）から呼び出す、インスタンスメソッドである。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java"},"FruitType fruitType = FruitType.BANANA;\r\n\r\nSystem.out.println(fruitType.name());\n")),"\n",a.createElement(n.h3,{id:"ordinal-メソッド",style:{position:"relative"}},a.createElement(n.a,{href:"#ordinal-%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89","aria-label":"ordinal メソッド permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"ordinal() メソッド"),"\n",a.createElement(n.p,null,"ordinal() メソッドは Enum が宣言された順番（インデックス）を数値で返すメソッドである。インデックスは、ゼロ始まりとなる。"),"\n",a.createElement(n.p,null,"ordinal() メソッドも、enum 値（インスタンス）から呼び出す、インスタンスメソッドである。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java"},"System.out.println(FruitType.APPLE.ordinal());\r\nSystem.out.println(FruitType.ORANGE.ordinal());\r\nSystem.out.println(FruitType.BANANA.ordinal());\r\nSystem.out.println(FruitType.PEACH.ordinal());\n")),"\n",a.createElement(n.p,null,"実行結果:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"0\r\n1\r\n2\r\n3\n")),"\n",a.createElement(n.h3,{id:"valueof-メソッド",style:{position:"relative"}},a.createElement(n.a,{href:"#valueof-%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89","aria-label":"valueof メソッド permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"valueOf() メソッド"),"\n",a.createElement(n.p,null,"valueOf() メソッドは文字列に対応する enum 値を返すメソッドである。valueOf() メソッドは、Enum の static メソッドなので、enum 値（インスタンス）から呼び出せるメソッドではない。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java"},'String fruitName = "BANANA";\r\n\r\nFruitType fruitType = FruitType.valueOf(fruitName);\r\nSystem.out.println(fruitType);\n')),"\n",a.createElement(n.p,null,"実行結果:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"BANANA\n")),"\n",a.createElement(n.p,null,"enum で定義された値に該当しない文字列を指定すると、実行時例外が発生する。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java"},'FruitType fruitType = FruitType.valueOf("DORAGON");\n')),"\n",a.createElement(n.p,null,"実行結果:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"java.lang.IllegalArgumentException: No enum constant FruitType.DORAGON\n")),"\n",a.createElement(n.h3,{id:"values-メソッド",style:{position:"relative"}},a.createElement(n.a,{href:"#values-%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89","aria-label":"values メソッド permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"values() メソッド"),"\n",a.createElement(n.p,null,"values() メソッドは、すべての enum 値の配列を返す static メソッドである。全ての値に対して処理を実行したい場合に利用する。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java"},"FruitType[] fruitTypes = FruitType.values();\r\n\r\nfor (FruitType fruitType : fruitTypes) {\r\n    System.out.println(FruitType);\r\n}\n")),"\n",a.createElement(n.p,null,"実行結果:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"APPLE\r\nORANGE\r\nBANANA\r\nPEACH\n")),"\n",a.createElement(n.h2,{id:"まとめ",style:{position:"relative"}},a.createElement(n.a,{href:"#%E3%81%BE%E3%81%A8%E3%82%81","aria-label":"まとめ permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"まとめ"),"\n",a.createElement(n.p,null,"Java における Enum とは何か、から基本的な使い方までを見てきた。"),"\n",a.createElement(n.p,null,"Enum はクラスと同じように使うことができるが、インスタンスを生成できない。よって、各 enum 値は実行されるプログラム中にただ 1 つ存在することが保証されたインスタンスであることがわかる。"),"\n",a.createElement(n.p,null,"Enum の利用価値は、定数として、さらにアプリの中では設定値して有効となる。"),"\n",a.createElement(n.p,null,"また、Enum には、暗黙的に name()、ordinal()、valueOf()、values() といったメソッドが用意されている。"),"\n",a.createElement(n.p,null,"そのため、Enum を使い慣れれば、定数や設定値の管理が簡潔に行えるようになる。"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.RP)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)};function u(e){let{children:n}=e;return n}function i(e){return a.createElement(u,e,a.createElement(c,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-c-web-site-repositories-java-bootcamp-repository-java-bootcamp-website-pages-docs-advanced-17-enum-class-mdx-cfa93f7340720d1e9b07.js.map