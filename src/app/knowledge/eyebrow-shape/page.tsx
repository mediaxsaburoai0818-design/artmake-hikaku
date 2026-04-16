import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '眉毛の形6種類と顔型別似合う眉｜2026年トレンド・年代別おすすめ',
  description: '眉毛の形6種類（アーチ・ストレート・平行・上がり・下がり・丸眉）を徹底解説。顔型別（面長・丸顔・四角・逆三角）の似合う眉、2026年トレンド、年代別おすすめデザイン、FAQまで完全ガイド。',
  keywords: '眉毛 形,眉毛 種類,似合う眉,アートメイク 眉 デザイン,2026 眉 トレンド',
  openGraph: {
    title: '眉毛の形6種類と顔型別似合う眉｜2026年トレンド・年代別おすすめ',
    description: '眉の形6種類と顔型別似合う眉を徹底解説。',
    type: 'article',
  },
}

const shapes = [
  { name: 'アーチ眉', impression: '女性らしい・華やか', suit: '丸顔・面長', detail: '眉山がカーブを描く伝統的な形。女性らしさを引き立てるクラシックなデザイン。', icon: '🌙' },
  { name: 'ストレート眉', impression: '凛々しい・知的', suit: '面長・逆三角', detail: '直線的で眉山の高さが控えめ。小顔効果・横幅を持たせる効果があり、面長の方に人気。', icon: '➖' },
  { name: '平行眉', impression: '優しい・若々しい', suit: '丸顔・四角', detail: '水平に近い形で、顔の縦のラインを抑える効果。2020年代の主流トレンド。', icon: '〰️' },
  { name: '上がり眉', impression: '意志的・クール', suit: '丸顔・下膨れ', detail: '眉尻が上向きに流れる形。キリッとした印象でアクティブ・知的な雰囲気を演出。', icon: '⬆️' },
  { name: '下がり眉', impression: '優しい・穏やか', suit: '面長・逆三角', detail: '眉尻が下向きに流れる形。柔らかく親しみやすい印象。優しさを強調したい方向け。', icon: '⬇️' },
  { name: '丸眉', impression: '可愛い・ナチュラル', suit: '逆三角・四角', detail: '全体的に丸みのある形。可愛らしさを演出し、顔の角ばりを和らげる効果。', icon: '🔵' },
]

const faceTypes = [
  {
    type: '面長',
    feature: '顔の縦の長さが横幅より長い',
    recommend: 'ストレート眉・平行眉・下がり眉',
    reason: '横のラインを強調することで、顔の縦を短く見せる効果。アーチが強い眉は縦のラインを強調してしまうためNG。',
    avoid: '強いアーチ眉、細すぎる眉',
  },
  {
    type: '丸顔',
    feature: '顔の縦と横が近く、丸みがある',
    recommend: 'アーチ眉・上がり眉・平行眉',
    reason: '眉山にメリハリをつけることで顔を引き締めて見せる。直線的すぎる眉は丸さを強調するため避ける。',
    avoid: 'ストレート眉、下がり眉',
  },
  {
    type: '四角（ベース型）',
    feature: 'エラが張り、顔の輪郭が角ばっている',
    recommend: '平行眉・丸眉・緩やかなアーチ',
    reason: '眉に丸みを持たせることで、顔の角ばりを和らげる効果。直線的な眉は四角さを強調。',
    avoid: '強いストレート眉、上がり眉',
  },
  {
    type: '逆三角（ハート型）',
    feature: 'おでこが広くアゴが細い',
    recommend: '下がり眉・丸眉・ストレート眉',
    reason: '柔らかな印象の眉で、顔上部の広さとのバランスを取る。眉尻を下げることで優しさUP。',
    avoid: '強い上がり眉、極太眉',
  },
]

const trends2026 = [
  { icon: '🌿', title: 'ナチュラル毛並み眉', desc: '「描いた眉」ではなく「生えているような眉」が主流。7Dストロークなど1本1本毛流れを再現する技法が人気。' },
  { icon: '🎨', title: 'グラデーションカラー', desc: '眉頭は薄く、眉尻にかけて徐々に濃くする自然なグラデーション。パッと見のボリューム感も出せる。' },
  { icon: '👤', title: '骨格に合わせた個性眉', desc: '流行を追うのではなく、自分の骨格・顔型に最適化された「自分だけの眉」を追求する傾向。' },
  { icon: '🌸', title: '眉マスカラでトーン調整', desc: 'アートメイクのベースに眉マスカラを重ねて、その日のメイクや気分で色味を変える楽しみ方。' },
  { icon: '🤎', title: 'ブラウンの色幅広がる', desc: 'ブラック系は減り、ソフトブラウン・アッシュブラウン・オレンジブラウンなど肌色に合わせた色選びが主流。' },
]

const ageRecommend = [
  {
    age: '20代',
    design: 'ナチュラルふんわり眉・平行眉',
    detail: '若々しさを活かす柔らかい平行眉がおすすめ。流行に左右されすぎず、長期的に似合うベーシックデザインを選ぶと後悔しにくい。',
  },
  {
    age: '30代',
    design: '平行眉・ゆるやかアーチ眉',
    detail: '仕事での信頼感と女性らしさのバランスが求められる年代。端正な平行眉やゆるやかなアーチが人気。',
  },
  {
    age: '40代',
    design: 'アーチ眉・立体感のある毛並み眉',
    detail: '加齢で眉が薄くなりやすい年代。毛並み感のある3D・4D技法で自然なボリュームを復活させる。骨格に合わせたアーチで上品に。',
  },
  {
    age: '50代〜',
    design: 'しっかりアーチ眉・毛並みMIX',
    detail: '眉毛の減少を補いながら、顔立ちを引き立てるデザインが最適。トゥルーデザインクリニックやクレアージュ東京のような大人デザインに定評のあるクリニックがおすすめ。',
  },
]

const faqs = [
  { q: '自分に似合う眉の形はどう決めればいい？', a: 'まず自分の顔型（面長・丸顔・四角・逆三角）を把握し、その顔型に似合う眉の基本形から選ぶのがおすすめです。加えて骨格・目の大きさ・鼻の長さなどで微調整します。プロのカウンセリングで診断してもらうのが最も確実です。' },
  { q: '眉のトレンドは何年で変わりますか？', a: '3〜5年程度で大きなトレンドが変化する傾向があります。2010年代は細眉、2020年代は太めの自然眉が主流。ただしアートメイクは1〜3年で薄くなるため、極端なトレンドは避けて骨格に合った普遍的デザインを選ぶのが賢明です。' },
  { q: '年齢とともに似合う眉の形は変わる？', a: 'はい、変わります。若い頃は細眉・上がり眉が似合っても、40代以降は顔が丸くなりやすく、アーチ眉や毛並み感のある眉が似合うようになります。施術時にプロに年代に合わせたデザイン提案を依頼しましょう。' },
  { q: 'メガネをかけていても似合う眉はありますか？', a: 'メガネのフレーム形状に合わせて眉の形を選ぶと相性が良くなります。丸メガネには直線的な眉、スクエアメガネには曲線的な眉がバランス良く見えます。カウンセリング時にメガネを持参するのもおすすめ。' },
  { q: '濃い眉と薄い眉どちらが流行ですか？', a: '2020年代は「ナチュラルだがしっかり存在感のある眉」が主流です。極端に薄い・極端に濃いは時代遅れ感が出やすく、自然な毛並み感＋適度なボリュームのバランスが人気です。' },
  { q: 'アートメイクで流行デザインにするのは危険ですか？', a: '極端な流行デザイン（2010年代の細眉など）は数年後に古く感じる可能性が高いため、慎重に選ぶべきです。骨格に合った普遍的なデザインをベースにしつつ、日々のメイクで流行を取り入れるのが賢明です。' },
]

export default function EyebrowShapePage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: '眉の形・似合う眉' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">EYEBROW SHAPE GUIDE</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">眉毛の形6種類と顔型別<br className="md:hidden" />似合う眉デザイン</h1>
            <p className="text-[#6B6560] leading-relaxed">
              アートメイクは1〜3年残るため、デザイン選びは慎重に。<br />
              顔型・年齢・トレンドを踏まえた「後悔しない眉」の選び方を徹底解説。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>眉の基本6種類と印象</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>顔型別の似合う眉</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>2026年最新トレンド</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>年代別おすすめデザイン</li>
            </ul>
          </div>

          {/* 眉の6種類 */}
          <h2 className="text-2xl font-bold mb-6 text-center">眉の基本6種類</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {shapes.map((s, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{s.icon}</span>
                  <div>
                    <h3 className="font-bold">{s.name}</h3>
                    <p className="text-xs text-[var(--gold)]">印象：{s.impression}</p>
                  </div>
                </div>
                <p className="text-[#6B6560] text-sm mb-2">{s.detail}</p>
                <p className="text-xs text-[#8B8580]">似合う顔型：<strong>{s.suit}</strong></p>
              </div>
            ))}
          </div>

          {/* 顔型別 */}
          <h2 className="text-2xl font-bold mb-6 text-center">顔型別の似合う眉</h2>
          <div className="space-y-5 mb-10">
            {faceTypes.map((f, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <h3 className="font-bold text-lg mb-2">{f.type}</h3>
                <p className="text-[#8B8580] text-xs mb-3">{f.feature}</p>
                <div className="bg-[var(--blush)] rounded-xl p-4 mb-2">
                  <p className="text-sm"><strong className="text-[var(--gold)]">おすすめ：</strong>{f.recommend}</p>
                  <p className="text-xs text-[#6B6560] mt-2">{f.reason}</p>
                </div>
                <div className="bg-[#FFF0F0] rounded-xl p-3">
                  <p className="text-xs"><strong className="text-red-400">避けたい：</strong>{f.avoid}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 2026年トレンド */}
          <h2 className="text-2xl font-bold mb-6 text-center">2026年の眉トレンド</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {trends2026.map((t, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--gold-light)]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{t.icon}</span>
                  <h3 className="font-bold">{t.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* 年代別 */}
          <h2 className="text-2xl font-bold mb-6 text-center">年代別おすすめデザイン</h2>
          <div className="space-y-4 mb-10">
            {ageRecommend.map((a, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="font-bold text-lg">{a.age}</h3>
                  <span className="badge-gold text-xs">{a.design}</span>
                </div>
                <p className="text-[#6B6560] text-sm">{a.detail}</p>
              </div>
            ))}
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
            <h2 className="text-xl font-bold mb-4">デザイン提案力のあるクリニックを選ぼう</h2>
            <p className="text-[#6B6560] mb-6">骨格・年代に合わせたデザイン提案が受けられるクリニックで、理想の眉を実現しましょう。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div>
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/knowledge/stroke" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">毛並み（ストローク）</p>
                <p className="text-xs text-[#8B8580] mt-1">技法を詳しく解説</p>
              </Link>
              <Link href="/knowledge/powder-brow" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">パウダーブロウ</p>
                <p className="text-xs text-[#8B8580] mt-1">ふんわり眉の技法</p>
              </Link>
              <Link href="/purpose/natural" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">ナチュラル重視</p>
                <p className="text-xs text-[#8B8580] mt-1">自然な仕上がり</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />
    </main>
  )
}
