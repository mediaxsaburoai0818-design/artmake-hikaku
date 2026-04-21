import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブライダルアートメイク完全ガイド｜結婚式で崩れない美眉に | アートメイク比較ナビ",
  description:
    "結婚式に向けたブライダルアートメイクの完全ガイド。何ヶ月前に施術すべきか、眉毛+リップのおすすめ部位、ドレスに合わせた色選び、当日のメリットを徹底解説。",
  keywords: "ブライダルアートメイク,結婚式 アートメイク,ウェディング アートメイク,花嫁 アートメイク",
  openGraph: {
    title: "ブライダルアートメイク完全ガイド｜結婚式で崩れない美眉に",
    description:
      "結婚式に向けたアートメイクの施術タイミング・部位・色選びを解説。",
    type: "article",
  },
};

const timeline = [
  {
    period: '結婚式6ヶ月前',
    action: 'クリニック選び・カウンセリング',
    detail: '複数のクリニックで無料カウンセリングを受け、施術者の技術力やデザインの提案力を比較しましょう。結婚式の日程を伝え、最適な施術スケジュールを相談してください。',
  },
  {
    period: '結婚式4〜5ヶ月前',
    action: '1回目の施術',
    detail: '1回目の施術を受けます。この段階で色素の定着具合やデザインの方向性を確認。ダウンタイム（1〜2週間）も考慮して余裕を持ったスケジュールに。',
  },
  {
    period: '結婚式2〜3ヶ月前',
    action: '2回目の施術（リタッチ）',
    detail: '1回目で薄かった部分を補正し、色を完成させる2回目の施術。結婚式の2ヶ月前には施術を完了させておくと、色が安定して自然な仕上がりになります。',
  },
  {
    period: '結婚式1ヶ月前',
    action: '仕上がり確認・微調整',
    detail: '色が完全に定着した状態を確認。もし気になる点があればクリニックに相談。この時期に施術を受けるのはリスクが高いため、遅くとも2ヶ月前までに完了を。',
  },
  {
    period: '結婚式当日',
    action: '崩れない美眉で最高の一日を',
    detail: '涙を流しても、汗をかいても、写真撮影をしても、常に美しい眉とリップをキープ。ヘアメイクさんの負担も軽減され、全体のバランスが取りやすくなります。',
  },
]

const recommendParts = [
  {
    part: '眉毛',
    priority: '最優先おすすめ',
    reason: '眉毛は顔の印象を最も左右する部位。結婚式では涙を流す場面も多く、通常の眉メイクでは崩れやすいです。アートメイクなら泣いても汗をかいても美しい眉をキープ。写真映えにも大きく貢献します。',
    design: 'ドレスに合わせたエレガントなアーチ眉がおすすめ。色は髪色に合わせつつ、やや明るめにするとドレス姿に映えます。',
  },
  {
    part: 'リップ',
    priority: '強くおすすめ',
    reason: 'リップアートメイクは食事や飲み物で落ちにくいため、披露宴での食事シーンも安心。お色直しの際もリップの塗り直しが不要で、時短になります。ベースの血色感が維持されるため、リップを塗り直す頻度が格段に減ります。',
    design: 'ナチュラルなコーラルピンクやローズピンクがブライダルの定番。ドレスの色（白・ピンク・ゴールド等）に合わせて色を選びましょう。',
  },
  {
    part: 'アイライン',
    priority: '好みに応じて',
    reason: '目力を強調したい方にはアイラインアートメイクもおすすめ。まつげの間を埋めるインラインなら自然に目元をパッチリ見せられます。ただし、ダウンタイムがやや長いため、スケジュールに余裕を持って。',
    design: 'インライン（まつげの間を埋める）が自然でブライダル向き。太すぎるラインは避け、ナチュラルに仕上げましょう。',
  },
]

const weddingDayBenefits = [
  {
    title: '涙を流しても眉もリップも崩れない',
    description: '挙式中の感動的な場面で涙を流しても、メイクの心配は不要。花嫁としての美しい姿を終始キープできます。',
  },
  {
    title: '写真・動画映えが格段にアップ',
    description: '一生残るウェディングフォトや動画で、常に美しい眉・リップが映ります。どの角度からの撮影でも自信が持てます。',
  },
  {
    title: 'ヘアメイクの時短・負担軽減',
    description: '眉とリップのベースが完成しているため、当日のヘアメイクがスムーズに。お色直しの時間も短縮できます。',
  },
  {
    title: 'お色直しもスムーズ',
    description: 'ドレスチェンジの際もベースメイクの修正が最小限で済み、ゲストを待たせる時間を短縮できます。',
  },
  {
    title: '前撮り・後撮りにも活用できる',
    description: 'アートメイクは1〜3年持続するため、前撮り・後撮り・二次会・新婚旅行まで長期間活用できます。',
  },
  {
    title: 'すっぴんでの朝の準備が楽',
    description: '結婚式当日の朝は忙しいもの。アートメイクがあれば、すっぴん状態でもベースが整っているため、心に余裕が生まれます。',
  },
]

const dressColorGuide = [
  {
    dress: 'ホワイト・オフホワイト',
    eyebrow: 'やや明るめのブラウン。白いドレスに映える柔らかい印象に。',
    lip: 'コーラルピンク・ベビーピンクが定番。清楚な印象にまとまります。',
  },
  {
    dress: 'ピンク・サーモン系',
    eyebrow: '赤みのあるブラウン。ドレスの色味に合わせて統一感を。',
    lip: 'ローズピンク・モーヴピンク。ドレスと同系色で馴染ませるとおしゃれ。',
  },
  {
    dress: 'ゴールド・シャンパン系',
    eyebrow: 'アッシュブラウン〜ダークブラウン。ゴージャスなドレスに合う大人っぽい眉に。',
    lip: 'コーラルピンク・ヌーディーベージュ。華やかすぎず上品な仕上がりに。',
  },
  {
    dress: 'カラードレス（レッド・ブルー等）',
    eyebrow: '髪色に合わせたナチュラルなブラウン。ドレスの色が主役なので眉は控えめに。',
    lip: 'ドレスの色に合わせるか、ナチュラルなピンクで馴染ませる。担当者と相談がベスト。',
  },
]

const faqs = [
  {
    q: '結婚式の何ヶ月前にアートメイクを受けるべきですか？',
    a: '最低でも結婚式の2ヶ月前までに施術を完了させることをおすすめします。2回セットの施術を受ける場合、1回目と2回目の間に1〜3ヶ月の間隔が必要なため、逆算すると4〜6ヶ月前にスタートするのが理想的です。色の安定期間も考慮すると、半年前からの準備がベストです。',
  },
  {
    q: 'ブライダルアートメイクの費用はどのくらいですか？',
    a: '眉毛のみで5〜15万円（2回セット）、リップを追加すると合計10〜30万円程度が相場です。ブライダル専用プランを設けているクリニックもあり、セット割引が適用される場合もあります。費用の詳細は各クリニックの公式サイトでご確認ください。',
  },
  {
    q: '結婚式直前に施術を受けても大丈夫ですか？',
    a: '結婚式の1ヶ月以内の施術はおすすめしません。ダウンタイム中のかさぶたや色の不安定さが残るリスクがあります。万が一のトラブル（腫れ、色ムラ等）に対応する時間も必要です。遅くとも2ヶ月前には施術を完了させましょう。',
  },
  {
    q: 'ヘアメイクさんにアートメイクのことを伝えるべきですか？',
    a: 'はい、必ず伝えてください。アートメイクの上からメイクを重ねる際のアプローチが変わるため、事前に知っておいてもらう方が仕上がりが良くなります。リハーサルメイクの際にアートメイクの状態を見せておくとスムーズです。',
  },
  {
    q: '前撮りと本番で色味を変えたい場合はどうすればいいですか？',
    a: 'アートメイクのベースカラーは変えられませんが、その上から通常のメイクで色味を調整できます。前撮りではナチュラルに、本番では華やかにといった使い分けは、ヘアメイクさんとの相談で対応可能です。ベースがあるため、どちらの場合もメイク映えします。',
  },
  {
    q: '結婚式後もアートメイクは残りますか？',
    a: 'はい、アートメイクは1〜3年持続します。結婚式後も新婚旅行、日常のメイク時短、すっぴん美人効果が続きます。結婚式のためだけでなく、その後の生活の質も向上するため、コスパの良い投資と言えます。',
  },
]

export default function BridalPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "目的別" }, { name: "ブライダル" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">目的別ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            ブライダルアートメイク<br className="hidden md:block" />
            結婚式で崩れない美眉に
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            涙を流しても、汗をかいても、美しい眉とリップをキープ。<br className="hidden md:block" />
            一生に一度の結婚式を最高の状態で迎えましょう。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#timeline" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">施術スケジュール</a>
            <a href="/" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">総合ランキングへ</a>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-10 px-4 bg-white border-b">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-bold mb-4 text-gray-800">目次</h2>
          <nav>
            <ol className="space-y-2 text-sm text-rose-600">
              <li><a href="#timeline" className="hover:underline">1. 施術のベストタイミング</a></li>
              <li><a href="#parts" className="hover:underline">2. おすすめ部位（眉+リップ）</a></li>
              <li><a href="#dress" className="hover:underline">3. ドレスに合わせた色選び</a></li>
              <li><a href="#benefits" className="hover:underline">4. 結婚式当日のメリット</a></li>
              <li><a href="#faq" className="hover:underline">5. よくある質問（FAQ）</a></li>
            </ol>
          </nav>
        </div>
      </section>

      {/* スケジュール */}
      <section className="py-16 px-4 bg-white" id="timeline">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">施術のベストタイミング</h2>
          <p className="text-center text-gray-600 mb-8">結婚式から逆算したスケジュールを確認しましょう</p>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-xl p-6 border border-rose-200 shadow-sm">
                <div className="bg-rose-500 text-white min-w-[100px] h-fit px-3 py-2 rounded-lg text-center text-sm font-bold shrink-0">
                  {item.period}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-800">{item.action}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* おすすめ部位 */}
      <section className="py-16 px-4 bg-gray-50" id="parts">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">ブライダルにおすすめの部位</h2>
          <div className="space-y-6">
            {recommendParts.map((item, i) => (
              <div key={i} className="bg-white border border-rose-200 rounded-xl p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-bold text-xl text-gray-800">{item.part}</h3>
                  <span className="bg-rose-100 text-rose-600 text-xs px-3 py-1 rounded-full font-semibold">{item.priority}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.reason}</p>
                <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                  <span className="text-rose-600 text-xs font-semibold">デザインのポイント</span>
                  <p className="text-gray-700 text-sm mt-1">{item.design}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ドレスに合わせた色選び */}
      <section className="py-16 px-4 bg-white" id="dress">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">ドレスに合わせた色選び</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">ドレスの色</th>
                  <th className="p-4 text-left">眉のおすすめ</th>
                  <th className="p-4 text-left">リップのおすすめ</th>
                </tr>
              </thead>
              <tbody>
                {dressColorGuide.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}>
                    <td className="p-4 font-semibold text-gray-800 text-sm">{row.dress}</td>
                    <td className="p-4 text-sm text-gray-700">{row.eyebrow}</td>
                    <td className="p-4 text-sm text-gray-700">{row.lip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 当日のメリット */}
      <section className="py-16 px-4 bg-gray-50" id="benefits">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">結婚式当日のメリット</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {weddingDayBenefits.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-rose-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-rose-100 text-rose-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">よくある質問（FAQ）</h2>
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
            <Link href="/knowledge/lip-color" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">リップアートメイクの色選びガイド</p>
            </Link>
            <Link href="/knowledge/pain" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">痛み・ダウンタイム完全ガイド</p>
            </Link>
            <Link href="/knowledge/aftercare" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アフターケア完全ガイド</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">最高の結婚式のために<br />今すぐクリニック選びを始めよう</h2>
          <p className="text-xl mb-4 opacity-90">
            ブライダル対応のクリニックを料金・技術力で比較。
          </p>
          <p className="text-lg mb-8 opacity-80">
            結婚式の半年前からの準備がベストです。
          </p>
          <a href="/" className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            おすすめクリニックランキングを見る
          </a>
          <p className="mt-6 text-sm opacity-70">2026年4月最新 - ブライダル対応クリニックを比較</p>
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
