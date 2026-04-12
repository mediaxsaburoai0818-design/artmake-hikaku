import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'ファーストアートメイクの口コミ・評判｜料金・カウンセリングを徹底調査【2026年最新】',
  description: 'FIRST ARTMAKE（ファーストアートメイク）の口コミ・評判を徹底調査。初心者特化の丁寧なカウンセリング、銀座駅徒歩3分の好立地、眉1回38,500円〜の料金体系を完全解説。良い口コミ・悪い口コミの両方を分析。',
}

const goodReviews = [
  { user: '20代女性（銀座院）', rating: 5, text: '初めてのアートメイクで不安でしたが、カウンセリングが本当に丁寧で安心できました。痛みもほとんどなく、仕上がりもナチュラルで大満足です。「初心者向け」というコンセプト通り、はじめての方にぴったりだと思います。' },
  { user: '30代女性（銀座院）', rating: 5, text: '銀座駅から徒歩3分で通いやすいのが決め手でした。施術中も細かく声をかけてくれて、痛みの確認もこまめにしてくれます。眉の形も骨格に合わせて提案してくれて、自然な仕上がりに感動しました。' },
  { user: '40代女性（銀座院）', rating: 4, text: 'アフターケアの説明がとても丁寧で、施術後の経過についても詳しく教えてもらえました。2回セットで71,500円は他院と比較してもリーズナブル。色持ちも良く、2ヶ月経った今も自然な眉をキープしています。' },
  { user: '20代女性（銀座院）', rating: 5, text: 'リップアートメイクで伺いました。事前のカラー診断で自分に合った色味を提案してもらえて、仕上がりがとても自然。すっぴんでも血色が良く見えるようになりました。痛みも思ったより全然少なかったです。' },
  { user: '30代女性（銀座院）', rating: 4, text: 'アイラインの施術を受けました。目元がパッと華やかになり、毎朝のメイク時間が大幅に短縮されました。施術前の説明が丁寧で、初心者でも安心して任せられるクリニックです。' },
]

const badReviews = [
  { user: '20代女性（銀座院）', rating: 3, text: '銀座に1院しかないので、地方から通うには少し不便です。技術やカウンセリングには満足していますが、もう少し院数が増えてくれると嬉しいです。' },
  { user: '30代女性（銀座院）', rating: 2, text: '土日の予約が非常に取りにくいです。人気があるのはわかりますが、2週間以上先しか空きがないこともあり、仕事が忙しい時期は通いづらかったです。' },
  { user: '40代女性（銀座院）', rating: 3, text: '施術自体は満足ですが、大手と比べると症例数が少ないのが少し気になりました。もう少し実績を見せてもらえると安心感が増すかなと思います。' },
]

const pricingTable = [
  { menu: '眉アートメイク（1回）', price: '38,500円〜', note: '初回お試し' },
  { menu: '眉アートメイク（2回セット）', price: '71,500円〜', note: 'おすすめ' },
  { menu: 'リップアートメイク（1回）', price: '49,500円〜', note: '' },
  { menu: 'アイライン（1回）', price: '33,000円〜', note: '' },
]

export default function FirstArtmakeReviewPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "クリニック" }, { name: "ファーストアートメイク" }]} />
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">口コミ・評判レビュー</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">FIRST ARTMAKE（ファーストアートメイク）の口コミ・評判</h1>
          <p className="text-xl text-gray-600">誰でもはじめられる安心のアートメイク｜初心者特化の丁寧カウンセリング</p>
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
                  ['コンセプト', '「誰でもはじめられる安心のアートメイク」'],
                  ['特徴', '初心者に特化した丁寧なカウンセリング'],
                  ['眉毛料金', '1回 38,500円〜 / 2回セット 71,500円〜'],
                  ['リップ料金', '1回 49,500円〜'],
                  ['アイライン料金', '1回 33,000円〜'],
                  ['展開院', '東京（銀座）1院'],
                  ['アクセス', '銀座駅 徒歩3分'],
                  ['施術の特徴', '痛みの少ない施術、アフターケア充実'],
                  ['対象', 'アートメイク初心者・はじめての方に最適'],
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
              <div className="text-sm text-gray-500 mt-1">独自採点 87/100</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { label: '料金', score: '24/30' },
                { label: 'カウンセリング', score: '19/20' },
                { label: '技術力', score: '17/20' },
                { label: '安全性・ケア', score: '14/15' },
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

      {/* 初心者特化の特徴 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">FIRST ARTMAKEが初心者に選ばれる理由</h2>
          <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-8">
            <p className="text-gray-700 mb-4">「誰でもはじめられる安心のアートメイク」をコンセプトに、初めてアートメイクを受ける方に特化したサービスを提供しています。</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">丁寧なカウンセリング</h3>
                <p className="text-sm text-gray-600">初心者の不安を解消する充実のカウンセリング。施術内容やリスクについても詳しく説明</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">痛みの少ない施術</h3>
                <p className="text-sm text-gray-600">麻酔クリームの使用と丁寧な施術で、痛みを最小限に抑える技術を採用</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">充実のアフターケア</h3>
                <p className="text-sm text-gray-600">施術後の経過説明やケア方法まで丁寧にサポート。不安な時はいつでも相談可能</p>
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
          <p className="text-sm text-gray-500 mt-4 text-center">※ 料金は税込表示です。詳細は公式サイトでご確認ください。</p>
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
                {['初心者に特化した丁寧なカウンセリング', '痛みの少ない施術で安心', '銀座駅徒歩3分の好アクセス', 'アフターケアが充実', '眉2回セット71,500円〜のリーズナブルな価格', 'リップ・アイラインにも対応', '「はじめて」に寄り添う安心のコンセプト'].map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><span className="text-green-500 font-bold">✓</span>{m}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4 text-red-700">デメリット</h3>
              <ul className="space-y-2">
                {['銀座1院のみで地方からは通いにくい', '土日の予約が取りにくい', '大手と比較すると症例数が少ない', '割引制度が少なめ', 'メンズアートメイクの実績が不明'].map((d, i) => (
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
          <h2 className="text-3xl font-bold text-center mb-8">FIRST ARTMAKEはこんな方におすすめ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">✅ アートメイクが初めてで不安な方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">✅ 丁寧なカウンセリングを重視する方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">✅ 銀座エリアでアクセス良好なクリニックを探している方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">✅ 痛みに敏感で痛みの少ない施術を希望する方</p></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">❌ 地方在住で東京に通えない方 → 全国展開のメディカルブローがおすすめ</p></div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">❌ 豊富な症例実績を重視する方 → メディカルブロー・デイジーがおすすめ</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">よくある質問</h2>
          <div className="space-y-4">
            {[
              { q: 'FIRST ARTMAKEは本当に初心者向けですか？', a: 'はい。「誰でもはじめられる安心のアートメイク」をコンセプトに、初めての方に特化した丁寧なカウンセリングと施術を提供しています。施術内容やリスク、アフターケアまで詳しく説明してもらえるので、初心者の方でも安心です。' },
              { q: 'FIRST ARTMAKEの施術は痛いですか？', a: '施術前に麻酔クリームを塗布するため、痛みは最小限に抑えられます。口コミでも「思ったより痛くなかった」「チクチクする程度」という声が多く、痛みに敏感な方でも安心して受けられます。' },
              { q: 'FIRST ARTMAKEの眉アートメイクは1回と2回セットどちらがおすすめ？', a: '2回セット（71,500円〜）がおすすめです。アートメイクは通常2回の施術で色の定着を図ります。1回目で形を作り、2回目で微調整と色味の定着を行うため、より自然で長持ちする仕上がりになります。' },
              { q: 'FIRST ARTMAKEへのアクセスは？', a: '銀座駅から徒歩3分の好立地です。銀座エリアにあるため、仕事帰りやお買い物のついでにも通いやすい場所にあります。' },
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
      <Link href="/review/true-design" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">トゥルーデザインクリニックの口コミ・評判</p>
      </Link>
      <Link href="/compare/price" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">アートメイク料金比較表</p>
      </Link>
      <Link href="/purpose/first-time" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
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
          <h2 className="text-4xl font-bold mb-6">FIRST ARTMAKEで安心のアートメイクデビュー</h2>
          <p className="text-xl mb-8">眉1回 38,500円〜。初心者に寄り添う丁寧なカウンセリングから。</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">FIRST ARTMAKE 公式サイトへ →</button>
            <Link href="/" className="border-2 border-white text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-white/10 transition-colors">他のクリニックと比較する</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
