import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'クレアージュ東京の口コミ・評判｜アートメイク料金・3回施術の特徴を徹底調査【2026年最新】',
  description: 'クレアージュ東京の口コミ・評判を徹底調査。施術実績10,000件以上、3回に分けて自然に定着させる独自メソッド、指名料なしの明朗会計を完全解説。良い口コミ・悪い口コミの両方を分析。',
}

const goodReviews = [
  { user: '40代女性（有楽町院）', rating: 5, text: '3回に分けて施術するので、毎回少しずつ理想の形に近づけるのが安心でした。1回目は薄めに入れて、2回目・3回目で微調整。最終的にとても自然な仕上がりになりました。40代でも浮かない眉で大満足です。' },
  { user: '50代女性（有楽町院）', rating: 5, text: '年齢的にアートメイクは派手になるのでは？と不安でしたが、カウンセリングで丁寧に相談に乗ってくれました。すっぴんでも自然な眉になり、温泉旅行でも眉を気にしなくて良くなりました。' },
  { user: '40代女性（大阪院）', rating: 4, text: '指名料がかからないのが嬉しいポイント。料金体系が明確で、追加料金の心配がありませんでした。3回セットで132,000円は他のクリニックと比べてもコスパが良いと思います。' },
  { user: '30代女性（札幌院）', rating: 5, text: '北海道でアートメイクできるクリニックが少ない中、クレアージュがあって助かりました。東京と同じクオリティで施術してもらえて満足しています。3回目が終わった後の定着具合も良好です。' },
  { user: '40代女性（名古屋院）', rating: 4, text: '友人に紹介されて行きました。最初は3回も通うのが面倒かと思いましたが、回を重ねるごとに自分に似合う形になっていくのが楽しかったです。スタッフの方も毎回同じように丁寧でした。' },
]

const badReviews = [
  { user: '30代女性（有楽町院）', rating: 3, text: '3回通わないといけないので、忙しい方には少し大変かもしれません。1回あたりの施術時間は短いですが、予約を3回取る手間があります。2回で完成するクリニックと迷いました。' },
  { user: '40代女性（福岡院）', rating: 2, text: '仕上がりには満足していますが、予約が取りにくかったです。特に土日は1ヶ月以上先になることも。3回通う必要があるので、予約の取りにくさはストレスに感じました。' },
  { user: '20代女性（大阪院）', rating: 3, text: 'デザインの種類がもう少し多いと嬉しいです。ナチュラル志向が強いクリニックなので、トレンド感のある太めの平行眉にしたい方には物足りないかもしれません。落ち着いた仕上がりが好みなら問題ないです。' },
]

const pricingTable = [
  { menu: '眉（3回セット）', price: '132,000円', perSession: '1回あたり 44,000円', note: '3回に分けて定着' },
  { menu: '眉リタッチ（1回）', price: '44,000円', perSession: '-', note: '施術後のメンテナンス' },
  { menu: 'リップ（3回セット）', price: '198,000円', perSession: '1回あたり 66,000円', note: '3回に分けて定着' },
]

export default function CreageReviewPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">口コミ・評判レビュー</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">クレアージュ東京の口コミ・評判</h1>
          <p className="text-xl text-gray-600">施術実績10,000件以上｜3回施術で自然に定着させるアートメイク</p>
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
                  ['眉毛料金', '3回セット 132,000円（1回あたり44,000円）'],
                  ['リップ料金', '3回セット 198,000円'],
                  ['リタッチ料金', '1回 44,000円'],
                  ['指名料', 'なし（追加料金不要）'],
                  ['展開院', '東京（有楽町）・大阪・札幌・名古屋・福岡（全5院）'],
                  ['主な年齢層', '40代・50代に人気'],
                  ['カウンセリング', '無料'],
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
              <div className="text-rose-500 text-4xl mb-2">★★★★★</div>
              <div className="text-3xl font-bold">4.6 / 5.0</div>
              <div className="text-sm text-gray-500 mt-1">独自採点 92/100</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { label: '料金', score: '26/30' },
                { label: '実績', score: '20/25' },
                { label: 'カウンセリング', score: '19/20' },
                { label: '安全性', score: '14/15' },
                { label: 'アクセス', score: '13/15' },
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

      {/* 3回施術の特徴解説 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">クレアージュの「3回施術」とは？</h2>
          <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-8">
            <p className="text-gray-700 mb-4">クレアージュでは、アートメイクを3回に分けて施術する独自のメソッドを採用しています。一般的なクリニックでは2回で完成させますが、3回に分けることでより自然で繊細な仕上がりを実現します。</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">1回目：ベースづくり</h3>
                <p className="text-sm text-gray-600">骨格・顔立ちに合わせたデザインを決定し、薄めに色素を入れてベースラインを作成します</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">2回目：色味の調整</h3>
                <p className="text-sm text-gray-600">1回目の定着具合を確認しながら、色の濃さや形を微調整。理想の形に近づけます</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">3回目：仕上げ</h3>
                <p className="text-sm text-gray-600">最終調整で完成度を高めます。3回に分けることで、失敗リスクを最小限に抑えられます</p>
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
          <p className="text-sm text-gray-500 mt-4 text-center">※ 指名料無料。追加料金なしの明朗会計です。</p>
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
                {['3回施術で失敗リスクが低く自然な仕上がり', '指名料なし・追加料金なしの明朗会計', '施術実績10,000件以上の安心感', '40代50代の施術経験が豊富', '全国5院展開で地方からも通える', '1回あたり44,000円のコスパの良さ', 'カウンセリング無料で相談しやすい'].map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><span className="text-green-500 font-bold">✓</span>{m}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4 text-red-700">デメリット</h3>
              <ul className="space-y-2">
                {['3回通院が必要で完成まで時間がかかる', '土日の予約が取りにくい場合がある', 'トレンド系のデザインよりナチュラル志向', 'アイライン施術の取り扱いがない', '20代向けの華やかなデザインには不向き', 'モニター割引などの大幅割引がない'].map((d, i) => (
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
          <h2 className="text-3xl font-bold text-center mb-8">クレアージュ東京はこんな方におすすめ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">✅ 自然で失敗しないアートメイクを求める方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">✅ 40代・50代で年齢に合った仕上がりを希望する方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">✅ 料金を事前に確定させたい方（明朗会計）</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">✅ 地方在住で全国展開のクリニックを探している方</p></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">❌ 2回以内で完成させたい方 → メディカルブローがおすすめ</p></div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">❌ トレンド感のある華やかな眉を希望する方 → デイジーがおすすめ</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">よくある質問</h2>
          <div className="space-y-4">
            {[
              { q: 'クレアージュのアートメイクはなぜ3回なのですか？', a: '3回に分けることで、1回ごとに色の定着具合やデザインを確認しながら微調整できます。一度に濃く入れすぎるリスクを避け、より自然で繊細な仕上がりを実現するためです。特に初めてアートメイクをする方や、失敗したくない方に適した方法です。' },
              { q: 'クレアージュ東京の口コミで多い評価は？', a: '「自然な仕上がり」「40代50代でも浮かない」「料金が明確でわかりやすい」という口コミが多いです。一方で「3回通うのが大変」「予約が取りにくい」という声もあります。全体的には高評価が多く、特に大人世代からの支持が厚いクリニックです。' },
              { q: 'クレアージュの眉アートメイクの料金は高いですか？', a: '眉3回セットで132,000円（1回あたり44,000円）です。一般的なクリニックの2回セット相場が8〜15万円程度なので、3回施術で13.2万円は比較的リーズナブルです。さらに指名料が無料なので、追加費用を気にせず通えます。' },
              { q: 'クレアージュはどの院がおすすめですか？', a: '東京（有楽町）院が最も症例数が多く、アーティストの層も厚いためおすすめです。大阪・札幌・名古屋・福岡の各院も同じ技術基準で施術を行っているため、お住まいの地域に近い院を選んで問題ありません。' },
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
      <Link href="/review/dazzy" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">デイジークリニックの口コミ・評判</p>
      </Link>
      <Link href="/compare/creage-vs-medicalbrow" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">クレアージュ vs メディカルブロー比較</p>
      </Link>
      <Link href="/compare/price" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">アートメイク料金比較表</p>
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
          <h2 className="text-4xl font-bold mb-6">クレアージュ東京で自然な眉を手に入れよう</h2>
          <p className="text-xl mb-8">3回施術で失敗しないアートメイク。まずは無料カウンセリングから。</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">クレアージュ公式サイトへ →</button>
            <Link href="/" className="border-2 border-white text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-white/10 transition-colors">他のクリニックと比較する</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
