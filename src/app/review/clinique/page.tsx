import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/review/clinique/" },
  title: "クリニーク大阪心斎橋のアートメイク口コミ・評判・料金【2026年】4D眉の実額を検証",
  description:
    "クリニーク大阪心斎橋のアートメイク料金を公式サイトで検証（2026年7月7日確認・税込）。4D眉1回65,780円（初回限定）〜・3D眉2回60,280円・アイライン33,000円。心斎橋の1院で提供、無料カウンセリングあり。実際に払う総額ベースで解説します。",
};

const pricingTable = [
  { menu: "4D眉（毛並み＋パウダー）1回", price: "初回限定 65,780円／通常 87,780円" },
  { menu: "4D眉 2回", price: "初回限定 109,780円／通常 148,280円" },
  { menu: "3D眉（グラデーション）1回", price: "42,900円" },
  { menu: "3D眉 2回", price: "60,280円" },
  { menu: "アイライン（上 or 下）", price: "33,000円" },
  { menu: "リップ輪郭／リップフル", price: "47,300円／91,300円" },
];

const faqs = [
  { q: "クリニークのアートメイクはどの院で受けられますか？", a: "公式サイトでアートメイクの提供が確認できるのはクリニーク大阪心斎橋（大阪市中央区南船場3-12-3 心斎橋セントビル3F）のみです（2026年7月7日確認）。梅田・京都・名古屋・福岡など他のグループ院の公式ページにはアートメイクの記載がないため、来院前に必ずご確認ください。" },
  { q: "料金はいくらですか？", a: "4D眉（毛並み＋パウダー）が1回65,780円（初回限定・通常87,780円）、2回セットで109,780円（初回限定・税込）。毛並みなしの3D眉なら2回60,280円と、当サイト検証の相場（眉2回9.3万〜16万円）より安い価格帯です。初回限定価格はキャンペーン性のため、申込時に最新の適用条件をご確認ください。" },
  { q: "カウンセリングは無料ですか？", a: "はい、公式サイトに無料カウンセリングの案内があります。予約は電話（06-6252-2700）・メール・LINEから可能です。" },
  { q: "施術者はどんな資格を持っていますか？", a: "公式サイトには「複数の国際的アカデミー資格修了のスキルとノウハウを持った看護師」が施術する旨と、Biotouch・Phibrows等の資格名が記載されています。症例数の公表はありません（2026年7月7日確認）。" },
  { q: "3D眉と4D眉はどう違いますか？", a: "公式の説明では、3Dはパウダー状のグラデーション、4Dは毛並み＋パウダーの組み合わせです。皮膚の浅い層（0.01〜0.03mm）に植物性色素を入れ、持続は半年〜1年程度とされています。" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function CliniqueReviewPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "クリニック" }, { name: "クリニーク大阪心斎橋" }]} />
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">口コミ・評判レビュー</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">クリニーク大阪心斎橋のアートメイク口コミ・評判・料金</h1>
          <p className="text-xl text-gray-600">3D眉2回60,280円〜・4D眉の初回限定価格が特徴の心斎橋の美容クリニックを徹底調査</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><span className="text-rose-500">30秒</span>でわかる結論</h2>
            <p className="text-sm text-gray-500 mb-6">クリニークグループの美容クリニックのうち、アートメイクは大阪心斎橋院で提供。国際資格を持つ看護師施術・無料カウンセリングあり（2026年7月7日公式確認）。</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-green-200">
                <p className="font-bold text-green-700 mb-2">おすすめできる人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-green-500">✓</span>大阪・心斎橋エリアで相場より安く始めたい方（3D眉2回60,280円）</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>初回限定価格で4D眉を試したい方（1回65,780円）</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>美容クリニック併設で他施術と相談したい方</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-orange-200">
                <p className="font-bold text-orange-700 mb-2">注意した方がいい人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-orange-500">!</span>心斎橋以外のグループ院で受けたい方（他院は公式に記載なし）</li>
                  <li className="flex gap-2"><span className="text-orange-500">!</span>症例数などの実績数値で比較したい方（公式に公表なし）</li>
                  <li className="flex gap-2"><span className="text-orange-500">!</span>指名制度を使いたい方（指名料の記載なし・要確認）</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-400">※本ページの料金・情報は2026年7月7日に公式サイトで確認した税込価格です。初回限定価格は変更される場合があります。</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">料金表（税込・2026年7月7日公式確認）</h2>
          <p className="text-center text-gray-500 text-sm mb-8">通常ページとLPの2つの公式ページで料金の一致を確認済みです。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-rose-500 text-white"><th className="px-4 py-3 text-left">メニュー</th><th className="px-4 py-3 text-left">料金</th></tr>
              </thead>
              <tbody>
                {pricingTable.map((r) => (
                  <tr key={r.menu} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 font-semibold text-gray-800">{r.menu}</td>
                    <td className="px-4 py-3 text-gray-700">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6 text-sm text-gray-700">
            <p className="font-bold text-amber-800 mb-1">総額の考え方</p>
            <p>3D眉2回なら60,280円と、当サイト検証レンジ（眉2回9.3万〜16万円）を下回る低価格帯。毛並み感のある4D眉は初回2回109,780円で相場中位です。基本情報: 大阪市中央区南船場3-12-3 心斎橋セントビル3F／9:00〜19:00（不定休）。</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl group">
                <summary className="cursor-pointer p-5 font-bold text-gray-800 flex justify-between items-center">{f.q}<span className="text-rose-400 group-open:rotate-45 transition-transform text-xl shrink-0 ml-3">+</span></summary>
                <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/compare/price/" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100"><span className="text-rose-500 text-xs font-semibold">料金比較</span><p className="font-semibold mt-1">アートメイクの値段・相場を徹底比較</p></Link>
            <Link href="/review/amg/" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100"><span className="text-rose-500 text-xs font-semibold">口コミ・評判</span><p className="font-semibold mt-1">アートメイクギャラリー（AMG）の評判</p></Link>
            <Link href="/area/osaka/" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100"><span className="text-rose-500 text-xs font-semibold">エリア</span><p className="font-semibold mt-1">大阪のアートメイククリニック</p></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
