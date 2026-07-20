import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'メディカルブローの口コミ・評判・料金【2026年6月】ランク別料金・指名料込み総額を徹底解説',
  description: 'メディカルブロー（表参道メディカルクリニック運営）の口コミ・評判・料金を徹底調査。眉2回90,000〜150,000円・モニター28,000円〜、指名料・初診/再診料を含む「実際に払う総額」の目安、ランク制・全国8院の注意点まで公式情報（2026年6月12日確認・税込）で解説。アートメイクは医師・看護師が施術する医療行為です。',
}

// 出典・確認観点ベースの口コミ傾向まとめ（個人名・年代・星評価・創作エピソードは使用しない／件数・点数は出典がないため記載しない）
const goodReviewTrends = [
  '7Dストローク（商標）による1本1本の毛並み感・自然な仕上がりを評価する声が見られる。',
  'カウンセリングで黄金比を測りながらデザインを提案してもらえた、という声がある。',
  '全国8院展開で通いやすく、メンズアートメイクにも対応している点を評価する声が見られる。',
  'モニター価格（28,000円〜）や学割・ペア割など割引制度の幅広さを挙げる声がある。',
]

const badReviewTrends = [
  'アーティストのランクによって仕上がりや料金に差がある、という指摘が複数見られる。',
  '人気院（表参道・新宿など）は予約が取りにくいことがある、という声がある。',
  'ランク制のため総額が分かりにくく、指名料・初診/再診料が別途かかる点に注意を促す声がある。',
  '電話対応やキャンセルポリシーについて不満を挙げる声が一部にある。',
]

// 2026年6月12日に公式サイトで確認（税込）。料金はランク・院・キャンペーンで変動
const pricingTable = [
  { menu: '眉（2回・ランク別）', price: '90,000〜150,000円', note: '1回 50,000〜80,000円' },
  { menu: '眉 初回モニター（ランク別）', price: '28,000〜48,000円', note: 'SNS掲載が条件' },
  { menu: 'リップ（1回）', price: '55,000〜65,000円', note: 'モニター40,000円〜' },
  { menu: 'アイライン上（2回）', price: '60,000〜80,000円', note: '' },
]

export default function MedicalBrowReviewPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "クリニック" }, { name: "メディカルブロー" }]} />
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">口コミ・評判レビュー</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">メディカルブローの口コミ・評判・料金</h1>
          <p className="text-xl text-gray-600">累計23万件超の実績・全国8院｜ランク別料金・実質総額を徹底調査</p>
        </div>
      </section>

      {/* 30秒でわかる結論 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><span className="text-rose-500">30秒</span>でわかる結論</h2>
            <p className="text-sm text-gray-500 mb-6">メディカルブローは表参道メディカルクリニックが運営する全国8院のアートメイク。独自の7Dストローク（商標）とランク制が特徴で、モニター価格なら28,000円〜と費用を抑えられます。</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-green-200">
                <p className="font-bold text-green-700 mb-2">おすすめできる人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-green-500">✓</span>自然な毛並み眉（7Dストローク）を求める方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>全国8院から通いやすい院を選びたい方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>モニター価格・学割・ペア割で費用を抑えたい方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>メンズアートメイクも検討したい方</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-red-200">
                <p className="font-bold text-red-700 mb-2">他院も検討したい人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-red-400">✗</span>料金を事前にきっちり確定させたい方（ランク制で変動）</li>
                  <li className="flex gap-2"><span className="text-red-400">✗</span>指名料・初診/再診料を含む総額を抑えたい方</li>
                  <li className="flex gap-2"><span className="text-red-400">✗</span>3回セットでじっくり定着させたい方</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-rose-100">
              <p className="font-bold text-gray-800 mb-3">料金総額の目安（眉2回・アーティストランク・2026年6月12日公式確認・税込）</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex justify-between border-b border-gray-100 pb-1.5"><span>眉 2回（施術料・ランク別）</span><span className="font-semibold">90,000〜150,000円</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1.5"><span>指名料</span><span className="font-semibold">10,000〜20,000円（アンバサダー35,000円）</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1.5"><span>初診料・再診料</span><span className="font-semibold">初診2,200円・再診1,100円</span></li>
                <li className="flex justify-between pt-1"><span className="font-bold">実質総額の目安（指名あり）</span><span className="font-bold text-rose-600">約102,200円〜</span></li>
              </ul>
              <p className="text-xs text-gray-400 mt-3">※モニター価格なら眉1回28,000円〜と大きく下がります。料金はランク・院・キャンペーンで変動します。指名しない場合は指名料はかかりません。最新・正確な総額は公式カウンセリングでご確認ください。</p>
            </div>
            <p className="text-xs text-gray-500 mt-4">アートメイクは医師・看護師のいる医療機関で行う医療行為です。効果・色持ち・ダウンタイム・リスクには個人差があります。</p>
          </div>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">メディカルブロー 基本情報</h2>
            <table className="w-full">
              <tbody>
                {[
                  ['運営', '表参道メディカルクリニック'],
                  ['累計症例数', '23万件超'],
                  ['独自技術', '7Dストローク（商標）'],
                  ['眉毛料金', '2回 90,000〜150,000円（ランク別）／1回 50,000〜80,000円'],
                  ['モニター料金', '初回 28,000〜48,000円（ランク別・SNS掲載条件）'],
                  ['リップ料金', '1回 55,000〜65,000円（モニター40,000円〜）'],
                  ['アイライン料金', '上2回 60,000〜80,000円'],
                  ['指名料', '10,000〜20,000円（アンバサダー35,000円）'],
                  ['初診料・再診料', '初診 2,200円／再診 1,100円'],
                  ['展開院', '全国8院'],
                  ['割引', '学割10%・ミドル割5%・複数部位割・ペア割など'],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-rose-50/30' : ''}><td className="p-3 font-semibold w-1/3">{label}</td><td className="p-3">{value}</td></tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-400 mt-3">出典: メディカルブロー公式サイト（2026年6月12日確認・税込）。料金はランク・院・キャンペーンで変動します。</p>
          </div>
        </div>
      </section>

      {/* 編集部による総評 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">編集部による総評</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="text-gray-700 mb-4">メディカルブローは累計23万件超の症例実績と全国8院の通いやすさが強みのアートメイクです。独自の7Dストローク（商標）による自然な毛並み眉に定評があり、モニター価格なら眉1回28,000円〜と費用を抑えられる点も検討しやすい要素です。</p>
            <p className="text-gray-700 mb-4">一方で、アーティストのランク制により施術料・指名料が大きく変わるため、総額が分かりにくい点には注意が必要です。指名料（10,000〜20,000円、アンバサダー35,000円）や初診料2,200円・再診料1,100円が別途かかるため、カウンセリングで総額を確認することをおすすめします。</p>
            <p className="text-xs text-gray-500">※本ページの評価は当サイト編集部による定性的な所見であり、第三者機関による点数評価ではありません。アートメイクは医療行為であり、効果・色持ち・リスクには個人差があります。</p>
          </div>
        </div>
      </section>

      {/* 7Dストロークの特徴 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">7Dストローク（商標）とは？</h2>
          <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-8">
            <p className="text-gray-700 mb-4">メディカルブロー独自の技術「7Dストローク（商標）」は、従来の3D・4D眉をさらに進化させた施術法とされています。</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">超極細ニードル</h3>
                <p className="text-sm text-gray-600">細いニードルを使用し、1本1本の毛流れを繊細に再現する技法</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">黄金比分析</h3>
                <p className="text-sm text-gray-600">骨格・顔立ちから黄金比を算出し、似合う眉デザインを提案</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">自然な仕上がり</h3>
                <p className="text-sm text-gray-600">すっぴんでも浮きにくい、自然な毛並み感を目指す施術</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金表 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">部位別・ランク別料金表（税込）</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr><th className="p-3">メニュー</th><th className="p-3">料金</th><th className="p-3">備考</th></tr>
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
          <p className="text-sm text-gray-500 mt-4 text-center">※ 出典: メディカルブロー公式サイト（2026年6月12日確認・税込）。眉はノービス〜アンバサダーのランクで料金が異なります。指名料・初診/再診料は別途。学割・ペア割等で割引あり。</p>
        </div>
      </section>

      {/* 実際に払う総額 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">「実際に払う総額」の目安</h2>
          <p className="text-center text-gray-500 text-sm mb-8">施術料だけでなく、<strong>指名料・初診/再診料</strong>を含めた目安です（眉2回・アーティストランク・2026年6月12日公式確認・税込）。</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg text-sm border border-gray-100">
              <thead className="bg-rose-500 text-white">
                <tr><th className="p-3 text-left">項目</th><th className="p-3">金額（税込）</th><th className="p-3 text-left">含む / 含まない</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-rose-50/30"><td className="p-3 font-semibold">眉 2回（施術料・ランク別）</td><td className="p-3 text-center">90,000〜150,000円</td><td className="p-3">基本施術料に含む</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold">指名料</td><td className="p-3 text-center">10,000〜20,000円</td><td className="p-3">指名する場合のみ別途（アンバサダー35,000円）</td></tr>
                <tr className="border-b border-gray-100 bg-rose-50/30"><td className="p-3 font-semibold">初診料</td><td className="p-3 text-center">2,200円</td><td className="p-3">初回に別途</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold">再診料</td><td className="p-3 text-center">1,100円</td><td className="p-3">再診時に別途</td></tr>
                <tr className="border-b border-gray-100 bg-rose-50/30"><td className="p-3 font-semibold">麻酔代</td><td className="p-3 text-center text-gray-500">公式要確認</td><td className="p-3">公式サイトで未確認</td></tr>
                <tr className="bg-rose-50"><td className="p-3 font-bold">実質総額の目安（指名あり）</td><td className="p-3 text-center font-bold text-rose-600">約102,200円〜</td><td className="p-3 text-xs text-gray-500">モニターなら28,000円〜</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ランク・院・指名するアーティスト・キャンペーンで変動します。モニター価格（SNS掲載条件）なら眉1回28,000円〜と大きく下がります。麻酔代の有無は公式サイトで明示が確認できなかったため「要確認」としています。正確な総額はカウンセリングでご確認ください。</p>
          <div className="mt-6 bg-rose-50 border border-rose-200 rounded-xl p-5 text-center">
            <p className="text-sm text-gray-700 mb-3">メディカルブローを含む主要8院の公式料金（実質総額）を、指名料・追加費用まで横断で比較できます。</p>
            <Link href="/compare/price/" className="inline-flex items-center justify-center gap-2 bg-rose-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-rose-700 transition">8院の公式料金を横断比較する →</Link>
            <p className="text-xs text-gray-500 mt-3">全項目の比較は<Link href="/compare/all-clinics/" className="text-rose-600 underline">全5クリニック比較</Link>をご覧ください。</p>
          </div>
        </div>
      </section>

      {/* キャンペーン・割引情報 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 mb-8 border border-rose-100">
            <h3 className="text-lg font-bold mb-3">割引・モニター情報</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">●</span>初回モニター 28,000〜48,000円（ランク別・SNS掲載が条件）</li>
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">●</span>学割10%・ミドル割5%</li>
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">●</span>複数部位割・ペア割あり</li>
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
                {['累計23万件超の症例実績', '7Dストローク（商標）で自然な毛並みを目指せる', 'モニター1回28,000円〜とコスパの選択肢がある', '全国8院で通いやすい', '学割10%・ミドル割5%・ペア割など割引が豊富', 'メンズアートメイクにも対応'].map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><span className="text-green-500 font-bold">✓</span>{m}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4 text-red-700">デメリット</h3>
              <ul className="space-y-2">
                {['ランク制で料金・総額が分かりにくい', 'アーティストによって仕上がりに差があるという指摘', '人気院は予約が取りにくいことがある', '指名料・初診/再診料が別途かかる', '電話対応やキャンセルポリシーへの不満の声が一部にある'].map((d, i) => (
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
          <h2 className="text-3xl font-bold text-center mb-8">メディカルブローはこんな方におすすめ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">&#10003; 自然な毛並み眉を求める方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">&#10003; モニター価格で費用を抑えたい方（28,000円〜）</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">&#10003; 全国展開で地方からも通いやすい院を探す方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">&#10003; メンズアートメイクを検討中の方</p></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">&#10007; 料金を事前に確定させたい方 → クレアージュがおすすめ</p></div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">&#10007; 関西で40代以上の方 → トゥルーデザインがおすすめ</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">よくある質問</h2>
          <div className="space-y-4">
            {[
              { q: 'メディカルブローの眉アートメイクの料金は？', a: '眉2回でランク別90,000〜150,000円（1回50,000〜80,000円）です（2026年6月12日公式確認・税込）。初回モニター価格ならランク別28,000〜48,000円とぐっと下がります（SNS掲載が条件）。指名料10,000〜20,000円・初診料2,200円・再診料1,100円が別途かかるため、総額はカウンセリングで確認しましょう。' },
              { q: 'メディカルブローのおすすめランクは？', a: 'コスパ重視なら下位ランク、仕上がり重視なら上位ランクという選び方になります。ノービスランクでも研修を修了したアーティストが担当します。まずはモニター価格で体験し、希望に応じてランクや指名を検討するのも一つの方法です。' },
              { q: 'メディカルブローは痛いですか？', a: '施術前に麻酔クリームを塗布するのが一般的で、口コミでは「チクチクする程度」という傾向の声が見られます。痛みの感じ方には個人差があるため、痛みに弱い方は事前に相談しましょう。アートメイクは医療機関で行う医療行為です。' },
              { q: 'メディカルブローとデイジーどっちがいい？', a: 'コスパ＋実績数（全国8院・累計23万件）ならメディカルブロー、技法の選択肢（機械彫り・手彫り・コンビ）ならデイジークリニックという選び方になります。料金・通いやすさ・希望のデザインを踏まえてカウンセリングで比較しましょう。' },
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
      <Link href="/review/dazzy/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">デイジークリニックの口コミ・評判</p>
      </Link>
      <Link href="/review/creage/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">クレアージュ東京の口コミ・評判</p>
      </Link>
      <Link href="/compare/medicalbrow-vs-dazzy/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">メディカルブロー vs デイジー徹底比較</p>
      </Link>
      <Link href="/compare/creage-vs-medicalbrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">クレアージュ vs メディカルブロー比較</p>
      </Link>
      <Link href="/compare/price/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">アートメイク料金比較DB</p>
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
          <h2 className="text-4xl font-bold mb-6">メディカルブローで理想の眉を</h2>
          <p className="text-xl mb-8">モニター1回28,000円〜。まずは無料カウンセリングから。</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://t.felmat.net/fmcl?ak=Y4616D.1.683500A.G135747X" target="_blank" rel="sponsored noopener noreferrer" className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">メディカルブロー公式サイトへ →</a>
            <Link href="/compare/all-clinics/" className="border-2 border-white text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-white/10 transition-colors">他のクリニックと比較する</Link>
          </div>
          <p className="text-sm mt-6 opacity-80">最新料金・予約は公式サイトでご確認ください。アートメイクは医療機関で行う医療行為です。</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4">
        <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "メディカルブローの眉アートメイクの料金は？", "acceptedAnswer": {"@type": "Answer", "text": "眉2回でランク別90,000〜150,000円（1回50,000〜80,000円）です（2026年6月12日公式確認・税込）。初回モニター価格ならランク別28,000〜48,000円とぐっと下がります（SNS掲載が条件）。指名料10,000〜20,000円・初診料2,200円・再診料1,100円が別途かかるため、総額はカウンセリングで確認しましょう。"}}, {"@type": "Question", "name": "メディカルブローのおすすめランクは？", "acceptedAnswer": {"@type": "Answer", "text": "コスパ重視なら下位ランク、仕上がり重視なら上位ランクという選び方になります。ノービスランクでも研修を修了したアーティストが担当します。まずはモニター価格で体験し、希望に応じてランクや指名を検討するのも一つの方法です。"}}, {"@type": "Question", "name": "メディカルブローは痛いですか？", "acceptedAnswer": {"@type": "Answer", "text": "施術前に麻酔クリームを塗布するのが一般的で、口コミでは「チクチクする程度」という傾向の声が見られます。痛みの感じ方には個人差があるため、痛みに弱い方は事前に相談しましょう。アートメイクは医療機関で行う医療行為です。"}}, {"@type": "Question", "name": "メディカルブローとデイジーどっちがいい？", "acceptedAnswer": {"@type": "Answer", "text": "コスパ＋実績数（全国8院・累計23万件）ならメディカルブロー、技法の選択肢（機械彫り・手彫り・コンビ）ならデイジークリニックという選び方になります。料金・通いやすさ・希望のデザインを踏まえてカウンセリングで比較しましょう。"}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "メディカルブロー", "item": "https://artmake-hikaku.com/review/medicalbrow/"}]}) }} />
    </main>
  )
}
