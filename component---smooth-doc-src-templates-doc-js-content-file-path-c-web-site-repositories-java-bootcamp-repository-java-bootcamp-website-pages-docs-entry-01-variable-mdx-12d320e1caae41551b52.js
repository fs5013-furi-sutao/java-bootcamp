"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5619],{169:function(e,n,l){l.r(n),l.d(n,{default:function(){return h}});var a=l(63696),t=l(43023);function r(e){const n=Object.assign({h1:"h1",a:"a",div:"div",h2:"h2",p:"p",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li"},(0,t.RP)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h1,{id:"01-java-の変数",style:{position:"relative"}},a.createElement(n.a,{href:"#01-java-%E3%81%AE%E5%A4%89%E6%95%B0","aria-label":"01 java の変数 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"01. Java の変数"),"\n",a.createElement("p",{className:"goal"},"変数を使えるようになること"),"\n",a.createElement(n.h2,{id:"学習",style:{position:"relative"}},a.createElement(n.a,{href:"#%E5%AD%A6%E7%BF%92","aria-label":"学習 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"学習"),"\n",a.createElement(n.p,null,"変数とは何かを Web で調べてください。検索キーワードは、「 ",a.createElement(n.a,{href:"https://www.google.com/search?q=java+%E5%A4%89%E6%95%B0"},"java 変数")," 」です。\r\n3 種類ぐらい説明記事やサンプルコードを読んで、変数とは何かをつかみましょう。"),"\n",a.createElement(n.h2,{id:"変数の使い方",style:{position:"relative"}},a.createElement(n.a,{href:"#%E5%A4%89%E6%95%B0%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9","aria-label":"変数の使い方 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"変数の使い方"),"\n",a.createElement(n.p,null,"変数の概念を説明する際には、「箱」に例えることが多いです。ここでは変数の使い方を確認していきます。"),"\n",a.createElement(n.p,null,"変数を使う場合はまず初めに変数を作る必要があります。変数を作ることを「宣言」といいます。"),"\n",a.createElement(n.p,null,"変数の宣言ができたら値を入れます。変数に値を入れることを「代入」といいます。"),"\n",a.createElement(n.p,null,"そして、変数に入れた値を使うことを「参照」と言います。"),"\n",a.createElement(n.p,null,"続いて宣言、代入、参照のそれぞれのやり方を確認しましょう。"),"\n",a.createElement(n.h3,{id:"変数の宣言",style:{position:"relative"}},a.createElement(n.a,{href:"#%E5%A4%89%E6%95%B0%E3%81%AE%E5%AE%A3%E8%A8%80","aria-label":"変数の宣言 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"変数の宣言"),"\n",a.createElement(n.p,null,"変数を宣言する場合は、変数にどのような種類の値を入れるかを記述する必要がある。"),"\n",a.createElement(n.p,null,"整数を入れたい場合は",a.createElement(n.code,null,"int"),"型、文字列を入れたい場合は",a.createElement(n.code,null,"String"),"型というように記述します。この種類のことを「データ型」と呼びます。"),"\n",a.createElement(n.p,null,"下の例でint型の変数",a.createElement(n.code,null,"number"),"とString型の変数",a.createElement(n.code,null,"word"),"を宣言している。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java"},"public class Variable {\r\n    public static void main(String[] args) {\r\n        int number;\r\n        String word;\r\n    }\r\n}\n")),"\n",a.createElement(n.p,null,"この例では",a.createElement(n.code,null,"number"),"と",a.createElement(n.code,null,"word"),"は変数を識別ために付ける名前（変数名）です。変数名はプログラムの作成者が決めることができます。"),"\n",a.createElement(n.h3,{id:"変数に値を代入",style:{position:"relative"}},a.createElement(n.a,{href:"#%E5%A4%89%E6%95%B0%E3%81%AB%E5%80%A4%E3%82%92%E4%BB%A3%E5%85%A5","aria-label":"変数に値を代入 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"変数に値を代入"),"\n",a.createElement(n.p,null,"下の例ではそれぞれの変数に値を代入しています。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java"},'public class Variable {\r\n    public static void main(String[] args) {\r\n        int number;\r\n        String word;\r\n\r\n        number = 15;\r\n        word = "Hello";\r\n    }\r\n}\n')),"\n",a.createElement(n.p,null,"ここで注意が必要なのは「文字列」を扱う場合にダブルクォートで囲む必要があることです。\r\n文字列にダブルクォートを付けることでプログラムである部分とそうでない部分の区別を付けています。"),"\n",a.createElement(n.h3,{id:"変数の値を出力",style:{position:"relative"}},a.createElement(n.a,{href:"#%E5%A4%89%E6%95%B0%E3%81%AE%E5%80%A4%E3%82%92%E5%87%BA%E5%8A%9B","aria-label":"変数の値を出力 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"変数の値を出力"),"\n",a.createElement(n.p,null,"下の例はそれぞれの変数の値を画面に出力をしています。"),"\n",a.createElement(n.p,null,"出力には出力メソッドを使います。Javaでは主にprint、println、printfメソッドを使います。\r\nそれぞれの違いや使い方をWebで調べてください。検索キーワードは、「 ",a.createElement(n.a,{href:"https://www.google.com/search?q=java+%E5%87%BA%E5%8A%9B%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89"},"java 出力メソッド")," 」です。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java"},'public class Variable {\r\n    public static void main(String[] args) {\r\n        int number;\r\n        String word;\r\n\r\n        number = 15;\r\n        word = "Hello";\r\n\r\n        System.out.println(number);\r\n        System.out.println(word);\r\n    }\r\n}\n')),"\n",a.createElement(n.h3,{id:"プログラム実行結果",style:{position:"relative"}},a.createElement(n.a,{href:"#%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E5%AE%9F%E8%A1%8C%E7%B5%90%E6%9E%9C","aria-label":"プログラム実行結果 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"プログラム実行結果"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"15\r\nHello\n")),"\n",a.createElement(n.h3,{id:"変数の初期化",style:{position:"relative"}},a.createElement(n.a,{href:"#%E5%A4%89%E6%95%B0%E3%81%AE%E5%88%9D%E6%9C%9F%E5%8C%96","aria-label":"変数の初期化 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"変数の初期化"),"\n",a.createElement(n.p,null,"変数を宣言する時点で既に代入したい値が決まっている場合は、「宣言」と「代入」を同時に行うことができます。このことを「初期化」と言います。"),"\n",a.createElement(n.p,null,"下の例は初期化を使ってプログラムを書き換えたものです。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-java"},'public class Variable {\r\n    public static void main(String[] args) {\r\n        int number = 15;\r\n        String word = "Hello";\r\n\r\n        System.out.println(number);\r\n        System.out.println(word);\r\n    }\r\n}\n')),"\n",a.createElement(n.h2,{id:"練習問題時間-20-分",style:{position:"relative"}},a.createElement(n.a,{href:"#%E7%B7%B4%E7%BF%92%E5%95%8F%E9%A1%8C%E6%99%82%E9%96%93-20-%E5%88%86","aria-label":"練習問題時間 20 分 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"練習問題（時間: 20 分）"),"\n",a.createElement(n.p,null,"main メソッドに以下の 2 つの処理を記述して、プログラム実行結果が以下に示したようになるようにプログラムを作成しなさい。"),"\n",a.createElement(n.h3,{id:"1-変数宣言変数への代入処理",style:{position:"relative"}},a.createElement(n.a,{href:"#1-%E5%A4%89%E6%95%B0%E5%AE%A3%E8%A8%80%E5%A4%89%E6%95%B0%E3%81%B8%E3%81%AE%E4%BB%A3%E5%85%A5%E5%87%A6%E7%90%86","aria-label":"1 変数宣言変数への代入処理 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. 変数宣言、変数への代入処理:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"int型の変数「fatherAge」を宣言"),"\n",a.createElement(n.li,null,"変数「fatherAge」に 42 を代入"),"\n",a.createElement(n.li,null,"int型の変数「motherAge」を宣言"),"\n",a.createElement(n.li,null,"変数「motherAge」に 38 を代入"),"\n",a.createElement(n.li,null,"int型の変数「myAge」を 20 で初期化"),"\n",a.createElement(n.li,null,"int型の変数「myWeightKg」を 670 で初期化"),"\n"),"\n",a.createElement(n.h3,{id:"2-変数に代入した数値の表示処理",style:{position:"relative"}},a.createElement(n.a,{href:"#2-%E5%A4%89%E6%95%B0%E3%81%AB%E4%BB%A3%E5%85%A5%E3%81%97%E3%81%9F%E6%95%B0%E5%80%A4%E3%81%AE%E8%A1%A8%E7%A4%BA%E5%87%A6%E7%90%86","aria-label":"2 変数に代入した数値の表示処理 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. 変数に代入した数値の表示処理:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"「fatherAge」を表示"),"\n",a.createElement(n.li,null,"「motherAge」を表示"),"\n",a.createElement(n.li,null,"「myAge」を表示"),"\n",a.createElement(n.li,null,"「myWeightKg」を表示"),"\n"),"\n",a.createElement(n.h3,{id:"プログラム実行結果-1",style:{position:"relative"}},a.createElement(n.a,{href:"#%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E5%AE%9F%E8%A1%8C%E7%B5%90%E6%9E%9C-1","aria-label":"プログラム実行結果 1 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"プログラム実行結果"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"ぼくのパパの年齢は 42 歳です.\r\nぼくのママの年齢は 38 歳です.\r\nぼくの年齢は 20 歳です.\r\nぼくの体重は 670Kg です.\n")),"\n",a.createElement(n.h2,{id:"解答例",style:{position:"relative"}},a.createElement(n.a,{href:"#%E8%A7%A3%E7%AD%94%E4%BE%8B","aria-label":"解答例 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"解答例"),"\n",a.createElement(n.p,null,a.createElement(n.a,{href:"https://github.com/fs5013-furi-sutao/java-bootcamp-answers/blob/main/02.entry/01.variables/src/ShowFamilyInfo.java"},"https://github.com/fs5013-furi-sutao/java-bootcamp-answers/blob/main/02.entry/01.variables/src/ShowFamilyInfo.java")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.RP)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)};function i(e){let{children:n}=e;return n}function h(e){return a.createElement(i,e,a.createElement(c,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-c-web-site-repositories-java-bootcamp-repository-java-bootcamp-website-pages-docs-entry-01-variable-mdx-12d320e1caae41551b52.js.map