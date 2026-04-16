import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'パウダー眉アートメイク完全ガイド｜特徴・料金・経過・他技法との比較【2026年最新】',
  description: 'パウダー眉（2D）アートメイクの特徴、施術方法、メリット・デメリット、3D/4D/7Dとの違いを徹底比較。料金相場や施術経過、向いている人の特徴まで詳しく解説します。',
  keywords: 'パウダー眉 アートメイク,パウダー眉 特徴,2D眉 アートメイク,パウダー眉 料金,パウダー眉 経過',
  openGraph: {
    title: 'パウダー眉アートメイク完全ガイド｜特徴・料金・経過・他技法との比較',
    description: 'パウダー眉（2D）アートメイクの特徴、施術方法、メリデメ、他技法との比較を徹底解説。',
    type: 'article',
  },
}

const meritDemerit = {
  merits: [
    { title: 'ふんわり自然なパウダー仕上がり', desc: 'パウダーでメイクしたような柔らかい仕上がりになり、すっぴんでも浮きにくいナチュラルな印象を実現します。' },
    { title: '色ムラが起きにくい', desc: '面で色を入れるため、ストロークに比べて色ムラやまだら感が出にくく、均一で美しい仕上がりが期待できます。' },
    { title: '施術時間が比較的短い', desc: '機械（マシン）彫りで施術するため、手彫りのストロークに比べて施術時間が短く済むケースが多いです。' },
    { title: '脂性肌の方にも向いている', desc: 'ストロークは皮脂が多いと線がにじみやすいですが、パウダー眉は面で色を入れるため脂性肌の方でも比較的きれいに定着します。' },
    { title: 'リタッチで調整しやすい', desc: '均一に色が入るため、リタッチ時の色の追加や濃さの調整がしやすく、長期的なメンテナンスが容易です。' },
  ],
  demerits: [
    { title: '毛並み感は出にくい', desc: '面で色を入れるため、1本1本の毛並みを表現するのは難しく、ナチュラルな毛流れを求める方にはストロークの方が適しています。' },
    { title: 'メイクした感が出やすい', desc: '仕上がりがパウダーメイクに近いため、完全なすっぴん風を求める方にはやや「描いた感」が出る場合があります。' },
    { title: '施術者の技術差が出る', desc: 'グラデーションの付け方や色の濃淡で仕上がりが大きく変わるため、技術力の高い施術者を選ぶことが重要です。' },
  ],
}

const techniques = [
  { name: 'パウダー眉（2D）', method: '機械彫り', finish: 'ふんわりパウダー状', natural: '★★★★☆', lasting: '1〜2年', price: '5〜12万円', best: '脂性肌、メイク風仕上がり希望の方' },
  { name: 'ストローク（3D）', method: '手彫り', finish: '1本1本の毛並み', natural: '★★★★★', lasting: '1〜1.5年', price: '8〜15万円', best: '眉毛が薄い方、すっぴん風希望の方' },
  { name: 'コンビネーション（4D）', method: '手彫り＋機械彫り', finish: '毛並み＋パウダー', natural: '★★★★★', lasting: '1〜2年', price: '10〜18万円', best: '両方の良さを求める方' },
  { name: '7Dストローク', method: '最新手彫り技法', finish: '超精密な毛並み', natural: '★★★★★+', lasting: '1〜2年', price: '12〜20万円', best: '最高峰の自然さを求める方' },
]

const progress = [
  { period: '施術直後', color: '濃さ：★★★★★', desc: '施術直後は色がかなり濃く見えます。赤みや腫れが出ることもありますが、これは正常な反応です。「濃すぎた」と心配する方も多いですが、ここから必ず薄くなります。' },
  { period: '1週間後', color: '濃さ：★★★☆☆', desc: 'かさぶたが自然に剥がれ始め、一時的にまだらに見えることがあります。かさぶたを無理に剥がさないことが重要。色は施術直後の40〜50%程度まで薄くなります。' },
  { period: '1ヶ月後', color: '濃さ：★★★★☆', desc: '色素が肌に定着し、本来の仕上がりに近づきます。この時期にリタッチ（2回目施術）を行うのが一般的。1回目で入りきらなかった部分を補充します。' },
  { period: '半年後', color: '濃さ：★★★☆☆', desc: 'やや色が落ち着き、さらに自然な仕上がりに。メイクの手間が大幅に減り、QOLの向上を実感する方が多いです。この段階でメンテナンスリタッチを検討する方もいます。' },
]

const clinics = [
  { name: 'デイジークリニック', point: 'パウダー眉の症例が豊富', desc: 'dazzy brow（パウダー＋ストロークのオリジナル技法）が人気。パウダー眉の仕上がりの美しさに定評があり、グラデーション技術が秀逸。パウダー眉を希望するなら最もおすすめ。', price: '49,800円〜(2回セット)', badge: 'パウダー眉No.1' },
  { name: 'メディカルブロー', point: '年間症例数60,000以上', desc: '独自の6Dストローク技術で知られるが、パウダー眉メニューも充実。豊富な症例数による安定した技術力が強み。全国に展開しており通いやすさも魅力。', price: '55,000円〜(2回セット)', badge: '症例数No.1' },
  { name: 'クレアージュ東京', point: '3回施術で丁寧に仕上げる', desc: '他院が2回施術のところ、3回に分けて丁寧に色を定着させるのが特徴。指名料無料で料金体系が明確。慎重に進めたい方に最適。', price: '132,000円(3回セット)', badge: '丁寧さNo.1' },
  { name: 'トゥルーデザインクリニック', point: '骨格分析デザインが得意', desc: '一人ひとりの骨格を分析し、最適なパウダー眉デザインを提案。カウンセリングに時間をかけ、デザインの満足度が高いと評判。', price: '77,000円〜(2回セット)', badge: 'デザイン力' },
  { name: 'ファーストアートメイク', point: 'コスパ重視の方に', desc: '手頃な価格設定でパウダー眉施術が受けられる。初めてのアートメイクで費用を抑えたい方におすすめ。丁寧なカウンセリングで初心者でも安心。', price: '38,500円〜(2回セット)', badge: 'コスパ◎' },
]

const faqs = [
  { q: 'パウダー眉の施術は痛いですか？', a: '施術前に麻酔クリームを塗布するため、強い痛みを感じる方は少ないです。「毛抜きで毛を抜く程度」「チクチクする程度」と表現される方が多いです。痛みに弱い方は、事前にクリニックに相談しましょう。' },
  { q: 'パウダー眉の持続期間はどのくらいですか？', a: '個人差はありますが、一般的に1〜2年程度持続します。肌質（脂性肌は短め）、生活習慣（紫外線への暴露、スキンケア）、代謝の速さなどにより個人差があります。定期的なリタッチで美しい状態を維持できます。' },
  { q: 'パウダー眉とストローク、どちらがおすすめですか？', a: '仕上がりの好みと肌質で選ぶのがおすすめです。パウダー眉は「ふんわりメイク風」、ストロークは「毛並みのあるすっぴん風」。脂性肌の方はパウダー眉の方が定着しやすいです。両方の良さを取り入れたコンビネーション（4D）も人気です。' },
  { q: 'パウダー眉は2回施術が必要ですか？', a: 'はい、基本的に2回施術が推奨されます。1回目で色の定着を確認し、2回目（リタッチ）で色の補充やデザインの微調整を行います。クレアージュ東京では3回に分けてより丁寧に仕上げます。' },
  { q: '施術後にメイクはいつからできますか？', a: '眉部分のメイクは施術後1週間程度は避けてください。かさぶたが完全に剥がれ、肌が落ち着いてからメイクOKです。眉以外のメイクは翌日から可能なクリニックが多いです。' },
  { q: 'パウダー眉が向いていない人はいますか？', a: 'ケロイド体質の方、施術部位に皮膚疾患がある方、妊娠中・授乳中の方は施術を受けられない場合があります。また、1本1本の毛並み感を重視する方はストロークの方が向いています。事前カウンセリングで医師に相談しましょう。' },
]

export default function PowderBrowPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: 'パウダー眉アートメイク' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">POWDER BROW GUIDE</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">パウダー眉アートメイク<br className="md:hidden" />完全ガイド</h1>
            <p className="text-[#6B6560] leading-relaxed">
              パウダー眉（2D）はふんわりとしたメイク風の仕上がりが特徴のアートメイク技法。<br />
              特徴・料金相場・経過・他技法との違いまで、すべてを徹底解説します。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>パウダー眉（2D）の特徴と施術方法</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>メリット・デメリットと向いている人</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>3D・4D・7Dとの違いを比較表で解説</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>料金相場と施術後の経過</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>おすすめクリニック5選</li>
            </ul>
          </div>

          {/* パウダー眉とは */}
          <h2 className="text-2xl font-bold mb-6 text-center">パウダー眉（2D）とは？</h2>
          <div className="glass-card rounded-2xl p-6 mb-10 border border-[var(--pink-beige)]">
            <p className="text-[#6B6560] leading-relaxed mb-4">
              パウダー眉とは、マシン（機械）を使って眉全体にドット状に色素を入れていくアートメイク技法です。「2D眉」とも呼ばれ、パウダーでメイクしたようなふんわりとした仕上がりが最大の特徴です。
            </p>
            <p className="text-[#6B6560] leading-relaxed mb-4">
              施術では専用のマシンを使い、細かいドットを均一に打ち込んでいきます。眉頭は薄く、眉尻に向かって徐々に濃くなるグラデーションをつけることで、まるでメイクしたような自然な立体感を演出します。
            </p>
            <p className="text-[#6B6560] leading-relaxed">
              近年はパウダー眉の技術も進化しており、より繊細なグラデーション表現が可能になっています。特にデイジークリニックの「dazzy brow」はパウダー技法をベースにした独自技術で、多くの支持を集めています。
            </p>
          </div>

          {/* メリット・デメリット */}
          <h2 className="text-2xl font-bold mb-8 text-center">パウダー眉のメリット・デメリット</h2>
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
            <h2 className="text-xl font-bold mb-4 text-center">パウダー眉が向いている人</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                '普段からパウダーで眉メイクをしている方',
                '脂性肌・混合肌の方',
                'ふんわりとした柔らかい印象にしたい方',
                'メイク時間を短縮したい方',
                '眉メイクが苦手で左右対称に描けない方',
                'アートメイクが初めてで自然な仕上がりを求める方',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="text-[var(--gold)]">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 技法比較表 */}
          <h2 className="text-2xl font-bold mb-8 text-center">技法別の比較表</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white">
                  <th className="p-3 text-left rounded-tl-xl">技法</th>
                  <th className="p-3 text-left">施術方法</th>
                  <th className="p-3 text-left">仕上がり</th>
                  <th className="p-3 text-center">自然さ</th>
                  <th className="p-3 text-left">持続期間</th>
                  <th className="p-3 text-left">料金相場</th>
                  <th className="p-3 text-left rounded-tr-xl">向いている人</th>
                </tr>
              </thead>
              <tbody>
                {techniques.map((t, i) => (
                  <tr key={i} className={`${i === 0 ? 'bg-[var(--blush)] font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-[var(--pink-beige)]`}>
                    <td className="p-3">{i === 0 && <span className="badge-gold text-xs mr-1">注目</span>}{t.name}</td>
                    <td className="p-3">{t.method}</td>
                    <td className="p-3">{t.finish}</td>
                    <td className="p-3 text-center">{t.natural}</td>
                    <td className="p-3">{t.lasting}</td>
                    <td className="p-3">{t.price}</td>
                    <td className="p-3">{t.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 料金相場 */}
          <h2 className="text-2xl font-bold mb-6 text-center">パウダー眉の料金相場</h2>
          <div className="glass-card rounded-2xl p-6 mb-10 border border-[var(--pink-beige)]">
            <p className="text-[#6B6560] leading-relaxed mb-4">
              パウダー眉アートメイクの料金相場は<strong>2回セットで5万円〜12万円程度</strong>です。クリニックの立地、施術者のランク、使用する色素のグレードにより料金は異なります。
            </p>
            <div className="bg-[var(--blush)] rounded-xl p-4">
              <p className="text-sm text-[#6B6560]">
                <strong className="text-[var(--gold)]">料金の内訳目安：</strong>施術料金（2回セット） + 初診料（無料〜3,000円） + 指名料（無料〜11,000円） + 麻酔代（施術料に含まれることが多い）。
                クレアージュ東京は指名料無料で総額が明確、ファーストアートメイクは38,500円〜と手頃な設定です。
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
          <h2 className="text-2xl font-bold mb-8 text-center">パウダー眉おすすめクリニック</h2>
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
          <h2 className="text-2xl font-bold mb-8 text-center">パウダー眉アートメイクのよくある質問</h2>
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
            <h2 className="text-xl font-bold mb-4">パウダー眉で理想の眉を手に入れよう</h2>
            <p className="text-[#6B6560] mb-6">まずは無料カウンセリングで、あなたに合った技法を相談してみましょう。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/parts/eyebrow" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">眉毛アートメイク</p>
                <p className="text-xs text-[#8B8580] mt-1">眉アートメイクの総合ガイド</p>
              </Link>
              <Link href="/knowledge/stroke" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">ストローク（毛並み）</p>
                <p className="text-xs text-[#8B8580] mt-1">3D・毛並みアートメイク解説</p>
              </Link>
              <Link href="/knowledge/handmade-vs-machine" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">手彫り vs 機械彫り</p>
                <p className="text-xs text-[#8B8580] mt-1">違いと選び方を徹底比較</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
