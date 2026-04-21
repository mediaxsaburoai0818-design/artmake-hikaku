import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'リップアートメイクの色選び完全ガイド｜失敗しない色の選び方 | アートメイク比較ナビ',
  description: 'リップアートメイクの人気カラー（コーラルピンク・ベビーピンク・モーヴ等）、肌色別・イエベブルベ別のおすすめ色、色持ちの違いを徹底解説。失敗しない色選びのコツ。',
  keywords: 'リップアートメイク 色選び,リップアートメイク 色,リップアートメイク カラー,リップアートメイク おすすめ色',
  openGraph: {
    title: 'リップアートメイクの色選び完全ガイド｜失敗しない色の選び方',
    description: '人気カラー・肌色別おすすめ・イエベブルベ別の色選びを解説。',
    type: 'article',
  },
}

const popularColors = [
  {
    name: 'コーラルピンク',
    description: '赤みとオレンジのバランスが取れた定番カラー。肌馴染みが良く、どんな肌色にも合わせやすい万能色です。ナチュラルメイクからしっかりメイクまで幅広く対応できます。',
    suitable: '幅広い肌色の方',
    popularity: '人気No.1',
    durability: '色持ちが良い（退色してもピンクベージュ系に変化）',
  },
  {
    name: 'ベビーピンク',
    description: '淡く柔らかいピンク。唇の血色感を自然に底上げし、すっぴんでも健康的に見える効果があります。ナチュラル派の方に最も人気のカラーです。',
    suitable: '色白〜標準肌の方、ナチュラル志向',
    popularity: '人気No.2',
    durability: '退色しやすいが自然な色味に変化',
  },
  {
    name: 'モーヴピンク',
    description: 'くすみのある大人っぽいピンク。青みを含むため、ブルベ肌の方に特に馴染みます。上品で落ち着いた印象を与えるカラーです。',
    suitable: 'ブルベ肌の方、大人っぽい印象を好む方',
    popularity: '人気上昇中',
    durability: '色持ちが良い（退色するとグレーピンク系に変化する場合あり）',
  },
  {
    name: 'ローズピンク',
    description: '華やかで女性らしいピンク。リップメイクをしているような仕上がりになり、口元を華やかに見せたい方におすすめです。結婚式やイベント前の施術にも人気。',
    suitable: 'メイク感を出したい方、華やかな印象を求める方',
    popularity: '安定した人気',
    durability: '色持ちが良い（退色してもピンク系が残りやすい）',
  },
  {
    name: 'ヌーディーベージュ',
    description: '唇の色をワントーン明るくする程度の自然なベージュ系カラー。アートメイクをしていることが分かりにくく、極限までナチュラルな仕上がりを求める方向け。',
    suitable: 'すっぴん風に仕上げたい方、男性',
    popularity: 'ナチュラル派に人気',
    durability: '退色が目立ちにくい（元の唇の色に近いため）',
  },
  {
    name: 'チェリーレッド',
    description: '鮮やかな赤みのあるカラー。唇の輪郭がはっきりし、メリハリのある顔立ちに仕上がります。普段からリップメイクをしっかりする方におすすめ。',
    suitable: 'メイク好きの方、唇に存在感を出したい方',
    popularity: '個性派に人気',
    durability: '退色するとオレンジ系に変化する場合あり',
  },
]

const skinToneGuide = [
  {
    type: 'イエベ春（明るく暖かみのある肌）',
    recommend: 'コーラルピンク、ピーチピンク、サーモンピンク',
    avoid: '青みの強いピンク、パープル系',
    point: '黄みを含む暖かいピンクが肌に馴染みます。明るい春タイプにはコーラルピンクが鉄板です。',
  },
  {
    type: 'イエベ秋（深みのある暖かい肌）',
    recommend: 'テラコッタピンク、ブラウンピンク、ヌーディーベージュ',
    avoid: '鮮やかすぎるピンク、青みピンク',
    point: '落ち着いたくすみカラーが似合います。テラコッタ系やブラウンみのあるピンクが大人っぽく映えます。',
  },
  {
    type: 'ブルベ夏（柔らかく涼やかな肌）',
    recommend: 'ベビーピンク、モーヴピンク、ローズピンク',
    avoid: 'オレンジ系、黄みの強い色',
    point: '青みを含む上品なピンクが得意。モーヴピンクやローズピンクで透明感のある仕上がりに。',
  },
  {
    type: 'ブルベ冬（クリアでコントラストのある肌）',
    recommend: 'チェリーレッド、ローズレッド、ビビッドピンク',
    avoid: 'くすみカラー、黄みベージュ',
    point: 'はっきりした色が映える肌質。鮮やかなレッドやビビッドピンクでメリハリのある印象に。',
  },
]

const colorTips = [
  {
    num: 1,
    title: 'カウンセリングで必ず色味を確認する',
    description: 'アートメイクの色は施術後に変化します。カウンセリング時に「退色後どんな色味になるか」を必ず確認しましょう。色見本やビフォーアフター写真を見せてもらうと安心です。',
  },
  {
    num: 2,
    title: '普段のメイクの色味を伝える',
    description: '普段使っているリップの色やブランドを施術者に伝えると、理想のイメージが共有しやすくなります。愛用のリップを持参するのもおすすめです。',
  },
  {
    num: 3,
    title: '迷ったら控えめな色から始める',
    description: 'アートメイクは後から色を濃くすることは可能ですが、薄くすることは難しいです。初回は少し控えめな色味で施術し、2回目で調整するのが失敗しにくい方法です。',
  },
  {
    num: 4,
    title: 'パーソナルカラー診断を活用する',
    description: '自分のパーソナルカラー（イエベ・ブルベ）を把握しておくと色選びがスムーズです。クリニックによってはパーソナルカラーを考慮した提案をしてくれるところもあります。',
  },
  {
    num: 5,
    title: '季節による見え方の違いも考慮',
    description: '夏に日焼けすると肌色が変わり、リップの色味も変わって見えます。年間を通じて馴染む色を選ぶか、普段の肌色をベースに選ぶことをおすすめします。',
  },
]

const faqs = [
  {
    q: 'リップアートメイクの一番人気の色は何ですか？',
    a: '最も人気が高いのはコーラルピンクです。赤みとオレンジのバランスが良く、イエベ・ブルベを問わず幅広い肌色に馴染むため、迷ったらコーラルピンクを選ぶ方が多いです。次いでベビーピンク、モーヴピンクが人気です。',
  },
  {
    q: 'リップアートメイクの色はどのくらい持ちますか？',
    a: '一般的に1〜3年程度で徐々に退色します。唇は飲食や会話で常に動く部位のため、眉毛より退色が早い傾向があります。色によって持ちが異なり、赤系・ブラウン系は比較的持ちが良く、淡いピンクは退色が早めです。',
  },
  {
    q: '施術直後と完成後で色は変わりますか？',
    a: 'はい、施術直後は鮮やかで濃く見えますが、1〜2週間のダウンタイムを経て30〜50%程度薄くなり、自然な色味に落ち着きます。施術者はこの退色を見込んでやや濃いめに入れるため、直後の濃さは心配不要です。',
  },
  {
    q: 'イエベかブルベか分からない場合はどうすればいいですか？',
    a: 'カウンセリング時に施術者に相談すれば、肌色を見てアドバイスしてもらえます。また、簡易的なパーソナルカラー診断はオンラインでも無料で受けられるため、事前にチェックしておくのもおすすめです。迷った場合はコーラルピンクが万能です。',
  },
  {
    q: '退色した色を変えることはできますか？',
    a: 'はい、リタッチ時に色味の変更は可能です。ただし、前回の色素が残っている場合は完全に違う色にすることが難しいこともあります。大幅に色を変えたい場合は、ある程度退色してからのリタッチがおすすめです。施術者と相談の上で最適な色を選びましょう。',
  },
  {
    q: 'リップアートメイクと普段のリップメイクは併用できますか？',
    a: 'もちろん可能です。リップアートメイクはベースの血色感を整えるものなので、その上からリップを塗ることでさらに華やかにできます。すっぴんでもリップを塗っても美しい、という両方のメリットを享受できるのがリップアートメイクの魅力です。',
  },
]

export default function LipColorPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "知識" }, { name: "リップの色選び" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3">2026年最新 完全ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            リップアートメイクの色選び<br />失敗しない色の選び方
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            「どの色が自分に合う？」「退色したらどうなる？」<br className="hidden md:block" />
            人気カラーから肌色別のおすすめまで完全解説します。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#colors" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">人気カラーを見る</a>
            <a href="#skin-tone" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">肌色別おすすめ</a>
          </div>
        </div>
      </section>

      {/* 結論 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold">結論</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">迷ったらコーラルピンクが万能</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              リップアートメイクの色選びは<strong className="text-rose-600">パーソナルカラーに合わせることが最も重要</strong>です。
              迷った場合は<strong className="text-rose-600">コーラルピンク</strong>が幅広い肌色に馴染む万能カラー。
              初回は<strong className="text-rose-600">控えめな色味で始める</strong>のが失敗しないコツです。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">No.1</div>
                <div className="text-sm text-gray-600">コーラルピンク<br />万能カラー</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">1〜3年</div>
                <div className="text-sm text-gray-600">色の持続期間<br />徐々に退色</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">4タイプ</div>
                <div className="text-sm text-gray-600">パーソナルカラー別<br />おすすめあり</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 人気カラー */}
      <section className="py-16 px-4 bg-gray-50" id="colors">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">人気カラー6選</h2>
          <p className="text-center text-gray-600 mb-12">リップアートメイクで人気の色をご紹介します</p>
          <div className="space-y-6">
            {popularColors.map((color, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-rose-500 text-white px-6 py-3 flex items-center justify-between">
                  <h3 className="font-bold text-lg">{color.name}</h3>
                  <span className="bg-white text-rose-500 px-3 py-1 rounded-full text-sm font-bold">{color.popularity}</span>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-gray-700 leading-relaxed">{color.description}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-rose-50 border border-rose-200 rounded-lg p-3">
                      <span className="text-rose-600 text-xs font-semibold">おすすめの方</span>
                      <p className="text-gray-700 text-sm mt-1">{color.suitable}</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <span className="text-blue-600 text-xs font-semibold">色持ち</span>
                      <p className="text-gray-700 text-sm mt-1">{color.durability}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* パーソナルカラー別ガイド */}
      <section className="py-16 px-4 bg-white" id="skin-tone">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">イエベ・ブルベ別おすすめカラー</h2>
          <p className="text-center text-gray-600 mb-12">パーソナルカラーに合った色選びで失敗を防ぎましょう</p>
          <div className="space-y-6">
            {skinToneGuide.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.type}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <span className="text-green-600 text-xs font-semibold">おすすめカラー</span>
                    <p className="text-gray-700 text-sm mt-2 font-semibold">{item.recommend}</p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <span className="text-red-600 text-xs font-semibold">避けた方がいい色</span>
                    <p className="text-gray-700 text-sm mt-2">{item.avoid}</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <span className="text-blue-600 text-xs font-semibold">ポイント</span>
                    <p className="text-gray-700 text-sm mt-2">{item.point}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 色選びのコツ */}
      <section className="py-16 px-4 bg-gradient-to-b from-rose-50 to-pink-50" id="tips">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">失敗しない色選び5つのコツ</h2>
          <p className="text-center text-gray-600 mb-12">カウンセリング前に押さえておきたいポイント</p>
          <div className="space-y-6">
            {colorTips.map((tip) => (
              <div key={tip.num} className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="bg-rose-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {tip.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">よくある質問（FAQ）</h2>
          <p className="text-center text-gray-600 mb-12">リップアートメイクの色選びに関する疑問にお答えします</p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl shadow-sm group">
                <summary className="px-6 py-5 cursor-pointer font-semibold hover:bg-gray-50 transition-colors rounded-xl flex items-center justify-between">
                  <span>Q{i + 1}. {faq.q}</span>
                  <span className="text-rose-400 group-open:rotate-180 transition-transform ml-4 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">関連記事</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/knowledge/color-change" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクの変色と対策</p>
            </Link>
            <Link href="/knowledge/pain" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">痛み・ダウンタイム完全ガイド</p>
            </Link>
            <Link href="/knowledge/aftercare" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アフターケア完全ガイド</p>
            </Link>
            <Link href="/compare/price" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">比較</span>
              <p className="font-semibold mt-1">アートメイク料金比較</p>
            </Link>
            <Link href="/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">ランキング</span>
              <p className="font-semibold mt-1">おすすめクリニックTOP5</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">あなたにぴったりの色を<br />プロに相談しよう</h2>
          <p className="text-xl mb-4 opacity-90">
            パーソナルカラーに合わせた色提案をしてくれるクリニックを選びましょう。<br className="hidden md:block" />
            無料カウンセリングで色味のシミュレーションができます。
          </p>
          <p className="mb-8 opacity-80">リップアートメイクの実績豊富なクリニックを比較</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/" className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              おすすめクリニックランキングを見る
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </main>
  )
}
