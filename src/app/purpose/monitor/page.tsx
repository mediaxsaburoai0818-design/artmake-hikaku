import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイク モニター募集＆安い料金で受ける方法【2026年最新】',
  description: 'アートメイクのモニター制度を徹底解説。モニター価格の相場、各クリニックのモニター料金比較、応募条件・注意点、モニター以外の割引情報まで網羅。安く受けたい方必見。',
  keywords: 'アートメイク モニター 安い,アートメイク モニター募集,アートメイク モニター価格,眉毛アートメイク モニター',
  openGraph: {
    title: 'アートメイク モニター募集＆安い料金で受ける方法',
    description: 'アートメイクのモニター制度と安く受ける方法を徹底解説。',
    type: 'article',
  },
}

const monitorPrices = [
  { name: 'メディカルブロー', score: 95, normalPrice: '55,000円〜', monitorPrice: '1回28,000円〜', discount: '約50%OFF', note: '施術者ランク制。下位ランクでモニター募集が多い。', highlight: true },
  { name: 'クレアージュ東京', score: 92, normalPrice: '132,000円（3回）', monitorPrice: '要問い合わせ', discount: '時期限定', note: '3回セットの料金体系。モニター募集は不定期。' },
  { name: 'デイジークリニック', score: 90, normalPrice: '99,000円〜', monitorPrice: '最大50%OFF', discount: '最大50%OFF', note: 'SNS掲載OKの方が対象。dazzy browのモニターが人気。', highlight: true },
  { name: 'ファーストアートメイク', score: 87, normalPrice: '75,000円〜', monitorPrice: '1回33,000円〜', discount: '約55%OFF', note: '新規限定モニター。カウンセリング当日の施術で適用。' },
  { name: 'トゥルーデザインクリニック', score: 85, normalPrice: '70,000円〜', monitorPrice: '1回30,000円〜', discount: '約57%OFF', note: '症例写真の掲載が条件。自然なデザインに定評。' },
]

const monitorConditions = [
  { title: 'SNS・Webサイトへの症例写真掲載', desc: '施術前後の写真がクリニックのSNSやホームページに掲載されます。顔全体が写るケースと、施術部位のみのケースがあります。' },
  { title: 'アンケート・レビューへの回答', desc: '施術後のアンケートや口コミサイトへのレビュー投稿が求められることがあります。' },
  { title: '施術者の指定ができない場合がある', desc: 'モニター価格の場合、施術者を選べないことがあります。ただし研修を終えた施術者が担当するため、基本的な品質は保たれています。' },
  { title: '施術日時が限定される', desc: '平日限定や特定の時間帯のみなど、スケジュールに制約がある場合があります。' },
  { title: 'デザインの自由度に制限がある場合も', desc: 'クリニックが練習したい技法や色味を指定されることがあります。事前にカウンセリングで確認しましょう。' },
]

const otherDiscounts = [
  { type: '学割', detail: '学生証提示で5〜10%OFF。メディカルブローなどで実施。', icon: '🎓' },
  { type: 'ペア割', detail: '友人・家族と2名同時予約で5〜10%OFF。デイジークリニックなどで実施。', icon: '👯' },
  { type: '乗り換え割', detail: '他院からの乗り換えで5,000〜10,000円OFF。2回目以降の施術が対象。', icon: '🔄' },
  { type: 'SNS割', detail: 'Instagram等でクリニックをフォロー＆施術レポートを投稿で割引。', icon: '📱' },
  { type: '紹介割', detail: '既存患者からの紹介で双方に割引適用。紹介者にもリタッチ割引あり。', icon: '🤝' },
  { type: '平日割', detail: '平日の予約で3,000〜5,000円OFF。人気の少ない時間帯が狙い目。', icon: '📅' },
]

const faqs = [
  { q: 'モニターは誰でも応募できますか？', a: '基本的に初回来院の方が対象です。年齢制限（20歳以上）やSNS掲載への同意など、クリニックごとに条件が異なります。カウンセリング時に詳しい条件を確認しましょう。' },
  { q: 'モニターだと仕上がりが悪くなりませんか？', a: 'モニター施術でも、研修を修了した施術者が担当するため基本品質は確保されています。ただし指名ができない場合があるため、特定の施術者を希望する方は通常料金がおすすめです。' },
  { q: 'モニターの写真は顔全体が公開されますか？', a: 'クリニックにより異なります。施術部位のアップのみ、目元を隠した写真、顔全体など、掲載範囲は事前に確認できます。契約前に必ず確認しましょう。' },
  { q: 'モニター価格で2回セットは受けられますか？', a: 'クリニックにより異なります。メディカルブローは1回のモニター価格を提供、デイジーは2回セットでモニター割引が適用されます。詳細は各クリニックに確認してください。' },
  { q: 'モニター以外で最も安く受ける方法は？', a: '学割やペア割の併用、平日予約、初回限定キャンペーンの活用がおすすめです。複数の割引を組み合わせることで、モニター価格に近い料金で受けられることもあります。' },
  { q: '安すぎるクリニックは危険ですか？', a: '1回10,000円以下など極端に安い場合は注意が必要です。医療機関でない違法サロン、使い捨て器具を使いまわしている、FDA未認可の色素を使用しているなどのリスクがあります。必ず医療機関であることを確認してください。' },
]

export default function MonitorPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '目的別', href: '/purpose/cheap' },
            { name: 'モニター・安い' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">MONITOR & DISCOUNT GUIDE</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイクのモニター募集<br className="md:hidden" />安く受ける完全ガイド</h1>
            <p className="text-[#6B6560] leading-relaxed">
              モニター制度を活用すれば、通常料金の最大50〜60%OFFでアートメイクが受けられます。<br />
              各クリニックのモニター価格・応募条件・注意点を徹底比較します。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>モニター制度の仕組みと応募方法</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>5クリニックのモニター料金比較</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>モニター以外の割引制度（学割・ペア割など）</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>安すぎるクリニックのリスクと見分け方</li>
            </ul>
          </div>

          {/* モニター制度の仕組み */}
          <h2 className="text-2xl font-bold mb-6 text-center">モニター制度の仕組み</h2>
          <div className="glass-card rounded-2xl p-6 mb-10 border border-[var(--pink-beige)]">
            <p className="text-[#6B6560] text-sm leading-relaxed mb-4">
              アートメイクのモニター制度とは、施術の症例写真やレビューを提供する代わりに、通常料金よりも大幅に安い価格で施術を受けられる制度です。
              クリニック側はマーケティング素材を獲得でき、患者側は費用を抑えられるWin-Winの仕組みです。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[var(--blush)] rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">📸</p>
                <p className="font-bold text-sm mb-1">STEP 1</p>
                <p className="text-xs text-[#6B6560]">モニター募集に応募し、カウンセリングで条件を確認</p>
              </div>
              <div className="bg-[var(--blush)] rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">💉</p>
                <p className="font-bold text-sm mb-1">STEP 2</p>
                <p className="text-xs text-[#6B6560]">モニター価格で施術を受ける（通常と同じ品質）</p>
              </div>
              <div className="bg-[var(--blush)] rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">✨</p>
                <p className="font-bold text-sm mb-1">STEP 3</p>
                <p className="text-xs text-[#6B6560]">症例写真の提供やレビューを投稿して完了</p>
              </div>
            </div>
          </div>

          {/* モニター価格比較表 */}
          <h2 className="text-2xl font-bold mb-6 text-center">クリニック別モニター価格比較表</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full glass-card rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white">
                  <th className="p-4 text-left text-sm">クリニック</th>
                  <th className="p-4 text-center text-sm">通常価格</th>
                  <th className="p-4 text-center text-sm">モニター価格</th>
                  <th className="p-4 text-center text-sm">割引率</th>
                  <th className="p-4 text-center text-sm">備考</th>
                </tr>
              </thead>
              <tbody>
                {monitorPrices.map((c, i) => (
                  <tr key={i} className={c.highlight ? 'bg-[var(--blush)]' : i % 2 === 0 ? 'bg-white/50' : ''}>
                    <td className="p-4 text-sm">
                      <span className="font-bold">{c.name}</span>
                      <span className="badge-gold text-xs ml-2">{c.score}点</span>
                    </td>
                    <td className="p-4 text-center text-sm text-[#6B6560]">{c.normalPrice}</td>
                    <td className="p-4 text-center text-sm font-bold text-[var(--gold)]">{c.monitorPrice}</td>
                    <td className="p-4 text-center text-sm font-bold text-[var(--gold)]">{c.discount}</td>
                    <td className="p-4 text-sm text-[#6B6560]">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-[#8B8580] mt-2 text-center">※ 料金は税込の目安です。時期・院により変動する場合があります。</p>
          </div>

          {/* モニター応募の条件・注意点 */}
          <h2 className="text-2xl font-bold mb-6 text-center">モニター応募の条件・注意点</h2>
          <div className="space-y-4 mb-10">
            {monitorConditions.map((c, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                  {c.title}
                </h3>
                <p className="text-[#6B6560] text-sm ml-9">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* モニター以外の割引 */}
          <h2 className="text-2xl font-bold mb-6 text-center">モニター以外の割引制度</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {otherDiscounts.map((d, i) => (
              <div key={i} className="glass-card rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{d.icon}</span>
                  <h3 className="font-bold">{d.type}</h3>
                </div>
                <p className="text-[#6B6560] text-sm">{d.detail}</p>
              </div>
            ))}
          </div>

          {/* 安すぎるクリニックのリスク */}
          <h2 className="text-2xl font-bold mb-6 text-center">安すぎるクリニックのリスク</h2>
          <div className="glass-card rounded-2xl p-6 mb-10 border border-red-200">
            <p className="text-[#6B6560] text-sm leading-relaxed mb-4">
              相場を大きく下回る価格（眉1回10,000円以下など）を提示するクリニックには注意が必要です。
              以下のリスクが潜んでいる可能性があります。
            </p>
            <div className="space-y-3">
              <div className="bg-[#FFF0F0] rounded-xl p-4">
                <p className="text-sm"><strong className="text-red-400">リスク1：</strong>医療機関ではないサロンが違法に施術しているケース。アートメイクは医療行為であり、医師・看護師以外の施術は違法です。</p>
              </div>
              <div className="bg-[#FFF0F0] rounded-xl p-4">
                <p className="text-sm"><strong className="text-red-400">リスク2：</strong>FDA未認可の安価な色素を使用し、変色や肌トラブルのリスクが高いケース。</p>
              </div>
              <div className="bg-[#FFF0F0] rounded-xl p-4">
                <p className="text-sm"><strong className="text-red-400">リスク3：</strong>衛生管理が不十分で感染症リスクがあるケース。使い捨て器具を再利用している悪質な事例も。</p>
              </div>
              <div className="bg-[#FFF0F0] rounded-xl p-4">
                <p className="text-sm"><strong className="text-red-400">リスク4：</strong>施術料金は安いが、指名料・麻酔代・アフターケア代が別途で総額が高くなるケース。</p>
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
            <h2 className="text-xl font-bold mb-4">モニターでお得にアートメイクを始めよう</h2>
            <p className="text-[#6B6560] mb-6">実績と技術が確かなクリニックのモニター制度なら、安心して安く受けられます。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div>
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/purpose/cheap" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">安いクリニック特集</p>
                <p className="text-xs text-[#8B8580] mt-1">コスパ重視の選び方</p>
              </Link>
              <Link href="/compare/price" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">料金比較表</p>
                <p className="text-xs text-[#8B8580] mt-1">全クリニックの料金を一覧比較</p>
              </Link>
              <Link href="/review/medicalbrow" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">メディカルブロー口コミ</p>
                <p className="text-xs text-[#8B8580] mt-1">業界最大手の評判を徹底調査</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
