import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title:
    'アートメイク 2D・3D・4D・6Dの違いは？【2026年】技法別の仕上がり・向いている人を徹底比較',
  description:
    '眉アートメイクの2D（パウダー）・3D（毛並み）・4D（コンビネーション）・6Dの違いを徹底比較。仕上がり・向いている人・料金傾向を一覧で解説。実は「◯D」の数字はクリニック独自の呼称で統一定義がなく、数字の大小＝優劣ではありません。自分の眉に合う技法の選び方を、医療広告のルールに沿って中立的に整理します。',
  keywords: ['アートメイク 2D 3D 4D 違い', '4D 6D 違い', '3D ストローク 眉', 'パウダーブロウ 毛並み', 'アートメイク 技法'],
  openGraph: {
    title: 'アートメイク 2D・3D・4D・6Dの違いは？技法別に徹底比較【2026年】',
    description: '2D/3D/4D/6Dの仕上がり・向く人を比較。数字の大小＝優劣ではない理由と選び方を中立解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'アートメイク比較ナビ',
  },
}

const techniques = [
  {
    key: '2D',
    name: '2D（パウダー／パウダーブロウ）',
    finish: 'パウダーで描いたようなふんわり眉',
    how: '針で細かく点状に色を入れ、面で均一にぼかす',
    forWho: '眉が薄い・元の毛が少ない／すっぴんでも眉メイク済みのような仕上がりが欲しい／マツエク派',
    color: 'from-rose-50 to-pink-50 border-rose-200',
  },
  {
    key: '3D',
    name: '3D（毛並み／マイクロブレーディング・ストローク）',
    finish: '1本1本の毛を描いたリアルな毛流れ',
    how: '毛の流れに沿って線状に色を入れ、立体感を出す',
    forWho: '元の眉毛がある程度ある／自然でナチュラルな眉にしたい',
    color: 'from-amber-50 to-orange-50 border-amber-200',
  },
  {
    key: '4D',
    name: '4D（コンビネーション）',
    finish: '毛流れの立体感＋ふんわり感の両立',
    how: '3Dの毛並みと2Dのパウダーを組み合わせる',
    forWho: '自然さと存在感を両立したい／今っぽい抜け感のある眉が好み',
    color: 'from-violet-50 to-purple-50 border-violet-200',
  },
  {
    key: '6D',
    name: '6D（より繊細な毛並み）',
    finish: 'さらに本数を増やした極細の毛並み',
    how: '4D/3Dをより繊細にした極細ストローク（メディカルブローが「6Dストローク®」の呼称で展開）',
    forWho: 'できるだけ自然に、細部まで毛流れを再現したい',
    color: 'from-sky-50 to-blue-50 border-sky-200',
  },
]

const faqs = [
  {
    q: '4Dと6Dの違いは何ですか？',
    a: '4Dは一般に「毛並み（3D）＋パウダー（2D）」を組み合わせたコンビネーション技法を指し、6Dはそれをさらに繊細にした極細の毛並みストロークを指す呼称です。ただし「◯D」の定義は業界で統一されておらず、クリニックごとに内容が異なります。数字が大きいほど必ず上位・きれいというわけではないため、数字ではなく「毛並み・パウダー・コンビのどれか」「施術者の技術・症例写真」で選ぶのが確実です。',
  },
  {
    q: '2D・3D・4Dのどれを選べばいいですか？',
    a: '眉の状態と好みで選びます。元の毛が薄い・すっぴんでも眉が欲しい方はパウダー系（2D）やコンビ（4D）、元の眉毛がある程度あって自然な毛流れが欲しい方は毛並み系（3D）が向きます。自然さと存在感を両立したい方はコンビネーション（4D）が選ばれやすい傾向です。最終的にはカウンセリングで、なりたいイメージと肌質・眉の状態を見て提案してもらうのがおすすめです。',
  },
  {
    q: '「D」の数字が大きいほど良い技法ですか？',
    a: 'いいえ。2D・3D・4D・6Dといった「D」の呼称はクリニックが独自に付けているもので、業界共通の定義はありません。同じ「4D」でもクリニックにより施術内容が異なることがあり、数字の大小がそのまま技術の優劣や仕上がりの良さを示すわけではありません。呼称に惑わされず、症例写真・施術者の実績・自分の眉に合うかで判断してください。',
  },
  {
    q: 'アートメイクの持ちはどれくらいですか？',
    a: '一般的には1〜3年程度とされますが、技法・肌質・生活習慣・アフターケアによって個人差があります。パウダー系は比較的均一に薄くなり、毛並み系は毛先から薄くなる傾向があるといわれます。色や形は時間とともに変化するため、定期的なリタッチが前提の医療行為です。効果や持続期間には個人差があり、本ページは特定の効果を保証するものではありません。',
  },
  {
    q: 'どの技法がどのクリニックで受けられますか？',
    a: '多くのクリニックが複数の技法に対応しており、呼称や得意分野が異なります。各クリニックの料金・技法・症例は、当サイトのクリニック比較や個別レビューでまとめています。気になる技法が決まったら、その技法の症例が豊富なクリニックを選ぶと失敗が少なくなります。',
  },
]

export default function TechniqueComparePage() {
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
      <Breadcrumb items={[{ name: '比較' }, { name: '2D・3D・4D・6Dの違い' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイク 2D・3D・4D・6D<br className="hidden md:block" />の違いを徹底比較
          </h1>
          <p className="text-gray-600 md:text-lg mb-8">
            パウダー・毛並み・コンビネーション。技法ごとの仕上がりと向いている人が一目でわかる。
            そして<strong>「◯D」の数字がそのまま優劣ではない</strong>理由まで、中立的に整理します。
          </p>
          <a href="#table" className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-bold px-8 py-3 rounded-full transition">
            比較表を先に見る
          </a>
        </div>
      </section>

      {/* 結論先出し */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">結論：技法は「数字」ではなく「眉の状態」で選ぶ</h2>
          <p className="text-center text-gray-500 mb-10">なりたい眉と元の毛量から、合う技法が決まります</p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">元の眉が薄い・すっぴん眉が欲しい</h3>
              <p className="text-sm text-gray-700">→ <strong>パウダー（2D）</strong>や<strong>コンビネーション（4D）</strong>。面でふんわり色を入れ、メイク済みのような眉に。</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">元の毛がある・自然な毛流れが好み</h3>
              <p className="text-sm text-gray-700">→ <strong>毛並み（3D）</strong>や<strong>より繊細な毛並み（6D）</strong>。1本ずつ描いてリアルな立体感を。</p>
            </div>
            <div className="bg-violet-50 border border-violet-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">自然さと存在感を両立したい</h3>
              <p className="text-sm text-gray-700">→ <strong>コンビネーション（4D）</strong>。毛流れ＋ふんわり感で、今っぽい抜け感のある眉に。</p>
            </div>
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">迷ったら</h3>
              <p className="text-sm text-gray-700">数字より<strong>症例写真と施術者の技術</strong>で選ぶのが確実。カウンセリングで眉の状態を見てもらいましょう。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 比較表 */}
      <section className="py-14 px-4 bg-gray-50" id="table">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">技法別 比較一覧</h2>
          <div className="space-y-5">
            {techniques.map((t) => (
              <div key={t.key} className={`bg-gradient-to-br ${t.color} border rounded-2xl p-6`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white font-bold text-gray-900 shadow-sm">{t.key}</span>
                  <h3 className="font-bold text-gray-900">{t.name}</h3>
                </div>
                <dl className="grid sm:grid-cols-3 gap-3 text-sm">
                  <div><dt className="font-semibold text-gray-500">仕上がり</dt><dd className="text-gray-800">{t.finish}</dd></div>
                  <div><dt className="font-semibold text-gray-500">入れ方</dt><dd className="text-gray-800">{t.how}</dd></div>
                  <div><dt className="font-semibold text-gray-500">向いている人</dt><dd className="text-gray-800">{t.forWho}</dd></div>
                </dl>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6 bg-white rounded-lg p-4">
            ※上記は各技法の一般的な傾向をまとめたものです。「2D・3D・4D・6D」の呼称や施術内容はクリニックによって定義が異なり、業界で統一された基準はありません。数字の大小は技術の優劣を示すものではなく、仕上がりには施術者の技術・肌質・個人差があります。アートメイクは医療行為であり、本ページは特定の効果を保証するものではありません。
          </p>
        </div>
      </section>

      {/* 「数字＝優劣ではない」核心解説 */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">「◯D」の数字が大きいほど良い、は誤解</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              広告でよく見る「4D」「6D」といった呼称は、クリニックが独自に名付けたものです。もともとは
              「2D＝パウダー（面）」「3D＝毛並み（線）」「4D＝2Dと3Dのコンビネーション」という整理が一般的ですが、
              <strong>業界で統一された定義はありません</strong>。そのため、同じ「4D」でもA院とB院で施術内容が違う、ということが起こります。
            </p>
            <p>
              「6D」は毛並みをより繊細な極細ストロークにした技法を指す呼称で、メディカルブローが「6Dストローク&reg;」として展開していることで知られます。
              ただし、数字が大きい＝新しくて優れている、とは限りません。<strong>大切なのは、自分の眉に合う「パウダー／毛並み／コンビ」のどれを選ぶか</strong>と、
              それを得意とする施術者を選ぶことです。
            </p>
            <p>
              技法名に惑わされないために、カウンセリングでは「私の眉にはどの入れ方が合いますか？」「その技法の症例写真を見せてください」と質問するのがおすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white rounded-xl p-5 shadow-sm">
                <summary className="font-bold text-gray-900 cursor-pointer">{f.q}</summary>
                <p className="text-sm text-gray-700 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 次の導線 */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">技法が決まったら、クリニックを比べる</h2>
          <p className="text-gray-600 mb-8 text-sm">それぞれの技法の症例・料金は、クリニックごとに異なります。次はクリニックを比較しましょう。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare/all-clinics/" className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-6 py-3 rounded-full transition">クリニックを徹底比較する</Link>
            <Link href="/parts/eyebrow/" className="border border-rose-300 text-rose-600 font-bold px-6 py-3 rounded-full transition hover:bg-rose-50">眉アートメイクの相場を見る</Link>
            <Link href="/compare/price/" className="border border-rose-300 text-rose-600 font-bold px-6 py-3 rounded-full transition hover:bg-rose-50">料金で比較する</Link>
          </div>
        </div>
      </section>
    </>
  )
}
