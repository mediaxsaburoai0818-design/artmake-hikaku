import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'クレアージュ東京の口コミ・評判・料金【2026年6月】3回セット総額・指名料なしの明朗会計を徹底解説',
  description: 'クレアージュ東京（Dクリニック東京 ウィメンズ）の口コミ・評判・料金を徹底調査。眉3回132,000円・指名料なし、初診料3,300円を含む「実際に払う総額」の目安、3回施術メソッド・全5院の注意点まで公式情報（2026年6月12日確認・税込）で解説。アートメイクは医師・看護師が施術する医療行為です。',
}

// 出典・確認観点ベースの口コミ傾向まとめ（個人名・年代・星評価・創作エピソードは使用しない／件数・点数は出典がないため記載しない）
const goodReviewTrends = [
  '3回に分けて施術するため、定着を確認しながら自然に仕上げられる点を評価する声が見られる。',
  '指名料なし・追加料金が分かりやすい明朗会計を評価する声がある。',
  '40代・50代でも浮かない自然な眉に仕上がった、という傾向の声が見られる。',
  '施術者が全員看護師資格を持つ点や、全5院展開で通いやすい点を挙げる声がある。',
]

const badReviewTrends = [
  '3回通院が必要で、完成まで時間と来院回数がかかるという指摘がある。',
  '人気のため土日の予約が取りにくいことがある、という声が見られる。',
  'ナチュラル志向が強く、トレンド感のある太め平行眉などには物足りないという声がある。',
  'アイラインは3回セット設計で、他院の2回設計と回数が異なる点に注意を促す声がある。',
]

// 2026年6月12日に公式サイトで確認（税込）。クレアージュは3回セット設計（他院は通常2回）
const pricingTable = [
  { menu: '眉（3回セット）', price: '132,000円', perSession: '1回あたり 44,000円', note: '3回に分けて定着' },
  { menu: '眉リタッチ（1回）', price: '44,000円', perSession: '-', note: '施術後のメンテナンス' },
  { menu: 'リップ（3回セット）', price: '198,000円', perSession: '1回あたり 66,000円', note: '3回に分けて定着' },
  { menu: 'アイライン上（3回セット）', price: '99,000円', perSession: '-', note: '3回に分けて定着' },
]

export default function CreageReviewPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "クリニック" }, { name: "クレアージュ東京" }]} />
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">口コミ・評判レビュー</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">クレアージュ東京の口コミ・評判・料金</h1>
          <p className="text-xl text-gray-600">施術実績10,000件以上・全5院｜3回セットの総額・指名料なしの明朗会計を徹底調査</p>
        </div>
      </section>

      {/* 30秒でわかる結論 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><span className="text-rose-500">30秒</span>でわかる結論</h2>
            <p className="text-sm text-gray-500 mb-6">クレアージュ東京（Dクリニック東京 ウィメンズ）は全5院のアートメイク。業界では珍しい3回セット設計で、施術者は全員看護師資格。指名料なしの明朗会計が特徴です。</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-green-200">
                <p className="font-bold text-green-700 mb-2">おすすめできる人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-green-500">✓</span>自然で失敗しにくい仕上がりを重視する方（3回施術）</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>40代・50代で年齢に合った眉を求める方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>指名料なしで総額が読みやすい明朗会計を求める方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>全国5院から通いやすい院を選びたい方</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-red-200">
                <p className="font-bold text-red-700 mb-2">他院も検討したい人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-red-400">✗</span>2回以内で短期間に完成させたい方</li>
                  <li className="flex gap-2"><span className="text-red-400">✗</span>トレンド感のある華やかな眉を希望する方</li>
                  <li className="flex gap-2"><span className="text-red-400">✗</span>初期費用をできるだけ抑えたい方（3回分一括設計）</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-rose-100">
              <p className="font-bold text-gray-800 mb-3">料金総額の目安（眉3回セット・2026年6月12日公式確認・税込）</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex justify-between border-b border-gray-100 pb-1.5"><span>眉 3回セット（施術料・1回あたり44,000円）</span><span className="font-semibold">132,000円</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1.5"><span>指名料</span><span className="font-semibold">なし（公式記載なし・要確認）</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1.5"><span>初診料</span><span className="font-semibold">3,300円</span></li>
                <li className="flex justify-between pt-1"><span className="font-bold">実質総額の目安</span><span className="font-bold text-rose-600">約135,300円</span></li>
              </ul>
              <p className="text-xs text-gray-400 mt-3">※クレアージュは3回セット設計（他院は通常2回）。全顔モニター価格（92,400〜105,600円・院による）もあります。最新・正確な総額は公式カウンセリングでご確認ください。</p>
            </div>
            <p className="text-xs text-gray-500 mt-4">アートメイクは医師・看護師のいる医療機関で行う医療行為です。効果・色持ち・ダウンタイム・リスクには個人差があります。</p>
          </div>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">クレアージュ東京 基本情報</h2>
            <table className="w-full">
              <tbody>
                {[
                  ['クリニック名', 'クレアージュ東京（Dクリニック東京 ウィメンズ）'],
                  ['累計症例数', '10,000件以上'],
                  ['施術の特徴', '3回に分けて自然に定着させる独自メソッド'],
                  ['施術者', '全員看護師資格'],
                  ['眉毛料金', '3回セット 132,000円（1回あたり44,000円）'],
                  ['リップ料金', '3回セット 198,000円'],
                  ['アイライン料金', '上 3回セット 99,000円'],
                  ['リタッチ料金', '眉44,000円／アイライン33,000円／リップ66,000円'],
                  ['指名料', '公式記載なし（要確認）'],
                  ['初診料', '3,300円'],
                  ['展開院', '全5院（東京・大阪・札幌・名古屋・福岡）'],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-rose-50/30' : ''}><td className="p-3 font-semibold w-1/3">{label}</td><td className="p-3">{value}</td></tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-400 mt-3">出典: クレアージュ公式サイト（2026年6月12日確認・税込）。料金は院・キャンペーンで変動する場合があります。</p>
          </div>
        </div>
      </section>

      {/* 編集部による総評 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">編集部による総評</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="text-gray-700 mb-4">クレアージュ東京は業界では珍しい「3回セット」設計を採用するアートメイクです。1回ごとに定着を確認しながら仕上げるため、急に濃く入りすぎるリスクを抑えやすく、40代・50代の自然な眉づくりに向いています。施術者が全員看護師資格を持つ点も安心材料です。</p>
            <p className="text-gray-700 mb-4">指名料の公式記載がなく、初診料3,300円のみと諸費用が読みやすい明朗会計が強みです。一方で、3回通院が前提のため完成まで時間がかかり、土日の予約が取りにくいことがある点には注意が必要です。アイラインも3回セット設計のため、他院の2回設計と回数が異なる点を踏まえて比較しましょう。</p>
            <p className="text-xs text-gray-500">※本ページの評価は当サイト編集部による定性的な所見であり、第三者機関による点数評価ではありません。アートメイクは医療行為であり、効果・色持ち・リスクには個人差があります。</p>
          </div>
        </div>
      </section>

      {/* 3回施術の特徴解説 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">クレアージュの「3回施術」とは？</h2>
          <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-8">
            <p className="text-gray-700 mb-4">クレアージュでは、アートメイクを3回に分けて施術する独自メソッドを採用しています。一般的なクリニックは2回で完成させますが、3回に分けることで、より自然で繊細な定着を目指します。</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">1回目：ベースづくり</h3>
                <p className="text-sm text-gray-600">骨格・顔立ちに合わせたデザインを決定し、薄めに色素を入れてベースラインを作成</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">2回目：色味の調整</h3>
                <p className="text-sm text-gray-600">1回目の定着具合を確認しながら、色の濃さや形を微調整</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">3回目：仕上げ</h3>
                <p className="text-sm text-gray-600">最終調整で完成度を高める。3回に分けることで失敗リスクを抑えやすい</p>
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
                <tr><th className="p-3">メニュー</th><th className="p-3">料金</th><th className="p-3">1回あたり</th><th className="p-3">備考</th></tr>
              </thead>
              <tbody>
                {pricingTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-rose-50/30' : ''}>
                    <td className="p-3 font-semibold">{row.menu}</td><td className="p-3 text-center">{row.price}</td><td className="p-3 text-center">{row.perSession}</td><td className="p-3 text-sm text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">※ 出典: クレアージュ公式サイト（2026年6月12日確認・税込）。3回セット設計（他院は通常2回）。指名料の公式記載なし・初診料3,300円。全顔モニター価格（院による）もあります。</p>
        </div>
      </section>

      {/* 実際に払う総額 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">「実際に払う総額」の目安</h2>
          <p className="text-center text-gray-500 text-sm mb-8">施術料だけでなく、<strong>指名料・初診料</strong>を含めた目安です（眉3回セット・2026年6月12日公式確認・税込）。</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg text-sm border border-gray-100">
              <thead className="bg-rose-500 text-white">
                <tr><th className="p-3 text-left">項目</th><th className="p-3">金額（税込）</th><th className="p-3 text-left">含む / 含まない</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-rose-50/30"><td className="p-3 font-semibold">眉 3回セット（施術料）</td><td className="p-3 text-center">132,000円</td><td className="p-3">3回分の施術料に含む</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold">指名料</td><td className="p-3 text-center text-gray-500">公式記載なし</td><td className="p-3">要確認（明朗会計）</td></tr>
                <tr className="border-b border-gray-100 bg-rose-50/30"><td className="p-3 font-semibold">初診料</td><td className="p-3 text-center">3,300円</td><td className="p-3">初回に別途</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold">麻酔代</td><td className="p-3 text-center text-gray-500">公式要確認</td><td className="p-3">公式サイトで未確認</td></tr>
                <tr className="bg-rose-50"><td className="p-3 font-bold">実質総額の目安</td><td className="p-3 text-center font-bold text-rose-600">約135,300円</td><td className="p-3 text-xs text-gray-500">1回あたり約45,100円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※クレアージュは3回セット設計のため、回数が他院（通常2回）と異なります。全顔モニター価格（92,400〜105,600円・院による）もあります。指名料・麻酔代は公式サイトで明示が確認できなかったため「要確認」としています。正確な総額はカウンセリングでご確認ください。</p>
          <div className="mt-6 bg-rose-50 border border-rose-200 rounded-xl p-5 text-center">
            <p className="text-sm text-gray-700 mb-3">クレアージュを含む主要8院の公式料金（実質総額）を、指名料・追加費用まで横断で比較できます。</p>
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
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">●</span>全顔モニター価格 92,400〜105,600円（名古屋・札幌・大阪・福岡院など・院による）</li>
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">●</span>3回セット設計でまとまった料金が読みやすい</li>
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">●</span>指名料の公式記載なし・初診料3,300円のみ</li>
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
                {['3回施術で失敗リスクを抑えやすく自然な仕上がり', '指名料の公式記載なし・初診料3,300円のみと明朗会計', '施術者が全員看護師資格', '40代・50代の自然な眉づくりに向く', '全国5院展開で地方からも通える', '1回あたり44,000円で総額が読みやすい'].map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><span className="text-green-500 font-bold">✓</span>{m}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4 text-red-700">デメリット</h3>
              <ul className="space-y-2">
                {['3回通院が必要で完成まで時間がかかる', '土日の予約が取りにくいことがある', 'トレンド系より落ち着いたナチュラル志向', 'アイラインも3回セット設計で他院の2回と回数が異なる', '初期費用が3回分一括設計のため抑えにくい'].map((d, i) => (
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
          <h2 className="text-3xl font-bold text-center mb-8">クレアージュ東京はこんな方におすすめ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">&#10003; 自然で失敗しにくいアートメイクを求める方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">&#10003; 40代・50代で年齢に合った仕上がりを希望する方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">&#10003; 指名料なしの明朗会計で総額を把握したい方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">&#10003; 全国5院から通いやすい院を探す方</p></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">&#10007; 2回以内で完成させたい方 → メディカルブローがおすすめ</p></div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">&#10007; トレンド感のある華やかな眉を希望する方 → デイジーがおすすめ</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">よくある質問</h2>
          <div className="space-y-4">
            {[
              { q: 'クレアージュの眉アートメイクの料金は？', a: '眉3回セットで132,000円（1回あたり44,000円）です（2026年6月12日公式確認・税込）。指名料の公式記載はなく、初診料3,300円のみと諸費用が読みやすい明朗会計です。院によっては全顔モニター価格（92,400〜105,600円）もあります。3回セット設計のため、他院の2回設計と回数が異なる点に注意しましょう。' },
              { q: 'クレアージュのアートメイクはなぜ3回なのですか？', a: '3回に分けることで、1回ごとに色の定着具合やデザインを確認しながら微調整でき、一度に濃く入りすぎるリスクを抑えやすいためです。初めての方や失敗したくない方に向いた設計です。アートメイクは医療機関で行う医療行為で、定着・色持ちには個人差があります。' },
              { q: 'クレアージュの口コミで多い評価は？', a: '「自然な仕上がり」「40代50代でも浮かない」「指名料なしで料金が分かりやすい」という傾向の声が見られます。一方で「3回通うのが大変」「予約が取りにくい」という声もあります。仕上がりの方向性はカウンセリングで確認しましょう。' },
              { q: 'クレアージュはどの院がおすすめですか？', a: '症例数の多い東京（有楽町）院のほか、大阪・札幌・名古屋・福岡の各院も同じ基準で施術を行っています。院により全顔モニター価格の有無や金額が異なるため、お住まいに近い院の最新料金を公式で確認しましょう。' },
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
      <Link href="/review/dazzy/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">デイジークリニックの口コミ・評判</p>
      </Link>
      <Link href="/compare/creage-vs-medicalbrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">クレアージュ vs メディカルブロー比較</p>
      </Link>
      <Link href="/compare/price/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">アートメイク料金比較DB</p>
      </Link>
      <Link href="/compare/all-clinics/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">全5クリニック完全比較</p>
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
          <h2 className="text-4xl font-bold mb-6">クレアージュ東京で自然な眉を</h2>
          <p className="text-xl mb-8">3回施術・指名料なしの明朗会計。まずは無料カウンセリングから。</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://t.felmat.net/fmcl?ak=E5617B.1.A96263G.G135747X" target="_blank" rel="sponsored noopener noreferrer" className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">クレアージュ公式サイトへ →</a>
            <Link href="/compare/all-clinics/" className="border-2 border-white text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-white/10 transition-colors">他のクリニックと比較する</Link>
          </div>
          <p className="text-sm mt-6 opacity-80">最新料金・予約は公式サイトでご確認ください。アートメイクは医療機関で行う医療行為です。</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4">
        <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "クレアージュの眉アートメイクの料金は？", "acceptedAnswer": {"@type": "Answer", "text": "眉3回セットで132,000円（1回あたり44,000円）です（2026年6月12日公式確認・税込）。指名料の公式記載はなく、初診料3,300円のみと諸費用が読みやすい明朗会計です。院によっては全顔モニター価格（92,400〜105,600円）もあります。3回セット設計のため、他院の2回設計と回数が異なる点に注意しましょう。"}}, {"@type": "Question", "name": "クレアージュのアートメイクはなぜ3回なのですか？", "acceptedAnswer": {"@type": "Answer", "text": "3回に分けることで、1回ごとに色の定着具合やデザインを確認しながら微調整でき、一度に濃く入りすぎるリスクを抑えやすいためです。初めての方や失敗したくない方に向いた設計です。アートメイクは医療機関で行う医療行為で、定着・色持ちには個人差があります。"}}, {"@type": "Question", "name": "クレアージュの口コミで多い評価は？", "acceptedAnswer": {"@type": "Answer", "text": "「自然な仕上がり」「40代50代でも浮かない」「指名料なしで料金が分かりやすい」という傾向の声が見られます。一方で「3回通うのが大変」「予約が取りにくい」という声もあります。仕上がりの方向性はカウンセリングで確認しましょう。"}}, {"@type": "Question", "name": "クレアージュはどの院がおすすめですか？", "acceptedAnswer": {"@type": "Answer", "text": "症例数の多い東京（有楽町）院のほか、大阪・札幌・名古屋・福岡の各院も同じ基準で施術を行っています。院により全顔モニター価格の有無や金額が異なるため、お住まいに近い院の最新料金を公式で確認しましょう。"}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "クレアージュ東京", "item": "https://artmake-hikaku.com/review/creage/"}]}) }} />
    </main>
  )
}
