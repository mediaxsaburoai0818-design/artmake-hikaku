import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ファーストアートメイクの口コミ・評判・料金【2026年6月】モニター総額・全国27院の注意点を徹底解説',
  description: 'FIRST ARTMAKE（ファーストアートメイク）の口コミ・評判・料金を徹底調査。眉モニター2回88,000円〜・クリーム麻酔0円/初診0円、指名料を含む「実際に払う総額」の目安、エアリーブロウ・全国27院の注意点まで公式情報（2026年6月12日確認・税込）で解説。アートメイクは医師・看護師が施術する医療行為です。',
}

// 出典・確認観点ベースの口コミ傾向まとめ（個人名・年代・星評価・創作エピソードは使用しない／件数・点数は出典がないため記載しない）
const goodReviewTrends = [
  'エアリーブロウ（ふんわり毛並み）による自然な仕上がりを評価する声が見られる。',
  '初めての方への丁寧なカウンセリング・説明を評価する声がある。',
  'クリーム麻酔0円・初診料0円など諸費用が抑えめである点を挙げる声が見られる。',
  '全国27院展開で通いやすさを評価する声がある。',
]

const badReviewTrends = [
  'アーティストのランクによって料金や仕上がりに差がある、という指摘がある。',
  '人気のため土日の予約が取りにくいことがある、という声が見られる。',
  '通常料金はランク別で幅があり、総額が分かりにくいという声がある。',
  'リップ・アイラインの料金は公式で要確認の部分があり、事前確認を促す声がある。',
]

// 2026年6月12日に公式サイトで確認（税込）。料金はランク・院・キャンペーンで変動（銀座本院ベース）
const pricingTable = [
  { menu: '眉（1回・ランク別／銀座本院）', price: '60,000〜80,000円', note: 'トップアーティスト2回150,000円' },
  { menu: '眉 モニター（2回）', price: '計88,000〜98,000円', note: '平日34,900円/回〜' },
  { menu: 'リップ', price: '公式サイトで要確認', note: '' },
  { menu: 'アイライン', price: '公式サイトで要確認', note: '' },
]

export default function FirstArtmakeReviewPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "クリニック" }, { name: "ファーストアートメイク" }]} />
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">口コミ・評判レビュー</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">FIRST ARTMAKE（ファーストアートメイク）の口コミ・評判・料金</h1>
          <p className="text-xl text-gray-600">全国27院・エアリーブロウ｜モニター総額・諸費用の注意点を徹底調査</p>
        </div>
      </section>

      {/* 30秒でわかる結論 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><span className="text-rose-500">30秒</span>でわかる結論</h2>
            <p className="text-sm text-gray-500 mb-6">FIRST ARTMAKE（ファーストアートメイク）は全国27院展開のアートメイク。ふんわり毛並みの「エアリーブロウ」が特徴で、クリーム麻酔0円・初診料0円など諸費用が抑えめです。</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-green-200">
                <p className="font-bold text-green-700 mb-2">おすすめできる人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-green-500">✓</span>ふんわり自然な毛並み眉（エアリーブロウ）を求める方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>全国27院から通いやすい院を選びたい方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>クリーム麻酔0円・初診0円など諸費用を抑えたい方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>モニター価格で費用を抑えたい方</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-red-200">
                <p className="font-bold text-red-700 mb-2">他院も検討したい人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-red-400">✗</span>通常料金を事前にきっちり確定させたい方（ランク制で変動）</li>
                  <li className="flex gap-2"><span className="text-red-400">✗</span>リップ・アイラインの料金を先に確認したい方（要確認）</li>
                  <li className="flex gap-2"><span className="text-red-400">✗</span>3回セットでじっくり定着させたい方</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-rose-100">
              <p className="font-bold text-gray-800 mb-3">料金総額の目安（眉モニター2回・2026年6月12日公式確認・税込）</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex justify-between border-b border-gray-100 pb-1.5"><span>眉 モニター 2回（施術料・平日34,900円/回〜）</span><span className="font-semibold">88,000〜98,000円</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1.5"><span>指名料</span><span className="font-semibold">5,500〜11,000円</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1.5"><span>クリーム麻酔・初診料</span><span className="font-semibold">0円</span></li>
                <li className="flex justify-between pt-1"><span className="font-bold">実質総額の目安（指名あり）</span><span className="font-bold text-rose-600">約93,500円〜</span></li>
              </ul>
              <p className="text-xs text-gray-400 mt-3">※通常料金はランク別で眉1回60,000〜80,000円（銀座本院）、トップアーティスト2回150,000円。カウンセリングのみの場合は3,300円。最新・正確な総額は公式カウンセリングでご確認ください。</p>
            </div>
            <p className="text-xs text-gray-500 mt-4">アートメイクは医師・看護師のいる医療機関で行う医療行為です。効果・色持ち・ダウンタイム・リスクには個人差があります。</p>
          </div>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">FIRST ARTMAKE 基本情報</h2>
            <table className="w-full">
              <tbody>
                {[
                  ['クリニック名', 'FIRST ARTMAKE（ファーストアートメイク）'],
                  ['特徴', 'エアリーブロウ（ふんわり毛並み）'],
                  ['眉毛料金', '1回 60,000〜80,000円（ランク別・銀座本院）／トップ2回150,000円'],
                  ['モニター料金', '眉モニター2回 計88,000〜98,000円（平日34,900円/回〜）'],
                  ['リップ料金', '公式サイトで要確認'],
                  ['アイライン料金', '公式サイトで要確認'],
                  ['指名料', '5,500〜11,000円'],
                  ['麻酔・初診', 'クリーム麻酔0円・初診料0円（カウンセリングのみ3,300円）'],
                  ['展開院', '全国27院（通いやすさ最強クラス）'],
                  ['対象', 'アートメイク初心者・はじめての方にも'],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-rose-50/30' : ''}><td className="p-3 font-semibold w-1/3">{label}</td><td className="p-3">{value}</td></tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-400 mt-3">出典: ファーストアートメイク公式サイト（2026年6月12日確認・税込）。料金はランク・院・キャンペーンで変動します。</p>
          </div>
        </div>
      </section>

      {/* 編集部による総評 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">編集部による総評</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="text-gray-700 mb-4">FIRST ARTMAKE（ファーストアートメイク）は全国27院という通いやすさが大きな強みのアートメイクです。ふんわり毛並みの「エアリーブロウ」で自然な眉を目指せ、クリーム麻酔0円・初診料0円など諸費用が抑えめな点も検討しやすい要素です。モニター価格なら眉2回88,000円〜（平日34,900円/回〜）と費用を抑えられます。</p>
            <p className="text-gray-700 mb-4">一方で、通常料金はアーティストのランク制で幅があり（銀座本院で眉1回60,000〜80,000円、トップ2回150,000円）、総額が分かりにくい点には注意が必要です。リップ・アイラインの料金は公式で要確認の部分があるため、希望部位の料金はカウンセリングで確認しましょう。</p>
            <p className="text-xs text-gray-500">※本ページの評価は当サイト編集部による定性的な所見であり、第三者機関による点数評価ではありません。アートメイクは医療行為であり、効果・色持ち・リスクには個人差があります。</p>
          </div>
        </div>
      </section>

      {/* エアリーブロウの特徴 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">FIRST ARTMAKEの特徴</h2>
          <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-8">
            <p className="text-gray-700 mb-4">ふんわりした毛並み感を出す「エアリーブロウ」を軸に、全国27院で通いやすいアートメイクを提供しています。</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">エアリーブロウ</h3>
                <p className="text-sm text-gray-600">ふんわりした毛並み感を出す技法で、自然な眉を目指す</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">諸費用が抑えめ</h3>
                <p className="text-sm text-gray-600">クリーム麻酔0円・初診料0円。カウンセリングのみの場合3,300円</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">全国27院</h3>
                <p className="text-sm text-gray-600">通いやすさ最強クラスで、地方からも選びやすい</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金表 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">部位別料金表（税込）</h2>
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
          <p className="text-sm text-gray-500 mt-4 text-center">※ 出典: ファーストアートメイク公式サイト（2026年6月12日確認・税込）。眉はランク別で料金が異なります（銀座本院ベース）。指名料5,500〜11,000円・クリーム麻酔0円・初診料0円。リップ・アイラインは公式で要確認。</p>
        </div>
      </section>

      {/* 実際に払う総額 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">「実際に払う総額」の目安</h2>
          <p className="text-center text-gray-500 text-sm mb-8">施術料だけでなく、<strong>指名料・麻酔・初診料</strong>を含めた目安です（眉モニター2回・2026年6月12日公式確認・税込）。</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg text-sm border border-gray-100">
              <thead className="bg-rose-500 text-white">
                <tr><th className="p-3 text-left">項目</th><th className="p-3">金額（税込）</th><th className="p-3 text-left">含む / 含まない</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-rose-50/30"><td className="p-3 font-semibold">眉 モニター 2回（施術料）</td><td className="p-3 text-center">88,000〜98,000円</td><td className="p-3">基本施術料に含む（平日34,900円/回〜）</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold">指名料</td><td className="p-3 text-center">5,500〜11,000円</td><td className="p-3">指名する場合のみ別途</td></tr>
                <tr className="border-b border-gray-100 bg-rose-50/30"><td className="p-3 font-semibold">クリーム麻酔代</td><td className="p-3 text-center">0円</td><td className="p-3">無料</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold">初診料</td><td className="p-3 text-center">0円</td><td className="p-3">無料（カウンセリングのみ3,300円）</td></tr>
                <tr className="bg-rose-50"><td className="p-3 font-bold">実質総額の目安（指名あり）</td><td className="p-3 text-center font-bold text-rose-600">約93,500円〜</td><td className="p-3 text-xs text-gray-500">指名なしなら88,000円〜</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※通常料金はランク別で眉1回60,000〜80,000円（銀座本院）、トップアーティスト2回150,000円と幅があります。料金はランク・院・キャンペーンで変動します。リップ・アイラインは公式で要確認です。正確な総額はカウンセリングでご確認ください。</p>
          <p className="text-sm text-gray-600 mt-3">5社の実質総額の横並び比較は<Link href="/compare/price/" className="text-rose-600 underline">アートメイク料金比較DB</Link>、全項目の比較は<Link href="/compare/all-clinics/" className="text-rose-600 underline">全5クリニック比較</Link>をご覧ください。</p>
        </div>
      </section>

      {/* キャンペーン・割引情報 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 mb-8 border border-rose-100">
            <h3 className="text-lg font-bold mb-3">割引・モニター情報</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">●</span>眉モニター2回 計88,000〜98,000円（平日34,900円/回〜）</li>
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">●</span>クリーム麻酔0円・初診料0円</li>
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">●</span>全国27院で通いやすい</li>
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
                {['エアリーブロウ（ふんわり毛並み）で自然な仕上がりを目指せる', 'クリーム麻酔0円・初診料0円と諸費用が抑えめ', 'モニター価格で眉2回88,000円〜（平日34,900円/回〜）', '全国27院で通いやすさ最強クラス', '指名料5,500〜11,000円と分かりやすい', 'はじめての方のカウンセリングが丁寧との声'].map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><span className="text-green-500 font-bold">✓</span>{m}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4 text-red-700">デメリット</h3>
              <ul className="space-y-2">
                {['通常料金がランク制で幅があり総額が分かりにくい', 'リップ・アイラインの料金は公式で要確認', '人気のため土日の予約が取りにくいことがある', 'アーティストによって仕上がりに差があるという指摘', 'カウンセリングのみの場合3,300円がかかる'].map((d, i) => (
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
          <h2 className="text-3xl font-bold text-center mb-8">FIRST ARTMAKEはこんな方におすすめ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">&#10003; ふんわり自然な毛並み眉を求める方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">&#10003; 全国27院から通いやすい院を探す方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">&#10003; 麻酔・初診の諸費用を抑えたい方（0円）</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">&#10003; モニター価格で費用を抑えたい方</p></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">&#10007; 料金を事前に確定させたい方 → クレアージュがおすすめ</p></div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">&#10007; 豊富な症例実績を重視する方 → メディカルブローがおすすめ</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">よくある質問</h2>
          <div className="space-y-4">
            {[
              { q: 'ファーストアートメイクの眉アートメイクの料金は？', a: '通常料金はランク別で眉1回60,000〜80,000円（銀座本院）、トップアーティスト2回150,000円です（2026年6月12日公式確認・税込）。モニター価格なら眉2回88,000〜98,000円（平日34,900円/回〜）。指名料5,500〜11,000円が別途かかりますが、クリーム麻酔・初診料は0円です。リップ・アイラインの料金は公式で要確認です。' },
              { q: 'ファーストアートメイクは何院ありますか？', a: '全国27院を展開しており、通いやすさは最強クラスです（2026年6月12日確認）。料金はランクや院によって異なる場合があるため、お住まいに近い院の最新料金を公式で確認しましょう。' },
              { q: 'ファーストアートメイクの施術は痛いですか？', a: 'クリーム麻酔（0円）を使用するのが一般的で、口コミでは「思ったより痛くなかった」という傾向の声が見られます。痛みの感じ方には個人差があるため、不安な場合は事前に相談しましょう。アートメイクは医療機関で行う医療行為です。' },
              { q: 'エアリーブロウとは何ですか？', a: 'ふんわりした毛並み感を出すことを目指す眉のデザイン技法です。すっぴんでも自然に見えやすい仕上がりを狙えますが、仕上がりやデザインの方向性には個人差があるため、カウンセリングで希望を伝えて確認しましょう。' },
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
      <Link href="/review/true-design/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">トゥルーデザインクリニックの口コミ・評判</p>
      </Link>
      <Link href="/compare/price/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">アートメイク料金比較DB</p>
      </Link>
      <Link href="/compare/all-clinics/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">全5クリニック完全比較</p>
      </Link>
      <Link href="/purpose/first-time/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">目的別</span>
        <p className="font-semibold mt-1">初めてのアートメイクガイド</p>
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
          <h2 className="text-4xl font-bold mb-6">FIRST ARTMAKEで自然な眉を</h2>
          <p className="text-xl mb-8">全国27院・モニター2回88,000円〜。まずは無料カウンセリングから。</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://t.felmat.net/fmcl?ak=S10480F.1.7147979S.G135747X" target="_blank" rel="sponsored noopener noreferrer" className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">FIRST ARTMAKE 公式サイトへ →</a>
            <Link href="/compare/all-clinics/" className="border-2 border-white text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-white/10 transition-colors">他のクリニックと比較する</Link>
          </div>
          <p className="text-sm mt-6 opacity-80">最新料金・予約は公式サイトでご確認ください。アートメイクは医療機関で行う医療行為です。</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4">
        <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "ファーストアートメイクの眉アートメイクの料金は？", "acceptedAnswer": {"@type": "Answer", "text": "通常料金はランク別で眉1回60,000〜80,000円（銀座本院）、トップアーティスト2回150,000円です（2026年6月12日公式確認・税込）。モニター価格なら眉2回88,000〜98,000円（平日34,900円/回〜）。指名料5,500〜11,000円が別途かかりますが、クリーム麻酔・初診料は0円です。リップ・アイラインの料金は公式で要確認です。"}}, {"@type": "Question", "name": "ファーストアートメイクは何院ありますか？", "acceptedAnswer": {"@type": "Answer", "text": "全国27院を展開しており、通いやすさは最強クラスです（2026年6月12日確認）。料金はランクや院によって異なる場合があるため、お住まいに近い院の最新料金を公式で確認しましょう。"}}, {"@type": "Question", "name": "ファーストアートメイクの施術は痛いですか？", "acceptedAnswer": {"@type": "Answer", "text": "クリーム麻酔（0円）を使用するのが一般的で、口コミでは「思ったより痛くなかった」という傾向の声が見られます。痛みの感じ方には個人差があるため、不安な場合は事前に相談しましょう。アートメイクは医療機関で行う医療行為です。"}}, {"@type": "Question", "name": "エアリーブロウとは何ですか？", "acceptedAnswer": {"@type": "Answer", "text": "ふんわりした毛並み感を出すことを目指す眉のデザイン技法です。すっぴんでも自然に見えやすい仕上がりを狙えますが、仕上がりやデザインの方向性には個人差があるため、カウンセリングで希望を伝えて確認しましょう。"}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "ファーストアートメイク", "item": "https://artmake-hikaku.com/review/first-artmake/"}]}) }} />
    </main>
  )
}
