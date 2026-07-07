import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/review/the-artmake-tokyo/" },
  title: "THE ARTMAKE TOKYOの口コミ・評判・料金【2026年】モニター価格の条件まで検証",
  description:
    "THE ARTMAKE TOKYO（ジ・アートメイク東京）の料金と特徴を公式サイトで検証（2026年7月7日確認・税込）。眉モニター2回88,000円〜・通常1回80,000円、全国6院、経験者は+20,000円の注記まで。モニター条件と実際の総額ベースで解説します。",
};

const pricingTable = [
  { menu: "眉（フェザーブロウ）", monitor: "平日モニター2回 88,000円（土日祝98,000円）", regular: "通常1回 80,000円／2回 150,000円" },
  { menu: "リップ（エターナルリップ）", monitor: "モニター2回 128,000円", regular: "通常1回 89,000円／2回 160,000円" },
  { menu: "アイライン上", monitor: "モニター2回 88,000円", regular: "通常1回 60,000円／2回 110,000円" },
  { menu: "ヘアライン生え際M字（銀座・大阪限定）", monitor: "モニター2回 108,000円〜", regular: "全頭系メニューは銀座限定" },
  { menu: "除去（片眉）", monitor: "モニター 19,800円", regular: "通常 24,800円（銀座・大阪中心）" },
];

const faqs = [
  {
    q: "THE ARTMAKE TOKYOはどこにありますか？",
    a: "銀座・横浜・名古屋・大阪・福岡・広島の全国6院です（2026年7月7日公式確認）。銀座院には併設クリニック（THE STORY CLINIC）の記載がありますが、運営医療法人の正式名称は公式サイトで確認できませんでした。",
  },
  {
    q: "モニター価格の条件は何ですか？",
    a: "施術前後の写真をサイト・Instagramに掲載することが条件です（「お顔の50%以下、またはマスクをした状態で顔全体」等のトリミング条件が公式に明記）。また重要な注記として、過去に1度でもアートメイクを受けたことがある方はモニター料金に+20,000円がかかります（公式明記・2026年7月7日確認）。",
  },
  {
    q: "実際の総額はいくらになりますか？",
    a: "眉の場合、平日モニター2回コースで総額88,000円（税込）が最安ルートです。指名する場合はアーティストごとに5,500〜33,000円/回の指名料が加算されます。通常価格だと1回80,000円・2回150,000円なので、モニター可否で総額が大きく変わる料金設計です。",
  },
  {
    q: "初診料・カウンセリング料はかかりますか？",
    a: "施術当日のカウンセリング・初診料は0円ですが、カウンセリング・診察のみの来院は3,300円かかります（2026年7月7日公式確認）。クリーム麻酔は無料、ブロック麻酔は5,500円（銀座・名古屋限定）です。",
  },
  {
    q: "実績はどのくらいありますか？",
    a: "公式サイトに「70,000症例数」（集計期間2020年9月〜2025年4月の注記あり）と記載されています。集計期間が明記されている点は誠実です。一方「口コミNo.1」等の表現は算出根拠の記載がないため、当サイトでは公式表記として紹介するに留めます。",
  },
  {
    q: "リタッチだけお願いできますか？",
    a: "リタッチ料金は自院で2回以上施術した方限定です。他院でのアートメイク歴がある方は初回料金扱いになります（公式明記）。リタッチ料金は2026年7月1日に改定されたばかりのため、予約時に最新料金をご確認ください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function TheArtmakeTokyoReviewPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "クリニック" }, { name: "THE ARTMAKE TOKYO" }]} />
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">口コミ・評判レビュー</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">THE ARTMAKE TOKYOの口コミ・評判・料金</h1>
          <p className="text-xl text-gray-600">全国6院（銀座・横浜・名古屋・大阪・福岡・広島）｜モニター中心の料金設計を徹底調査</p>
        </div>
      </section>

      {/* 30秒でわかる結論 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><span className="text-rose-500">30秒</span>でわかる結論</h2>
            <p className="text-sm text-gray-500 mb-6">THE ARTMAKE TOKYOは全国6院展開のアートメイク専門ブランド。モニター価格（眉2回88,000円〜）が前面の料金設計で、写真掲載OKなら相場より安く受けられます。ただし「経験者+20,000円」等の条件確認が必須です（2026年7月7日公式確認）。</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-green-200">
                <p className="font-bold text-green-700 mb-2">おすすめできる人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-green-500">✓</span>写真掲載OKでモニター価格（眉2回88,000円〜）を使える初めての方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>名古屋・広島など専門院が少ないエリアで探している方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>除去・ヘアライン・ほくろまで同グループで相談したい方</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-orange-200">
                <p className="font-bold text-orange-700 mb-2">注意した方がいい人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-orange-500">!</span>アートメイク経験者（モニター料金に+20,000円の公式注記）</li>
                  <li className="flex gap-2"><span className="text-orange-500">!</span>写真掲載NGの方（通常価格は眉1回80,000円と高め）</li>
                  <li className="flex gap-2"><span className="text-orange-500">!</span>人気アーティスト指名だと+最大33,000円/回かかります</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-400">※本ページの料金・情報は2026年7月7日に公式サイト（the-artmake-tokyo.tokyo）で確認した税込価格です。リタッチ料金は2026年7月1日改定。最新・正確な情報は公式サイトでご確認ください。</p>
          </div>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">THE ARTMAKE TOKYO 基本情報</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["展開院", "銀座・横浜・名古屋・大阪・福岡・広島の6院"],
                  ["眉料金", "平日モニター2回88,000円（土日祝98,000円）／通常1回80,000円"],
                  ["指名料", "アーティスト別 5,500〜33,000円/回（院により幅あり）"],
                  ["初診料", "施術当日0円（カウンセリングのみの来院は3,300円）"],
                  ["施術体制", "看護師資格を持つスタッフが施術・医師が事前診察（公式表記）"],
                  ["公表実績", "70,000症例（集計期間2020年9月〜2025年4月・公式注記あり）"],
                  ["予約", "LINE・WEB空席カレンダー・当日電話"],
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
          <p className="text-center text-gray-500 text-sm mb-8">モニター＝施術前後の写真掲載が条件。アートメイク経験者はモニター料金＋20,000円（公式明記）。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl shadow-sm overflow-hidden min-w-[560px]">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="px-4 py-3 text-left">部位</th>
                  <th className="px-4 py-3 text-left">モニター価格</th>
                  <th className="px-4 py-3 text-left">通常価格</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((r) => (
                  <tr key={r.menu} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 font-semibold text-gray-800">{r.menu}</td>
                    <td className="px-4 py-3 text-gray-700">{r.monitor}</td>
                    <td className="px-4 py-3 text-gray-700">{r.regular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6 text-sm text-gray-700">
            <p className="font-bold text-amber-800 mb-1">総額の考え方</p>
            <p>初めての方が平日モニターで眉2回を受ける場合: <span className="font-bold">総額88,000円</span>（指名する場合＋5,500円〜33,000円×回数）。当サイト検証の相場レンジ（眉2回 約9.3万〜16万円）を下回る最安級ですが、<span className="font-bold">写真掲載条件と「経験者+20,000円」</span>を必ず確認してください。通常価格（2回150,000円）だと中位〜やや高めです。<Link href="/compare/price/" className="text-rose-500 underline">全院の料金比較はこちら</Link>。</p>
          </div>
        </div>
      </section>

      {/* 検証メモ */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">当サイトの検証メモ</h2>
          <p className="text-center text-gray-500 text-sm mb-8">口コミの創作や評点の自作はせず、公式情報の裏取り結果を共有します。</p>
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-3 text-sm text-gray-700">
            <p>・公式サイトの表示は<span className="font-bold">モニター価格が前面</span>です。通常価格（眉1回80,000円）との差が大きいため、モニター条件（写真掲載・経験者+20,000円）を満たせるかで実質総額が変わります。</p>
            <p>・「70,000症例」は<span className="font-bold">集計期間（2020年9月〜2025年4月）が公式に注記されており</span>、期間を明記しない公表が多い業界では確認しやすい表記です。一方「口コミNo.1」は算出根拠の記載がないため当サイトでは事実として扱っていません。</p>
            <p>・運営医療法人の正式名称は公式サイトで確認できませんでした（銀座院に併設クリニックの記載あり）。気になる方はカウンセリングで確認をおすすめします。</p>
            <p>・リタッチ料金は2026年7月1日改定。本ページの料金は2026年7月7日確認時点のものです。</p>
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
            <Link href="/purpose/monitor/" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">目的別</span>
              <p className="font-semibold mt-1">モニター価格で安く受けるコツと注意点</p>
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
