"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[463],{36776:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(63696),a=n(43023);function c(e){const t=Object.assign({h1:"h1",a:"a",div:"div",h2:"h2",h3:"h3",p:"p",pre:"pre",code:"code"},(0,a.RP)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,{id:"06-同一性と同値性",style:{position:"relative"}},r.createElement(t.a,{href:"#06-%E5%90%8C%E4%B8%80%E6%80%A7%E3%81%A8%E5%90%8C%E5%80%A4%E6%80%A7","aria-label":"06 同一性と同値性 permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"06. 同一性と同値性"),"\n",r.createElement("p",{className:"goal"},"比較演算子と equals メソッドの使い分けなど、\r\n同一性と同値性の違いを区別したコーディングができるようになること"),"\n",r.createElement(t.h2,{id:"学習",style:{position:"relative"}},r.createElement(t.a,{href:"#%E5%AD%A6%E7%BF%92","aria-label":"学習 permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"学習"),"\n",r.createElement(t.h3,{id:"同一性と同値性の違いを知る",style:{position:"relative"}},r.createElement(t.a,{href:"#%E5%90%8C%E4%B8%80%E6%80%A7%E3%81%A8%E5%90%8C%E5%80%A4%E6%80%A7%E3%81%AE%E9%81%95%E3%81%84%E3%82%92%E7%9F%A5%E3%82%8B","aria-label":"同一性と同値性の違いを知る permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"同一性と同値性の違いを知る"),"\n",r.createElement(t.p,null,"同一性とは何か、同値性とは何か、Java でその違いを区別しないとどんなことが起こってしまうのかを Web で調べてください。\r\n検索キーワードは、「 ",r.createElement(t.a,{href:"https://www.google.com/search?q=java+%E5%90%8C%E4%B8%80%E6%80%A7+%E5%90%8C%E5%80%A4%E6%80%A7"},"java 同一性 同値性")," 」です。\r\n3 種類ぐらい説明記事やサンプルコードを読んで、同一性と同値性の違いを知り、Java でのコーディングの注意点をつかみましょう。"),"\n",r.createElement(t.p,null,"”==” と ”equals” の違いも説明できるようにしておきましょう。"),"\n",r.createElement(t.h2,{id:"練習問題-バグ修正時間-20-分",style:{position:"relative"}},r.createElement(t.a,{href:"#%E7%B7%B4%E7%BF%92%E5%95%8F%E9%A1%8C-%E3%83%90%E3%82%B0%E4%BF%AE%E6%AD%A3%E6%99%82%E9%96%93-20-%E5%88%86","aria-label":"練習問題 バグ修正時間 20 分 permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"練習問題: バグ修正（時間: 20 分）"),"\n",r.createElement(t.p,null,"以下のクラス TargetObjectsComparator にはバグがあるため、実行結果に誤りがある。\r\nバグを修正しなさい。"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-java",meta:"title=src/TargetObjectsComparator.java"},'public class TargetObjectsComparator {\r\n    public static void main(String[] args) {\r\n\r\n        String baseContent = "string";\r\n\r\n        String targetFrontPart = "str";\r\n        String targetBackPart = "ing";\r\n\r\n        String targetContent =\r\n            targetFrontPart + targetBackPart;\r\n\r\n        TargetObject obj1 =\r\n            new TargetObject("obj1", baseContent);\r\n\r\n        TargetObject obj2 =\r\n            new TargetObject("obj2", targetContent);\r\n\r\n        obj1.showContent();\r\n        obj2.showContent();\r\n\r\n        TargetObject.showResultComparedObjects(obj1, obj2);\r\n    }\r\n}\r\n\r\nclass TargetObject {\r\n    public String name = "";\r\n    public String content = "";\r\n\r\n    public TargetObject(String name, String content) {\r\n        this.name = name;\r\n        this.content = content;\r\n    }\r\n\r\n    public void showContent() {\r\n        System.out.printf(\r\n            "%s の値は %s です. %n",\r\n            this.name, this.content\r\n        );\r\n    }\r\n\r\n    private static boolean isSameContent(\r\n            TargetObject obj1, TargetObject obj2) {\r\n\r\n        return obj1.content == obj2.content;\r\n    }\r\n\r\n    public static void showResultComparedObjects(\r\n            TargetObject obj1, TargetObject obj2) {\r\n\r\n        if (isSameContent(obj1, obj2)) {\r\n            System.out.printf(\r\n                "%s と %s は値が同じです. %n",\r\n                obj1.name, obj2.name\r\n            );\r\n            return;\r\n        }\r\n\r\n        System.out.printf(\r\n            "%s と %s は値が違います. %n",\r\n            obj1.name, obj2.name\r\n        );\r\n    }\r\n}\r\n\n')),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-txt",meta:"title=バグ修正前の実行結果"},"obj1 の値は string です.\r\nobj2 の値は string です.\r\nobj1 と obj2 は値が違います.\n")),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-txt",meta:"title=正しい実行結果"},"obj1 の値は string です.\r\nobj2 の値は string です.\r\nobj1 と obj2 は値が同じです.\n")),"\n",r.createElement(t.h2,{id:"解答例",style:{position:"relative"}},r.createElement(t.a,{href:"#%E8%A7%A3%E7%AD%94%E4%BE%8B","aria-label":"解答例 permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"解答例"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://github.com/fs5013-furi-sutao/java-bootcamp-answers/blob/main/03.primary/06.identity-and-equality/src/TargetObjectsComparator.java"},"https://github.com/fs5013-furi-sutao/java-bootcamp-answers/blob/main/03.primary/06.identity-and-equality/src/TargetObjectsComparator.java")))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?r.createElement(t,e,r.createElement(c,e)):c(e)};function o(e){let{children:t}=e;return t}function i(e){return r.createElement(o,e,r.createElement(l,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-c-web-site-repositories-java-bootcamp-repository-java-bootcamp-website-pages-docs-primary-06-identity-and-equality-mdx-1b8f757932373c5eba3f.js.map