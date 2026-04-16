import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'ヘアラインアートメイクとは？料金・施術方法・ダウンタイム完全ガイド【2026年最新】',
  description: 'ヘアラインアートメイクの施術方法、メリット・デメリット、料金相場（1回5〜10万円）、向いている人、ダウンタイム経過を徹底解説。薄毛・生え際の悩みを解消したい方必見。',
  keywords: 'ヘアライン アートメイク,ヘアライン アートメイク 料金,生え際 アートメイク,ヘアライン アートメイク 経過',
  openGraph: {
    title: 'ヘアラインアートメイクとは？料金・施術方法・ダウンタイム完全ガイド',
    description: 'ヘアラインアートメイクの料金・施術方法・経過を徹底解説。',
    type: 'article',
  },
}

const meritDemerit = {
  merits: [
    { title: '自然な生え際を再現できる', desc: '1本1本毛を描くストローク技法で、地毛のような自然な仕上がり。植毛より手軽でダウンタイムも短い。' },
    { title: '小顔効果が期待できる', desc: '生え際のラインを整えることで、顔の輪郭が引き締まり小顔に見えます。丸型やベース型の方に特に効果的。' },
    { title: 'おでこの形をキレイに見せられる', desc: '広いおでこ、左右非対称な生え際、M字の後退などをカバーし、理想の額の形に近づけます。' },
    { title: '毎日のセットが楽になる', desc: '生え際のスカスカ感を気にせず、ヘアスタイルの幅が広がります。アップスタイルも自信を持って楽しめます。' },
    { title: '水や汗で崩れない', desc: 'アートメイクなのでプールや運動でも落ちない。パウダーで生え際を埋める手間がなくなります。' },
  ],
  demerits: [
    { title: '施術範囲が広く費用が高め', desc: '眉よりも施術範囲が広いため、1回50,000〜100,000円と高め。2回施術が推奨で総額10〜20万円。' },
    { title: 'ダウンタイムがやや長い', desc: '施術部位が広いため、赤みや腫れが5〜7日程度続くことがあります。帽子やヘアバンドで隠せます。' },
    { title: '施術者の技術力が求められる', desc: '自然に見せるには高い技術力が必要。経験豊富な施術者を選ぶことが重要です。' },
    { title: '将来のヘアスタイル変更に制約', desc: '生え際の位置を変えるとヘアスタイルに影響するため、将来の髪型変更を考慮したデザインが必要。' },
  ],
}

const suitablePersons = [
  { type: '薄毛・生え際の後退が気になる方', desc: 'M字部分や生え際の薄さをカバーし、若々しい印象を取り戻せます。男女問わず人気。' },
  { type: 'おでこが広い方', desc: '生え際のラインを数cm下げることで、おでこの面積を小さく見せ、顔全体のバランスを整えます。' },
  { type: '小顔効果を求める方', desc: '丸顔やベース型の方は生え際のラインを調整することで、フェイスラインがシャープに見えます。' },
  { type: 'ヘアスタイルの幅を広げたい方', desc: 'ポニーテールやアップスタイルにした時に生え際が気になる方。施術後は自信を持ってアレンジを楽しめます。' },
  { type: '植毛に抵抗がある方', desc: '植毛より手軽でダウンタイムが短く、費用も抑えられます。まずはアートメイクでお試しも可能。' },
]

const downtimeTimeline = [
  { day: '施術当日', status: '赤み・腫れあり', care: '患部に触れない。洗髪は控える。', color: 'bg-red-100' },
  { day: '2〜3日目', status: 'かさぶたが形成', care: '無理に剥がさない。シャンプーは患部を避ける。', color: 'bg-orange-100' },
  { day: '4〜5日目', status: 'かさぶたが自然に剥がれ始める', care: '患部を擦らない。ぬるま湯で優しく洗う。', color: 'bg-yellow-100' },
  { day: '6〜7日目', status: '赤みが落ち着く。色が一度薄く見える', care: '保湿を心がける。日焼け止めを塗る。', color: 'bg-green-100' },
  { day: '2〜4週間後', status: '色が安定。最終的な仕上がりに', care: '必要に応じて2回目の施術を予約。', color: 'bg-blue-100' },
]

const clinicPrices = [
  { name: 'メディカルブロー', score: 95, price: '88,000円〜', sessions: '2回', note: '6Dストロークで自然な毛流れを再現。経験豊富な施術者が多数。' },
  { name: 'クレアージュ東京', score: 92, price: '176,000円', sessions: '3回', note: '3回に分けて慎重に施術。指名料無料で技術力重視。' },
  { name: 'デイジークリニック', score: 90, price: '99,000円〜', sessions: '2回', note: 'ヘアライン専門の施術者が在籍。自然な仕上がりに定評。' },
  { name: 'ファーストアートメイク', score: 87, price: '80,000円〜', sessions: '2回', note: 'コスパが良い。初回カウンセリングで入念なデザイン提案。' },
  { name: 'トゥルーデザインクリニック', score: 85, price: '75,000円〜', sessions: '2回', note: '丁寧なカウンセリングでデザイン重視。骨格に合わせた提案。' },
]

const faqs = [
  { q: 'ヘアラインアートメイクは痛いですか？', a: '麻酔クリームを使用するため、強い痛みはほとんどありません。「チクチクする程度」「眉より痛くない」という声が多いです。施術中も追加麻酔が可能なので、痛みに弱い方も安心です。' },
  { q: '施術時間はどのくらいですか？', a: 'カウンセリング・デザインに30〜60分、施術に90〜120分、合計2〜3時間程度です。施術範囲が広いため、眉（1〜2時間）より長めになります。' },
  { q: 'どのくらい持ちますか？', a: '個人差はありますが、1〜2年程度です。生え際は汗をかきやすく摩擦も多い部位のため、眉（1〜3年）よりやや短い傾向があります。1〜2年に1回のリタッチで維持します。' },
  { q: 'ヘアラインアートメイクと植毛の違いは？', a: 'アートメイクは色素で毛を描く技法で、実際の毛は生えません。植毛は自毛を移植するため実際に毛が生えます。アートメイクの方が費用・ダウンタイムともに少なく手軽ですが、密度感は植毛に劣ります。' },
  { q: '施術後すぐにシャンプーできますか？', a: '施術当日は洗髪を控えてください。翌日以降は患部を避けて洗髪可能です。患部にシャンプーが触れるのは3〜4日後から。優しく洗い、ゴシゴシ擦らないようにしましょう。' },
  { q: 'MRI検査は受けられますか？', a: 'ほとんどのクリニックで使用しているFDA認可の色素はMRI対応ですが、検査前に医師にアートメイクを受けていることを伝えてください。稀に発熱感を感じることがあります。' },
]

export default function HairlinePage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '部位別', href: '/parts/eyebrow' },
            { name: 'ヘアライン' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">HAIRLINE ARTMAKE GUIDE</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">ヘアラインアートメイク<br className="md:hidden" />完全ガイド</h1>
            <p className="text-[#6B6560] leading-relaxed">
              生え際の悩みを解消するヘアラインアートメイク。<br />
              施術方法・料金相場・ダウンタイム経過まで、知っておくべき全てを解説します。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>ヘアラインアートメイクの施術方法と仕上がり</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>メリット5つ・デメリット4つ</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>料金相場（1回5〜10万円）と5クリニック比較</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>ダウンタイムの経過と注意点</li>
            </ul>
          </div>

          {/* ヘアラインアートメイクとは */}
          <h2 className="text-2xl font-bold mb-6 text-center">ヘアラインアートメイクとは</h2>
          <div className="glass-card rounded-2xl p-6 mb-10 border border-[var(--pink-beige)]">
            <p className="text-[#6B6560] text-sm leading-relaxed mb-4">
              ヘアラインアートメイクとは、生え際（前頭部の髪の毛が生え始める部分）に色素を注入し、
              自然な毛流れを描く医療アートメイクの一種です。薄毛や広いおでこ、不揃いな生え際を
              カバーし、美しい額の形と小顔効果を実現します。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[var(--blush)] rounded-xl p-4">
                <p className="font-bold text-sm mb-2 text-[var(--gold)]">ストローク技法</p>
                <p className="text-xs text-[#6B6560]">1本1本毛を描くように色素を入れる技法。自然な毛流れを再現でき、最も人気の施術方法です。</p>
              </div>
              <div className="bg-[var(--blush)] rounded-xl p-4">
                <p className="font-bold text-sm mb-2 text-[var(--gold)]">パウダー技法</p>
                <p className="text-xs text-[#6B6560]">ドット状に色素を入れてふんわりと密度感を出す技法。ストロークと組み合わせることも可能。</p>
              </div>
            </div>
          </div>

          {/* メリット・デメリット */}
          <h2 className="text-2xl font-bold mb-6 text-center">メリット・デメリット</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div>
              <h3 className="font-bold text-lg mb-4 text-center text-green-700">メリット</h3>
              <div className="space-y-3">
                {meritDemerit.merits.map((m, i) => (
                  <div key={i} className="glass-card rounded-2xl p-4 border-l-4 border-green-400">
                    <p className="font-bold text-sm mb-1">{m.title}</p>
                    <p className="text-[#6B6560] text-xs">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-center text-red-400">デメリット</h3>
              <div className="space-y-3">
                {meritDemerit.demerits.map((d, i) => (
                  <div key={i} className="glass-card rounded-2xl p-4 border-l-4 border-red-300">
                    <p className="font-bold text-sm mb-1">{d.title}</p>
                    <p className="text-[#6B6560] text-xs">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 料金相場 */}
          <h2 className="text-2xl font-bold mb-6 text-center">料金相場とクリニック比較</h2>
          <div className="glass-card rounded-2xl p-4 mb-2 border border-[var(--gold-light)] text-center">
            <p className="text-sm text-[#6B6560]">ヘアラインアートメイクの料金相場</p>
            <p className="text-3xl font-bold text-[var(--gold)] mt-1">1回 50,000〜100,000円</p>
            <p className="text-xs text-[#8B8580] mt-1">※ 施術範囲により変動。2回施術が推奨。</p>
          </div>
          <div className="overflow-x-auto mb-10">
            <table className="w-full glass-card rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white">
                  <th className="p-4 text-left text-sm">クリニック</th>
                  <th className="p-4 text-center text-sm">料金</th>
                  <th className="p-4 text-center text-sm">回数</th>
                  <th className="p-4 text-left text-sm">特徴</th>
                </tr>
              </thead>
              <tbody>
                {clinicPrices.map((c, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-[var(--blush)]' : 'bg-white/50'}>
                    <td className="p-4 text-sm">
                      <span className="font-bold">{c.name}</span>
                      <span className="badge-gold text-xs ml-1">{c.score}点</span>
                    </td>
                    <td className="p-4 text-center text-sm font-bold text-[var(--gold)]">{c.price}</td>
                    <td className="p-4 text-center text-sm">{c.sessions}</td>
                    <td className="p-4 text-sm text-[#6B6560]">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 向いている人 */}
          <h2 className="text-2xl font-bold mb-6 text-center">ヘアラインアートメイクが向いている人</h2>
          <div className="space-y-4 mb-10">
            {suitablePersons.map((p, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                  {p.type}
                </h3>
                <p className="text-[#6B6560] text-sm ml-9">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* ダウンタイム経過 */}
          <h2 className="text-2xl font-bold mb-6 text-center">ダウンタイム経過</h2>
          <div className="space-y-3 mb-10">
            {downtimeTimeline.map((d, i) => (
              <div key={i} className={`glass-card rounded-2xl p-5 ${d.color}`}>
                <div className="flex items-start gap-4">
                  <span className="font-bold text-sm whitespace-nowrap min-w-[80px]">{d.day}</span>
                  <div>
                    <p className="font-bold text-sm">{d.status}</p>
                    <p className="text-[#6B6560] text-xs mt-1">{d.care}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 注意点 */}
          <h2 className="text-2xl font-bold mb-6 text-center">施術前後の注意点</h2>
          <div className="glass-card rounded-2xl p-6 mb-10 border border-[var(--pink-beige)]">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-sm mb-3 text-[var(--gold)]">施術前の注意点</h3>
                <ul className="space-y-2 text-sm text-[#6B6560]">
                  <li className="flex items-start gap-2"><span className="text-[var(--gold)]">・</span>施術前日は飲酒を控える</li>
                  <li className="flex items-start gap-2"><span className="text-[var(--gold)]">・</span>当日はヘアカラーやパーマを避ける</li>
                  <li className="flex items-start gap-2"><span className="text-[var(--gold)]">・</span>理想のヘアラインの写真を用意する</li>
                  <li className="flex items-start gap-2"><span className="text-[var(--gold)]">・</span>施術後1週間のスケジュールを確認する</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-sm mb-3 text-[var(--gold)]">施術後の注意点</h3>
                <ul className="space-y-2 text-sm text-[#6B6560]">
                  <li className="flex items-start gap-2"><span className="text-[var(--gold)]">・</span>1週間は激しい運動・サウナを控える</li>
                  <li className="flex items-start gap-2"><span className="text-[var(--gold)]">・</span>かさぶたを無理に剥がさない</li>
                  <li className="flex items-start gap-2"><span className="text-[var(--gold)]">・</span>施術部位への直射日光を避ける</li>
                  <li className="flex items-start gap-2"><span className="text-[var(--gold)]">・</span>処方された軟膏を塗って保湿する</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mb-6 text-center">よくある質問（FAQ）</h2>
          <div className="space-y-4 mb-10">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card rounded-2xl group border border-[var(--pink-beige)]">
                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-[var(--blush)] transition-colors flex justify-between items-center">
                  <span>Q{i + 1}. {faq.q}</span>
                  <span className="text-[var(--gold)] text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 py-4 border-t border-[var(--pink-beige)] text-[#6B6560] leading-relaxed text-sm">
                  <span className="font-semibold text-[var(--gold)]">A.</span> {faq.a}
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="glass-card rounded-3xl p-8 border border-[var(--gold-light)] text-center mb-12">
            <h2 className="text-xl font-bold mb-4">ヘアラインアートメイクで理想の生え際を</h2>
            <p className="text-[#6B6560] mb-6">技術力の高いクリニックを選んで、自然で美しいヘアラインを手に入れましょう。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div>
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/parts/eyebrow" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">眉毛アートメイク</p>
                <p className="text-xs text-[#8B8580] mt-1">最も人気の部位を徹底解説</p>
              </Link>
              <Link href="/parts/lip" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">リップアートメイク</p>
                <p className="text-xs text-[#8B8580] mt-1">唇の血色感をアップする施術</p>
              </Link>
              <Link href="/knowledge/pain" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">アートメイクの痛み</p>
                <p className="text-xs text-[#8B8580] mt-1">痛みの程度と対策を解説</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
