import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイク 症例・SNS活用ガイド｜インスタで後悔しない選び方【2026年最新】',
  description: 'アートメイクの症例写真・SNS（インスタ・X）の見方を徹底解説。信頼できる症例の見分け方、騙されない注意点、5クリニックの公式SNSまとめ、効果的なハッシュタグ検索のコツまで完全ガイド。',
  keywords: 'アートメイク 症例,アートメイク SNS,アートメイク インスタ,アートメイク ハッシュタグ',
  openGraph: {
    title: 'アートメイク 症例・SNS活用ガイド｜インスタで後悔しない選び方',
    description: 'アートメイクの症例写真の正しい見方・SNS活用法を徹底解説。',
    type: 'article',
  },
}

const trustCriteria = [
  { title: '2週間後・1ヶ月後の定着写真がある', desc: '施術直後は色が濃く見えますが、本当の仕上がりは2週間〜1ヶ月後。定着後の写真が掲載されているクリニックは信頼できます。' },
  { title: '複数アングル（正面・斜め・横）', desc: '正面だけでなく、斜め・横からの写真があると左右バランス・立体感を確認できます。1枚だけの症例は避けましょう。' },
  { title: 'ビフォーアフター両方の掲載', desc: '施術前の写真と施術後の写真を同じ角度・同じ照明で比較できる症例が信頼性の指標です。' },
  { title: '加工・フィルター無しの明記', desc: '過度な加工がされた写真は実物と異なる可能性があります。「加工なし」「無修正」と明記されているかチェック。' },
  { title: '施術者名の記載', desc: '誰が施術したのかが明記されている症例は、施術者の技術力を判断する材料になります。' },
  { title: '多様な年齢・肌質・骨格の症例', desc: '20代〜60代、いろいろな顔立ちの症例があるクリニックは、対応力が高い証拠です。' },
]

const redFlags = [
  { icon: '⚠️', title: '施術直後の濃い写真のみ', desc: '定着前は色が濃く見えるため、鮮やかな写真ばかりの場合は注意。1ヶ月後の写真を必ず確認しましょう。' },
  { icon: '⚠️', title: '加工が強すぎる写真', desc: 'フィルターで肌が均一化されていたり、眉だけ異様にくっきりしている症例は実物と異なる可能性大。' },
  { icon: '⚠️', title: '同じ人物の使い回し', desc: '異なるクリニックで同じ症例写真が使われているケースも。Google画像検索で確認できます。' },
  { icon: '⚠️', title: '症例数が極端に少ない', desc: '公式アカウントでも症例が数十件程度しかない場合、実績不足の可能性があります。' },
  { icon: '⚠️', title: 'いいね・フォロワーの急増', desc: '短期間でフォロワーが急増しているアカウントは買っている可能性。投稿の継続性も確認。' },
]

const clinicSns = [
  {
    name: 'メディカルブロー',
    score: 95,
    hashtag: '#メディカルブロー #7Dストローク',
    feature: '全国30院以上の施術者が個別にInstagramアカウントを運営。指名したい施術者を探しやすい。累計症例23万件超の圧倒的ボリューム。',
    highlight: true,
  },
  {
    name: 'クレアージュ東京',
    score: 92,
    hashtag: '#クレアージュ東京 #アートメイククレアージュ',
    feature: '3回施術の段階ごとの変化をSNSで丁寧に発信。40-50代向けの症例が豊富で、実績10,000件以上。',
  },
  {
    name: 'デイジークリニック',
    score: 90,
    hashtag: '#デイジークリニック #dazzybrow',
    feature: '世界的アーティスト監修のデザイン症例が特徴。海外トレンドを取り入れた症例が見られる。',
  },
  {
    name: 'ファーストアートメイク',
    score: 87,
    hashtag: '#ファーストアートメイク #銀座アートメイク',
    feature: '初心者向けの丁寧な施術解説をSNSで配信。カウンセリング重視の姿勢が伝わる。',
  },
  {
    name: 'トゥルーデザインクリニック',
    score: 85,
    hashtag: '#トゥルーデザインクリニック #大人眉',
    feature: '40-50代の眉デザインに特化した症例が豊富。大阪心斎橋を拠点に発信。',
  },
]

const hashtagTips = [
  { tag: '#アートメイク◯◯（地域名）', desc: '「#アートメイク東京」「#アートメイク大阪」など地域で絞ると通いやすいクリニックが見つかる。' },
  { tag: '#アートメイク◯日目', desc: '「#アートメイク7日目」「#アートメイク1ヶ月」でリアルな経過写真を確認できる。' },
  { tag: '#アートメイク失敗', desc: '失敗事例・後悔事例を知ることで、避けるべきクリニックや施術タイプを把握できる。' },
  { tag: '#◯◯眉', desc: '「#平行眉」「#アーチ眉」など希望デザインで検索すると、理想イメージに近い症例が見つかる。' },
  { tag: '施術者個人のアカウント', desc: 'クリニック公式より個人アカウントのほうが詳細な施術過程を載せていることが多い。' },
]

const faqs = [
  { q: 'SNSの症例写真はどれくらい信用できますか？', a: '一定の参考にはなりますが、加工の可能性やクリニック側が「良い症例」のみを選んで公開していることを踏まえ、複数の情報源と合わせて判断することが重要です。Google口コミ・比較サイト・カウンセリング時の実物確認を組み合わせましょう。' },
  { q: '信頼できる症例の最大のポイントは？', a: '「施術2週間〜1ヶ月後の定着写真がある」ことが最大のポイントです。施術直後は色が濃く見えるため実際の仕上がりとは異なります。定着後の自然な仕上がりが掲載されているかをチェックしましょう。' },
  { q: 'インスタで検索するときのコツは？', a: '地域名＋アートメイク、施術者個人名、希望デザイン名のハッシュタグを組み合わせることです。たとえば「#アートメイク東京」「#平行眉」など。施術者個人アカウントは経過写真が詳細なことが多いのでおすすめです。' },
  { q: 'クリニック公式SNSと施術者個人SNSはどちらを見るべき？', a: '両方見るのが理想です。公式SNSはクリニック全体の方針やキャンペーン情報が分かり、施術者個人SNSは具体的な技術力・センス・施術過程が分かります。特に指名したい施術者がいる場合は個人SNSが重要です。' },
  { q: '症例写真が少ないクリニックは避けるべき？', a: '新規開業のクリニックは症例が少なくても質が高いケースもあります。ただし、開業から2年以上経っているのに症例が極端に少ないクリニックは実績不足の可能性があるため、カウンセリングで直接施術写真を見せてもらいましょう。' },
  { q: '症例写真を見てから予約するまでの流れは？', a: 'SNSで候補クリニックを3〜5院絞り込み → 公式サイトで料金・アクセス確認 → 口コミサイトで評判確認 → 2〜3院カウンセリング予約 → 比較して決定、という流れがおすすめです。SNSだけで決めず、必ず直接話してから契約しましょう。' },
]

export default function SnsCasesPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: '症例・SNS活用' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">SNS & CASE STUDY GUIDE</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイク 症例・SNS活用ガイド<br className="md:hidden" />インスタで後悔しない選び方</h1>
            <p className="text-[#6B6560] leading-relaxed">
              インスタやXで症例を見比べるのが当たり前の時代。<br />
              でも、写真だけで判断すると失敗のリスクが高まります。信頼できる症例の見分け方を徹底解説。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>信頼できる症例写真の6つの特徴</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>騙されない注意点・レッドフラグ</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>5クリニックの公式SNS・ハッシュタグ</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>効果的なハッシュタグ検索のコツ</li>
            </ul>
          </div>

          {/* SNS症例の見方 */}
          <h2 className="text-2xl font-bold mb-6 text-center">SNSで症例を見る基本</h2>
          <div className="glass-card rounded-2xl p-6 mb-10 border border-[var(--pink-beige)]">
            <p className="text-[#6B6560] text-sm leading-relaxed mb-3">
              アートメイクの情報収集で最も活用されているのがInstagramとXです。
              クリニック公式アカウント・施術者個人アカウント・患者のリアルな声が見られるため、決定前の情報源として非常に重要です。
            </p>
            <p className="text-[#6B6560] text-sm leading-relaxed">
              ただし、SNSは「良い面だけを切り取って発信」することが可能です。本当に信頼できる情報かどうか、見分ける知識が必要になります。
            </p>
          </div>

          {/* 信頼できる症例の特徴 */}
          <h2 className="text-2xl font-bold mb-6 text-center">信頼できる症例写真の6つの特徴</h2>
          <div className="space-y-4 mb-10">
            {trustCriteria.map((c, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                  {c.title}
                </h3>
                <p className="text-[#6B6560] text-sm ml-9">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* 騙されない注意点 */}
          <h2 className="text-2xl font-bold mb-6 text-center">騙されないための注意点（レッドフラグ）</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {redFlags.map((r, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-red-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{r.icon}</span>
                  <h3 className="font-bold">{r.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* 5クリニックの公式SNS */}
          <h2 className="text-2xl font-bold mb-6 text-center">5クリニックの公式SNS情報</h2>
          <div className="space-y-5 mb-10">
            {clinicSns.map((c, i) => (
              <div key={i} className={`glass-card rounded-2xl p-6 ${c.highlight ? 'border-2 border-[var(--gold-light)]' : 'border border-[var(--pink-beige)]'}`}>
                <div className="flex flex-wrap items-baseline gap-2 mb-3">
                  <h3 className="font-bold text-lg">{c.name}</h3>
                  <span className="badge-gold text-xs">{c.score}点</span>
                </div>
                <div className="bg-[var(--blush)] rounded-xl p-3 mb-3">
                  <p className="text-xs text-[#8B8580] mb-1">主な検索ハッシュタグ</p>
                  <p className="font-mono text-sm text-[var(--gold)]">{c.hashtag}</p>
                </div>
                <p className="text-[#6B6560] text-sm">{c.feature}</p>
              </div>
            ))}
            <p className="text-xs text-[#8B8580] text-center">※ 公式アカウントは各クリニック公式サイトで最新URLをご確認ください。</p>
          </div>

          {/* ハッシュタグ検索のコツ */}
          <h2 className="text-2xl font-bold mb-6 text-center">ハッシュタグ検索のコツ</h2>
          <div className="space-y-4 mb-10">
            {hashtagTips.map((t, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <p className="font-mono text-sm text-[var(--gold)] font-bold mb-2">{t.tag}</p>
                <p className="text-[#6B6560] text-sm">{t.desc}</p>
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
            <h2 className="text-xl font-bold mb-4">症例豊富なクリニックから選ぼう</h2>
            <p className="text-[#6B6560] mb-6">累計症例数・SNS発信の質は、クリニックの実力を測る重要な指標です。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div>
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/knowledge/failure" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">失敗事例10選</p>
                <p className="text-xs text-[#8B8580] mt-1">後悔しないための対策</p>
              </Link>
              <Link href="/knowledge/risk" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">やめたほうがいい？</p>
                <p className="text-xs text-[#8B8580] mt-1">デメリット7つの真実</p>
              </Link>
              <Link href="/review/medicalbrow" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">メディカルブロー口コミ</p>
                <p className="text-xs text-[#8B8580] mt-1">業界最大手の評判</p>
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
