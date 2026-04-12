import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'デイジークリニック（DAZZY CLINIC）の口コミ・評判｜アートメイク料金・技法を徹底調査【2026年最新】',
  description: 'デイジークリニック（DAZZY CLINIC）の口コミ・評判を徹底調査。世界的アーティスト監修の3種類の技法、モニター最大50%OFFの料金体系、眉・リップ・アイラインの施術を完全解説。',
}

const goodReviews = [
  { user: '20代女性（新宿本院）', rating: 5, text: 'モニター価格で眉アートメイクを受けました。手彫りで49,800円という破格の値段なのに、仕上がりがとても自然。カウンセリングも丁寧で、オンラインで事前に相談できたのも良かったです。' },
  { user: '30代女性（大阪院）', rating: 5, text: '3種類の技法から選べるのが魅力で、機械彫り+手彫りのコンビネーション施術にしました。毛並み感と色持ちの良さを両立できて大満足です。世界的なアーティスト監修だけあって技術力が高いと感じました。' },
  { user: '20代女性（福岡院）', rating: 4, text: 'リップアートメイクで通いました。すっぴんでも唇の血色が良く見えて、毎朝のメイク時間が大幅短縮。友人にも「肌きれいになった？」と言われるほど顔全体の印象が変わりました。' },
  { user: '30代女性（新宿本院）', rating: 5, text: 'アイラインの施術を受けました。目元がはっきりして、すっぴんでも自信が持てるようになりました。施術中は麻酔が効いていてほぼ無痛。スタッフの方も優しくてリラックスできました。' },
  { user: '40代女性（札幌院）', rating: 4, text: '地方でもレベルの高いアートメイクが受けられるのがありがたい。事前にオンラインカウンセリングで不安を解消できたのが決め手になりました。仕上がりも期待通りで、2回目が楽しみです。' },
]

const badReviews = [
  { user: '20代女性（新宿本院）', rating: 3, text: '人気のクリニックなので予約が取りにくいです。特に土日は1ヶ月以上先になることも。モニター枠はさらに限られるので、早めの予約が必須です。' },
  { user: '30代女性（大阪院）', rating: 2, text: 'モニター価格に惹かれて来院しましたが、実際にはモニター枠が埋まっていて通常価格になりました。モニター価格はあくまで空きがある場合のみなので注意が必要です。' },
  { user: '40代女性（福岡院）', rating: 3, text: '施術自体は満足ですが、展開院が4院と少ないのが不便。リタッチで通う際に選択肢が限られます。もう少し院数が増えてくれるとありがたいです。' },
]

const pricingTable = [
  { menu: '眉（手彫り）モニター', price: '49,800円', sessions: '2回', note: 'モニター最安' },
  { menu: '眉（機械彫り+手彫り）', price: '69,800円〜', sessions: '2回', note: '人気メニュー' },
  { menu: '眉（機械彫り）', price: '69,800円〜', sessions: '2回', note: '色持ち重視' },
  { menu: 'リップ', price: '99,000円〜', sessions: '2回', note: '血色感UP' },
  { menu: 'アイライン', price: '66,000円〜', sessions: '2回', note: '目元くっきり' },
]

export default function DazzyClinicReviewPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "クリニック" }, { name: "デイジークリニック" }]} />
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">口コミ・評判レビュー</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">DAZZY CLINIC（デイジークリニック）の口コミ・評判</h1>
          <p className="text-xl text-gray-600">世界的アーティスト監修｜3種類の技法×モニター最大50%OFF</p>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">DAZZY CLINIC 基本情報</h2>
            <table className="w-full">
              <tbody>
                {[
                  ['クリニック名', 'DAZZY CLINIC（デイジークリニック）'],
                  ['特徴', '世界で活躍する有名アーティスト監修'],
                  ['技法', '3種類（機械彫り、機械彫り+手彫り、手彫り）'],
                  ['眉毛料金', '2回 49,800円〜（モニター手彫り）、69,800円〜（機械彫り+手彫り）'],
                  ['リップ料金', '2回 99,000円〜'],
                  ['アイライン料金', '2回 66,000円〜'],
                  ['モニター割引', '最大50%OFF'],
                  ['展開院', '東京（新宿）、大阪、福岡、札幌（全4院）'],
                  ['オンライン対応', 'オンラインカウンセリング対応'],
                  ['対応施術', '眉・リップ・アイライン・ヘアライン・ほくろ'],
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
              <div className="text-3xl font-bold">4.5 / 5.0</div>
              <div className="text-sm text-gray-500 mt-1">独自採点 90/100</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { label: '料金', score: '27/30' },
                { label: '技術力', score: '22/25' },
                { label: 'カウンセリング', score: '18/20' },
                { label: '安全性', score: '14/15' },
                { label: 'アクセス', score: '9/10' },
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

      {/* 3種類の技法 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">3種類の技法から選べる</h2>
          <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-8">
            <p className="text-gray-700 mb-4">DAZZY CLINICでは、世界的に活躍する有名アーティスト監修のもと、3種類の技法を用意。お客様の希望や肌質に合わせて最適な施術を提案してくれます。</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">機械彫り</h3>
                <p className="text-sm text-gray-600">マシンを使用した施術。色持ちが良く、均一で美しい仕上がりが特徴。パウダー眉のようなふんわり感を実現。</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">機械彫り+手彫り</h3>
                <p className="text-sm text-gray-600">マシンと手彫りを組み合わせたハイブリッド施術。毛並み感と色持ちを両立した人気No.1の技法。</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">手彫り</h3>
                <p className="text-sm text-gray-600">手作業で1本1本描く繊細な施術。最も自然な毛並み感を実現。すっぴんでも違和感のない仕上がり。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金表 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">施術メニュー別料金表（税込）</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr><th className="p-3">メニュー</th><th className="p-3">料金</th><th className="p-3">回数</th><th className="p-3">備考</th></tr>
              </thead>
              <tbody>
                {pricingTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-rose-50/30' : ''}>
                    <td className="p-3 font-semibold">{row.menu}</td><td className="p-3 text-center">{row.price}</td><td className="p-3 text-center">{row.sessions}</td><td className="p-3 text-sm text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">※ モニター価格は最大50%OFF。枠に限りがあるため早めの予約がおすすめです。</p>
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
                {['世界的アーティスト監修の高い技術力', '3種類の技法から自分に合った施術を選べる', 'モニター最大50%OFFで業界最安クラス', '眉2回49,800円〜の圧倒的コスパ', 'オンラインカウンセリング対応で来院前に相談可能', 'リップ・アイラインなど幅広い施術メニュー', '札幌から福岡まで全国4院展開'].map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><span className="text-green-500 font-bold">✓</span>{m}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4 text-red-700">デメリット</h3>
              <ul className="space-y-2">
                {['展開院が4院と少なめ', 'モニター枠に限りがある', '人気院は予約が取りにくい', 'モニター以外の通常料金はやや高め', '地方（名古屋・広島等）に院がない', 'ランク制ではないため指名の自由度が低い'].map((d, i) => (
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
          <h2 className="text-3xl font-bold text-center mb-8">DAZZY CLINICはこんな方におすすめ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">✅ モニター価格で安くアートメイクを受けたい方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">✅ 技法を自分で選びたい方（機械彫り・手彫り・コンビ）</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">✅ 来院前にオンラインで相談したい方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">✅ 眉以外（リップ・アイライン）も検討中の方</p></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">❌ 名古屋・広島エリアの方 → メディカルブローがおすすめ</p></div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">❌ アーティストを細かく指名したい方 → メディカルブローがおすすめ</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">よくある質問</h2>
          <div className="space-y-4">
            {[
              { q: 'DAZZY CLINICのモニター価格はいくらですか？', a: '眉アートメイクのモニター手彫り2回で49,800円が最安です。通常価格から最大50%OFFになりますが、モニター枠には限りがあるため早めの予約をおすすめします。' },
              { q: 'DAZZY CLINICの3種類の技法の違いは？', a: '「機械彫り」はマシンで均一に色を入れるパウダー仕上げ、「手彫り」は1本1本手作業で描く自然な毛並み仕上げ、「機械彫り+手彫り」は両方を組み合わせたハイブリッド施術です。迷ったらカウンセリングで相談しましょう。' },
              { q: 'DAZZY CLINICは痛いですか？', a: '施術前に麻酔クリームを塗布するため、強い痛みを感じる方は少ないです。口コミでは「チクチクする程度」「思ったより全然痛くなかった」という声が多いです。痛みに弱い方は事前に相談しましょう。' },
              { q: 'DAZZY CLINICとメディカルブローどっちがいい？', a: 'コスパ重視＋技法の選択肢ならDAZZY CLINIC、実績数＋全国展開ならメディカルブローがおすすめです。DAZZY CLINICは3種類の技法から選べるのが強み、メディカルブローは累計23万件の実績と7Dストローク®が強みです。' },
              { q: 'オンラインカウンセリングはどうやって受けられますか？', a: '公式サイトからオンラインカウンセリングの予約が可能です。ビデオ通話で自宅にいながらデザインの相談や料金の確認ができるため、遠方の方や初めての方に特におすすめです。' },
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
      <Link href="/review/creage" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">クレアージュ東京の口コミ・評判</p>
      </Link>
      <Link href="/compare/medicalbrow-vs-dazzy" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">メディカルブロー vs デイジー徹底比較</p>
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
          <h2 className="text-4xl font-bold mb-6">DAZZY CLINICで理想の眉を手に入れよう</h2>
          <p className="text-xl mb-8">モニター2回49,800円〜。まずはオンラインカウンセリングから。</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">DAZZY CLINIC公式サイトへ →</button>
            <Link href="/" className="border-2 border-white text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-white/10 transition-colors">他のクリニックと比較する</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
