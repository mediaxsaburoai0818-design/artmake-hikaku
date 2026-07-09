import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title:
    'THE ARTMAKE TOKYO vs メディカルブロー 徹底比較【2026年】モニター料金・条件・どっちが安いか解説',
  description:
    'THE ARTMAKE TOKYOとメディカルブローを、モニター価格・通常価格・条件で徹底比較。メディカルブローはモニター28,000円〜（ランク制で指名により変動）、THE ARTMAKE TOKYOはモニター2回88,000円〜（写真掲載条件・経験者は+20,000円）。初期費用を抑えたい人・条件を把握して選びたい人、それぞれどっちが向くかを公式確認の実額で解説します（医療行為・個人差あり）。',
  keywords: ['THE ARTMAKE TOKYO メディカルブロー 比較', 'アートメイク モニター 比較', 'メディカルブロー モニター 料金', 'THE ARTMAKE TOKYO 料金'],
  openGraph: {
    title: 'THE ARTMAKE TOKYO vs メディカルブロー 徹底比較【2026年】モニター料金・条件で解説',
    description: 'モニター前面の2院を実額で比較。28,000円〜と88,000円〜、条件の違いとどっちが向くかを中立解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'アートメイク比較ナビ',
  },
}

const comparisonItems = [
  {
    label: 'モニター価格（眉）',
    tokyo: 'モニター2回 88,000円〜（土日祝は98,000円）',
    mb: 'モニター 28,000円〜（ランク別・1回）',
    note: 'モニター価格の入口はメディカルブローが低めです。ただしメディカルブローはアーティストのランク制で、上位ランクを指名すると指名料が加わり総額が上がります。THE ARTMAKE TOKYOは2回セットのモニター価格が明確な一方、写真掲載などの条件が付きます。',
  },
  {
    label: '通常価格（眉）',
    tokyo: '通常1回 80,000円／2回 150,000円',
    mb: '2回 90,000〜150,000円（ランク別）',
    note: 'モニターを使わない通常価格は、どちらも2回で15万円前後の水準です。メディカルブローはランクで幅があり、下位ランクなら90,000円台から、上位ランクは150,000円まで変動します。',
  },
  {
    label: 'モニターの条件',
    tokyo: '症例写真の撮影・掲載への協力が前提。経験者（他院施術済み）は+20,000円',
    mb: 'ランク・キャンペーンにより条件が異なる。学割・ペア割などの割引制度あり',
    note: 'THE ARTMAKE TOKYOのモニターは「経験者は追加料金」という明確な条件があります。メディカルブローは割引制度が多彩な分、適用条件を個別に確認する必要があります。いずれもモニターは症例協力が前提になる点は共通です。',
  },
  {
    label: '料金体系のわかりやすさ',
    tokyo: 'モニター2回◯円と総額が提示されやすい',
    mb: 'ランク制のため、指名するアーティストで総額が変わる',
    note: '「最初にいくらか」を把握しやすいのはTHE ARTMAKE TOKYO、「安く抑える選択肢の幅」があるのはメディカルブロー、という違いがあります。指名料込みの総額で比較するのがおすすめです。',
  },
  {
    label: '展開',
    tokyo: '全国に複数院を展開',
    mb: '全国に多数の院を展開・症例数が豊富',
    note: 'どちらも全国展開していますが、院数・症例の蓄積はメディカルブローが多い傾向です。通いやすさは、お住まいの地域の院の有無で確認してください。',
  },
]

const faqs = [
  {
    q: 'THE ARTMAKE TOKYOとメディカルブロー、モニターはどっちが安いですか？',
    a: 'モニターの入口価格はメディカルブローの28,000円〜（1回・ランク別）が低めです。THE ARTMAKE TOKYOはモニター2回で88,000円〜（土日祝98,000円）です。ただしメディカルブローはランク制で、上位のアーティストを指名すると指名料が加算されて総額が上がります。回数（1回か2回か）と指名料込みの総額で比べることが大切です。料金は変動するため、必ず各院の公式・カウンセリングで最新の条件をご確認ください。',
  },
  {
    q: 'モニター価格には条件がありますか？',
    a: 'あります。どちらのモニターも、施術の症例写真の撮影・掲載に協力することが前提になります。THE ARTMAKE TOKYOは他院で施術経験がある方（経験者）は+20,000円という条件が公表されています。メディカルブローはランクやキャンペーン、学割・ペア割などで適用条件が異なります。「モニター＝無条件で安い」ではない点に注意し、条件を確認してから決めましょう。',
  },
  {
    q: '通常価格（モニターを使わない場合）はどちらが高いですか？',
    a: 'どちらも眉2回で15万円前後と近い水準です。THE ARTMAKE TOKYOは通常1回80,000円・2回150,000円、メディカルブローはランク別で2回90,000〜150,000円です。メディカルブローは下位ランクを選べば通常でも抑えられますが、上位ランクは150,000円まで上がります。',
  },
  {
    q: '結局どちらを選べばいいですか？',
    a: '「最初に払う総額をはっきり把握して決めたい」ならTHE ARTMAKE TOKYO、「入口価格を抑えたい・割引制度や指名の選択肢が欲しい」ならメディカルブローが向きます。どちらも施術者の技術や症例との相性が仕上がりを左右するため、料金だけでなくカウンセリングで症例写真を見て判断するのがおすすめです。アートメイクは医療行為であり、仕上がりや持続には個人差があります。',
  },
]

export default function ArtmakeTokyoVsMedicalbrowPage() {
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
      <Breadcrumb items={[{ name: '比較' }, { name: 'THE ARTMAKE TOKYO vs メディカルブロー' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            THE ARTMAKE TOKYO<br className="hidden md:block" /> vs メディカルブロー 徹底比較
          </h1>
          <p className="text-gray-600 md:text-lg mb-8">
            モニター価格を前面に出す2院を、<strong>実際の料金と条件</strong>で比較。
            「モニターはどっちが安い？」「条件は？」に、公式確認の数字で答えます。
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
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-violet-300 rounded-2xl p-8">
              <div className="text-center mb-4">
                <span className="inline-block bg-violet-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">総額を把握して決めたいなら</span>
                <h3 className="text-2xl font-bold text-gray-900">THE ARTMAKE TOKYO</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-violet-500 font-bold mt-0.5">&#10003;</span>モニター2回88,000円〜と総額が明確</li>
                <li className="flex items-start gap-2"><span className="text-violet-500 font-bold mt-0.5">&#10003;</span>「経験者は+20,000円」など条件が公表されていて分かりやすい</li>
                <li className="flex items-start gap-2"><span className="text-violet-500 font-bold mt-0.5">&#10003;</span>指名料でブレにくく、最初に払う額を見積もりやすい</li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">最初の総額をはっきりさせたい方、条件を把握して納得して受けたい方に向きます</p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-300 rounded-2xl p-8">
              <div className="text-center mb-4">
                <span className="inline-block bg-rose-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">入口価格を抑えたいなら</span>
                <h3 className="text-2xl font-bold text-gray-900">メディカルブロー</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-rose-500 font-bold mt-0.5">&#10003;</span>モニター28,000円〜と入口価格が低め</li>
                <li className="flex items-start gap-2"><span className="text-rose-500 font-bold mt-0.5">&#10003;</span>ランク制で、予算に合わせてアーティストを選べる</li>
                <li className="flex items-start gap-2"><span className="text-rose-500 font-bold mt-0.5">&#10003;</span>学割・ペア割など割引制度が多彩・症例数が豊富</li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">初期費用を抑えたい方、指名や割引の選択肢を活かしたい方に向きます（上位ランク指名は総額が上がる点に注意）</p>
            </div>
          </div>
        </div>
      </section>

      {/* 比較表 */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">5項目で徹底比較</h2>
          <div className="space-y-5">
            {comparisonItems.map((it) => (
              <div key={it.label} className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-center">{it.label}</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-3">
                  <div className="bg-violet-50 rounded-xl p-4">
                    <p className="text-xs font-bold text-violet-600 mb-1">THE ARTMAKE TOKYO</p>
                    <p className="text-sm text-gray-800">{it.tokyo}</p>
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
            ※料金は各院の公式情報にもとづく確認値です（キャンペーン・ランク・時期により変動）。モニターは症例写真の掲載協力などの条件が前提です。アートメイクは医療行為であり、仕上がり・持続・ダウンタイムには個人差があります。最新の料金・条件は必ず各院の公式サイト・カウンセリングでご確認ください。
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
            <Link href="/review/the-artmake-tokyo/" className="border border-violet-300 text-violet-600 font-bold px-6 py-3 rounded-full transition hover:bg-violet-50">THE ARTMAKE TOKYOの詳細</Link>
            <Link href="/review/medicalbrow/" className="border border-rose-300 text-rose-600 font-bold px-6 py-3 rounded-full transition hover:bg-rose-50">メディカルブローの詳細</Link>
            <Link href="/compare/all-clinics/" className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-6 py-3 rounded-full transition">全クリニックを比較</Link>
            <Link href="/compare/technique/" className="border border-rose-300 text-rose-600 font-bold px-6 py-3 rounded-full transition hover:bg-rose-50">2D/3D/4D/6Dの技法比較</Link>
          </div>
        </div>
      </section>
    </>
  )
}
