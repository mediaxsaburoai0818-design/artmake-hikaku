import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '毛並みアートメイク（ストローク）完全ガイド｜3D・7Dの違い・料金・経過【2026年最新】',
  description: '毛並みアートメイク（ストローク/3D眉）の特徴、7Dストロークとの違い、メリット・デメリット、料金相場、施術経過を徹底解説。おすすめクリニックも紹介。',
  keywords: '毛並みアートメイク,アートメイク ストローク,3D眉 アートメイク,7Dストローク,毛並み 眉アートメイク',
  openGraph: {
    title: '毛並みアートメイク（ストローク）完全ガイド｜3D・7Dの違い・料金・経過',
    description: '毛並みアートメイク（ストローク）の特徴、7Dとの違い、おすすめクリニックを徹底解説。',
    type: 'article',
  },
}

const strokeTypes = [
  { name: '3Dストローク', method: '手彫り（ニードル）', feature: '1本1本の毛並みを再現', natural: '★★★★★', price: '8〜15万円', desc: '基本的なストローク技法。手彫りで1本ずつ線を描き、自眉のような自然な毛並みを表現します。' },
  { name: '6Dストローク', method: '超極細ニードル', feature: 'より繊細な毛並み', natural: '★★★★★+', price: '10〜17万円', desc: 'メディカルブロー独自技法。従来より細いニードルで、より繊細で美しい毛並みを実現。' },
  { name: '7Dストローク', method: '最新鋭ニードル', feature: '超精密・立体的な毛並み', natural: '★★★★★+', price: '12〜20万円', desc: '最新の技法。毛の太さ・長さ・方向を精密にコントロールし、本物と見分けがつかないレベルの仕上がり。' },
]

const meritDemerit = {
  merits: [
    { title: '圧倒的な自然さ', desc: '1本1本の毛並みを手彫りで再現するため、自眉と見分けがつかないほどナチュラルな仕上がりが最大の魅力です。' },
    { title: 'すっぴんでも美しい', desc: 'メイクを落とした後も「描いた感」がなく、自然な眉毛として馴染むため、すっぴんに自信が持てるようになります。' },
    { title: '眉毛が薄い方に最適', desc: '自眉が少ない部分に毛並みを足すことで、まるで自分の眉毛が生えているかのような仕上がりが実現します。' },
    { title: 'デザインの自由度が高い', desc: '1本ずつ手作業で描くため、毛の流れや方向、濃淡を細かくコントロールでき、理想の眉に近づけやすいです。' },
  ],
  demerits: [
    { title: '施術者の技術差が大きい', desc: '手彫りのため、施術者のスキルが仕上がりに直結します。技術力の高い施術者を選ぶことが極めて重要です。' },
    { title: '脂性肌だとにじみやすい', desc: '皮脂が多い肌質の場合、描いた線がにじんで太く見えたり、ぼやけてしまうことがあります。脂性肌の方はパウダー眉の方が適している場合も。' },
    { title: '施術時間がやや長い', desc: '1本ずつ手作業で描くため、パウダー眉（機械彫り）に比べて施術時間が長くなる傾向があります（約2〜3時間）。' },
    { title: '料金がやや高め', desc: '高度な技術と時間を要するため、パウダー眉に比べて料金が高く設定されているクリニックが多いです。' },
  ],
}

const progress = [
  { period: '施術直後', color: '濃さ：★★★★★', desc: '施術直後は線がくっきりと濃く見えます。赤みが出ることもありますが正常な反応です。1本1本の毛並みがはっきり見え、「太すぎる」「濃すぎる」と感じる方もいますが、ここから薄くなるのでご安心ください。' },
  { period: '3日〜1週間', color: '濃さ：★★★☆☆', desc: '施術部位が乾燥し、薄いかさぶたが形成されます。かさぶたとともに色素の一部が剥がれ、一時的に色が薄く見えたり、まだらに見えることがあります。絶対にかさぶたを剥がさず、自然に落ちるのを待ちましょう。' },
  { period: '2週間〜1ヶ月', color: '濃さ：★★★★☆', desc: 'かさぶたが完全に取れ、色素が肌に馴染み始めます。施術直後より40〜50%程度薄くなり、自然な毛並み感が現れます。この時期に2回目の施術（リタッチ）を行い、定着しきれなかった部分を補います。' },
  { period: '1ヶ月〜半年', color: '濃さ：★★★☆☆', desc: '色素が完全に定着し、最も自然で美しい状態になります。自眉と馴染み、周囲から「アートメイクしている」とは気づかれないレベルに。この美しさが1〜1.5年持続します。' },
]

const clinics = [
  { name: 'メディカルブロー', point: '独自の6Dストローク技術', desc: '年間症例数60,000以上を誇るアートメイク業界最大手。独自開発の「6Dストローク」は従来より極細のニードルを使用し、超繊細な毛並みを実現。ストロークを選ぶなら最もおすすめのクリニックです。施術者ランク制度があり、仕上がりのクオリティに自信あり。', price: '55,000円〜(2回セット)', badge: 'ストロークNo.1' },
  { name: 'デイジークリニック', point: 'dazzy browが人気', desc: 'ストローク単体だけでなく、パウダー＋ストロークを融合した「dazzy brow」が大人気。毛並み感とふんわり感の両方を実現したい方に。仕上がりの美しさに定評があります。', price: '49,800円〜(2回セット)', badge: 'デザイン力◎' },
  { name: 'トゥルーデザインクリニック', point: '骨格分析×ストローク', desc: '骨格分析に基づいたデザイン力が強み。一人ひとりの顔立ちに合った毛流れを提案し、ストロークの仕上がり満足度が高いクリニック。丁寧なカウンセリングで理想の眉を実現します。', price: '77,000円〜(2回セット)', badge: '分析力◎' },
  { name: 'クレアージュ東京', point: '3回施術で丁寧に定着', desc: '他院が2回施術のところ、3回に分けて慎重に色を定着させるのが特徴。ストロークの毛並みも段階的に調整でき、失敗リスクを最小限に。指名料無料で安心の料金体系。', price: '132,000円(3回セット)', badge: '丁寧さNo.1' },
  { name: 'ファーストアートメイク', point: '手頃な価格でストローク', desc: 'ストローク技法を手頃な価格で提供。初めてのアートメイクで費用を抑えつつ、毛並み感のある仕上がりを求める方に適しています。丁寧なカウンセリングで初心者も安心。', price: '38,500円〜(2回セット)', badge: 'コスパ◎' },
]

const faqs = [
  { q: 'ストローク（毛並み）アートメイクの施術は痛いですか？', a: '施術前に麻酔クリームを塗布するため、多くの方が「チクチクする程度」「眠れるくらい」と回答しています。ただし、手彫りのため機械彫りよりもやや刺激を感じる方もいます。痛みに弱い方は事前にクリニックに相談しましょう。' },
  { q: '3Dストロークと7Dストロークの違いは何ですか？', a: '基本的な技法は同じですが、使用するニードルの細さと施術の精密さが異なります。7Dは最新のニードルを使い、毛の太さ・長さ・方向をより精密にコントロール。本物の眉毛と見分けがつかないレベルの仕上がりを実現しますが、料金は高めです。' },
  { q: 'ストロークの持続期間はどのくらいですか？', a: '一般的に1〜1.5年程度です。パウダー眉に比べるとやや短い傾向があります。理由は、細い線で色を入れるため面で入れるパウダーより色素の総量が少ないから。定期的なリタッチ（年1回程度）で美しさを維持できます。' },
  { q: 'ストロークが向いていない肌質はありますか？', a: '脂性肌（オイリー肌）の方は要注意です。皮脂が多いと描いた線がにじんでぼやけやすく、仕上がりがパウダー状になってしまうことがあります。脂性肌の方はパウダー眉やコンビネーション（4D）を検討するのも一つの選択肢です。' },
  { q: 'メディカルブローの6Dストロークは他と何が違うのですか？', a: 'メディカルブローが独自に開発した超極細ニードルを使用する技法です。従来の手彫りよりも細い線が描けるため、より繊細で自然な毛並みを再現。年間60,000症例以上の実績があり、技術者のランク制度で安定した品質を提供しています。' },
  { q: 'ストローク後のアフターケアで気をつけることは？', a: '施術後1週間は、施術部位を水で濡らさない、触らない、メイクしないことが重要です。処方されたワセリンや保湿剤を指示通りに塗布してください。かさぶたは自然に剥がれるまで待ち、絶対に剥がさないこと。紫外線対策も忘れずに行いましょう。' },
]

export default function StrokePage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: 'ストローク（毛並み）アートメイク' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">STROKE / MICROBLADING GUIDE</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">毛並みアートメイク<br className="md:hidden" />（ストローク）完全ガイド</h1>
            <p className="text-[#6B6560] leading-relaxed">
              ストローク（3D/毛並み）は自眉のような自然さを追求するアートメイク技法。<br />
              7Dストロークとの違い、料金相場、経過まで徹底解説します。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>ストローク（毛並み/3D）アートメイクの特徴と施術方法</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>3D・6D・7Dストロークの違い</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>メリット・デメリットと向いている人</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>料金相場と施術後の経過</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>おすすめクリニック5選（メディカルブロー推し）</li>
            </ul>
          </div>

          {/* ストロークとは */}
          <h2 className="text-2xl font-bold mb-6 text-center">ストローク（毛並み）アートメイクとは？</h2>
          <div className="glass-card rounded-2xl p-6 mb-10 border border-[var(--pink-beige)]">
            <p className="text-[#6B6560] leading-relaxed mb-4">
              ストロークとは、専用のニードル（針）を使って1本1本の毛並みを手彫りで描いていくアートメイク技法です。「3D眉」「マイクロブレーディング」とも呼ばれ、自眉のような自然な仕上がりが最大の特徴です。
            </p>
            <p className="text-[#6B6560] leading-relaxed mb-4">
              施術者が手作業で毛の流れ・太さ・長さを一本ずつコントロールするため、その人の骨格や自眉の生え方に合わせた、オーダーメイドの眉毛が実現します。特に「すっぴんでも自然な眉でいたい」という方に圧倒的な支持を得ています。
            </p>
            <p className="text-[#6B6560] leading-relaxed">
              近年は技術の進化により、6Dストローク（メディカルブロー独自）や7Dストロークなど、より精密な技法が登場。本物の眉毛と見分けがつかないレベルの仕上がりが可能になっています。
            </p>
          </div>

          {/* 3D/6D/7D比較 */}
          <h2 className="text-2xl font-bold mb-8 text-center">3D・6D・7Dストロークの違い</h2>
          <div className="space-y-4 mb-10">
            {strokeTypes.map((s, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm text-[#8B8580]">自然さ {s.natural}</span>
                  <span className="text-sm font-semibold text-[var(--gold)]">{s.price}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-2 mb-2">
                  <p className="text-sm text-[#6B6560]"><strong>施術方法：</strong>{s.method}</p>
                  <p className="text-sm text-[#6B6560]"><strong>仕上がり：</strong>{s.feature}</p>
                </div>
                <p className="text-sm text-[#6B6560]">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* メリット・デメリット */}
          <h2 className="text-2xl font-bold mb-8 text-center">ストロークのメリット・デメリット</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div>
              <h3 className="text-lg font-bold text-[var(--gold)] mb-4 text-center">メリット</h3>
              <div className="space-y-4">
                {meritDemerit.merits.map((m, i) => (
                  <div key={i} className="glass-card rounded-2xl p-4 border border-[var(--gold-light)]">
                    <h4 className="font-bold text-sm mb-1 flex items-center gap-2">
                      <span className="text-[var(--gold)]">◎</span>{m.title}
                    </h4>
                    <p className="text-xs text-[#6B6560] ml-6">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-red-400 mb-4 text-center">デメリット</h3>
              <div className="space-y-4">
                {meritDemerit.demerits.map((d, i) => (
                  <div key={i} className="glass-card rounded-2xl p-4 border border-[var(--pink-beige)]">
                    <h4 className="font-bold text-sm mb-1 flex items-center gap-2">
                      <span className="text-red-400">△</span>{d.title}
                    </h4>
                    <p className="text-xs text-[#6B6560] ml-6">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 向いている人 */}
          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)] bg-[var(--blush)]">
            <h2 className="text-xl font-bold mb-4 text-center">ストロークが向いている人</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                '自眉のような自然な仕上がりを求める方',
                '眉毛が薄い・少ない方',
                '普通肌〜乾燥肌の方',
                'すっぴんでも美しい眉でいたい方',
                '眉毛の部分的な薄さを補いたい方',
                'メイクで眉毛を描くのが苦手な方',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="text-[var(--gold)]">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 料金相場 */}
          <h2 className="text-2xl font-bold mb-6 text-center">ストロークの料金相場</h2>
          <div className="glass-card rounded-2xl p-6 mb-10 border border-[var(--pink-beige)]">
            <p className="text-[#6B6560] leading-relaxed mb-4">
              ストローク（毛並み）アートメイクの料金相場は<strong>2回セットで8万円〜15万円程度</strong>です。パウダー眉に比べると、手彫りで高度な技術が必要なため、やや高めの設定が一般的です。
            </p>
            <div className="bg-[var(--blush)] rounded-xl p-4 mb-3">
              <p className="text-sm text-[#6B6560]">
                <strong className="text-[var(--gold)]">6D/7Dストロークの場合：</strong>12万円〜20万円程度。最新技法のため料金は高めですが、仕上がりのクオリティは格段に向上します。メディカルブローの6Dストロークは55,000円〜と業界水準よりリーズナブル。
              </p>
            </div>
            <div className="bg-[var(--blush)] rounded-xl p-4">
              <p className="text-sm text-[#6B6560]">
                <strong className="text-[var(--gold)]">注意点：</strong>施術者のランクによって料金が変わるクリニックが多いです。ランクが上がるほど高額になりますが、仕上がりの品質も向上します。指名料が別途かかるクリニックもあるので、総額を事前に確認しましょう。
              </p>
            </div>
          </div>

          {/* 施術経過 */}
          <h2 className="text-2xl font-bold mb-8 text-center">施術後の経過</h2>
          <div className="space-y-6 mb-10">
            {progress.map((p, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-4 py-1 rounded-full text-sm font-bold">{p.period}</span>
                  <span className="text-sm text-[#8B8580]">{p.color}</span>
                </div>
                <p className="text-sm text-[#6B6560]">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* おすすめクリニック */}
          <h2 className="text-2xl font-bold mb-8 text-center">ストロークおすすめクリニック</h2>
          <div className="space-y-6 mb-10">
            {clinics.map((c, i) => (
              <div key={i} className={`glass-card rounded-2xl p-6 border ${i === 0 ? 'border-[var(--gold)] shadow-lg' : 'border-[var(--pink-beige)]'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                  <h3 className="font-bold text-lg">{c.name}</h3>
                  <span className="badge-gold text-xs">{c.badge}</span>
                </div>
                <p className="text-sm text-[var(--gold)] font-semibold mb-2">{c.point}</p>
                <p className="text-sm text-[#6B6560] mb-3">{c.desc}</p>
                <p className="text-sm"><strong>料金目安：</strong>{c.price}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mb-8 text-center">ストロークアートメイクのよくある質問</h2>
          <div className="space-y-4 mb-10">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <h3 className="font-bold text-sm mb-3 flex items-start gap-2">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0">Q</span>
                  {faq.q}
                </h3>
                <p className="text-sm text-[#6B6560] ml-8">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="glass-card rounded-3xl p-8 border border-[var(--gold-light)] text-center mb-12">
            <h2 className="text-xl font-bold mb-4">自眉のような自然な眉を手に入れよう</h2>
            <p className="text-[#6B6560] mb-6">ストロークなら、すっぴんでも自信の持てる美しい眉に。まずは無料カウンセリングへ。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/knowledge/powder-brow" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">パウダー眉（2D）</p>
                <p className="text-xs text-[#8B8580] mt-1">ふんわりメイク風の仕上がり</p>
              </Link>
              <Link href="/knowledge/handmade-vs-machine" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">手彫り vs 機械彫り</p>
                <p className="text-xs text-[#8B8580] mt-1">違いと選び方を徹底比較</p>
              </Link>
              <Link href="/review/medicalbrow" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">メディカルブロー口コミ</p>
                <p className="text-xs text-[#8B8580] mt-1">6Dストロークの評判は？</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
