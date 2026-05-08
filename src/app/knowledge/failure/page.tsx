import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイクの失敗事例10選と後悔しないための対策【2026年最新】',
  description: 'アートメイクで後悔・失敗した実例10パターンを徹底解説。左右非対称、色が濃すぎる、デザインが古いなどの失敗原因と対処法、後悔しないクリニック選び5つのポイントを紹介。',
  keywords: 'アートメイク 失敗,アートメイク 後悔,アートメイク 失敗例,眉毛アートメイク 失敗',
  openGraph: {
    title: 'アートメイクの失敗事例10選と後悔しないための対策',
    description: 'アートメイクの失敗事例と後悔しないための対策を徹底解説。',
    type: 'article',
  },
}

const failures = [
  {
    title: '左右非対称になった',
    cause: '施術者の技術不足、カウンセリング不足。顔の筋肉の動きを考慮していない。',
    prevention: '症例写真が豊富なクリニックを選ぶ。施術前に鏡で左右のバランスを入念に確認する。',
    fix: 'リタッチで修正可能。薄い方に合わせて追加施術。',
  },
  {
    title: '色が濃すぎる・不自然',
    cause: '色素の入れすぎ、肌質に合わない色素選び。施術直後は濃く見えるのが通常だが、定着後も濃い場合は失敗。',
    prevention: '3回に分けて施術するクレアージュのような慎重なアプローチのクリニックを選ぶ。',
    fix: 'レーザー除去で薄くする。時間経過（1〜2年）で自然に薄くなることも。',
  },
  {
    title: 'デザインが思っていたのと違う',
    cause: 'カウンセリングでの認識のズレ。「お任せ」にしてしまい、自分の希望を伝えきれなかった。',
    prevention: '理想の眉の写真を持参する。デザイン確定前に鏡で何度も確認。微調整を遠慮なくお願いする。',
    fix: '薄くなるのを待ってからリタッチでデザイン変更。',
  },
  {
    title: '色がすぐに薄くなった',
    cause: '脂性肌の方は色素が定着しにくい。施術後のケア不足（触りすぎ、日焼け）も原因。',
    prevention: '肌質を事前にカウンセリングで相談。アフターケアを徹底する。',
    fix: 'リタッチ（2回目以降の施術）で色を補充。',
  },
  {
    title: '変色してしまった',
    cause: '使用する色素の品質問題。安価な色素はグレーや青みがかった色に変色するリスクがある。',
    prevention: 'FDA認可の色素を使用しているクリニックを選ぶ。カウンセリングで色素の種類を確認。',
    fix: 'カラー修正施術で上からカバー。レーザー除去後にやり直しも可能。',
  },
  {
    title: 'ダウンタイムが想定以上だった',
    cause: '施術部位や体質による個人差。事前説明が不十分なクリニックも。',
    prevention: '施術後1〜2週間のスケジュールを確保。大事なイベント前は避ける。',
    fix: '時間経過で自然に回復（通常1〜2週間）。',
  },
  {
    title: 'アレルギー反応が出た',
    cause: '色素に対するアレルギー。極めて稀だが、金属アレルギーの方は注意。',
    prevention: 'パッチテストを実施しているクリニックを選ぶ。アレルギー体質は事前に申告。',
    fix: '医師の診断を受ける。抗アレルギー薬で対応。',
  },
  {
    title: 'トレンドが変わってデザインが古くなった',
    cause: '流行のデザイン（極細眉、太眉など）を選んでしまった。',
    prevention: 'トレンドに左右されないナチュラルデザインを選ぶ。骨格に合った普遍的なデザインを提案してくれるクリニックを選ぶ。',
    fix: '1〜3年で自然に薄くなるため、薄くなった後に新しいデザインでリタッチ。',
  },
  {
    title: '施術後の感染症',
    cause: '施術環境の衛生管理不足。アフターケアの不徹底。',
    prevention: '医療機関であることを確認。クリニックの衛生管理体制を事前にチェック。',
    fix: '速やかに医師の診断を受ける。抗生物質で治療。',
  },
  {
    title: '料金トラブル（追加費用の請求）',
    cause: '施術料金以外に指名料、麻酔代、アフターケア代が別途かかるケース。',
    prevention: '総額表示のクリニックを選ぶ。指名料無料のクレアージュなどがおすすめ。カウンセリングで総額を確認。',
    fix: '契約前に書面で料金を確認。消費者センターに相談。',
  },
]

const preventionPoints = [
  { num: 1, title: '医療機関であることを確認する', desc: 'アートメイクは医療行為です。医師・看護師の資格を持つ施術者がいるクリニックを選びましょう。エステサロンでの施術は違法であり、トラブルの原因になります。' },
  { num: 2, title: '症例写真を必ず確認する', desc: '施術直後ではなく「2週間後」の症例写真を確認しましょう。施術直後は濃く見えるため、定着後の仕上がりが本当の結果です。自分と近い年代・骨格の症例があるかもチェック。' },
  { num: 3, title: 'カウンセリングで妥協しない', desc: 'デザインに納得いくまでカウンセリングを受けましょう。理想の眉の写真を持参し、左右のバランスを鏡で何度も確認。「お任せ」は避けて、自分の希望を明確に伝えることが重要です。' },
  { num: 4, title: '料金の総額を確認する', desc: '施術料金だけでなく、指名料・麻酔代・リタッチ代の総額を確認。「安い」と思っても追加費用で高額になるケースがあります。クレアージュのような指名料無料・明朗会計のクリニックがおすすめ。' },
  { num: 5, title: '2〜3院のカウンセリングを比較する', desc: '1院だけで決めず、2〜3院のカウンセリングを受けて比較しましょう。カウンセリングの丁寧さ・提案力・クリニックの雰囲気を比べることで、自分に合ったクリニックが見つかります。' },
]

export default function FailurePage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: '失敗事例と対策' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">FAILURE CASES & PREVENTION</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイクの失敗事例10選<br className="md:hidden" />後悔しないための対策</h1>
            <p className="text-[#6B6560] leading-relaxed">
              アートメイクで「後悔した」「失敗した」という声は少なくありません。<br />
              しかし、事前に失敗パターンを知っておけば、ほとんどのトラブルは防げます。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>アートメイクの失敗事例10パターンとその原因</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>各失敗の予防法と対処法</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>後悔しないクリニック選び5つのポイント</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>失敗した場合のリカバリー方法</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-8 text-center">アートメイクの失敗事例10選</h2>
          <div className="space-y-6">
            {failures.map((f, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                  {f.title}
                </h3>
                <div className="space-y-3">
                  <div className="bg-[#FFF0F0] rounded-xl p-4">
                    <p className="text-sm"><strong className="text-red-400">原因：</strong>{f.cause}</p>
                  </div>
                  <div className="bg-[var(--blush)] rounded-xl p-4">
                    <p className="text-sm"><strong className="text-[var(--gold)]">予防法：</strong>{f.prevention}</p>
                  </div>
                  <div className="bg-[#F0FAF0] rounded-xl p-4">
                    <p className="text-sm"><strong className="text-green-700">対処法：</strong>{f.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-16 mb-8 text-center">後悔しないための5つのポイント</h2>
          <div className="space-y-5">
            {preventionPoints.map((p) => (
              <div key={p.num} className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm">{p.num}</span>
                  <h3 className="font-bold text-lg">{p.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm ml-12">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 glass-card rounded-3xl p-8 border border-[var(--gold-light)] text-center">
            <h2 className="text-xl font-bold mb-4">失敗リスクを最小化するなら</h2>
            <p className="text-[#6B6560] mb-6">実績豊富で口コミ評価の高いクリニックを選ぶことが最も重要です。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/knowledge/risk" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">やめたほうがいい？</p>
                <p className="text-xs text-[#8B8580] mt-1">デメリット7つの真実</p>
              </Link>
              <Link href="/knowledge/demerit" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">デメリット完全ガイド</p>
                <p className="text-xs text-[#8B8580] mt-1">メリット・デメリット徹底比較</p>
              </Link>
              <Link href="/knowledge/permanent-risk" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">消えないリスクは？</p>
                <p className="text-xs text-[#8B8580] mt-1">持続期間と除去方法</p>
              </Link>
              <Link href="/compare/all-clinics" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">全5クリニック完全比較</p>
                <p className="text-xs text-[#8B8580] mt-1">15項目で徹底ランキング</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
