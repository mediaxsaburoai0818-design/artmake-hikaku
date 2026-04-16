import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイク後のお風呂はいつから？入浴・洗顔のルール【2026年最新】',
  description: 'アートメイク施術後のお風呂・入浴の制限期間を徹底解説。当日は濡らさない、1週間シャワーのみが目安。正しい洗顔方法、色素定着を守るための入浴ルール、FAQまで完全ガイド。',
  keywords: 'アートメイク お風呂 いつから,アートメイク 入浴,アートメイク 洗顔,アートメイク シャワー',
  openGraph: {
    title: 'アートメイク後のお風呂はいつから？入浴・洗顔のルール',
    description: '施術後の入浴・洗顔制限を徹底解説。色素定着を守るためのルール。',
    type: 'article',
  },
}

const timeline = [
  { day: '施術当日', status: '完全NG', detail: '施術部位は絶対に濡らさない。シャワーも避け、身体は下半身のみ浴室外でタオルを濡らして拭き取る程度。' },
  { day: '翌日〜3日目', status: 'シャワーのみ', detail: '顔にかかる水は極力避ける。シャワーは首から下に限定。洗顔は泡を乗せて流すだけの優しい方法で。' },
  { day: '4〜7日目', status: 'シャワー継続', detail: 'かさぶたができる時期。こすらず・剥がさず・優しく流水ケア。' },
  { day: '8〜14日目', status: 'シャワー推奨', detail: 'かさぶたが自然に剥がれていく時期。この段階でも湯船は避け、シャワー中心で。' },
  { day: '15日目以降', status: '入浴解禁', detail: '2週間経過後から湯船も短時間ならOK。熱すぎる温度は避け、38〜40℃のぬるめが推奨。' },
]

const washingRules = [
  { icon: '💧', title: '泡で洗う', desc: 'よく泡立てた洗顔料を施術部位の「上に乗せる」だけで、指でこすらない。泡が汚れを浮かせるイメージで。' },
  { icon: '🚿', title: 'ぬるま湯で流す', desc: '熱すぎるお湯は色素流出を促進します。32〜34℃程度のぬるま湯で、シャワーを直接当てずに流す。' },
  { icon: '🧻', title: 'タオルで押し拭き', desc: 'こすらずに、柔らかいタオルで軽く押さえるように水分を吸収。繊維の硬いタオルはNG。' },
  { icon: '🧴', title: '軟膏をすぐ塗布', desc: '洗顔後はすぐに処方された軟膏（ワセリン等）を塗布。乾燥させないことが色素定着のカギ。' },
  { icon: '❌', title: 'オイルクレンジング禁止', desc: '油分が色素を浮かせる可能性があるため、1〜2週間は泡洗顔のみ。オイルクレンジングは控える。' },
  { icon: '⏱️', title: '洗顔時間は短く', desc: '施術部位を長時間水に晒さないよう、洗顔は1分以内で終わらせるのが理想。' },
]

const bathingPrecautions = [
  { title: '湯船は2週間NG', desc: '湯船は顔が濡れやすく、また長時間お湯に晒されるため色素流出リスクが高まります。湯船の解禁は最低2週間後から。' },
  { title: '熱すぎるお湯は避ける', desc: '高温は血行を促進し、腫れや色素流出の原因に。38〜40℃のぬるめが推奨。42℃以上は色素に悪影響。' },
  { title: 'シャワーは弱めの水圧で', desc: '強い水圧が施術部位に当たると、かさぶたが剥がれたり、色素が流出したりします。水圧は弱めに調整。' },
  { title: '洗顔は朝晩2回が目安', desc: '1日2回以上の洗顔は肌への負担大。朝と夜の2回までに留め、こまめに水で流すのは避ける。' },
]

const faqs = [
  { q: '施術当日、どうしてもお風呂に入りたい場合は？', a: '当日は首から下のシャワーのみに留めましょう。施術部位を絶対に濡らさないよう、防水テープを貼る、シャワーキャップを被る、顔は洗わないなどの工夫が必要です。なるべく当日はお風呂に入らず、温かいタオルで身体を拭く程度にするのが最も安全です。' },
  { q: '湯船に浸かれるのは何日後ですか？', a: '最低2週間後が一般的な目安です。湯船は顔が濡れやすく、血行促進で色素流出のリスクがあるため、シャワーのみの生活を2週間続けることが推奨されます。施術を受けたクリニックの指示に従ってください。' },
  { q: '洗顔料は普通のものを使っていいですか？', a: '刺激の少ない低刺激洗顔料がおすすめです。ピーリング成分・スクラブ入り・アルコール配合の洗顔料は避けましょう。ベビー用洗顔料や、敏感肌用のものが安心です。クリニックから指定がある場合はそれに従ってください。' },
  { q: 'かさぶたが取れそうなときシャワーを浴びて大丈夫ですか？', a: '自然に剥がれる前にシャワーで剥がさないよう注意が必要です。シャワーは弱めの水圧で、施術部位に直接当てないようにしましょう。かさぶたは絶対に自分で剥がさず、自然に取れるのを待ってください。無理に剥がすと色素ムラの原因になります。' },
  { q: 'サウナ・岩盤浴はいつから？', a: 'サウナ・岩盤浴は最低2週間、できれば1ヶ月後まで避けるのが一般的です。高温・大量発汗は色素定着を大きく妨げます。施術後の楽しみは後にして、まず定着を優先しましょう。' },
  { q: '子供のお風呂介助はどうすれば？', a: 'シャワーだけで済ませる・顔に水がかからない位置で介助する・防水テープで施術部位を保護するなどの対策が必要です。可能なら家族に協力してもらい、施術後1週間は子供のお風呂介助を代わってもらうのが理想です。' },
]

export default function BathingPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: 'お風呂' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">BATHING GUIDE</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイク後のお風呂はいつから？<br className="md:hidden" />入浴・洗顔の完全ガイド</h1>
            <p className="text-[#6B6560] leading-relaxed">
              施術当日は絶対に濡らさない、1週間はシャワーのみが基本ルール。<br />
              色素定着を守るための入浴・洗顔の正しい方法を徹底解説。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>施術後の入浴制限スケジュール</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>正しい洗顔方法6つのルール</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>湯船・シャワーの注意点</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>日常シーン別の対処法</li>
            </ul>
          </div>

          {/* 時系列 */}
          <h2 className="text-2xl font-bold mb-6 text-center">施術後の入浴スケジュール</h2>
          <div className="space-y-3 mb-10">
            {timeline.map((t, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="font-bold">{t.day}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${t.status === '完全NG' ? 'bg-red-100 text-red-500' : t.status === '入浴解禁' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-700'}`}>{t.status}</span>
                </div>
                <p className="text-[#6B6560] text-sm">{t.detail}</p>
              </div>
            ))}
          </div>

          {/* 洗顔ルール */}
          <h2 className="text-2xl font-bold mb-6 text-center">正しい洗顔方法6つのルール</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {washingRules.map((r, i) => (
              <div key={i} className="glass-card rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{r.icon}</span>
                  <h3 className="font-bold">{r.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* 入浴の注意点 */}
          <h2 className="text-2xl font-bold mb-6 text-center">入浴時の注意点</h2>
          <div className="space-y-4 mb-10">
            {bathingPrecautions.map((p, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">!</span>
                  {p.title}
                </h3>
                <p className="text-[#6B6560] text-sm ml-9">{p.desc}</p>
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
            <h2 className="text-xl font-bold mb-4">アフターケア指導の丁寧なクリニックを選ぼう</h2>
            <p className="text-[#6B6560] mb-6">術後ケアが充実したクリニックなら、定着率を高く保てます。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div>
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/knowledge/sauna-pool" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">サウナ・温泉・プール</p>
                <p className="text-xs text-[#8B8580] mt-1">制限期間を解説</p>
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
