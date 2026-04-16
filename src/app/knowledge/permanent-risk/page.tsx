import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイクは消えない？持続期間・変色リスク・除去方法を徹底解説【2026年最新】',
  description: 'アートメイクは本当に消えないのか？持続期間1〜3年の仕組み、消えにくい原因5つ、変色リスクと対策、レーザー除去の費用と回数、自然に消えるまでの経過を詳しく解説。',
  keywords: 'アートメイク 消えない,アートメイク 消えるまで,アートメイク 除去,アートメイク 変色',
  openGraph: {
    title: 'アートメイクは消えない？持続期間・変色リスク・除去方法を解説',
    description: 'アートメイクの持続期間、変色リスク、除去方法を徹底解説。',
    type: 'article',
  },
}

const whyNotFade = [
  { title: '脂性肌ではない（乾燥肌）', detail: '脂性肌の方はターンオーバーが活発で色素が早く排出されますが、乾燥肌の方は色素が長く留まりやすい傾向があります。' },
  { title: '色素を深く入れすぎた', detail: '施術者の技術により、本来の表皮より深い真皮層に色素が入ってしまうと、タトゥーに近い状態になり消えにくくなります。' },
  { title: '濃い色素を使用した', detail: '黒や濃茶の色素は薄くなるまでに時間がかかります。明るい色素を使用した場合は比較的早く薄くなります。' },
  { title: 'リタッチを繰り返した', detail: '何度もリタッチを重ねると色素が蓄積し、通常より長く残る場合があります。' },
  { title: '体質（代謝が低い）', detail: '基礎代謝が低い方は肌のターンオーバーも遅く、色素の排出に時間がかかります。' },
]

const removalMethods = [
  { method: 'レーザー除去', desc: 'ピコレーザーやQスイッチレーザーで色素を分解。最も一般的な除去方法。', sessions: '3〜5回（色素の量による）', cost: '1回あたり1〜3万円', pain: '輪ゴムで弾かれる程度', downtime: '1〜2週間' },
  { method: '除去液（グリコール酸）', desc: '専用の除去液を使って色素を浮かせて排出させる方法。', sessions: '2〜4回', cost: '1回あたり1〜2万円', pain: '施術時にヒリヒリ感', downtime: '1〜2週間' },
  { method: 'カモフラージュ（カバー）', desc: '肌色に近い色素を上から入れて目立たなくする方法。完全除去ではなくカバー。', sessions: '1〜2回', cost: '1回あたり3〜5万円', pain: '通常のアートメイクと同等', downtime: '1〜2週間' },
  { method: '自然退色を待つ', desc: '何もせず1〜3年かけて自然に薄くなるのを待つ。最も体への負担が少ない。', sessions: '-', cost: '無料', pain: 'なし', downtime: 'なし' },
]

const faqs = [
  { q: 'アートメイクは一生消えないのですか？', a: 'いいえ。アートメイクは表皮（0.02〜0.03mm）に色素を入れるため、肌のターンオーバー（新陳代謝）により1〜3年で徐々に薄くなります。タトゥーは真皮（0.3mm以上）に入れるため半永久的ですが、アートメイクとは根本的に異なります。' },
  { q: '5年経っても消えない場合はどうすれば？', a: '稀に5年以上残るケースがありますが、これは色素が深く入りすぎた可能性があります。レーザー除去で対応可能です。まずは美容皮膚科で相談しましょう。' },
  { q: 'レーザー除去は痛いですか？', a: '輪ゴムで弾かれる程度の痛みです。麻酔クリームを塗布してから施術するため、強い痛みを感じることは少ないです。' },
  { q: '除去費用はどれくらいかかりますか？', a: 'レーザー除去は1回あたり1〜3万円、3〜5回の施術が必要なため、総額5〜15万円が目安です。' },
  { q: '変色した場合はどうすれば？', a: 'カラー修正（上から正しい色素を入れる）で対応可能です。レーザーで変色部分を薄くしてから新しい色素を入れるケースもあります。' },
  { q: 'MRI検査はアートメイクに影響しますか？', a: '微量の金属成分を含む色素もあるため、MRI検査前に必ず申告してください。実際にMRIが受けられなくなるケースは極めて稀です。' },
]

export default function PermanentRiskPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: '消えないリスク' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">PERMANENT RISK</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイクは消えない？<br className="md:hidden" />持続期間と除去方法</h1>
            <p className="text-[#6B6560] leading-relaxed">
              「アートメイクは消えない」という不安をお持ちの方へ。<br />
              持続期間の仕組み、消えにくい原因、除去方法まで詳しく解説します。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 border border-[var(--gold-light)] mb-12">
            <h2 className="text-xl font-bold mb-4 text-center">アートメイクの持続期間</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-[var(--blush)] rounded-2xl p-5">
                <p className="text-3xl font-bold text-[var(--gold)]">1〜2年</p>
                <p className="text-sm text-[#6B6560] mt-1">リップ・アイライン</p>
              </div>
              <div className="bg-[var(--blush)] rounded-2xl p-5">
                <p className="text-3xl font-bold text-[var(--gold)]">1〜3年</p>
                <p className="text-sm text-[#6B6560] mt-1">眉毛（一般的）</p>
              </div>
              <div className="bg-[var(--blush)] rounded-2xl p-5">
                <p className="text-3xl font-bold text-[var(--gold)]">3〜5年</p>
                <p className="text-sm text-[#6B6560] mt-1">稀なケース（深入れ）</p>
              </div>
            </div>
            <p className="text-sm text-[#6B6560] mt-4 text-center">
              ※ 個人差があります。肌質・生活習慣・使用色素により異なります。
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">消えにくい5つの原因</h2>
          <div className="space-y-4 mb-12">
            {whyNotFade.map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-[var(--gold)]">{i + 1}.</span> {item.title}
                </h3>
                <p className="text-sm text-[#6B6560]">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">除去方法4選</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full glass-card rounded-2xl overflow-hidden">
              <thead className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white">
                <tr>
                  <th className="p-3 text-left text-sm">方法</th>
                  <th className="p-3 text-sm">回数</th>
                  <th className="p-3 text-sm">費用</th>
                  <th className="p-3 text-sm">痛み</th>
                  <th className="p-3 text-sm">DT</th>
                </tr>
              </thead>
              <tbody>
                {removalMethods.map((m, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white/50' : 'bg-[var(--blush)]/30'}>
                    <td className="p-3">
                      <p className="font-bold text-sm">{m.method}</p>
                      <p className="text-xs text-[#8B8580] mt-1">{m.desc}</p>
                    </td>
                    <td className="p-3 text-center text-sm">{m.sessions}</td>
                    <td className="p-3 text-center text-sm">{m.cost}</td>
                    <td className="p-3 text-center text-sm">{m.pain}</td>
                    <td className="p-3 text-center text-sm">{m.downtime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-3 mb-12">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card rounded-2xl group">
                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-[var(--blush)] transition-colors rounded-2xl flex items-center justify-between">
                  <span>Q{i + 1}. {faq.q}</span>
                  <span className="text-[var(--gold)] text-xl ml-2 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 py-4 border-t border-[var(--pink-beige)] text-[#6B6560] text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          <div className="glass-card rounded-3xl p-8 border border-[var(--gold-light)] text-center mb-12">
            <h2 className="text-xl font-bold mb-4">消えないリスクを最小化するには</h2>
            <p className="text-[#6B6560] mb-6 text-sm">実績豊富なクリニックで適切な深さ・色素での施術を受けることが重要です。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/knowledge/duration" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">何年持つ？持続期間</p>
                <p className="text-xs text-[#8B8580] mt-1">部位別の持続期間を解説</p>
              </Link>
              <Link href="/knowledge/failure" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">失敗事例10選</p>
                <p className="text-xs text-[#8B8580] mt-1">後悔しないための対策</p>
              </Link>
              <Link href="/knowledge/demerit" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">デメリット完全ガイド</p>
                <p className="text-xs text-[#8B8580] mt-1">メリット・デメリット比較</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
