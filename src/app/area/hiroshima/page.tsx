import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "広島でおすすめのアートメイククリニック5選【2026年最新】| アートメイク比較ナビ",
  description:
    "広島でアートメイクが受けられるクリニックの選び方、料金相場、技法の種類を徹底解説。広島エリアのクリニックを選ぶ際のポイントをまとめました。",
  keywords: "アートメイク 広島,広島 アートメイク おすすめ,アートメイク 広島 安い,眉毛アートメイク 広島",
  openGraph: {
    title: "広島でおすすめのアートメイククリニック5選【2026年最新】",
    description:
      "広島のアートメイク料金相場・選び方・技法を徹底解説。",
    type: "article",
  },
};

const selectionPoints = [
  {
    num: 1,
    title: '医療機関であることを確認する',
    description: 'アートメイクは医療行為です。必ず医師が常駐する医療機関（クリニック）で施術を受けましょう。エステサロンでのアートメイクは違法です。広島でクリニックを選ぶ際は、まず医療機関かどうかを確認してください。',
  },
  {
    num: 2,
    title: '施術者の経験・実績を確認する',
    description: '症例写真やSNSでの実績をチェックしましょう。施術者のランクや経験年数も重要な判断材料です。広島エリアのクリニックでもSNSで症例を公開しているところが増えています。',
  },
  {
    num: 3,
    title: 'カウンセリングの丁寧さを重視する',
    description: '初回カウンセリングでデザインの提案やリスク説明が丁寧なクリニックを選びましょう。広島では無料カウンセリングを実施しているクリニックもあるため、複数のクリニックを比較検討することをおすすめします。',
  },
  {
    num: 4,
    title: 'アフターケア・保証制度を確認する',
    description: '施術後のフォロー体制やリタッチの料金・条件を事前に確認しましょう。万が一のトラブル時に適切な対応をしてくれるクリニックが安心です。',
  },
  {
    num: 5,
    title: '料金体系の透明性をチェックする',
    description: '施術費用に何が含まれるか（麻酔代、指名料、リタッチ代等）を事前に確認しましょう。追加費用が不明確なクリニックは避けた方が無難です。公式サイトで最新情報をご確認ください。',
  },
]

const priceRange = [
  { part: '眉毛（2回セット）', range: '5〜15万円', note: '技法（ストローク・パウダー等）や施術者ランクにより変動' },
  { part: 'リップ（2回セット）', range: '7〜18万円', note: 'フルリップかリップラインかで料金が異なる' },
  { part: 'アイライン（2回セット）', range: '5〜10万円', note: '上下・太さにより変動' },
  { part: 'リタッチ（1回）', range: '2〜5万円', note: '初回施術から1〜2年後に推奨' },
]

const techniques = [
  {
    name: 'ストローク（毛並み）',
    description: '1本1本毛を描くように色素を入れる技法。最も自然な仕上がりで、自毛のような質感を再現できます。毛量が少ない方や、ナチュラルな眉にしたい方におすすめ。',
  },
  {
    name: 'パウダー（霧状）',
    description: 'パウダーメイクで眉を描いたような柔らかい仕上がり。ふんわりとした印象で、メイク感のある眉にしたい方に人気。色の定着が良く、持続期間が長い傾向があります。',
  },
  {
    name: 'コンビネーション',
    description: 'ストロークとパウダーを組み合わせた技法。毛並みの自然さとパウダーの持続力を兼ね備え、最も完成度の高い仕上がりが期待できます。',
  },
]

const areaFeatures = [
  {
    title: '広島エリアの特徴',
    points: [
      '広島駅〜紙屋町・八丁堀エリアにクリニックが集中',
      '大手チェーンの広島院と地元密着型クリニックが混在',
      '東京・大阪と比べるとクリニック数は少ないが、質の高い施術が受けられる',
      '駐車場完備のクリニックが多く、車でのアクセスも良好',
    ],
  },
  {
    title: '広島でクリニックを探す際のポイント',
    points: [
      '症例写真で施術者の技術力を確認する',
      '広島院がなくても岡山・福岡まで足を伸ばす選択肢も',
      '公式サイトで最新の料金・メニューを必ず確認する',
      '初回カウンセリング（無料の場合あり）で実際の雰囲気を確かめる',
    ],
  },
]

const faqs = [
  {
    q: '広島でアートメイクの料金相場はどのくらいですか？',
    a: '広島のアートメイク料金相場は、眉毛2回セットで5〜15万円程度です。全国チェーンのクリニックは東京と同一料金のことが多く、地元クリニックは独自の料金設定をしています。モニター制度を利用するとさらに安く受けられる場合もあります。公式サイトで最新情報をご確認ください。',
  },
  {
    q: '広島でアートメイクを受ける際の注意点はありますか？',
    a: 'まず医療機関であることの確認が最重要です。エステサロンでのアートメイクは違法行為です。また、施術者の経験や症例写真を事前にチェックし、カウンセリングで疑問点をすべて解消してから施術を受けましょう。',
  },
  {
    q: '広島に大手アートメイククリニックの支店はありますか？',
    a: '全国展開しているクリニックの広島院がある場合と、地元の美容クリニックがアートメイクメニューを提供している場合があります。最新の出店状況は各クリニックの公式サイトでご確認ください。',
  },
  {
    q: '広島から他の地域のクリニックに通うのはアリですか？',
    a: 'はい、広島から福岡や大阪のクリニックに通う方もいます。新幹線で福岡まで約1時間、大阪まで約1.5時間のため、選択肢を広げるのも一つの方法です。ただし2回通う必要があるため、交通費も含めたトータルコストを考慮しましょう。',
  },
  {
    q: '広島でモニター価格で施術を受けられるクリニックはありますか？',
    a: 'モニター制度の有無はクリニックにより異なり、時期によっても変わります。公式サイトやSNSで最新のキャンペーン情報をチェックするか、カウンセリング時にモニター募集について確認しましょう。',
  },
  {
    q: '広島で眉毛以外（リップ・アイライン）のアートメイクも受けられますか？',
    a: '多くのクリニックで眉毛に加えてリップやアイラインのアートメイクも提供しています。ただし、クリニックによっては眉毛のみ対応の場合もあるため、事前に公式サイトで施術メニューを確認してください。',
  },
]

export default function HiroshimaAreaPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "エリア" }, { name: "広島" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">エリア別ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            広島でおすすめの<br className="hidden md:block" />
            アートメイククリニック
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            広島エリアのクリニック選びのポイント、料金相場、技法の種類を徹底解説。<br className="hidden md:block" />
            自分に合ったクリニックを見つけましょう。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#selection" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">選び方を見る</a>
            <a href="/" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">総合ランキングへ</a>
          </div>
        </div>
      </section>

      {/* エリア特徴 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">広島エリアの特徴</h2>
          <div className="space-y-6">
            {areaFeatures.map((feature, i) => (
              <div key={i} className="bg-rose-50 rounded-xl p-8 border border-rose-200">
                <h3 className="font-bold text-lg text-gray-800 mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.points.map((point, pi) => (
                    <li key={pi} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-rose-400 mt-0.5 flex-shrink-0">-</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* クリニック選びのポイント */}
      <section className="py-16 px-4 bg-gray-50" id="selection">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">広島でクリニックを選ぶ5つのポイント</h2>
          <div className="space-y-6">
            {selectionPoints.map((item) => (
              <div key={item.num} className="bg-white border border-rose-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
            <p className="text-gray-700 text-sm">
              <strong className="text-yellow-700">ご注意：</strong>
              具体的なクリニック名・料金は変動する可能性があります。最新情報は各クリニックの公式サイトでご確認ください。
            </p>
          </div>
        </div>
      </section>

      {/* 料金相場 */}
      <section className="py-16 px-4 bg-white" id="price">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">広島エリアの料金相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">施術部位</th>
                  <th className="p-4 text-center">料金相場</th>
                  <th className="p-4 text-left">備考</th>
                </tr>
              </thead>
              <tbody>
                {priceRange.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}>
                    <td className="p-4 font-semibold text-gray-800 text-sm">{row.part}</td>
                    <td className="p-4 text-center text-sm font-semibold text-rose-600">{row.range}</td>
                    <td className="p-4 text-sm text-gray-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            ※ 料金は一般的な相場の目安です。クリニック・施術者ランク・キャンペーンにより異なります。
          </p>
        </div>
      </section>

      {/* 技法の種類 */}
      <section className="py-16 px-4 bg-gray-50" id="techniques">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">アートメイクの主な技法</h2>
          <div className="space-y-6">
            {techniques.map((tech, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-lg text-gray-800 mb-3">{tech.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">広島のアートメイクに関するよくある質問（FAQ）</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-lg shadow-sm group border border-gray-100">
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
            <Link href="/area/fukuoka" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">エリア</span>
              <p className="font-semibold mt-1">福岡のおすすめクリニック</p>
            </Link>
            <Link href="/area/osaka" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">エリア</span>
              <p className="font-semibold mt-1">大阪のおすすめクリニック</p>
            </Link>
            <Link href="/area/kobe" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">エリア</span>
              <p className="font-semibold mt-1">神戸のおすすめクリニック</p>
            </Link>
            <Link href="/compare/price" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">比較</span>
              <p className="font-semibold mt-1">アートメイク料金比較</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">広島であなたに合ったクリニックを見つけよう</h2>
          <p className="text-xl mb-4 opacity-90">
            全国のクリニックを料金・技術・口コミで比較。
          </p>
          <p className="text-lg mb-8 opacity-80">
            まずは総合ランキングをチェックしましょう。
          </p>
          <a href="/" className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            おすすめクリニックランキングを見る
          </a>
          <p className="mt-6 text-sm opacity-70">2026年4月最新 - 広島エリアのクリニック選びガイド</p>
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
