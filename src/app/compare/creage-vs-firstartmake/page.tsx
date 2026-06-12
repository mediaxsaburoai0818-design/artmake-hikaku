import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title:
    "クレアージュとファーストアートメイクどっちがいい？【2026年6月】料金・店舗数・施術方式を徹底比較",
  description:
    "【2026年6月最新】クレアージュとファーストアートメイクの眉アートメイクを10項目で徹底比較。料金（1回あたり換算）・モニター制度・麻酔代・初診料・全国の院数まで結論付き。3回設計の自然さならクレアージュ、料金の透明性と27院の通いやすさならファーストアートメイク。",
  keywords:
    "クレアージュ ファーストアートメイク どっち, クレアージュ ファーストアートメイク 比較, アートメイク 比較, クレアージュ アートメイク, ファーストアートメイク 眉",
  openGraph: {
    title: "クレアージュとファーストアートメイクどっちがいい？【2026年6月】徹底比較",
    description:
      "クレアージュとファーストアートメイクを料金・院数・施術方式など10項目で徹底比較。",
    type: "article",
  },
};

const comparisonItems = [
  {
    label: "眉の通常料金（1回あたり換算）",
    creage: "パウダーグラデーション\n初回132,000円（3回分）\n＝1回あたり44,000円",
    first: "通常1回（銀座本院）\nフレッシュ60,000円〜トップ80,000円\n2回コース（トップ）150,000円",
    winner: "creage",
    detail:
      "通常料金を1回あたり換算で比べると、クレアージュのパウダーグラデーションが44,000円/回（3回セット132,000円）に対し、ファーストアートメイクは銀座本院の通常1回でフレッシュ60,000円・スタンダード70,000円・トップ80,000円、トップの2回コースは150,000円（75,000円/回）。通常料金の1回あたりではクレアージュが割安です。ただしファーストアートメイクはモニター制度を使うと大きく下がるため、次項も併せて確認しましょう。",
  },
  {
    label: "眉のモニター料金",
    creage: "眉モニター（全顔）あり\n札幌/大阪/福岡105,600円\n名古屋92,400円",
    first: "モニター2回コース\nフレッシュ平日34,900円/回〜\nトップ全日49,000円/回（計88,000〜98,000円）",
    winner: "first",
    detail:
      "ファーストアートメイクのモニター2回コースは、フレッシュランク平日34,900円/回〜トップランク全日49,000円/回（総額88,000〜98,000円）と、モニター適用時の眉料金はかなり抑えられます。クレアージュのモニターは全顔写真が条件で、札幌・大阪・福岡105,600円、名古屋92,400円（東京は対象外）。条件が合えばどちらもお得ですが、眉のモニター価格の下限ではファーストアートメイクが優位です。",
  },
  {
    label: "施術回数の設計",
    creage: "3回セットが基本\n（1回目は薄め→複数回で調整）",
    first: "1回・2回コースから選択可",
    winner: "draw",
    detail:
      "クレアージュは業界では珍しい3回セット構成で、1回目はあえて薄めに入れて2回目・3回目で色味と形を調整する設計。「濃くなりすぎる」失敗を避けたい方に向いています。ファーストアートメイクは1回のみ・2回コースから選べる柔軟さが特徴で、まず試したい方や短期間で仕上げたい方に向いています。丁寧さのクレアージュ、柔軟さのファーストアートメイクで引き分けです。",
  },
  {
    label: "施術方式",
    creage: "パウダーグラデーション\nマイクロブレーディング\nコンビネーション（165,000円/3回）",
    first: "エアリーブロウ\n（ふんわり感×リアル毛並み）",
    winner: "draw",
    detail:
      "クレアージュはパウダーグラデーション・マイクロブレーディング（各132,000円/3回）・コンビネーション（165,000円/3回）の3方式から選択できます。ファーストアートメイクは「エアリーブロウ」と呼ばれる、ふんわり感とリアルな毛並みを両立させる方式を打ち出しています。方式の選択肢の広さはクレアージュ、ふんわり系の仕上がり訴求はファーストアートメイクと、好みによる部分が大きいため引き分けです。",
  },
  {
    label: "麻酔代",
    creage: "公式記載なし\n（要確認）",
    first: "クリーム麻酔0円\nブロック麻酔5,500円",
    winner: "first",
    detail:
      "ファーストアートメイクはクリーム麻酔が無料（0円）、ブロック麻酔は5,500円と公式サイトに明記されており、施術前に総額を見積もりやすいのが安心です。クレアージュは麻酔代について公式サイトで確認できなかったため、カウンセリング時に確認しましょう。料金の透明性という点ではファーストアートメイクが優位です。",
  },
  {
    label: "初診料・カウンセリング",
    creage: "初診料3,300円",
    first: "初診料0円\n（カウンセリングのみは3,300円）",
    winner: "first",
    detail:
      "ファーストアートメイクは初診料0円（カウンセリングのみで施術しない場合は3,300円）。クレアージュは初診料3,300円がかかります。施術前提で相談に行くなら、初診料の負担が少ないのはファーストアートメイクです。",
  },
  {
    label: "指名料",
    creage: "公式記載なし\n（要確認）",
    first: "5,500〜11,000円",
    winner: "draw",
    detail:
      "ファーストアートメイクの指名料は5,500〜11,000円と公式に明記されています。クレアージュは指名料について公式サイトに記載がないため、指名を希望する場合はカウンセリングで確認しましょう。金額が明記されている分ファーストアートメイクは見積もりしやすいですが、クレアージュ側が未確認のため判定は引き分けとしました。",
  },
  {
    label: "展開エリア（院数）",
    creage: "全国5院\n（東京・大阪・名古屋・福岡・札幌）",
    first: "全国27院\n（銀座本院・新宿・横浜・札幌・仙台・名古屋・大阪・神戸・広島・福岡など）",
    winner: "first",
    detail:
      "ファーストアートメイクは銀座本院をはじめ新宿・池袋・横浜・大宮・札幌・仙台・名古屋・大阪・神戸・広島・福岡など全国27院を展開しており、通いやすさは圧倒的です。クレアージュは東京・大阪・名古屋・福岡・札幌の5院で主要都市はカバーしていますが、院数ではファーストアートメイクが大きくリードしています。",
  },
  {
    label: "医療体制・施術者",
    creage: "施術者は全員看護師資格保有\n皮膚科医歴45年の医師が在籍\n（公式記載）",
    first: "公式で詳細要確認",
    winner: "creage",
    detail:
      "クレアージュは「施術者は全員看護師資格を保有」「皮膚科医歴45年の医師が在籍」と公式サイトに記載されており、医療体制のアピールが明確です。ファーストアートメイクも医療機関としてアートメイクを提供していますが、体制の詳細は公式サイトでご確認ください。公式情報の充実度ではクレアージュが優位です。",
  },
  {
    label: "予約方法",
    creage: "Web・電話・LINE",
    first: "LINE・Web・電話",
    winner: "draw",
    detail:
      "どちらもWeb・電話に加えてLINE予約に対応しており、予約手段の利便性は同等です。気軽に問い合わせから始めたい方は、両院ともLINEで相談できるのが便利です。",
  },
];

const faqs = [
  {
    q: "クレアージュとファーストアートメイク、眉の料金はどっちが安い？",
    a: "通常料金の1回あたり換算では、クレアージュが44,000円/回（パウダーグラデーション3回セット132,000円）、ファーストアートメイクは銀座本院の通常1回で60,000〜80,000円とクレアージュが割安です。ただしファーストアートメイクのモニター2回コースは34,900円/回〜（総額88,000〜98,000円）と大きく下がるため、モニター条件が合うならファーストアートメイクの方が総額を抑えられる可能性があります。最新料金は各公式サイトでご確認ください。",
  },
  {
    q: "3回セットのクレアージュと1〜2回のファーストアートメイク、どちらを選ぶべき？",
    a: "クレアージュの3回セットは、1回目を薄めに入れて複数回で調整する設計のため、濃くなりすぎる失敗を避けて自然に仕上げたい方に向いています。ファーストアートメイクは1回のみ・2回コースを選べるため、まず試したい方や短期間で完成させたい方に向いています。仕上げ方の丁寧さ重視か、スピードと柔軟さ重視かで選びましょう。",
  },
  {
    q: "麻酔代や初診料などの諸費用はどう違う？",
    a: "ファーストアートメイクはクリーム麻酔0円・ブロック麻酔5,500円・初診料0円（カウンセリングのみは3,300円）・指名料5,500〜11,000円と諸費用が公式に明記されています。クレアージュは初診料3,300円が明記されていますが、麻酔代・指名料は公式サイトで確認できなかったため、カウンセリング時にご確認ください。諸費用の透明性はファーストアートメイクが分かりやすいです。",
  },
  {
    q: "地方在住なら、どっちが通いやすい？",
    a: "ファーストアートメイクは全国27院（銀座本院・新宿・池袋・横浜・大宮・札幌・仙台・名古屋・大阪・神戸・広島・福岡など）を展開しており、地方在住の方でも通いやすいのが大きな強みです。クレアージュは東京・大阪・名古屋・福岡・札幌の5院のため、5大都市圏以外にお住まいの方はファーストアートメイクの方が選択肢が多くなります。",
  },
  {
    q: "リップやアイラインも比較したい場合は？",
    a: "クレアージュはアイライン上が初回99,000円（3回分＝33,000円/回）、リップが初回198,000円（3回分＝66,000円/回）と公式に記載されています。ファーストアートメイクのリップ・アイラインの具体的な料金は今回確認できなかったため、公式サイトまたはカウンセリングでご確認ください。",
  },
];

export default function CreageVsFirstartmakePage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "比較" }, { name: "クレアージュ vs ファーストアートメイク" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3 tracking-wide">
            2026年6月最新
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            クレアージュ vs ファーストアートメイク
            <br />
            <span className="text-rose-500">徹底比較</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            眉毛アートメイクで人気の2院を10項目で比較。
            <br className="hidden md:block" />
            料金（1回あたり換算）・モニター制度・院数まで、どっちが自分に合うか丸わかり。
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
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-8">
              <div className="text-center mb-4">
                <span className="inline-block bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
                  3回設計の自然さ・医療体制重視なら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  クレアージュ
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  3回セットで1回目は薄め→段階的に調整する設計
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  通常料金の1回あたり換算は44,000円で割安
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  施術者は全員看護師資格保有・皮膚科医歴45年の医師が在籍（公式記載）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  パウダー・マイクロブレーディング・コンビの3方式から選べる
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                濃くなりすぎる失敗を避けたい方、複数回かけて自然に仕上げたい方、医療体制の公式情報を重視する方に最適
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-300 rounded-2xl p-8">
              <div className="text-center mb-4">
                <span className="inline-block bg-rose-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
                  費用を抑えたい・通いやすさなら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  ファーストアートメイク
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  モニター2回コースは34,900円/回〜（計88,000〜98,000円）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  クリーム麻酔0円・初診料0円など諸費用が明朗
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  全国27院で地方でも通いやすい
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  「エアリーブロウ」のふんわり感×リアル毛並み
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                モニターで費用を抑えたい方、諸費用込みの総額を見積もりやすい方が良い方、5大都市圏以外にお住まいの方に最適
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10項目比較表 */}
      <section className="py-14 px-4 bg-gray-50" id="comparison-table">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            10項目比較表
          </h2>
          <p className="text-center text-gray-500 mb-10">
            クレアージュとファーストアートメイクを10の観点で徹底比較
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="p-4 text-left rounded-tl-xl min-w-[120px]">
                    比較項目
                  </th>
                  <th className="p-4 text-center min-w-[200px]">
                    クレアージュ
                  </th>
                  <th className="p-4 text-center min-w-[200px]">
                    ファーストアートメイク
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
                      className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === "creage" ? "bg-amber-50 font-semibold text-amber-700" : "text-gray-700"}`}
                    >
                      {item.creage}
                    </td>
                    <td
                      className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === "first" ? "bg-rose-50 font-semibold text-rose-700" : "text-gray-700"}`}
                    >
                      {item.first}
                    </td>
                    <td className="p-4 text-center">
                      {item.winner === "creage" && (
                        <span className="inline-block bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          CRE
                        </span>
                      )}
                      {item.winner === "first" && (
                        <span className="inline-block bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          FA
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
          <div className="mt-4 flex justify-center gap-6 text-xs text-gray-500 flex-wrap">
            <span>
              <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mr-1 align-middle" />
              CRE = クレアージュ優位
            </span>
            <span>
              <span className="inline-block w-3 h-3 bg-rose-500 rounded-full mr-1 align-middle" />
              FA = ファーストアートメイク優位
            </span>
            <span>
              <span className="inline-block w-3 h-3 bg-gray-400 rounded-full mr-1 align-middle" />
              引分 = ほぼ同等
            </span>
          </div>
          <div className="mt-6 max-w-3xl mx-auto text-xs text-gray-500 leading-relaxed bg-white rounded-lg p-4 border border-gray-100">
            <p>
              出典: 各クリニック公式サイト（2026年6月12日確認）。最新料金は公式サイトでご確認ください。
            </p>
            <p className="mt-2">
              ※クレアージュは3回セットが基本のため、公平を期して「1回あたり換算」を併記しています。ファーストアートメイクの通常料金は銀座本院の金額で、施術者ランク（フレッシュ/スタンダード/トップ）により異なります。
            </p>
            <p className="mt-2">
              ※ファーストアートメイクのリップ・アイラインの料金は今回未確認のため、公式サイトでご確認ください。
            </p>
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
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.label}
                  </h3>
                  {item.winner !== "draw" && (
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${item.winner === "creage" ? "bg-amber-100 text-amber-600" : "bg-rose-100 text-rose-600"}`}
                    >
                      {item.winner === "creage"
                        ? "クレアージュ優位"
                        : "ファーストアートメイク優位"}
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
                    className={`rounded-lg p-4 ${item.winner === "creage" ? "bg-amber-50 border border-amber-200" : "bg-white border border-gray-200"}`}
                  >
                    <p className="text-xs font-bold text-amber-500 mb-1">
                      クレアージュ
                    </p>
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {item.creage}
                    </p>
                  </div>
                  <div
                    className={`rounded-lg p-4 ${item.winner === "first" ? "bg-rose-50 border border-rose-200" : "bg-white border border-gray-200"}`}
                  >
                    <p className="text-xs font-bold text-rose-500 mb-1">
                      ファーストアートメイク
                    </p>
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {item.first}
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
                <span className="inline-block bg-amber-500 text-white text-lg font-bold px-6 py-2 rounded-full">
                  クレアージュ向き
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "3回かけて段階的に自然な眉に仕上げたい",
                  "1回目は薄めに入れて失敗リスクを抑えたい",
                  "通常料金の1回あたりを抑えたい（44,000円/回換算）",
                  "パウダー・マイクロブレーディング・コンビから方式を選びたい",
                  "看護師資格保有の施術者・医師在籍の体制を重視したい",
                  "アイライン・リップも料金が明記された院で受けたい",
                  "東京・大阪・名古屋・福岡・札幌の主要都市で通える",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="bg-amber-100 text-amber-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-lg font-bold transition-colors">
                  クレアージュ 公式サイト
                </button>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-6">
                <span className="inline-block bg-rose-500 text-white text-lg font-bold px-6 py-2 rounded-full">
                  ファーストアートメイク向き
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "モニター2回コース（34,900円/回〜）で費用を抑えたい",
                  "クリーム麻酔0円・初診料0円の明朗会計が良い",
                  "全国27院から通いやすい院を選びたい",
                  "「エアリーブロウ」のふんわり×リアル毛並みが好み",
                  "1回のみ・2回コースを柔軟に選びたい",
                  "施術者ランク（フレッシュ〜トップ）を予算で選びたい",
                  "5大都市圏以外（仙台・広島・神戸など）に住んでいる",
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
                <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-4 rounded-lg font-bold transition-colors">
                  ファーストアートメイク 公式サイト
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            よくある質問（FAQ）
          </h2>
          <p className="text-center text-gray-500 mb-10">
            クレアージュとファーストアートメイクの比較で多い質問
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
      <Link href="/review/creage/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">クレアージュ東京の口コミ・評判</p>
      </Link>
      <Link href="/review/first-artmake/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">ファーストアートメイクの口コミ・評判</p>
      </Link>
      <Link href="/review/dazzy/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">デイジークリニックの口コミ・評判</p>
      </Link>
      <Link href="/compare/creage-vs-medicalbrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">クレアージュ vs メディカルブロー比較</p>
      </Link>
      <Link href="/compare/creage-vs-dazzy/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">クレアージュ vs デイジークリニック比較</p>
      </Link>
      <Link href="/compare/dazzy-vs-firstartmake/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">デイジー vs ファーストアートメイク比較</p>
      </Link>
      <Link href="/compare/price/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">アートメイク料金比較表</p>
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
            理想の眉毛、どちらで叶える？
          </h2>
          <p className="text-lg mb-4 opacity-90">
            まずはカウンセリングで仕上がりイメージを確認しましょう
          </p>
          <p className="text-sm mb-10 opacity-75">
            3回設計の自然さ・医療体制重視ならクレアージュ、モニター価格と27院の通いやすさならファーストアートメイク
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              クレアージュ 公式サイト
            </button>
            <button className="bg-white/20 backdrop-blur text-white border-2 border-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors shadow-lg">
              ファーストアートメイク 公式サイト
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}

      <div className="max-w-4xl mx-auto px-4">
        <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "クレアージュ vs ファーストアートメイク", "item": "https://artmake-hikaku.com/compare/creage-vs-firstartmake/"}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "クレアージュとファーストアートメイクどっちがいい？【2026年6月】料金・店舗数・施術方式を徹底比較", datePublished: "2026-06-12", dateModified: "2026-06-12", author: { "@type": "Organization", name: "アートメイク比較ナビ編集部" }, publisher: { "@type": "Organization", name: "アートメイク比較ナビ" }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://artmake-hikaku.com/compare/creage-vs-firstartmake/" } }) }} />
    </main>
  );
}
