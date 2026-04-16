import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイク手彫りと機械彫りの違い｜仕上がり・痛み・持続・料金を徹底比較【2026年最新】',
  description: 'アートメイクの手彫り（マイクロブレーディング）と機械彫り（マシン）の違いを徹底比較。仕上がり・痛み・持続期間・料金・向いている人まで詳しく解説。4D（コンビネーション）についても紹介。',
  keywords: 'アートメイク 手彫り 機械 違い,アートメイク 手彫り,アートメイク マシン,マイクロブレーディング 機械彫り',
  openGraph: {
    title: 'アートメイク手彫りと機械彫りの違い｜仕上がり・痛み・持続・料金を徹底比較',
    description: 'アートメイクの手彫りと機械彫りの違いを仕上がり・痛み・持続・料金で徹底比較。',
    type: 'article',
  },
}

const comparisonItems = [
  { category: '施術方法', handmade: '専用ペン型ツールで施術者が1本ずつ手作業で描く', machine: '電動マシンで細かいドットを均一に打ち込む' },
  { category: '仕上がり', handmade: '1本1本の毛並みを再現。自眉のようなナチュラルさ', machine: 'ふんわりパウダー状。メイクしたような仕上がり' },
  { category: '自然さ', handmade: '★★★★★（毛並みが自然）', machine: '★★★★☆（パウダーメイク風）' },
  { category: '痛み', handmade: 'やや感じやすい（チクチク・引っかく感覚）', machine: '比較的少ない（振動＋軽い痛み）' },
  { category: '施術時間', handmade: '約2〜3時間（手作業のため長め）', machine: '約1.5〜2時間（機械のため効率的）' },
  { category: '持続期間', handmade: '1〜1.5年（細い線のため退色しやすい）', machine: '1〜2年（面で色を入れるため持ちが良い）' },
  { category: '料金相場', handmade: '8〜15万円（2回セット）', machine: '5〜12万円（2回セット）' },
  { category: '技術依存度', handmade: '非常に高い（施術者の腕で差が出る）', machine: '中程度（マシンの精度で安定しやすい）' },
  { category: '色ムラ', handmade: '施術者の技術による（上手ければ少ない）', machine: '起きにくい（機械で均一に入れるため）' },
  { category: '脂性肌との相性', handmade: '△（にじみやすい）', machine: '◎（面で入れるため定着しやすい）' },
  { category: 'リタッチ', handmade: '部分的な補充が可能', machine: '全体的な色の補充に適する' },
  { category: '代表的な技法', handmade: '3Dストローク、6Dストローク、7Dストローク', machine: 'パウダー眉（2D）、グラデーション眉' },
]

const suitability = {
  handmade: [
    '自眉のような自然な毛並みが欲しい方',
    '眉毛が薄い・部分的に欠けている方',
    'すっぴんでも自然に見せたい方',
    '普通肌〜乾燥肌の方',
    'デザインの自由度を重視する方',
    '技術力の高い施術者を指名できる方',
  ],
  machine: [
    'ふんわりメイク風の仕上がりが好みの方',
    '脂性肌・混合肌の方',
    '色持ちの良さを重視する方',
    'なるべく痛みを少なくしたい方',
    '施術時間を短くしたい方',
    'コストパフォーマンスを重視する方',
  ],
}

const combinationFeatures = [
  { title: '毛並み感＋ふんわり感の両立', desc: 'ストロークで眉毛の毛並みを描き、その上からパウダーでふんわり感をプラス。両技法の良いとこ取りで、立体的かつ自然な仕上がりを実現します。' },
  { title: 'あらゆる肌質に対応', desc: '手彫り部分で自然さを、機械彫り部分で定着力を確保するため、脂性肌の方でも比較的きれいに定着。肌質を選ばない万能な技法です。' },
  { title: 'デザインの幅が広がる', desc: '眉頭はストロークでナチュラルに、眉尻はパウダーでくっきりと、部位ごとに使い分けが可能。より複雑で美しいデザインが実現します。' },
  { title: '持続期間が長め', desc: 'パウダーで面の色を補うため、ストローク単体よりも持続期間が長くなる傾向があります。リタッチの頻度を抑えられるのもメリット。' },
]

const clinics = [
  { name: 'メディカルブロー', technique: '6Dストローク（手彫り）', point: '独自の超極細ニードルによる繊細な手彫りが強み。年間60,000以上の症例実績で安定した品質。ストローク（手彫り）を検討するなら第一候補。', price: '55,000円〜(2回セット)', badge: '手彫りNo.1' },
  { name: 'デイジークリニック', technique: 'dazzy brow（コンビネーション）', point: 'パウダー＋ストロークを融合した独自技法「dazzy brow」が大人気。手彫りと機械彫り両方の良さを活かし、美しい仕上がりを実現。', price: '49,800円〜(2回セット)', badge: 'コンビネーション◎' },
  { name: 'クレアージュ東京', technique: '3回施術（手彫り・機械彫り対応）', point: '3回に分けて丁寧に施術。手彫り・機械彫りどちらにも対応し、肌質や希望に合わせて最適な技法を提案。指名料無料で安心。', price: '132,000円(3回セット)', badge: '丁寧さNo.1' },
  { name: 'トゥルーデザインクリニック', technique: '骨格分析デザイン', point: '骨格分析に基づき、手彫り・機械彫りの最適な組み合わせを提案。一人ひとりに合ったオーダーメイドの施術が受けられる。', price: '77,000円〜(2回セット)', badge: 'デザイン力◎' },
  { name: 'ファーストアートメイク', technique: '手彫り・機械彫り対応', point: '手頃な価格で手彫り・機械彫りどちらも対応。初めてのアートメイクで技法の違いを相談したい方にも親身にカウンセリング。', price: '38,500円〜(2回セット)', badge: 'コスパ◎' },
]

const faqs = [
  { q: '手彫りと機械彫り、初めてならどちらがおすすめですか？', a: '仕上がりの好みと肌質で選ぶのがベストです。自然な毛並み重視なら手彫り（ストローク）、ふんわりメイク風ならは機械彫り（パウダー）。迷う場合は両方の良さを取り入れたコンビネーション（4D）がおすすめ。デイジークリニックの「dazzy brow」は初めての方にも人気です。' },
  { q: '手彫りの方が痛いですか？', a: '一般的に手彫りの方がやや痛みを感じやすいとされますが、どちらの技法でも施術前に麻酔クリームを塗布するため、強い痛みを感じる方は少ないです。手彫りは「チクチク引っかかれる感覚」、機械彫りは「振動を感じる程度」と表現されることが多いです。' },
  { q: '手彫りと機械彫りで持続期間に差はありますか？', a: 'はい、一般的に機械彫り（パウダー）の方がやや長持ちします。手彫りは細い線で色を入れるため色素の総量が少なく、退色が早い傾向があります。手彫り：1〜1.5年、機械彫り：1〜2年が目安ですが、肌質やアフターケアにより個人差があります。' },
  { q: '4D（コンビネーション）はどんな施術ですか？', a: '手彫り（ストローク）と機械彫り（パウダー）を組み合わせた技法です。まずストロークで毛並みを描き、その上からパウダーでふんわり感をプラス。毛並みの自然さとメイク感の両立が可能で、現在最も人気の高い技法の一つです。料金は10〜18万円程度。' },
  { q: '脂性肌ですが手彫りは避けた方がいいですか？', a: '脂性肌の場合、手彫り（ストローク）単体だと線がにじんでぼやける可能性があります。機械彫り（パウダー）の方が定着しやすいため、パウダー眉またはコンビネーション（4D）がおすすめです。カウンセリングで肌質を見てもらい、最適な技法を相談しましょう。' },
  { q: '手彫りと機械彫りを同じクリニックで受けられますか？', a: 'はい、多くのクリニックで両方の技法に対応しています。クレアージュ東京やファーストアートメイクでは、カウンセリング時に肌質や希望を確認した上で、最適な技法を提案してくれます。コンビネーション（4D）として両方を組み合わせて施術することも可能です。' },
]

export default function HandmadeVsMachinePage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: '手彫り vs 機械彫り' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">HANDMADE vs MACHINE</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイク<br className="md:hidden" />手彫りと機械彫りの違い</h1>
            <p className="text-[#6B6560] leading-relaxed">
              アートメイクの「手彫り」と「機械彫り」はどう違う？<br />
              仕上がり・痛み・持続期間・料金を徹底比較し、あなたに合った技法を見つけましょう。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>手彫り（マイクロブレーディング）と機械彫り（マシン）の仕組み</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>仕上がり・痛み・持続期間・料金の比較</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>それぞれに向いている人の特徴</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>4D（コンビネーション）の特徴と魅力</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>おすすめクリニック5選</li>
            </ul>
          </div>

          {/* 手彫りとは・機械彫りとは */}
          <h2 className="text-2xl font-bold mb-6 text-center">手彫りと機械彫り、それぞれの仕組み</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="glass-card rounded-2xl p-6 border border-[var(--gold-light)]">
              <h3 className="text-lg font-bold text-[var(--gold)] mb-3 text-center">手彫り（マイクロブレーディング）</h3>
              <p className="text-sm text-[#6B6560] leading-relaxed mb-3">
                専用のペン型ツール（手彫り用ハンドピース）の先端に、複数の極細ニードルがついた刃を取り付けて施術します。施術者が手の力加減で1本ずつ線を描き、自眉の毛並みを再現していきます。
              </p>
              <p className="text-sm text-[#6B6560] leading-relaxed">
                アートメイクでは「3Dストローク」「6Dストローク」「7Dストローク」と呼ばれる技法がこれにあたります。施術者の技術力が仕上がりに直結するのが最大の特徴です。
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-[var(--gold-light)]">
              <h3 className="text-lg font-bold text-[var(--gold)] mb-3 text-center">機械彫り（マシン）</h3>
              <p className="text-sm text-[#6B6560] leading-relaxed mb-3">
                電動のアートメイクマシンを使用して施術します。マシンの先端のニードルが高速で上下運動し、皮膚の表面にドット状に色素を入れていきます。パウダーメイクのようなふんわりした仕上がりが特徴です。
              </p>
              <p className="text-sm text-[#6B6560] leading-relaxed">
                「パウダー眉（2D）」「グラデーション眉」と呼ばれる技法がこれにあたります。マシンが一定のリズムで色を入れるため、色ムラが起きにくく安定した仕上がりが得やすいです。
              </p>
            </div>
          </div>

          {/* 比較表 */}
          <h2 className="text-2xl font-bold mb-8 text-center">手彫り vs 機械彫り 徹底比較表</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white">
                  <th className="p-3 text-left rounded-tl-xl">比較項目</th>
                  <th className="p-3 text-left">手彫り（ストローク）</th>
                  <th className="p-3 text-left rounded-tr-xl">機械彫り（パウダー）</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-[var(--pink-beige)]`}>
                    <td className="p-3 font-semibold text-[var(--gold)]">{item.category}</td>
                    <td className="p-3">{item.handmade}</td>
                    <td className="p-3">{item.machine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 向いている人比較 */}
          <h2 className="text-2xl font-bold mb-8 text-center">それぞれに向いている人</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="glass-card rounded-2xl p-6 border border-[var(--gold-light)] bg-[var(--blush)]">
              <h3 className="text-lg font-bold text-[var(--gold)] mb-4 text-center">手彫りが向いている人</h3>
              <div className="space-y-3">
                {suitability.handmade.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-[var(--gold)]">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-[var(--gold-light)] bg-[var(--blush)]">
              <h3 className="text-lg font-bold text-[var(--gold)] mb-4 text-center">機械彫りが向いている人</h3>
              <div className="space-y-3">
                {suitability.machine.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-[var(--gold)]">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4Dコンビネーション */}
          <h2 className="text-2xl font-bold mb-6 text-center">4D（コンビネーション）という選択肢</h2>
          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold)]">
            <p className="text-[#6B6560] leading-relaxed mb-4">
              「手彫りと機械彫り、どちらか一方に決められない」という方におすすめなのが<strong>4D（コンビネーション）技法</strong>です。手彫り（ストローク）と機械彫り（パウダー）を組み合わせ、両方のメリットを活かした施術方法です。
            </p>
            <p className="text-[#6B6560] leading-relaxed mb-6">
              料金相場は2回セットで10〜18万円程度。デイジークリニックの「dazzy brow」はこのコンビネーション技法をベースにした独自技術で、多くの支持を集めています。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {combinationFeatures.map((f, i) => (
                <div key={i} className="bg-[var(--blush)] rounded-xl p-4">
                  <h4 className="font-bold text-sm mb-1 flex items-center gap-2">
                    <span className="text-[var(--gold)]">◎</span>{f.title}
                  </h4>
                  <p className="text-xs text-[#6B6560] ml-6">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* おすすめクリニック */}
          <h2 className="text-2xl font-bold mb-8 text-center">おすすめクリニック</h2>
          <div className="space-y-6 mb-10">
            {clinics.map((c, i) => (
              <div key={i} className={`glass-card rounded-2xl p-6 border ${i <= 1 ? 'border-[var(--gold)] shadow-lg' : 'border-[var(--pink-beige)]'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                  <h3 className="font-bold text-lg">{c.name}</h3>
                  <span className="badge-gold text-xs">{c.badge}</span>
                </div>
                <p className="text-sm text-[#8B8580] mb-1">対応技法：{c.technique}</p>
                <p className="text-sm text-[#6B6560] mb-3">{c.point}</p>
                <p className="text-sm"><strong>料金目安：</strong>{c.price}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mb-8 text-center">手彫り・機械彫りのよくある質問</h2>
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
            <h2 className="text-xl font-bold mb-4">あなたに合った技法を見つけよう</h2>
            <p className="text-[#6B6560] mb-6">手彫り・機械彫り・コンビネーション、どれが最適かはカウンセリングで相談するのが一番です。</p>
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
              <Link href="/knowledge/stroke" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">ストローク（毛並み）</p>
                <p className="text-xs text-[#8B8580] mt-1">3D・毛並みアートメイク解説</p>
              </Link>
              <Link href="/parts/eyebrow" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">眉毛アートメイク</p>
                <p className="text-xs text-[#8B8580] mt-1">眉アートメイクの総合ガイド</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
