import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "神戸でおすすめのアートメイククリニック5選【2026年最新】| アートメイク比較ナビ",
  description:
    "神戸でアートメイクが受けられるクリニックの選び方、料金相場、技法の種類を徹底解説。三宮・元町エリアを中心としたクリニック選びのポイントをまとめました。",
  keywords: "アートメイク 神戸,神戸 アートメイク おすすめ,アートメイク 神戸 安い,眉毛アートメイク 神戸",
  openGraph: {
    title: "神戸でおすすめのアートメイククリニック5選【2026年最新】",
    description:
      "神戸のアートメイク料金相場・選び方・技法を徹底解説。",
    type: "article",
  },
};

const selectionPoints = [
  {
    num: 1,
    title: '医療機関であることを確認する',
    description: 'アートメイクは医療行為のため、医師が常駐する医療機関でのみ施術が認められています。神戸エリアでクリニックを探す際は、まず医療機関であることを確認しましょう。エステサロンでのアートメイクは違法です。',
  },
  {
    num: 2,
    title: '施術者の経験・症例写真をチェックする',
    description: 'クリニックの公式サイトやSNSで症例写真を確認しましょう。自分が希望するデザイン（ナチュラル系、しっかり系など）の実績があるかどうかが重要です。施術者の経験年数やランクも確認ポイントです。',
  },
  {
    num: 3,
    title: 'アクセスの良さを考慮する',
    description: '神戸エリアでは三宮・元町駅周辺にクリニックが集中しています。2回通う必要があるため、通いやすい立地を選びましょう。大阪のクリニックも電車で30分程度のため、選択肢に入れるのもおすすめです。',
  },
  {
    num: 4,
    title: '料金の内訳と追加費用を確認する',
    description: '施術費用に麻酔代、指名料、リタッチ代が含まれるかどうかを事前に確認しましょう。「2回セット○万円」の中に何が含まれているかはクリニックによって異なります。公式サイトで最新情報をご確認ください。',
  },
  {
    num: 5,
    title: 'カウンセリングで相性を確かめる',
    description: '初回カウンセリング（無料の場合あり）で、施術者との相性やクリニックの雰囲気を確認しましょう。デザインの提案力、リスク説明の丁寧さ、質問への回答が適切かをチェックしてください。',
  },
]

const priceRange = [
  { part: '眉毛（2回セット）', range: '5〜15万円', note: '技法・施術者ランクにより変動。モニター制度で割引の場合あり' },
  { part: 'リップ（2回セット）', range: '7〜18万円', note: 'フルリップの場合の相場。グラデーションリップも人気' },
  { part: 'アイライン（2回セット）', range: '5〜10万円', note: '上のみ・上下セットで料金が異なる' },
  { part: 'リタッチ（1回）', range: '2〜5万円', note: '初回施術から1〜2年後に推奨。同一クリニックだと割安' },
]

const techniques = [
  {
    name: 'ストローク（毛並み）',
    description: '1本1本毛を描くように色素を入れる技法。自毛のような自然な仕上がりが特徴です。ナチュラル志向の方、毛量が少ない方におすすめ。',
  },
  {
    name: 'パウダー（霧状）',
    description: 'パウダーメイクのようなふんわりとした仕上がり。メイク感を出したい方、色の定着を重視する方に人気。持続期間がやや長い傾向があります。',
  },
  {
    name: 'コンビネーション（ストローク+パウダー）',
    description: '両方の良いとこ取りの技法。毛並みの自然さとパウダーの持続力を兼ね備えた、最も完成度の高い仕上がりです。',
  },
]

const areaFeatures = [
  {
    title: '神戸エリアの特徴',
    points: [
      '三宮・元町エリアに美容クリニックが集中',
      'JR三ノ宮駅・阪急神戸三宮駅から徒歩圏内にクリニック多数',
      '大阪へのアクセスが良好（電車で約30分）のため大阪のクリニックも選択肢に',
      'おしゃれな街並みで、施術後のショッピングも楽しめる',
    ],
  },
  {
    title: '神戸から大阪のクリニックに通う選択肢',
    points: [
      'JR神戸線で三ノ宮→大阪は約21分、阪急で約27分',
      '大阪（梅田・心斎橋）には大手チェーンの支店が豊富',
      '神戸では選択肢が限られる場合、大阪まで足を伸ばすのも有効',
      '交通費を含めてもトータルコストが安くなる場合あり',
    ],
  },
]

const faqs = [
  {
    q: '神戸でアートメイクの料金相場はどのくらいですか？',
    a: '神戸のアートメイク料金相場は、眉毛2回セットで5〜15万円程度です。全国チェーンの神戸院は東京と同一料金の場合が多く、地元クリニックは独自の価格設定をしています。モニター制度やキャンペーンを利用するとさらにお得に受けられることもあります。公式サイトで最新情報をご確認ください。',
  },
  {
    q: '神戸で初めてアートメイクを受ける場合のおすすめは？',
    a: 'まずは無料カウンセリングを提供しているクリニックで相談することをおすすめします。初めての方はカウンセリングの丁寧さ、デザイン提案力、リスク説明の充実度を重視して選びましょう。複数のクリニックを比較検討するのがベストです。',
  },
  {
    q: '神戸と大阪、どちらのクリニックを選ぶべきですか？',
    a: '神戸に希望のクリニックがあれば通いやすい神戸がおすすめです。ただし、選択肢を広げたい場合は大阪も検討の価値があります。大阪（梅田・心斎橋）はクリニック数が多く、大手チェーンも充実しています。電車で約30分のため、2回の通院も十分可能です。',
  },
  {
    q: '神戸で眉毛以外のアートメイクも受けられますか？',
    a: '多くのクリニックでリップやアイラインのアートメイクも提供しています。ただし、クリニックによっては眉毛のみの場合もあるため、事前に公式サイトで施術メニューを確認してください。複数部位の同日施術が可能なクリニックもあります。',
  },
  {
    q: '神戸でモニター価格でアートメイクを受けられますか？',
    a: 'モニター制度の有無はクリニック・時期により異なります。SNSでの写真掲載を条件に10〜50%OFFになるケースが一般的です。公式サイトやSNSで最新のキャンペーン情報を確認するか、カウンセリング時にモニター制度について質問しましょう。',
  },
  {
    q: '施術後の通院は何回必要ですか？',
    a: '一般的に2回（初回施術+2回目施術）の通院が必要です。1回目と2回目は1〜3ヶ月の間隔を空けます。2回の施術で完成形に仕上げるのが標準的なプロセスです。その後は1〜2年ごとのリタッチで美しい状態を維持できます。',
  },
]

export default function KobeAreaPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "エリア" }, { name: "神戸" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">エリア別ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            神戸でおすすめの<br className="hidden md:block" />
            アートメイククリニック
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            神戸・三宮エリアのクリニック選びのポイント、料金相場、<br className="hidden md:block" />
            技法の種類を徹底解説します。
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
          <h2 className="text-3xl font-bold text-center mb-10">神戸エリアの特徴</h2>
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
          <h2 className="text-3xl font-bold text-center mb-10">神戸でクリニックを選ぶ5つのポイント</h2>
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
          <h2 className="text-3xl font-bold text-center mb-10">神戸エリアの料金相場</h2>
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
          <h2 className="text-3xl font-bold text-center mb-10">神戸のアートメイクに関するよくある質問（FAQ）</h2>
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
            <Link href="/area/osaka" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">エリア</span>
              <p className="font-semibold mt-1">大阪のおすすめクリニック</p>
            </Link>
            <Link href="/area/hiroshima" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">エリア</span>
              <p className="font-semibold mt-1">広島のおすすめクリニック</p>
            </Link>
            <Link href="/area/tokyo" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">エリア</span>
              <p className="font-semibold mt-1">東京のおすすめクリニック</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">神戸であなたに合ったクリニックを見つけよう</h2>
          <p className="text-xl mb-4 opacity-90">
            三宮・元町エリアのクリニックを料金・技術で比較。
          </p>
          <p className="text-lg mb-8 opacity-80">
            大阪のクリニックも含めて幅広い選択肢から選びましょう。
          </p>
          <a href="/" className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            おすすめクリニックランキングを見る
          </a>
          <p className="mt-6 text-sm opacity-70">2026年4月最新 - 神戸エリアのクリニック選びガイド</p>
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
