import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイクの色が変わる？変色の原因と対策【完全ガイド】| アートメイク比較ナビ',
  description: 'アートメイクの変色が起きる原因（代謝・紫外線・色素の種類）を徹底解説。部位別の変色パターン、対策方法、リタッチの最適タイミングまで完全網羅。',
  keywords: 'アートメイク 色 変わる,アートメイク 変色,アートメイク 色 変化,アートメイク 退色',
  openGraph: {
    title: 'アートメイクの色が変わる？変色の原因と対策【完全ガイド】',
    description: '変色の原因・部位別パターン・対策方法・リタッチのタイミングを徹底解説。',
    type: 'article',
  },
}

const discolorationCauses = [
  {
    num: 1,
    title: '代謝（ターンオーバー）による退色',
    description: 'アートメイクの色素は皮膚の浅い層（表皮〜真皮上層）に入れるため、肌のターンオーバーとともに少しずつ排出されます。代謝が活発な方ほど退色が早く、1〜2年で色味が薄くなる傾向があります。特に20〜30代は代謝が活発なため、退色スピードが早い傾向にあります。',
  },
  {
    num: 2,
    title: '紫外線による変色',
    description: '紫外線はアートメイクの色素を分解・変質させる大きな要因です。日焼けをすると色素が赤みを帯びたり、オレンジがかった色に変化することがあります。特に夏場やアウトドアが多い方は、紫外線対策を徹底することが重要です。',
  },
  {
    num: 3,
    title: '色素の種類・品質',
    description: '使用する色素の成分や品質によって、変色の傾向が異なります。酸化鉄を含む色素は赤みや青みに変化しやすい一方、最新のオーガニック色素は変色リスクが低くなっています。クリニック選びの際に使用色素を確認することが重要です。',
  },
  {
    num: 4,
    title: '体質・生活習慣',
    description: '新陳代謝が高い方、運動習慣がある方、サウナや温泉に頻繁に入る方は退色が早い傾向があります。また、スキンケアでレチノールやピーリング成分を使用している方も、ターンオーバーが促進されるため色落ちしやすくなります。',
  },
]

const partPatterns = [
  {
    part: '眉毛',
    pattern: '茶色 → 赤みがかった茶色 → グレー',
    detail: '眉毛のアートメイクは、時間経過とともに赤み（オレンジ〜レッドブラウン）が出やすい傾向があります。これは黄色と黒の色素の退色速度が異なるためです。特に明るめの茶色で施術した場合、赤みが目立ちやすくなります。最終的にはグレーがかった薄い色になります。',
    timeline: '変色目安: 施術後6ヶ月〜1年頃から変化',
  },
  {
    part: 'リップ',
    pattern: 'ピンク・レッド → オレンジ → 薄ピンク',
    detail: 'リップアートメイクは唇の粘膜に近い部位のため、代謝が活発で色の変化が出やすい部位です。赤系の色素はオレンジ方向に変化しやすく、ピンク系はサーモンピンクのような色味に変わることがあります。',
    timeline: '変色目安: 施術後4〜8ヶ月頃から変化',
  },
  {
    part: 'アイライン',
    pattern: '黒 → 青みがかったグレー → 薄いグレー',
    detail: 'アイラインは黒い色素を使用するため、退色すると青みがかったグレーに変化することがあります。これはカーボン系色素が紫外線や代謝の影響で変質するためです。ただし他の部位に比べて変色は目立ちにくいです。',
    timeline: '変色目安: 施術後1〜2年頃から変化',
  },
]

const preventionTips = [
  {
    num: 1,
    title: '日焼け止め・紫外線対策を徹底する',
    description: '施術2週間後からは日焼け止め（SPF30以上）を施術部位に塗りましょう。帽子やサングラスも有効です。紫外線対策は変色防止の最も効果的な方法です。',
  },
  {
    num: 2,
    title: 'レチノール・ピーリングを施術部位に使わない',
    description: 'ターンオーバーを促進する成分は退色を早めます。施術部位のスキンケアではレチノール、AHA/BHA、ビタミンC誘導体などの角質ケア成分を避けましょう。',
  },
  {
    num: 3,
    title: '色素の品質を確認してクリニックを選ぶ',
    description: '最新のオーガニック色素やFDA認可の色素を使用しているクリニックを選びましょう。カウンセリング時に「どんな色素を使っていますか？」と確認することが大切です。',
  },
  {
    num: 4,
    title: '適切なタイミングでリタッチを行う',
    description: '完全に退色してからリタッチするよりも、ある程度色が残っている段階（1〜1.5年後）でリタッチする方が、均一で美しい仕上がりになります。',
  },
  {
    num: 5,
    title: 'アフターケアを怠らない',
    description: '施術後1〜2週間のアフターケア期間は色素の定着に最も重要な時期です。処方された軟膏をしっかり塗り、患部を保護することで、均一な定着を促しましょう。',
  },
]

const retouchTimeline = [
  {
    timing: '施術後1〜3ヶ月',
    status: '初回施術の色が安定する時期',
    recommend: '2回目施術（セット施術の場合）を受ける。1回目の色の入りムラや薄い部分を補正。',
  },
  {
    timing: '施術後6ヶ月〜1年',
    status: '徐々に退色が始まる時期',
    recommend: '変色が気になり始めたら早めのリタッチ検討。完全に消える前に補色する方が自然に仕上がる。',
  },
  {
    timing: '施術後1〜1.5年',
    status: 'リタッチの最適タイミング',
    recommend: '多くの方にとってベストなリタッチ時期。色が30〜50%残っている段階でのリタッチがおすすめ。',
  },
  {
    timing: '施術後2〜3年',
    status: 'かなり退色している状態',
    recommend: 'ほぼ新規施術に近い工程が必要。デザインを変更したい場合はこのタイミングも選択肢。',
  },
]

const faqs = [
  {
    q: 'アートメイクの変色は必ず起きますか？',
    a: 'はい、程度の差はありますが、アートメイクは時間経過とともに必ず退色・変色します。これは皮膚のターンオーバーによる自然な現象です。ただし、質の良い色素を使用し、適切なアフターケアを行うことで変色を最小限に抑えることができます。',
  },
  {
    q: '変色した色を修正することはできますか？',
    a: 'はい、リタッチ（補色）で修正可能です。例えば赤みが出た眉には、補色としてオリーブ系やアッシュ系の色素を重ねることで自然な色味に戻せます。変色の状態に合わせて色を調整するため、経験豊富なアーティストに相談しましょう。',
  },
  {
    q: '変色を防ぐために最も効果的なことは何ですか？',
    a: '最も効果的なのは紫外線対策です。施術部位に日焼け止めを塗る、帽子やサングラスを着用するなど、紫外線から色素を守ることが変色防止の一番の近道です。加えて、施術直後のアフターケアを丁寧に行うことで色素の定着を高められます。',
  },
  {
    q: 'リタッチは同じクリニックで受けるべきですか？',
    a: '可能であれば同じクリニック・同じアーティストでリタッチを受けることをおすすめします。前回の施術内容（使用色素、深さ、デザイン）を把握しているため、より正確な補色が可能です。別のクリニックでも施術は可能ですが、前回の施術情報を伝えましょう。',
  },
  {
    q: '色素の種類によって変色のしやすさは違いますか？',
    a: 'はい、大きく異なります。酸化鉄を多く含む従来型の色素は赤み・青みに変色しやすい傾向があります。一方、最新のオーガニック色素やFDA認可の色素は変色リスクが低く、自然な退色をたどります。カウンセリング時に色素の種類を確認しましょう。',
  },
  {
    q: 'セルフケアで変色を元に戻すことはできますか？',
    a: 'セルフケアで変色した色を元に戻すことは困難です。退色を早める方法（ターンオーバー促進）はありますが、特定の色味に戻すことはできません。変色が気になる場合は、クリニックでのリタッチや補色が最も確実な方法です。自己判断でのケアは悪化の原因になることもあるため避けましょう。',
  },
]

export default function ColorChangePage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "知識" }, { name: "変色・色の変化" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3">2026年最新 完全ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイクの色が変わる？<br />変色の原因と対策
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            「施術後に色が赤くなった」「グレーっぽくなってきた」<br className="hidden md:block" />
            変色のメカニズムと正しい対策を徹底解説します。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#causes" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">変色の原因を見る</a>
            <a href="#prevention" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">対策方法を見る</a>
          </div>
        </div>
      </section>

      {/* 結論 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold">結論</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">変色は自然現象、対策で最小限に</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              アートメイクの変色は<strong className="text-rose-600">代謝・紫外線・色素の種類が主な原因</strong>で起こる自然な現象です。
              しかし、<strong className="text-rose-600">適切な紫外線対策とスキンケア</strong>で変色を大幅に抑えることが可能です。
              また、<strong className="text-rose-600">1〜1.5年ごとのリタッチ</strong>で常に美しい状態を維持できます。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">3大原因</div>
                <div className="text-sm text-gray-600">代謝・紫外線・色素<br />が変色の主要因</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">6ヶ月〜</div>
                <div className="text-sm text-gray-600">変色が始まる<br />目安の時期</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">1〜1.5年</div>
                <div className="text-sm text-gray-600">リタッチの<br />おすすめタイミング</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 変色の原因 */}
      <section className="py-16 px-4 bg-gray-50" id="causes">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">変色の4つの原因</h2>
          <p className="text-center text-gray-600 mb-12">なぜアートメイクの色は変わるのかを詳しく解説します</p>
          <div className="space-y-6">
            {discolorationCauses.map((item) => (
              <div key={item.num} className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="bg-rose-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 部位別の変色パターン */}
      <section className="py-16 px-4 bg-white" id="patterns">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">部位別の変色パターン</h2>
          <p className="text-center text-gray-600 mb-12">施術部位によって変色の出方が異なります</p>
          <div className="space-y-6">
            {partPatterns.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-rose-500 text-white px-6 py-3 flex items-center justify-between">
                  <h3 className="font-bold text-lg">{item.part}</h3>
                  <span className="bg-white text-rose-500 px-3 py-1 rounded-full text-sm font-bold">{item.pattern}</span>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-gray-700 leading-relaxed">{item.detail}</p>
                  <p className="text-gray-500 text-sm">{item.timeline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 対策方法 */}
      <section className="py-16 px-4 bg-gradient-to-b from-rose-50 to-pink-50" id="prevention">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">変色を防ぐ5つの対策</h2>
          <p className="text-center text-gray-600 mb-12">日常のケアで変色リスクを大幅に抑えましょう</p>
          <div className="space-y-6">
            {preventionTips.map((tip) => (
              <div key={tip.num} className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="bg-rose-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {tip.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* リタッチのタイミング */}
      <section className="py-16 px-4 bg-white" id="retouch">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">リタッチの最適タイミング</h2>
          <p className="text-center text-gray-600 mb-12">時期に応じたリタッチの目安を確認しましょう</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="px-4 py-4 text-left font-semibold min-w-[120px]">時期</th>
                  <th className="px-4 py-4 text-left font-semibold">状態</th>
                  <th className="px-4 py-4 text-left font-semibold">おすすめ対応</th>
                </tr>
              </thead>
              <tbody>
                {retouchTimeline.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-4 font-semibold text-rose-600 whitespace-nowrap">{item.timing}</td>
                    <td className="px-4 py-4 text-gray-700 text-sm">{item.status}</td>
                    <td className="px-4 py-4 text-gray-700 text-sm">{item.recommend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">よくある質問（FAQ）</h2>
          <p className="text-center text-gray-600 mb-12">アートメイクの変色に関する疑問にお答えします</p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl shadow-sm group">
                <summary className="px-6 py-5 cursor-pointer font-semibold hover:bg-gray-50 transition-colors rounded-xl flex items-center justify-between">
                  <span>Q{i + 1}. {faq.q}</span>
                  <span className="text-rose-400 group-open:rotate-180 transition-transform ml-4 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">{faq.a}</div>
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
            <Link href="/knowledge/duration" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクの持続期間</p>
            </Link>
            <Link href="/knowledge/retouch" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">リタッチの時期と費用</p>
            </Link>
            <Link href="/knowledge/sunscreen" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクと日焼け止め</p>
            </Link>
            <Link href="/knowledge/risk" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクのリスク・副作用</p>
            </Link>
            <Link href="/knowledge/aftercare" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アフターケア完全ガイド</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">変色が心配なら<br />色素にこだわるクリニックを選ぼう</h2>
          <p className="text-xl mb-4 opacity-90">
            高品質な色素を使用するクリニックなら変色リスクを最小限に。<br className="hidden md:block" />
            まずはカウンセリングで色素の種類を確認しましょう。
          </p>
          <p className="mb-8 opacity-80">使用色素にこだわるクリニックをランキングで比較</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/" className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              おすすめクリニックランキングを見る
            </Link>
          </div>
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
  )
}
