import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/review/biotouch-sapporo/" },
  title: "バイオタッチ札幌（SSCビューティークリニック）の口コミ・評判・料金【2026年】",
  description:
    "バイオタッチ札幌（SSCビューティークリニック・医療法人優美弘仁堂）の料金と特徴を公式サイトで検証（2026年7月7日確認・税込）。眉2回132,000円・1回82,500円、リップ143,000円、ヘアライン44,000円〜。札幌駅徒歩1分。初診料3,000円の注意点まで総額ベースで解説します。",
};

const pricingTable = [
  { menu: "眉（2回コース）", price: "132,000円", note: "初回おすすめ（色素定着のため2回推奨）" },
  { menu: "眉（1回）", price: "82,500円", note: "リタッチ・単発向け" },
  { menu: "リップ（2回コース）", price: "143,000円", note: "" },
  { menu: "アイライン上（2回コース）", price: "66,000円", note: "" },
  { menu: "ヘアライン", price: "44,000円〜187,000円", note: "範囲により変動（公式レンジ表記）" },
];

const faqs = [
  {
    q: "バイオタッチ札幌はどこのクリニックですか？",
    a: "札幌駅徒歩1分のSSCビューティークリニック内で提供されている医療アートメイクです。運営は医療法人優美弘仁堂（厚生労働省の医療法人名簿と照合済み）。「バイオタッチ」は国内外で展開されるアートメイク技術ブランドで、その札幌提携院にあたります（2026年7月7日公式確認）。",
  },
  {
    q: "料金の総額はいくらになりますか？",
    a: "眉2回コース132,000円（税込）が基本です。これに初診料3,000円、施術者を指名する場合は指名料1,100円/回が加わります。カウンセリング自体は無料ですが初診料が別途かかる点にご注意ください。眉2回+初診料の実質総額は135,000円前後が目安です。",
  },
  {
    q: "「3,000症例」という実績は本当ですか？",
    a: "公式サイトに症例数の公表があります（公式サイト表記・算出期間等の注記なし・2026年7月7日確認）。当サイトでは第三者検証ができないため「公式公表値」としてそのままお伝えしています。仕上がりは公式の症例写真とカウンセリングでご確認ください。",
  },
  {
    q: "カウンセリングだけでも行けますか？",
    a: "カウンセリングは無料です。ただし医療機関のため初診料3,000円が別途必要です（2026年7月7日公式確認）。予約は公式サイトの予約フォームまたは電話から可能です。",
  },
  {
    q: "北海道で他に比較すべきクリニックはありますか？",
    a: "全国展開のメディカルブロー（札幌院）が比較対象になります。眉の料金体系やアーティストのランク制度が異なるため、総額ベースでの比較がおすすめです。当サイトの料金比較ページで全院の相場と並べて確認できます。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function BiotouchSapporoReviewPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "クリニック" }, { name: "バイオタッチ札幌" }]} />
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">口コミ・評判レビュー</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">バイオタッチ札幌の口コミ・評判・料金</h1>
          <p className="text-xl text-gray-600">SSCビューティークリニック（札幌駅徒歩1分）の医療アートメイクを徹底調査</p>
        </div>
      </section>

      {/* 30秒でわかる結論 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><span className="text-rose-500">30秒</span>でわかる結論</h2>
            <p className="text-sm text-gray-500 mb-6">バイオタッチ札幌は、医療法人優美弘仁堂が運営するSSCビューティークリニック（札幌駅徒歩1分）で受けられる医療アートメイク。眉2回132,000円の一括型料金で、指名料が1,100円と安いのが特徴です（2026年7月7日公式確認）。</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-green-200">
                <p className="font-bold text-green-700 mb-2">おすすめできる人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-green-500">✓</span>札幌駅近くで通いやすい医療アートメイクを探している方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>2回コース一括型のわかりやすい料金を求める方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>眉以外（リップ・アイライン・ヘアライン）もまとめて相談したい方</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-orange-200">
                <p className="font-bold text-orange-700 mb-2">注意した方がいい人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-orange-500">!</span>「カウンセリング無料」でも初診料3,000円は別途かかります</li>
                  <li className="flex gap-2"><span className="text-orange-500">!</span>眉1回だけだと82,500円と単発割高（2回コースが前提の設計）</li>
                  <li className="flex gap-2"><span className="text-orange-500">!</span>道外の方（札幌1院のため、東京・大阪なら選択肢が多い）</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-400">※本ページの料金・情報は2026年7月7日に公式サイトで確認した税込価格です。最新・正確な情報は公式サイトでご確認ください。</p>
          </div>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">バイオタッチ札幌 基本情報</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["提供院", "SSCビューティークリニック（札幌駅 徒歩1分）"],
                  ["運営", "医療法人優美弘仁堂（厚生労働省の医療法人名簿と照合済み）"],
                  ["眉料金", "2回コース132,000円／1回82,500円（税込）"],
                  ["指名料", "1,100円/回（業界では安い水準）"],
                  ["初診料", "3,000円（カウンセリング自体は無料）"],
                  ["その他部位", "リップ143,000円（2回）・アイライン上66,000円（2回）・ヘアライン44,000円〜187,000円"],
                  ["公表実績", "症例数の公表あり（公式サイト表記・集計条件の記載なし）"],
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
          <p className="text-center text-gray-500 text-sm mb-8">色素の定着には2〜3回の施術が推奨されるため、2回コースが基本設計です。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="px-4 py-3 text-left">部位</th>
                  <th className="px-4 py-3 text-left">料金</th>
                  <th className="px-4 py-3 text-left">補足</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((r) => (
                  <tr key={r.menu} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 font-semibold text-gray-800">{r.menu}</td>
                    <td className="px-4 py-3 text-gray-700">{r.price}</td>
                    <td className="px-4 py-3 text-gray-700">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6 text-sm text-gray-700">
            <p className="font-bold text-amber-800 mb-1">総額の考え方</p>
            <p>眉2回コースの場合: 132,000円＋初診料3,000円＝<span className="font-bold">実質総額135,000円</span>（指名する場合＋1,100円×回数）。当サイト検証の相場レンジ（眉2回 約9.3万〜16万円）の中では中位の価格帯で、指名料の安さ（1,100円）は全国的にも低水準です。<Link href="/compare/price/" className="text-rose-500 underline">全院の料金比較はこちら</Link>。</p>
          </div>
        </div>
      </section>

      {/* 検証メモ */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">当サイトの検証メモ</h2>
          <p className="text-center text-gray-500 text-sm mb-8">口コミの創作や評点の自作はせず、公式情報の裏取り結果を共有します。</p>
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-3 text-sm text-gray-700">
            <p>・運営元の医療法人優美弘仁堂は<span className="font-bold">厚生労働省の医療法人名簿と照合して実在を確認</span>しました（2026年7月7日）。</p>
            <p>・公式サイトには技術力に関する強い宣伝表現がありますが、医療広告ガイドラインの観点から当サイトでは転載せず、料金・アクセス等の確認できる事実のみ掲載しています。</p>
            <p>・症例数の公表値は算出期間等の注記がないため「公式サイト表記」としてお伝えしています。仕上がりの確認は公式の症例写真とカウンセリングをおすすめします。</p>
            <p>・「カウンセリング無料」と「初診料3,000円」が併存する料金設計です。来院前に予約時の案内で総額を確認しておくとスムーズです。</p>
          </div>
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
            <Link href="/review/medicalbrow/" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">口コミ・評判</span>
              <p className="font-semibold mt-1">メディカルブロー（札幌院あり）の評判</p>
            </Link>
            <Link href="/review/amg/" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">口コミ・評判</span>
              <p className="font-semibold mt-1">アートメイクギャラリー（AMG）の評判</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
