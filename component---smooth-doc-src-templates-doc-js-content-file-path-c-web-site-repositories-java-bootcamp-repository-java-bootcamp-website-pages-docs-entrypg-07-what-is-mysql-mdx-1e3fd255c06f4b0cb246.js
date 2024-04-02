"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6844],{99484:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(63696),l=n(43023);function r(e){const t=Object.assign({h1:"h1",a:"a",div:"div",h2:"h2",h3:"h3",p:"p"},(0,l.RP)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,{id:"07-mysqlとは",style:{position:"relative"}},a.createElement(t.a,{href:"#07-mysql%E3%81%A8%E3%81%AF","aria-label":"07 mysqlとは permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"07. MySQLとは"),"\n",a.createElement("p",{className:"goal"},"MySQLとは何かを知る"),"\n",a.createElement(t.h2,{id:"学習",style:{position:"relative"}},a.createElement(t.a,{href:"#%E5%AD%A6%E7%BF%92","aria-label":"学習 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"学習"),"\n",a.createElement(t.h3,{id:"mysqlとは",style:{position:"relative"}},a.createElement(t.a,{href:"#mysql%E3%81%A8%E3%81%AF","aria-label":"mysqlとは permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"MySQLとは"),"\n",a.createElement(t.p,null,"MySQLは、データの管理と格納に広く使用されているオープンソースのリレーショナルデータベース管理システム（RDBMS）です。\r\n名前こと難しいですが、データを効率良く管理するためのシステムです。"),"\n",a.createElement(t.p,null,"普段私たちが使っている様々なサービスにRDBMSが広く使われています。\r\nRDBMSにはOracle Database、SQL Server、PostgreSQLなど様々なものが存在していますが本試験ではMySQLを使います。"),"\n",a.createElement(t.p,null,"MySQLを使うためにDBサーバ（データベースサーバ）を準備する必要があります。\r\nここでは軽量で高速に動作するコンテナ型仮想環境用のプラットフォームであるDockerを使用します。"),"\n",a.createElement(t.p,null,"Dockerについて詳しく知りたい方はWebで調べてください。検索ワードは、「 ",a.createElement(t.a,{href:"https://www.google.com/search?q=Docker%E3%81%A8%E3%81%AF"},"Dockerとは")," 」です。"),"\n",a.createElement(t.p,null,"また、データベースの学習を進めるうえで、一般的に使用する用語も確認しておきましょう。検索ワードは、「 ",a.createElement(t.a,{href:"https://www.google.com/search?q=%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9+%E7%94%A8%E8%AA%9E"},"データベース　用語")," 」です。"),"\n",a.createElement(t.p,null,"ここで最初に押さえておきたい用語は「テーブル」「カラム」「レコード」「フィールド」です。"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.RP)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)};function h(e){let{children:t}=e;return t}function s(e){return a.createElement(h,e,a.createElement(c,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-c-web-site-repositories-java-bootcamp-repository-java-bootcamp-website-pages-docs-entrypg-07-what-is-mysql-mdx-1e3fd255c06f4b0cb246.js.map