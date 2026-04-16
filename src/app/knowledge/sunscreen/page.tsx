import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイク後の紫外線対策・日焼け止めはいつから？長持ちさせるコツ【2026年最新】',
  description: 'アートメイク後の紫外線対策を徹底解説。紫外線が色素に与える影響（退色・変色）、日焼け止めの使用タイミング（完全定着後）、おすすめのケア方法、長持ちさせるコツまで完全ガイド。',
  keywords: 'アートメイク 日焼け止め,アートメイク 紫外線,アートメイク UV,アートメイク 退色',
  openGraph: {
    title: 'アートメイク後の紫外線対策・日焼け止めはいつから？長持ちさせるコツ',
    description: '紫外線が色素に与える影響と日焼け止めの正しい使い方を徹底解説。',
    type: 'article',
  },
}

const uvEffects = [
  { icon: '🌞', title: '色素の退色（色抜け）', desc: '紫外線は色素を分解する作用があり、特に浅い層に入ったアートメイクの色素は日光で退色しやすくなります。夏場の紫外線量は冬の3〜5倍。' },
  { icon: '🎨', title: '色素の変色', desc: '紫外線により色素が酸化・変色し、赤みが強くなったり、グレーがかったりします。ブラウン系が特に変色しやすい傾向があります。' },
  { icon: '💢', title: '炎症の悪化（施術直後）', desc: 'ダウンタイム中に紫外線を浴びると、炎症が悪化し色素沈着（シミ）の原因になります。' },
  { icon: '📉', title: '定着率の低下', desc: '施術後早期の紫外線曝露は、色素が定着する前に流失する原因になります。' },
]

const timeline = [
  { period: '施術当日〜1週間', recommend: '日焼け止めNG・紫外線直接NG', detail: 'ダウンタイム中は日焼け止めの使用も避け、外出時は帽子・日傘・マスクで物理的に遮蔽。処方軟膏以外は塗らない。' },
  { period: '1〜2週間目', recommend: '紫外線カット継続', detail: 'かさぶたが剥がれて新しい皮膚ができる時期。日焼け止めより物理的遮蔽を優先。必要なら帽子・サングラス。' },
  { period: '2週間〜1ヶ月', recommend: '低刺激の日焼け止めOK', detail: '2週間経過後から、施術部位に低刺激な日焼け止めを使用可能。ノンケミカル処方・無添加タイプがおすすめ。' },
  { period: '1ヶ月以降', recommend: '通常の日焼け止めOK', detail: '色素が完全定着する1ヶ月後からは、通常のUVケアを再開。SPF30〜50の日焼け止めで紫外線を徹底ブロック。' },
]

const careMethods = [
  { icon: '🧴', title: 'SPF30〜50の日焼け止め', desc: '完全定着後は毎日SPF30〜50・PA+++〜++++の日焼け止めを使用。特に日差しの強い5〜9月は徹底的に。' },
  { icon: '🎩', title: '帽子・日傘の併用', desc: '日焼け止めだけでなく、帽子・日傘・サングラスで物理的に紫外線をカット。顔の上半分は帽子が効果的。' },
  { icon: '🪟', title: '室内も油断しない', desc: 'UV-Aは窓ガラスを透過するため、室内でも紫外線対策が必要。特に車の運転中は注意。' },
  { icon: '☁️', title: '曇りの日も日焼け止め', desc: '曇りの日でも紫外線は約80%届いています。天候にかかわらず毎日のUVケアが重要。' },
  { icon: '🏖️', title: '海・山・雪の反射にも注意', desc: '海面・雪面・砂浜からの反射光も強力な紫外線源。アクティビティ時は特に強力なUVケアを。' },
  { icon: '🔁', title: '2〜3時間ごとに塗り直し', desc: '日焼け止めは2〜3時間で効果が減衰。特に汗をかいたり、水に濡れた後は必ず塗り直し。' },
]

const longLastingTips = [
  { num: 1, title: 'アフターケアを徹底する', desc: '施術後の軟膏塗布・触らない・濡らさないを2週間徹底することで、色素の定着率が最大化。長持ちの基本はここから始まります。' },
  { num: 2, title: '紫外線対策を日常化', desc: '毎日の日焼け止め・帽子・日傘を習慣化。特に夏場の紫外線を避けることで退色を大幅に遅らせられます。' },
  { num: 3, title: '洗顔時にこすらない', desc: '日常的な洗顔でこすると、色素が少しずつ削れます。泡で包む優しい洗顔を心がけましょう。' },
  { num: 4, title: 'ピーリング・角質ケアは控えめに', desc: 'ピーリング製品やスクラブ系は色素も一緒に剥がしてしまいます。施術部位への使用は避けて。' },
  { num: 5, title: '1〜1.5年でリタッチを', desc: '完全に消えてから再施術するより、薄くなり始めた段階（1〜1.5年）でリタッチする方が、デザインを維持しやすくコスパも良好。' },
]

const faqs = [
  { q: 'アートメイク後、日焼け止めはいつから使えますか？', a: '施術後2週間は使用を控え、物理的な遮蔽（帽子・日傘・マスク）で対応するのが一般的です。2週間経過後から低刺激な日焼け止めを使用可能で、1ヶ月以降は通常のUVケアを再開できます。' },
  { q: '紫外線でアートメイクの色は本当に薄くなりますか？', a: 'はい、紫外線はアートメイクの色素を分解・退色させる主要因の一つです。特に夏場に頻繁に紫外線を浴びると、退色速度が大幅に速まります。長持ちさせるには日常的なUVケアが不可欠です。' },
  { q: 'どのくらいのSPFの日焼け止めを使えばいい？', a: '日常使いならSPF30・PA+++程度、屋外アクティビティやレジャー時はSPF50・PA++++が推奨されます。高SPFすぎると肌負担が大きいため、シーンに応じて使い分けましょう。' },
  { q: 'アートメイクの色素はどれくらい日焼けで変わりますか？', a: '個人差がありますが、紫外線曝露が多い人は6ヶ月〜1年で目に見えて退色します。一方、紫外線対策を徹底している人は2〜3年以上色が保たれることもあります。ケア次第で持続期間が大きく変わります。' },
  { q: 'サングラスで眉のアートメイクも守れますか？', a: 'サングラスは眉の一部（上半分）もカバーできるため、一定の効果はあります。より確実には帽子のつばで眉全体を日陰にすることがおすすめです。' },
  { q: '冬場でも日焼け止めは必要？', a: '冬場も紫外線は夏の約半分程度届いています。特に雪面の反射や、晴天時の紫外線は強いため、冬でも日焼け止めを使用するのがアートメイクを長持ちさせる秘訣です。' },
]

export default function SunscreenPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: '紫外線対策' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">UV PROTECTION GUIDE</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイク後の紫外線対策<br className="md:hidden" />長持ちさせる日焼け止めガイド</h1>
            <p className="text-[#6B6560] leading-relaxed">
              アートメイクの退色・変色の最大の原因は紫外線。<br />
              正しいUVケアで、1年でも長く美しい仕上がりをキープしましょう。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>紫外線が色素に与える影響（退色・変色）</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>日焼け止めの使用タイミング</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>おすすめのUVケア方法6つ</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>長持ちさせるコツ5つ</li>
            </ul>
          </div>

          {/* 紫外線の影響 */}
          <h2 className="text-2xl font-bold mb-6 text-center">紫外線が色素に与える影響</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {uvEffects.map((e, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-red-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{e.icon}</span>
                  <h3 className="font-bold">{e.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm">{e.desc}</p>
              </div>
            ))}
          </div>

          {/* 日焼け止めタイミング */}
          <h2 className="text-2xl font-bold mb-6 text-center">日焼け止めの使用タイミング</h2>
          <div className="space-y-3 mb-10">
            {timeline.map((t, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="font-bold">{t.period}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${t.recommend.includes('NG') ? 'bg-red-100 text-red-500' : t.recommend.includes('低刺激') ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-600'}`}>{t.recommend}</span>
                </div>
                <p className="text-[#6B6560] text-sm">{t.detail}</p>
              </div>
            ))}
          </div>

          {/* おすすめケア方法 */}
          <h2 className="text-2xl font-bold mb-6 text-center">おすすめのUVケア方法</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {careMethods.map((m, i) => (
              <div key={i} className="glass-card rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{m.icon}</span>
                  <h3 className="font-bold">{m.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* 長持ちコツ */}
          <h2 className="text-2xl font-bold mb-6 text-center">アートメイクを長持ちさせるコツ</h2>
          <div className="space-y-4 mb-10">
            {longLastingTips.map((t) => (
              <div key={t.num} className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm">{t.num}</span>
                  <h3 className="font-bold text-lg">{t.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm ml-12">{t.desc}</p>
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
            <h2 className="text-xl font-bold mb-4">長持ちする仕上がりは信頼できるクリニックから</h2>
            <p className="text-[#6B6560] mb-6">高品質な色素・丁寧な技術のクリニックなら、退色も緩やかになります。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div>
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/knowledge/duration" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">持続期間ガイド</p>
                <p className="text-xs text-[#8B8580] mt-1">何年持つかを解説</p>
              </Link>
              <Link href="/knowledge/retouch" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">リタッチ完全ガイド</p>
                <p className="text-xs text-[#8B8580] mt-1">頻度と料金を解説</p>
              </Link>
              <Link href="/knowledge/makeup-after" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">メイクはいつから？</p>
                <p className="text-xs text-[#8B8580] mt-1">部位別解禁タイミング</p>
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
