import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイクしてもMRIは受けられる？安全性と注意点 | アートメイク比較ナビ',
  description: 'アートメイクをしていてもMRI検査は受けられる？金属反応のリスク、最新の酸化鉄フリー色素の安全性、病院への申告方法を徹底解説。検査前に知っておくべき注意点をまとめました。',
  keywords: 'アートメイク MRI,アートメイク MRI 大丈夫,アートメイク MRI 検査,アートメイク 磁気共鳴',
  openGraph: {
    title: 'アートメイクしてもMRIは受けられる？安全性と注意点',
    description: 'MRI検査とアートメイクの関係、最新色素の安全性、病院への申告方法を解説。',
    type: 'article',
  },
}

const mriMechanism = [
  {
    title: 'MRIの仕組み',
    description: 'MRI（磁気共鳴画像診断装置）は強力な磁場と電波を使って体内の画像を撮影する検査です。放射線を使わないため被曝リスクがなく、安全性が高い検査方法です。ただし、体内に金属がある場合は磁場の影響で発熱や画像の乱れが生じる可能性があります。',
  },
  {
    title: 'なぜアートメイクが問題になるのか',
    description: '従来のアートメイクや一部のタトゥーには、色素に酸化鉄（Fe2O3）などの金属成分が含まれていることがあります。この金属成分がMRIの強い磁場に反応し、施術部位にピリピリとした刺激や熱感を感じる可能性があるとされています。',
  },
  {
    title: '実際のリスクレベル',
    description: 'アートメイクでMRI検査が受けられないケースは極めて稀です。アートメイクの色素量はタトゥーと比較して非常に少なく、皮膚の浅い層にのみ入っているため、重大な問題が起きたという報告はほぼありません。ただし、検査前に必ず医療機関に申告することが重要です。',
  },
]

const pigmentTypes = [
  {
    type: '酸化鉄含有色素（従来型）',
    safety: '注意が必要',
    detail: '酸化鉄を含むため、理論上はMRIの磁場に反応する可能性があります。ただし、アートメイクに使用される量は微量のため、重大な問題が報告されたケースはほぼありません。検査前に必ず申告しましょう。',
    color: 'bg-yellow-50 border-yellow-200',
    badge: 'bg-yellow-100 text-yellow-700',
  },
  {
    type: '酸化鉄フリー色素（最新型）',
    safety: 'より安全',
    detail: '金属成分を含まないオーガニック色素を使用。MRIへの影響がより少ないとされています。近年の大手クリニックでは酸化鉄フリーの色素を採用するところが増えています。',
    color: 'bg-green-50 border-green-200',
    badge: 'bg-green-100 text-green-700',
  },
  {
    type: 'FDA認可色素',
    safety: '高い安全基準',
    detail: '米国FDA（食品医薬品局）の基準をクリアした色素。安全性試験を経ており、MRIを含む各種検査への影響が最小限に設計されています。',
    color: 'bg-blue-50 border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
  },
]

const hospitalGuide = [
  {
    num: 1,
    title: 'MRI検査の予約時に申告する',
    description: '検査の予約時に「アートメイクをしている」と伝えましょう。多くの病院では問診票に「入れ墨・アートメイクの有無」の項目があります。正確に回答してください。',
  },
  {
    num: 2,
    title: '施術部位と時期を伝える',
    description: '「眉毛にアートメイクをしている」「〇年前に施術した」など、具体的に伝えましょう。施術部位と撮影部位が異なる場合は特に問題になりにくいです。',
  },
  {
    num: 3,
    title: '使用色素の情報を提供する（可能なら）',
    description: 'アートメイクの施術を受けたクリニックに問い合わせ、使用色素の種類（酸化鉄フリーかどうか等）を確認しておくと、検査の判断がスムーズです。',
  },
  {
    num: 4,
    title: '医師の判断に従う',
    description: '最終的にMRI検査が可能かどうかは、担当医師が判断します。検査中に施術部位にピリピリ感や熱感を感じた場合は、すぐにスタッフに伝えてください。',
  },
]

const faqs = [
  {
    q: 'アートメイクをしていてもMRI検査は受けられますか？',
    a: 'ほとんどの場合、問題なく受けられます。アートメイクの色素量はタトゥーと比べて非常に少なく、皮膚の浅い層にのみ存在するため、MRIに重大な影響を与えることは極めて稀です。ただし、検査前に必ず医療機関に申告してください。',
  },
  {
    q: 'MRI検査中に痛みや熱を感じることはありますか？',
    a: 'ごく稀に、施術部位にピリピリとした刺激や軽い熱感を感じるケースが報告されています。ただし、アートメイクでこのような症状が出ることは非常に稀です。万が一感じた場合は、緊急ボタンを押してスタッフに知らせてください。',
  },
  {
    q: 'アートメイクの色素がMRI画像に影響しますか？',
    a: '施術部位付近を撮影する場合、色素の金属成分がアーティファクト（画像の乱れ）を生じさせる可能性があります。ただし、眉毛のアートメイクであれば、腹部や膝のMRIには影響しません。撮影部位と施術部位が離れている場合は問題ありません。',
  },
  {
    q: 'これからアートメイクを受ける場合、MRI対応の色素を選べますか？',
    a: 'はい、カウンセリング時に「MRIを受ける可能性がある」と伝えれば、酸化鉄フリーの色素やFDA認可の色素を使用してもらえます。今後MRI検査を受ける予定がある方は、事前に色素の種類を相談しましょう。',
  },
  {
    q: '施術してすぐにMRI検査を受けても大丈夫ですか？',
    a: '施術直後（1〜2週間以内）は傷の治癒中であるため、MRI検査は避けた方が安全です。少なくとも施術後4週間以上経過してから検査を受けることをおすすめします。緊急の場合は担当医に施術時期を伝えた上で判断を仰ぎましょう。',
  },
  {
    q: 'アートメイクとタトゥーではMRIへの影響は違いますか？',
    a: 'はい、大きく異なります。タトゥーは色素の量が多く真皮の深い層まで入っているため、MRIへの影響が比較的大きいです。一方、アートメイクは色素量が少なく浅い層にのみ入れるため、MRIへの影響は格段に小さいです。それでも申告は必要です。',
  },
]

export default function MriPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "知識" }, { name: "MRI検査" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3">2026年最新 完全ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイクしても<br />MRIは受けられる？
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            「MRI検査を受けたいけどアートメイクがあって心配」<br className="hidden md:block" />
            安全性・最新の色素情報・病院での申告方法を解説します。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#safety" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">安全性を確認する</a>
            <a href="#hospital" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">申告方法を見る</a>
          </div>
        </div>
      </section>

      {/* 結論 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold">結論</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">ほぼ問題なく受けられます</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              アートメイクをしていても<strong className="text-rose-600">MRI検査はほとんどの場合問題なく受けられます</strong>。
              色素量が少なく浅い層に入れるアートメイクは、タトゥーと比べてMRIへの影響が格段に小さいです。
              ただし、<strong className="text-rose-600">検査前の申告は必須</strong>です。最新の酸化鉄フリー色素ならさらに安心です。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">ほぼ可能</div>
                <div className="text-sm text-gray-600">MRI検査は<br />大半のケースで受けられる</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">申告必須</div>
                <div className="text-sm text-gray-600">検査前に必ず<br />医療機関に伝える</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">最新色素</div>
                <div className="text-sm text-gray-600">酸化鉄フリーなら<br />さらに安心</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MRIの仕組みとリスク */}
      <section className="py-16 px-4 bg-gray-50" id="safety">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">MRIとアートメイクの関係</h2>
          <p className="text-center text-gray-600 mb-12">なぜアートメイクとMRIが話題になるのかを解説します</p>
          <div className="space-y-6">
            {mriMechanism.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 色素の種類と安全性 */}
      <section className="py-16 px-4 bg-white" id="pigment">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">色素の種類とMRI安全性</h2>
          <p className="text-center text-gray-600 mb-12">使用される色素によって安全性が異なります</p>
          <div className="space-y-6">
            {pigmentTypes.map((item, i) => (
              <div key={i} className={`rounded-xl p-6 md:p-8 border ${item.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{item.type}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${item.badge}`}>{item.safety}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 病院への申告方法 */}
      <section className="py-16 px-4 bg-gray-50" id="hospital">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">病院への申告方法</h2>
          <p className="text-center text-gray-600 mb-12">MRI検査を受ける際のステップを確認しましょう</p>
          <div className="space-y-6">
            {hospitalGuide.map((item) => (
              <div key={item.num} className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="bg-rose-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">よくある質問（FAQ）</h2>
          <p className="text-center text-gray-600 mb-12">アートメイクとMRIに関する疑問にお答えします</p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl shadow-sm group border border-gray-100">
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
            <Link href="/knowledge/risk" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクのリスク・副作用</p>
            </Link>
            <Link href="/knowledge/tattoo-difference" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクとタトゥーの違い</p>
            </Link>
            <Link href="/knowledge/color-change" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクの変色と対策</p>
            </Link>
            <Link href="/knowledge/pain" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">痛み・ダウンタイム完全ガイド</p>
            </Link>
            <Link href="/faq" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">FAQ</span>
              <p className="font-semibold mt-1">アートメイクよくある質問</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">安全な色素で安心の施術を</h2>
          <p className="text-xl mb-4 opacity-90">
            MRI対応の最新色素を使用するクリニックを選びましょう。<br className="hidden md:block" />
            カウンセリングで使用色素について確認できます。
          </p>
          <p className="mb-8 opacity-80">技術力と安全性で選ぶクリニックランキング</p>
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
