import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'トゥルーデザインクリニックの口コミ・評判｜アートメイク料金・技術力を徹底調査【2026年最新】',
  description: 'トゥルーデザインクリニックの口コミ・評判を徹底調査。「年齢に合った本当に似合う眉」を追求する独自メソッド、40代・50代の豊富な症例写真、料金体系を完全解説。関西エリアNo.1の満足度。',
}

const goodReviews = [
  { user: '50代女性（心斎橋院）', rating: 5, text: '50代になって眉毛が薄くなり悩んでいましたが、トゥルーデザインメソッドで年齢に合った自然な眉に仕上げてもらえました。若作りではなく「今の自分に似合う眉」を提案してくれたのが嬉しかったです。' },
  { user: '40代女性（心斎橋院）', rating: 5, text: 'カウンセリングで骨格や肌質、普段のメイクまで丁寧にヒアリングしてくれました。症例写真も40代の方が多く、仕上がりのイメージが持ちやすかったです。リタッチも29,700円とリーズナブルで助かります。' },
  { user: '40代女性（心斎橋院）', rating: 4, text: '他院でアートメイクをしたことがありますが、トゥルーデザインは「似合わせ力」が段違い。年齢に合ったデザインの提案力が素晴らしいです。大阪でアートメイクを探している方にはぜひおすすめしたいクリニックです。' },
  { user: '30代女性（心斎橋院）', rating: 5, text: 'リップアートメイクで通いました。血色感のある自然な仕上がりで、すっぴんでも顔色が良く見えます。2回セットで79,200円は、他のクリニックと比べてもコスパが良いと思います。' },
  { user: '50代女性（心斎橋院）', rating: 4, text: '友人の紹介で来院。アイラインを施術しましたが、目元がぱっちりして若々しい印象になりました。スタッフの対応も温かく、年齢を気にせず通える雰囲気が良いです。' },
]

const badReviews = [
  { user: '30代女性（心斎橋院）', rating: 3, text: '大阪にしか院がないので、関東在住の私にはリタッチの度に通うのが大変です。技術力は高いですが、もう少し展開を広げてほしいです。' },
  { user: '20代女性（心斎橋院）', rating: 3, text: '40代・50代向けの症例が多い印象で、20代の私には少しデザインの方向性が合わないかもと感じました。若い世代向けのトレンド眉を求める方は他院も検討した方がいいかもしれません。' },
  { user: '40代女性（心斎橋院）', rating: 2, text: '人気のためか予約が取りにくいです。特に土日は1ヶ月以上先になることも。施術自体は満足でしたが、もう少し枠を増やしてほしいです。' },
]

const pricingTable = [
  { menu: '眉（2回セット）', price: '59,400円〜', note: 'トゥルーデザインメソッド' },
  { menu: '眉リタッチ（1回）', price: '29,700円〜', note: 'リーズナブルな維持費' },
  { menu: 'リップ（2回セット）', price: '79,200円〜', note: '自然な血色感' },
  { menu: 'アイライン（2回セット）', price: '49,500円〜', note: '目元を印象的に' },
]

export default function TrueDesignReviewPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "クリニック" }, { name: "トゥルーデザイン" }]} />
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">口コミ・評判レビュー</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">トゥルーデザインクリニックの口コミ・評判</h1>
          <p className="text-xl text-gray-600">「年齢に合った本当に似合う眉」を追求する独自メソッド｜関西エリアNo.1の満足度</p>
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
                  ['眉毛料金', '2回 59,400円〜'],
                  ['リタッチ料金', '1回 29,700円〜（リーズナブル）'],
                  ['リップ料金', '2回 79,200円〜'],
                  ['アイライン料金', '2回 49,500円〜'],
                  ['展開院', '大阪（心斎橋）1院'],
                  ['実績', '関西エリアNo.1の満足度'],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-rose-50/30' : ''}><td className="p-3 font-semibold w-1/3">{label}</td><td className="p-3">{value}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 総合評価 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">総合評価</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="text-center mb-6">
              <div className="text-rose-500 text-4xl mb-2">★★★★☆</div>
              <div className="text-3xl font-bold">4.3 / 5.0</div>
              <div className="text-sm text-gray-500 mt-1">独自採点 85/100</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { label: '料金', score: '24/30' },
                { label: '技術力', score: '22/25' },
                { label: 'カウンセリング', score: '18/20' },
                { label: '安全性', score: '13/15' },
                { label: 'アクセス', score: '8/10' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-sm text-gray-500">{item.label}</div>
                  <div className="font-bold text-rose-500">{item.score}</div>
                </div>
              ))}
            </div>
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
          <p className="text-sm text-gray-500 mt-4 text-center">※ リタッチ料金29,700円〜は業界でもリーズナブルな価格帯です。</p>
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
                {['「年齢に合った似合う眉」を追求する独自メソッド', '40代・50代の症例写真が豊富で安心', 'リタッチ29,700円〜とリーズナブル', '関西エリアNo.1の高い満足度', '眉2回59,400円〜のコスパの良さ', 'リップ・アイラインも対応', '丁寧なカウンセリングで年齢に合ったデザイン提案'].map((m, i) => (
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

      {/* 良い口コミ */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">良い口コミ・評判</h2>
          <div className="space-y-4">
            {goodReviews.map((r, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-2"><span className="text-yellow-500">{'★'.repeat(r.rating)}</span><span className="text-sm text-gray-500">{r.user}</span></div>
                <p className="text-gray-600 italic">&quot;{r.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 悪い口コミ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">気になる口コミ・評判</h2>
          <div className="space-y-4">
            {badReviews.map((r, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-300">
                <div className="flex items-center gap-2 mb-2"><span className="text-yellow-500">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span><span className="text-sm text-gray-500">{r.user}</span></div>
                <p className="text-gray-600 italic">&quot;{r.text}&quot;</p>
              </div>
            ))}
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
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">&#10003; リタッチ費用を抑えたい方（29,700円〜）</p></div>
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
              { q: 'トゥルーデザインクリニックの口コミ・評判は？', a: '40代・50代の方を中心に「年齢に合った自然な眉に仕上がった」「似合わせ力が高い」と高評価の口コミが多いです。関西エリアNo.1の満足度を誇り、リピーターも多いクリニックです。' },
              { q: 'トゥルーデザインメソッドとは何ですか？', a: 'トゥルーデザインクリニック独自の技法で、年齢・骨格・肌質を総合的に分析し、「今の自分に本当に似合う眉」をデザインするメソッドです。特に40代・50代の骨格変化に対応したデザインが得意です。' },
              { q: 'トゥルーデザインクリニックの料金は高いですか？', a: '眉2回59,400円〜と平均的な価格帯です。特にリタッチ料金が29,700円〜とリーズナブルなため、長期的なメンテナンス費用を考えるとコスパに優れています。' },
              { q: 'トゥルーデザインクリニックは大阪以外にありますか？', a: '現在は大阪（心斎橋）の1院のみです。関西エリア以外の方は通院の負担を考慮する必要があります。関東在住の方はメディカルブローなど全国展開のクリニックも検討しましょう。' },
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
      <Link href="/review/medicalbrow" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">メディカルブローの口コミ・評判</p>
      </Link>
      <Link href="/review/first-artmake" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">ファーストアートメイクの口コミ・評判</p>
      </Link>
      <Link href="/compare/price" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">アートメイク料金比較表</p>
      </Link>
      <Link href="/purpose/natural" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">目的別</span>
        <p className="font-semibold mt-1">自然な仕上がりのアートメイク</p>
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
          <h2 className="text-4xl font-bold mb-6">トゥルーデザインクリニックで理想の眉を手に入れよう</h2>
          <p className="text-xl mb-8">年齢に合った「本当に似合う眉」を。まずは無料カウンセリングから。</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">トゥルーデザインクリニック公式サイトへ →</button>
            <Link href="/" className="border-2 border-white text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-white/10 transition-colors">他のクリニックと比較する</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
