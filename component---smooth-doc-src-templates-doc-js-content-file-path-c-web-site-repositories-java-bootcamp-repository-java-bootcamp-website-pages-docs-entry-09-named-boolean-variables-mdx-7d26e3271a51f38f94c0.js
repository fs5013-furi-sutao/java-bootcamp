"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3389],{97898:function(e,l,n){n.r(l),n.d(l,{default:function(){return i}});var a=n(63696),t=n(43023);function r(e){const l=Object.assign({h1:"h1",a:"a",div:"div",h2:"h2",h3:"h3",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,t.RP)(),e.components);return a.createElement(a.Fragment,null,a.createElement(l.h1,{id:"09-真偽値の変数名の付け方",style:{position:"relative"}},a.createElement(l.a,{href:"#09-%E7%9C%9F%E5%81%BD%E5%80%A4%E3%81%AE%E5%A4%89%E6%95%B0%E5%90%8D%E3%81%AE%E4%BB%98%E3%81%91%E6%96%B9","aria-label":"09 真偽値の変数名の付け方 permalink",className:"anchor before"},a.createElement(l.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"09. 真偽値の変数名の付け方"),"\n",a.createElement("p",{className:"goal"},"is, has, can\r\nなどから始まる変数名を付けることで、中身が真偽値（boolean）であることが容易に分かり、どういった場合に\r\ntrue になるか、false になるかが、分かりやすくなることを知る"),"\n",a.createElement(l.h2,{id:"学習",style:{position:"relative"}},a.createElement(l.a,{href:"#%E5%AD%A6%E7%BF%92","aria-label":"学習 permalink",className:"anchor before"},a.createElement(l.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"学習"),"\n",a.createElement(l.h3,{id:"boolean-型の変数名は-is-〇〇-という形",style:{position:"relative"}},a.createElement(l.a,{href:"#boolean-%E5%9E%8B%E3%81%AE%E5%A4%89%E6%95%B0%E5%90%8D%E3%81%AF-is-%E3%80%87%E3%80%87-%E3%81%A8%E3%81%84%E3%81%86%E5%BD%A2","aria-label":"boolean 型の変数名は is 〇〇 という形 permalink",className:"anchor before"},a.createElement(l.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"boolean 型の変数名は is 〇〇 という形"),"\n",a.createElement(l.p,null,"Java に限らず、プログラミングでは真偽値（boolean）型の変数名に、",a.createElement(l.code,null,"is〇〇")," という形を用いることが、開発者の中での通例となっています。"),"\n",a.createElement(l.p,null,"なぜ、",a.createElement(l.code,null,"is〇〇")," という形が良いのでしょうか？次の例で考えていきます。"),"\n",a.createElement(l.h3,{id:"性別で考えてみる",style:{position:"relative"}},a.createElement(l.a,{href:"#%E6%80%A7%E5%88%A5%E3%81%A7%E8%80%83%E3%81%88%E3%81%A6%E3%81%BF%E3%82%8B","aria-label":"性別で考えてみる permalink",className:"anchor before"},a.createElement(l.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"性別で考えてみる"),"\n",a.createElement(l.p,null,"例えば、性別をあらわす変数を考えてみます。変数を次のように宣言します。"),"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-java"},"boolean sex;\n")),"\n",a.createElement(l.p,null,"では、sex が男性を示す場合は「男性です」、女性を示す場合は「女性です」と表示するプログラムを作ってみます。"),"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-java"},"if (sex) {\r\n    System.out.println(A);  // 男？女？\r\n} else {\r\n    System.out.println(B);  // 男？女？\r\n}\n")),"\n",a.createElement(l.p,null,"さて、A と B のどちらに ",a.createElement(l.code,null,'"男性です"')," と入れれば良いでしょうか？"),"\n",a.createElement(l.p,null,a.createElement(l.code,null,"sex = true")," の時が男性なのか、",a.createElement(l.code,null,"sex = false")," の時が男性なのか、このプログラムからではわかりません。\r\nプログラムの仕様や設計を確認する必要があります。"),"\n",a.createElement(l.p,null,"しかし、",a.createElement(l.code,null,"boolean isMale;"),' と宣言するとどうでしょうか？\r\n先ほどと同じように、isMale が男性を示す場合は"男性です。"、女性を示す場合は"女性です。"と表示するプログラムを作ってみます。'),"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-java"},"if (isMale) {\r\n    System.out.println(A);  // 男\r\n} else {\r\n    System.out.println(B);  // 女\r\n}\n")),"\n",a.createElement(l.p,null,a.createElement(l.code,null,"isMale")," を日本語にすると「男性ですか？」という意味になります。"),"\n",a.createElement(l.p,null,"つまり、",a.createElement(l.code,null,"isMale = true")," であれば、男性を指していることになります。逆に ",a.createElement(l.code,null,"isMale = false")," なら、男性ではないので女性となります。"),"\n",a.createElement(l.p,null,"ですから、A に「男性です。」、B に 「女性です。」 と記述すれば良いわけです。"),"\n",a.createElement(l.p,null,"このように、",a.createElement(l.code,null,"is〇〇")," という変数名を使うと、ture の時に何を意味し。false の時に何を意味するかを、変数名を見ただけで理解できるようになります。\r\nこういった利点があるので、",a.createElement(l.code,null,"is〇〇"),"といった変数名がプログラミングでは一般的になっています。"),"\n",a.createElement(l.p,null,"変数やメソッドの意味合いによっては、",a.createElement(l.code,null,"has〇〇")," を使う場合もあります。"),"\n",a.createElement(l.p,null,"例えば ",a.createElement(l.code,null,"Iterator.hasNext()")," は、「次の要素を持っているか？」という意味のメソッドです。",a.createElement(l.code,null,"hasNext() == true")," なら次の要素があり、",a.createElement(l.code,null,"false")," なら次の要素がないと分かります。このことは ",a.createElement(l.code,null,"hasNext()")," の仕様を確認しなくても、メソッド名から推測できます。"),"\n",a.createElement(l.p,null,"動作が推測しやすいということは、あなた以外の他の開発者にとっても読みやすいコードとなり、メンテナンスのしやすいコードにつながります。"),"\n",a.createElement(l.h2,{id:"ダメなメソッド名の例",style:{position:"relative"}},a.createElement(l.a,{href:"#%E3%83%80%E3%83%A1%E3%81%AA%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E5%90%8D%E3%81%AE%E4%BE%8B","aria-label":"ダメなメソッド名の例 permalink",className:"anchor before"},a.createElement(l.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"ダメなメソッド名の例"),"\n",a.createElement(l.p,null,"よくダメなコードで見るのが、judge なんとかというメソッド名です。"),"\n",a.createElement(l.p,null,"このメソッド名を見た瞬間に、そのソースコード全体のクオリティは低いだろうなと想像してしまいます。"),"\n",a.createElement(l.p,null,"たぶん「判断」のつもりで judge としていると思うんですが、プログラムは常に何かの判断があるのでメソッド名が処理の説明になっていません。"),"\n",a.createElement(l.p,null,"メソッド名は、パッと見てなんとなく処理が分かるようにつけなきゃいけない。そうでないと不具合調査や改修の際に、後々、膨大な工数として跳ね返ってくるという意識が必要です。"),"\n",a.createElement(l.h3,{id:"電話番号が設定されているか判断するというメソッド",style:{position:"relative"}},a.createElement(l.a,{href:"#%E9%9B%BB%E8%A9%B1%E7%95%AA%E5%8F%B7%E3%81%8C%E8%A8%AD%E5%AE%9A%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%8B%E5%88%A4%E6%96%AD%E3%81%99%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89","aria-label":"電話番号が設定されているか判断するというメソッド permalink",className:"anchor before"},a.createElement(l.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"「電話番号が設定されているか判断する」というメソッド"),"\n",a.createElement(l.p,null,"たとえば「電話番号が設定されているか判断する」というメソッドに対して、次のようなメソッド名は処理の説明になっていないです。"),"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-java"},"boolean judgePhoneNumberSetting()\n")),"\n",a.createElement(l.p,null,"PhoneNumber の Setting を judge するって、設定されているかどうかなのか、それとも特定の番号かチェックしているのか、中身を見るまで分からないです。"),"\n",a.createElement(l.p,null,"このような感じのコードであると、処理を読む手間がどんどん掛かってしまいます。このメソッド名を改善（リファクタリング）するなら次のような感じです。"),"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-java"},"boolean isPhoneNumberSet()\n")),"\n",a.createElement(l.p,null,"シンプルで、処理しようとしていることの意図が、すぐに伝わります。"),"\n",a.createElement(l.h2,{id:"練習問題時間-20-分",style:{position:"relative"}},a.createElement(l.a,{href:"#%E7%B7%B4%E7%BF%92%E5%95%8F%E9%A1%8C%E6%99%82%E9%96%93-20-%E5%88%86","aria-label":"練習問題時間 20 分 permalink",className:"anchor before"},a.createElement(l.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"練習問題（時間: 20 分）"),"\n",a.createElement(l.p,null,"main メソッドに以下の 3 つの処理を記述して、プログラム実行結果が以下に示した結果になるように SurvivorChecker クラスを作成しなさい"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"Random クラスのインスタンスを作成"),"\n",a.createElement(l.li,null,"変数「ぼくの名前」に「山本一郎」を代入"),"\n",a.createElement(l.li,null,"「生きているかどうか」をあらわす変数に Random インスタンスからランダムに生成した true もしくは false を代入"),"\n",a.createElement(l.li,null,"生きていれば「〇〇 は生きてるよ.」を表示"),"\n",a.createElement(l.li,null,"生きていなければ「〇〇 は死んでるよ.」を表示"),"\n"),"\n",a.createElement(l.p,null,"※Randomクラスの使い方が分からない場合は Web で調べて見てください。\r\n検索キーワードは、「 ",a.createElement(l.a,{href:"https://www.google.com/search?q=java+Random+boolean"},"java Random boolean")," 」です。"),"\n",a.createElement(l.h3,{id:"プログラム実行結果",style:{position:"relative"}},a.createElement(l.a,{href:"#%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E5%AE%9F%E8%A1%8C%E7%B5%90%E6%9E%9C","aria-label":"プログラム実行結果 permalink",className:"anchor before"},a.createElement(l.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"プログラム実行結果"),"\n",a.createElement(l.p,null,"実行結果例 1 回目:"),"\n",a.createElement(l.pre,null,a.createElement(l.code,null,"山本一郎 は生きてるよ.\n")),"\n",a.createElement(l.p,null,"実行結果例 2 回目:"),"\n",a.createElement(l.pre,null,a.createElement(l.code,null,"山本一郎 は死んでるよ.\n")),"\n",a.createElement(l.h2,{id:"解答例",style:{position:"relative"}},a.createElement(l.a,{href:"#%E8%A7%A3%E7%AD%94%E4%BE%8B","aria-label":"解答例 permalink",className:"anchor before"},a.createElement(l.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"解答例"),"\n",a.createElement(l.p,null,a.createElement(l.a,{href:"https://github.com/fs5013-furi-sutao/java-bootcamp-answers/blob/main/02.entry/09.named-boolean-variables/src/SurvivorChecker.java"},"https://github.com/fs5013-furi-sutao/java-bootcamp-answers/blob/main/02.entry/09.named-boolean-variables/src/SurvivorChecker.java")))}var c=function(e){void 0===e&&(e={});const{wrapper:l}=Object.assign({},(0,t.RP)(),e.components);return l?a.createElement(l,e,a.createElement(r,e)):r(e)};function E(e){let{children:l}=e;return l}function i(e){return a.createElement(E,e,a.createElement(c,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-c-web-site-repositories-java-bootcamp-repository-java-bootcamp-website-pages-docs-entry-09-named-boolean-variables-mdx-7d26e3271a51f38f94c0.js.map