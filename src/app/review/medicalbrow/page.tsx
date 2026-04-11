import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'メディカルブローの口コミ・評判｜アートメイク料金・技術力を徹底調査【2026年最新】',
  description: 'メディカルブローの口コミ・評判を徹底調査。累計23万件の実績、7Dストローク®の技術力、ランク別料金体系を完全解説。良い口コミ・悪い口コミの両方を分析。',
}

const goodReviews = [
  { user: '30代女性（表参道院）', rating: 5, text: '7Dストロークで施術してもらいました。本当に1本1本の毛並みが自然で、友人にも「眉毛変えた？」と気づかれないほど。カウンセリングも丁寧で、黄金比を測りながらデザインしてくれました。' },
  { user: '20代女性（新宿院）', rating: 5, text: 'モニター価格で28,000円。この技術力でこの値段は本当にコスパ最高です。学割も使えたのでさらにお得でした。施術後のアフターケアの説明も丁寧で安心できました。' },
  { user: '40代女性（銀座院）', rating: 4, text: '年齢とともに薄くなった眉毛が自然に復活しました。派手すぎない仕上がりで、すっぴんでも違和感がありません。アーティストのランクを上げたので料金は高めでしたが、納得の仕上がりです。' },
  { user: '30代男性（六本木院）', rating: 5, text: 'メンズアートメイクで利用。男性客も多くて全然恥ずかしくなかったです。ビジネスシーンでも清潔感があると好評。毎朝の眉毛セットが不要になって時短になりました。' },
  { user: '20代女性（横浜院）', rating: 4, text: '友人の紹介でペア割を利用。2人で行ったので25%OFFになりました。施術は痛みもほとんどなく、1時間ほどで終了。2回目のリタッチが楽しみです。' },
]

const badReviews = [
  { user: '30代女性（表参道院）', rating: 2, text: 'アーティストのランクによって仕上がりに差がある印象。ノービスアーティストで安く済ませようとしましたが、もう少し上のランクにすればよかったと後悔。安さだけで選ばない方がいいです。' },
  { user: '20代女性（新宿院）', rating: 3, text: '予約が取りにくいです。特に土日は1ヶ月先まで埋まっていることも。平日に行ける方はいいですが、仕事がある方は早めの予約が必須です。' },
  { user: '40代女性（大阪院）', rating: 2, text: '電話対応が少し冷たかった印象。施術自体は満足でしたが、キャンセル料の説明が不十分で、予約変更時にキャンセル料が発生してしまいました。事前に確認すべきでした。' },
]

const pricingTable = [
  { rank: 'ノービスアーティスト', eyebrow: '25,000円', lip: '-', eyeline: '-', note: '研修修了直後' },
  { rank: 'アーティスト', eyebrow: '50,000円', lip: '70,000円', eyeline: '60,000円', note: '基本ランク' },
  { rank: 'ロイヤルアーティスト', eyebrow: '80,000円', lip: '100,000円', eyeline: '70,000円', note: '人気ランク' },
  { rank: 'マスター', eyebrow: '130,000円', lip: '130,000円', eyeline: '80,000円', note: '上級ランク' },
  { rank: 'マスタートレイナー', eyebrow: '170,000円', lip: '170,000円', eyeline: '100,000円', note: '最上位' },
]

export default function MedicalBrowReviewPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">口コミ・評判レビュー</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">メディカルブローの口コミ・評判</h1>
          <p className="text-xl text-gray-600">累計23万件超の実績｜7Dストローク®の技術力を徹底調査</p>
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
                  ['累計症例数', '23万件超（日本最多）'],
                  ['独自技術', '7Dストローク®'],
                  ['眉毛料金', '1回 25,000円〜170,000円（ランク制）'],
                  ['モニター料金', '1回 28,000円〜'],
                  ['リップ料金', '2回 70,000円〜170,000円'],
                  ['アイライン料金', '2回 60,000円〜100,000円'],
                  ['展開院', '表参道・銀座・新宿・六本木・横浜・名古屋・大阪・広島・福岡（全9院以上）'],
                  ['割引', '学割・ペア割・シニア割（最大25%OFF）'],
                  ['受賞歴', '世界大会5大会連続グランプリ、6部門制覇'],
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
              <div className="text-3xl font-bold">4.8 / 5.0</div>
              <div className="text-sm text-gray-500 mt-1">独自採点 95/100</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { label: '料金', score: '28/30' },
                { label: '実績', score: '25/25' },
                { label: 'カウンセリング', score: '18/20' },
                { label: '安全性', score: '14/15' },
                { label: 'アクセス', score: '10/10' },
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

      {/* 7Dストロークの特徴 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">7Dストローク®とは？</h2>
          <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-8">
            <p className="text-gray-700 mb-4">メディカルブロー独自の最新技術「7Dストローク®」は、従来の3D・4D眉をさらに進化させた施術法です。</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">超極細ニードル</h3>
                <p className="text-sm text-gray-600">従来より細いニードルを使用し、1本1本の毛流れを繊細に再現</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">黄金比分析</h3>
                <p className="text-sm text-gray-600">骨格・顔立ちから黄金比を算出し、最も似合う眉デザインを提案</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">自然な仕上がり</h3>
                <p className="text-sm text-gray-600">すっぴんでも浮かない、本物の眉毛と見分けがつかないレベル</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ランク別料金表 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">ランク別料金表（税込）</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr><th className="p-3">ランク</th><th className="p-3">眉（2回）</th><th className="p-3">リップ（2回）</th><th className="p-3">アイライン（2回）</th><th className="p-3">備考</th></tr>
              </thead>
              <tbody>
                {pricingTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-rose-50/30' : ''}>
                    <td className="p-3 font-semibold">{row.rank}</td><td className="p-3 text-center">{row.eyebrow}</td><td className="p-3 text-center">{row.lip}</td><td className="p-3 text-center">{row.eyeline}</td><td className="p-3 text-sm text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">※ モニター価格あり。学割・ペア割・シニア割で最大25%OFF。指名料は別途。</p>
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
                {['累計23万件超の圧倒的な実績と信頼性', '7Dストローク®で超自然な仕上がり', 'モニター1回28,000円からのコスパ', '全国9院以上で通いやすい', '学割・ペア割最大25%OFF', '世界大会5大会連続グランプリ', 'メンズアートメイクにも対応'].map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><span className="text-green-500 font-bold">✓</span>{m}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4 text-red-700">デメリット</h3>
              <ul className="space-y-2">
                {['ランク制で料金がわかりにくい', 'アーティストによって技術差がある', '人気院は予約が取りにくい', '指名料が別途かかる', '電話対応に不満の声あり', 'キャンセルポリシーが厳しめ'].map((d, i) => (
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
          <h2 className="text-3xl font-bold text-center mb-8">メディカルブローはこんな方におすすめ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">✅ 自然な毛並み眉を求める方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">✅ コスパ重視（モニター28,000円〜）</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">✅ 全国展開で地方からも通いやすい</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">✅ メンズアートメイクを検討中の方</p></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">❌ 料金を事前に確定させたい方 → クレアージュがおすすめ</p></div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">❌ 関西で40代以上の方 → トゥルーデザインがおすすめ</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">よくある質問</h2>
          <div className="space-y-4">
            {[
              { q: 'メディカルブローのおすすめランクは？', a: 'コスパ重視なら「アーティスト」（2回50,000円）、仕上がり重視なら「ロイヤルアーティスト」（2回80,000円）がおすすめです。モニター価格なら「ノービスアーティスト」で1回28,000円から体験できます。' },
              { q: 'メディカルブローは本当に痛くないですか？', a: '施術前に麻酔クリームを塗布するため、強い痛みを感じる方は少ないです。口コミでも「チクチクする程度」「毛抜きで抜く程度」という声が多いです。痛みに弱い方は事前に相談しましょう。' },
              { q: 'メディカルブローの予約はどうすれば？', a: '公式サイトまたは電話で予約可能です。人気院（表参道・新宿）は土日の予約が取りにくいため、平日がおすすめ。1〜2ヶ月前の予約をおすすめします。' },
              { q: 'メディカルブローとデイジーどっちがいい？', a: 'コスパ＋技術力ならメディカルブロー、デザインの選択肢の多さならデイジークリニックがおすすめです。メディカルブローは7Dストローク®一択ですが、デイジーは3種類の技法から選べます。' },
            ].map((faq, i) => (
              <details key={i} className="bg-gray-50 rounded-lg shadow-sm">
                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-gray-100 transition-colors">Q{i + 1}. {faq.q}</summary>
                <div className="px-6 py-4 border-t text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">メディカルブローで理想の眉を手に入れよう</h2>
          <p className="text-xl mb-8">モニター1回28,000円〜。まずは無料カウンセリングから。</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">メディカルブロー公式サイトへ →</button>
            <Link href="/" className="border-2 border-white text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-white/10 transition-colors">他のクリニックと比較する</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
