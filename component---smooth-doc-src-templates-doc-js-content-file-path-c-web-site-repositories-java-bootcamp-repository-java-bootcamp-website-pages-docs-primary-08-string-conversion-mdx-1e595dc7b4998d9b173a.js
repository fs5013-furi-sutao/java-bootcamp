"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5846],{16084:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(63696),r=n(43023);function l(e){const t=Object.assign({h1:"h1",a:"a",div:"div",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.RP)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,{id:"08-作成課題--数字をカンマ区切り文字列に変換する",style:{position:"relative"}},a.createElement(t.a,{href:"#08-%E4%BD%9C%E6%88%90%E8%AA%B2%E9%A1%8C--%E6%95%B0%E5%AD%97%E3%82%92%E3%82%AB%E3%83%B3%E3%83%9E%E5%8C%BA%E5%88%87%E3%82%8A%E6%96%87%E5%AD%97%E5%88%97%E3%81%AB%E5%A4%89%E6%8F%9B%E3%81%99%E3%82%8B","aria-label":"08 作成課題  数字をカンマ区切り文字列に変換する permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"08. 作成課題 ⭐ 数字をカンマ区切り文字列に変換する"),"\n",a.createElement(t.h2,{id:"概要",style:{position:"relative"}},a.createElement(t.a,{href:"#%E6%A6%82%E8%A6%81","aria-label":"概要 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"概要"),"\n",a.createElement(t.p,null,"金額やスコアなどを表示するときに、カンマ区切り文字列で表示したい場合がある。"),"\n",a.createElement(t.h2,{id:"課題",style:{position:"relative"}},a.createElement(t.a,{href:"#%E8%AA%B2%E9%A1%8C","aria-label":"課題 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"課題"),"\n",a.createElement(t.p,null,"以下のような数字からカンマ区切り文字列を作成するメソッドを作成しなさい"),"\n",a.createElement(t.p,null,"※String.format()など、そのままズバリできてしまうメソッドの利用は禁止です"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-java"},"System.out.println(commaSeparatedString(123));\r\nSystem.out.println(commaSeparatedString(12345));\r\nSystem.out.println(commaSeparatedString(1234567));\r\nSystem.out.println(commaSeparatedString(-1234567));\r\nSystem.out.println(commaSeparatedString(123456789));\r\nSystem.out.println(commaSeparatedString(-123456789));\n")),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-txt",meta:"title=プログラムの実行結果"},"123\r\n12,345\r\n1,234,567\r\n-1,234,567\r\n123,456,789\r\n-123,456,789\n")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)};function i(e){let{children:t}=e;return t}function m(e){return a.createElement(i,e,a.createElement(c,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-c-web-site-repositories-java-bootcamp-repository-java-bootcamp-website-pages-docs-primary-08-string-conversion-mdx-1e595dc7b4998d9b173a.js.map