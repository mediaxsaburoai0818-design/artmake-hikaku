import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイクのアフターケア完全ガイド｜施術後の過ごし方 | アートメイク比較ナビ',
  description: 'アートメイク施術後のアフターケアを徹底解説。施術当日〜1週間の過ごし方、ダウンタイム中のNG行為（洗顔・化粧・運動・飲酒等）、部位別ケア方法を完全網羅。',
  keywords: 'アートメイク アフターケア,アートメイク 施術後,アートメイク ダウンタイム ケア,アートメイク 施術後 過ごし方',
  openGraph: {
    title: 'アートメイクのアフターケア完全ガイド｜施術後の過ごし方',
    description: '施術当日〜1週間のケア方法、NG行為、部位別アドバイスを解説。',
    type: 'article',
  },
}

const dailyTimeline = [
  {
    day: '施術当日',
    care: '患部を清潔に保ち、処方された軟膏を塗布。施術部位に水がかからないよう注意。帰宅後はなるべく安静に過ごしましょう。',
    ng: '洗顔（施術部位）、入浴（シャワーは身体のみOK）、メイク、飲酒、激しい運動',
    point: '腫れ・赤みがピークの時期。冷やしたい場合は清潔なガーゼを当てて優しく冷やす程度に。',
  },
  {
    day: '1〜2日目',
    care: '軟膏を1日2〜3回塗布して保湿。洗顔は施術部位を避けて行う。シャワーは身体のみで短時間に。',
    ng: '施術部位への洗顔・クレンジング、化粧水・乳液（施術部位）、長風呂、サウナ、プール',
    point: '眉毛は色が濃く見える時期。リップは腫れがピーク。外出時はマスクや帽子で保護。',
  },
  {
    day: '3〜4日目',
    care: '軟膏の塗布を継続。かさぶたが形成され始めるがこすらない。施術部位以外の洗顔・メイクはOK。',
    ng: '施術部位を触る・こする、かさぶたを剥がす、スクラブ洗顔、激しい運動',
    point: 'かゆみが出ることがあるが、絶対に触らない。かさぶたを剥がすと色素が抜けてムラになる。',
  },
  {
    day: '5〜7日目',
    care: 'かさぶたが自然に剥がれ始める。引き続き軟膏で保湿。徐々に通常の洗顔に戻してOK（優しく）。',
    ng: 'かさぶたを無理に剥がす、ピーリング・スクラブ、海・プール、直射日光',
    point: '色が一時的に薄く見える「色飛び」が起きることがあるが正常。1〜2週間で色が戻る。',
  },
  {
    day: '1〜2週間後',
    care: 'かさぶたが完全に取れたら、施術部位のメイクを再開してOK。日焼け止めの使用を開始。',
    ng: 'レチノール・ピーリング成分（1ヶ月控える）、サウナ・岩盤浴（2週間控える）',
    point: '色が安定し始める時期。まだデリケートな状態なので、優しくケアを続ける。',
  },
]

const ngActions = [
  {
    action: '施術部位の洗顔・クレンジング',
    period: '3〜5日間',
    reason: '水分や洗浄成分が傷口に入り、色素の定着を妨げたり感染のリスクを高めます。施術部位を避けて洗顔しましょう。',
  },
  {
    action: '施術部位へのメイク',
    period: '1〜2週間',
    reason: '化粧品の成分が傷口に入り、炎症や色素の変色の原因になります。かさぶたが完全に取れるまで我慢しましょう。',
  },
  {
    action: '激しい運動・スポーツ',
    period: '1週間',
    reason: '発汗が色素の定着を妨げ、血行促進が腫れを悪化させる可能性があります。軽い散歩程度にとどめましょう。',
  },
  {
    action: '飲酒',
    period: '3日〜1週間',
    reason: 'アルコールは血管を拡張させ、出血や腫れを悪化させます。施術後3日間は禁酒、1週間は控えめにしましょう。',
  },
  {
    action: '入浴・サウナ・温泉・プール',
    period: '1〜2週間',
    reason: '長時間の水分接触と高温が色素の定着を妨げます。シャワーは身体のみで短時間にし、湯船は避けましょう。',
  },
  {
    action: 'かさぶたを剥がす・触る',
    period: 'かさぶたが自然に取れるまで',
    reason: 'かさぶたと一緒に色素が剥がれ、仕上がりにムラができます。かゆくても絶対に触らず、自然に剥がれるのを待ちましょう。',
  },
  {
    action: '日焼け・直射日光',
    period: '施術後ずっと（最低1ヶ月は厳重に）',
    reason: '紫外線は色素を分解・変色させる大敵。外出時は帽子・サングラスで保護し、2週間後から日焼け止めを使用しましょう。',
  },
]

const partCare = [
  {
    part: '眉毛',
    points: [
      '洗顔時はおでこを避けて、目の下から洗うようにする',
      '前髪が施術部位に触れないようにピンで留める',
      '軟膏は薄く均一に塗布（厚塗りは逆効果）',
      'かさぶたが取れた後もメイクは優しいタッチで',
      'アイブロウペンシルは2週間後から使用可能',
    ],
  },
  {
    part: 'リップ',
    points: [
      '食事はストローを使い、唇への接触を最小限に',
      '辛い食べ物・熱い食べ物・刺激の強い食べ物は避ける',
      '食後は軽く押さえるようにして拭く（こすらない）',
      '軟膏やリップバームで常に保湿を維持',
      '歯磨きは唇に歯ブラシが当たらないよう注意',
    ],
  },
  {
    part: 'アイライン',
    points: [
      'コンタクトレンズは翌日から使用可能（ハードは2〜3日後）',
      'アイメイク（マスカラ含む）は1週間控える',
      '目をこすらない（就寝中も注意）',
      '洗顔時は目元を避けて水が入らないようにする',
      '外出時はサングラスで紫外線と埃から保護',
    ],
  },
]

const faqs = [
  {
    q: '施術後、顔は洗えないのですか？',
    a: '施術部位以外の洗顔は翌日からOKです。施術部位への洗顔は3〜5日間控えてください。洗顔時は施術部位に水がかからないよう注意しながら、それ以外の部分を優しく洗いましょう。拭き取りタイプのクレンジングシートを使うのも一つの方法です。',
  },
  {
    q: 'どのくらいの期間、軟膏を塗り続ければいいですか？',
    a: '一般的に7〜10日間、クリニックから処方された軟膏を塗布します。頻度は1日2〜3回が目安ですが、クリニックの指示に従ってください。軟膏は薄く均一に塗布し、厚塗りしすぎないことがポイントです。市販のワセリンではなく処方品を使いましょう。',
  },
  {
    q: '仕事は休んだ方がいいですか？',
    a: '眉毛のアートメイクなら翌日から出勤可能です（やや濃い印象になります）。リップは2〜3日間腫れが目立つため、可能なら2〜3日休むのがおすすめ。アイラインは翌日からOKですがサングラスがあると安心です。在宅ワークなら問題なく翌日から仕事できます。',
  },
  {
    q: 'かさぶたがなかなか取れないのですが大丈夫ですか？',
    a: 'かさぶたの取れる時期には個人差があります。通常5〜10日程度ですが、2週間程度かかる方もいます。絶対に無理に剥がさず、自然に取れるのを待ってください。2週間以上かさぶたが残る場合や、痛み・膿がある場合はクリニックに相談しましょう。',
  },
  {
    q: 'アフターケア中にやってしまったNG行為がありますが大丈夫ですか？',
    a: '1回のNG行為で大きな問題になることは少ないですが、色素の定着に影響する可能性はあります。気になる場合は施術を受けたクリニックに連絡して相談しましょう。2回目の施術で補正できることも多いので、過度に心配する必要はありません。',
  },
  {
    q: '施術後に腫れや赤みが引かない場合はどうすればいいですか？',
    a: '施術後2〜3日間は腫れ・赤みが出るのが正常です。ただし、1週間以上経っても腫れが引かない、膿が出る、強い痛みがある場合は感染症の可能性があるため、すぐに施術を受けたクリニックに連絡してください。早期対応が重要です。',
  },
]

export default function AftercarePage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "知識" }, { name: "アフターケア" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3">2026年最新 完全ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイクのアフターケア<br />施術後の過ごし方
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            「施術後は何に気をつければいい？」「洗顔はいつからOK？」<br className="hidden md:block" />
            色素を定着させるための正しいケア方法を完全解説します。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#timeline" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">日別ケアを見る</a>
            <a href="#ng" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">NG行為を確認</a>
          </div>
        </div>
      </section>

      {/* 結論 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold">結論</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">1〜2週間のケアが仕上がりを決める</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              アートメイクのアフターケアは<strong className="text-rose-600">施術後1〜2週間が最重要期間</strong>です。
              この期間の過ごし方で<strong className="text-rose-600">色素の定着率が大きく変わります</strong>。
              「触らない」「濡らさない」「日焼けしない」の3原則を守りましょう。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">1〜2週間</div>
                <div className="text-sm text-gray-600">最重要<br />ケア期間</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">3原則</div>
                <div className="text-sm text-gray-600">触らない・濡らさない<br />日焼けしない</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">軟膏保湿</div>
                <div className="text-sm text-gray-600">処方品を<br />1日2〜3回塗布</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 日別タイムライン */}
      <section className="py-16 px-4 bg-gray-50" id="timeline">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">施術当日〜2週間のケアタイムライン</h2>
          <p className="text-center text-gray-600 mb-12">日ごとの過ごし方とNG行為を確認しましょう</p>
          <div className="space-y-6">
            {dailyTimeline.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-rose-500 text-white px-6 py-3">
                  <h3 className="font-bold text-lg">{item.day}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-green-600 text-xs font-semibold bg-green-50 px-2 py-1 rounded">やるべきケア</span>
                    <p className="text-gray-700 leading-relaxed mt-2">{item.care}</p>
                  </div>
                  <div>
                    <span className="text-red-600 text-xs font-semibold bg-red-50 px-2 py-1 rounded">NG行為</span>
                    <p className="text-gray-700 leading-relaxed mt-2">{item.ng}</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-blue-700 text-sm">{item.point}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NG行為一覧 */}
      <section className="py-16 px-4 bg-white" id="ng">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">ダウンタイム中のNG行為一覧</h2>
          <p className="text-center text-gray-600 mb-12">やってはいけないことと控える期間をまとめました</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="px-4 py-4 text-left font-semibold">NG行為</th>
                  <th className="px-4 py-4 text-left font-semibold min-w-[120px]">控える期間</th>
                  <th className="px-4 py-4 text-left font-semibold">理由</th>
                </tr>
              </thead>
              <tbody>
                {ngActions.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-4 font-semibold text-gray-800 text-sm">{item.action}</td>
                    <td className="px-4 py-4 text-rose-600 text-sm font-semibold whitespace-nowrap">{item.period}</td>
                    <td className="px-4 py-4 text-gray-700 text-sm">{item.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 部位別ケア */}
      <section className="py-16 px-4 bg-gradient-to-b from-rose-50 to-pink-50" id="parts">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">部位別ケアのポイント</h2>
          <p className="text-center text-gray-600 mb-12">部位によってケアの注意点が異なります</p>
          <div className="space-y-6">
            {partCare.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm">{item.part}</span>
                </h3>
                <ul className="space-y-3">
                  {item.points.map((point, pi) => (
                    <li key={pi} className="flex items-start gap-3">
                      <span className="bg-rose-100 text-rose-600 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">{pi + 1}</span>
                      <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-rose-50 border border-rose-200 rounded-xl p-6 text-center">
            <p className="text-gray-700">
              <strong className="text-rose-600">重要：</strong>
              アフターケアの指示はクリニックごとに異なる場合があります。必ず施術を受けたクリニックの指示を最優先にしてください。
              異常な腫れ、発熱、膿などの症状が出た場合は、すぐにクリニックに連絡しましょう。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">よくある質問（FAQ）</h2>
          <p className="text-center text-gray-600 mb-12">アフターケアに関する疑問にお答えします</p>
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
            <Link href="/knowledge/pain" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">痛み・ダウンタイム完全ガイド</p>
            </Link>
            <Link href="/knowledge/color-change" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクの変色と対策</p>
            </Link>
            <Link href="/knowledge/risk" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクのリスク・副作用</p>
            </Link>
            <Link href="/knowledge/retouch" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">リタッチの時期と費用</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">アフターケアのサポートが<br />充実したクリニックを選ぼう</h2>
          <p className="text-xl mb-4 opacity-90">
            施術後のフォロー体制も重要なクリニック選びのポイント。<br className="hidden md:block" />
            丁寧なアフターケア指導があるクリニックを比較しましょう。
          </p>
          <p className="mb-8 opacity-80">施術後のサポート体制で選ぶクリニックランキング</p>
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
