import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: "アートメイク 銀座 おすすめクリニック4選｜駅近・高級感で選ぶ【2026年6月】| アートメイク比較ナビ",
  description:
    "銀座エリアでおすすめのアートメイククリニック3院を徹底比較。ファーストアートメイク（銀座駅徒歩3分）、メディカルブロー銀座院、クレアージュ（有楽町駅近く）の料金・アクセス・特徴を紹介。",
  keywords: "アートメイク 銀座,アートメイク 銀座 おすすめ,眉毛アートメイク 銀座,アートメイク 有楽町,アートメイク 銀座 安い",
  openGraph: {
    title: "アートメイク 銀座 おすすめクリニック3選｜駅近・高級感で選ぶ",
    description:
      "銀座エリアのアートメイククリニックを料金・アクセス・雰囲気で比較。仕事帰りに通いやすい高級感のある院を厳選。",
    type: "article",
  },
};

export default function GinzaAreaPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "エリア" }, { name: "銀座" }]} />
      {/* ===== Hero ===== */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            エリア別ガイド
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            銀座でおすすめの
            <br className="hidden md:block" />
            アートメイククリニック4選
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            銀座は高級感あふれるクリニックが集まるエリア。
            <br className="hidden md:block" />
            仕事帰りにも通いやすい駅近の実力院を厳選しました。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#clinics"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              クリニック一覧を見る
            </a>
            <a
              href="/area/tokyo/"
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
            銀座エリアの特徴
          </h2>
          <div className="bg-rose-50 rounded-xl p-8 border border-rose-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">&#x1f3e2;</div>
                <h3 className="font-bold text-gray-800 mb-1">高級感ある空間</h3>
                <p className="text-sm text-gray-600">
                  ラグジュアリーな内装のクリニックが多く、特別感のある施術体験ができます。
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">&#x1f686;</div>
                <h3 className="font-bold text-gray-800 mb-1">抜群のアクセス</h3>
                <p className="text-sm text-gray-600">
                  銀座駅・有楽町駅・東銀座駅から徒歩圏内。複数路線利用可能で通いやすい。
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">&#x1f319;</div>
                <h3 className="font-bold text-gray-800 mb-1">仕事帰りに最適</h3>
                <p className="text-sm text-gray-600">
                  丸の内・日本橋からも近く、オフィスワーカーが仕事帰りに通いやすい立地。
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
            銀座エリアのおすすめクリニック
          </h2>
          <div className="space-y-6">
            {[
              {
                rank: 1,
                name: "ファーストアートメイク 銀座院",
                price: "38,500円〜",
                access: "銀座駅B5出口より徒歩3分",
                station: "東京メトロ銀座線・丸ノ内線・日比谷線「銀座駅」",
                point: "初回限定価格が魅力的。パウダー眉の仕上がりが上品で、銀座らしい洗練されたデザインを提供。落ち着いた院内でリラックスして施術を受けられます。",
                link: "/review/first-artmake",
                color: "bg-yellow-400",
              },
              {
                rank: 2,
                name: "メディカルブロー 銀座院",
                price: "28,000円〜",
                access: "銀座駅A3出口より徒歩4分",
                station: "東京メトロ銀座線・丸ノ内線・日比谷線「銀座駅」",
                point: "業界最大手の安心感。6Dストロークで1本1本毛を描くような自然な仕上がり。銀座院は落ち着いた大人の雰囲気で、VIP対応も可能。",
                link: "/review/medicalbrow",
                color: "bg-gray-300",
              },
              {
                rank: 3,
                name: "クレアージュ東京 有楽町院",
                price: "44,000円/回",
                access: "有楽町駅日比谷口より徒歩1分",
                station: "JR山手線・京浜東北線「有楽町駅」",
                point: "3回施術で繊細なグラデーションを実現。30代〜50代の大人女性に圧倒的人気。銀座エリアから徒歩圏内で、丁寧なカウンセリングが好評。",
                link: "/review/creage",
                color: "bg-amber-600",
              },
              {
                rank: 4,
                name: "THE ARTMAKE TOKYO",
                price: "88,000円（2回）",
                access: "銀座一丁目駅より徒歩1分",
                station: "東京メトロ有楽町線「銀座一丁目駅」",
                point: "銀座一丁目駅徒歩1分の好立地。眉2回88,000円（平日モニター価格）。眉・リップ・ヘアライン・ほくろと幅広いメニューに対応。アートメイク専門院ならではの高い技術力が魅力。※最新情報は公式サイトでご確認ください",
                link: "/review/the-artmake-tokyo",
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
            銀座エリア料金比較表
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">クリニック</th>
                  <th className="p-4 text-center">眉（税込）</th>
                  <th className="p-4 text-center">回数</th>
                  <th className="p-4 text-center">1回あたり</th>
                  <th className="p-4 text-center">最寄駅からの距離</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "メディカルブロー 銀座院", price: "28,000円〜", times: "2回", per: "14,000円〜", distance: "銀座駅 徒歩4分" },
                  { name: "ファーストアートメイク", price: "38,500円〜", times: "1回", per: "38,500円〜", distance: "銀座駅 徒歩3分" },
                  { name: "クレアージュ東京", price: "132,000円", times: "3回", per: "44,000円", distance: "有楽町駅 徒歩1分" },
                  { name: "THE ARTMAKE TOKYO", price: "88,000円", times: "2回", per: "44,000円", distance: "銀座一丁目駅 徒歩1分" },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}
                  >
                    <td className="p-4 font-semibold text-gray-800 text-sm">{row.name}</td>
                    <td className="p-4 text-center text-sm font-semibold text-rose-600">{row.price}</td>
                    <td className="p-4 text-center text-sm">{row.times}</td>
                    <td className="p-4 text-center text-sm font-semibold text-rose-600">{row.per}</td>
                    <td className="p-4 text-center text-sm text-gray-600">{row.distance}</td>
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

      {/* 銀座の実在クリニック */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">銀座で眉アートメイクが受けられる主なクリニック</h2>
          <p className="text-center text-gray-500 text-sm mb-8">公式サイトで所在地・最寄駅を確認できたクリニックを掲載（2026年6月13日確認）</p>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900">メディカルブロー銀座院（表参道メディカルクリニック）</h3>
              <p className="text-sm text-gray-600 mt-1">中央区銀座7-3-7 ブランエスパ銀座ビル8F／銀座駅C3出口 徒歩5分・新橋駅5番出口 徒歩5分。7Dストローク（商標）が特徴で、アーティストのランク制を採用。</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900">アートメイクギャラリー銀座院</h3>
              <p className="text-sm text-gray-600 mt-1">中央区銀座3-7-2 オーク銀座4F／銀座駅A13出口 徒歩2分・東銀座駅A8出口 徒歩5分。</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900">銀座よしえクリニック 銀座院</h3>
              <p className="text-sm text-gray-600 mt-1">美容皮膚科として眉アートメイクを提供。複数院を展開する医療機関です。</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">出典: 各クリニック公式サイト（2026年6月13日確認）。料金・提供メニューは変動するため、来院前に公式サイトでご確認ください。なお「デイジークリニック」は新宿・札幌・福岡天神の3院体制で、銀座院はありません。</p>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <div className="bg-rose-50 border border-rose-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">受ける前に: MRIへの影響</h3>
              <p className="text-sm text-gray-700">アートメイクの色素には金属成分が含まれる場合があり、MRI検査でまれに違和感や発熱を感じることがあります。検査時は施術済みであることを申告しましょう。</p>
            </div>
            <div className="bg-rose-50 border border-rose-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">除去・修正は難しい</h3>
              <p className="text-sm text-gray-700">入れた色素の除去はレーザーで複数回かかり、入れるとき以上の時間・費用が必要です。デザインは納得いくまでカウンセリングで確認を。</p>
            </div>
            <div className="bg-rose-50 border border-rose-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">メンズも対応可</h3>
              <p className="text-sm text-gray-700">銀座エリアは男性向け眉アートメイクに対応するクリニックもあります。自然な毛流れ重視なら毛並み（ストローク）系の技法が選ばれます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            銀座のアートメイクに関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "銀座で一番アクセスの良いクリニックはどこですか？",
                a: "クレアージュ東京が有楽町駅日比谷口から徒歩1分と最もアクセスが良いです。ファーストアートメイクも銀座駅から徒歩3分と好立地です。",
              },
              {
                q: "銀座エリアのクリニックは料金が高いですか？",
                a: "必ずしも高くありません。メディカルブロー銀座院は28,000円〜と他エリアと同じ料金設定です。銀座だから割高ということはなく、全国統一料金のクリニックが多いです。",
              },
              {
                q: "仕事帰りに通えますか？",
                a: "はい、銀座エリアのクリニックは平日19〜20時まで営業している院が多いです。丸の内・日本橋・新橋からも近いので、オフィスワーカーに人気のエリアです。",
              },
              {
                q: "銀座と有楽町のクリニックは歩いて行き来できますか？",
                a: "はい、銀座駅と有楽町駅は徒歩5分程度の距離です。カウンセリングを複数院で受けて比較検討する場合にも、同日にハシゴしやすいエリアです。",
              },
              {
                q: "男性でも通いやすいクリニックはありますか？",
                a: "メディカルブロー銀座院は男性患者も多く、メンズアートメイクの実績も豊富です。銀座は落ち着いた雰囲気なので、男性でも通いやすい環境です。",
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
      <Link href="/area/shinjuku/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">エリア</span>
        <p className="font-semibold mt-1">新宿エリアのおすすめクリニック</p>
      </Link>
      <Link href="/review/medicalbrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">メディカルブローの口コミ・評判</p>
      </Link>
      <Link href="/review/creage/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">クレアージュ東京の口コミ・評判</p>
      </Link>
      <Link href="/review/the-artmake-tokyo/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">THE ARTMAKE TOKYO（銀座院）の口コミ・評判</p>
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
            銀座で理想のアートメイクを見つけよう
          </h2>
          <p className="text-xl mb-4 opacity-90">
            高級感ある空間で、上質な施術を体験。
          </p>
          <p className="text-lg mb-8 opacity-80">
            駅近で仕事帰りにも通いやすいクリニックを厳選しました。
          </p>
          <a
            href="/"
            className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            おすすめクリニックランキングを見る
          </a>
          <p className="mt-6 text-sm opacity-70">
            2026年4月最新 - 銀座エリアのクリニックを徹底比較
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      
      <div className="max-w-4xl mx-auto px-4">
        <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "銀座で一番アクセスの良いクリニックはどこですか？", "acceptedAnswer": {"@type": "Answer", "text": "クレアージュ東京が有楽町駅日比谷口から徒歩1分と最もアクセスが良いです。ファーストアートメイクも銀座駅から徒歩3分と好立地です。"}}, {"@type": "Question", "name": "銀座エリアのクリニックは料金が高いですか？", "acceptedAnswer": {"@type": "Answer", "text": "必ずしも高くありません。メディカルブロー銀座院は28,000円〜と他エリアと同じ料金設定です。銀座だから割高ということはなく、全国統一料金のクリニックが多いです。"}}, {"@type": "Question", "name": "仕事帰りに通えますか？", "acceptedAnswer": {"@type": "Answer", "text": "はい、銀座エリアのクリニックは平日19〜20時まで営業している院が多いです。丸の内・日本橋・新橋からも近いので、オフィスワーカーに人気のエリアです。"}}, {"@type": "Question", "name": "銀座と有楽町のクリニックは歩いて行き来できますか？", "acceptedAnswer": {"@type": "Answer", "text": "はい、銀座駅と有楽町駅は徒歩5分程度の距離です。カウンセリングを複数院で受けて比較検討する場合にも、同日にハシゴしやすいエリアです。"}}, {"@type": "Question", "name": "男性でも通いやすいクリニックはありますか？", "acceptedAnswer": {"@type": "Answer", "text": "メディカルブロー銀座院は男性患者も多く、メンズアートメイクの実績も豊富です。銀座は落ち着いた雰囲気なので、男性でも通いやすい環境です。"}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "銀座", "item": "https://artmake-hikaku.com/area/ginza/"}]}) }} />
    </main>
  );
}
