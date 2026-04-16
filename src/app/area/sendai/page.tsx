import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'アートメイク 仙台 おすすめクリニック｜東北エリア徹底比較【2026年最新】',
  description:
    '仙台・東北エリアからアートメイクを受けるための完全ガイド。本サイト紹介5クリニックは仙台直営院がないため、東京出張施術の活用方法、遠方からの施術のコツ、FAQまで詳しく解説。',
  keywords: 'アートメイク 仙台,アートメイク 東北,アートメイク 宮城,アートメイク 東京出張',
  openGraph: {
    title: 'アートメイク 仙台 おすすめクリニック｜東北エリア徹底比較',
    description: '仙台・東北エリアからアートメイクを受ける方法を徹底解説。',
    type: 'article',
  },
}

const accessMethods = [
  { method: '新幹線で東京へ', time: '約1時間30分', detail: '東北新幹線「はやぶさ」利用で東京駅まで約1時間30分。日帰り施術も可能。', icon: '🚄' },
  { method: '飛行機で大阪へ', time: '約1時間10分', detail: '仙台空港から伊丹空港まで直行便あり。トゥルーデザイン大阪心斎橋への遠征も視野に。', icon: '✈️' },
  { method: '高速バスで東京へ', time: '約5〜6時間', detail: '深夜バス活用で宿泊費ゼロ。新幹線より大幅に低コストだが体力が必要。', icon: '🚌' },
  { method: '新幹線で札幌へ', time: '約4時間30分', detail: '北海道新幹線経由で札幌へ。クレアージュ札幌・デイジー札幌が選択肢。', icon: '🚅' },
]

const clinics = [
  {
    rank: 1,
    name: 'メディカルブロー（東京・全国展開）',
    price: '28,000円〜（モニター）',
    access: '東京新幹線で約1時間30分',
    point: '累計症例23万件超。7Dストローク®技術。全国30院以上展開で、東京出張時に利用しやすい。',
    link: '/review/medicalbrow',
    color: 'bg-yellow-400',
  },
  {
    rank: 2,
    name: 'クレアージュ東京',
    price: '132,000円/3回',
    access: '東京・有楽町（新幹線で1時間30分）',
    point: '3回施術の丁寧さが魅力。40-50代支持の大人デザイン。札幌院もあり。',
    link: '/review/creage',
    color: 'bg-gray-300',
  },
  {
    rank: 3,
    name: 'デイジークリニック（新宿・福岡）',
    price: '49,800円〜',
    access: '東京新宿（新幹線で1時間40分）',
    point: '世界的アーティスト監修。新宿・福岡院で最大50%OFF（条件あり）。札幌院もあり。',
    link: '/review/dazzy',
    color: 'bg-amber-600',
  },
  {
    rank: 4,
    name: 'ファーストアートメイク 銀座院',
    price: '55,000円〜',
    access: '東京銀座（新幹線で1時間40分）',
    point: '初心者向けの丁寧なカウンセリング。銀座1院のみで集中的に対応。',
    link: '/review/first-artmake',
    color: 'bg-rose-200',
  },
  {
    rank: 5,
    name: 'トゥルーデザインクリニック 大阪心斎橋',
    price: '要相談',
    access: '大阪（飛行機で1時間10分）',
    point: '40-50代デザイン特化。関西のみの展開で、仙台からは飛行機利用が便利。',
    link: '/review/true-design',
    color: 'bg-rose-100',
  },
]

const tripTips = [
  { icon: '📅', title: '平日遠征がおすすめ', desc: '新幹線・飛行機・ホテルとも平日は割安。予約も取りやすく、カウンセリング後に同日施術できる可能性も高い。' },
  { icon: '🗓️', title: '2回目施術の計画を忘れずに', desc: 'アートメイクは2回の施術で完成するため、2回目の遠征も計画が必要。1〜2ヶ月後の予約を施術時に確保。' },
  { icon: '🏨', title: '宿泊プランでゆったりと', desc: '日帰りは体力消耗が激しい。特に施術直後は疲れるため、1泊して翌朝帰宅するプランがおすすめ。' },
  { icon: '💼', title: 'ダウンタイム期間に注意', desc: '施術直後の1週間は赤み・腫れが出るため、仕事や公式行事を避けた日程を組むのが賢明。' },
  { icon: '🎫', title: '早割・交通費込みプランを活用', desc: '新幹線は早割で30〜40%OFF。ホテルパックと組み合わせるとさらにお得。楽天トラベル等で比較を。' },
  { icon: '💊', title: '施術後ケア用品を持参', desc: '軟膏・保湿剤・マスク・帽子などを持参。移動中の紫外線・乾燥対策も忘れずに。' },
]

const faqs = [
  {
    q: '仙台・東北エリアに本サイト紹介5クリニックの直営院はありますか？',
    a: '本サイトで紹介している5クリニック（メディカルブロー・クレアージュ東京・デイジークリニック・ファーストアートメイク・トゥルーデザインクリニック）の仙台・東北エリア直営院は、確認できる範囲ではありません。最新の出店状況は各クリニック公式サイトで最新情報をご確認ください。仙台からの施術を希望する場合、東京・札幌・大阪など他エリアへの遠征施術が一般的です。',
  },
  {
    q: '仙台から最も行きやすい遠征先は？',
    a: '東京エリアです。東北新幹線「はやぶさ」で約1時間30分、日帰り施術も十分可能です。東京には5クリニック全ての院があり、選択肢も最も豊富。次に選択肢が多いのは札幌（クレアージュ・デイジー）です。',
  },
  {
    q: '遠方からの施術で気をつけることは？',
    a: '2回目施術の日程確保、ダウンタイム中のダウンタイム対策、移動中の紫外線・乾燥対策が特に重要です。施術後すぐの長距離移動は体力的に厳しいため、可能なら1泊してから帰宅するのがおすすめです。',
  },
  {
    q: '交通費込みで総額はいくらかかりますか？',
    a: '東京遠征の場合、新幹線往復約23,000円（早割利用時）＋ホテル1泊約8,000円＝約31,000円が交通宿泊費の目安です。2回の施術で合計6〜7万円の交通宿泊費がプラスされますが、施術料金を考慮しても総額で納得できるクリニックを選ぶ価値があります。',
  },
]

export default function SendaiAreaPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[
        { name: 'エリア別', href: '/area/tokyo' },
        { name: '仙台' },
      ]} />

      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">エリア別ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            仙台・東北エリアから<br className="hidden md:block" />
            アートメイクを受けるには
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            本サイト紹介の5クリニックは仙台直営院がないため、東京・札幌・大阪への遠征施術が一般的。<br className="hidden md:block" />
            遠方からの施術のコツ・アクセス方法を正直に解説します。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#clinics" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
              クリニック情報を見る
            </a>
            <a href="/" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">
              総合ランキングへ
            </a>
          </div>
        </div>
      </section>

      {/* 正直に記載 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded mb-10">
            <h2 className="text-xl font-bold text-yellow-700 mb-2">【重要】仙台エリアの現状</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              本サイトで紹介している5クリニック（メディカルブロー・クレアージュ東京・デイジークリニック・ファーストアートメイク・トゥルーデザインクリニック）の<strong>仙台・東北エリア直営院は確認できません</strong>。
              仙台在住の方がこれら5クリニックを利用する場合、東京（新幹線約1時間30分）・札幌（新幹線約4時間30分）・大阪（飛行機約1時間10分）などへの遠征施術となります。
              最新の出店状況は各クリニック公式サイトで必ずご確認ください。
            </p>
          </div>

          <h2 className="text-3xl font-bold text-center mb-10">仙台からのアクセス方法</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {accessMethods.map((item, i) => (
              <div key={i} className="bg-rose-50 rounded-xl p-6 border border-rose-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{item.method}</h3>
                    <p className="text-xs text-rose-500 font-semibold">所要時間: {item.time}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* クリニック一覧 */}
      <section className="py-16 px-4 bg-gray-50" id="clinics">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">仙台から遠征可能なクリニック</h2>
          <p className="text-center text-sm text-gray-500 mb-10">※ 5クリニック全て仙台直営院はなく、東京・札幌・大阪への遠征が必要</p>
          <div className="space-y-6">
            {clinics.map((clinic) => (
              <div key={clinic.rank} className="bg-white border border-rose-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`${clinic.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0`}>
                    {clinic.rank}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h3 className="font-bold text-xl text-gray-800">{clinic.name}</h3>
                      <span className="text-xl font-bold text-rose-500">{clinic.price}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">アクセス: {clinic.access}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{clinic.point}</p>
                    <Link href={clinic.link} className="text-rose-500 text-sm font-semibold hover:underline">
                      詳しいレビューを見る →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 遠方施術のコツ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">遠方から施術を受けるコツ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tripTips.map((t, i) => (
              <div key={i} className="bg-rose-50 rounded-xl p-6 border border-rose-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{t.icon}</span>
                  <h3 className="font-bold text-gray-800">{t.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">仙台・東北のアートメイクに関するFAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-lg shadow-sm group">
                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-gray-50 transition-colors flex justify-between items-center">
                  <span>Q{i + 1}. {faq.q}</span>
                  <span className="text-rose-400 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 py-4 border-t text-gray-600 leading-relaxed text-sm">
                  <span className="font-semibold text-rose-500">A.</span> {faq.a}
                </div>
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
            <Link href="/area/tokyo" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">エリア</span>
              <p className="font-semibold mt-1">東京エリアのおすすめクリニック</p>
            </Link>
            <Link href="/area/sapporo" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">エリア</span>
              <p className="font-semibold mt-1">札幌エリアのおすすめクリニック</p>
            </Link>
            <Link href="/review/medicalbrow" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">クリニック</span>
              <p className="font-semibold mt-1">メディカルブローの口コミ・評判</p>
            </Link>
            <Link href="/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">ランキング</span>
              <p className="font-semibold mt-1">アートメイクおすすめクリニックTOP5</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">遠征施術でも納得のクリニック選びを</h2>
          <p className="text-xl mb-4 opacity-90">距離を超える価値のあるクリニックを見つけよう。</p>
          <p className="text-lg mb-8 opacity-80">仙台から、あなたに最適な1院を。</p>
          <a href="/" className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            おすすめクリニックランキングを見る
          </a>
          <p className="mt-6 text-sm opacity-70">2026年4月最新 - 仙台・東北エリア向け情報</p>
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
