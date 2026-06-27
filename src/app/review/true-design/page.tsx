import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'トゥルーデザインクリニックの口コミ・評判・料金【2026年6月】眉2回4万円〜・指名料込み総額を徹底解説',
  description: 'トゥルーデザインクリニック（大阪・心斎橋）の口コミ・評判・料金を徹底調査。眉2回40,000円〜、初診料0円・指名料1,500円・麻酔3,000円を含む「実際に払う総額」の目安、部位別料金、写真掲載条件付き料金の注意点まで公式情報（2026年6月12日確認・税込）で解説。アートメイクは医師・看護師が施術する医療行為です。',
}

// 出典・確認観点ベースの口コミ傾向まとめ（個人名・年代・星評価・創作エピソードは使用しない／件数・点数は出典がないため記載しない）
const goodReviewTrends = [
  '年齢に合わせた自然な眉デザイン（似合わせ）の提案力を評価する声が見られる。',
  'カウンセリングで骨格・肌質・普段のメイクまで丁寧にヒアリングしてもらえた、という声がある。',
  '40代・50代の症例が確認しやすく、仕上がりのイメージが持ちやすいという声が見られる。',
  '眉2回40,000円〜と料金が抑えめである点を評価する声がある（写真掲載条件付きの設定）。',
]

const badReviewTrends = [
  '院が大阪（心斎橋）1院のみで、関西圏以外からは通いづらいという声が見られる。',
  '40代・50代向けの症例が中心で、20代向けのトレンド眉とは方向性が合わない場合があるという指摘がある。',
  '人気のため予約が取りにくいことがある、という声が見られる。',
  '掲載料金が施術前後写真の掲載を条件とする設定である点に注意を促す声がある。',
]

// 2026年6月12日に公式サイトで確認（税込）。料金は施術前後写真をSNS等に掲載する条件付き設定（実質モニター型価格）
const pricingTable = [
  { menu: '眉 2D（パウダー調）2回', price: '40,000円', note: '今回調査の通常料金最安水準' },
  { menu: '眉 3D（1本1本手彫り）2回', price: '60,000円', note: '毛並み感を出す技法' },
  { menu: '眉 4D（パウダー×手彫り）2回', price: '70,000円', note: '最上位メニュー' },
  { menu: 'リップ 2回', price: '80,000円', note: '自然な血色感' },
  { menu: 'アイライン 2回', price: '70,000円', note: '目元を印象的に' },
]

export default function TrueDesignReviewPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "クリニック" }, { name: "トゥルーデザイン" }]} />
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">口コミ・評判レビュー</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">トゥルーデザインクリニックの口コミ・評判・料金</h1>
          <p className="text-xl text-gray-600">大阪・心斎橋｜「年齢に合った似合う眉」を追求する独自メソッド｜眉2回40,000円〜の料金・実質総額を解説</p>
        </div>
      </section>

      {/* 30秒でわかる結論 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><span className="text-rose-500">30秒</span>でわかる結論</h2>
            <p className="text-sm text-gray-500 mb-6">トゥルーデザインクリニックは大阪・心斎橋の1院。年齢に合わせた眉デザインを得意とし、眉2回40,000円〜と料金が抑えめです。</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-green-200">
                <p className="font-bold text-green-700 mb-2">おすすめできる人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-green-500">✓</span>大阪・関西で通いやすさを重視したい方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>眉2回コースを抑えめの料金で受けたい方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>初診料0円・指名料1,500円など諸費用を明確にしたい方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>年齢に合わせた似合わせデザインを求める方</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-red-200">
                <p className="font-bold text-red-700 mb-2">他院も検討したい人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-red-400">✗</span>関西圏以外に住んでいて通院が難しい方（1院のみ）</li>
                  <li className="flex gap-2"><span className="text-red-400">✗</span>施術前後写真の掲載条件付き料金に抵抗がある方</li>
                  <li className="flex gap-2"><span className="text-red-400">✗</span>全国の多店舗から選びたい方</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-rose-100">
              <p className="font-bold text-gray-800 mb-3">料金総額の目安（眉2D・2回・2026年6月12日公式確認・税込）</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex justify-between border-b border-gray-100 pb-1.5"><span>眉 2D（パウダー調）2回（施術料）</span><span className="font-semibold">40,000円</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1.5"><span>指名料（1回 1,500円・2回分）</span><span className="font-semibold">3,000円</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1.5"><span>初診料</span><span className="font-semibold">0円</span></li>
                <li className="flex justify-between pt-1"><span className="font-bold">実質総額の目安（指名あり）</span><span className="font-bold text-rose-600">約43,000〜46,000円</span></li>
              </ul>
              <p className="text-xs text-gray-400 mt-3">※この料金は施術前後の写真をSNS等に掲載する条件付き設定（実質モニター型価格）です。再診料1,500円・麻酔3,000円（ピコレーザー施術時）が別途。3D・4Dは料金が上がります。最新・正確な総額は公式カウンセリングでご確認ください。</p>
            </div>
            <p className="text-xs text-gray-500 mt-4">アートメイクは医師・看護師のいる医療機関で行う医療行為です。効果・色持ち・ダウンタイム・リスクには個人差があります。</p>
          </div>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">トゥルーデザインクリニック 基本情報</h2>
            <table className="w-full">
              <tbody>
                {[
                  ['クリニック名', 'トゥルーデザインクリニック'],
                  ['コンセプト', '「年齢に合った本当に似合う眉」をデザインする独自メソッド'],
                  ['独自技術', 'トゥルーデザインメソッド（独自技法）'],
                  ['得意な年齢層', '40代・50代の症例写真が豊富'],
                  ['眉毛料金', '2回 40,000円（2D）／60,000円（3D）／70,000円（4D）'],
                  ['リップ料金', '2回 80,000円'],
                  ['アイライン料金', '2回 70,000円'],
                  ['指名料', '1回 1,500円'],
                  ['初診料・再診料', '初診 0円／再診 1,500円'],
                  ['麻酔代', '3,000円（ピコレーザー施術時）'],
                  ['展開院', '大阪（心斎橋）1院（西心斎橋1-5-5）'],
                  ['予約方法', '電話・Web・LINE'],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-rose-50/30' : ''}><td className="p-3 font-semibold w-1/3">{label}</td><td className="p-3">{value}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 編集部による総評 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">編集部による総評</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="text-gray-700 mb-4">トゥルーデザインクリニックは大阪・心斎橋の1院で、年齢に合わせた「似合わせ」を重視した眉デザインを得意とするクリニックです。眉2回40,000円〜と料金が抑えめで、初診料0円・指名料1,500円など諸費用が明確な点は、料金面を重視する方にとって検討しやすい要素です。</p>
            <p className="text-gray-700 mb-4">一方で、院が大阪1院のみのため関西圏以外からは通院しづらく、人気のため予約が取りにくいことがある点には注意が必要です。掲載料金は施術前後写真の掲載を条件とする設定（実質モニター型価格）である点も、事前に確認しておきたいポイントです。</p>
            <p className="text-xs text-gray-500">※本ページの評価は当サイト編集部による定性的な所見であり、第三者機関による点数評価ではありません。アートメイクは医療行為であり、効果・色持ち・リスクには個人差があります。</p>
          </div>
        </div>
      </section>

      {/* トゥルーデザインメソッドの特徴 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">トゥルーデザインメソッドとは？</h2>
          <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-8">
            <p className="text-gray-700 mb-4">トゥルーデザインクリニック独自の「トゥルーデザインメソッド」は、年齢・骨格・肌質を総合的に分析し、「今の自分に本当に似合う眉」をデザインする独自技法です。</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">年齢別デザイン</h3>
                <p className="text-sm text-gray-600">40代・50代の骨格変化や肌質の変化を考慮した、年齢に合った自然な眉デザイン</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">似合わせ分析</h3>
                <p className="text-sm text-gray-600">顔の輪郭・目の形・普段のメイクまで総合的に分析し、最適なデザインを提案</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">豊富な症例実績</h3>
                <p className="text-sm text-gray-600">40代・50代の症例写真が豊富で、仕上がりイメージを事前にしっかり確認できる</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金表 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">料金表（税込）</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr><th className="p-3">施術メニュー</th><th className="p-3">料金</th><th className="p-3">備考</th></tr>
              </thead>
              <tbody>
                {pricingTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-rose-50/30' : ''}>
                    <td className="p-3 font-semibold">{row.menu}</td><td className="p-3 text-center">{row.price}</td><td className="p-3 text-sm text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">※ 出典: トゥルーデザインクリニック公式（2026年6月12日確認・税込）。この料金は施術前後の写真をSNS等に掲載する条件付き設定（実質モニター型価格）です。</p>
        </div>
      </section>

      {/* 実際に払う総額 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">「実際に払う総額」の目安</h2>
          <p className="text-center text-gray-500 text-sm mb-8">施術料だけでなく、<strong>指名料・初診/再診・麻酔</strong>を含めた目安です（眉2D・2回・2026年6月12日公式確認・税込）。</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg text-sm border border-gray-100">
              <thead className="bg-rose-500 text-white">
                <tr><th className="p-3 text-left">項目</th><th className="p-3">金額（税込）</th><th className="p-3 text-left">含む / 含まない</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-rose-50/30"><td className="p-3 font-semibold">眉 2D 2回（施術料）</td><td className="p-3 text-center">40,000円</td><td className="p-3">基本施術料に含む</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold">指名料（1回1,500円・2回分）</td><td className="p-3 text-center">3,000円</td><td className="p-3">指名する場合のみ別途</td></tr>
                <tr className="border-b border-gray-100 bg-rose-50/30"><td className="p-3 font-semibold">初診料</td><td className="p-3 text-center">0円</td><td className="p-3">無料</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold">再診料</td><td className="p-3 text-center">1,500円</td><td className="p-3">再診時に別途</td></tr>
                <tr className="border-b border-gray-100 bg-rose-50/30"><td className="p-3 font-semibold">麻酔代</td><td className="p-3 text-center">3,000円</td><td className="p-3">ピコレーザー施術時に別途</td></tr>
                <tr className="bg-rose-50"><td className="p-3 font-bold">実質総額の目安（指名あり）</td><td className="p-3 text-center font-bold text-rose-600">約43,000〜46,000円</td><td className="p-3 text-xs text-gray-500">指名なしなら約40,000円〜</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※3D・4Dを選ぶ場合は施術料が60,000〜70,000円に上がります。料金は施術前後写真の掲載条件付き（実質モニター型価格）です。掲載範囲・条件の詳細はカウンセリングで必ずご確認ください。最新・正確な総額は公式でご確認ください。</p>
          <p className="text-sm text-gray-600 mt-3">5社の実質総額の横並び比較は<Link href="/compare/price/" className="text-rose-600 underline">アートメイク料金比較DB</Link>、全項目の比較は<Link href="/compare/all-clinics/" className="text-rose-600 underline">全5クリニック比較</Link>をご覧ください。</p>
        </div>
      </section>

      {/* キャンペーン・割引情報 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 mb-8 border border-rose-100">
            <h3 className="text-lg font-bold mb-3">現在のキャンペーン・割引情報</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">●</span>カウンセリング無料・初診料0円</li>
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">●</span>掲載料金は施術前後写真をSNS等に掲載する条件付き設定（実質モニター型価格）</li>
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">●</span>指名料1回1,500円と諸費用が明確</li>
            </ul>
            <p className="text-xs text-gray-400 mt-3">※キャンペーン内容は変更される場合があります。最新情報は公式サイトでご確認ください。</p>
          </div>
        </div>
      </section>

      {/* メリデメ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">メリット・デメリット</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4 text-green-700">メリット</h3>
              <ul className="space-y-2">
                {['「年齢に合った似合う眉」を追求する独自メソッド', '40代・50代の症例写真が豊富', '眉2回40,000円〜と料金が抑えめ（写真掲載条件付き）', '初診料0円・指名料1,500円と諸費用が明確', '2D・3D・4Dの3方式から選べる', 'リップ・アイラインも対応', '心斎橋駅徒歩約5分・LINE予約に対応'].map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><span className="text-green-500 font-bold">✓</span>{m}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4 text-red-700">デメリット</h3>
              <ul className="space-y-2">
                {['大阪（心斎橋）1院のみで通いにくい', '20代向けのトレンド眉には不向きな場合も', '人気のため予約が取りにくい', '関東・東海エリアからは通院が困難', '若い世代の症例写真が少なめ'].map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><span className="text-red-500 font-bold">✗</span>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 良い口コミの傾向 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">良い口コミの傾向</h2>
          <p className="text-center text-gray-500 text-sm mb-8">レビューサイト等で一般に観測される傾向を、断定を避けてまとめたものです（個別の体験談・点数評価ではありません）。</p>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <ul className="space-y-3">
              {goodReviewTrends.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-green-500 font-bold mt-0.5">✓</span><span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 気になる口コミの傾向 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">気になる口コミの傾向</h2>
          <p className="text-center text-gray-500 text-sm mb-8">レビューサイト等で一般に観測される傾向を、断定を避けてまとめたものです（個別の体験談・点数評価ではありません）。</p>
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-300">
            <ul className="space-y-3">
              {badReviewTrends.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-red-400 font-bold mt-0.5">✗</span><span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* おすすめ/おすすめしない */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">トゥルーデザインクリニックはこんな方におすすめ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">&#10003; 40代・50代で年齢に合った眉を求める方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">&#10003; 関西エリアで高品質なアートメイクを探している方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">&#10003; 諸費用を抑えたい方（初診料0円・指名料1,500円）</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">&#10003; 「似合わせ」を重視したデザインを求める方</p></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">&#10007; 関東在住で通院が難しい方 → メディカルブローがおすすめ</p></div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">&#10007; 20代でトレンド眉を求める方 → デイジークリニックがおすすめ</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">よくある質問</h2>
          <div className="space-y-4">
            {[
              { q: 'トゥルーデザインクリニックの口コミ・評判は？', a: '40代・50代の方を中心に「年齢に合った自然な眉に仕上がった」「似合わせ力が高い」という傾向の口コミが見られます。一方で「大阪1院のみで通いにくい」「人気で予約が取りにくい」という声もあります。仕上がりやデザインの方向性はカウンセリングで確認しましょう。' },
              { q: 'トゥルーデザインメソッドとは何ですか？', a: 'トゥルーデザインクリニック独自の技法で、年齢・骨格・肌質を総合的に分析し、「今の自分に似合う眉」をデザインするメソッドです。特に40代・50代の骨格変化に対応したデザインを得意としています。' },
              { q: 'トゥルーデザインクリニックの料金は高いですか？', a: '眉2回40,000円（2D）〜70,000円（4D）と、今回調査の通常料金では最安水準です（2026年6月12日公式確認・税込）。初診料0円・指名料1回1,500円と諸費用も明確です。ただしこの料金は施術前後写真をSNS等に掲載する条件付き設定（実質モニター型価格）である点にご注意ください。' },
              { q: 'トゥルーデザインクリニックは大阪以外にありますか？', a: '現在は大阪（心斎橋）の1院のみです。関西エリア以外の方は通院の負担を考慮する必要があります。関東・東海在住の方はメディカルブローなど全国展開のクリニックも検討しましょう。' },
            ].map((faq, i) => (
              <details key={i} className="bg-gray-50 rounded-lg shadow-sm">
                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-gray-100 transition-colors">Q{i + 1}. {faq.q}</summary>
                <div className="px-6 py-4 border-t text-gray-600">{faq.a}</div>
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
      <Link href="/review/medicalbrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">メディカルブローの口コミ・評判</p>
      </Link>
      <Link href="/review/first-artmake/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">ファーストアートメイクの口コミ・評判</p>
      </Link>
      <Link href="/compare/price/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">アートメイク料金比較表</p>
      </Link>
      <Link href="/compare/all-clinics/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">全5クリニック完全比較</p>
      </Link>
      <Link href="/compare/dazzy-vs-true-design/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">デイジー vs トゥルーデザイン比較</p>
      </Link>
      <Link href="/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">ランキング</span>
        <p className="font-semibold mt-1">アートメイクおすすめクリニックTOP5</p>
      </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">トゥルーデザインクリニックで理想の眉を</h2>
          <p className="text-xl mb-8">年齢に合った「似合う眉」を。まずは無料カウンセリングから。</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/compare/all-clinics/" className="bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">全5クリニックを比較する →</Link>
            <Link href="/compare/price/" className="border-2 border-white text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-white/10 transition-colors">料金で比較する</Link>
          </div>
          <p className="text-sm mt-6 opacity-80">公式サイトでの予約・最新料金の確認は、各クリニックの公式ページをご利用ください。</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4">
        <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "トゥルーデザインクリニックの口コミ・評判は？", "acceptedAnswer": {"@type": "Answer", "text": "40代・50代の方を中心に「年齢に合った自然な眉に仕上がった」「似合わせ力が高い」という傾向の口コミが見られます。一方で「大阪1院のみで通いにくい」「人気で予約が取りにくい」という声もあります。仕上がりやデザインの方向性はカウンセリングで確認しましょう。"}}, {"@type": "Question", "name": "トゥルーデザインメソッドとは何ですか？", "acceptedAnswer": {"@type": "Answer", "text": "トゥルーデザインクリニック独自の技法で、年齢・骨格・肌質を総合的に分析し、「今の自分に似合う眉」をデザインするメソッドです。特に40代・50代の骨格変化に対応したデザインを得意としています。"}}, {"@type": "Question", "name": "トゥルーデザインクリニックの料金は高いですか？", "acceptedAnswer": {"@type": "Answer", "text": "眉2回40,000円（2D）〜70,000円（4D）と、今回調査の通常料金では最安水準です（2026年6月12日公式確認・税込）。初診料0円・指名料1回1,500円と諸費用も明確です。ただしこの料金は施術前後写真をSNS等に掲載する条件付き設定（実質モニター型価格）である点にご注意ください。"}}, {"@type": "Question", "name": "トゥルーデザインクリニックは大阪以外にありますか？", "acceptedAnswer": {"@type": "Answer", "text": "現在は大阪（心斎橋）の1院のみです。関西エリア以外の方は通院の負担を考慮する必要があります。関東・東海在住の方はメディカルブローなど全国展開のクリニックも検討しましょう。"}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "トゥルーデザイン", "item": "https://artmake-hikaku.com/review/true-design/"}]}) }} />
    </main>
  )
}
