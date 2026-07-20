import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/review/amg/" },
  title: "アートメイクギャラリー（AMG）の口コミ・評判・料金【2026年】除去・ヘアラインまで徹底調査",
  description:
    "アートメイクギャラリー（AMG）の料金・特徴を公式サイトで検証（2026年7月7日確認・税込）。眉2回140,000円〜＋ランク別指名料、全国6院（銀座・横浜・梅田・心斎橋・芦屋・福岡天神）、ピコレーザーの除去メニュー、薄毛向けヘアアートメイクまで、実際に払う総額ベースで解説します。",
};

const pricingTable = [
  { menu: "AMGストローク／AMGナチュラリーパウダー（眉）", price: "1回 75,000円／2回 140,000円", monitor: "モニター2回 平日88,000円・土日98,000円" },
  { menu: "AMGオーダーメイド眉（手彫り毛並み＋パウダー）", price: "1回 80,000円／2回 150,000円", monitor: "モニター2回 平日98,000円・土日108,000円" },
  { menu: "リビングブロウ（マシン毛並み＋パウダー）", price: "1回 85,000円／2回 160,000円", monitor: "モニター2回 平日108,000円・土日118,000円" },
  { menu: "ナチュラリーリップ", price: "1回 75,000円／2回 140,000円", monitor: "モニター2回 98,000円" },
  { menu: "アイライン上", price: "1回 55,000円／2回 100,000円", monitor: "モニター 80,000円" },
  { menu: "ヘアライン", price: "1回 75,000円／2回 140,000円", monitor: "モニター2回 98,000円" },
];

const nominationFees = [
  { rank: "代表（Tina）", fee: "35,000円／回" },
  { rank: "AAS講師", fee: "16,500〜22,000円／回" },
  { rank: "パートナーアーティスト", fee: "11,000〜16,500円／回" },
  { rank: "フレッシュアーティスト", fee: "3,300円／回" },
];

const clinics = [
  { name: "銀座院", addr: "東京都中央区銀座3-7-2 オーク銀座4F（ギャラリークリニック銀座本院）" },
  { name: "横浜院", addr: "横浜市神奈川区金港町6-18 アーバンスクエアⅡ3階" },
  { name: "梅田院", addr: "大阪市北区太融寺町8-17 プラザ梅田ビル7F（大阪スマートクリニック）" },
  { name: "心斎橋院", addr: "大阪市中央区東心斎橋1-13-12 天正堂ビル3階（クレオビューティークリニック）" },
  { name: "芦屋院", addr: "兵庫県芦屋市東山町29-19 ジェットビル2F（芦屋JINクリニック）" },
  { name: "福岡天神院", addr: "福岡市中央区今泉1-22-20-701（天神総合クリニック・2026年7月開院）" },
];

const faqs = [
  { q: "アートメイクギャラリーのカウンセリングは無料ですか？", a: "無料ではありません。公式サイトに「カウンセリングのみのご予約は診察料1,100円（税込）」と明記されています（当日施術する場合は施術料に加算）。多くのクリニックが無料カウンセリングを掲げる中では珍しい方式のため、比較検討の際は留意してください。" },
  { q: "料金はランク制ですか？", a: "施術メニューごとの固定料金＋施術者ランク別の指名料（3,300〜35,000円／回）という方式です。メニュー料金自体はどのアーティストでも同じで、指名するかどうかで総額が変わります。指名なしなら眉2回140,000円〜が基準です。" },
  { q: "アートメイクの除去はできますか？", a: "できます。ピコレーザーによる除去（両眉1回48,000円・モニター36,000円）と、眉のみ専用除去剤を使うリムーバル除去（1回25,000円・モニター17,500円）が公式メニューにあります。公式には「少なくても2〜3回の照射は必要」とあり、除去は1回では終わらない前提で総額を見積もりましょう。実施院はページ上で銀座・横浜・福岡天神が明示されています。" },
  { q: "薄毛向けのヘアアートメイクはありますか？", a: "あります。生え際・もみあげだけでなく、分け目〜頭頂部に対応するSMP/AMGヘアシャドウのメニューがあり、メンズ向け（M字・頭頂部）も公式に用意されています。料金は1回75,000円・2回140,000円（モニター2回98,000円・2026年7月7日公式確認・税込）です。" },
  { q: "症例数50,000件という実績は本当ですか？", a: "公式サイトのトップページに「症例数50,000件以上」と記載されています（2026年7月7日確認）。ただし算出期間や集計条件の注記は公式ページ上に見当たらないため、当サイトでは「公式の公表値」として紹介するにとどめます。「施術に満足99.4%」も同様に調査条件の記載がない公表値です。" },
  { q: "予約はどこからできますか？", a: "公式サイトのWEB予約・LINE・電話（全院共通 050-5371-9444、10:00〜19:00）から予約できます。完全予約制で、キャンセルは施術日2日前17時まで無料、以降5,500円・当日100%の規定があります。" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function AmgReviewPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "クリニック" }, { name: "アートメイクギャラリー（AMG）" }]} />
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">口コミ・評判レビュー</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">アートメイクギャラリー（AMG）の口コミ・評判・料金</h1>
          <p className="text-xl text-gray-600">全国6院｜メニュー制＋指名料方式・除去やヘアアートメイクまで揃う専門グループを徹底調査</p>
        </div>
      </section>

      {/* 30秒でわかる結論 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><span className="text-rose-500">30秒</span>でわかる結論</h2>
            <p className="text-sm text-gray-500 mb-6">アートメイクギャラリー（AMG）は一般社団法人千里会が運営するアートメイク専門グループ。銀座・横浜・梅田・心斎橋・芦屋・福岡天神の6院を提携医療機関内に展開し、スクール（AAS）も運営しています（2026年7月7日公式確認）。</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-green-200">
                <p className="font-bold text-green-700 mb-2">おすすめできる人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-green-500">✓</span>眉だけでなく除去・修正まで相談できる院を探している方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>薄毛・分け目向けのヘアアートメイク（SMP）も検討したい方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>モニター価格（眉2回88,000円〜）で費用を抑えたい方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>関西（梅田・心斎橋・芦屋）で選択肢を探している方</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-orange-200">
                <p className="font-bold text-orange-700 mb-2">注意した方がいい人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-orange-500">!</span>カウンセリングだけ受けたい方（診察料1,100円が必要・無料ではない）</li>
                  <li className="flex gap-2"><span className="text-orange-500">!</span>指名で選びたい方（指名料3,300〜35,000円／回が加算）</li>
                  <li className="flex gap-2"><span className="text-orange-500">!</span>土日にモニター利用したい方（平日よりモニター価格が1万円高い）</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-400">※本ページの料金・情報は2026年7月7日に公式サイト（artmake-g.com）で確認した税込価格です。最新・正確な情報は公式サイトでご確認ください。</p>
          </div>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">アートメイクギャラリー 基本情報</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["運営", "一般社団法人千里会（ギャラリークリニック銀座）・スクール「AAS」併営"],
                  ["展開院", "銀座・横浜・梅田・心斎橋・芦屋・福岡天神の全6院（提携医療機関内）"],
                  ["眉料金", "2回 140,000〜160,000円（メニュー別）／モニター2回 88,000円〜（平日）"],
                  ["指名料", "3,300〜35,000円／回（アーティストランク別・指名なしも可）"],
                  ["カウンセリング", "カウンセリングのみは診察料1,100円（無料ではない・公式明記）"],
                  ["公表実績", "症例数50,000件以上（公式公表値・集計条件の記載なし）"],
                  ["予約", "WEB／LINE／電話 050-5371-9444（10:00〜19:00・完全予約制）"],
                ].map(([k, v]) => (
                  <tr key={k as string} className="border-b border-gray-100 last:border-0">
                    <th className="bg-rose-50/50 text-left px-5 py-3.5 w-36 font-semibold text-gray-700">{k}</th>
                    <td className="px-5 py-3.5 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 料金表 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">部位別料金表（税込・2026年7月7日公式確認）</h2>
          <p className="text-center text-gray-500 text-sm mb-8">ランク制ではなく「メニュー固定料金＋指名料」方式です。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="px-4 py-3 text-left">メニュー</th>
                  <th className="px-4 py-3 text-left">通常価格</th>
                  <th className="px-4 py-3 text-left">モニター価格</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((r) => (
                  <tr key={r.menu} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 font-semibold text-gray-800">{r.menu}</td>
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{r.price}</td>
                    <td className="px-4 py-3 text-gray-700">{r.monitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
            <p className="font-bold text-amber-800 mb-2">指名料（1回あたり加算）</p>
            <ul className="text-sm text-gray-700 grid sm:grid-cols-2 gap-1.5">
              {nominationFees.map((n) => (
                <li key={n.rank}>・{n.rank}: <span className="font-semibold">{n.fee}</span></li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-3">総額の考え方: 例）AMGオーダーメイド眉2回（150,000円）＋パートナーアーティスト指名（11,000円×2回）＝<span className="font-bold">総額172,000円</span>。指名なし・モニター平日なら2回88,000円〜に抑えられます。モニターはSNS症例写真掲載への同意＋アンケートが条件です。AMGを含む主要8院の実質総額の横並び比較は<Link href="/compare/price/" className="text-rose-500 underline">アートメイク料金比較DB</Link>でご覧いただけます。</p>
          </div>
        </div>
      </section>

      {/* 除去・ヘア(差別化メニュー) */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">AMGの特徴：除去・ヘアアートメイクまで揃う</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-rose-600">アートメイク除去（他院の失敗修正にも）</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">ピコレーザー除去（両眉1回48,000円・モニター36,000円）と、眉専用のリムーバル除去（1回25,000円・モニター17,500円）を公式メニューとして提供。公式には「少なくても2〜3回の照射は必要」とあり、複数回前提の費用計画が必要です。実施院として銀座・横浜・福岡天神が明示されています。</p>
              <Link href="/knowledge/removal/" className="text-rose-500 text-sm font-semibold underline">アートメイク除去の基礎知識はこちら →</Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-rose-600">ヘアアートメイク（薄毛・生え際・頭頂部）</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">生え際・もみあげに加え、分け目〜頭頂部のSMP/AMGヘアシャドウに対応（1回75,000円・2回140,000円・モニター2回98,000円）。メンズ向け（M字・頭頂部）メニューも公式に用意されており、薄毛の悩みに対応できる数少ないアートメイクグループです。</p>
              <Link href="/parts/hairline/" className="text-rose-500 text-sm font-semibold underline">ヘアラインアートメイクの解説はこちら →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 公表実績の読み方 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">公表実績の読み方（当サイトの検証メモ）</h2>
          <p className="text-center text-gray-500 text-sm mb-8">口コミの創作や評点の自作はせず、公式公表値の「条件」を確認するのが当サイトの方針です。</p>
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-3 text-sm text-gray-700">
            <p>・「<span className="font-bold">症例数50,000件以上</span>」「施術に満足99.4%」は公式トップページの公表値ですが、<span className="font-bold">算出期間・調査条件の注記はページ上に見当たりません</span>（2026年7月7日確認）。参考値として捉え、仕上がりの確認は各アーティストの症例写真（公式Instagram・アーティストページ）で行うのが確実です。</p>
            <p>・アーティストは公式ページに26名掲載され、代表・AAS講師・パートナー・フレッシュの4ランク制。<span className="font-bold">スクール（AAS・卒業生500名以上と公表）を併営</span>しているため、教育体制がある一方、担当者のランクによる経験差は指名制度で調整する設計です。</p>
            <p>・カウンセリングのみの来院は診察料1,100円が必要です。「無料カウンセリング」を掲げる他院（<Link href="/review/medicalbrow/" className="text-rose-500 underline">メディカルブロー</Link>等）と比較する際はご注意ください。</p>
          </div>
        </div>
      </section>

      {/* 院一覧 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">全6院の所在地</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {clinics.map((c) => (
              <div key={c.name} className="bg-white rounded-lg p-4 shadow-sm">
                <p className="font-bold text-gray-800">{c.name}</p>
                <p className="text-xs text-gray-500 mt-1">{c.addr}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">※全院とも提携医療機関内での施術です（2026年7月7日公式確認）。福岡は料金表等に旧称「福岡博多院」の表記が残る箇所がありますが、現行の院名は「福岡天神院」です。</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl group">
                <summary className="cursor-pointer p-5 font-bold text-gray-800 flex justify-between items-center">
                  {f.q}
                  <span className="text-rose-400 group-open:rotate-45 transition-transform text-xl shrink-0 ml-3">+</span>
                </summary>
                <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/compare/price/" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">料金比較</span>
              <p className="font-semibold mt-1">アートメイクの値段・相場を徹底比較</p>
            </Link>
            <Link href="/knowledge/removal/" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">基礎知識</span>
              <p className="font-semibold mt-1">アートメイク除去の方法と費用</p>
            </Link>
            <Link href="/review/medicalbrow/" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">口コミ・評判</span>
              <p className="font-semibold mt-1">メディカルブローの口コミ・評判</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
