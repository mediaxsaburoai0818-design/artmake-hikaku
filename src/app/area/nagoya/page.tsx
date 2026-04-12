import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アートメイク 名古屋 おすすめクリニック2選｜名古屋駅・栄エリア【2026年最新】| アートメイク比較ナビ",
  description:
    "名古屋でおすすめのアートメイククリニック2院を徹底比較。メディカルブロー名古屋院、クレアージュ名古屋院の料金・アクセス・特徴を紹介。名古屋駅・栄エリアで通いやすい。",
  keywords: "アートメイク 名古屋,アートメイク 名古屋 おすすめ,眉毛アートメイク 名古屋,アートメイク 栄,アートメイク 名古屋駅",
  openGraph: {
    title: "アートメイク 名古屋 おすすめクリニック2選｜名古屋駅・栄エリア",
    description:
      "名古屋のアートメイククリニックを料金・技術・アクセスで比較。名古屋駅・栄エリアの人気院を厳選。",
    type: "article",
  },
};

export default function NagoyaAreaPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "エリア" }, { name: "名古屋" }]} />
      {/* ===== Hero ===== */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            エリア別ガイド
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            名古屋でおすすめの
            <br className="hidden md:block" />
            アートメイククリニック2選
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            名古屋駅・栄エリアで通いやすいアートメイククリニックを厳選。
            <br className="hidden md:block" />
            東海地方で人気の2院を料金・技術・アクセスで比較します。
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
            名古屋エリアの特徴
          </h2>
          <div className="bg-rose-50 rounded-xl p-8 border border-rose-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">&#x1f685;</div>
                <h3 className="font-bold text-gray-800 mb-1">名古屋駅エリア</h3>
                <p className="text-sm text-gray-600">
                  JR・名鉄・近鉄・地下鉄が集まるターミナル駅。新幹線で東京・大阪からも通院可能。駅直結のビルにクリニックが入居。
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">&#x1f3ec;</div>
                <h3 className="font-bold text-gray-800 mb-1">栄エリア</h3>
                <p className="text-sm text-gray-600">
                  名古屋の繁華街。地下鉄東山線・名城線「栄駅」周辺に美容クリニックが集中。買い物ついでに通える便利な立地。
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
            名古屋のおすすめクリニック2選
          </h2>
          <div className="space-y-6">
            {[
              {
                rank: 1,
                name: "メディカルブロー 名古屋院",
                price: "28,000円〜",
                access: "名古屋駅より徒歩5分",
                station: "JR東海道新幹線・各線「名古屋駅」・地下鉄東山線・桜通線「名古屋駅」",
                hours: "10:00〜20:00",
                point: "東京で年間60,000例の実績を持つ大手が名古屋に進出。6Dストロークで自然な毛並み感を実現。名古屋院でも東京と同じ高品質な施術が受けられる。新幹線で他県から通う方も多い。",
                link: "/review/medicalbrow",
                color: "bg-yellow-400",
              },
              {
                rank: 2,
                name: "クレアージュ 名古屋院",
                price: "44,000円/回",
                access: "名古屋駅より徒歩3分",
                station: "JR各線・名鉄・近鉄・地下鉄「名古屋駅」",
                hours: "10:00〜19:00（水・木休診）",
                point: "3回施術で繊細なグラデーションを実現する丁寧な施術が特徴。30代〜50代の大人女性に支持されている。名古屋駅から徒歩3分と好アクセスで、カウンセリングの丁寧さに定評あり。",
                link: "/review/creage",
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
            名古屋エリア料金比較表
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
                  { name: "メディカルブロー 名古屋院", price: "28,000円〜", times: "2回", per: "14,000円〜", retouch: "20,000円〜" },
                  { name: "クレアージュ 名古屋院", price: "132,000円", times: "3回", per: "44,000円", retouch: "33,000円〜" },
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
            名古屋のアートメイクに関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "名古屋で一番安いアートメイククリニックはどこですか？",
                a: "メディカルブロー名古屋院が28,000円〜（2回セット）で最安です。東京と同じ料金体系で、品質も同レベルの施術が受けられます。",
              },
              {
                q: "名古屋駅から通いやすいクリニックはどこですか？",
                a: "クレアージュ名古屋院が名古屋駅から徒歩3分と最も近いです。メディカルブロー名古屋院も徒歩5分と好アクセスです。",
              },
              {
                q: "他県から名古屋に通う方はいますか？",
                a: "はい、三重・岐阜・静岡から通う方が多いです。名古屋駅は新幹線停車駅なので、東京・大阪から2回目以降の通院で利用される方もいます。",
              },
              {
                q: "名古屋のクリニックは東京と比べて技術レベルは同じですか？",
                a: "メディカルブロー・クレアージュともに全国統一の研修制度があり、技術レベルは東京と同等です。ただし施術者の経験年数には個人差があるため、症例写真で確認することをおすすめします。",
              },
              {
                q: "メディカルブローとクレアージュの違いは何ですか？",
                a: "メディカルブローは6Dストローク（毛並み）が得意で料金が安め。クレアージュは3回施術で丁寧にグラデーションを作る手法が特徴で、大人の女性に人気です。仕上がりの好みで選ぶのがおすすめです。",
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
      <Link href="/area/osaka" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">エリア</span>
        <p className="font-semibold mt-1">大阪エリアのおすすめクリニック</p>
      </Link>
      <Link href="/area/fukuoka" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">エリア</span>
        <p className="font-semibold mt-1">福岡エリアのおすすめクリニック</p>
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

      {/* ===== CTA ===== */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            名古屋でアートメイクを始めよう
          </h2>
          <p className="text-xl mb-4 opacity-90">
            名古屋駅・栄エリアの実力派クリニックを比較。
          </p>
          <p className="text-lg mb-8 opacity-80">
            東海地方で理想のアートメイクを実現しましょう。
          </p>
          <a
            href="/"
            className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            おすすめクリニックランキングを見る
          </a>
          <p className="mt-6 text-sm opacity-70">
            2026年4月最新 - 名古屋エリアのクリニックを徹底比較
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      
    </main>
  );
}
