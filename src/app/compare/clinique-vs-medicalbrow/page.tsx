import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title:
    'クリニーク大阪心斎橋 vs メディカルブロー 徹底比較【2026年】4D眉の料金・総額・どっちが自然か解説',
  description:
    'クリニーク大阪心斎橋とメディカルブローを4D眉の料金・総額・技法で徹底比較。クリニークは4D眉1回65,780円（初回）〜と総額が明確、メディカルブローはモニター28,000円〜だがランク制で指名により総額が変動。大阪で総額を把握して選びたい人・全国で入口価格を抑えたい人、それぞれどっちが向くかを公式確認の実額（2026年確認）で解説します（医療行為・個人差あり）。',
  keywords: ['クリニーク メディカルブロー 比較', 'クリニーク大阪心斎橋 アートメイク', 'クリニーク 4D眉 料金', 'アートメイク 大阪 比較'],
  openGraph: {
    title: 'クリニーク大阪心斎橋 vs メディカルブロー 徹底比較【2026年】4D眉の料金で解説',
    description: '4D眉の総額が明確なクリニークと、モニター入口が安いメディカルブローを実額で比較。どっちが向くか中立解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'アートメイク比較ナビ',
  },
}

const comparisonItems = [
  {
    label: '4D眉の料金',
    clinique: '4D眉（毛並み＋パウダー）1回 初回限定65,780円／通常87,780円、2回 初回限定109,780円／通常148,280円',
    mb: 'モニター 28,000円〜（ランク別・1回）／通常2回 90,000〜150,000円（ランク別）',
    note: '入口の安さはメディカルブローのモニター28,000円〜。ただしランク制で、上位アーティストを指名すると指名料が加わり総額が上がります。クリニークは「初回いくら・通常いくら」と2回セットの総額まで提示されており、支払う金額が読みやすいのが特徴です。',
  },
  {
    label: '技法',
    clinique: '4D眉（毛並み＋パウダー）・3D眉（毛並み2回60,280円）・アイライン33,000円',
    mb: '毛並み系の精密技法（ランク・アーティストにより対応が異なる）',
    note: 'クリニークは「4D＝毛並み＋パウダーのコンビ」「3D＝毛並み」と技法ごとの料金が明確です。技法名の定義はクリニックで異なるため、仕上がりは症例写真で確認するのが確実です。',
  },
  {
    label: '料金体系のわかりやすさ',
    clinique: '技法・回数ごとに定額が提示され、総額を把握しやすい',
    mb: 'ランク制のため、指名するアーティストで総額が変わる',
    note: '「最初にいくら払うか」を把握しやすいのはクリニーク、「予算に合わせてアーティストを選べる幅」があるのはメディカルブローです。指名料込みの総額で比較しましょう。',
  },
  {
    label: '通いやすさ・展開',
    clinique: '大阪・心斎橋の院が中心（地域が限られる）',
    mb: '全国に多数の院を展開・症例数が豊富',
    note: '大阪・関西で受けたい方はクリニークが候補になります。全国どこでも通いやすさ・症例の多さを重視するならメディカルブローです。お住まいの地域に院があるかで選び分けてください。',
  },
]

const faqs = [
  {
    q: 'クリニークとメディカルブロー、4D眉はどっちが安いですか？',
    a: '入口価格はメディカルブローのモニター28,000円〜（1回・ランク別）が低めです。クリニークは4D眉1回が初回限定65,780円（通常87,780円）です。ただしメディカルブローはランク制で、上位アーティストを指名すると指名料が加算されて総額が上がります。クリニークは2回セットの総額（初回109,780円／通常148,280円）まで明示されているため、支払う金額が読みやすいのが強みです。回数と指名料込みの総額で比べるのが大切です。料金は変動するため必ず公式・カウンセリングで最新をご確認ください。',
  },
  {
    q: 'クリニークはどこにありますか？大阪だけですか？',
    a: 'クリニークのアートメイクは大阪・心斎橋の院が中心です。関西で受けたい方に向きます。全国で通いやすさを重視する場合は、多数の院を展開するメディカルブローなど他院も検討するとよいでしょう。',
  },
  {
    q: '4D眉と3D眉は何が違いますか？',
    a: '一般に4Dは「毛並み（3D）＋パウダー（2D）」を組み合わせたコンビネーション、3Dは毛並み中心の技法を指します。クリニークでは4D眉と3D眉（2回60,280円）が別料金で用意されています。ただし「◯D」の呼称の定義はクリニックにより異なるため、数字ではなく症例写真と施術者の技術で選ぶのが確実です。技法の違いは技法比較のページもあわせてご覧ください。',
  },
  {
    q: '結局どちらを選べばいいですか？',
    a: '「大阪・関西で受けたい」「4D眉の総額をはっきり把握して決めたい」ならクリニーク、「入口価格を抑えたい」「全国で通いやすい院や症例の多さを重視する」ならメディカルブローが向きます。どちらも施術者の技術と症例との相性が仕上がりを左右するため、料金だけでなくカウンセリングで症例写真を見て判断するのがおすすめです。アートメイクは医療行為であり、仕上がり・持続には個人差があります。',
  },
]

export default function CliniqueVsMedicalbrowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
      <Breadcrumb items={[{ name: '比較' }, { name: 'クリニーク vs メディカルブロー' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            クリニーク大阪心斎橋<br className="hidden md:block" /> vs メディカルブロー 徹底比較
          </h1>
          <p className="text-gray-600 md:text-lg mb-8">
            <strong>4D眉の総額が明確</strong>なクリニークと、<strong>モニター入口が安い</strong>メディカルブロー。
            「料金はどっちが読みやすい？」「大阪で受けるなら？」に、公式確認の実額で答えます。
          </p>
          <a href="#conclusion" className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-bold px-8 py-3 rounded-full transition">
            結論を先に見る
          </a>
        </div>
      </section>

      {/* 結論先出し */}
      <section className="py-14 px-4 bg-white" id="conclusion">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">結論：どっちを選ぶべき？</h2>
          <p className="text-center text-gray-500 mb-10">重視ポイントで向くクリニックが変わります</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-300 rounded-2xl p-8">
              <div className="text-center mb-4">
                <span className="inline-block bg-sky-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">大阪で総額を把握して決めたいなら</span>
                <h3 className="text-2xl font-bold text-gray-900">クリニーク大阪心斎橋</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-sky-500 font-bold mt-0.5">&#10003;</span>4D眉1回65,780円（初回）〜と、2回の総額まで明確</li>
                <li className="flex items-start gap-2"><span className="text-sky-500 font-bold mt-0.5">&#10003;</span>4D眉・3D眉・アイラインが技法ごとの定額でわかりやすい</li>
                <li className="flex items-start gap-2"><span className="text-sky-500 font-bold mt-0.5">&#10003;</span>大阪・心斎橋で受けたい関西の方に通いやすい</li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">支払う金額を先に把握したい方、関西で受けたい方に向きます</p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-300 rounded-2xl p-8">
              <div className="text-center mb-4">
                <span className="inline-block bg-rose-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">入口価格を抑えたい・全国で選びたいなら</span>
                <h3 className="text-2xl font-bold text-gray-900">メディカルブロー</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-rose-500 font-bold mt-0.5">&#10003;</span>モニター28,000円〜と入口価格が低め</li>
                <li className="flex items-start gap-2"><span className="text-rose-500 font-bold mt-0.5">&#10003;</span>ランク制で、予算に合わせてアーティストを選べる</li>
                <li className="flex items-start gap-2"><span className="text-rose-500 font-bold mt-0.5">&#10003;</span>全国に多数の院・症例数が豊富</li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">初期費用を抑えたい方、全国で通いやすさ・症例数を重視する方に向きます（上位ランク指名は総額が上がる点に注意）</p>
            </div>
          </div>
        </div>
      </section>

      {/* 比較表 */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">4項目で徹底比較</h2>
          <div className="space-y-5">
            {comparisonItems.map((it) => (
              <div key={it.label} className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-center">{it.label}</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-3">
                  <div className="bg-sky-50 rounded-xl p-4">
                    <p className="text-xs font-bold text-sky-600 mb-1">クリニーク大阪心斎橋</p>
                    <p className="text-sm text-gray-800">{it.clinique}</p>
                  </div>
                  <div className="bg-rose-50 rounded-xl p-4">
                    <p className="text-xs font-bold text-rose-600 mb-1">メディカルブロー</p>
                    <p className="text-sm text-gray-800">{it.mb}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{it.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6 bg-white rounded-lg p-4">
            ※料金は各院の公式情報にもとづく確認値です（2026年確認・キャンペーン・ランク・時期により変動）。「◯D」の技法名の定義はクリニックにより異なります。アートメイクは医療行為であり、仕上がり・持続・ダウンタイムには個人差があります。最新の料金・条件は必ず各院の公式サイト・カウンセリングでご確認ください。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-gray-50 rounded-xl p-5">
                <summary className="font-bold text-gray-900 cursor-pointer">{f.q}</summary>
                <p className="text-sm text-gray-700 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 次の導線 */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">それぞれの詳細・他院とも比べる</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/review/clinique/" className="border border-sky-300 text-sky-600 font-bold px-6 py-3 rounded-full transition hover:bg-sky-50">クリニーク大阪心斎橋の詳細</Link>
            <Link href="/review/medicalbrow/" className="border border-rose-300 text-rose-600 font-bold px-6 py-3 rounded-full transition hover:bg-rose-50">メディカルブローの詳細</Link>
            <Link href="/area/osaka/" className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-6 py-3 rounded-full transition">大阪のクリニックを比較</Link>
            <Link href="/compare/technique/" className="border border-rose-300 text-rose-600 font-bold px-6 py-3 rounded-full transition hover:bg-rose-50">2D/3D/4D/6Dの技法比較</Link>
          </div>
        </div>
      </section>
    </>
  )
}
