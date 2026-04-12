import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイクは何年持つ？部位別の持続期間と長持ちさせるコツ【2026年最新】',
  description: 'アートメイクは何年持つ？眉毛・リップ・アイライン・ヘアラインの部位別持続期間を徹底解説。持ちが悪くなる7つの原因と長持ちさせる5つのコツ、リタッチのベストタイミングまで紹介。',
  keywords: 'アートメイク 何年持つ,アートメイク 持続期間,アートメイク 何年,アートメイク リタッチ',
  openGraph: {
    title: 'アートメイクは何年持つ？部位別の持続期間と長持ちさせるコツ',
    description: '眉毛・リップ・アイライン・ヘアラインの持続期間、持ちが悪くなる原因と長持ちのコツを徹底解説。',
    type: 'article',
  },
}

const durationByPart = [
  {
    part: '眉毛',
    duration: '1〜3年',
    detail: '最も人気の部位。毛並みストロークは1〜2年、パウダー眉は2〜3年持続する傾向があります。施術回数を重ねることで定着率が上がります。',
    factors: '肌質（オイリー肌は薄くなりやすい）、施術技法、色素の種類',
  },
  {
    part: 'リップ',
    duration: '1〜3年',
    detail: '唇は粘膜に近いため代謝が早く、眉より薄くなりやすい傾向があります。食事や飲み物の摩擦も影響します。鮮やかな色味は退色が目立ちやすいです。',
    factors: '食事の頻度、リップケアの習慣、唇の乾燥具合',
  },
  {
    part: 'アイライン',
    duration: '2〜3年',
    detail: 'まぶたの皮膚は薄いですが、紫外線や摩擦の影響を受けにくいため比較的長持ちします。インラインは特に持続しやすいです。',
    factors: '目元の皮脂量、クレンジングの方法、まぶたの摩擦',
  },
  {
    part: 'ヘアライン',
    duration: '2〜3年',
    detail: '生え際や頭皮に施術するため、帽子や紫外線の影響を受けやすい部位です。頭皮の皮脂分泌が多い方はやや薄くなりやすいです。',
    factors: '頭皮の皮脂量、帽子やヘルメットの使用頻度、洗髪方法',
  },
]

const fadeReasons = [
  {
    num: 1,
    title: '肌質（オイリー肌）',
    description: '皮脂分泌が多いオイリー肌の方は、色素が皮脂と共に排出されやすく、乾燥肌の方より持続期間が短くなる傾向があります。特に眉やヘアラインで影響が大きいです。',
  },
  {
    num: 2,
    title: '紫外線（UV）の影響',
    description: '紫外線は色素を分解する作用があるため、日常的に日焼けをする方はアートメイクの退色が早くなります。特に眉やヘアラインは紫外線を直接受ける部位です。',
  },
  {
    num: 3,
    title: 'ターンオーバー（肌の新陳代謝）',
    description: 'アートメイクは表皮に色素を入れるため、肌のターンオーバーに伴い徐々に排出されます。代謝が活発な20〜30代の方は退色が早い傾向があります。',
  },
  {
    num: 4,
    title: 'スキンケア（ピーリング・レチノール）',
    description: 'ピーリングやレチノール配合の化粧品はターンオーバーを促進するため、アートメイクの色素排出を早めます。施術部位への使用は控えめにしましょう。',
  },
  {
    num: 5,
    title: '体質・免疫反応',
    description: '体の免疫機能が色素を異物として認識し排出しようとするため、免疫が強い方ほど退色が早い傾向があります。個人差が大きい要因です。',
  },
  {
    num: 6,
    title: '施術回数の不足',
    description: 'アートメイクは通常2〜3回の施術でしっかり定着します。1回のみの施術では色素の定着率が50〜70%程度にとどまり、薄くなりやすいです。',
  },
  {
    num: 7,
    title: '色素の品質',
    description: '安価な色素や品質が低い色素は定着率が悪く、退色も早い傾向があります。FDA認可の高品質色素を使用しているクリニックを選ぶことが重要です。',
  },
]

const lastingTips = [
  {
    num: 1,
    title: '施術後1週間は患部を保湿する',
    description: 'ワセリンや処方された軟膏で患部を保湿し、かさぶたを自然に剥がれるまで待ちましょう。乾燥は色素の定着を妨げます。触ったり剥がしたりすると色ムラの原因になります。',
  },
  {
    num: 2,
    title: '紫外線対策を徹底する',
    description: '外出時は日焼け止め（SPF30以上）を施術部位に塗る、帽子やサングラスで物理的に遮光するなど、紫外線対策を日常的に行いましょう。紫外線は退色の最大の原因です。',
  },
  {
    num: 3,
    title: 'ピーリング・レチノールを避ける',
    description: '施術部位にピーリング剤やレチノール配合の化粧品を使用するのは控えましょう。ターンオーバーを促進し、色素の排出を早めてしまいます。',
  },
  {
    num: 4,
    title: '施術は2〜3回セットで受ける',
    description: '1回の施術では定着率が不十分です。2回目の施術で色素をしっかり重ね、3回目で微調整することで、持続期間を最大化できます。多くのクリニックでは2回セットが基本プランです。',
  },
  {
    num: 5,
    title: '定期的なリタッチを行う',
    description: '完全に消えてからリタッチするより、薄くなり始めた段階（1〜1.5年後）で早めにリタッチする方が、少ない回数で美しい状態を維持できます。',
  },
]

const retouchInfo = [
  {
    part: '眉毛',
    timing: '1〜1.5年後',
    cost: '20,000〜50,000円',
    note: '完全に消える前のリタッチが効果的。色味の変化も修正可能。',
  },
  {
    part: 'リップ',
    timing: '1〜1.5年後',
    cost: '25,000〜60,000円',
    note: '退色で色味が変わりやすいため、早めのリタッチ推奨。',
  },
  {
    part: 'アイライン',
    timing: '1.5〜2年後',
    cost: '20,000〜45,000円',
    note: '比較的持ちが良い部位。滲みが出始めたらリタッチ時期。',
  },
  {
    part: 'ヘアライン',
    timing: '1.5〜2年後',
    cost: '30,000〜60,000円',
    note: '生え際の自然さを維持するため、定期メンテナンス推奨。',
  },
]

const faqs = [
  {
    q: 'アートメイクは本当に1〜3年で消えますか？',
    a: 'はい、アートメイクは表皮（0.02〜0.03mm）に色素を入れるため、肌のターンオーバーにより1〜3年で徐々に薄くなります。ただし「完全に消える」のではなく、薄く残る場合もあります。完全消失までには個人差があり、3〜5年かかることもあります。',
  },
  {
    q: '1回の施術でどのくらい持ちますか？',
    a: '1回のみの施術では色素の定着率が50〜70%程度で、半年〜1年で薄くなることが多いです。アートメイクは基本的に2回セットで受けることが推奨されており、2回施術することで定着率が大幅に向上し、1〜3年の持続が期待できます。',
  },
  {
    q: 'オイリー肌ですが持ちを良くする方法はありますか？',
    a: 'オイリー肌の方は、パウダー技法（ドット状に色素を入れる）を選ぶと比較的持ちが良くなります。また、施術後の紫外線対策や保湿ケアを徹底し、3回目の施術を追加することで定着率を高められます。担当アーティストに肌質を伝えて相談しましょう。',
  },
  {
    q: 'リタッチは必ず必要ですか？',
    a: 'リタッチは必須ではありませんが、美しい状態を維持したい場合はおすすめです。アートメイクは時間とともに薄くなるため、「薄くなってきたな」と感じた段階でリタッチすることで、常にベストな状態を維持できます。リタッチは初回より費用も時間も少なく済みます。',
  },
  {
    q: '年齢によって持続期間は変わりますか？',
    a: 'はい、年齢により持続期間は変わります。若い方（20〜30代）は肌のターンオーバーが活発なため退色が早い傾向があります。40代以降はターンオーバーが緩やかになるため、相対的に持続期間が長くなることが多いです。',
  },
  {
    q: 'アートメイクが完全に消えた後、再施術は可能ですか？',
    a: 'はい、完全に消えた後でも再施術は可能です。ただし、前回の施術から時間が経つと初回と同じ扱いになるため、再度2回セットの施術が必要になることが多いです。薄くなった段階でリタッチする方がコスト的にもお得です。',
  },
]

export default function DurationPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "知識" }, { name: "持続期間" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3">2026年最新 完全ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイクは何年持つ？<br />部位別の持続期間と長持ちさせるコツ
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            眉毛・リップ・アイライン・ヘアラインの持続期間を徹底比較。<br className="hidden md:block" />
            持ちが悪くなる原因と長持ちさせるための具体的な方法をすべて解説します。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#duration" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">部位別の持続期間を見る</a>
            <a href="#tips" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">長持ちさせるコツ</a>
          </div>
        </div>
      </section>

      {/* 結論セクション */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold">結論</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">アートメイクの持続期間は1〜3年</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              アートメイクは表皮に色素を入れるため、タトゥーと異なり<strong className="text-rose-600">永久ではありません</strong>。
              部位や肌質、ケア方法によって持続期間は異なりますが、一般的に<strong className="text-rose-600">1〜3年で徐々に薄くなります</strong>。
              正しいケアと定期的なリタッチで美しい状態を長く維持できます。
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-rose-500 mb-1">眉毛</div>
                <div className="text-sm text-gray-600">1〜3年</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-rose-500 mb-1">リップ</div>
                <div className="text-sm text-gray-600">1〜3年</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-rose-500 mb-1">アイライン</div>
                <div className="text-sm text-gray-600">2〜3年</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-rose-500 mb-1">ヘアライン</div>
                <div className="text-sm text-gray-600">2〜3年</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 部位別持続期間 */}
      <section className="py-16 px-4 bg-gray-50" id="duration">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">部位別アートメイクの持続期間</h2>
          <p className="text-center text-gray-600 mb-12">各部位の特徴と持続に影響する要因を詳しく解説します</p>
          <div className="space-y-6">
            {durationByPart.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-rose-500 text-white px-6 py-3 flex items-center justify-between">
                  <h3 className="font-bold text-lg">{item.part}</h3>
                  <span className="bg-white text-rose-500 px-4 py-1 rounded-full text-sm font-bold">{item.duration}</span>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-700 leading-relaxed">{item.detail}</p>
                  <div className="bg-rose-50 border-l-4 border-rose-300 p-4 rounded-r-lg">
                    <span className="text-rose-600 text-sm font-semibold">持続に影響する要因</span>
                    <p className="text-gray-700 text-sm mt-1">{item.factors}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 持ちが悪くなる7つの原因 */}
      <section className="py-16 px-4 bg-white" id="reasons">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">持ちが悪くなる7つの原因</h2>
          <p className="text-center text-gray-600 mb-12">なぜアートメイクが早く薄くなるのか、原因を理解して対策しましょう</p>
          <div className="space-y-6">
            {fadeReasons.map((reason) => (
              <div key={reason.num} className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
                <div className="flex items-start gap-4">
                  <span className="bg-rose-100 text-rose-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {reason.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 長持ちさせる5つのコツ */}
      <section className="py-16 px-4 bg-gradient-to-b from-rose-50 to-pink-50" id="tips">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">長持ちさせる5つのコツ</h2>
          <p className="text-center text-gray-600 mb-12">正しいケアでアートメイクの持続期間を最大化しましょう</p>
          <div className="space-y-6">
            {lastingTips.map((tip) => (
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

      {/* リタッチのタイミングと費用 */}
      <section className="py-16 px-4 bg-white" id="retouch">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">リタッチのタイミングと費用</h2>
          <p className="text-center text-gray-600 mb-12">部位別のリタッチ推奨時期と費用目安を確認しましょう</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="px-6 py-4 text-left font-semibold">部位</th>
                  <th className="px-6 py-4 text-left font-semibold">推奨タイミング</th>
                  <th className="px-6 py-4 text-left font-semibold">費用目安</th>
                  <th className="px-6 py-4 text-left font-semibold hidden md:table-cell">備考</th>
                </tr>
              </thead>
              <tbody>
                {retouchInfo.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.part}</td>
                    <td className="px-6 py-4 text-gray-700">{item.timing}</td>
                    <td className="px-6 py-4 text-rose-600 font-semibold">{item.cost}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm hidden md:table-cell">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-rose-50 border border-rose-200 rounded-xl p-6">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong className="text-rose-600">ポイント：</strong>
              リタッチは完全に消えてからではなく、薄くなり始めた段階で行うのがベストです。
              早めのリタッチは施術時間も短く、費用も初回より抑えられることが多いです。
              多くのクリニックでは初回施術から1年以内のリタッチ割引を設けています。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">よくある質問（FAQ）</h2>
          <p className="text-center text-gray-600 mb-12">アートメイクの持続期間に関する疑問にお答えします</p>
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
        <p className="font-semibold mt-1">アートメイクの痛みについて</p>
      </Link>
      <Link href="/knowledge/risk" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">知識</span>
        <p className="font-semibold mt-1">アートメイクのリスク・副作用</p>
      </Link>
      <Link href="/knowledge/tattoo-difference" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">知識</span>
        <p className="font-semibold mt-1">アートメイクとタトゥーの違い</p>
      </Link>
      <Link href="/about" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">基本情報</span>
        <p className="font-semibold mt-1">アートメイクとは？基礎知識まとめ</p>
      </Link>
      <Link href="/faq" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">FAQ</span>
        <p className="font-semibold mt-1">アートメイクよくある質問</p>
      </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">長持ちするアートメイクは<br />クリニック選びで決まる</h2>
          <p className="text-xl mb-4 opacity-90">
            高品質な色素と確かな技術力のクリニックなら<br className="hidden md:block" />
            アートメイクの持続期間を最大化できます。
          </p>
          <p className="mb-8 opacity-80">まずは無料カウンセリングで相談してみましょう</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/" className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              おすすめクリニックランキングを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </main>
  )
}
