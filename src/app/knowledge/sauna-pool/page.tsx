import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイク後のサウナ・温泉・プールはいつから？制限期間を徹底解説【2026年最新】',
  description: 'アートメイク施術後のサウナ・温泉・プール・海水浴の制限期間を完全ガイド。色素定着への影響、一般的な目安（1〜2週間NG）、注意すべきポイント、FAQまで徹底解説。',
  keywords: 'アートメイク サウナ,アートメイク 温泉,アートメイク プール,アートメイク 海 いつから',
  openGraph: {
    title: 'アートメイク後のサウナ・温泉・プールはいつから？制限期間を徹底解説',
    description: '施術後のサウナ・温泉・プールの制限期間と色素定着への影響を徹底解説。',
    type: 'article',
  },
}

const restrictions = [
  { facility: 'サウナ', period: '最低2週間NG', reason: '高温で汗が大量に出て、色素が流出しやすい。血行促進で腫れ・赤みが悪化することも。', icon: '🧖' },
  { facility: '温泉・銭湯', period: '最低2週間NG', reason: '他人と共有する浴場は感染症リスクが高く、傷口がある施術後は特に危険。色素の流出も起こりやすい。', icon: '♨️' },
  { facility: 'プール', period: '最低2週間NG', reason: '塩素が傷口に刺激を与え、色素定着を妨げる。他人との共有で感染リスクも。', icon: '🏊' },
  { facility: '海水浴', period: '最低2〜3週間NG', reason: '塩分・紫外線・雑菌のリスク全てが重なる。夏場の施術は特にタイミングに注意。', icon: '🏖️' },
  { facility: 'ホットヨガ', period: '最低2週間NG', reason: '高温多湿で大量発汗。色素流出・腫れ悪化のリスク。', icon: '🧘' },
  { facility: '激しい運動', period: '最低1週間NG', reason: '発汗・血行促進で色素が定着しにくくなる。軽いウォーキング程度は3日後から可能。', icon: '💪' },
]

const effects = [
  { title: '色素の流出・退色', desc: '施術直後は色素がまだ皮膚に固定されていません。大量の汗・水・高温にさらされると、色素が流出して薄くなります。' },
  { title: '感染症のリスク', desc: '施術部位は小さな傷口の状態。サウナ・温泉・プールなど不特定多数が利用する場所は細菌感染のリスクが高まります。' },
  { title: '炎症の悪化', desc: '高温や激しい運動は血行を促進し、施術部位の腫れ・赤みを悪化させる可能性があります。' },
  { title: 'かさぶたの剥がれ', desc: '施術後はかさぶたができますが、自然に剥がれる前に水分でふやけて剥がれると、色素ムラの原因に。' },
]

const timeline = [
  { period: '施術当日〜3日目', status: '絶対NG', note: '傷口が最も敏感な時期。濡らすことも避け、洗顔もワセリン保護下で慎重に。' },
  { period: '4〜7日目', status: 'NG継続', note: 'かさぶたが形成される期間。触らない・濡らさないが鉄則。' },
  { period: '8〜14日目', status: '回復期（NG）', note: 'かさぶたが自然に剥がれていく時期。この段階で濡らすと定着に影響。' },
  { period: '15〜28日目', status: '徐々に解禁', note: '2週間経過後は短時間のシャワーや軽い運動OK。サウナ・温泉は2週間経過後に個別相談。' },
  { period: '1ヶ月以降', status: '基本OK', note: '色素が完全に定着し、通常の生活に戻れる目安。日焼け止めのケアは引き続き重要。' },
]

const precautions = [
  { icon: '✋', title: '2週間は「我慢」が鉄則', desc: '色素定着の最重要期間。楽しみは施術後に計画することで、せっかくの施術を無駄にしません。' },
  { icon: '🗓️', title: '旅行・イベント前は施術を避ける', desc: '海外旅行・温泉旅行・プールイベント直前の施術は避けましょう。最低3週間の余裕があると安心。' },
  { icon: '❓', title: '迷ったらクリニックに相談', desc: 'クリニックごとに推奨する制限期間は異なります。自己判断せず、施術を受けたクリニックに電話確認が最も確実。' },
  { icon: '🌡️', title: 'お湯の温度にも注意', desc: 'シャワーは熱すぎないぬるめのお湯で。熱いお湯は色素流出を早めます。38℃前後がおすすめ。' },
]

const faqs = [
  { q: 'アートメイク後、サウナに行けるのは何日後ですか？', a: '多くのクリニックで最低2週間は避けることが推奨されています。色素が完全に定着していない状態で高温・大量発汗にさらされると、色素流出・退色の原因になります。施術を受けたクリニックに個別確認するのが最も安全です。' },
  { q: '温泉旅行が予約済みなのですが、間に合わせるにはどうすれば？', a: '施術日は温泉旅行の最低3週間前に設定するのが安全です。すでに予約済みの場合は、施術を旅行後に延期するか、温泉を諦める選択になります。旅行直前の施術はリスクが大きいため避けましょう。' },
  { q: '家のお風呂は大丈夫ですか？', a: '家庭のお風呂（湯船につかる）も、当日は避け、1週間はシャワーのみが推奨されます。湯船は汗をかきやすく、また他の家族と共有している場合は細菌感染リスクもあります。2週間以降から徐々に短時間の入浴を再開しましょう。' },
  { q: 'プールで水に濡れただけでもダメですか？', a: 'はい、プールの水は色素定着期間中は避けるべきです。塩素は傷口に刺激となり、水分そのものが色素流出を促します。また不特定多数が利用するため感染症リスクも高いです。2週間以降から検討しましょう。' },
  { q: '施術後すぐに激しい運動はしてもいいですか？', a: '最低1週間は激しい運動・発汗を伴う運動は避けるべきです。軽いウォーキングや日常動作は問題ありませんが、ジム・ランニング・ホットヨガは1〜2週間控えるのが一般的です。' },
  { q: 'サウナを我慢できなくて行ってしまった場合どうなりますか？', a: '1回の入浴で大きな影響が出るとは限りませんが、色素の定着が悪くなり退色が早まる可能性があります。もし施術後早期にサウナ等を利用した場合は、施術クリニックに相談し、必要であれば早めのリタッチを検討しましょう。' },
]

export default function SaunaPoolPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: 'サウナ・温泉・プール' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">SAUNA & POOL GUIDE</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイク後のサウナ・温泉・プール<br className="md:hidden" />いつから解禁？完全ガイド</h1>
            <p className="text-[#6B6560] leading-relaxed">
              色素定着のためには、施術後の入浴・発汗・水濡れを制限する期間があります。<br />
              せっかくの施術を無駄にしないために、正しい知識を身につけましょう。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>施設別の制限期間の目安</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>色素定着への影響（なぜ制限が必要か）</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>時系列での解禁タイミング</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>注意すべきポイント4項目</li>
            </ul>
          </div>

          {/* 施設別制限 */}
          <h2 className="text-2xl font-bold mb-6 text-center">施設別の制限期間</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {restrictions.map((r, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{r.icon}</span>
                  <div>
                    <h3 className="font-bold">{r.facility}</h3>
                    <p className="text-[var(--gold)] font-bold text-sm">{r.period}</p>
                  </div>
                </div>
                <p className="text-[#6B6560] text-sm">{r.reason}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#8B8580] text-center mb-10">※ 一般的な目安です。クリニックの指示がある場合はそちらに従ってください。</p>

          {/* 色素定着への影響 */}
          <h2 className="text-2xl font-bold mb-6 text-center">色素定着への影響</h2>
          <div className="space-y-4 mb-10">
            {effects.map((e, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-red-100">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="bg-red-100 text-red-500 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">!</span>
                  {e.title}
                </h3>
                <p className="text-[#6B6560] text-sm ml-9">{e.desc}</p>
              </div>
            ))}
          </div>

          {/* 時系列 */}
          <h2 className="text-2xl font-bold mb-6 text-center">施術後の経過と解禁タイミング</h2>
          <div className="space-y-3 mb-10">
            {timeline.map((t, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="font-bold">{t.period}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${t.status === '絶対NG' || t.status === 'NG継続' || t.status === '回復期（NG）' ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-600'}`}>{t.status}</span>
                </div>
                <p className="text-[#6B6560] text-sm">{t.note}</p>
              </div>
            ))}
          </div>

          {/* 注意点 */}
          <h2 className="text-2xl font-bold mb-6 text-center">気をつけるべきポイント</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {precautions.map((p, i) => (
              <div key={i} className="glass-card rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{p.icon}</span>
                  <h3 className="font-bold">{p.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm">{p.desc}</p>
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
            <h2 className="text-xl font-bold mb-4">アフターケアも万全なクリニックを選ぼう</h2>
            <p className="text-[#6B6560] mb-6">施術後のサポート体制が充実しているクリニックなら、不安なく過ごせます。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div>
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/knowledge/bathing" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">お風呂はいつから？</p>
                <p className="text-xs text-[#8B8580] mt-1">入浴制限を詳しく解説</p>
              </Link>
              <Link href="/knowledge/makeup-after" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">メイクはいつから？</p>
                <p className="text-xs text-[#8B8580] mt-1">部位別解禁タイミング</p>
              </Link>
              <Link href="/knowledge/progress" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">経過・ダウンタイム</p>
                <p className="text-xs text-[#8B8580] mt-1">術後の経過を解説</p>
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
