import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイクのかさぶた｜剥がれる経過と正しいケア方法 | アートメイク比較ナビ',
  description: 'アートメイクのかさぶたが形成・剥がれる経過を日ごとに解説。当日〜7日目の変化、絶対やってはいけないNG行為、部位別（眉・リップ・アイライン）の違い、色が薄くなる理由と回復時期を紹介。',
  keywords: 'アートメイク かさぶた,アートメイク かさぶた 剥がれる,アートメイク かさぶた 経過,アートメイク 色 薄くなる',
  openGraph: {
    title: 'アートメイクのかさぶた｜剥がれる経過と正しいケア方法',
    description: 'かさぶたの形成から剥がれるまでの経過、正しいケア方法、部位別の違いを解説。',
    type: 'article',
  },
}

const dailyProgress = [
  {
    day: '施術当日',
    appearance: '施術部位に赤み・腫れ。色はかなり濃く見える。',
    scab: 'かさぶたはまだ形成されていない。施術による微細な傷がある状態。',
    care: '処方された軟膏を薄く塗布して保湿。施術部位に水がかからないよう注意。',
  },
  {
    day: '1日目',
    appearance: '色がさらに濃く、やや腫れが残る。リップは特に腫れが目立つ。',
    scab: '表面が乾燥し始め、薄い膜のようなものが形成され始める。',
    care: '軟膏を1日2〜3回塗布。施術部位を触らない。洗顔は施術部位を避ける。',
  },
  {
    day: '2〜3日目',
    appearance: '色が濃いまま。眉は「海苔を貼ったような」濃さに見えることも。',
    scab: 'かさぶたが本格的に形成される。表面がカサカサ・パリパリした質感になる。',
    care: '軟膏での保湿を継続。かゆみが出始めるが絶対に触らない・こすらない。',
  },
  {
    day: '4〜5日目',
    appearance: 'かさぶたが浮き始め、端から少しずつ剥がれ始める。',
    scab: 'かさぶたが薄く割れ始め、端の部分から自然に剥離。色素ごと薄い膜が取れるように見える。',
    care: '自然に剥がれるのを待つ。剥がれかけたかさぶたを引っ張らない。保湿を継続。',
  },
  {
    day: '5〜7日目',
    appearance: 'かさぶたの大部分が自然に剥がれる。色が施術直後より大幅に薄く見える（色飛び）。',
    scab: 'ほとんどのかさぶたが自然に取れる。一部残る場合もあるが無理に剥がさない。',
    care: '残りのかさぶたも自然に取れるのを待つ。徐々に優しい洗顔を再開してOK。',
  },
  {
    day: '1〜2週間後',
    appearance: '色飛びした色が徐々に戻り始める。肌のターンオーバーにより色が安定してくる。',
    scab: 'かさぶたは完全に取れている状態。皮膚の再生が進む。',
    care: '日焼け止めの使用を開始。施術部位のメイクも再開OK。保湿は引き続き重要。',
  },
  {
    day: '3〜4週間後',
    appearance: '色味が安定し、最終的な仕上がりに近づく。施術直後の50〜70%程度の色味が定着。',
    scab: '皮膚は完全に回復。2回目の施術（リタッチ）が可能な時期。',
    care: '通常のスキンケアに戻してOK。紫外線対策は色持ちのために継続が望ましい。',
  },
]

const ngActions = [
  {
    action: 'かさぶたを無理に剥がす・引っ張る',
    risk: '色素がかさぶたと一緒に剥がれ、仕上がりにムラができます。部分的に色が抜けてまだら模様になるリスクが高く、修正には追加施術が必要になります。',
  },
  {
    action: '施術部位を掻く・こする',
    risk: 'かゆみが出ても掻くのは厳禁。傷口から雑菌が入り感染症のリスクが高まるほか、かさぶたの不均一な剥離につながります。',
  },
  {
    action: '施術部位を濡らす・長時間の入浴',
    risk: '水分がかさぶたをふやかし、色素の流出を促進します。シャワーは身体のみで短時間に。湯船・サウナ・プールは1〜2週間控えましょう。',
  },
  {
    action: '施術部位へのメイク・スキンケア',
    risk: '化粧品の成分がかさぶたの下の傷口に入り、炎症や変色の原因になります。かさぶたが完全に取れるまで施術部位へのメイクは我慢しましょう。',
  },
  {
    action: '激しい運動・飲酒',
    risk: '発汗や血行促進により、かさぶた下の色素定着が妨げられます。腫れが悪化する可能性もあります。',
  },
]

const partDifferences = [
  {
    part: '眉毛',
    scabType: '薄いフレーク状のかさぶた。比較的目立ちにくい。',
    duration: '3〜7日程度で自然に剥がれる',
    colorChange: '施術直後は非常に濃く「海苔を貼ったよう」に見えるが、かさぶたが取れると一気に薄くなる。最終的に施術直後の50〜60%程度の色味が定着。',
    tips: '前髪や帽子で隠せるため、ダウンタイム中の外出はしやすい。眉メイクは2週間後から再開可能。',
  },
  {
    part: 'リップ',
    scabType: '唇の皮が剥けるような形でかさぶたが形成される。薄い膜状。',
    duration: '5〜10日程度で自然に剥がれる（眉より長い傾向）',
    colorChange: '施術直後は鮮やかで濃い色。かさぶたが取れると大幅に薄く見えるが、2〜3週間で色が戻る。最終的に施術直後の40〜50%程度の色味が定着。',
    tips: '食事時にストローを使用。辛い・熱い食べ物は控える。リップクリームで常に保湿を維持することが色の定着に重要。',
  },
  {
    part: 'アイライン',
    scabType: 'ごく薄いかさぶたが形成される。目を閉じた時に薄い膜が見える程度。',
    duration: '3〜5日程度で自然に剥がれる（比較的短い）',
    colorChange: '施術直後はくっきり濃い黒。かさぶたが取れるとやや薄くなるが、他の部位ほど色飛びは目立たない。最終的に施術直後の60〜70%程度の色味が定着。',
    tips: '目をこすらないよう注意。コンタクトレンズは翌日から（ハードは2〜3日後）。アイメイクは1週間控える。',
  },
]

const colorRecovery = [
  {
    phase: 'かさぶた形成期（1〜3日目）',
    color: '施術直後より濃い・暗い色に見える',
    reason: 'かさぶたが色素の上に覆いかぶさり、酸化した血液の色が加わるため、実際の色素より暗く見える。',
  },
  {
    phase: 'かさぶた剥離期（4〜7日目）',
    color: '一気に薄くなる（色飛び）',
    reason: 'かさぶたと一緒に表皮に残っていた色素の一部が脱落する。これは正常な経過であり、真皮に定着した色素は残っている。',
  },
  {
    phase: '色戻り期（1〜3週間後）',
    color: '徐々に色が戻り始める',
    reason: '真皮に定着した色素が、新しい表皮を通して見えるようになる。肌のターンオーバーとともに色味が安定する。',
  },
  {
    phase: '安定期（3〜4週間後）',
    color: '最終的な仕上がりの色味',
    reason: '皮膚が完全に再生し、定着した色素がそのまま見える状態になる。施術直後の50〜70%程度の色味が定着するのが一般的。',
  },
]

const faqs = [
  {
    q: 'かさぶたは必ずできますか？',
    a: '施術方法や個人の肌質によって異なりますが、ほとんどの方にかさぶたは形成されます。ただし、かさぶたの厚さや目立ち方には個人差があり、非常に薄いかさぶたで気づかない方もいます。パウダーブロー（マシン施術）の方がかさぶたが均一で薄い傾向があります。',
  },
  {
    q: 'かさぶたを剥がしてしまったらどうなりますか？',
    a: '色素がかさぶたと一緒に剥がれ、その部分だけ色が薄くなったりムラになったりする可能性があります。1回剥がしてしまった程度であれば大きな問題にはならないケースが多いですが、繰り返すと明らかなムラになります。気になる場合は2回目の施術で補正できます。',
  },
  {
    q: 'かさぶたが取れた後、色がほとんどなくなったように見えますが大丈夫ですか？',
    a: 'はい、これは「色飛び」と呼ばれる正常な経過です。かさぶたと一緒に表皮の色素が脱落しますが、真皮に定着した色素は残っています。1〜3週間かけて徐々に色が戻ってきます。最終的な仕上がりは3〜4週間後に判断してください。',
  },
  {
    q: 'かさぶたがなかなか取れません。無理に剥がしていいですか？',
    a: '絶対に無理に剥がさないでください。かさぶたの取れる時期には個人差があり、5日〜2週間程度の幅があります。保湿を続けながら自然に剥がれるのを待ちましょう。2週間以上取れない場合や、痛み・膿がある場合はクリニックに相談してください。',
  },
  {
    q: 'かさぶたの時期、仕事や外出はできますか？',
    a: '眉毛は前髪や帽子で隠せるため、翌日から外出可能です（やや濃く見えます）。リップは2〜3日腫れが目立つため、可能なら休みを取るのがおすすめです。アイラインは翌日から外出可能ですが、サングラスがあると安心です。マスクも活用しましょう。',
  },
  {
    q: 'かさぶたの時期にかゆみが出た場合はどうすればいいですか？',
    a: 'かさぶた形成期にかゆみが出るのは正常な治癒反応です。絶対に掻かないでください。軟膏やワセリンを塗布して保湿すると、かゆみが軽減されることがあります。我慢できない場合はクリニックに相談し、かゆみ止めの処方を受けましょう。冷やしたガーゼを優しく当てるのも有効です。',
  },
]

export default function ScabPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "知識", href: "/knowledge" }, { name: "かさぶた" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3">2026年最新 完全ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイクのかさぶた<br />剥がれる経過と正しいケア方法
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            「かさぶたはいつ取れる？」「色が薄くなったけど大丈夫？」<br className="hidden md:block" />
            かさぶたの形成から色の安定までの経過を日ごとに解説します。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#progress" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">日別経過を見る</a>
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">かさぶたは自然に剥がれるのを待つのが鉄則</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              アートメイク後のかさぶたは<strong className="text-rose-600">3〜7日で自然に剥がれます</strong>。
              かさぶたが取れた直後は<strong className="text-rose-600">色が薄く見える「色飛び」</strong>が起きますが、
              1〜3週間で色が戻る正常な経過です。絶対にかさぶたを自分で剥がさないでください。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">3〜7日</div>
                <div className="text-sm text-gray-600">かさぶたが<br />自然に剥がれる期間</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">色飛び</div>
                <div className="text-sm text-gray-600">剥がれた直後は<br />色が薄く見えて正常</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">3〜4週間</div>
                <div className="text-sm text-gray-600">最終的な色味が<br />安定する時期</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 日別経過 */}
      <section className="py-16 px-4 bg-gray-50" id="progress">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">かさぶたの日別経過タイムライン</h2>
          <p className="text-center text-gray-600 mb-12">施術当日〜4週間後までの変化を確認しましょう</p>
          <div className="space-y-6">
            {dailyProgress.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-rose-500 text-white px-6 py-3">
                  <h3 className="font-bold text-lg">{item.day}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-purple-600 text-xs font-semibold bg-purple-50 px-2 py-1 rounded">見た目</span>
                    <p className="text-gray-700 leading-relaxed mt-2">{item.appearance}</p>
                  </div>
                  <div>
                    <span className="text-orange-600 text-xs font-semibold bg-orange-50 px-2 py-1 rounded">かさぶたの状態</span>
                    <p className="text-gray-700 leading-relaxed mt-2">{item.scab}</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <span className="text-blue-600 text-xs font-semibold">ケア方法</span>
                    <p className="text-blue-700 text-sm mt-1">{item.care}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NG行為 */}
      <section className="py-16 px-4 bg-white" id="ng">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">かさぶた期間中に絶対やってはいけないこと</h2>
          <p className="text-center text-gray-600 mb-12">色ムラ・感染症の原因になるNG行為を確認</p>
          <div className="space-y-4">
            {ngActions.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
                <h3 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                  <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">NG</span>
                  {item.action}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed ml-10">{item.risk}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 部位別の違い */}
      <section className="py-16 px-4 bg-gradient-to-b from-rose-50 to-pink-50" id="parts">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">部位別のかさぶたの違い</h2>
          <p className="text-center text-gray-600 mb-12">眉・リップ・アイラインでかさぶたの特徴が異なります</p>
          <div className="space-y-6">
            {partDifferences.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm">{item.part}</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">かさぶたの特徴</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.scabType}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">剥がれる期間</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.duration}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 mb-1">色の変化</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.colorChange}</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-blue-700 text-sm">{item.tips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 色の変化 */}
      <section className="py-16 px-4 bg-white" id="color">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">色が薄くなる理由と回復のメカニズム</h2>
          <p className="text-center text-gray-600 mb-12">「色飛び」は正常な経過です。仕組みを理解しましょう</p>
          <div className="space-y-4">
            {colorRecovery.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-rose-100 text-rose-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                    <h3 className="font-bold text-gray-900">{item.phase}</h3>
                  </div>
                  <div className="ml-11">
                    <p className="text-rose-600 font-semibold text-sm mb-2">{item.color}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-rose-50 border border-rose-200 rounded-xl p-6 text-center">
            <p className="text-gray-700">
              <strong className="text-rose-600">重要：</strong>
              最終的な色味の判断は施術後3〜4週間経ってから行いましょう。
              色飛びの直後に「失敗した」と判断するのは早計です。気になる場合はクリニックに相談してください。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">よくある質問（FAQ）</h2>
          <p className="text-center text-gray-600 mb-12">かさぶたに関する疑問にお答えします</p>
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
            <Link href="/knowledge/aftercare" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アフターケア完全ガイド</p>
            </Link>
            <Link href="/knowledge/color-change" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクの変色と対策</p>
            </Link>
            <Link href="/knowledge/pain" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">痛み・ダウンタイム完全ガイド</p>
            </Link>
            <Link href="/knowledge/progress" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">施術後の経過</p>
            </Link>
            <Link href="/knowledge/retouch" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">リタッチの時期と費用</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">丁寧なアフターケア指導がある<br />クリニックを選ぼう</h2>
          <p className="text-xl mb-4 opacity-90">
            施術後のかさぶたケアのサポートが充実したクリニックを比較。<br className="hidden md:block" />
            安心して任せられるクリニックを見つけましょう。
          </p>
          <p className="mb-8 opacity-80">アフターケア体制で選ぶクリニックランキング</p>
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
