import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "福岡のアートメイクおすすめクリニック比較【2026年】天神・博多の検証済み4院と実際の総額",
  description:
    "福岡（天神・博多）のアートメイクを検証済みの公式実額で比較。デイジー天神は眉2回49,800円と当サイト検証で全国最安クラス（2026年6-7月公式確認・税込）。メディカルブロー福岡天神院・クレアージュ福岡・AM CLINIC博多の料金・特徴も一次確認済みデータで解説。",
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
      <Breadcrumb items={[{ name: "エリア" }, { name: "福岡" }]} />
      {/* ===== Hero ===== */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            エリア別ガイド
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            福岡でおすすめの
            <br className="hidden md:block" />
            アートメイククリニック4選
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
                name: "DAZZY CLINIC（デイジー）福岡天神院",
                price: "眉2回 49,800円",
                access: "天神（福岡天神院）",
                station: "地下鉄空港線・西鉄「天神」エリア",
                hours: "公式サイトで要確認",
                point: "natural browが眉2回49,800円（2026年6月12日公式確認・税込）と、当サイトが検証した中で全国最安クラス。院ごとに料金が異なり、福岡天神院は新宿本院（93,800円）より大幅に安いのが特徴。LINEビデオカウンセリング対応。",
                link: "/review/dazzy",
                color: "bg-yellow-400",
              },
              {
                rank: 2,
                name: "メディカルブロー 福岡天神院",
                price: "眉2回 90,000〜150,000円（ランク別）",
                access: "天神2丁目・天神ホワイトビル8F（公式記載: 天神駅4番出口 徒歩1分）",
                station: "地下鉄空港線「天神」・西鉄「福岡（天神）」",
                hours: "公式サイトで要確認",
                point: "累計23万件超の実績と7Dストローク®が強みの大手。公式に「全国同料金」と明記されており福岡でも東京と同一料金体系（2026年7月5日公式確認）。初回モニター1回28,000〜48,000円（ランク別）。指名料（10,000円〜）込みの総額で比較を。",
                link: "/review/medicalbrow",
                color: "bg-gray-300",
              },
              {
                rank: 3,
                name: "クレアージュ福岡",
                price: "眉3回 132,000円〜",
                access: "天神1丁目・福岡ダイヤモンドビル8F（女性専用・2023年4月開院）",
                station: "地下鉄空港線「天神」",
                hours: "公式サイトで要確認",
                point: "3回セットで定着を図る方式（パウダー/マイクロブレーディング132,000円・コンビネーション165,000円）。福岡院はモニター価格あり（パウダー3回105,600円・2026年7月5日公式確認・税込）。女性専用クリニック。",
                link: "/review/creage",
                color: "bg-amber-600",
              },
              {
                rank: 4,
                name: "AM CLINIC（アムクリニック）福岡博多院",
                price: "眉2回 99,000〜132,000円（担当者別）",
                access: "博多駅前3丁目（公式記載: 博多駅 徒歩5分）",
                station: "JR各線・地下鉄空港線「博多」",
                hours: "公式サイトで要確認",
                point: "アーティスト指名制で担当者ごとに料金が異なるのが特徴（1回55,000〜77,000円・モニター1回38,000〜58,000円、2026年7月5日公式確認・税込）。博多駅側で選ぶならここ。診察料1,100円が別途。",
                link: "#",
                color: "bg-rose-200",
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
                  { name: "デイジー 福岡天神院", price: "49,800円（natural brow）", times: "2回", per: "24,900円", area: "天神" },
                  { name: "メディカルブロー 福岡天神院", price: "90,000〜150,000円（ランク別）", times: "2回", per: "45,000円〜", area: "天神" },
                  { name: "クレアージュ福岡", price: "132,000〜165,000円", times: "3回", per: "44,000円〜", area: "天神" },
                  { name: "AM CLINIC 福岡博多院", price: "99,000〜132,000円（担当者別）", times: "2回", per: "49,500円〜", area: "博多" },
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
                a: "当サイト検証（税込）では、デイジー福岡天神院のnatural browが眉2回49,800円で最安クラスです（2026年6月12日公式確認）。モニターを使う場合はメディカルブロー福岡天神院の初回モニター1回28,000円〜（ランク別・2026年7月5日確認）やAM CLINICのモニター1回38,000円〜も選択肢です。",
              },
              {
                q: "博多と天神、どちらのエリアがおすすめですか？",
                a: "検証済み4院のうち3院（デイジー・メディカルブロー・クレアージュ）は天神エリア、AM CLINICは博多駅側です（2026年7月5日公式確認）。JR・新幹線利用なら博多のAM CLINIC、地下鉄・西鉄なら天神の3院が通いやすい構図です。",
              },
              {
                q: "九州の他県から通う方はいますか？",
                a: "福岡は九州最大の都市で、検証済み4院はいずれも天神・博多という交通拠点にあります。アートメイクは2〜3回の通院が前提のため、遠方から通う場合は交通費まで含めた総額で比較するのがおすすめです。",
              },
              {
                q: "福岡のクリニックは東京と比べて技術レベルは同じですか？",
                a: "メディカルブローは公式サイトで「全国同料金」を明記しており、料金体系は東京と同一です（2026年7月5日確認）。技術は担当者個人に依るため、ランク・症例写真・カウンセリングでの相性確認が重要です。デイジーは福岡天神院の方が新宿本院より安い（49,800円 vs 93,800円）という料金差もあります。",
              },
              {
                q: "福岡でモニター割引を受けられるクリニックはありますか？",
                a: "2026年7月5日の公式確認時点で、メディカルブロー福岡天神院（初回モニター1回28,000〜48,000円・ランク別）、クレアージュ福岡（パウダー3回105,600円等）、AM CLINIC（1回38,000〜58,000円・アーティスト別）にモニター価格の記載があります。適用条件は各公式サイト・カウンセリングでご確認ください。",
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
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 text-center mb-10">
            <p className="text-sm text-gray-700 mb-3">主要8院の公式料金を、指名料・麻酔・初診/再診などの追加費用まで含めた「実際に払う総額」で横断比較できます（税込・確認日付き）。アートメイクは医療行為で、料金・仕上がりには個人差があります。</p>
            <Link href="/compare/price/" className="inline-flex items-center justify-center gap-2 bg-rose-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-rose-700 transition">各院の公式料金を横断比較する →</Link>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">関連記事</h2>
          <div className="grid md:grid-cols-2 gap-4">
      <Link href="/area/tokyo/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">エリア</span>
        <p className="font-semibold mt-1">東京のおすすめアートメイククリニック</p>
      </Link>
      <Link href="/area/osaka/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">エリア</span>
        <p className="font-semibold mt-1">大阪エリアのおすすめクリニック</p>
      </Link>
      <Link href="/area/nagoya/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">エリア</span>
        <p className="font-semibold mt-1">名古屋エリアのおすすめクリニック</p>
      </Link>
      <Link href="/review/medicalbrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
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
      
      <div className="max-w-4xl mx-auto px-4">
        <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "福岡で一番安いアートメイククリニックはどこですか？", "acceptedAnswer": {"@type": "Answer", "text": "当サイト検証（税込）では、デイジー福岡天神院のnatural browが眉2回49,800円で最安クラスです（2026年6月12日公式確認）。モニターを使う場合はメディカルブロー福岡天神院の初回モニター1回28,000円〜（ランク別・2026年7月5日確認）やAM CLINICのモニター1回38,000円〜も選択肢です。"}}, {"@type": "Question", "name": "博多と天神、どちらのエリアがおすすめですか？", "acceptedAnswer": {"@type": "Answer", "text": "検証済み4院のうち3院（デイジー・メディカルブロー・クレアージュ）は天神エリア、AM CLINICは博多駅側です（2026年7月5日公式確認）。JR・新幹線利用なら博多のAM CLINIC、地下鉄・西鉄なら天神の3院が通いやすい構図です。"}}, {"@type": "Question", "name": "九州の他県から通う方はいますか？", "acceptedAnswer": {"@type": "Answer", "text": "福岡は九州最大の都市で、検証済み4院はいずれも天神・博多という交通拠点にあります。アートメイクは2〜3回の通院が前提のため、遠方から通う場合は交通費まで含めた総額で比較するのがおすすめです。"}}, {"@type": "Question", "name": "福岡のクリニックは東京と比べて技術レベルは同じですか？", "acceptedAnswer": {"@type": "Answer", "text": "メディカルブローは公式サイトで「全国同料金」を明記しており、料金体系は東京と同一です（2026年7月5日確認）。技術は担当者個人に依るため、ランク・症例写真・カウンセリングでの相性確認が重要です。デイジーは福岡天神院の方が新宿本院より安い（49,800円 vs 93,800円）という料金差もあります。"}}, {"@type": "Question", "name": "福岡でモニター割引を受けられるクリニックはありますか？", "acceptedAnswer": {"@type": "Answer", "text": "2026年7月5日の公式確認時点で、メディカルブロー福岡天神院（初回モニター1回28,000〜48,000円・ランク別）、クレアージュ福岡（パウダー3回105,600円等）、AM CLINIC（1回38,000〜58,000円・アーティスト別）にモニター価格の記載があります。適用条件は各公式サイト・カウンセリングでご確認ください。"}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "福岡", "item": "https://artmake-hikaku.com/area/fukuoka/"}]}) }} />
    </main>
  );
}
