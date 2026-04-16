import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイクは妊娠中・授乳中でも受けられる？医学的リスクと産後のベストタイミング【2026年最新】',
  description: 'アートメイクを妊娠中・授乳中・妊活中に受けることの可否を徹底解説。感染リスク・ホルモン変動・麻酔の影響などの医学的観点、多くのクリニックの方針、産後のベストタイミングを完全ガイド。',
  keywords: 'アートメイク 妊娠中,アートメイク 授乳中,アートメイク 産後,アートメイク 妊活中',
  openGraph: {
    title: 'アートメイクは妊娠中・授乳中でも受けられる？医学的リスクと産後のベストタイミング',
    description: '妊娠中・授乳中のアートメイクのリスクと産後のタイミングを徹底解説。',
    type: 'article',
  },
}

const pregnancyRisks = [
  { title: '感染症リスクの増加', desc: '妊娠中は免疫力が低下しており、施術による感染リスクが通常より高まります。感染症が胎児に影響を及ぼす可能性も考慮する必要があります。' },
  { title: 'ホルモン変動による仕上がりへの影響', desc: '妊娠中はホルモンバランスが大きく変動し、肌質・色素定着・出血しやすさにも影響します。仕上がりの予測が困難で、産後に色ムラや退色が起こる可能性があります。' },
  { title: '麻酔・薬剤の胎児への影響', desc: 'アートメイクでは表面麻酔クリーム（リドカイン等）を使用します。妊娠中の使用の安全性は完全には確立されておらず、多くのクリニックで使用を避ける方針です。' },
  { title: '施術中の痛みによるストレス', desc: '施術中の痛み・長時間の姿勢は母体へのストレスとなり、間接的に胎児にも影響する可能性があります。' },
  { title: 'トラブル時の治療制限', desc: '万が一アレルギー反応・感染症などが発生した場合、妊娠中は使用できる薬剤が限定されるため、治療の選択肢が狭まります。' },
]

const timeline = [
  { period: '妊活中', recommendation: '慎重に判断', note: '医学的に明確なNG理由はありませんが、妊娠判明前の施術タイミングを避けるため、妊活開始前に済ませるか産後に延期するのが一般的に推奨されます。' },
  { period: '妊娠初期（〜15週）', recommendation: '避けるべき', note: '胎児の器官形成期で最もデリケートな時期。多くのクリニックで施術を受け付けません。' },
  { period: '妊娠中期（16〜27週）', recommendation: '避けるべき', note: '体調が安定する時期ですが、感染リスク・麻酔影響の懸念から多くのクリニックで施術を断られます。' },
  { period: '妊娠後期（28週〜）', recommendation: '避けるべき', note: '出産が近づく時期。長時間の姿勢保持は身体的負担も大きく、施術は推奨されません。' },
  { period: '授乳中', recommendation: '避けるのが一般的', note: '麻酔成分が母乳に移行する可能性があり、多くのクリニックで卒乳まで待つよう案内されています。' },
  { period: '産後（卒乳後）', recommendation: '施術可能', note: '卒乳・月経再開・ホルモン安定後がベストタイミング。目安として産後6〜12ヶ月以降。' },
]

const bestTiming = [
  { icon: '👶', title: '卒乳後3ヶ月以降', desc: 'ホルモンバランスが元に戻り、母乳への影響を心配せずに施術できます。' },
  { icon: '📅', title: '月経再開後', desc: '月経が再開してからが一つの目安。ホルモン周期が正常化している証拠です。' },
  { icon: '🏠', title: '育児のサポート体制が整ってから', desc: '施術後は触らない・濡らさない期間があるため、育児との両立を考慮する必要があります。' },
  { icon: '💪', title: '自分の体調が回復してから', desc: '睡眠不足・疲労蓄積があると施術に耐えにくくなります。心身ともに回復した時期を選びましょう。' },
]

const beforeAfter = [
  { icon: '✅', title: '妊娠前に済ませる選択肢', desc: '妊活開始前にアートメイクを済ませておけば、産後のメイクの負担を軽減できます。ただし1〜3年で薄くなるため、子育てが落ち着くころには再施術が必要です。' },
  { icon: '🤱', title: '産後に施術する選択肢', desc: '育児で忙しくなる産後こそメイクの時短効果は大きいメリット。卒乳後のベストタイミングで施術すれば、長期的に恩恵を受けられます。' },
]

const faqs = [
  { q: '妊娠中にアートメイクを受けられるクリニックはありますか？', a: '多くのクリニックで妊娠中の施術は避けるべきとされています。これは感染リスク・ホルモン変動・麻酔の影響・トラブル時の治療制限など、複数の医学的観点から慎重な判断がなされているためです。妊娠判明前に予約していた場合でも、施術を延期することが推奨されます。' },
  { q: '妊娠に気づかず施術を受けてしまった場合、胎児への影響は？', a: '1回の施術で重大な影響が出る可能性は低いとされていますが、心配な場合はかかりつけの産婦人科医に相談しましょう。今後の妊娠中の追加施術は避け、産後まで待つのが賢明です。' },
  { q: '授乳中のアートメイクは本当にNGですか？', a: 'クリニックにより方針が異なりますが、多くのクリニックで授乳中の施術を避けるよう案内されています。麻酔成分が母乳に移行する可能性、母体のホルモン変動、育児中のアフターケアの難しさなどが理由です。卒乳後に検討するのが一般的です。' },
  { q: '妊活中はアートメイクを受けてもいいですか？', a: '医学的に明確なNG理由はありませんが、施術直後に妊娠が判明するとリタッチができなくなるため、2回完結が難しくなります。妊活開始前に2回の施術を終えておくか、産後に延期するのが理想的です。' },
  { q: '産後いつからアートメイクが受けられますか？', a: '一般的な目安として、卒乳後3ヶ月以降・月経再開後が推奨されます。ホルモンバランスが安定し、麻酔が母乳に移行する懸念もなくなるためです。具体的なタイミングはカウンセリング時にクリニックと相談しましょう。' },
  { q: '産後の育児中に施術を受ける際の注意点は？', a: '施術後は触らない・濡らさない期間があるため、赤ちゃんとのスキンシップに一時的な制約が生じます。また2回目施術までの間隔（1〜2ヶ月）の予約調整も必要です。家族のサポート体制を整えてから予約しましょう。' },
]

export default function PregnancyPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: '妊娠中・授乳中' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">PREGNANCY & NURSING</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">妊娠中・授乳中の<br className="md:hidden" />アートメイクは受けられる？</h1>
            <p className="text-[#6B6560] leading-relaxed">
              妊娠中のアートメイクは多くのクリニックで避けるべきとされています。<br />
              医学的な理由・産後のベストタイミングを徹底解説します。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>妊娠中に施術を避ける医学的理由</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>時期別（妊活中〜産後）の判断基準</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>授乳中の注意点</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>産後のベストタイミング</li>
            </ul>
          </div>

          {/* 妊娠中のリスク */}
          <h2 className="text-2xl font-bold mb-6 text-center">妊娠中にアートメイクを避ける5つの理由</h2>
          <div className="space-y-4 mb-10">
            {pregnancyRisks.map((r, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-red-100">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="bg-red-100 text-red-500 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                  {r.title}
                </h3>
                <p className="text-[#6B6560] text-sm ml-9">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* 時期別 */}
          <h2 className="text-2xl font-bold mb-6 text-center">時期別の判断基準</h2>
          <div className="space-y-3 mb-10">
            {timeline.map((t, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="font-bold">{t.period}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${t.recommendation === '施術可能' ? 'bg-green-100 text-green-600' : t.recommendation === '慎重に判断' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-500'}`}>{t.recommendation}</span>
                </div>
                <p className="text-[#6B6560] text-sm">{t.note}</p>
              </div>
            ))}
          </div>

          {/* 授乳中の注意点 */}
          <h2 className="text-2xl font-bold mb-6 text-center">授乳中の注意点</h2>
          <div className="glass-card rounded-2xl p-6 mb-10 border border-[var(--pink-beige)]">
            <p className="text-[#6B6560] text-sm leading-relaxed mb-4">
              授乳中のアートメイクも、多くのクリニックで避けるよう案内されています。その理由は以下の通りです。
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[var(--gold)] font-bold shrink-0">・</span>
                <span>表面麻酔の成分（リドカイン等）が母乳に微量移行する可能性があり、赤ちゃんへの影響を避けるため</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--gold)] font-bold shrink-0">・</span>
                <span>産後のホルモンバランスが未安定で、色素定着や肌の反応が予測しづらい</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--gold)] font-bold shrink-0">・</span>
                <span>育児中はアフターケア（触らない・濡らさない）の遂行が物理的に困難</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--gold)] font-bold shrink-0">・</span>
                <span>睡眠不足・体力低下で施術への耐性が低下している</span>
              </li>
            </ul>
          </div>

          {/* 妊娠前 or 産後 */}
          <h2 className="text-2xl font-bold mb-6 text-center">妊娠前に施術 or 産後に施術？</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {beforeAfter.map((b, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{b.icon}</span>
                  <h3 className="font-bold">{b.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* 産後のベストタイミング */}
          <h2 className="text-2xl font-bold mb-6 text-center">産後のベストタイミング</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {bestTiming.map((b, i) => (
              <div key={i} className="glass-card rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{b.icon}</span>
                  <h3 className="font-bold">{b.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm">{b.desc}</p>
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
            <h2 className="text-xl font-bold mb-4">産後のアートメイクは信頼できるクリニックで</h2>
            <p className="text-[#6B6560] mb-6">カウンセリング丁寧で医療体制が整ったクリニックを選びましょう。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div>
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/knowledge/risk" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">やめたほうがいい？</p>
                <p className="text-xs text-[#8B8580] mt-1">デメリット7つの真実</p>
              </Link>
              <Link href="/knowledge/failure" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">失敗事例10選</p>
                <p className="text-xs text-[#8B8580] mt-1">後悔しないための対策</p>
              </Link>
              <Link href="/purpose/40s-50s" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">40-50代の選び方</p>
                <p className="text-xs text-[#8B8580] mt-1">大人世代向けガイド</p>
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
