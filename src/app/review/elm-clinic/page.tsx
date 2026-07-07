import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/review/elm-clinic/" },
  title: "エルムクリニックのアートメイク口コミ・評判・料金【2026年】院ごとの料金差まで検証",
  description:
    "エルムクリニック（表参道・京都・神戸・広島・岡山・福岡・熊本）のアートメイク料金を公式サイトで検証（2026年7月7日確認・税込）。眉は院により40,000円〜75,000円と料金が異なる点が最大の注意点。年間症例4,463件（2024年度）の美容皮膚科を総額ベースで解説します。",
};

const clinicPricing = [
  { clinic: "表参道院", brow: "毛並み1回 70,000円（2回120,000円・モニター58,000円）", lip: "1回 70,000円（モニター45,000円）", note: "アートメイク予約はLINEのみ" },
  { clinic: "京都院", brow: "毛並み/パウダー各 59,800円（2回99,800円）", lip: "1回 79,800円（2回139,800円）", note: "毛並み+パウダー初回キャンペーンあり" },
  { clinic: "神戸院", brow: "1回 69,800円（2回目以降59,800円）", lip: "1回 79,800円（2回目69,800円）", note: "1年以内なら2回目料金" },
  { clinic: "広島院", brow: "1回 50,000円（初診限定40,000円・2回80,000円）", lip: "1回 70,000円（初診56,000円）", note: "2011年開院の本院" },
  { clinic: "岡山院", brow: "3D/4D/パウダー各 59,800円（2回目以降49,800円）", lip: "1回 69,800円（2回目59,800円）", note: "金属アレルギーはパッチテスト3,000円" },
  { clinic: "福岡院", brow: "1回 69,800円（初診50,000円・2回124,800円）", lip: "1回 69,800円（2回124,800円）", note: "ヘアストローク74,800円あり" },
  { clinic: "熊本院", brow: "1回 50,000円（2回目以降40,000円）", lip: "1回 70,000円（2回目40,000円）", note: "眉2回90,000円は7院中最安級" },
];

const faqs = [
  {
    q: "エルムクリニックはどこでアートメイクを受けられますか？",
    a: "公式のアートメイク料金ページに掲載があるのは表参道・京都・神戸・広島・岡山・福岡・熊本の7院です（2026年7月7日確認）。全9院のうち大阪院・麻布院はアートメイク料金の掲載がなく、提供の有無は公式ページで確認できませんでした。",
  },
  {
    q: "料金は全院共通ですか？",
    a: "いいえ、院ごとに料金もメニュー名も異なります。眉1回は熊本・広島の50,000円（初診・2回目条件でさらに下がる）から表参道の70,000円まで幅があります。表面麻酔料と消費税は全院とも料金込みです。お住まいのエリアの院の料金表を必ず個別に確認してください。",
  },
  {
    q: "一番安く受けるにはどうすればいいですか？",
    a: "公式料金表ベースでは、熊本院（眉1回50,000円・2回目以降40,000円）と広島院（初診限定40,000円）が安い水準です。表参道院はモニター価格（眉48,000〜62,000円）、京都院はキャンペーン価格が随時あります。いずれも公式サイトの最新料金の確認が前提です（2026年7月7日時点）。",
  },
  {
    q: "指名料はかかりますか？",
    a: "「施術者を指名する場合は別途毎回施術料が必要」との公式記載がありますが、金額は公式サイトに掲載されていません（確認不可・2026年7月7日時点）。指名を希望する方はカウンセリング・予約時に確認してください。",
  },
  {
    q: "実績はどのくらいありますか？",
    a: "アートメイクの年間症例数4,463件（2024年度実績）が公式に公表されています。年度が注記された公表値である点は確認しやすい表記です。2011年に広島で開院した美容皮膚科グループで、施術は医師の監督下で医療従事者が行うと公式に記載されています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ElmClinicReviewPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "クリニック" }, { name: "エルムクリニック" }]} />
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">口コミ・評判レビュー</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">エルムクリニックのアートメイク口コミ・評判・料金</h1>
          <p className="text-xl text-gray-600">西日本に強い美容皮膚科グループ｜院ごとに異なる料金を7院分検証</p>
        </div>
      </section>

      {/* 30秒でわかる結論 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><span className="text-rose-500">30秒</span>でわかる結論</h2>
            <p className="text-sm text-gray-500 mb-6">エルムクリニックは2011年広島開院の美容皮膚科グループ（全9院）。アートメイクは7院で料金掲載があり、<strong>院ごとに料金・メニュー名が異なる</strong>のが最大の特徴です。年間症例4,463件（2024年度・公式公表）。広島・熊本・岡山など西日本で探すなら有力候補です（2026年7月7日公式確認）。</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-green-200">
                <p className="font-bold text-green-700 mb-2">おすすめできる人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-green-500">✓</span>広島・岡山・熊本・福岡など西日本エリアで探している方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>美容皮膚科として肌の相談もまとめてしたい方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>眉2回で8〜10万円程度に抑えたい方（広島・熊本・京都）</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-orange-200">
                <p className="font-bold text-orange-700 mb-2">注意した方がいい人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-orange-500">!</span>院ごとに料金・メニューが違うため他院の料金を見て来院すると食い違います</li>
                  <li className="flex gap-2"><span className="text-orange-500">!</span>指名料の金額は公式に非掲載（予約時の確認が必要）</li>
                  <li className="flex gap-2"><span className="text-orange-500">!</span>ヘアラインは福岡院のヘアストローク以外は掲載なし</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-400">※本ページの料金・情報は2026年7月7日に公式サイト（elm-clinic.jp）で確認した税込価格です。表面麻酔料・消費税込み。最新・正確な情報は各院の公式ページでご確認ください。</p>
          </div>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">エルムクリニック 基本情報</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["運営", "エルムクリニックグループ（2011年広島開院・理事長 相原一仁）"],
                  ["アートメイク提供院", "表参道・京都・神戸・広島・岡山・福岡・熊本の7院（料金掲載ベース）"],
                  ["眉料金", "院により1回40,000円（熊本2回目等）〜70,000円（表参道）"],
                  ["指名料", "指名制度あり・金額は公式非掲載（要予約時確認）"],
                  ["施術体制", "医師の監督下で医療従事者が施術（公式表記）"],
                  ["公表実績", "アートメイク年間症例4,463件（2024年度実績・公式公表）"],
                  ["予約", "WEB・LINE・電話・アプリ（表参道のアートメイクはLINEのみ）"],
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

      {/* 院別料金表 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">院別料金表（税込・2026年7月7日公式確認）</h2>
          <p className="text-center text-gray-500 text-sm mb-8">エルムは院ごとに料金が異なります。必ず通う予定の院の列でご確認ください。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl shadow-sm overflow-hidden min-w-[640px]">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="px-4 py-3 text-left">院</th>
                  <th className="px-4 py-3 text-left">眉</th>
                  <th className="px-4 py-3 text-left">フルリップ</th>
                  <th className="px-4 py-3 text-left">備考</th>
                </tr>
              </thead>
              <tbody>
                {clinicPricing.map((r) => (
                  <tr key={r.clinic} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap">{r.clinic}</td>
                    <td className="px-4 py-3 text-gray-700">{r.brow}</td>
                    <td className="px-4 py-3 text-gray-700">{r.lip}</td>
                    <td className="px-4 py-3 text-gray-700">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6 text-sm text-gray-700">
            <p className="font-bold text-amber-800 mb-1">総額の考え方</p>
            <p>最安ルートは熊本院: 眉1回50,000円＋2回目40,000円＝<span className="font-bold">2回総額90,000円</span>。広島院の初診限定（40,000円）を使えば2回総額80,000円〜も可能です。当サイト検証の相場レンジ（眉2回 約9.3万〜16万円）の下限〜中位で、<span className="font-bold">西日本ではコストパフォーマンスの高い選択肢</span>です。<Link href="/compare/price/" className="text-rose-500 underline">全院の料金比較はこちら</Link>。</p>
          </div>
        </div>
      </section>

      {/* 検証メモ */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">当サイトの検証メモ</h2>
          <p className="text-center text-gray-500 text-sm mb-8">口コミの創作や評点の自作はせず、公式情報の裏取り結果を共有します。</p>
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-3 text-sm text-gray-700">
            <p>・<span className="font-bold">院ごとに料金・メニュー名（3D/4D・マシーン毛並み・パウダーブロウ等）が異なります</span>。他サイトの「エルムの眉は◯円」という一律表記は誤りの元です。本ページは7院分を個別に確認しました（2026年7月7日）。</p>
            <p>・年間症例4,463件は「2024年度実績」と年度が明記された公表値で、確認しやすい表記です。</p>
            <p>・指名料の金額・医療法人の正式名称・大阪院/麻布院のアートメイク提供可否は公式サイトで確認できませんでした（確認不可としてそのまま記載）。</p>
            <p>・リップは表参道院で抗ヘルペス薬2,000円が別途かかる等、院別の付帯費用があります。予約時に総額をご確認ください。</p>
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
            <Link href="/area/fukuoka/" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">エリア</span>
              <p className="font-semibold mt-1">福岡のアートメイククリニック比較</p>
            </Link>
            <Link href="/review/the-artmake-tokyo/" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">口コミ・評判</span>
              <p className="font-semibold mt-1">THE ARTMAKE TOKYO（広島院あり）の評判</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
