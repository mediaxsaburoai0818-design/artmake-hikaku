import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'アートメイク 横浜 おすすめクリニック｜神奈川エリア徹底比較【2026年最新】',
  description:
    '横浜・神奈川エリアでアートメイクを受けられるクリニック情報を徹底比較。メディカルブロー横浜院など、通勤通学に便利な横浜エリアの特徴、料金比較、アクセスガイド、FAQを完全ガイド。',
  keywords: 'アートメイク 横浜,アートメイク 神奈川,アートメイク 横浜駅,眉毛アートメイク 横浜',
  openGraph: {
    title: 'アートメイク 横浜 おすすめクリニック｜神奈川エリア徹底比較',
    description: '横浜・神奈川のアートメイククリニックを徹底比較。',
    type: 'article',
  },
}

const areaFeatures = [
  { area: '横浜駅周辺', desc: 'JR・私鉄・地下鉄が集中する交通の要所。通勤通学の合間に通いやすい。', station: '横浜駅' },
  { area: 'みなとみらい', desc: '洗練された街並み。高級感のあるクリニックが多い。週末の来院にも便利。', station: 'みなとみらい駅' },
  { area: '関内・馬車道', desc: '歴史ある商業エリア。落ち着いた雰囲気で大人世代にも人気。', station: '関内駅・馬車道駅' },
  { area: '川崎・武蔵小杉', desc: '横浜北部〜川崎方面からもアクセスしやすい新興エリア。', station: '川崎駅・武蔵小杉駅' },
]

const clinics = [
  {
    rank: 1,
    name: 'メディカルブロー 横浜院',
    price: '28,000円〜（モニター）',
    access: '横浜駅から徒歩圏内（公式サイトで最新情報確認）',
    point: '累計症例23万件超の業界最大手の横浜院。7Dストローク®技術が受けられる。モニター制度も実施。',
    link: '/review/medicalbrow',
    color: 'bg-yellow-400',
    confirmed: true,
  },
  {
    rank: 2,
    name: 'クレアージュ東京（東京展開）',
    price: '132,000円/3回',
    access: '有楽町院が横浜から30分以内',
    point: '3回施術の丁寧さが魅力。40-50代支持。横浜からは有楽町本院への通院が一般的。',
    link: '/review/creage',
    color: 'bg-gray-300',
  },
  {
    rank: 3,
    name: 'デイジークリニック（新宿・福岡院）',
    price: '49,800円〜',
    access: '新宿院が横浜から30分',
    point: '世界的アーティスト監修のデザイン。新宿院・福岡院で最大50%OFF（条件あり）。',
    link: '/review/dazzy',
    color: 'bg-amber-600',
  },
  {
    rank: 4,
    name: 'ファーストアートメイク（銀座院）',
    price: '55,000円〜',
    access: '銀座院まで横浜から40分',
    point: '初心者向けの丁寧なカウンセリングが評判。横浜からは銀座院への通院となる。',
    link: '/review/first-artmake',
    color: 'bg-rose-200',
  },
  {
    rank: 5,
    name: 'トゥルーデザインクリニック（大阪心斎橋）',
    price: '要相談',
    access: '関西エリアのみ',
    point: '40-50代デザイン特化。横浜からの施術は飛行機・新幹線利用となる。',
    link: '/review/true-design',
    color: 'bg-rose-100',
  },
]

const faqs = [
  {
    q: '横浜でアートメイクを受けるメリットは？',
    a: '横浜駅は神奈川最大のターミナル駅で、都内主要駅（渋谷・新宿・東京）から30分以内でアクセス可能。通勤通学の合間に通いやすく、メディカルブロー横浜院のように大手クリニックの横浜院も存在します。',
  },
  {
    q: '横浜駅から通える主要クリニックは？',
    a: 'メディカルブロー横浜院が横浜エリアで利用可能です。その他のクリニックは東京都内の院への通院となります。他クリニックの横浜エリア展開については、各クリニック公式サイトで最新情報をご確認ください。',
  },
  {
    q: '横浜と東京都内、どちらで受けるべき？',
    a: '横浜在住・勤務の方は横浜院が便利ですが、選択肢を広げたい場合は東京都内のクリニックへの通院もおすすめです。東京には5クリニック全ての院があり、施術者のバリエーションも豊富です。',
  },
  {
    q: '横浜のクリニックは予約が取りやすいですか？',
    a: '土日祝日は予約が埋まりやすい傾向があります。平日の夕方や、開院直後・閉院直前の時間帯が比較的予約を取りやすいです。2〜3週間前の予約がおすすめです。',
  },
]

export default function YokohamaAreaPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[
        { name: 'エリア別', href: '/area/tokyo' },
        { name: '横浜' },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">エリア別ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            横浜・神奈川の<br className="hidden md:block" />
            アートメイククリニック
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            横浜駅周辺を中心に、神奈川エリアで利用できるクリニック情報を比較。<br className="hidden md:block" />
            通勤通学にも便利な横浜エリアの特徴とおすすめ院をご紹介します。
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

      {/* エリア特徴 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">横浜・神奈川エリアの特徴</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {areaFeatures.map((item, i) => (
              <div key={i} className="bg-rose-50 rounded-xl p-6 border border-rose-200">
                <h3 className="font-bold text-lg mb-2 text-gray-800">{item.area}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.desc}</p>
                <p className="text-xs text-rose-500 font-semibold">最寄駅: {item.station}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-yellow-700">【横浜エリアの現状】</strong>
              本サイトで紹介している5クリニックのうち、横浜エリアで直接利用できるのは<strong>メディカルブロー横浜院</strong>が公式情報で確認されています。
              その他のクリニックを希望する場合は、東京都内の院への通院が一般的です。最新の横浜エリア展開状況は各クリニック公式サイトでご確認ください。
            </p>
          </div>
        </div>
      </section>

      {/* クリニック一覧 */}
      <section className="py-16 px-4 bg-gray-50" id="clinics">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">横浜から通えるクリニック</h2>
          <p className="text-center text-sm text-gray-500 mb-10">※ 横浜エリア直営院があるクリニックと、近隣都内院への通院が一般的なクリニックを掲載</p>
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
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">横浜院あり</span>
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

      {/* 料金比較表 */}
      <section className="py-16 px-4 bg-white" id="comparison">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">料金比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">クリニック</th>
                  <th className="p-4 text-center">眉（税込）</th>
                  <th className="p-4 text-center">横浜対応</th>
                  <th className="p-4 text-center">通院先</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'メディカルブロー', price: '28,000円〜', direct: '◎', station: '横浜院' },
                  { name: 'クレアージュ東京', price: '132,000円/3回', direct: '×', station: '有楽町院（30分）' },
                  { name: 'デイジークリニック', price: '49,800円〜', direct: '×', station: '新宿院（30分）' },
                  { name: 'ファーストアートメイク', price: '55,000円〜', direct: '×', station: '銀座院（40分）' },
                  { name: 'トゥルーデザインクリニック', price: '要相談', direct: '×', station: '大阪心斎橋のみ' },
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

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">横浜のアートメイクに関するFAQ</h2>
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
            <Link href="/area/shinjuku" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">エリア</span>
              <p className="font-semibold mt-1">新宿エリアのおすすめクリニック</p>
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

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">横浜でアートメイクを始めよう</h2>
          <p className="text-xl mb-4 opacity-90">通いやすさ・料金・技術力で総合比較。</p>
          <p className="text-lg mb-8 opacity-80">横浜駅から、あなたに合うクリニックが見つかります。</p>
          <a href="/" className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            おすすめクリニックランキングを見る
          </a>
          <p className="mt-6 text-sm opacity-70">2026年4月最新 - 横浜エリアのクリニックを比較</p>
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
