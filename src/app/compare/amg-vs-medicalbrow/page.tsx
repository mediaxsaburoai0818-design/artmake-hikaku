import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";
import AuthorBox from '@/components/AuthorBox'
import { ThirtySecVerdict, ReviewTrendSection } from '@/components/CompareIntro'
import { clinicData } from '@/lib/clinicData'

export const metadata: Metadata = {
  title:
    "アートメイクギャラリー vs メディカルブロー 徹底比較【2026年最新】除去・料金・技法をどっちか10項目で解説",
  description:
    "【2026年7月最新】アートメイクギャラリー（AMG）とメディカルブローを10項目で比較。AMGはアートメイク除去・他院修正・パラメディカルまで対応、メディカルブローは7Dストローク（商標）と症例実績が強み。料金・展開エリア・診察料まで、どっちを選ぶべきか公式情報で解説します（数値は各院公式公表・効果には個人差があります）。",
  keywords:
    "アートメイクギャラリー メディカルブロー どっち, アートメイクギャラリー メディカルブロー 比較, AMG メディカルブロー, アートメイクギャラリー 除去, アートメイク 比較",
};

const comparisonItems = [
  {
    label: "料金（眉・総額目安）",
    amg: "通常2回 140,000円〜\nモニター2回 88,000円〜（平日）\n＋診察料1,100円",
    medical: "モニター1回 28,000円〜\n2回セット 90,000円〜\n＋指名料・初診2,200円",
    winner: "draw",
    detail:
      "まず1回だけ安く試す入口価格ではメディカルブローのモニター1回28,000円〜が入りやすく、AMGは診察料1,100円が別途かかります。一方AMGはメニュー料金がどのアーティストでも一律のため、指名しなければ総額が読みやすいのが特徴です。いずれも指名料・初診/診察料が加算されるため、実際に払う総額で比較しましょう（各院公式公表・2026年7月確認、料金は変更される場合があります）。",
  },
  {
    label: "アートメイク除去",
    amg: "○ 対応\nピコレーザー／専用除去剤・他院で入れた眉の修正も相談可\n両眉1回 48,000円〜",
    medical: "公式メニューに記載なし",
    winner: "amg",
    detail:
      "AMGはアートメイクの除去メニューを公式に用意しており、ピコレーザーによる除去と、眉のみ専用除去剤を使うリムーバル除去（1回25,000円〜）があります。他院で入れたアートメイクの修正・上書きまで相談できる点は、除去や失敗の入れ直しを考えている人にとって明確な差です。メディカルブローは公式メニューに除去の記載がありません（2026年7月確認）。なお除去は1回で完了しない前提で、複数回・総額を見積もる必要があります。",
  },
  {
    label: "パラメディカル",
    amg: "○ 対応",
    medical: "公式メニューに記載なし",
    winner: "amg",
    detail:
      "パラメディカル・アートメイク（傷あと・肌の色ムラ等をカバーする医療目的の色素定着）は、AMGの公式メニューに含まれています。メディカルブローは公式メニューに記載がありません（2026年7月確認）。美容眉だけでなく医療的なカバーを検討している場合はAMGが選択肢になります。仕上がりや適応には個人差があり、必ず医師のカウンセリングで可否を確認してください。",
  },
  {
    label: "ヘアライン（薄毛）",
    amg: "○ 対応（男女）\n1回 75,000円〜",
    medical: "○ 対応あり",
    winner: "draw",
    detail:
      "生え際・薄毛が気になる部分に色素を入れるヘアライン（ヘアアートメイク）は、両院とも対応しています。AMGは男女ともにメニューがあり1回75,000円〜、メディカルブローもヘアラインメニューを用意しています。眉と同時に相談したい方はどちらでも対応可能です（各院公式・2026年7月確認）。",
  },
  {
    label: "技法・ブランド",
    amg: "毛並み・パウダー等\n提携医療機関のアーティストが担当",
    medical: "7Dストローク®（商標）",
    winner: "medical",
    detail:
      "メディカルブローは1本ずつ毛流れを描く独自技法「7Dストローク（商標）」を前面に打ち出しており、毛並み感の自然さで指名されることが多い技法ブランドです。AMGもパウダーや毛並み系など複数の質感に対応しますが、技法名としてのブランド訴求はメディカルブローが強めです。仕上がりの好みは実際の症例写真で確認するのが確実です（効果・持ちには個人差があります）。",
  },
  {
    label: "症例・実績",
    amg: "症例50,000件以上（公式公表）",
    medical: "累計23万件超（公式公表）",
    winner: "medical",
    detail:
      "実績の公表数ではメディカルブローが累計23万件超と大きく、症例数の安心感を重視する方に向きます。AMGも症例50,000件以上を公表しています。いずれも各院公式サイトの公表値であり、第三者による検証値ではない点、また症例数と自分の仕上がりは別である点は理解しておきましょう。",
  },
  {
    label: "展開エリア",
    amg: "6院（提携医療機関内）\n銀座・横浜・梅田・心斎橋・芦屋・福岡天神",
    medical: "全国8院\n（表参道・銀座・新宿・横浜・名古屋・大阪 他）",
    winner: "draw",
    detail:
      "メディカルブローは全国8院と展開が広く、地方の主要都市からも通いやすい体制です。AMGは提携医療機関内に6院（銀座・横浜・梅田・心斎橋・芦屋・福岡天神）を展開しており、関東・関西・福岡はカバーしています。名古屋エリアはメディカルブローが便利です。通う院の位置は必ず公式で最新の開院状況を確認してください（2026年7月確認）。",
  },
  {
    label: "料金体系の分かりやすさ",
    amg: "基本料金は一律＋指名料制\n（指名料3,300〜35,000円/回）",
    medical: "アーティストランク制\n（ランクで基本料金が変動）",
    winner: "amg",
    detail:
      "AMGはメニューの基本料金がどのアーティストでも同一で、指名する場合のみ指名料が加算される方式のため、指名しなければ基準料金で総額を見積もれます。メディカルブローはアーティストのランクによって基本料金自体が変わるランク制で、上位ランクを選ぶほど総額が上がります。基本料金の分かりやすさではAMGがやや優位ですが、どちらも指名・ランクで最終総額が変わるため見積もり確認は必須です。",
  },
  {
    label: "カウンセリング/初診",
    amg: "診察料1,100円（有料）",
    medical: "初診2,200円（有料）",
    winner: "draw",
    detail:
      "両院ともカウンセリング/初診に費用がかかります（AMGは診察料1,100円、メディカルブローは初診2,200円）。無料カウンセリングを掲げる他院と比べると有料である点は共通の留意点です。医療行為であるため、施術内容・リスク・ダウンタイムを医師・施術者に確認したうえで判断しましょう。",
  },
  {
    label: "メンズ対応",
    amg: "○（ヘアライン等 男女対応）",
    medical: "○（メンズメニューあり）",
    winner: "draw",
    detail:
      "男性のアートメイクはどちらも対応しています。メディカルブローはメンズ専用メニューを設けており、AMGも眉・ヘアラインで男性の施術に対応しています。男性で薄毛のヘアラインまで相談したい場合はAMG、毛並み技法で眉を整えたい場合はメディカルブローが候補になります。",
  },
];

const faqs = [
  {
    q: "アートメイクギャラリーとメディカルブロー、どっちが向いている？",
    a: "アートメイクの除去・他院で入れた眉の修正・パラメディカルまで相談したい方、基本料金が一律で分かりやすい方式が良い方はアートメイクギャラリー（AMG）が向いています。7Dストローク（商標）の毛並み技法や、累計23万件超という症例実績の多さ、全国展開の通いやすさを重視する方はメディカルブローが向いています。効果や仕上がりには個人差があるため、両院のカウンセリングで比較するのがおすすめです。",
  },
  {
    q: "他院で入れたアートメイクの除去や修正もできる？",
    a: "アートメイクギャラリーは公式にアートメイク除去メニュー（ピコレーザー／眉専用の除去剤リムーバル除去）を用意しており、他院で入れたアートメイクの修正・上書きも相談できます。両眉の除去は1回48,000円〜で、複数回かかる前提です。メディカルブローは公式メニューに除去の記載がありません（2026年7月確認）。除去・入れ直しを前提にするならAMGが選択肢になります。",
  },
  {
    q: "総額が安いのはどっち？",
    a: "まず1回だけ安く試す入口価格ではメディカルブローのモニター1回28,000円〜が入りやすいです。ただしメディカルブローはランク・指名で基本料金が上がり、AMGは診察料1,100円や指名料が加算されるため、実際に払う総額で比較する必要があります。除去や他院修正まで含めた総合的な相談先としてはAMGが1か所で完結しやすいです（料金は各院公式・2026年7月時点、変更される場合があります）。",
  },
  {
    q: "症例実績で選ぶならどっち？",
    a: "公表されている症例数ではメディカルブローが累計23万件超と多く、実績の安心感を重視する方に向いています。AMGも症例50,000件以上を公表しています。いずれも各院公式サイトの公表値であり第三者検証値ではないため、最終的には自分の受けたい部位の症例写真を確認して判断するのがおすすめです。",
  },
  {
    q: "薄毛のヘアラインは両方できる？",
    a: "はい、生え際・薄毛向けのヘアライン（ヘアアートメイク）は両院とも対応しています。アートメイクギャラリーは男女ともに1回75,000円〜、メディカルブローもヘアラインメニューがあります。眉とあわせて相談したい場合はどちらでも可能です。適応や仕上がりには個人差があるため、カウンセリングで確認してください。",
  },
];

export default function AmgVsMedicalbrowPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "比較" }, { name: "アートメイクギャラリー vs メディカルブロー" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3 tracking-wide">
            2026年7月最新
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイクギャラリー vs メディカルブロー
            <br />
            <span className="text-rose-500">徹底比較</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            眉・除去・ヘアラインまで、人気2院を10項目で比較。
            <br className="hidden md:block" />
            除去や他院修正も相談したいならAMG、毛並み技法と実績ならメディカルブロー。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#comparison-table"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              比較表を見る
            </a>
            <a
              href="#conclusion"
              className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500"
            >
              結論を先に見る
            </a>
          </div>
        </div>
      </section>

      <ThirtySecVerdict
        verdict="アートメイク除去・他院で入れた眉の修正・パラメディカルまで1か所で相談したい人、基本料金が一律で分かりやすい方式を求める人はアートメイクギャラリー（AMG）。7Dストローク（商標）の毛並み技法や累計23万件超の症例実績、全国展開の通いやすさを重視する人はメディカルブロー。どちらも指名・ランクや診察料で総額が変わるため、実質総額で比較しましょう。"
        a={{ name: clinicData.amg.name, reviewSlug: clinicData.amg.reviewSlug, totalPrice: clinicData.amg.totalPrice, suitFor: 'アートメイク除去・他院修正・パラメディカルまで相談したい人、基本料金が一律で分かりやすい方式を求める人、薄毛ヘアラインも同時に相談したい人。' }}
        b={{ name: clinicData.medicalbrow.name, reviewSlug: clinicData.medicalbrow.reviewSlug, totalPrice: clinicData.medicalbrow.totalPrice, suitFor: '7Dストローク（商標）の毛並み技法を求める人、症例実績の多さで安心したい人、全国展開で通いやすさを重視する人。' }}
      />

      {/* 結論先出し */}
      <section className="py-14 px-4 bg-white" id="conclusion">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            結論：どっちを選ぶべき？
          </h2>
          <p className="text-center text-gray-500 mb-10">
            あなたの重視ポイントで最適なクリニックが変わります
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-300 rounded-2xl p-8">
              <div className="text-center mb-4">
                <span className="inline-block bg-rose-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
                  除去・修正まで相談したいなら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  アートメイクギャラリー
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  アートメイク除去・他院修正を公式メニューで対応（両眉1回48,000円〜）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  パラメディカル（傷あと等のカバー）にも対応
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  基本料金は一律＋指名料制で見積もりやすい
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  薄毛向けヘアライン（男女）にも対応
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                除去・入れ直し・傷あとカバーまで1か所で相談したい方、料金体系の分かりやすさを重視する方に
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-fuchsia-50 border-2 border-pink-300 rounded-2xl p-8">
              <div className="text-center mb-4">
                <span className="inline-block bg-pink-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
                  技法・実績重視なら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  メディカルブロー
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold mt-0.5">&#10003;</span>
                  7Dストローク（商標）で毛流れを描く技法ブランド
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold mt-0.5">&#10003;</span>
                  累計23万件超の症例実績を公表
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold mt-0.5">&#10003;</span>
                  全国8院で地方からも通いやすい
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold mt-0.5">&#10003;</span>
                  モニター1回28,000円〜の入口価格
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                毛並み技法や症例実績の多さ、全国展開の通いやすさを重視する方に
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs text-gray-400 text-center">
            ※料金・メニュー・院数は各院公式サイトの2026年7月時点の情報です。変更される場合があるため、最新は公式でご確認ください。アートメイクは医療行為で、効果・持ち・仕上がりには個人差があります。
          </p>
        </div>
      </section>

      {/* 10項目比較表 */}
      <section className="py-14 px-4 bg-gray-50" id="comparison-table">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            10項目比較表
          </h2>
          <p className="text-center text-gray-500 mb-10">
            アートメイクギャラリーとメディカルブローを10の観点で比較
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="p-4 text-left rounded-tl-xl min-w-[120px]">
                    比較項目
                  </th>
                  <th className="p-4 text-center min-w-[200px]">
                    アートメイクギャラリー
                  </th>
                  <th className="p-4 text-center min-w-[200px]">
                    メディカルブロー
                  </th>
                  <th className="p-4 text-center rounded-tr-xl min-w-[80px]">
                    判定
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}`}
                  >
                    <td className="p-4 font-semibold text-gray-800 text-sm">
                      {item.label}
                    </td>
                    <td
                      className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === "amg" ? "bg-rose-50 font-semibold text-rose-700" : "text-gray-700"}`}
                    >
                      {item.amg}
                    </td>
                    <td
                      className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === "medical" ? "bg-pink-50 font-semibold text-pink-700" : "text-gray-700"}`}
                    >
                      {item.medical}
                    </td>
                    <td className="p-4 text-center">
                      {item.winner === "amg" && (
                        <span className="inline-block bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          AG
                        </span>
                      )}
                      {item.winner === "medical" && (
                        <span className="inline-block bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          MB
                        </span>
                      )}
                      {item.winner === "draw" && (
                        <span className="inline-block bg-gray-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                          引分
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-center gap-6 text-xs text-gray-500">
            <span>
              <span className="inline-block w-3 h-3 bg-rose-500 rounded-full mr-1 align-middle" />
              AG = アートメイクギャラリー優位
            </span>
            <span>
              <span className="inline-block w-3 h-3 bg-pink-500 rounded-full mr-1 align-middle" />
              MB = メディカルブロー優位
            </span>
            <span>
              <span className="inline-block w-3 h-3 bg-gray-400 rounded-full mr-1 align-middle" />
              引分 = ほぼ同等
            </span>
          </div>
        </div>
      </section>

      {/* 各項目の詳細解説 */}
      <section className="py-14 px-4 bg-white" id="details">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            各項目の詳細解説
          </h2>
          <p className="text-center text-gray-500 mb-10">
            10項目それぞれの違いを詳しく解説します
          </p>
          <div className="space-y-8">
            {comparisonItems.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.label}
                  </h3>
                  {item.winner === "amg" && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-100 text-rose-600">
                      アートメイクギャラリー優位
                    </span>
                  )}
                  {item.winner === "medical" && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-pink-100 text-pink-600">
                      メディカルブロー優位
                    </span>
                  )}
                  {item.winner === "draw" && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-200 text-gray-600">
                      ほぼ同等
                    </span>
                  )}
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div
                    className={`rounded-lg p-4 ${item.winner === "amg" ? "bg-rose-50 border border-rose-200" : "bg-white border border-gray-200"}`}
                  >
                    <p className="text-xs font-bold text-rose-500 mb-1">
                      アートメイクギャラリー
                    </p>
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {item.amg}
                    </p>
                  </div>
                  <div
                    className={`rounded-lg p-4 ${item.winner === "medical" ? "bg-pink-50 border border-pink-200" : "bg-white border border-gray-200"}`}
                  >
                    <p className="text-xs font-bold text-pink-500 mb-1">
                      メディカルブロー
                    </p>
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {item.medical}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 使い分けガイド（2カラム） */}
      <section className="py-14 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            使い分けガイド
          </h2>
          <p className="text-center text-gray-500 mb-10">
            あなたのタイプ別におすすめクリニックをご紹介
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-6">
                <span className="inline-block bg-rose-500 text-white text-lg font-bold px-6 py-2 rounded-full">
                  アートメイクギャラリー向き
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "他院で入れたアートメイクを除去・修正したい",
                  "傷あとカバーなどパラメディカルを相談したい",
                  "基本料金が一律で総額を見積もりたい",
                  "薄毛のヘアラインも同時に相談したい",
                  "眉・除去・修正を1か所で完結させたい",
                  "銀座・横浜・梅田・心斎橋・芦屋・福岡天神に通える",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="bg-rose-100 text-rose-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/review/amg/" className="block text-center w-full bg-rose-500 hover:bg-rose-600 text-white py-4 rounded-lg font-bold transition-colors">
                  アートメイクギャラリーの詳細を見る
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-6">
                <span className="inline-block bg-pink-500 text-white text-lg font-bold px-6 py-2 rounded-full">
                  メディカルブロー向き
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "毛並み感の技法（7Dストローク）で眉を整えたい",
                  "症例実績の多さで安心したい",
                  "全国展開で通いやすいクリニックが良い",
                  "まずモニター1回から試してみたい",
                  "名古屋エリアに住んでいる",
                  "メンズアートメイクを検討中",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="bg-pink-100 text-pink-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/review/medicalbrow/" className="block text-center w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-lg font-bold transition-colors">
                  メディカルブローの詳細を見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewTrendSection
        aName={clinicData.amg.name} bName={clinicData.medicalbrow.name}
        aGood={clinicData.amg.goodTrends} aBad={clinicData.amg.badTrends}
        bGood={clinicData.medicalbrow.goodTrends} bBad={clinicData.medicalbrow.badTrends}
        aReviewSlug={clinicData.amg.reviewSlug} bReviewSlug={clinicData.medicalbrow.reviewSlug}
      />

      {/* FAQ */}
      <section className="py-14 px-4 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            よくある質問（FAQ）
          </h2>
          <p className="text-center text-gray-500 mb-10">
            アートメイクギャラリーとメディカルブローの比較で多い質問
          </p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-gray-50 rounded-xl shadow-sm group"
              >
                <summary className="px-6 py-5 cursor-pointer font-semibold hover:bg-gray-100 transition-colors rounded-xl text-gray-800 list-none flex items-center justify-between">
                  <span>
                    Q{i + 1}. {faq.q}
                  </span>
                  <span className="text-rose-400 ml-4 flex-shrink-0 transition-transform group-open:rotate-45 text-xl">
                    +
                  </span>
                </summary>
                <div className="px-6 py-5 border-t border-gray-200 text-gray-600 leading-relaxed text-sm">
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
            <Link href="/review/amg/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">クリニック</span>
              <p className="font-semibold mt-1">アートメイクギャラリーの口コミ・評判</p>
            </Link>
            <Link href="/review/medicalbrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">クリニック</span>
              <p className="font-semibold mt-1">メディカルブローの口コミ・評判</p>
            </Link>
            <Link href="/compare/price/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">比較</span>
              <p className="font-semibold mt-1">アートメイク料金比較表</p>
            </Link>
            <Link href="/compare/all-clinics/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">比較</span>
              <p className="font-semibold mt-1">全クリニック比較ランキング</p>
            </Link>
            <Link href="/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">ランキング</span>
              <p className="font-semibold mt-1">アートメイクおすすめクリニックTOP5</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            除去も眉も、どちらで叶える？
          </h2>
          <p className="text-lg mb-4 opacity-90">
            まずは各院のカウンセリングで仕上がりイメージとリスクを確認しましょう
          </p>
          <p className="text-sm mb-10 opacity-75">
            除去・修正まで相談したいならアートメイクギャラリー、技法・実績ならメディカルブロー
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/review/amg/" className="bg-white text-rose-500 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              アートメイクギャラリーの詳細
            </Link>
            <Link href="/review/medicalbrow/" className="bg-white/20 backdrop-blur text-white border-2 border-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors shadow-lg">
              メディカルブローの詳細
            </Link>
          </div>
        </div>
      </section>

      {/* Footer 公式 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 border border-[var(--gold-light)] text-center">
            <h2 className="text-xl font-bold mb-4">公式サイトで予約・詳細を確認</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://artmake-g.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">アートメイクギャラリー公式へ →</a>
              <a href="https://t.felmat.net/fmcl?ak=Y4616D.1.683500A.G135747X" target="_blank" rel="sponsored noopener noreferrer" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">メディカルブロー公式へ →</a>
            </div>
            <p className="mt-4 text-xs text-gray-400">※本ページの料金・メニュー・院数は各院公式サイトの2026年7月時点の情報をもとに当サイトが整理したものです。最新・正確な情報は各公式サイトでご確認ください。アートメイクは医療行為であり、効果・持続・仕上がりには個人差があります。</p>
          </div>
        </section>
        <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "アートメイクギャラリー vs メディカルブロー", "item": "https://artmake-hikaku.com/compare/amg-vs-medicalbrow/"}]}) }} />
    </main>
  );
}
