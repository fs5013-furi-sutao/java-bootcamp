"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9957],{14954:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(63696),a=t(43023);function i(e){const n=Object.assign({h1:"h1",a:"a",div:"div",h2:"h2",h3:"h3",p:"p",ol:"ol",li:"li",pre:"pre",code:"code"},(0,a.RP)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.h1,{id:"09-getter-と-setter-は最小限に",style:{position:"relative"}},r.createElement(n.a,{href:"#09-getter-%E3%81%A8-setter-%E3%81%AF%E6%9C%80%E5%B0%8F%E9%99%90%E3%81%AB","aria-label":"09 getter と setter は最小限に permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"09. Getter と Setter は最小限に"),"\n",r.createElement("p",{className:"goal"},"Getter/Setter を機械的に実装して、外部にロジックが漏れ出す危険性を認識していないと、\r\n大規模アプリを作った際に、改修が大変になってしまうことを知る。\r\n凝集度の高いプログラムをイメージできるようになること"),"\n",r.createElement(n.h2,{id:"学習",style:{position:"relative"}},r.createElement(n.a,{href:"#%E5%AD%A6%E7%BF%92","aria-label":"学習 permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"学習"),"\n",r.createElement(n.h3,{id:"gettersetter-のメリット",style:{position:"relative"}},r.createElement(n.a,{href:"#gettersetter-%E3%81%AE%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88","aria-label":"gettersetter のメリット permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Getter/Setter のメリット"),"\n",r.createElement(n.p,null,"クラスに Getter や Setter を実装すると便利です。"),"\n",r.createElement(n.p,null,"なぜなら、どこのクラスからでも、そのインスタンスの値を取得したり、設定したりすることができるからです。\r\nつまりそれは、どこからでもインスタンスを処理するロジックを、自由に組めることを意味します。"),"\n",r.createElement(n.p,null,"しかし、その自由度の高さは、裏返すと、同じようなロジックをそこら中に実装することが可能となる、というデメリットも含んでいます。"),"\n",r.createElement(n.h3,{id:"gettersetter-で外部にロジックが漏れ出すデメリット",style:{position:"relative"}},r.createElement(n.a,{href:"#gettersetter-%E3%81%A7%E5%A4%96%E9%83%A8%E3%81%AB%E3%83%AD%E3%82%B8%E3%83%83%E3%82%AF%E3%81%8C%E6%BC%8F%E3%82%8C%E5%87%BA%E3%81%99%E3%83%87%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88","aria-label":"gettersetter で外部にロジックが漏れ出すデメリット permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Getter/Setter で外部にロジックが漏れ出すデメリット"),"\n",r.createElement(n.p,null,"同じようなロジックが、散在すると何がいけないのか？"),"\n",r.createElement(n.p,null,"例えば、「元号」を表すクラスがあるとしましょう。"),"\n",r.createElement(n.p,null,"大規模なシステムで、元号を取得して加算するロジックが 300 箇所あったらどうでしょうか？"),"\n",r.createElement(n.p,null,"元号を加算する方法（仕様）が変更になったら、えらいことになります。"),"\n",r.createElement(n.p,null,"その 300 箇所全部を変更しなければならないからです。"),"\n",r.createElement(n.p,null,"また、その 300 箇所全部について、変更した場合の影響を全部調べなければいけません。\r\nさらに、変更漏れや、変更間違いによって、新たなバグを生んでしまう可能性もあります。"),"\n",r.createElement(n.p,null,"反対に、そもそも元号クラスに Getter/Setter がなく、加算処理もすべて元号クラスの中でやっていたらどうでしょうか？"),"\n",r.createElement(n.p,null,"加算処理に変更が必要となった場合でも、元号クラス内の加算処理を変更するだけで改修が完了します。"),"\n",r.createElement(n.h3,{id:"凝集度の高いプログラムへ",style:{position:"relative"}},r.createElement(n.a,{href:"#%E5%87%9D%E9%9B%86%E5%BA%A6%E3%81%AE%E9%AB%98%E3%81%84%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%B8","aria-label":"凝集度の高いプログラムへ permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"凝集度の高いプログラムへ"),"\n",r.createElement(n.p,null,"こうしたことから考えても、Getter/Setter は最小限に留めて実装すべきです。"),"\n",r.createElement(n.p,null,"もっといえば、Getter/Setter がなくても済むような設計をできる限り目指すべきです。"),"\n",r.createElement(n.p,null,"そうした、ロジックが外に流出しないプログラムの作り方を「凝集度の高いプログラム」と呼びます。"),"\n",r.createElement(n.p,null,"1 つのクラスに、そのクラスに必要なメソッドがまとまっている状態。それが凝集度の高いプログラムです。"),"\n",r.createElement(n.h2,{id:"練習問題時間-20-分",style:{position:"relative"}},r.createElement(n.a,{href:"#%E7%B7%B4%E7%BF%92%E5%95%8F%E9%A1%8C%E6%99%82%E9%96%93-20-%E5%88%86","aria-label":"練習問題時間 20 分 permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"練習問題（時間: 20 分）"),"\n",r.createElement(n.p,null,"次の 3 つのクラスについて、凝集度が高いプログラムになるようにリファクタリングしなさい"),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"従業員を表す Employee クラス"),"\n",r.createElement(n.li,null,"部署を表す Division クラス"),"\n",r.createElement(n.li,null,"Employee クラスと Division クラスを利用する Business クラス"),"\n"),"\n",r.createElement(n.h3,{id:"1-employeejava",style:{position:"relative"}},r.createElement(n.a,{href:"#1-employeejava","aria-label":"1 employeejava permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. Employee.java"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-java"},"package mid.minimize.accessor;\r\n\r\n/**\r\n * 従業員クラス\r\n */\r\npublic class Employee {\r\n\r\n    private int id;\r\n    private String name;\r\n    private int age;\r\n    private Division division;\r\n\r\n    public int getId() {\r\n        return id;\r\n    }\r\n\r\n    public void setId(int id) {\r\n        this.id = id;\r\n    }\r\n\r\n    public String getName() {\r\n        return name;\r\n    }\r\n\r\n    public void setName(String name) {\r\n        this.name = name;\r\n    }\r\n\r\n    public int getAge() {\r\n        return age;\r\n    }\r\n\r\n    public void setAge(int age) {\r\n        this.age = age;\r\n    }\r\n\r\n    public Division getDivision() {\r\n        return division;\r\n    }\r\n\r\n    public void setDivision(Division division) {\r\n        this.division = division;\r\n    }\r\n}\n")),"\n",r.createElement(n.h3,{id:"2-divisionjava",style:{position:"relative"}},r.createElement(n.a,{href:"#2-divisionjava","aria-label":"2 divisionjava permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. Division.java"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-java"},"package mid.minimize.accessor;\r\n\r\n/**\r\n * 部署クラス\r\n */\r\npublic class Division {\r\n\r\n    private int id;\r\n    private String name;\r\n\r\n    public int getId() {\r\n        return id;\r\n    }\r\n\r\n    public void setId(int id) {\r\n        this.id = id;\r\n    }\r\n\r\n    public String getName() {\r\n        return name;\r\n    }\r\n\r\n    public void setName(String name) {\r\n        this.name = name;\r\n    }\r\n}\n")),"\n",r.createElement(n.h3,{id:"3-businessjava",style:{position:"relative"}},r.createElement(n.a,{href:"#3-businessjava","aria-label":"3 businessjava permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3. Business.java"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-java"},'package mid.minimize.accessor;\r\n\r\npublic class Business {\r\n    public static void main(String[] args) {\r\n\r\n        Division division = new Division();\r\n        division.setId(7);\r\n        division.setName("ゲーム事業部");\r\n\r\n        Employee employee = new Employee();\r\n        employee.setId(777);\r\n        employee.setName("山本一郎");\r\n        employee.setAge(171);\r\n        employee.setDivision(division);\r\n\r\n        System.out.printf(\r\n                "従業員ID:%d %s（%d 歳）さんは、部署ID:%d の %s 所属です. %n",\r\n                employee.getId(),\r\n                employee.getName(),\r\n                employee.getAge(),\r\n                employee.getDivision().getId(),\r\n                employee.getDivision().getName()\r\n            );\r\n    }\r\n}\n')),"\n",r.createElement(n.h3,{id:"businessjava-の実行結果",style:{position:"relative"}},r.createElement(n.a,{href:"#businessjava-%E3%81%AE%E5%AE%9F%E8%A1%8C%E7%B5%90%E6%9E%9C","aria-label":"businessjava の実行結果 permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Business.java の実行結果"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-console"},"従業員ID:777 山本一郎（171 歳）さんは、部署ID:7 の ゲーム事業部 所属です.\n")),"\n",r.createElement(n.h2,{id:"解答例",style:{position:"relative"}},r.createElement(n.a,{href:"#%E8%A7%A3%E7%AD%94%E4%BE%8B","aria-label":"解答例 permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"解答例"),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"https://github.com/fs5013-furi-sutao/java-bootcamp-answers/blob/main/04.mid/09.keep-getter-setter-to-minimize/src/mid/minimize/accessor"},"https://github.com/fs5013-furi-sutao/java-bootcamp-answers/blob/main/04.mid/09.keep-getter-setter-to-minimize/src/mid/minimize/accessor")))}var l=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.RP)(),e.components);return n?r.createElement(n,e,r.createElement(i,e)):i(e)};function c(e){let{children:n}=e;return n}function s(e){return r.createElement(c,e,r.createElement(l,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-c-web-site-repositories-java-bootcamp-repository-java-bootcamp-website-pages-docs-mid-09-keep-getter-setter-to-minimize-mdx-99bccece01198eb29bd2.js.map