import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ナチュラルなアートメイク｜自然な仕上がりのクリニック厳選ガイド【2026年最新】| アートメイク比較ナビ",
  description:
    "自然な仕上がりのアートメイククリニックを紹介。3D/4D/7D技法の比較、すっぴんでも浮かない眉の作り方、ナチュラル仕上げが得意なクリニックを厳選解説。",
  keywords: "アートメイク ナチュラル,アートメイク 自然,アートメイク 自然な仕上がり,眉毛アートメイク ナチュラル,アートメイク バレない",
  openGraph: {
    title: "ナチュラルなアートメイク｜自然な仕上がりのクリニック厳選ガイド",
    description:
      "すっぴんでも浮かない自然な眉を実現。技法別の自然さ比較とおすすめクリニックを紹介。",
    type: "article",
  },
};

export default function NaturalPage() {
  return (
    <main className="min-h-screen">
      {/* ===== Hero ===== */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            目的別ガイド
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            ナチュラルなアートメイク
            <br className="hidden md:block" />
            自然な仕上がりのクリニックガイド
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            「アートメイクだとバレたくない」「すっぴんでも浮かない眉がほしい」
            <br className="hidden md:block" />
            そんな方に、自然な仕上がりを得意とするクリニックと技法を解説します。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#technique"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              技法の違いを見る
            </a>
            <a
              href="/"
              className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500"
            >
              総合ランキングへ
            </a>
          </div>
        </div>
      </section>

      {/* ===== 目次 ===== */}
      <section className="py-10 px-4 bg-white border-b">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-bold mb-4 text-gray-800">目次</h2>
          <nav>
            <ol className="space-y-2 text-sm text-rose-600">
              <li>
                <a href="#what-is-natural" className="hover:underline">
                  1. ナチュラルなアートメイクとは
                </a>
              </li>
              <li>
                <a href="#technique" className="hover:underline">
                  2. 技法別（3D/4D/7D）の自然さ比較
                </a>
              </li>
              <li>
                <a href="#clinic" className="hover:underline">
                  3. ナチュラル仕上げが得意なクリニック
                </a>
              </li>
              <li>
                <a href="#tips" className="hover:underline">
                  4. すっぴんでも浮かない眉の作り方5つのポイント
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  5. よくある質問（FAQ）
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ===== 1. ナチュラルなアートメイクとは ===== */}
      <section className="py-16 px-4 bg-white" id="what-is-natural">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            ナチュラルなアートメイクとは
          </h2>
          <div className="bg-rose-50 rounded-xl p-8 mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              ナチュラルなアートメイクとは、
              <strong className="text-rose-600">自毛が生えているかのように自然で、すっぴんでも浮かない仕上がり</strong>
              を実現する施術のこと。近年の技術進歩により、1本1本の毛並みを再現する手法が主流となり、
              従来の「塗りつぶし感」のあるアートメイクとは大きく異なります。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌿",
                title: "自毛のような毛並み",
                desc: "極細針で1本ずつ毛流れを再現。自分の眉毛と見分けがつかない自然さを実現します。",
              },
              {
                icon: "🎨",
                title: "肌色に合った色選び",
                desc: "髪色・肌色・瞳の色に合わせたカスタムカラーで、浮かない色味に仕上げます。",
              },
              {
                icon: "✨",
                title: "骨格に合ったデザイン",
                desc: "顔の骨格・筋肉・黄金比を考慮し、最も自然で似合うデザインを提案します。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-rose-200 rounded-xl p-6 text-center shadow-sm"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. 技法別の自然さ比較 ===== */}
      <section className="py-16 px-4 bg-gray-50" id="technique">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            技法別（3D/4D/7D）の自然さ比較
          </h2>
          <p className="text-center text-gray-600 mb-8">
            アートメイクの技法によって仕上がりの自然さは大きく異なります。
            <br className="hidden md:block" />
            ナチュラル重視なら「3D」「4D」「7D」の違いを理解しましょう。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">技法</th>
                  <th className="p-4 text-center">自然さ</th>
                  <th className="p-4 text-center">仕上がり</th>
                  <th className="p-4 text-center">施術方法</th>
                  <th className="p-4 text-center">おすすめの人</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "2D（パウダー）",
                    natural: "★★☆☆☆",
                    finish: "ふんわり眉メイク風",
                    method: "マシンでドット状に色素注入",
                    target: "しっかりメイク派の方",
                  },
                  {
                    name: "3D（ストローク）",
                    natural: "★★★★☆",
                    finish: "自毛のような毛並み",
                    method: "手彫りで1本ずつ毛を再現",
                    target: "自然な眉を求める方",
                  },
                  {
                    name: "4D（コンビネーション）",
                    natural: "★★★★★",
                    finish: "立体的で最も自然",
                    method: "3Dストローク+2Dパウダー",
                    target: "すっぴんでも浮かない眉を求める方",
                  },
                  {
                    name: "7D（ストロークR）",
                    natural: "★★★★★",
                    finish: "毛流れまで完全再現",
                    method: "極細ニードルで超精密手彫り",
                    target: "最高の自然さを求める方",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}
                  >
                    <td className="p-3 font-bold text-center text-sm">
                      {row.name}
                    </td>
                    <td className="p-3 text-center text-sm text-rose-500 font-semibold">
                      {row.natural}
                    </td>
                    <td className="p-3 text-center text-sm">{row.finish}</td>
                    <td className="p-3 text-center text-sm">{row.method}</td>
                    <td className="p-3 text-center text-sm">{row.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-rose-50 rounded-xl p-6 mt-8">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-rose-600">編集部のおすすめ：</strong>
              ナチュラルさを最優先するなら<strong>4Dコンビネーション</strong>がベストバランス。
              毛並み感（3D）とふんわり感（2D）の良いとこ取りで、すっぴんでもメイク時でも自然に馴染みます。
              究極の自然さを求めるなら<strong>7Dストローク</strong>がおすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 3. ナチュラル仕上げが得意なクリニック ===== */}
      <section className="py-16 px-4 bg-white" id="clinic">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            ナチュラル仕上げが得意なクリニック
          </h2>
          <div className="space-y-6">
            {[
              {
                name: "メディカルブロー",
                technique: "6Dストローク",
                point: "独自開発の6Dストロークで超極細の毛並みを再現。年間60,000例以上の実績でナチュラル仕上げのノウハウが豊富。骨格に合わせたデザイン提案に定評あり。",
                link: "/review/medicalbrow",
              },
              {
                name: "デイジークリニック",
                technique: "dazzy brow（4D）",
                point: "独自技法「dazzy brow」は毛並み+パウダーのコンビネーション。ふんわり自然な仕上がりで、すっぴんでも浮きにくいと口コミで高評価。",
                link: "/review/dazzy",
              },
              {
                name: "トゥルーデザインクリニック",
                technique: "完全オーダーメイド",
                point: "一人ひとりの骨格・毛流れ・ライフスタイルに合わせた完全オーダーメイドデザイン。「やりすぎない」自然な美しさを追求するクリニック。",
                link: "/review/true-design",
              },
              {
                name: "クレアージュ東京",
                technique: "3回施術法",
                point: "3回に分けて少しずつ色を重ねる独自アプローチ。一度に濃く入れないため、最も自然なグラデーションが実現。急な変化が苦手な方に最適。",
                link: "/review/creage",
              },
            ].map((clinic, i) => (
              <div
                key={i}
                className="bg-white border border-rose-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-bold text-xl text-gray-800">
                    {clinic.name}
                  </h3>
                  <span className="bg-rose-100 text-rose-600 text-xs px-3 py-1 rounded-full font-semibold">
                    {clinic.technique}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {clinic.point}
                </p>
                <a
                  href={clinic.link}
                  className="text-rose-500 text-sm font-semibold hover:underline"
                >
                  詳しいレビューを見る &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. すっぴんでも浮かない眉の作り方 ===== */}
      <section className="py-16 px-4 bg-gray-50" id="tips">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            すっぴんでも浮かない眉の作り方5つのポイント
          </h2>
          <div className="space-y-6">
            {[
              {
                num: 1,
                title: "自毛よりワントーン明るめの色を選ぶ",
                desc: "施術直後は濃く見えますが、1〜2週間で色が落ち着きます。最初からやや明るめの色を選ぶことで、定着後に自然な仕上がりになります。暗すぎる色は「描いた感」が出やすいので要注意。",
              },
              {
                num: 2,
                title: "毛並みストローク（3D以上）を選ぶ",
                desc: "パウダー（2D）のみだと「塗りつぶし感」が出やすい傾向があります。3D以上のストローク技法なら1本ずつ毛を再現するため、すっぴん時も自然に見えます。",
              },
              {
                num: 3,
                title: "眉頭は薄く、眉尻は少し濃くグラデーション",
                desc: "天然の眉毛は眉頭が薄く眉尻に向かって濃くなるのが自然。この自然なグラデーションを再現することで、アートメイクだと気づかれにくくなります。",
              },
              {
                num: 4,
                title: "既存の眉毛を活かしたデザインにする",
                desc: "元の眉毛を全く無視したデザインは不自然になりがち。自毛の毛流れ・生え方を活かしながら、足りない部分を補うデザインが最も自然です。",
              },
              {
                num: 5,
                title: "カウンセリングで「ナチュラル希望」を明確に伝える",
                desc: "「すっぴんで過ごすことが多い」「職場でバレたくない」など具体的なライフスタイルを伝えることで、施術者が最適な色味・デザインを提案してくれます。",
              },
            ].map((tip) => (
              <div
                key={tip.num}
                className="flex gap-4 bg-green-50 rounded-xl p-6"
              >
                <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {tip.num}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-800">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 px-4 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            ナチュラルなアートメイクに関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "アートメイクだとバレませんか？",
                a: "3D以上のストローク技法で、適切な色味・デザインを選べば、ほとんどの方が気づきません。施術直後は少し濃く見えますが、1〜2週間で自然に馴染みます。",
              },
              {
                q: "どの技法が一番自然ですか？",
                a: "4Dコンビネーション（毛並み+パウダー）が最もバランスが良く自然です。さらに究極の自然さを求めるなら7Dストロークがおすすめですが、対応クリニックは限られます。",
              },
              {
                q: "施術直後は不自然に見えますか？",
                a: "施術直後〜3日程度は色が濃く出るため、やや不自然に見えることがあります。1〜2週間で色が落ち着き、最終的な仕上がりは2回目の施術後1ヶ月程度で完成します。",
              },
              {
                q: "自毛が少なくてもナチュラルに仕上がりますか？",
                a: "はい、可能です。3Dストロークで自毛のような毛並みを描くことで、毛量が少ない部分も自然にカバーできます。眉毛の育毛剤との併用でさらに自然な仕上がりに。",
              },
              {
                q: "ナチュラル仕上げの場合、持続期間は短くなりますか？",
                a: "薄めの色で入れる分、濃い色よりも退色が早い傾向はあります。ただし1〜2年は持続し、リタッチで色を補充すれば美しい状態を維持できます。",
              },
            ].map((faq, i) => (
              <details key={i} className="bg-gray-50 rounded-lg shadow-sm group">
                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-gray-100 transition-colors flex justify-between items-center">
                  <span>
                    Q{i + 1}. {faq.q}
                  </span>
                  <span className="text-rose-400 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 py-4 border-t text-gray-600 leading-relaxed text-sm">
                  <span className="font-semibold text-rose-500">A.</span>{" "}
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            自然な眉を手に入れよう
          </h2>
          <p className="text-xl mb-4 opacity-90">
            ナチュラル仕上げが得意なクリニックを総合ランキングでチェック。
          </p>
          <p className="text-lg mb-8 opacity-80">
            料金・技術力・口コミで厳選した5社を徹底比較しています。
          </p>
          <a
            href="/"
            className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            おすすめクリニックランキングを見る
          </a>
          <p className="mt-6 text-sm opacity-70">
            2026年4月最新 - 5社を100点独自採点で徹底比較
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-bold text-white text-lg mb-4">
            アートメイク比較ナビ
          </p>
          <nav className="flex justify-center gap-6 text-sm mb-6 flex-wrap">
            <a href="/" className="hover:text-white transition-colors">
              ランキング
            </a>
            <a href="/about" className="hover:text-white transition-colors">
              アートメイクとは
            </a>
            <a href="/compare" className="hover:text-white transition-colors">
              比較表
            </a>
            <a href="/faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>
          <p className="text-sm mb-6">
            眉毛・アイライン・リップのアートメイククリニックを徹底比較
          </p>
          <p className="text-xs">
            &copy; 2026 アートメイク比較ナビ. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
