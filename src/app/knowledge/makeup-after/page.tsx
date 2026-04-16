import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイク後のメイクはいつから？部位別の解禁タイミング【2026年最新】',
  description: 'アートメイク施術後のメイク解禁時期を徹底解説。眉（1週間目安）・アイライン（1週間目安）・リップ（10〜14日目安）の部位別タイミング、ダウンタイム中の応急カバー法、避けるべきコスメまで完全ガイド。',
  keywords: 'アートメイク メイク いつから,アートメイク後 メイク,アートメイク ダウンタイム メイク',
  openGraph: {
    title: 'アートメイク後のメイクはいつから？部位別の解禁タイミング',
    description: '部位別メイク解禁時期・ダウンタイム中のカバー法を徹底解説。',
    type: 'article',
  },
}

const partTimings = [
  { part: '眉アートメイク', when: '施術1週間後が目安', detail: '施術後1週間はアイブロウパウダー・ペンシルの使用を控えます。かさぶたが自然に剥がれた後にメイク再開するのが一般的。1週間経過後でも、施術部位に直接触れるメイクは避け、上から薄く乗せる程度に。', icon: '✏️' },
  { part: 'アイライン', when: '施術1週間後が目安', detail: 'アイメイクは色素定着のため1週間程度控えるのが一般的。アイシャドウやマスカラは3〜4日後から使用可能なクリニックもありますが、アイラインを描くのは1週間後からが安心。クレンジング時も擦らないよう注意。', icon: '👁️' },
  { part: 'リップアートメイク', when: '施術10〜14日後が目安', detail: 'リップは他の部位より長めの制限期間。かさぶたが完全に剥がれ、皮膚が落ち着くまで10〜14日程度かかります。それまでは口紅・グロスの使用は避け、保湿用ワセリンのみ使用するのが一般的。', icon: '💋' },
]

const downtimeCare = [
  { day: '施術当日', care: 'メイク完全NG', detail: 'クリニックから処方される軟膏（ワセリン等）のみ塗布。触らない・こすらない・濡らさないが鉄則。' },
  { day: '1〜3日目', care: '施術部位以外は可', detail: '眉施術の場合、アイメイクやファンデーションは可能。施術部位を擦らないよう丁寧に。' },
  { day: '4〜6日目', care: 'かさぶた期間', detail: 'かさぶたが自然に剥がれる時期。無理に剥がさず、軟膏ケアを継続。メイクで隠すより保護優先。' },
  { day: '7日目〜', care: '部分解禁', detail: '眉・アイラインは上からのメイク可。施術部位をこすらないよう気をつけて。' },
  { day: '10〜14日目〜', care: 'リップも解禁', detail: 'リップアートメイクも通常のメイク再開可。最初は刺激の少ない口紅を選ぶと安心。' },
]

const coverTips = [
  { icon: '🩹', title: '施術部位は隠さず保護', desc: 'ダウンタイム中の赤みをファンデで隠そうとすると、色素定着が妨げられます。隠すよりも保護優先。マスクや前髪でカバー。' },
  { icon: '👓', title: '眉施術なら眼鏡やマスクを活用', desc: '仕事で人前に出る場合、眼鏡やマスクで自然にカバーできます。写真撮影は控えめに。' },
  { icon: '🏠', title: 'ダウンタイム中は在宅勤務', desc: '可能であれば施術後3〜5日は在宅勤務や有給取得がおすすめ。施術後の1週間は大事な予定を入れないように。' },
  { icon: '🧢', title: 'リップ施術なら帽子・マスク', desc: 'リップは2週間ほどダウンタイムがあるため、マスクで隠すのが一般的。冬場の施術が隠しやすくおすすめ。' },
]

const avoidCosmetics = [
  { item: 'アルコール含有化粧水・乳液', reason: 'アルコールは傷口に刺激を与え、色素定着を妨げる可能性があります。低刺激処方を選びましょう。' },
  { item: 'ピーリング・スクラブ系', reason: '古い角質を除去する成分は、色素を一緒に剥がしてしまうリスクがあります。最低1ヶ月は使用を控えましょう。' },
  { item: 'レチノール・ハイドロキノン', reason: '美白・エイジングケア成分は色素定着に影響することがあります。施術部位への塗布は避けて。' },
  { item: 'オイルクレンジング', reason: '油分が色素を浮かせてしまう可能性があります。1〜2週間は泡洗顔のみが推奨されます。' },
  { item: '海外製の刺激の強い化粧品', reason: '成分が強すぎる可能性があり、かぶれ・色素変化のリスク。日本製の低刺激コスメが推奨されます。' },
]

const faqs = [
  { q: 'ファンデーションはいつから使えますか？', a: '施術部位以外であれば施術翌日から使用可能です。ただし施術部位（眉・アイライン周辺・リップ）にファンデがつくとトラブルの原因になるため、施術部位を避けて塗布しましょう。完全に自由に使えるのは1週間経過後が目安です。' },
  { q: 'アイシャドウは何日後から使えますか？', a: 'アイライン施術を受けた場合、アイシャドウは3〜5日後から使用可能なクリニックが多いです。ただしまぶたの上部分のみに留め、アイラインに直接触れないよう注意。擦らないメイク方法が推奨されます。' },
  { q: 'マスカラ・つけまつげはいつから？', a: 'アイライン施術後、マスカラは3〜5日後、つけまつげは1週間以降が一般的です。つけまつげの接着剤はアイラインに影響する可能性があるため、慎重にタイミングを選びましょう。' },
  { q: '眉マスカラは使ってもいいですか？', a: '眉アートメイク施術後1週間程度は眉マスカラの使用を控えましょう。1週間経過後であれば、軽く乗せる程度なら使用可能です。擦るような使い方は避けて。' },
  { q: '結婚式や大事な予定が近いのですが、いつ施術を受ければ？', a: '結婚式などの大事なイベントは施術後4〜6週間空けるのが理想的です。施術直後の1〜2週間はダウンタイム、その後色が薄くなるのが3〜4週間目、完全に定着するのが1ヶ月後〜です。余裕を持ったスケジュールで予約しましょう。' },
  { q: 'ダウンタイム中にメイクで隠しても色素定着には影響しませんか？', a: '影響します。特に施術直後の1週間は傷が治癒する過程なので、メイクでカバーするのは避けるべきです。赤みや腫れはマスク・眼鏡で隠し、施術部位は軟膏保護が基本となります。' },
]

export default function MakeupAfterPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: '施術後のメイク' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">MAKEUP AFTER TREATMENT</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイク後のメイクはいつから？<br className="md:hidden" />部位別の解禁タイミング</h1>
            <p className="text-[#6B6560] leading-relaxed">
              施術後すぐメイクすると色素定着に悪影響。<br />
              部位別の解禁時期と、ダウンタイム中のカバー法を詳しく解説します。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>部位別メイク解禁タイミング（眉・アイライン・リップ）</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>ダウンタイム中の日別ケアスケジュール</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>施術直後の応急的カバー法</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>使ってはいけないコスメ5つ</li>
            </ul>
          </div>

          {/* 部位別タイミング */}
          <h2 className="text-2xl font-bold mb-6 text-center">部位別メイク解禁タイミング</h2>
          <div className="space-y-5 mb-10">
            {partTimings.map((p, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{p.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{p.part}</h3>
                    <p className="text-[var(--gold)] font-bold text-sm">{p.when}</p>
                  </div>
                </div>
                <p className="text-[#6B6560] text-sm">{p.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#8B8580] text-center mb-10">※ 目安期間です。クリニックの指示に従ってください。</p>

          {/* ダウンタイム中のスケジュール */}
          <h2 className="text-2xl font-bold mb-6 text-center">日別メイクスケジュール</h2>
          <div className="space-y-3 mb-10">
            {downtimeCare.map((d, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="font-bold">{d.day}</h3>
                  <span className="bg-[var(--blush)] text-[var(--gold)] text-xs px-2 py-0.5 rounded-full font-bold">{d.care}</span>
                </div>
                <p className="text-[#6B6560] text-sm">{d.detail}</p>
              </div>
            ))}
          </div>

          {/* 応急カバー法 */}
          <h2 className="text-2xl font-bold mb-6 text-center">ダウンタイム中の応急カバー法</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {coverTips.map((t, i) => (
              <div key={i} className="glass-card rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{t.icon}</span>
                  <h3 className="font-bold">{t.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* 避けるべきコスメ */}
          <h2 className="text-2xl font-bold mb-6 text-center">使ってはいけないコスメ</h2>
          <div className="space-y-4 mb-10">
            {avoidCosmetics.map((c, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-red-100">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="bg-red-100 text-red-500 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">×</span>
                  {c.item}
                </h3>
                <p className="text-[#6B6560] text-sm ml-9">{c.reason}</p>
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
            <h2 className="text-xl font-bold mb-4">アフターケア指導が丁寧なクリニックを選ぼう</h2>
            <p className="text-[#6B6560] mb-6">術後ケアが充実したクリニックなら、色素定着を最大化できます。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div>
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/knowledge/progress" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">経過・ダウンタイム</p>
                <p className="text-xs text-[#8B8580] mt-1">術後の経過を解説</p>
              </Link>
              <Link href="/knowledge/bathing" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">お風呂はいつから？</p>
                <p className="text-xs text-[#8B8580] mt-1">入浴制限を解説</p>
              </Link>
              <Link href="/knowledge/sunscreen" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">紫外線対策</p>
                <p className="text-xs text-[#8B8580] mt-1">日焼け止めのタイミング</p>
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
