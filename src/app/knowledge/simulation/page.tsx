import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイク 料金シミュレーション｜部位別・回数別の総額を徹底試算【2026年最新】',
  description: 'アートメイクの料金を部位別・回数別にシミュレーション。眉・アイライン・リップの初回〜3年間の総額を5クリニックで徹底比較。追加費用の目安、節約のコツも解説。',
  keywords: 'アートメイク 料金 シミュレーション,アートメイク 総額,アートメイク 費用 目安,アートメイク 3年 総額',
  openGraph: {
    title: 'アートメイク 料金シミュレーション｜部位別・回数別の総額を徹底試算',
    description: 'アートメイクの部位別・回数別の料金シミュレーションを徹底解説。',
    type: 'article',
  },
}

const partPrices = [
  { part: '眉（2D/パウダー）', firstTime: '40,000〜60,000円', retouch: '20,000〜40,000円', twoTimes: '60,000〜100,000円' },
  { part: '眉（3D/毛並み）', firstTime: '55,000〜80,000円', retouch: '30,000〜50,000円', twoTimes: '85,000〜130,000円' },
  { part: '眉（4D/6D/7D）', firstTime: '70,000〜120,000円', retouch: '40,000〜60,000円', twoTimes: '110,000〜180,000円' },
  { part: 'アイライン（上）', firstTime: '30,000〜50,000円', retouch: '20,000〜35,000円', twoTimes: '50,000〜85,000円' },
  { part: 'アイライン（下）', firstTime: '25,000〜40,000円', retouch: '15,000〜30,000円', twoTimes: '40,000〜70,000円' },
  { part: 'リップ（フル）', firstTime: '60,000〜90,000円', retouch: '30,000〜50,000円', twoTimes: '90,000〜140,000円' },
]

const clinicTotals = [
  {
    name: 'メディカルブロー',
    score: 95,
    initial: '28,000円（モニター）〜55,000円',
    total2: '56,000〜110,000円',
    threeYear: '約90,000〜170,000円',
    feature: 'モニター価格利用時は最安クラス。7Dストロークの2回セットで完成。',
    highlight: true,
  },
  {
    name: 'クレアージュ東京',
    score: 92,
    initial: '132,000円（3回セット）',
    total2: '132,000円',
    threeYear: '約160,000〜190,000円',
    feature: '3回セットの明朗会計。指名料無料で追加費用がほぼ発生しない。',
    highlight: true,
  },
  {
    name: 'デイジークリニック',
    score: 90,
    initial: '49,800円〜（最大50%OFF適用時）',
    total2: '約99,000〜150,000円',
    threeYear: '約130,000〜200,000円',
    feature: 'キャンペーン活用で総額を抑えやすい。新宿・福岡院が安い。',
  },
  {
    name: 'ファーストアートメイク',
    score: 87,
    initial: '55,000〜75,000円',
    total2: '100,000〜140,000円',
    threeYear: '約130,000〜180,000円',
    feature: '初心者向けの丁寧なカウンセリング込み。銀座1院。',
  },
  {
    name: 'トゥルーデザインクリニック',
    score: 85,
    initial: '60,000〜80,000円',
    total2: '約100,000〜130,000円',
    threeYear: 'リタッチ29,700円活用で約150,000円以下',
    feature: 'リタッチ料金が29,700円〜と安く、長期コストを抑えやすい。',
  },
]

const additionalCosts = [
  { item: '指名料', range: '3,000〜20,000円/回', note: '施術者のランクにより変動。クレアージュは指名料無料。' },
  { item: '麻酔代', range: '0〜5,000円/回', note: '施術料に含まれるクリニックが多い。別途の場合もあるため事前確認を。' },
  { item: '初診料・カウンセリング料', range: '0〜3,300円', note: '無料のクリニックも多い。契約しなくても発生する場合がある。' },
  { item: 'アフターケア軟膏', range: '0〜3,000円', note: '施術料に含まれることが多い。処方薬として別途発生する場合も。' },
  { item: 'リタッチ料金（3回目以降）', range: '20,000〜50,000円/回', note: '1〜3年に一度の頻度。長期的な維持費用として考慮。' },
]

const faqs = [
  { q: '眉アートメイクは何回受ける必要がありますか？', a: '多くのクリニックで2〜3回が推奨されています。1回では色が定着しにくく、2回目で完成、3回目でさらに定着を高めるというのが一般的な流れです。クレアージュ東京のように3回セット料金を設定しているクリニックもあります。' },
  { q: 'アートメイクの料金は何年でリセットされますか？', a: '色素は1〜3年で徐々に薄くなるため、定期的なリタッチが必要です。1〜1.5年に一度のリタッチ（20,000〜50,000円程度）で形を維持できます。3年間の総額は初回費用＋リタッチ1〜2回分が目安です。' },
  { q: '2部位同時に受けると割引はありますか？', a: '多くのクリニックで「眉＋アイライン」「眉＋リップ」などのセット割引があります。5〜15%OFF程度が相場で、部位別に別々に受けるより総額が安くなるケースが多いです。カウンセリング時に確認しましょう。' },
  { q: '最も総額が安くなる組み合わせは？', a: 'メディカルブローのモニター価格（1回28,000円〜）を2回利用するのが最安ルートの一つです。ただし施術者の指名ができない、掲載条件があるなどの制約があります。通常料金では、3回セット132,000円のクレアージュ東京も長期的にコスパが良好です。' },
  { q: '追加費用が発生しないクリニックは？', a: 'クレアージュ東京は指名料無料・明朗会計で、追加費用がほぼ発生しないことで知られます。メディカルブローは施術者ランクにより指名料が変動しますが、下位ランクであれば指名料も低額です。' },
  { q: 'シミュレーションより高額になるケースは？', a: '上位施術者の指名・追加麻酔の使用・予定外のリタッチなどで総額が増えることがあります。カウンセリング時に「総額見積書」をもらうのが確実で、書面で事前に総額を把握しましょう。' },
]

export default function SimulationPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: '料金シミュレーション' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">PRICE SIMULATION</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイク 料金シミュレーション<br className="md:hidden" />部位別×回数別で徹底試算</h1>
            <p className="text-[#6B6560] leading-relaxed">
              アートメイクは「1回いくら」ではなく「総額いくらか」で考えることが大切です。<br />
              部位別・回数別・3年間の総コストまで、シミュレーションで徹底解説します。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>部位別×回数別の料金相場シミュレーション</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>5クリニックの総額比較（初回＋リタッチ込み）</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>追加費用の目安と注意点</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>3年間の総コスト比較</li>
            </ul>
          </div>

          {/* 部位別シミュレーション */}
          <h2 className="text-2xl font-bold mb-6 text-center">部位別 × 回数別シミュレーション</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full glass-card rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white">
                  <th className="p-4 text-left text-sm">部位</th>
                  <th className="p-4 text-center text-sm">1回目（初回）</th>
                  <th className="p-4 text-center text-sm">2回目（リタッチ）</th>
                  <th className="p-4 text-center text-sm">2回合計</th>
                </tr>
              </thead>
              <tbody>
                {partPrices.map((p, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white/50' : ''}>
                    <td className="p-4 text-sm font-bold">{p.part}</td>
                    <td className="p-4 text-center text-sm">{p.firstTime}</td>
                    <td className="p-4 text-center text-sm">{p.retouch}</td>
                    <td className="p-4 text-center text-sm font-bold text-[var(--gold)]">{p.twoTimes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-[#8B8580] mt-2 text-center">※ 料金は税込の目安です。クリニック・施術者ランクにより変動します。</p>
          </div>

          {/* 5クリニックの総額比較 */}
          <h2 className="text-2xl font-bold mb-6 text-center">5クリニック 総額比較（眉アートメイク）</h2>
          <div className="space-y-5 mb-10">
            {clinicTotals.map((c, i) => (
              <div key={i} className={`glass-card rounded-2xl p-6 ${c.highlight ? 'border-2 border-[var(--gold-light)]' : 'border border-[var(--pink-beige)]'}`}>
                <div className="flex flex-wrap items-baseline gap-2 mb-3">
                  <h3 className="font-bold text-lg">{c.name}</h3>
                  <span className="badge-gold text-xs">{c.score}点</span>
                </div>
                <div className="grid md:grid-cols-3 gap-3 text-sm mb-3">
                  <div className="bg-[var(--blush)] rounded-xl p-3">
                    <p className="text-xs text-[#8B8580] mb-1">初回料金</p>
                    <p className="font-bold">{c.initial}</p>
                  </div>
                  <div className="bg-[var(--blush)] rounded-xl p-3">
                    <p className="text-xs text-[#8B8580] mb-1">2回完成総額</p>
                    <p className="font-bold">{c.total2}</p>
                  </div>
                  <div className="bg-[var(--blush)] rounded-xl p-3">
                    <p className="text-xs text-[#8B8580] mb-1">3年間の総額目安</p>
                    <p className="font-bold text-[var(--gold)]">{c.threeYear}</p>
                  </div>
                </div>
                <p className="text-[#6B6560] text-sm">{c.feature}</p>
              </div>
            ))}
          </div>

          {/* 追加費用 */}
          <h2 className="text-2xl font-bold mb-6 text-center">追加費用の目安</h2>
          <div className="space-y-3 mb-10">
            {additionalCosts.map((a, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="font-bold">{a.item}</h3>
                  <span className="text-[var(--gold)] font-bold">{a.range}</span>
                </div>
                <p className="text-[#6B6560] text-xs">{a.note}</p>
              </div>
            ))}
          </div>

          {/* 3年間総コスト比較 */}
          <h2 className="text-2xl font-bold mb-6 text-center">3年間の総コスト比較</h2>
          <div className="glass-card rounded-2xl p-6 mb-10 border border-[var(--pink-beige)]">
            <p className="text-[#6B6560] text-sm mb-4">
              アートメイクの色素は1〜3年で薄くなるため、「初回＋1〜2回のリタッチ」が3年間の総コストとなります。
            </p>
            <div className="space-y-3">
              <div className="bg-[var(--blush)] rounded-xl p-4">
                <p className="font-bold text-sm mb-1">コスパ最優先なら</p>
                <p className="text-xs text-[#6B6560]">メディカルブローのモニター価格を2回利用＋2年後にリタッチ1回 → 約90,000〜120,000円</p>
              </div>
              <div className="bg-[var(--blush)] rounded-xl p-4">
                <p className="font-bold text-sm mb-1">丁寧さ重視なら</p>
                <p className="text-xs text-[#6B6560]">クレアージュ東京3回セット132,000円＋2年後リタッチ30,000〜50,000円 → 約160,000〜180,000円</p>
              </div>
              <div className="bg-[var(--blush)] rounded-xl p-4">
                <p className="font-bold text-sm mb-1">大人デザイン重視なら</p>
                <p className="text-xs text-[#6B6560]">トゥルーデザインクリニック初回70,000円〜＋リタッチ29,700円×2回 → 約130,000〜160,000円</p>
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
            <h2 className="text-xl font-bold mb-4">総額を抑えつつ、高品質なクリニックを選ぼう</h2>
            <p className="text-[#6B6560] mb-6">料金だけでなく、実績・技術・アフターケアも含めて総合的に比較することが大切です。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div>
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/knowledge/price-guide" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">料金相場ガイド</p>
                <p className="text-xs text-[#8B8580] mt-1">相場と内訳を徹底解説</p>
              </Link>
              <Link href="/purpose/cheap" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">安いクリニック特集</p>
                <p className="text-xs text-[#8B8580] mt-1">コスパ重視の選び方</p>
              </Link>
              <Link href="/knowledge/retouch" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">リタッチ完全ガイド</p>
                <p className="text-xs text-[#8B8580] mt-1">頻度と料金を解説</p>
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
