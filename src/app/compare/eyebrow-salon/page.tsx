import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アートメイク vs 眉毛サロン｜どっちがいい？徹底比較【2026年最新】| アートメイク比較ナビ",
  description:
    "アートメイクと眉毛サロンの違いを持続期間・料金・痛み・仕上がり・メンテナンス頻度で徹底比較。それぞれのメリット・デメリットと、あなたに合った選び方を解説。",
  keywords: "アートメイク 眉毛サロン 違い,アートメイク vs 眉毛サロン,眉毛 アートメイク 眉毛サロン 比較",
  openGraph: {
    title: "アートメイク vs 眉毛サロン｜どっちがいい？徹底比較",
    description:
      "持続期間・料金・痛み・仕上がりで徹底比較。あなたに合った選び方を解説。",
    type: "article",
  },
};

const comparisonItems = [
  { item: '持続期間', artmake: '1〜3年（徐々に退色）', salon: '2〜4週間（毛が伸びると崩れる）' },
  { item: '料金相場', artmake: '5〜15万円（2回セット）', salon: '3,000〜6,000円/回' },
  { item: '年間コスト', artmake: '約5〜15万円（リタッチ含む）', salon: '約3.6〜7.2万円（月1回通った場合）' },
  { item: '痛み', artmake: '麻酔使用で毛抜き程度', salon: 'ワックス脱毛でやや痛い程度' },
  { item: '施術時間', artmake: '1.5〜2.5時間（デザイン含む）', salon: '30〜60分' },
  { item: 'ダウンタイム', artmake: '1〜2週間（かさぶた期間）', salon: 'ほぼなし（赤みが数時間程度）' },
  { item: 'メンテナンス頻度', artmake: '1〜2年に1回リタッチ', salon: '3〜4週間に1回通う必要あり' },
  { item: '仕上がりの自由度', artmake: '高（毛並み・パウダーなど技法豊富）', salon: '中（自毛を整える範囲）' },
  { item: 'すっぴんでの効果', artmake: 'あり（24時間美眉キープ）', salon: 'あり（自毛が整った状態を維持）' },
  { item: 'やり直しの容易さ', artmake: '難しい（レーザー除去が必要）', salon: '容易（毛が伸びれば元に戻る）' },
]

const artmakePros = [
  '1〜3年間メンテナンス不要で美眉をキープ',
  'すっぴんでも24時間美しい眉をキープ',
  '毛が薄い・まばらな方でも理想の眉を実現',
  '汗・水に強く、スポーツや旅行でも崩れない',
  '毎朝の眉メイク時間を大幅に短縮',
]

const artmakeCons = [
  '初期費用が高い（5〜15万円）',
  'ダウンタイムが1〜2週間ある',
  'デザインの変更が気軽にできない',
  '施術者の技術力によって仕上がりに差が出る',
  '変色や退色のリスクがある',
]

const salonPros = [
  '1回あたりの料金が安い（3,000〜6,000円）',
  'ダウンタイムがほぼない',
  '毛が伸びれば元に戻るため、やり直しが容易',
  '施術時間が短い（30〜60分）',
  '自毛を活かした自然な仕上がり',
]

const salonCons = [
  '3〜4週間ごとに通う必要がある（手間・コスト）',
  '自毛が薄い・少ない方は理想の形にしにくい',
  '汗や皮脂で崩れやすい',
  '年間コストが積み重なる',
  'すっぴん時の効果は自毛の状態に依存',
]

const flowChart = [
  {
    question: '自毛の量は十分ですか？',
    yes: '眉毛サロンでも対応可能',
    no: 'アートメイクがおすすめ（毛並みを再現できる）',
  },
  {
    question: '定期的にサロンに通える時間はありますか？',
    yes: '眉毛サロンも選択肢に',
    no: 'アートメイクなら1〜2年に1回でOK',
  },
  {
    question: '初期費用を抑えたいですか？',
    yes: '眉毛サロンが低コスト',
    no: 'アートメイクの方が長期的にはコスパが良い場合も',
  },
  {
    question: 'すっぴんでも美しい眉を保ちたいですか？',
    yes: 'アートメイク一択',
    no: '眉毛サロン+メイクでも対応可能',
  },
]

const faqs = [
  {
    q: 'アートメイクと眉毛サロンを両方やることはできますか？',
    a: 'はい、併用している方も多いです。アートメイクでベースの形を作り、眉毛サロンで自毛を整えるという組み合わせは、最も美しい仕上がりを実現できる方法です。アートメイクのダウンタイム（1〜2週間）が終わってから眉毛サロンに行きましょう。',
  },
  {
    q: '長期的に見てどちらがコスパが良いですか？',
    a: 'ケースによりますが、3年間で比較すると、アートメイクは約10〜20万円（初回+リタッチ1回）、眉毛サロンは月1回で約10.8〜21.6万円です。通う頻度によっては同程度のコストになりますが、アートメイクは時間の節約（毎朝のメイク時間+サロン通い）を含めるとコスパが良い場合が多いです。',
  },
  {
    q: '眉毛サロンからアートメイクに切り替える人は多いですか？',
    a: 'はい、眉毛サロンに通っていた方がアートメイクに切り替えるケースは非常に多いです。「毎月通うのが面倒」「自毛だけでは理想の形にならない」「旅行やスポーツで崩れるのが嫌」などの理由でアートメイクを選ぶ方が増えています。',
  },
  {
    q: '眉毛が薄い場合はどちらがおすすめですか？',
    a: '眉毛が薄い・まばらな方にはアートメイクが断然おすすめです。眉毛サロンは「既存の毛を整える」施術のため、毛量が少ないと理想の形を作りにくいです。アートメイクなら毛並みを描き足すことで、毛量が少なくても自然で美しい眉を実現できます。',
  },
  {
    q: 'アートメイクの後、眉毛サロンに行くタイミングはいつですか？',
    a: 'アートメイクのダウンタイムが完了してから（2週間以上経過後）眉毛サロンに行きましょう。アートメイクで描いたデザインに合わせて自毛を整えてもらうと、より美しい仕上がりになります。サロンにはアートメイクをしていることを伝えてください。',
  },
  {
    q: 'アートメイクは失敗した場合に元に戻せますか？',
    a: 'アートメイクは1〜3年で徐々に薄くなりますが、すぐに消すことは困難です。レーザー除去で薄くすることは可能ですが、複数回の施術が必要で費用もかかります。一方、眉毛サロンは毛が伸びれば元に戻ります。リスクを考慮して信頼できるクリニックを選びましょう。',
  },
]

export default function EyebrowSalonPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "比較" }, { name: "アートメイク vs 眉毛サロン" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">徹底比較ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイク vs 眉毛サロン<br className="hidden md:block" />どっちがいい？
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            持続期間・料金・痛み・仕上がりを徹底比較。<br className="hidden md:block" />
            あなたに合った眉ケア方法を見つけましょう。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#comparison" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">比較表を見る</a>
            <a href="#flowchart" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">選び方フローチャート</a>
          </div>
        </div>
      </section>

      {/* 比較表 */}
      <section className="py-16 px-4 bg-white" id="comparison">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">項目</th>
                  <th className="p-4 text-center">アートメイク</th>
                  <th className="p-4 text-center">眉毛サロン</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}>
                    <td className="p-4 font-semibold text-gray-800 text-sm">{row.item}</td>
                    <td className="p-4 text-center text-sm text-gray-700">{row.artmake}</td>
                    <td className="p-4 text-center text-sm text-gray-700">{row.salon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* メリデメ */}
      <section className="py-16 px-4 bg-gray-50" id="pros-cons">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">メリット・デメリット比較</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* アートメイク */}
            <div>
              <h3 className="text-xl font-bold text-center mb-6 text-rose-600">アートメイク</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <h4 className="text-green-600 font-bold mb-3">メリット</h4>
                  <ul className="space-y-2">
                    {artmakePros.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-red-200">
                  <h4 className="text-red-600 font-bold mb-3">デメリット</h4>
                  <ul className="space-y-2">
                    {artmakeCons.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-red-500 mt-0.5 flex-shrink-0">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* 眉毛サロン */}
            <div>
              <h3 className="text-xl font-bold text-center mb-6 text-blue-600">眉毛サロン</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <h4 className="text-green-600 font-bold mb-3">メリット</h4>
                  <ul className="space-y-2">
                    {salonPros.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-red-200">
                  <h4 className="text-red-600 font-bold mb-3">デメリット</h4>
                  <ul className="space-y-2">
                    {salonCons.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-red-500 mt-0.5 flex-shrink-0">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 選び方フローチャート */}
      <section className="py-16 px-4 bg-white" id="flowchart">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">選び方フローチャート</h2>
          <p className="text-center text-gray-600 mb-12">4つの質問であなたに合った方法を診断</p>
          <div className="space-y-6">
            {flowChart.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">Q{i + 1}</span>
                  <h3 className="font-bold text-lg text-gray-900">{item.question}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 ml-13">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <span className="text-green-600 text-xs font-semibold">はい</span>
                    <p className="text-gray-700 text-sm mt-1">{item.yes}</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <span className="text-blue-600 text-xs font-semibold">いいえ</span>
                    <p className="text-gray-700 text-sm mt-1">{item.no}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-lg shadow-sm group">
                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-gray-50 transition-colors flex justify-between items-center">
                  <span>Q{i + 1}. {faq.q}</span>
                  <span className="text-rose-400 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 py-4 border-t text-gray-600 leading-relaxed text-sm">
                  <span className="font-semibold text-rose-500">A.</span> {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">関連記事</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/compare/price" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">比較</span>
              <p className="font-semibold mt-1">アートメイク料金比較</p>
            </Link>
            <Link href="/knowledge/pain" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">痛み・ダウンタイム完全ガイド</p>
            </Link>
            <Link href="/knowledge/duration" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクの持続期間</p>
            </Link>
            <Link href="/parts/eyebrow" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">部位別</span>
              <p className="font-semibold mt-1">眉毛アートメイクの種類・相場</p>
            </Link>
            <Link href="/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">ランキング</span>
              <p className="font-semibold mt-1">おすすめクリニックTOP5</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">アートメイクなら<br />プロのクリニックで</h2>
          <p className="text-xl mb-4 opacity-90">
            技術力の高いクリニックで理想の眉を実現しましょう。
          </p>
          <p className="text-lg mb-8 opacity-80">
            料金・技術・口コミで厳選したクリニックを比較。
          </p>
          <a href="/" className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            おすすめクリニックランキングを見る
          </a>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
