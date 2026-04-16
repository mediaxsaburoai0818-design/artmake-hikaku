import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'アートメイク 札幌 おすすめクリニック｜北海道エリア徹底比較【2026年最新】',
  description:
    '札幌・北海道エリアでアートメイクを受けられるクリニック情報を徹底比較。クレアージュ札幌、デイジー札幌など公式情報で確認できるクリニックを紹介。札幌の特徴、料金比較、アクセスガイドまで完全ガイド。',
  keywords: 'アートメイク 札幌,アートメイク 北海道,アートメイク 札幌駅,眉毛アートメイク 札幌',
  openGraph: {
    title: 'アートメイク 札幌 おすすめクリニック｜北海道エリア徹底比較',
    description: '札幌・北海道のアートメイククリニックを徹底比較。',
    type: 'article',
  },
}

const areaFeatures = [
  { area: '札幌駅周辺', desc: 'JR・地下鉄の交通結節点。道内外からのアクセス良好。', station: '札幌駅' },
  { area: '大通り・すすきの', desc: '札幌中心商業エリア。クリニック・美容院が集中する激戦区。', station: '大通駅・すすきの駅' },
  { area: '道内他都市からの需要', desc: '旭川・函館・釧路など道内各都市からの通院者も多い。', station: '各都市からJR利用' },
  { area: '東北からのアクセス', desc: '新千歳空港経由で東北エリアからも通える立地。', station: '新千歳空港' },
]

const clinics = [
  {
    rank: 1,
    name: 'クレアージュ札幌',
    price: '132,000円/3回',
    access: '札幌市内',
    point: '3回施術の丁寧さが魅力。実績10,000件以上。40-50代支持の大人デザインに定評あり。札幌で確認できる直営院。',
    link: '/review/creage',
    color: 'bg-yellow-400',
    confirmed: true,
  },
  {
    rank: 2,
    name: 'デイジークリニック 札幌院',
    price: '49,800円〜',
    access: '札幌市内',
    point: '世界的アーティスト監修のデザイン。札幌で確認できる直営院。最新の料金・キャンペーン情報は公式サイト参照。',
    link: '/review/dazzy',
    color: 'bg-gray-300',
    confirmed: true,
  },
  {
    rank: 3,
    name: 'メディカルブロー（東京・大阪等展開）',
    price: '28,000円〜',
    access: '札幌からの遠征施術',
    point: '札幌院の詳細は公式サイトで最新確認推奨。他エリア院では累計症例23万件超の実績。7Dストローク®対応。',
    link: '/review/medicalbrow',
    color: 'bg-amber-600',
  },
  {
    rank: 4,
    name: 'ファーストアートメイク（銀座院）',
    price: '55,000円〜',
    access: '東京銀座への遠征',
    point: '初心者向けの丁寧なカウンセリング。札幌からの遠征施術となる。',
    link: '/review/first-artmake',
    color: 'bg-rose-200',
  },
  {
    rank: 5,
    name: 'トゥルーデザインクリニック（大阪心斎橋）',
    price: '要相談',
    access: '大阪への遠征',
    point: '40-50代デザイン特化。関西のみの展開のため、札幌からは遠征が必要。',
    link: '/review/true-design',
    color: 'bg-rose-100',
  },
]

const faqs = [
  {
    q: '札幌でアートメイクを受けるメリットは？',
    a: '札幌は北海道内の医療・美容の中心地で、クレアージュ・デイジーといった大手クリニックの直営院があります。道内他都市や東北からも通える立地で、雪の多い冬季でも地下街経由でアクセスしやすい利便性があります。',
  },
  {
    q: '北海道内の札幌以外のエリアからも通えますか？',
    a: 'はい、旭川・函館・釧路・苫小牧など道内各都市から札幌への通院は一般的です。JR特急で2〜4時間程度のアクセスとなるため、施術日と2回目施術日の計2回の遠征が必要です。',
  },
  {
    q: '冬の施術で気をつけることは？',
    a: '札幌の冬は気温が低く乾燥するため、施術後の保湿ケアがより重要になります。施術後に外気に長時間晒されると色素定着に影響する可能性もあるため、ダウンタイム中は室内中心の生活がおすすめです。',
  },
  {
    q: '札幌と東京、どちらで受けるべき？',
    a: '札幌在住の方は地元のクレアージュ・デイジー札幌院が便利です。ただし選択肢を広げたい場合や特定技法（メディカルブローの7Dストロークなど）を希望する場合は、東京遠征も視野に入ります。通院費用と施術費用のトータルで判断しましょう。',
  },
]

export default function SapporoAreaPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[
        { name: 'エリア別', href: '/area/tokyo' },
        { name: '札幌' },
      ]} />

      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">エリア別ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            札幌・北海道の<br className="hidden md:block" />
            アートメイククリニック
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            札幌駅を中心に、北海道エリアで利用できるクリニック情報を比較。<br className="hidden md:block" />
            道内各都市からもアクセス可能な札幌の立地特徴とおすすめ院をご紹介します。
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

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">札幌・北海道エリアの特徴</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {areaFeatures.map((item, i) => (
              <div key={i} className="bg-rose-50 rounded-xl p-6 border border-rose-200">
                <h3 className="font-bold text-lg mb-2 text-gray-800">{item.area}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.desc}</p>
                <p className="text-xs text-rose-500 font-semibold">{item.station}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-yellow-700">【札幌エリアの現状】</strong>
              本サイトで紹介している5クリニックのうち、札幌エリアで直営院を展開しているのは<strong>クレアージュ札幌</strong>と<strong>デイジークリニック 札幌院</strong>が公式情報で確認されています。
              その他のクリニックを希望する場合は、東京・大阪など他エリアへの遠征施術が必要となります。最新の展開状況は各クリニック公式サイトでご確認ください。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50" id="clinics">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">札幌から通えるクリニック</h2>
          <p className="text-center text-sm text-gray-500 mb-10">※ 札幌エリア直営院がある2クリニックと、他エリア遠征が必要な3クリニックを掲載</p>
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
                      {clinic.confirmed && (
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">札幌院あり</span>
                      )}
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

      <section className="py-16 px-4 bg-white" id="comparison">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">料金比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">クリニック</th>
                  <th className="p-4 text-center">眉（税込）</th>
                  <th className="p-4 text-center">札幌対応</th>
                  <th className="p-4 text-center">通院先</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'クレアージュ札幌', price: '132,000円/3回', direct: '◎', station: '札幌院' },
                  { name: 'デイジークリニック', price: '49,800円〜', direct: '◎', station: '札幌院' },
                  { name: 'メディカルブロー', price: '28,000円〜', direct: '要確認', station: '公式で要最新確認' },
                  { name: 'ファーストアートメイク', price: '55,000円〜', direct: '×', station: '銀座院（遠征）' },
                  { name: 'トゥルーデザインクリニック', price: '要相談', direct: '×', station: '大阪心斎橋（遠征）' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-rose-50/30' : 'bg-white'}>
                    <td className="p-4 font-semibold text-gray-800 text-sm">{row.name}</td>
                    <td className="p-4 text-center text-sm font-semibold text-rose-600">{row.price}</td>
                    <td className="p-4 text-center text-sm">{row.direct}</td>
                    <td className="p-4 text-center text-sm text-gray-600">{row.station}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">※ 料金は税込の目安。最新情報は各クリニック公式サイトでご確認ください。</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">札幌のアートメイクに関するFAQ</h2>
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

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">関連記事</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/area/tokyo" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">エリア</span>
              <p className="font-semibold mt-1">東京エリアのおすすめクリニック</p>
            </Link>
            <Link href="/area/sendai" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">エリア</span>
              <p className="font-semibold mt-1">仙台エリアのおすすめクリニック</p>
            </Link>
            <Link href="/review/creage" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">クリニック</span>
              <p className="font-semibold mt-1">クレアージュ東京の口コミ・評判</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">札幌でアートメイクを始めよう</h2>
          <p className="text-xl mb-4 opacity-90">通いやすさ・料金・技術力で総合比較。</p>
          <p className="text-lg mb-8 opacity-80">北海道から、あなたに合うクリニックが見つかります。</p>
          <a href="/" className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            おすすめクリニックランキングを見る
          </a>
          <p className="mt-6 text-sm opacity-70">2026年4月最新 - 札幌エリアのクリニックを比較</p>
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
