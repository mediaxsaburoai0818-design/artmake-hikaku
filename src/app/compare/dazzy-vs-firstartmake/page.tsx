import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'デイジークリニック vs ファーストアートメイク 徹底比較【2026年最新】料金・技法・口コミ10項目で解説',
  description: '【2026年4月最新】デイジークリニックとファーストアートメイクを10項目で徹底比較。料金・技法・症例数・カウンセリング・立地・口コミ等、どっちを選ぶべきか結論付き。コスパならデイジー、安心感ならファーストアートメイク。',
  keywords: 'デイジークリニック ファーストアートメイク 比較,デイジー ファーストアートメイク どっち,アートメイク 比較',
  openGraph: {
    title: 'デイジークリニック vs ファーストアートメイク 徹底比較',
    description: 'デイジークリニックとファーストアートメイクを10項目で徹底比較。',
    type: 'article',
  },
}

const comparisonItems = [
  {
    label: '料金（眉2回）',
    dazzy: '49,800円〜（モニター手彫り）\n69,800円〜（機械彫り+手彫り）',
    first: '50,000円〜（2回セット）\n初回限定割引あり',
    winner: 'dazzy',
    detail: 'モニター価格で比較すると、デイジーの手彫り2回49,800円が業界最安水準。ファーストアートメイクも2回50,000円〜とリーズナブルですが、わずかにデイジーが安い。どちらもコスパに優れたクリニックです。',
  },
  {
    label: '技法',
    dazzy: 'dazzy brow\n3技法から選択可（機械彫り・手彫り・コンビ）',
    first: '手彫り中心\nナチュラルストローク',
    winner: 'dazzy',
    detail: 'デイジーは機械彫り・手彫り・コンビネーションの3技法から選べる柔軟性が強み。ファーストアートメイクは手彫りを中心としたナチュラルストロークが得意で、自然な毛並み感に定評があります。技法の選択肢ならデイジー、手彫りの自然さならファーストアートメイク。',
  },
  {
    label: '症例数',
    dazzy: '非公開（多数の実績あり）',
    first: '非公開（実績多数）',
    winner: 'draw',
    detail: 'どちらも具体的な症例数は公開していませんが、SNSやWebサイトでのビフォーアフター事例は豊富です。カウンセリング時に自分に近い年代・肌質の症例を見せてもらうことをおすすめします。',
  },
  {
    label: 'カウンセリング',
    dazzy: 'オンラインカウンセリング対応\n来院カウンセリングも可',
    first: '来院カウンセリング\n丁寧な説明に定評',
    winner: 'dazzy',
    detail: 'デイジーはオンラインカウンセリングに対応しており、遠方の方でも自宅から事前相談が可能。ファーストアートメイクは来院のみですが、対面での丁寧な説明に口コミ評価が高い。利便性ならデイジー、対面の安心感ならファーストアートメイク。',
  },
  {
    label: '展開エリア',
    dazzy: '全国4院\n（東京・大阪・福岡・札幌）',
    first: '東京都内中心\n（1〜2院）',
    winner: 'dazzy',
    detail: 'デイジーは東京・大阪・福岡・札幌と主要都市をカバー。ファーストアートメイクは東京都内中心の展開で、地方の方にはデイジーの方が通いやすいです。',
  },
  {
    label: '口コミ評価',
    dazzy: '★4.2/5.0\nコスパの良さが高評価',
    first: '★4.3/5.0\n丁寧さ・安心感が高評価',
    winner: 'first',
    detail: '口コミ評価はどちらも高水準。デイジーは「この価格でこの品質はすごい」というコスパ面の評価が多く、ファーストアートメイクは「カウンセリングが丁寧で安心できた」「初めてでも不安なく受けられた」という安心感の評価が目立ちます。',
  },
  {
    label: '割引制度',
    dazzy: 'モニター最大50%OFF',
    first: '初回限定割引\nセット割引あり',
    winner: 'dazzy',
    detail: 'デイジーのモニター割引は最大50%OFFと非常に大きな割引率。ファーストアートメイクも初回限定割引やセット割引がありますが、割引率ではデイジーが優位です。',
  },
  {
    label: '痛み対策',
    dazzy: '麻酔クリーム使用\nほぼ痛みなし',
    first: '麻酔クリーム使用\n痛みに敏感な方への追加対応あり',
    winner: 'first',
    detail: 'どちらも麻酔クリームを使用しますが、ファーストアートメイクは痛みに敏感な方への追加対応（麻酔の量の調整など）に力を入れている点が特徴。初めてで痛みが心配な方はファーストアートメイクが安心です。',
  },
  {
    label: 'リタッチ料金',
    dazzy: '33,000円〜',
    first: '35,000円〜',
    winner: 'dazzy',
    detail: 'リタッチ料金はデイジーがわずかに安い。長期的なメンテナンスコストを考えると、初回料金だけでなくリタッチ料金も含めた総額で比較することが重要です。',
  },
  {
    label: 'メンズ対応',
    dazzy: '対応あり',
    first: '対応あり\n男性の施術実績も豊富',
    winner: 'first',
    detail: 'どちらも男性の施術に対応していますが、ファーストアートメイクは男性の施術実績を積極的にアピールしており、男性の骨格に合わせたデザイン提案の経験が豊富です。',
  },
]

const faqs = [
  {
    q: 'デイジークリニックとファーストアートメイク、初めてならどっちがいい？',
    a: '初めてのアートメイクで不安が大きい方はファーストアートメイクがおすすめです。「ファースト」の名の通り初心者への対応に力を入れており、カウンセリングの丁寧さに定評があります。コスパを重視したい方や、オンラインで事前に相談したい方はデイジークリニックが便利です。',
  },
  {
    q: '総額費用（初回+リタッチ）で比較するとどちらがお得？',
    a: '初回2回セット+リタッチ1回の総額で比較すると、デイジーは約82,800円〜（モニター49,800円+リタッチ33,000円）、ファーストアートメイクは約85,000円〜（初回50,000円+リタッチ35,000円）。わずかにデイジーが安いですが、差は約2,000円程度。コスパはほぼ互角です。',
  },
  {
    q: '仕上がりの自然さに違いはある？',
    a: 'デイジーは3技法から選べるため、パウダー眉からナチュラル眉まで幅広い仕上がりに対応。ファーストアートメイクは手彫り中心のナチュラルストロークで、毛並みの自然さに特化。「すっぴんで自然な眉」を目指すならファーストアートメイク、「デザインの幅」を求めるならデイジーです。',
  },
  {
    q: '地方在住ですがどちらが通いやすい？',
    a: 'デイジークリニックが東京・大阪・福岡・札幌の4院展開で、地方の方にはアクセスしやすいです。さらにオンラインカウンセリングで事前に相談できるため、来院回数を最小限に抑えられます。ファーストアートメイクは東京都内中心のため、関東近郊の方向きです。',
  },
  {
    q: '予約の取りやすさに違いはある？',
    a: 'デイジーは人気が高く予約が取りにくい時期もありますが、4院展開のため別院での予約も検討可能。ファーストアートメイクは院数が少ないものの、比較的予約が取りやすい傾向にあります。どちらも早めの予約がおすすめです。',
  },
]

export default function DazzyVsFirstartmakePage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '比較', href: '/compare/price' },
            { name: 'デイジー vs ファーストアートメイク' },
          ]} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--gold)] text-sm font-semibold mb-2">2026年4月最新</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            デイジークリニック vs ファーストアートメイク<br />
            <span className="text-[var(--gold)]">徹底比較</span>
          </h1>
          <p className="text-[#6B6560] leading-relaxed mb-8">
            コスパに優れた2院を10項目で比較。<br className="md:hidden" />
            料金・技法・口コミから、どっちが自分に合うか丸わかり。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#comparison-table" className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">比較表を見る</a>
            <a href="#conclusion" className="glass-card px-8 py-4 rounded-full font-bold border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--blush)] transition-colors">結論を先に見る</a>
          </div>
        </div>
      </section>

      {/* 結論先出し */}
      <section className="py-12 px-4 bg-section-warm" id="conclusion">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">結論：どっちを選ぶべき？</h2>
          <p className="text-center text-[#6B6560] mb-8">あなたの重視ポイントで最適なクリニックが変わります</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-8 border-2 border-[var(--gold)]">
              <div className="text-center mb-4">
                <span className="badge-gold text-sm font-bold px-4 py-1 rounded-full mb-3 inline-block">コスパ重視なら</span>
                <h3 className="text-2xl font-bold">デイジークリニック</h3>
                <p className="text-sm text-[var(--gold)]">（90点）</p>
              </div>
              <ul className="space-y-3 text-sm text-[#6B6560]">
                <li className="flex items-start gap-2"><span className="text-[var(--gold)] font-bold">✓</span>モニター2回49,800円〜の業界最安水準</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)] font-bold">✓</span>3技法から選べるデザインの幅</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)] font-bold">✓</span>オンラインカウンセリング対応</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)] font-bold">✓</span>全国4院で通いやすい</li>
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-8 border-2 border-[var(--pink-beige)]">
              <div className="text-center mb-4">
                <span className="bg-[var(--pink-beige)] text-[var(--foreground)] text-sm font-bold px-4 py-1 rounded-full mb-3 inline-block">安心感重視なら</span>
                <h3 className="text-2xl font-bold">ファーストアートメイク</h3>
                <p className="text-sm text-[var(--gold)]">（87点）</p>
              </div>
              <ul className="space-y-3 text-sm text-[#6B6560]">
                <li className="flex items-start gap-2"><span className="text-[var(--gold)] font-bold">✓</span>カウンセリングの丁寧さに高評価</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)] font-bold">✓</span>手彫りナチュラルストロークの自然さ</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)] font-bold">✓</span>痛みに敏感な方への追加対応</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)] font-bold">✓</span>初心者に寄り添った施術</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10項目比較表 */}
      <section className="py-12 px-4" id="comparison-table">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">10項目比較表</h2>
          <p className="text-center text-[#6B6560] mb-8">デイジークリニックとファーストアートメイクを10の観点で徹底比較</p>
          <div className="overflow-x-auto">
            <table className="w-full glass-card rounded-xl">
              <thead>
                <tr className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white">
                  <th className="p-4 text-left rounded-tl-xl min-w-[120px]">比較項目</th>
                  <th className="p-4 text-center min-w-[200px]">デイジークリニック</th>
                  <th className="p-4 text-center min-w-[200px]">ファーストアートメイク</th>
                  <th className="p-4 text-center rounded-tr-xl min-w-[80px]">判定</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, i) => (
                  <tr key={i} className={`border-b border-[var(--pink-beige)] ${i % 2 === 0 ? 'bg-[var(--blush)]/30' : ''}`}>
                    <td className="p-4 font-semibold text-sm">{item.label}</td>
                    <td className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === 'dazzy' ? 'font-semibold text-[var(--gold)]' : 'text-[#6B6560]'}`}>{item.dazzy}</td>
                    <td className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === 'first' ? 'font-semibold text-[var(--gold)]' : 'text-[#6B6560]'}`}>{item.first}</td>
                    <td className="p-4 text-center">
                      {item.winner === 'dazzy' && <span className="badge-gold text-xs font-bold px-2 py-1 rounded-full">DC</span>}
                      {item.winner === 'first' && <span className="bg-[var(--pink-beige)] text-[var(--foreground)] text-xs font-bold px-2 py-1 rounded-full">FA</span>}
                      {item.winner === 'draw' && <span className="bg-gray-200 text-[#6B6560] text-xs font-bold px-2 py-1 rounded-full">引分</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-center gap-6 text-xs text-[#8B8580]">
            <span><span className="inline-block w-3 h-3 bg-[var(--gold)] rounded-full mr-1 align-middle" />DC = デイジー優位</span>
            <span><span className="inline-block w-3 h-3 bg-[var(--pink-beige)] rounded-full mr-1 align-middle" />FA = ファーストアートメイク優位</span>
            <span><span className="inline-block w-3 h-3 bg-gray-300 rounded-full mr-1 align-middle" />引分 = ほぼ同等</span>
          </div>
        </div>
      </section>

      {/* 各項目の詳細解説 */}
      <section className="py-12 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">各項目の詳細解説</h2>
          <div className="space-y-6">
            {comparisonItems.map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <h3 className="text-lg font-bold">{item.label}</h3>
                  {item.winner !== 'draw' && (
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.winner === 'dazzy' ? 'badge-gold' : 'bg-[var(--pink-beige)]'}`}>
                      {item.winner === 'dazzy' ? 'デイジー優位' : 'ファーストアートメイク優位'}
                    </span>
                  )}
                  {item.winner === 'draw' && <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-200 text-[#6B6560]">ほぼ同等</span>}
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className={`rounded-xl p-4 ${item.winner === 'dazzy' ? 'bg-[var(--blush)] border border-[var(--gold-light)]' : 'bg-white border border-[var(--pink-beige)]'}`}>
                    <p className="text-xs font-bold text-[var(--gold)] mb-1">デイジークリニック</p>
                    <p className="text-sm text-[#6B6560] whitespace-pre-line">{item.dazzy}</p>
                  </div>
                  <div className={`rounded-xl p-4 ${item.winner === 'first' ? 'bg-[var(--blush)] border border-[var(--gold-light)]' : 'bg-white border border-[var(--pink-beige)]'}`}>
                    <p className="text-xs font-bold text-[var(--gold)] mb-1">ファーストアートメイク</p>
                    <p className="text-sm text-[#6B6560] whitespace-pre-line">{item.first}</p>
                  </div>
                </div>
                <p className="text-sm text-[#6B6560] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 使い分けガイド */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">使い分けガイド</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8 border border-[var(--gold)]">
              <div className="text-center mb-6">
                <span className="badge-gold text-lg font-bold px-6 py-2 rounded-full inline-block">デイジークリニック向き</span>
              </div>
              <ul className="space-y-4">
                {[
                  'とにかくコスパを重視したい',
                  '技法を自分で選びたい',
                  'オンラインで事前に相談したい',
                  '地方在住で主要都市に通いたい',
                  'モニター割引50%OFFを利用したい',
                  'トレンド感のあるデザインが好み',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="bg-[var(--blush)] text-[var(--gold)] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">{i + 1}</span>
                    <span className="text-[#6B6560]">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-8 border border-[var(--pink-beige)]">
              <div className="text-center mb-6">
                <span className="bg-[var(--pink-beige)] text-[var(--foreground)] text-lg font-bold px-6 py-2 rounded-full inline-block">ファーストアートメイク向き</span>
              </div>
              <ul className="space-y-4">
                {[
                  '初めてのアートメイクで不安が大きい',
                  'カウンセリングの丁寧さを重視',
                  '手彫りの自然な毛並み感が好み',
                  '痛みに敏感で追加対応が欲しい',
                  '東京近郊に住んでいる',
                  '男性でアートメイクを検討中',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="bg-[var(--blush)] text-[var(--gold)] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">{i + 1}</span>
                    <span className="text-[#6B6560]">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card rounded-xl border border-[var(--pink-beige)] group">
                <summary className="px-6 py-5 cursor-pointer font-semibold hover:bg-[var(--blush)] transition-colors rounded-xl text-[var(--foreground)] list-none flex items-center justify-between">
                  <span>Q{i + 1}. {faq.q}</span>
                  <span className="text-[var(--gold)] ml-4 flex-shrink-0 transition-transform group-open:rotate-45 text-xl">+</span>
                </summary>
                <div className="px-6 py-5 border-t border-[var(--pink-beige)] text-[#6B6560] leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 border border-[var(--gold-light)] text-center">
          <h2 className="text-xl font-bold mb-4">まずは無料カウンセリングで相談</h2>
          <p className="text-[#6B6560] mb-6">どちらのクリニックも無料カウンセリングを実施中。実際に相談して、自分に合うクリニックを見極めましょう。</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/review/dazzy" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="font-bold text-sm">デイジークリニック</p>
              <p className="text-xs text-[#8B8580] mt-1">口コミ・評判を徹底調査</p>
            </Link>
            <Link href="/review/first-artmake" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="font-bold text-sm">ファーストアートメイク</p>
              <p className="text-xs text-[#8B8580] mt-1">口コミ・評判を徹底調査</p>
            </Link>
            <Link href="/compare/price" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="font-bold text-sm">アートメイク料金比較表</p>
              <p className="text-xs text-[#8B8580] mt-1">全クリニック料金一覧</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
