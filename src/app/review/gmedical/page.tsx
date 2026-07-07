import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/review/gmedical/" },
  title: "Gメディカルアートメイク（旧グロウクリニック）の口コミ・評判・料金【2026年】",
  description:
    "Gメディカルアートメイク（旧グロウアートメイク・医療法人廣美会）の料金と特徴を公式サイトで検証（2026年7月7日確認・税込）。眉1回75,000円・指名料11,000円、表参道・新宿・大阪の3院、症例70,000件以上の公表実績。実際に払う総額ベースで解説します。",
};

const pricingTable = [
  { menu: "眉（毛並み・パウダー・ミックス）", price: "1回 75,000円", retouch: "リタッチ（3回目以降）60,000円" },
  { menu: "リップ", price: "1回 85,000円", retouch: "リタッチ 70,000円" },
  { menu: "アイライン", price: "1回 55,000円", retouch: "リタッチ 40,000円" },
];

const faqs = [
  { q: "Gメディカルアートメイクはどこのクリニックですか？", a: "医療法人廣美会が運営するアートメイク専門クリニックで、旧名称は「グロウアートメイク（グロウクリニック）」です。表参道院・新宿院・大阪院の3院を展開しています（2026年7月7日公式確認）。" },
  { q: "料金体系を教えてください", a: "眉1回75,000円・リップ1回85,000円・アイライン1回55,000円（各税込）で、2回分をまとめて購入すると5,000円お得になる制度があります。指名料は11,000円（施術者により異なる場合あり）。公式には初回の色素定着は約30%とされ、2〜3回の施術が推奨されています。" },
  { q: "「4Dストローク」で施術してもらえますか？", a: "現行の公式サイトでは「毛並み眉・パウダー眉・ミックス眉」という技法表記になっており、「4Dストローク」の表記は確認できません（2026年7月7日時点）。旧グロウクリニック時代の紹介記事に残る表現のため、最新の技法名はカウンセリングでご確認ください。" },
  { q: "カウンセリングは無料ですか？", a: "はい、公式サイト・公式LPに無料カウンセリングの案内があります。予約は公式サイトのWEB予約システムから可能です。" },
  { q: "実績はどのくらいありますか？", a: "公式サイトに「症例件数70,000件以上」と記載されています（2026年7月7日確認・集計条件の注記なし）。日本メディカルタトゥー協会等への加盟も公式に記載されています。" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function GmedicalReviewPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "クリニック" }, { name: "Gメディカルアートメイク" }]} />
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">口コミ・評判レビュー</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gメディカルアートメイクの口コミ・評判・料金</h1>
          <p className="text-xl text-gray-600">旧グロウクリニック｜表参道・新宿・大阪の3院・症例70,000件以上（公式公表）を徹底調査</p>
        </div>
      </section>

      {/* 30秒でわかる結論 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><span className="text-rose-500">30秒</span>でわかる結論</h2>
            <p className="text-sm text-gray-500 mb-6">Gメディカルアートメイク（旧グロウアートメイク）は医療法人廣美会が運営するアートメイク専門クリニック。東名阪の主要エリア3院で、シンプルな1回単価＋まとめ買い割引の料金体系が特徴です（2026年7月7日公式確認）。</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-green-200">
                <p className="font-bold text-green-700 mb-2">おすすめできる人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-green-500">✓</span>表参道・新宿・大阪梅田でアートメイク専門院を探している方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>ランク制の複雑な料金より「1回いくら」のシンプルさを求める方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>無料カウンセリングでじっくり相談してから決めたい方</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-orange-200">
                <p className="font-bold text-orange-700 mb-2">注意した方がいい人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-orange-500">!</span>モニター価格を使いたい方（公式料金表にモニター記載なし）</li>
                  <li className="flex gap-2"><span className="text-orange-500">!</span>眉2回で15万円を超えると高いと感じる方（2回150,000円−5,000円割引＋指名料）</li>
                  <li className="flex gap-2"><span className="text-orange-500">!</span>ヘアライン等の眉・リップ・アイライン以外を受けたい方（公式料金表に記載なし）</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-400">※本ページの料金・情報は2026年7月7日に公式サイト（artmake-glow-clinic.com）で確認した税込価格です。最新・正確な情報は公式サイトでご確認ください。</p>
          </div>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Gメディカルアートメイク 基本情報</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["運営", "医療法人廣美会（開設2021年3月）※旧名称: グロウアートメイク／グロウクリニック"],
                  ["展開院", "表参道院（神宮前4-9-1）・新宿院（西新宿1-18-6）・大阪院（曽根崎新地1-4-20）"],
                  ["眉料金", "1回 75,000円（2回まとめ購入で5,000円割引）／リタッチ60,000円"],
                  ["指名料", "11,000円（施術者により異なる場合あり）"],
                  ["技法", "毛並み眉・パウダー眉・ミックス眉（現行公式表記）"],
                  ["公表実績", "症例件数70,000件以上（公式公表値・集計条件の記載なし）"],
                  ["カウンセリング", "無料（公式LP明記）・WEB予約"],
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
          <p className="text-center text-gray-500 text-sm mb-8">2回分まとめて購入で5,000円割引。初回定着は約30%のため2〜3回が推奨されています（公式）。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="px-4 py-3 text-left">部位</th>
                  <th className="px-4 py-3 text-left">料金</th>
                  <th className="px-4 py-3 text-left">リタッチ</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((r) => (
                  <tr key={r.menu} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 font-semibold text-gray-800">{r.menu}</td>
                    <td className="px-4 py-3 text-gray-700">{r.price}</td>
                    <td className="px-4 py-3 text-gray-700">{r.retouch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6 text-sm text-gray-700">
            <p className="font-bold text-amber-800 mb-1">総額の考え方</p>
            <p>眉を2回受ける場合: 75,000円×2回−5,000円（まとめ割）＝<span className="font-bold">総額145,000円</span>（指名する場合＋11,000円×回数）。当サイト検証の相場レンジ（眉2回 約9.3万〜16万円）の中では中位〜やや高めの価格帯です。<Link href="/compare/price/" className="text-rose-500 underline">全院の料金比較はこちら</Link>。</p>
          </div>
        </div>
      </section>

      {/* 検証メモ */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">当サイトの検証メモ</h2>
          <p className="text-center text-gray-500 text-sm mb-8">口コミの創作や評点の自作はせず、公式情報の裏取り結果を共有します。</p>
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-3 text-sm text-gray-700">
            <p>・ネット上の紹介記事には旧グロウクリニック時代の「4Dストローク」という技法名が残っていますが、<span className="font-bold">現行公式サイトの表記は「毛並み眉・パウダー眉・ミックス眉」</span>です（2026年7月7日確認）。旧情報のまま紹介しているサイトもあるためご注意ください。</p>
            <p>・「症例件数70,000件以上」は公式公表値ですが、算出期間等の注記はありません。仕上がりは公式の症例写真で確認するのが確実です。</p>
            <p>・モニター価格・ヘアラインメニューは公式料金表に記載がありません（2026年7月7日時点）。必要な方はカウンセリングで直接確認するか、<Link href="/review/amg/" className="text-rose-500 underline">除去・ヘアまで揃うAMG</Link>等との比較をおすすめします。</p>
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
            <Link href="/review/amg/" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">口コミ・評判</span>
              <p className="font-semibold mt-1">アートメイクギャラリー（AMG）の評判</p>
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
