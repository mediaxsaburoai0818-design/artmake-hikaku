import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "40代・50代のアートメイク｜年齢に合った自然な眉デザインガイド【2026年最新】| アートメイク比較ナビ",
  description:
    "40代・50代向けアートメイク完全ガイド。加齢で薄くなった眉の対策、年齢に合ったデザインのコツ、クレアージュ・トゥルーデザインなど得意クリニックを紹介。浮かないデザインの秘訣も解説。",
  keywords: "アートメイク 40代,アートメイク 50代,眉毛アートメイク 年齢,アートメイク 薄い眉,アートメイク 大人",
  openGraph: {
    title: "40代・50代のアートメイク｜年齢に合った自然な眉デザインガイド",
    description:
      "加齢で薄くなった眉を自然にカバー。40代・50代に最適なクリニックとデザインを解説。",
    type: "article",
  },
};

export default function FortyFiftyPage() {
  return (
    <main className="min-h-screen">
      {/* ===== Hero ===== */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            目的別ガイド
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            40代・50代のアートメイク
            <br className="hidden md:block" />
            年齢に合った自然な眉デザイン
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            加齢で薄くなった眉、毎朝の眉メイクの手間にお悩みの方へ。
            <br className="hidden md:block" />
            大人の女性に似合う上品なアートメイクのすべてをご紹介します。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#clinic"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              おすすめクリニックを見る
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
                <a href="#concern" className="hover:underline">
                  1. 40代・50代の眉の悩みとアートメイクの効果
                </a>
              </li>
              <li>
                <a href="#design" className="hover:underline">
                  2. 年齢に合ったデザインのポイント
                </a>
              </li>
              <li>
                <a href="#clinic" className="hover:underline">
                  3. 40代・50代に得意なクリニック
                </a>
              </li>
              <li>
                <a href="#tips" className="hover:underline">
                  4. 浮かないデザインのコツ5選
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

      {/* ===== 1. 40代・50代の眉の悩み ===== */}
      <section className="py-16 px-4 bg-white" id="concern">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            40代・50代の眉の悩みとアートメイクの効果
          </h2>
          <div className="bg-rose-50 rounded-xl p-8 mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              年齢を重ねるにつれて眉毛は
              <strong className="text-rose-600">薄く・まばらになり、ハリやコシも失われます</strong>。
              40代以降にアートメイクを受ける方は年々増加しており、
              「もっと早く受ければよかった」という声が最も多い年代でもあります。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "😟",
                title: "加齢による眉毛の減少",
                problem: "毛周期の変化やホルモンバランスの変動により、眉毛が生えにくくなる。若い頃の毛抜きの影響で部分的に生えなくなった方も。",
                solution: "アートメイクで足りない部分を自然にカバー。自毛のような仕上がりで、まるで眉毛が復活したような印象に。",
              },
              {
                icon: "⏰",
                title: "毎朝の眉メイクの手間",
                problem: "老眼が進んで細かいメイクが大変に。左右対称に描くのが難しくなり、外出前のストレスが増加。",
                solution: "アートメイクなら朝の眉メイクが不要。老眼でも常に完璧な眉をキープでき、毎日の時短に。",
              },
              {
                icon: "💧",
                title: "汗・温泉での化粧崩れ",
                problem: "旅行先の温泉やスポーツジムで、眉毛がなくなることへの不安。すっぴんを人に見せたくない。",
                solution: "水や汗で落ちないアートメイクなら、温泉もプールも安心。すっぴんに自信が持てるように。",
              },
              {
                icon: "🪞",
                title: "顔全体の印象ダウン",
                problem: "眉が薄くなると顔がぼんやりした印象に。実年齢より老けて見えることも。",
                solution: "整った眉はリフトアップ効果もあり、顔全体が引き締まった印象に。若々しい表情を取り戻せます。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-rose-200 rounded-xl p-6 shadow-sm"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {item.title}
                </h3>
                <div className="mb-3">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    <span className="font-semibold text-red-400">悩み：</span>
                    {item.problem}
                  </p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-green-500">解決：</span>
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. 年齢に合ったデザインのポイント ===== */}
      <section className="py-16 px-4 bg-gray-50" id="design">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            年齢に合ったデザインのポイント
          </h2>
          <p className="text-center text-gray-600 mb-8">
            40代・50代の大人の女性には、若い世代とは異なるデザインアプローチが必要です。
          </p>
          <div className="space-y-6">
            {[
              {
                num: 1,
                title: "やや太めのアーチ型で上品な印象に",
                desc: "加齢とともに目元のハリが失われるため、やや太めの柔らかいアーチ型がおすすめ。細すぎる眉は年齢を強調してしまいます。適度なボリューム感が若々しさを演出します。",
              },
              {
                num: 2,
                title: "眉尻をやや長めにしてリフトアップ効果",
                desc: "眉尻を少し長めにデザインすることで、目元全体を引き上げる視覚効果が生まれます。たるみが気になる方にも効果的で、フェイスラインがすっきりした印象に。",
              },
              {
                num: 3,
                title: "グレーやアッシュ系で上品な色味を",
                desc: "白髪が混じり始めた髪色には、真っ黒よりもグレーやアッシュブラウンが調和します。柔らかい色味で上品な仕上がりに。髪色の変化に合わせて色味を調整しましょう。",
              },
              {
                num: 4,
                title: "3回施術で少しずつ完成させる",
                desc: "急な変化は周囲に違和感を与えます。クレアージュ東京のように3回に分けて少しずつ仕上げる方法なら、自然なペースで「いつの間にか綺麗になった」印象に。",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-4 bg-white rounded-xl p-6 border border-rose-200 shadow-sm"
              >
                <div className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. 40代・50代に得意なクリニック ===== */}
      <section className="py-16 px-4 bg-white" id="clinic">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            40代・50代に得意なクリニック
          </h2>
          <p className="text-center text-gray-600 mb-8">
            大人の眉デザインに実績があり、年齢に配慮した施術ができるクリニックを厳選。
          </p>
          <div className="space-y-6">
            {[
              {
                name: "クレアージュ東京",
                badge: "40代以上に特におすすめ",
                price: "132,000円（3回セット）",
                point: "3回に分けて少しずつ色を重ねる独自アプローチが最大の特徴。急な変化を避けたい大人の女性に最適。医療法人が運営する安心感もあり、40代・50代の患者比率が高いクリニックです。丁寧なカウンセリングで年齢に合ったデザインを提案。",
                link: "/review/creage",
              },
              {
                name: "トゥルーデザインクリニック",
                badge: "完全オーダーメイド",
                price: "59,400円〜",
                point: "一人ひとりの骨格・年齢・ライフスタイルに合わせた完全オーダーメイドデザイン。加齢による顔の変化を考慮し、数年後も美しく見えるデザインを提案してくれます。上品で落ち着いた仕上がりに定評あり。",
                link: "/review/true-design",
              },
              {
                name: "メディカルブロー",
                badge: "豊富な症例実績",
                price: "28,000円〜",
                point: "年間60,000例以上の施術実績から蓄積されたノウハウで、幅広い年代に対応。40代・50代の症例写真も豊富で仕上がりイメージがしやすい。全国の院で通いやすさも魅力。",
                link: "/review/medicalbrow",
              },
              {
                name: "デイジークリニック",
                badge: "ナチュラルdazzy brow",
                price: "49,800円〜",
                point: "ふんわり自然な仕上がりの「dazzy brow」は大人の女性にも人気。パウダー+ストロークの組み合わせで、やりすぎ感のない上品な眉に仕上がります。",
                link: "/review/dazzy",
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
                    {clinic.badge}
                  </span>
                </div>
                <p className="text-xl font-bold text-rose-500 mb-2">
                  {clinic.price}
                </p>
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

      {/* ===== 4. 浮かないデザインのコツ5選 ===== */}
      <section className="py-16 px-4 bg-gray-50" id="tips">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            浮かないデザインのコツ5選
          </h2>
          <div className="space-y-6">
            {[
              {
                num: 1,
                title: "事前に施術者の40代・50代の症例写真を確認",
                desc: "若い方の症例が多い施術者だと、年齢に合ったデザインの経験が少ない場合があります。カウンセリング前に同年代の症例写真を確認し、自分のイメージに近いか判断しましょう。",
              },
              {
                num: 2,
                title: "メイクしている写真だけでなく、すっぴん写真も確認",
                desc: "メイクでごまかせる仕上がりではなく、すっぴんでも浮かない仕上がりが重要。症例のすっぴん写真を見せてもらうことで、実際の自然さが判断できます。",
              },
              {
                num: 3,
                title: "普段のメイクやファッションを施術者に伝える",
                desc: "ナチュラルメイク派なのかしっかりメイク派なのかで、最適な色味・形は変わります。普段の服装の雰囲気（カジュアル・きれいめ等）も伝えると、よりマッチしたデザインに。",
              },
              {
                num: 4,
                title: "白髪染めの色味に合わせてカラーを選ぶ",
                desc: "白髪染めをしている場合、染めた後の髪色とアートメイクの色味を合わせることが大切。髪色を変える予定があれば、その点も施術者に相談しましょう。",
              },
              {
                num: 5,
                title: "一気に変えず、段階的に仕上げる",
                desc: "特に今まで自分の眉に手を加えていなかった方は、一気に完璧な眉にすると違和感が出ることも。1回目は控えめに入れて、2回目・3回目で徐々に仕上げる方法がおすすめです。",
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
            40代・50代のアートメイクに関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "40代・50代でアートメイクを受けても大丈夫ですか？",
                a: "はい、問題ありません。むしろ40代・50代は眉の悩みが深くなる年代で、アートメイクの恩恵を最も受けやすい世代です。健康上の問題がなければ年齢制限はありません。事前のカウンセリングで肌の状態を確認してもらいましょう。",
              },
              {
                q: "加齢で薄くなった眉もカバーできますか？",
                a: "はい、得意分野です。3Dストロークで1本ずつ毛を描くことで、自毛のような自然な眉を再現できます。完全に毛がない部分にも施術可能で、まばらな眉を均一に整えることができます。",
              },
              {
                q: "周りの人にバレないデザインにできますか？",
                a: "はい、クレアージュ東京の3回施術のように段階的に仕上げる方法なら、周囲に気づかれにくいです。「最近明るくなった」「若返った」と言われることはあっても、アートメイクだと気づかれることは少ないです。",
              },
              {
                q: "敏感肌・肌が薄い場合でも施術できますか？",
                a: "敏感肌の方でも施術可能ですが、事前にパッチテストを行うクリニックを選ぶと安心です。年齢とともに肌が薄くなる傾向があるため、色素の定着具合が異なる場合がありますが、経験豊富な施術者なら適切に調整してくれます。",
              },
              {
                q: "リタッチの頻度はどれくらいですか？",
                a: "一般的には1〜2年に1回のリタッチが推奨です。加齢による肌のターンオーバーの変化で、若い方より色素が長持ちする傾向もあります。定期的なリタッチで常に美しい状態をキープできます。",
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
            大人の女性に似合う眉を見つけよう
          </h2>
          <p className="text-xl mb-4 opacity-90">
            40代・50代の施術実績が豊富なクリニックを総合ランキングでチェック。
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
      
    </main>
  );
}
