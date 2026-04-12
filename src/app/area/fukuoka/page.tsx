import Link from 'next/link'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アートメイク 福岡 おすすめクリニック3選｜博多・天神エリア比較【2026年最新】| アートメイク比較ナビ",
  description:
    "福岡でおすすめのアートメイククリニック3院を博多・天神エリア別に徹底比較。メディカルブロー福岡院、デイジークリニック福岡院、クレアージュ福岡院の料金・アクセス・特徴を紹介。",
  keywords: "アートメイク 福岡,アートメイク 福岡 おすすめ,眉毛アートメイク 福岡,アートメイク 天神,アートメイク 博多",
  openGraph: {
    title: "アートメイク 福岡 おすすめクリニック3選｜博多・天神エリア比較",
    description:
      "福岡のアートメイククリニックを博多・天神エリア別に比較。料金・技術・アクセスで選ぶ。",
    type: "article",
  },
};

export default function FukuokaAreaPage() {
  return (
    <main className="min-h-screen">
      {/* ===== Hero ===== */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            エリア別ガイド
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            福岡でおすすめの
            <br className="hidden md:block" />
            アートメイククリニック3選
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            福岡は博多・天神エリアを中心に大手クリニックが進出。
            <br className="hidden md:block" />
            九州エリアで人気の3院を料金・技術・アクセスで徹底比較します。
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
            福岡エリアの特徴
          </h2>
          <div className="bg-rose-50 rounded-xl p-8 border border-rose-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">&#x1f685;</div>
                <h3 className="font-bold text-gray-800 mb-1">博多エリア</h3>
                <p className="text-sm text-gray-600">
                  JR博多駅周辺。新幹線・在来線のターミナル駅で、九州各地からのアクセスが抜群。駅直結の商業施設にクリニックが入居するケースも。
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">&#x1f3ec;</div>
                <h3 className="font-bold text-gray-800 mb-1">天神エリア</h3>
                <p className="text-sm text-gray-600">
                  福岡最大の繁華街。地下鉄空港線「天神駅」周辺に美容クリニックが集中。西鉄福岡（天神）駅からもアクセス可能。買い物ついでに通える。
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
            福岡のおすすめクリニック3選
          </h2>
          <div className="space-y-6">
            {[
              {
                rank: 1,
                name: "メディカルブロー 福岡院",
                price: "28,000円〜",
                access: "天神駅より徒歩4分",
                station: "地下鉄空港線「天神駅」・西鉄「福岡（天神）駅」",
                hours: "10:00〜20:00",
                point: "年間60,000例超の実績を持つ業界最大手が福岡に進出。6Dストロークで自然な毛並み感を実現。東京と同じクオリティの施術が福岡で受けられると好評。九州各地から通う方も多い。",
                link: "/review/medicalbrow",
                color: "bg-yellow-400",
              },
              {
                rank: 2,
                name: "デイジークリニック 福岡院",
                price: "49,800円〜",
                access: "天神駅より徒歩5分",
                station: "地下鉄空港線「天神駅」・西鉄「福岡（天神）駅」",
                hours: "10:00〜19:00",
                point: "SNSで大人気のdazzy browが福岡でも施術可能。パウダー×毛並みのハイブリッド技術で、ナチュラルからしっかりメイク風まで対応。福岡の若い女性に特に人気。",
                link: "/review/dazzy",
                color: "bg-gray-300",
              },
              {
                rank: 3,
                name: "クレアージュ 福岡院",
                price: "44,000円/回",
                access: "博多駅より徒歩5分",
                station: "JR各線・地下鉄空港線「博多駅」",
                hours: "10:00〜19:00（水・木休診）",
                point: "3回施術で繊細なグラデーションを丁寧に仕上げる。30代〜50代の落ち着いた大人女性に人気。博多駅から徒歩圏内で、九州各県からもアクセスしやすい。",
                link: "/review/creage",
                color: "bg-amber-600",
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
            福岡エリア料金比較表
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">クリニック</th>
                  <th className="p-4 text-center">眉（税込）</th>
                  <th className="p-4 text-center">回数</th>
                  <th className="p-4 text-center">1回あたり</th>
                  <th className="p-4 text-center">エリア</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "メディカルブロー 福岡院", price: "28,000円〜", times: "2回", per: "14,000円〜", area: "天神" },
                  { name: "クレアージュ 福岡院", price: "132,000円", times: "3回", per: "44,000円", area: "博多" },
                  { name: "デイジークリニック 福岡院", price: "49,800円〜", times: "2回", per: "24,900円〜", area: "天神" },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}
                  >
                    <td className="p-4 font-semibold text-gray-800 text-sm">{row.name}</td>
                    <td className="p-4 text-center text-sm font-semibold text-rose-600">{row.price}</td>
                    <td className="p-4 text-center text-sm">{row.times}</td>
                    <td className="p-4 text-center text-sm font-semibold text-rose-600">{row.per}</td>
                    <td className="p-4 text-center text-sm text-gray-600">{row.area}</td>
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
            福岡のアートメイクに関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "福岡で一番安いアートメイククリニックはどこですか？",
                a: "メディカルブロー福岡院が28,000円〜（2回セット）で最安です。東京と同じ料金体系・技術レベルで施術が受けられます。",
              },
              {
                q: "博多と天神、どちらのエリアがおすすめですか？",
                a: "JR・新幹線で通う方は博多エリア（クレアージュ福岡院）が便利です。地下鉄・西鉄で通う方や買い物も楽しみたい方は天神エリア（メディカルブロー・デイジー）がおすすめです。",
              },
              {
                q: "九州の他県から通う方はいますか？",
                a: "はい、熊本・大分・佐賀・長崎など九州各県から博多駅経由で通う方が多いです。新幹線利用で熊本から約40分、鹿児島から約80分でアクセスできます。",
              },
              {
                q: "福岡のクリニックは東京と比べて技術レベルは同じですか？",
                a: "メディカルブロー・デイジー・クレアージュはいずれも全国統一の研修制度を設けており、基本的な技術レベルは東京と同等です。グランドマスターなど上位ランクの施術者は東京に多い傾向があります。",
              },
              {
                q: "福岡でモニター割引を受けられるクリニックはありますか？",
                a: "デイジークリニック福岡院でモニター制度を実施しています。施術写真の提供に同意すると10〜20%OFFで受けられます。詳細は公式サイトで最新情報をご確認ください。",
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
      <Link href="/area/nagoya" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">エリア</span>
        <p className="font-semibold mt-1">名古屋エリアのおすすめクリニック</p>
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
            福岡でアートメイクを始めよう
          </h2>
          <p className="text-xl mb-4 opacity-90">
            博多・天神の人気クリニックを料金・技術で比較。
          </p>
          <p className="text-lg mb-8 opacity-80">
            九州エリアで理想のアートメイクを実現しましょう。
          </p>
          <a
            href="/"
            className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            おすすめクリニックランキングを見る
          </a>
          <p className="mt-6 text-sm opacity-70">
            2026年4月最新 - 福岡エリアのクリニックを徹底比較
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      
    </main>
  );
}
