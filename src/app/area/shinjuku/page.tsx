import Link from 'next/link'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アートメイク 新宿 おすすめクリニック2選｜駅近・アクセス抜群【2026年最新】| アートメイク比較ナビ",
  description:
    "新宿エリアでおすすめのアートメイククリニック2院を徹底比較。メディカルブロー新宿院、デイジークリニック新宿院の料金・アクセス・特徴を紹介。新宿駅から徒歩5分以内。",
  keywords: "アートメイク 新宿,アートメイク 新宿 おすすめ,眉毛アートメイク 新宿,アートメイク 新宿 安い,アートメイク 新宿駅",
  openGraph: {
    title: "アートメイク 新宿 おすすめクリニック2選｜駅近・アクセス抜群",
    description:
      "新宿駅周辺のアートメイククリニックを料金・技術で比較。アクセス抜群の人気院を厳選。",
    type: "article",
  },
};

export default function ShinjukuAreaPage() {
  return (
    <main className="min-h-screen">
      {/* ===== Hero ===== */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            エリア別ガイド
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            新宿でおすすめの
            <br className="hidden md:block" />
            アートメイククリニック2選
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            新宿駅周辺はアクセス抜群のクリニックが揃うエリア。
            <br className="hidden md:block" />
            仕事帰り・買い物ついでに通える人気の2院をご紹介します。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#clinics"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              クリニック一覧を見る
            </a>
            <a
              href="/area/tokyo"
              className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500"
            >
              東京全体を見る
            </a>
          </div>
        </div>
      </section>

      {/* ===== エリア特徴 ===== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            新宿エリアの特徴
          </h2>
          <div className="bg-rose-50 rounded-xl p-8 border border-rose-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">&#x1f689;</div>
                <h3 className="font-bold text-gray-800 mb-1">交通の要所</h3>
                <p className="text-sm text-gray-600">
                  JR・小田急・京王・都営地下鉄・東京メトロなど10路線以上が集中。どこからでもアクセス抜群。
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">&#x1f556;</div>
                <h3 className="font-bold text-gray-800 mb-1">夜遅くまで営業</h3>
                <p className="text-sm text-gray-600">
                  新宿エリアのクリニックは夜19〜20時まで営業。仕事帰りや休日の買い物ついでに通える。
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">&#x1f3ea;</div>
                <h3 className="font-bold text-gray-800 mb-1">大手クリニック集中</h3>
                <p className="text-sm text-gray-600">
                  メディカルブロー・デイジーなど大手が旗艦院を構えるエリア。実績豊富な施術者が在籍。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== クリニック一覧 ===== */}
      <section className="py-16 px-4 bg-gray-50" id="clinics">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            新宿エリアのおすすめクリニック
          </h2>
          <div className="space-y-6">
            {[
              {
                rank: 1,
                name: "メディカルブロー 新宿院",
                price: "28,000円〜",
                access: "新宿駅南口より徒歩5分",
                station: "JR各線・小田急線・京王線・東京メトロ丸ノ内線「新宿駅」",
                hours: "10:00〜20:00",
                point: "年間60,000例超の実績を持つ業界最大手。6Dストロークで自然な毛並み感を実現。新宿院はグランドマスターを含む経験豊富な施術者が多数在籍し、予約枠も豊富。",
                link: "/review/medicalbrow",
                color: "bg-yellow-400",
              },
              {
                rank: 2,
                name: "デイジークリニック 新宿院",
                price: "49,800円〜",
                access: "新宿駅東口より徒歩5分",
                station: "JR各線・東京メトロ丸ノ内線・副都心線「新宿駅」「新宿三丁目駅」",
                hours: "10:00〜19:00",
                point: "オリジナル技法「dazzy brow」が大人気。パウダー×毛並みのハイブリッド技術で、ナチュラルからしっかりメイク風まで対応。SNSでの口コミ評価も高い。",
                link: "/review/dazzy",
                color: "bg-gray-300",
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
                    <p className="text-xs text-gray-500 mb-1">
                      アクセス: {clinic.access}
                    </p>
                    <p className="text-xs text-gray-400 mb-1">
                      路線: {clinic.station}
                    </p>
                    <p className="text-xs text-gray-400 mb-2">
                      営業時間: {clinic.hours}
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
            新宿エリア料金比較表
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">クリニック</th>
                  <th className="p-4 text-center">眉（税込）</th>
                  <th className="p-4 text-center">回数</th>
                  <th className="p-4 text-center">1回あたり</th>
                  <th className="p-4 text-center">リタッチ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "メディカルブロー 新宿院", price: "28,000円〜", times: "2回", per: "14,000円〜", retouch: "20,000円〜" },
                  { name: "デイジークリニック 新宿院", price: "49,800円〜", times: "2回", per: "24,900円〜", retouch: "30,000円〜" },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}
                  >
                    <td className="p-4 font-semibold text-gray-800 text-sm">{row.name}</td>
                    <td className="p-4 text-center text-sm font-semibold text-rose-600">{row.price}</td>
                    <td className="p-4 text-center text-sm">{row.times}</td>
                    <td className="p-4 text-center text-sm font-semibold text-rose-600">{row.per}</td>
                    <td className="p-4 text-center text-sm text-gray-600">{row.retouch}</td>
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
            新宿のアートメイクに関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "新宿で一番安いアートメイククリニックはどこですか？",
                a: "メディカルブロー新宿院が28,000円〜（2回セット）で最安です。施術者ランクによって料金が変動しますが、下位ランクでも基本的な技術研修は共通のため品質は保証されています。",
              },
              {
                q: "新宿駅からの行き方を教えてください",
                a: "メディカルブロー新宿院は南口から徒歩5分、デイジークリニック新宿院は東口から徒歩5分です。どちらも駅から近く迷いにくい立地にあります。",
              },
              {
                q: "メディカルブローとデイジーの違いは何ですか？",
                a: "メディカルブローは6Dストローク（毛並み）が得意で料金も安め。デイジーはオリジナルの「dazzy brow」（パウダー×毛並みのハイブリッド）が特徴で、より華やかな仕上がりを求める方に人気です。",
              },
              {
                q: "土日は予約が取りにくいですか？",
                a: "新宿エリアは人気が高いため、土日は2〜3週間前の予約がおすすめです。平日の夕方以降なら比較的空いていることが多いです。",
              },
              {
                q: "新宿でメンズアートメイクは受けられますか？",
                a: "はい、メディカルブロー新宿院はメンズアートメイクの実績も豊富です。男性の眉毛デザインに特化した施術者も在籍しています。",
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
      <Link href="/area/tokyo" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">エリア</span>
        <p className="font-semibold mt-1">東京のおすすめアートメイククリニック</p>
      </Link>
      <Link href="/area/ginza" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">エリア</span>
        <p className="font-semibold mt-1">銀座エリアのおすすめクリニック</p>
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
            新宿でアートメイクを始めよう
          </h2>
          <p className="text-xl mb-4 opacity-90">
            アクセス抜群の新宿で、理想の眉を手に入れる。
          </p>
          <p className="text-lg mb-8 opacity-80">
            仕事帰り・買い物ついでに通える人気クリニックを比較。
          </p>
          <a
            href="/"
            className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            おすすめクリニックランキングを見る
          </a>
          <p className="mt-6 text-sm opacity-70">
            2026年4月最新 - 新宿エリアのクリニックを徹底比較
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      
    </main>
  );
}
