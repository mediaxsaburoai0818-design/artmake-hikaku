import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アイラインアートメイクのメリット・デメリット｜失敗しない選び方 | アートメイク比較ナビ',
  description: 'アイラインアートメイクの種類（ナチュラル・グラマラス・テール）、メリット5つ・デメリット5つ、痛み・ダウンタイム、料金相場、失敗事例と回避法を徹底解説。',
  keywords: 'アイラインアートメイク メリット,アイラインアートメイク デメリット,アイライン アートメイク 失敗,アイライン アートメイク 料金',
  openGraph: {
    title: 'アイラインアートメイクのメリット・デメリット｜失敗しない選び方',
    description: 'アイラインアートメイクの種類・メリット・デメリット・料金・失敗回避法を解説。',
    type: 'article',
  },
}

const eyelinerTypes = [
  {
    type: 'ナチュラルライン（インライン）',
    description: 'まつ毛の隙間を埋めるように色素を入れる、最も自然な仕上がりのアイラインアートメイク。',
    suitable: 'ナチュラルメイクが好きな方、アイラインを引いていると気づかれたくない方、初めてアイラインアートメイクを受ける方',
    appearance: 'まつ毛が濃くなったような自然な印象。目元がくっきりするが、アイラインを引いているようには見えない。',
    priceRange: '4万〜7万円（2回セット）',
  },
  {
    type: 'グラマラスライン（アウトライン）',
    description: 'まつ毛の上にも色素を入れ、はっきりとしたアイラインを表現。目元の印象を強調する。',
    suitable: 'しっかりメイクが好きな方、目を大きく見せたい方、普段からアイラインをしっかり引く方',
    appearance: 'くっきりとしたアイラインが常にある状態。すっぴんでも目力のある印象。',
    priceRange: '5万〜8万円（2回セット）',
  },
  {
    type: 'テールライン',
    description: '目尻を少し跳ね上げたり、長めに延長するデザイン。キャットライン風の仕上がりも可能。',
    suitable: 'トレンド感のある目元にしたい方、目尻の形を補正したい方、小顔効果を狙いたい方',
    appearance: '目尻にポイントがある華やかな印象。跳ね上げの角度や長さは個人に合わせて調整可能。',
    priceRange: '6万〜9万円（2回セット）',
  },
]

const merits = [
  {
    title: '毎日のアイラインメイクが不要になる',
    detail: '朝のメイク時間を短縮できます。特にアイラインを左右対称に引くのが苦手な方にとって大きなメリットです。忙しい朝でも目元が整った状態で出かけられます。',
  },
  {
    title: 'メイク崩れの心配がなくなる',
    detail: '汗・涙・皮脂・雨でアイラインが滲む心配がありません。スポーツ、温泉、プール、海などでも常にきれいなアイラインを維持できます。パンダ目にならない安心感があります。',
  },
  {
    title: '目元の印象がアップする',
    detail: 'まつ毛の隙間が埋まることで、すっぴんでも目元がくっきりした印象になります。まつ毛が増えたように見える効果もあり、ナチュラルに目力がアップします。',
  },
  {
    title: 'コンタクトレンズ使用者のストレスが軽減する',
    detail: 'アイライナーの粉やリキッドがコンタクトレンズに付着するトラブルがなくなります。目にゴミが入るリスクも減り、ドライアイの方にもメリットがあります。',
  },
  {
    title: '加齢によるまぶたの変化に対応できる',
    detail: '年齢とともにまぶたが下がってアイラインが引きにくくなる方にもおすすめ。まぶたの状態に関係なく、きれいなアイラインを維持できます。',
  },
]

const demerits = [
  {
    title: '施術時の痛みがやや強い',
    detail: '目元は皮膚が薄く敏感なため、眉毛のアートメイクより痛みを感じやすい傾向があります。麻酔クリームを使用しますが、チクチクした痛みやツーンとする刺激を感じる方が多いです。施術者の技術力によっても痛みの感じ方は異なります。',
  },
  {
    title: 'ダウンタイム中に腫れが出やすい',
    detail: '施術後1〜3日間は目元が腫れ、泣いた後のようなむくんだ状態になります。特に施術翌日の朝が最も腫れやすく、人前に出るのが気になる方は2〜3日の休みを確保するのがおすすめです。',
  },
  {
    title: 'デザインの修正が難しい',
    detail: 'アイラインのアートメイクは1〜3年持続するため、太さや形が気に入らなかった場合の修正が困難です。特にテールラインはトレンドが変わると古く見える可能性があります。カウンセリングでの十分なデザイン確認が不可欠です。',
  },
  {
    title: 'まれに角膜損傷のリスクがある',
    detail: '施術中に針が目に近い部位を扱うため、施術者の技術が不十分な場合、角膜を傷つけるリスクがあります。必ず医療機関で、アイラインの施術経験が豊富な施術者を選ぶことが重要です。',
  },
  {
    title: 'ドライアイや花粉症が悪化する可能性がある',
    detail: '施術後のダウンタイム中は目をこすれないため、ドライアイや花粉症の症状がつらくなることがあります。症状が重い時期の施術は避け、落ち着いている時期に受けるのがおすすめです。',
  },
]

const painInfo = {
  level: '眉毛のアートメイクよりやや痛い（10段階中4〜6程度）',
  anesthesia: '施術前に麻酔クリームを塗布し、15〜30分浸透させてから施術開始。施術中に痛みが出た場合は追加麻酔も可能。',
  duration: '施術時間は約1〜2時間（カウンセリング・デザイン含む）',
  downtime: '腫れ：1〜3日間（翌日がピーク）、かさぶた：3〜5日で自然に剥がれる、完全回復：1〜2週間',
}

const failureCases = [
  {
    case: '左右非対称になった',
    cause: '施術者のデザイン力不足、施術中のまぶたの引っ張り方の左右差',
    prevention: '実績豊富な施術者を選ぶ。カウンセリングで左右差を事前に確認。鏡を見ながらのデザイン確認を入念に行う。',
  },
  {
    case: 'ラインが太くなりすぎた',
    cause: 'カウンセリング不足、施術者との完成イメージの相違',
    prevention: '「自然な仕上がり希望」であることを明確に伝える。最初はナチュラルライン（インライン）から始めるのが安全。物足りなければ2回目で太くできる。',
  },
  {
    case: 'にじみ・滲みが出た',
    cause: '使用色素の品質問題、施術者の技術（針の深さ）の問題、オイリー肌による色素の広がり',
    prevention: '高品質な色素を使用するクリニックを選ぶ。カウンセリングで肌質を伝え、適切な施術方法を相談する。',
  },
  {
    case: '色が変色した（青みがかった黒になった）',
    cause: '色素の品質問題、針を入れる深さが不適切（深すぎると青く見える）',
    prevention: 'FDAやEU認証の色素を使用しているか確認。変色リスクについてカウンセリング時に質問する。',
  },
]

const faqs = [
  {
    q: 'アイラインアートメイクはどのくらい持ちますか？',
    a: '個人差がありますが、一般的に1〜3年程度持続します。代謝が良い方や脂性肌の方は退色が早い傾向です。きれいな状態を保つには、1〜2年ごとのリタッチがおすすめです。',
  },
  {
    q: '上まぶただけでなく下まぶた（インサイドライン）もできますか？',
    a: 'はい、下まぶたへの施術も可能なクリニックがあります。ただし、上まぶたより施術難易度が高く、涙で色素が流れやすいため定着率がやや低い傾向です。対応しているクリニックかどうか事前に確認してください。',
  },
  {
    q: 'まつ毛エクステとの併用は可能ですか？',
    a: 'アイラインアートメイクの施術前後はまつ毛エクステを外す必要があります。施術の2〜3日前にエクステを除去し、施術後は2〜4週間経ってかさぶたが完全に取れてから再装着が可能です。',
  },
  {
    q: '施術後のコンタクトレンズはいつから使えますか？',
    a: 'ソフトコンタクトレンズは施術翌日から使用可能です。ハードコンタクトレンズは装着時の刺激が強いため、2〜3日後からの使用が推奨されます。施術当日はメガネをご持参ください。',
  },
  {
    q: 'アイラインアートメイクの施術中に目を傷つけるリスクはありますか？',
    a: '医療機関で経験豊富な施術者が行う場合、目を傷つけるリスクは非常に低いです。施術中はアイシールドで目を保護し、まぶたの皮膚のみに施術を行います。エステサロンでの施術は医師不在のためリスクが高まります。必ずクリニックで受けてください。',
  },
  {
    q: 'アイラインアートメイクが向かない人はいますか？',
    a: '重度のドライアイの方、花粉症やアレルギー性結膜炎が重い方、ケロイド体質の方、緑内障の治療中の方は施術前に医師と相談が必要です。また、直近で目元の美容施術（二重整形など）を受けた方は、術後一定期間を空ける必要があります。',
  },
]

export default function EyelinerPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "知識", href: "/knowledge" }, { name: "アイラインアートメイク" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3">2026年最新 完全ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アイラインアートメイク<br />メリット・デメリットと失敗しない選び方
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            「アイラインのアートメイクって実際どう？」「痛みやリスクは？」<br className="hidden md:block" />
            種類・メリット・デメリット・料金・失敗事例まで徹底解説します。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#types" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">種類を見る</a>
            <a href="#merit" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">メリット・デメリット</a>
          </div>
        </div>
      </section>

      {/* 結論 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold">結論</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">初めてならナチュラルラインがおすすめ</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              アイラインアートメイクは<strong className="text-rose-600">毎日のメイク時短とメイク崩れの解消</strong>に大きな効果があります。
              一方で<strong className="text-rose-600">デザイン修正が難しい</strong>ため、
              初めての方は自然な仕上がりの<strong className="text-rose-600">ナチュラルライン（インライン）</strong>から始めるのが安全です。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">1〜3年</div>
                <div className="text-sm text-gray-600">持続期間<br />（個人差あり）</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">4〜9万円</div>
                <div className="text-sm text-gray-600">料金相場<br />（2回セット）</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">1〜2週間</div>
                <div className="text-sm text-gray-600">ダウンタイム<br />（完全回復まで）</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* アイラインの種類 */}
      <section className="py-16 px-4 bg-gray-50" id="types">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">アイラインアートメイクの種類</h2>
          <p className="text-center text-gray-600 mb-12">仕上がりの雰囲気が異なる3つのタイプ</p>
          <div className="space-y-6">
            {eyelinerTypes.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-rose-500 text-white px-6 py-3">
                  <h3 className="font-bold text-lg">{item.type}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-green-600 text-xs font-semibold bg-green-50 px-2 py-1 rounded">向いている方</span>
                      <p className="text-gray-700 text-sm leading-relaxed mt-2">{item.suitable}</p>
                    </div>
                    <div>
                      <span className="text-purple-600 text-xs font-semibold bg-purple-50 px-2 py-1 rounded">仕上がり</span>
                      <p className="text-gray-700 text-sm leading-relaxed mt-2">{item.appearance}</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-blue-700 text-sm">料金相場：{item.priceRange}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* メリット */}
      <section className="py-16 px-4 bg-white" id="merit">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">アイラインアートメイクのメリット5つ</h2>
          <p className="text-center text-gray-600 mb-12">毎日のメイクが変わる大きなメリット</p>
          <div className="space-y-4">
            {merits.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed ml-10">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* デメリット */}
      <section className="py-16 px-4 bg-gray-50" id="demerit">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">アイラインアートメイクのデメリット5つ</h2>
          <p className="text-center text-gray-600 mb-12">施術前に知っておくべき注意点</p>
          <div className="space-y-4">
            {demerits.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed ml-10">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 痛み・ダウンタイム */}
      <section className="py-16 px-4 bg-white" id="pain">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">痛み・ダウンタイム</h2>
          <p className="text-center text-gray-600 mb-12">施術の痛みと回復期間について</p>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 bg-rose-50 font-semibold text-gray-800 whitespace-nowrap w-1/3">痛みの程度</td>
                    <td className="px-6 py-4 text-gray-700 text-sm">{painInfo.level}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 bg-rose-50 font-semibold text-gray-800 whitespace-nowrap">麻酔</td>
                    <td className="px-6 py-4 text-gray-700 text-sm">{painInfo.anesthesia}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 bg-rose-50 font-semibold text-gray-800 whitespace-nowrap">施術時間</td>
                    <td className="px-6 py-4 text-gray-700 text-sm">{painInfo.duration}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 bg-rose-50 font-semibold text-gray-800 whitespace-nowrap">ダウンタイム</td>
                    <td className="px-6 py-4 text-gray-700 text-sm">{painInfo.downtime}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 失敗事例と回避法 */}
      <section className="py-16 px-4 bg-gradient-to-b from-rose-50 to-pink-50" id="failure">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">失敗事例と回避法</h2>
          <p className="text-center text-gray-600 mb-12">よくある失敗パターンと事前に防ぐ方法</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="px-4 py-4 text-left font-semibold">失敗事例</th>
                  <th className="px-4 py-4 text-left font-semibold">原因</th>
                  <th className="px-4 py-4 text-left font-semibold">回避法</th>
                </tr>
              </thead>
              <tbody>
                {failureCases.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-4 font-semibold text-gray-800 text-sm">{item.case}</td>
                    <td className="px-4 py-4 text-gray-700 text-sm">{item.cause}</td>
                    <td className="px-4 py-4 text-gray-700 text-sm">{item.prevention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-rose-50 border border-rose-200 rounded-xl p-6 text-center">
            <p className="text-gray-700">
              <strong className="text-rose-600">重要：</strong>
              アイラインのアートメイクは施術者の技術力が仕上がりに大きく影響します。
              症例写真を確認し、アイラインの施術実績が豊富な施術者を選びましょう。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">よくある質問（FAQ）</h2>
          <p className="text-center text-gray-600 mb-12">アイラインアートメイクに関する疑問にお答えします</p>
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
            <Link href="/knowledge/aftercare" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アフターケア完全ガイド</p>
            </Link>
            <Link href="/knowledge/failure" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクの失敗事例と対策</p>
            </Link>
            <Link href="/knowledge/price-guide" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">料金相場ガイド</p>
            </Link>
            <Link href="/knowledge/scab" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">かさぶたの経過とケア方法</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">アイライン施術が得意な<br />クリニックを見つけよう</h2>
          <p className="text-xl mb-4 opacity-90">
            アイラインアートメイクの症例実績が豊富なクリニックを比較。<br className="hidden md:block" />
            技術力の高い施術者を選んで理想の目元を手に入れましょう。
          </p>
          <p className="mb-8 opacity-80">アイライン施術の実績で選ぶクリニックランキング</p>
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
