import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アートメイク 東京 おすすめクリニック5選｜エリア別徹底比較【2026年最新】| アートメイク比較ナビ",
  description:
    "東京でおすすめのアートメイククリニック5院を表参道・新宿・銀座・六本木エリア別に徹底比較。メディカルブロー、デイジー、ファーストアートメイク、クレアージュの料金・アクセス・口コミを紹介。",
  keywords: "アートメイク 東京 おすすめ,アートメイク 東京,眉毛アートメイク 東京,アートメイク 東京 安い,アートメイク 東京 人気",
  openGraph: {
    title: "アートメイク 東京 おすすめクリニック5選｜エリア別徹底比較",
    description:
      "東京のアートメイククリニックを表参道・新宿・銀座・六本木エリア別に比較。料金・技術・アクセスで選ぶ。",
    type: "article",
  },
};

export default function TokyoAreaPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "エリア" }, { name: "東京" }]} />
      {/* ===== Hero ===== */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            エリア別ガイド
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            東京でおすすめの
            <br className="hidden md:block" />
            アートメイククリニック5選
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            東京はアートメイククリニックの激戦区。
            <br className="hidden md:block" />
            表参道・新宿・銀座・六本木の人気エリア別に厳選クリニックをご紹介します。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#clinics"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              クリニック一覧を見る
            </a>
            <a
              href="/"
              className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500"
            >
              総合ランキングへ
            </a>
          </div>
        </div>
      </section>

      {/* ===== エリア特徴 ===== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            東京エリアの特徴
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                area: "表参道・青山",
                desc: "美容感度の高いエリア。トレンド最先端の技術を取り入れたクリニックが集中。芸能人御用達の院も多い。",
                station: "表参道駅・明治神宮前駅",
              },
              {
                area: "新宿",
                desc: "アクセス抜群で通いやすさNo.1。大手クリニックの旗艦院が揃い、夜遅くまで営業している院も。",
                station: "新宿駅・新宿三丁目駅",
              },
              {
                area: "銀座",
                desc: "高級感のあるクリニックが多数。丁寧なカウンセリングと上質な空間で、大人の女性に人気。",
                station: "銀座駅・有楽町駅",
              },
              {
                area: "六本木",
                desc: "外国人対応可能なクリニックも。海外トレンドを取り入れた最新技術が受けられる。",
                station: "六本木駅・乃木坂駅",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-rose-50 rounded-xl p-6 border border-rose-200"
              >
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {item.area}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  {item.desc}
                </p>
                <p className="text-xs text-rose-500 font-semibold">
                  最寄駅: {item.station}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== クリニック一覧 ===== */}
      <section className="py-16 px-4 bg-gray-50" id="clinics">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            東京のおすすめクリニック5選
          </h2>
          <div className="space-y-6">
            {[
              {
                rank: 1,
                name: "メディカルブロー 表参道院",
                price: "28,000円〜",
                access: "表参道駅A1出口より徒歩3分",
                point: "年間症例数60,000例超の圧倒的実績。6Dストロークで自然な毛並み感を実現。表参道の他、新宿・六本木・銀座にも展開。",
                areas: "表参道・新宿・六本木・銀座",
                link: "/review/medicalbrow",
                color: "bg-yellow-400",
              },
              {
                rank: 2,
                name: "メディカルブロー 新宿院",
                price: "28,000円〜",
                access: "新宿駅南口より徒歩5分",
                point: "新宿エリアで最もアクセスの良い大手院。平日夜20時まで営業で仕事帰りにも通いやすい。",
                areas: "新宿",
                link: "/review/medicalbrow",
                color: "bg-gray-300",
              },
              {
                rank: 3,
                name: "デイジークリニック 新宿院",
                price: "49,800円〜",
                access: "新宿駅東口より徒歩5分",
                point: "オリジナル技法「dazzy brow」が大人気。ナチュラルからしっかりメイク風まで幅広いデザインに対応。",
                areas: "新宿",
                link: "/review/dazzy",
                color: "bg-amber-600",
              },
              {
                rank: 4,
                name: "ファーストアートメイク 銀座院",
                price: "38,500円〜",
                access: "銀座駅B5出口より徒歩3分",
                point: "初回限定価格が魅力。パウダー眉の仕上がりが上品で、銀座らしい洗練されたデザインを提供。",
                areas: "銀座",
                link: "/review/first-artmake",
                color: "bg-rose-200",
              },
              {
                rank: 5,
                name: "クレアージュ東京 有楽町院",
                price: "44,000円/回",
                access: "有楽町駅日比谷口より徒歩1分",
                point: "3回施術で自然なグラデーションを実現。30代〜50代の大人女性から圧倒的支持。丁寧なカウンセリングが好評。",
                areas: "有楽町（銀座エリア）",
                link: "/review/creage",
                color: "bg-rose-100",
              },
            ].map((clinic) => (
              <div
                key={clinic.rank}
                className="bg-white border border-rose-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`${clinic.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0`}
                  >
                    {clinic.rank}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h3 className="font-bold text-xl text-gray-800">
                        {clinic.name}
                      </h3>
                      <span className="text-2xl font-bold text-rose-500">
                        {clinic.price}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">
                      アクセス: {clinic.access}
                    </p>
                    <p className="text-xs text-rose-400 mb-2">
                      展開エリア: {clinic.areas}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      {clinic.point}
                    </p>
                    <a
                      href={clinic.link}
                      className="text-rose-500 text-sm font-semibold hover:underline"
                    >
                      詳しいレビューを見る &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 料金比較表 ===== */}
      <section className="py-16 px-4 bg-white" id="comparison">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            東京エリア料金比較表
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">クリニック</th>
                  <th className="p-4 text-center">眉（税込）</th>
                  <th className="p-4 text-center">回数</th>
                  <th className="p-4 text-center">エリア</th>
                  <th className="p-4 text-center">最寄駅</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "メディカルブロー", price: "28,000円〜", times: "2回", area: "表参道/新宿/六本木/銀座", station: "各駅徒歩3〜5分" },
                  { name: "ファーストアートメイク", price: "38,500円〜", times: "1回", area: "銀座", station: "銀座駅徒歩3分" },
                  { name: "クレアージュ東京", price: "132,000円", times: "3回", area: "有楽町", station: "有楽町駅徒歩1分" },
                  { name: "デイジークリニック", price: "49,800円〜", times: "2回", area: "新宿", station: "新宿駅徒歩5分" },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}
                  >
                    <td className="p-4 font-semibold text-gray-800 text-sm">{row.name}</td>
                    <td className="p-4 text-center text-sm font-semibold text-rose-600">{row.price}</td>
                    <td className="p-4 text-center text-sm">{row.times}</td>
                    <td className="p-4 text-center text-sm">{row.area}</td>
                    <td className="p-4 text-center text-sm text-gray-600">{row.station}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            ※ 料金は税込の目安です。施術者ランク・キャンペーン時期により変動します。
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            東京のアートメイクに関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "東京で一番おすすめのアートメイククリニックはどこですか？",
                a: "総合的に見てメディカルブローがおすすめです。表参道・新宿・六本木・銀座と4拠点あり、年間60,000例以上の実績があります。料金も28,000円〜とリーズナブルです。",
              },
              {
                q: "東京のどのエリアがアートメイクに通いやすいですか？",
                a: "アクセス重視なら新宿がおすすめです。JR・私鉄・地下鉄が集中し、どこからでも通いやすい立地です。高級感を重視するなら銀座・表参道エリアがおすすめです。",
              },
              {
                q: "東京のクリニックは予約が取りにくいですか？",
                a: "人気院は土日の予約が埋まりやすい傾向があります。平日夕方以降や、開院直後の時間帯が比較的予約を取りやすいです。2〜3週間前の予約がおすすめです。",
              },
              {
                q: "東京で安くアートメイクを受けるコツはありますか？",
                a: "メディカルブローの下位ランク施術者を選ぶと28,000円〜で受けられます。また、モニター制度の活用やキャンペーン時期を狙うことで、さらにお得に受けられます。",
              },
              {
                q: "仕事帰りに通えるクリニックはありますか？",
                a: "メディカルブロー新宿院は20時まで、デイジークリニック新宿院も19時まで営業しています。新宿・有楽町エリアのクリニックは仕事帰りに通いやすいです。",
              },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-lg shadow-sm group">
                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-gray-50 transition-colors flex justify-between items-center">
                  <span>
                    Q{i + 1}. {faq.q}
                  </span>
                  <span className="text-rose-400 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 py-4 border-t text-gray-600 leading-relaxed text-sm">
                  <span className="font-semibold text-rose-500">A.</span>{" "}
                  {faq.a}
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
      <Link href="/area/ginza" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">エリア</span>
        <p className="font-semibold mt-1">銀座エリアのおすすめクリニック</p>
      </Link>
      <Link href="/area/shinjuku" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">エリア</span>
        <p className="font-semibold mt-1">新宿エリアのおすすめクリニック</p>
      </Link>
      <Link href="/review/medicalbrow" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">メディカルブローの口コミ・評判</p>
      </Link>
      <Link href="/review/dazzy" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">デイジークリニックの口コミ・評判</p>
      </Link>
      <Link href="/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">ランキング</span>
        <p className="font-semibold mt-1">アートメイクおすすめクリニックTOP5</p>
      </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            東京であなたに合ったクリニックを見つけよう
          </h2>
          <p className="text-xl mb-4 opacity-90">
            エリア・料金・技術力で総合比較。
          </p>
          <p className="text-lg mb-8 opacity-80">
            表参道・新宿・銀座・六本木、あなたにぴったりの1院が見つかります。
          </p>
          <a
            href="/"
            className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            おすすめクリニックランキングを見る
          </a>
          <p className="mt-6 text-sm opacity-70">
            2026年4月最新 - 東京エリアのクリニックを徹底比較
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      
    </main>
  );
}
