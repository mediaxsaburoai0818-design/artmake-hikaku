import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "アートメイク 大阪 おすすめクリニック5選（公式検証済み）｜心斎橋・梅田エリア比較【2026年最新】| アートメイク比較ナビ",
  description:
    "大阪のアートメイククリニック5院を心斎橋・梅田エリア別に比較。クリニーク・トゥルーデザイン・THE ARTMAKE TOKYO・メディカルブロー・クレアージュの料金を各公式サイトで検証（2026年7月7日確認・税込）。",
  keywords: "アートメイク 大阪 おすすめ,アートメイク 大阪,眉毛アートメイク 大阪,アートメイク 心斎橋,アートメイク 梅田",
  openGraph: {
    title: "アートメイク 大阪 おすすめ5院｜心斎橋・梅田エリア比較（公式検証）",
    description:
      "大阪のアートメイククリニックを心斎橋・梅田エリア別に比較。料金・技術・アクセスで選ぶ。",
    type: "article",
  },
};

export default function OsakaAreaPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "エリア" }, { name: "大阪" }]} />
      {/* ===== Hero ===== */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            エリア別ガイド
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            大阪でおすすめの
            <br className="hidden md:block" />
            アートメイククリニック7選
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            大阪は心斎橋・梅田を中心に実力派クリニックが集結。
            <br className="hidden md:block" />
            関西で通える公式検証済みの5院を、料金・技術・アクセスで徹底比較します（2026年7月7日確認）。
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
            大阪エリアの特徴
          </h2>
          <div className="bg-rose-50 rounded-xl p-8 border border-rose-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">&#x1f3ec;</div>
                <h3 className="font-bold text-gray-800 mb-1">心斎橋エリア</h3>
                <p className="text-sm text-gray-600">
                  美容クリニック密集地帯。心斎橋駅・難波駅から徒歩圏内で、買い物ついでに通える便利な立地。トゥルーデザインクリニックの本院がある。
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">&#x1f3e2;</div>
                <h3 className="font-bold text-gray-800 mb-1">梅田エリア</h3>
                <p className="text-sm text-gray-600">
                  大阪駅・梅田駅直結の好アクセス。大手クリニックの大阪院が集中。京都・神戸からのアクセスも良好。
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
            大阪のおすすめクリニック7選
          </h2>
          <div className="space-y-6">
            {[
              {
                rank: 1,
                name: "クリニーク大阪心斎橋",
                price: "4D眉 初回65,780円〜",
                access: "心斎橋駅より徒歩圏内",
                station: "大阪メトロ御堂筋線・長堀鶴見緑地線「心斎橋駅」",
                point: "4D眉（毛並み＋パウダー）初回限定65,780円・3D眉2回60,280円と実額が明確（2026年7月7日公式確認・税込）。大阪は心斎橋のみの展開で、料金体系がわかりやすいのが特徴。",
                link: "/review/clinique",
                color: "bg-yellow-400",
              },
              {
                rank: 2,
                name: "トゥルーデザインクリニック 心斎橋院",
                price: "眉2回 40,000円〜",
                access: "心斎橋駅7番出口より徒歩3分",
                station: "大阪メトロ御堂筋線・長堀鶴見緑地線「心斎橋駅」",
                point: "完全オーダーメイドデザインが強み。眉2回40,000円〜＋指名料1,500円・麻酔別（2026年7月確認）。関西で技術力に定評のある心斎橋の実力院。",
                link: "/review/true-design",
                color: "bg-gray-300",
              },
              {
                rank: 3,
                name: "THE ARTMAKE TOKYO 大阪院",
                price: "眉モニター2回 88,000円〜",
                access: "曽根崎新地（梅田エリア）",
                station: "JR「大阪駅」・大阪メトロ「梅田駅」",
                point: "全国6院展開。眉モニター2回88,000円（平日）・通常1回80,000円（2026年7月7日確認）。モニターは写真掲載条件あり・経験者は+20,000円の注記に注意。",
                link: "/review/the-artmake-tokyo",
                color: "bg-amber-600",
              },
              {
                rank: 4,
                name: "メディカルブロー 大阪院",
                price: "眉モニター 28,000円〜",
                access: "梅田駅より徒歩5分",
                station: "JR「大阪駅」・大阪メトロ「梅田駅」・阪急「大阪梅田駅」",
                point: "全国同一料金体系。眉モニター28,000円〜・通常2回90,000〜150,000円（ランク別・2026年7月確認）。指名するランクで総額が変わるため、指名料込みで比較を。",
                link: "/review/medicalbrow",
                color: "bg-rose-200",
              },
              {
                rank: 5,
                name: "クレアージュ 大阪院",
                price: "眉3回 132,000円",
                access: "梅田駅より徒歩5分",
                station: "JR「大阪駅」・大阪メトロ「梅田駅」",
                point: "3回セットで丁寧に仕上げる方針。眉3回132,000円＝1回あたり44,000円（初診料込みの総額目安・2026年7月確認）。落ち着いた院内で30〜50代に人気。",
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
                    <p className="text-xs text-gray-500 mb-1">
                      アクセス: {clinic.access}
                    </p>
                    <p className="text-xs text-gray-400 mb-2">
                      路線: {clinic.station}
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
            大阪エリア料金比較表
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
                  { name: "クリニーク大阪心斎橋", price: "65,780円〜(初回4D)", times: "1回", per: "65,780円〜", area: "心斎橋" },
                  { name: "トゥルーデザイン 心斎橋院", price: "40,000円〜", times: "2回", per: "20,000円〜", area: "心斎橋" },
                  { name: "THE ARTMAKE TOKYO 大阪院", price: "88,000円〜(モニター)", times: "2回", per: "44,000円〜", area: "梅田(曽根崎新地)" },
                  { name: "メディカルブロー 大阪院", price: "28,000円〜(モニター)", times: "2回", per: "14,000円〜", area: "梅田" },
                  { name: "クレアージュ 大阪院", price: "132,000円", times: "3回", per: "44,000円", area: "梅田" },
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
            大阪のアートメイクに関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "大阪で一番おすすめのアートメイククリニックはどこですか？",
                a: "技術力重視ならトゥルーデザインクリニック心斎橋院（眉2回40,000円〜）、料金の分かりやすさならクリニーク大阪心斎橋（4D眉初回65,780円）が候補です。コスパ重視ならメディカルブロー大阪院のモニター28,000円〜が最安クラスです（いずれも2026年7月確認）。",
              },
              {
                q: "心斎橋と梅田、どちらのエリアがおすすめですか？",
                a: "JR・阪急で通うなら梅田エリアがアクセス便利です。御堂筋線で通うなら心斎橋も好立地。買い物も楽しみたい方は心斎橋がおすすめです。",
              },
              {
                q: "京都や神戸から通えるクリニックはありますか？",
                a: "梅田エリアのメディカルブロー大阪院・クレアージュ大阪院が、JR・阪急で京都・神戸からアクセスしやすいです。片道30〜40分程度で通えます。",
              },
              {
                q: "大阪のクリニックは東京と料金が違いますか？",
                a: "大手クリニック（メディカルブロー・クレアージュ・THE ARTMAKE TOKYO）は全国ほぼ統一料金のため、東京と同水準で受けられます。トゥルーデザイン・クリニークは心斎橋の院です。",
              },
              {
                q: "大阪で安くアートメイクを受ける方法はありますか？",
                a: "メディカルブロー大阪院の下位ランク施術者のモニター（28,000円〜）を選ぶのが最安クラスです。THE ARTMAKE TOKYOのモニター（写真掲載条件あり）も割安ですが、経験者は+20,000円の注記に注意してください。",
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
      <Link href="/area/nagoya/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">エリア</span>
        <p className="font-semibold mt-1">名古屋エリアのおすすめクリニック</p>
      </Link>
      <Link href="/area/fukuoka/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">エリア</span>
        <p className="font-semibold mt-1">福岡エリアのおすすめクリニック</p>
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
            大阪であなたに合ったクリニックを見つけよう
          </h2>
          <p className="text-xl mb-4 opacity-90">
            心斎橋・梅田の人気クリニックを料金・技術で比較。
          </p>
          <p className="text-lg mb-8 opacity-80">
            関西エリアで理想のアートメイクを実現しましょう。
          </p>
          <a
            href="/"
            className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            おすすめクリニックランキングを見る
          </a>
          <p className="mt-6 text-sm opacity-70">
            2026年4月最新 - 大阪エリアのクリニックを徹底比較
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      
      <div className="max-w-4xl mx-auto px-4">
        <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "大阪で一番おすすめのアートメイククリニックはどこですか？", "acceptedAnswer": {"@type": "Answer", "text": "技術力重視ならトゥルーデザインクリニック心斎橋院（眉2回40,000円〜）、料金の分かりやすさならクリニーク大阪心斎橋（4D眉初回65,780円）が候補です。コスパ重視ならメディカルブロー大阪院のモニター28,000円〜が最安クラスです（いずれも2026年7月確認）。"}}, {"@type": "Question", "name": "心斎橋と梅田、どちらのエリアがおすすめですか？", "acceptedAnswer": {"@type": "Answer", "text": "JR・阪急で通うなら梅田エリアがアクセス便利です。御堂筋線で通うなら心斎橋も好立地。買い物も楽しみたい方は心斎橋がおすすめです。"}}, {"@type": "Question", "name": "京都や神戸から通えるクリニックはありますか？", "acceptedAnswer": {"@type": "Answer", "text": "梅田エリアのメディカルブロー大阪院・クレアージュ大阪院が、JR・阪急で京都・神戸からアクセスしやすいです。片道30〜40分程度で通えます。"}}, {"@type": "Question", "name": "大阪のクリニックは東京と料金が違いますか？", "acceptedAnswer": {"@type": "Answer", "text": "大手クリニック（メディカルブロー・クレアージュ・THE ARTMAKE TOKYO）は全国ほぼ統一料金のため、東京と同水準で受けられます。トゥルーデザイン・クリニークは心斎橋の院です。"}}, {"@type": "Question", "name": "大阪で安くアートメイクを受ける方法はありますか？", "acceptedAnswer": {"@type": "Answer", "text": "メディカルブロー大阪院の下位ランク施術者のモニター（28,000円〜）を選ぶのが最安クラスです。THE ARTMAKE TOKYOのモニター（写真掲載条件あり）も割安ですが、経験者は+20,000円の注記に注意してください。"}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "大阪", "item": "https://artmake-hikaku.com/area/osaka/"}]}) }} />
    </main>
  );
}
