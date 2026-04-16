import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイクのデメリット8選｜メリットと比較して後悔しない判断を【2026年最新】',
  description: 'アートメイクのデメリット8つとメリット10個を徹底比較。簡単に消せない、ダウンタイムがある、MRI問題など気になるポイントを解説。デメリットを理解した上で賢くクリニックを選ぶ方法も。',
  keywords: 'アートメイク デメリット,アートメイク メリット デメリット,眉毛アートメイク デメリット',
  openGraph: {
    title: 'アートメイクのデメリット8選｜メリットと比較して後悔しない判断を',
    description: 'アートメイクのデメリットとメリットを徹底比較解説。',
    type: 'article',
  },
}

const demerits = [
  { title: '簡単には消せない（1〜3年持続）', detail: 'アートメイクは表皮に色素を入れるため、1〜3年かけて徐々に薄くなります。「すぐに消したい」場合はレーザー除去が必要で、費用と時間がかかります。', mitigation: '最初はナチュラルなデザインを選ぶ。万が一の場合もレーザー除去は可能。クレアージュのように3回に分けて慎重に施術するクリニックなら失敗リスクが低い。' },
  { title: 'ダウンタイムがある（約1〜2週間）', detail: '施術後1〜2日は赤みや腫れが出ることがあり、3〜7日でかさぶたができます。完全に落ち着くまで1〜2週間かかります。', mitigation: '大事なイベントの2週間前までに施術を終える。施術後のケアを徹底する（保湿、日焼け止め、触らない）。' },
  { title: '痛みがある', detail: '麻酔クリームを使用しますが、完全に無痛ではありません。「毛抜きで眉毛を抜く程度」の痛みを感じる方が多いです。', mitigation: '痛みに弱い方は事前にカウンセリングで相談。追加麻酔に対応してくれるクリニックを選ぶ。' },
  { title: '定期的なリタッチが必要', detail: '1〜3年で薄くなるため、美しい状態を保つには定期的なリタッチ（メンテナンス）が必要です。リタッチ費用も考慮する必要があります。', mitigation: 'リタッチ料金が安いクリニックを選ぶ（トゥルーデザインクリニックは29,700円〜）。初回に3回施術するクレアージュならリタッチまでの期間が長い。' },
  { title: '施術者の技術力に仕上がりが左右される', detail: 'アートメイクは施術者の技術・センスに大きく依存します。同じクリニックでもアーティストによって仕上がりが異なることも。', mitigation: '指名制のクリニックで実績豊富なアーティストを選ぶ。症例写真をSNSで確認。メディカルブローのようにアーティストランク制度があるクリニックが透明性が高い。' },
  { title: 'MRI検査で申告が必要', detail: 'アートメイクの色素には微量の金属成分が含まれる場合があり、MRI検査時に申告が必要です。稀にピリピリ感を感じることがあります。', mitigation: 'MRI検査時にアートメイクを受けていることを必ず申告する。実際にMRIが受けられなくなるケースは極めて稀。' },
  { title: '費用が安くはない', detail: '眉毛アートメイクの相場は2回で5〜15万円。リップやアイラインも含めると高額になります。', mitigation: 'モニター価格を活用（メディカルブロー1回28,000円〜、デイジークリニック最大50%OFF）。毎日のメイク時間とコスメ代を考えるとコスパは良い。' },
  { title: 'トレンドの変化に対応しにくい', detail: '流行の眉の形は数年で変わりますが、アートメイクは1〜3年残るため、トレンドが変わった時にデザインが古く見える可能性があります。', mitigation: 'トレンドに左右されないナチュラルなデザインを選ぶ。骨格に合った普遍的なデザインを提案してくれるクリニックを選ぶ。' },
]

const merits = [
  '毎朝のメイク時間を大幅短縮（眉毛メイク10分→0分）',
  'すっぴんでも自然で美しい眉をキープ',
  '汗・水・皮脂でメイクが崩れない',
  'プール・温泉・ジムでも安心',
  '左右対称の美しい眉が手に入る',
  '眉毛が薄い・まばらな方のコンプレックス解消',
  '加齢による眉毛の薄さをカバー',
  'メイク代の節約（年間のアイブロウコスメ代）',
  'プロのデザインで骨格に合った眉に',
  '自信がつき、表情が明るくなる',
]

export default function DemeritPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: 'デメリット' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">MERIT & DEMERIT</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイクのデメリット8選<br className="md:hidden" />メリットと比較して判断</h1>
            <p className="text-[#6B6560] leading-relaxed">
              アートメイクにはメリットだけでなくデメリットもあります。<br />
              両方を正しく理解した上で、後悔しない判断をしましょう。
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">デメリット8選</h2>
          <div className="space-y-5 mb-12">
            {demerits.map((d, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <span className="bg-red-100 text-red-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                  {d.title}
                </h3>
                <div className="bg-[#FFF0F0] rounded-xl p-4 mb-3">
                  <p className="text-sm"><strong className="text-red-400">デメリット：</strong>{d.detail}</p>
                </div>
                <div className="bg-[#F0FAF0] rounded-xl p-4">
                  <p className="text-sm"><strong className="text-green-700">対策・軽減方法：</strong>{d.mitigation}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">メリット10選</h2>
          <div className="glass-card rounded-3xl p-8 border border-[var(--gold-light)] mb-12">
            <div className="grid md:grid-cols-2 gap-3">
              {merits.map((m, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">✦</span>
                  <p className="text-sm">{m}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 border border-[var(--gold-light)] text-center mb-12">
            <h2 className="text-xl font-bold mb-4">結論：デメリットを理解した上で選べば後悔しない</h2>
            <p className="text-[#6B6560] mb-6 text-sm leading-relaxed">
              アートメイクのデメリットのほとんどは、正しいクリニック選びとカウンセリングで回避できます。<br />
              実績豊富なクリニックで丁寧なカウンセリングを受けることが、後悔しない最大のポイントです。
            </p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/knowledge/failure" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">失敗事例10選</p>
                <p className="text-xs text-[#8B8580] mt-1">後悔しないための対策</p>
              </Link>
              <Link href="/knowledge/risk" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">やめたほうがいい？</p>
                <p className="text-xs text-[#8B8580] mt-1">7つの不安を徹底解説</p>
              </Link>
              <Link href="/knowledge/pain" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">痛い？ダウンタイム</p>
                <p className="text-xs text-[#8B8580] mt-1">痛みレベルと経過</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
