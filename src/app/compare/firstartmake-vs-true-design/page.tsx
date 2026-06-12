import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title:
    "ファーストアートメイクとトゥルーデザインクリニックどっちがいい？【2026年6月】料金・店舗数・施術方式を徹底比較",
  description:
    "【2026年6月最新】ファーストアートメイクとトゥルーデザインクリニックを10項目で徹底比較。眉の料金、モニター制度、麻酔代、指名料、店舗数まで。全国27院で通いやすさならファーストアートメイク、大阪で価格重視ならトゥルーデザイン。",
  keywords:
    "ファーストアートメイク トゥルーデザイン どっち, ファーストアートメイク トゥルーデザイン 比較, アートメイク 比較, ファーストアートメイク 料金, トゥルーデザインクリニック 料金",
  openGraph: {
    title: "ファーストアートメイク vs トゥルーデザインクリニック 徹底比較【2026年6月】",
    description: "ファーストアートメイクとトゥルーデザインクリニックを料金・店舗数・施術方式の10項目で徹底比較。",
    type: "article",
  },
};

const comparisonItems = [
  {
    label: "料金（眉・通常）",
    first: "1回（銀座本院）\nフレッシュ 60,000円\nスタンダード 70,000円\nトップ 80,000円\n2回コース（トップ）150,000円",
    trueDesign: "2回コース\n2Dパウダー 40,000円\n3D毛並み 60,000円\n4D（パウダー×毛並み）70,000円",
    winner: "trueDesign",
    detail:
      "通常料金で比較すると、トゥルーデザインは2回コースで40,000〜70,000円、ファーストアートメイクは1回で60,000〜80,000円（トップランクの2回コースは150,000円）と、トゥルーデザインが大きくリードします。ただしトゥルーデザインの料金は施術前後写真をSNS等に掲載する条件付き（実質モニター型価格）です。ファーストアートメイクの料金は銀座本院のもので、ランク制を採用しています。",
  },
  {
    label: "料金（眉・モニター）",
    first: "モニター2回コース\nフレッシュ平日 34,900円/回〜\nトップ全日 49,000円/回\n（計88,000〜98,000円）",
    trueDesign: "通常料金自体が\n写真掲載条件付きの\n実質モニター型価格\n（4D 2回 70,000円）",
    winner: "trueDesign",
    detail:
      "ファーストアートメイクのモニター2回コースは計88,000〜98,000円で、通常価格から大幅に抑えられます。一方トゥルーデザインは、そもそも全料金が施術前後写真の掲載を条件とした実質モニター型の設定で、4Dでも2回70,000円。モニター条件で比較してもトゥルーデザインが安価です。各モニターの掲載条件・適用条件は公式サイトでご確認ください。",
  },
  {
    label: "料金（リップ・アイライン）",
    first: "具体額は公式で要確認",
    trueDesign: "リップ 2回 80,000円\nアイライン 2回 70,000円\nヘアライン 2回 75,000円",
    winner: "trueDesign",
    detail:
      "トゥルーデザインはリップ2回80,000円・アイライン2回70,000円・ヘアライン2回75,000円と、眉以外の部位も公式サイトで料金を明示しています。ファーストアートメイクのリップ・アイラインの具体的な料金は今回の調査では確認できなかったため、公式サイトまたはカウンセリングでご確認ください。料金の比較しやすさではトゥルーデザインが優位です。",
  },
  {
    label: "麻酔代",
    first: "クリーム麻酔 0円\nブロック麻酔 5,500円",
    trueDesign: "麻酔 3,000円\n（ピコレーザー施術時）",
    winner: "first",
    detail:
      "ファーストアートメイクはクリーム麻酔が0円で、ブロック麻酔を希望する場合のみ5,500円かかります。トゥルーデザインの公式サイトには「麻酔3,000円（ピコレーザー施術時）」の記載があり、アートメイク施術時の麻酔体制の詳細はカウンセリングでご確認ください。クリーム麻酔代が明確に無料と示されている点ではファーストアートメイクが安心です。",
  },
  {
    label: "初診料・カウンセリング",
    first: "初診料 0円\nカウンセリングのみは 3,300円",
    trueDesign: "初診料 0円\n再診料 1,500円",
    winner: "draw",
    detail:
      "初診料はどちらも0円です。ファーストアートメイクは施術をせずカウンセリングのみの場合に3,300円がかかります。トゥルーデザインは再診料が1,500円です。条件が異なるため一概に優劣はつけられませんが、どちらも初回の費用ハードルは低く設定されています。",
  },
  {
    label: "指名料",
    first: "5,500〜11,000円",
    trueDesign: "1回 1,500円",
    winner: "trueDesign",
    detail:
      "指名料はトゥルーデザインが1回1,500円と低額です。ファーストアートメイクはランクに応じて5,500〜11,000円。アーティストを指名して通いたい方は、施術料金に指名料を加えた総額で比較しましょう。",
  },
  {
    label: "店舗数・展開エリア",
    first: "全国27院\n（銀座本院・新宿・池袋・横浜・大宮\n札幌・仙台・名古屋・大阪・神戸\n広島・福岡など）",
    trueDesign: "大阪・心斎橋の1院のみ\n（西心斎橋1-5-5、心斎橋駅徒歩約5分）",
    winner: "first",
    detail:
      "店舗数はファーストアートメイクが全国27院と圧倒的です。銀座本院をはじめ新宿・池袋・横浜・札幌・仙台・名古屋・大阪・神戸・広島・福岡など主要都市を幅広くカバー。トゥルーデザインは大阪・心斎橋の1院のみのため、関西圏以外の方にはファーストアートメイクが現実的な選択肢です。なおファーストアートメイクも大阪院があるため、大阪在住の方は両院を比較検討できます。",
  },
  {
    label: "施術方式",
    first: "エアリーブロウ\n（ふんわり感×リアル毛並み）",
    trueDesign: "2D（パウダー調）\n3D（1本1本手彫り）\n4D（パウダー＋手彫り）",
    winner: "draw",
    detail:
      "ファーストアートメイクは「エアリーブロウ」と呼ばれる、ふんわり感とリアルな毛並みを両立させる施術が特徴です。トゥルーデザインは2D・3D・4Dの3方式から仕上がりイメージに合わせて選択できます。どちらもパウダー調と毛並みを組み合わせた仕上がりに対応しており、方向性の好みで選ぶのがよいでしょう。",
  },
  {
    label: "料金の条件",
    first: "通常メニューとモニターを選べる\n（写真掲載なしの通常価格あり）",
    trueDesign: "施術前後写真をSNS等に\n掲載する条件の料金設定\n（実質モニター型価格）",
    winner: "first",
    detail:
      "ファーストアートメイクは通常メニューとモニター価格の両方が用意されており、症例写真の掲載に抵抗がある方は通常価格を選べます。トゥルーデザインの公式料金は施術前後写真の掲載が条件の実質モニター型価格のため、掲載条件の詳細を事前に確認しましょう。選択肢の柔軟さではファーストアートメイクが優位です。",
  },
  {
    label: "予約方法",
    first: "LINE・Web・電話",
    trueDesign: "電話・Web・LINE",
    winner: "draw",
    detail:
      "予約方法はどちらもLINE・Web・電話の3つに対応しており、利便性に差はありません。LINEで気軽に相談・予約できるのは両院共通のメリットです。",
  },
];

const faqs = [
  {
    q: "ファーストアートメイクとトゥルーデザイン、眉アートメイクが安いのはどっち？",
    a: "公式記載の料金で比較すると、トゥルーデザインは眉2回コース40,000〜70,000円、ファーストアートメイクは通常1回60,000〜80,000円・モニター2回コース計88,000〜98,000円で、トゥルーデザインが安価です。ただしトゥルーデザインの料金は施術前後写真をSNS等に掲載する条件付き（実質モニター型価格）です。最新料金は各公式サイトでご確認ください。",
  },
  {
    q: "トゥルーデザインクリニックの料金が安い理由は？",
    a: "トゥルーデザインの料金は、施術前後の写真をSNS等に掲載することを条件とした料金設定（実質モニター型価格）です。全て税込表記で、初診料0円・指名料1回1,500円・麻酔3,000円（ピコレーザー施術時）と諸費用も明示されています。写真掲載の範囲や条件はカウンセリングで必ず確認しましょう。",
  },
  {
    q: "大阪在住の場合はどっちを選ぶべき？",
    a: "どちらも大阪に院があります。トゥルーデザインは心斎橋駅徒歩約5分（西心斎橋1-5-5）、ファーストアートメイクも全国27院の中に大阪院があります。価格重視で写真掲載条件に抵抗がなければトゥルーデザイン、通常メニューやエアリーブロウの仕上がりを希望するならファーストアートメイクと、希望条件に合わせて両院のカウンセリングで比較するのがおすすめです。",
  },
  {
    q: "症例写真の掲載に抵抗がある場合はどっちがいい？",
    a: "ファーストアートメイクが選びやすいでしょう。ファーストアートメイクは写真掲載条件のない通常メニュー（銀座本院1回60,000〜80,000円）とモニター価格の両方から選べます。トゥルーデザインの公式料金は施術前後写真の掲載が条件となっているため、掲載を避けたい方は事前に対応可否と料金を直接確認する必要があります。",
  },
  {
    q: "リップやアイラインも一緒に受けたい場合は？",
    a: "トゥルーデザインはリップ2回80,000円・アイライン2回70,000円・ヘアライン2回75,000円と公式サイトで料金を明示しているため、総額の見通しを立てやすいです。ファーストアートメイクのリップ・アイラインの具体的な料金は公式サイトまたはカウンセリングでご確認ください。",
  },
];

export default function FirstartmakeVsTrueDesignPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "比較" }, { name: "ファーストアートメイク vs トゥルーデザインクリニック" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3 tracking-wide">
            2026年6月最新
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            ファーストアートメイク vs<br className="md:hidden" /> トゥルーデザインクリニック
            <br />
            <span className="text-rose-500">徹底比較</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            全国27院のファーストアートメイクと大阪・心斎橋のトゥルーデザインを10項目で比較。
            <br className="hidden md:block" />
            料金・モニター制度・麻酔代まで、どっちが自分に合うか丸わかり。
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
                  通いやすさ・選択肢の柔軟さなら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  ファーストアートメイク
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  全国27院（銀座本院・新宿・大阪・福岡など）で通いやすい
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  通常メニューとモニター価格（2回計88,000円〜）を選べる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  クリーム麻酔0円・初診料0円
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  「エアリーブロウ」のふんわり×リアル毛並み
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                関西圏以外にお住まいの方、写真掲載なしの通常メニューも検討したい方に向いています
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-300 rounded-2xl p-8">
              <div className="text-center mb-4">
                <span className="inline-block bg-rose-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
                  大阪在住・価格重視なら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  トゥルーデザインクリニック
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  眉2回コース40,000円〜（4Dでも70,000円）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  リップ・アイライン・ヘアラインまで料金を明示
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  初診料0円・指名料1,500円と諸費用が低額
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  心斎橋駅徒歩約5分・LINE予約対応
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                大阪在住で費用を抑えたい方に有力。施術前後写真の掲載条件付き料金の点は要確認
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
            ファーストアートメイクとトゥルーデザインクリニックを10の観点で徹底比較
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="p-4 text-left rounded-tl-xl min-w-[120px]">
                    比較項目
                  </th>
                  <th className="p-4 text-center min-w-[200px]">
                    ファーストアートメイク
                  </th>
                  <th className="p-4 text-center min-w-[200px]">
                    トゥルーデザイン
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
                      className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === "first" ? "bg-amber-50 font-semibold text-amber-700" : "text-gray-700"}`}
                    >
                      {item.first}
                    </td>
                    <td
                      className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === "trueDesign" ? "bg-rose-50 font-semibold text-rose-700" : "text-gray-700"}`}
                    >
                      {item.trueDesign}
                    </td>
                    <td className="p-4 text-center">
                      {item.winner === "first" && (
                        <span className="inline-block bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          FA
                        </span>
                      )}
                      {item.winner === "trueDesign" && (
                        <span className="inline-block bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          TD
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
              FA = ファーストアートメイク優位
            </span>
            <span>
              <span className="inline-block w-3 h-3 bg-rose-500 rounded-full mr-1 align-middle" />
              TD = トゥルーデザイン優位
            </span>
            <span>
              <span className="inline-block w-3 h-3 bg-gray-400 rounded-full mr-1 align-middle" />
              引分 = ほぼ同等
            </span>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            出典: 各クリニック公式サイト（2026年6月12日確認）。最新料金は公式サイトでご確認ください。
            <br />
            ファーストアートメイクの眉料金は銀座本院のものです。モニター価格は条件・ランク・曜日により異なります。
          </p>
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
                      className={`text-xs font-bold px-3 py-1 rounded-full ${item.winner === "first" ? "bg-amber-100 text-amber-600" : "bg-rose-100 text-rose-600"}`}
                    >
                      {item.winner === "first"
                        ? "ファーストアートメイク優位"
                        : "トゥルーデザイン優位"}
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
                    className={`rounded-lg p-4 ${item.winner === "first" ? "bg-amber-50 border border-amber-200" : "bg-white border border-gray-200"}`}
                  >
                    <p className="text-xs font-bold text-amber-500 mb-1">
                      ファーストアートメイク
                    </p>
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {item.first}
                    </p>
                  </div>
                  <div
                    className={`rounded-lg p-4 ${item.winner === "trueDesign" ? "bg-rose-50 border border-rose-200" : "bg-white border border-gray-200"}`}
                  >
                    <p className="text-xs font-bold text-rose-500 mb-1">
                      トゥルーデザインクリニック
                    </p>
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {item.trueDesign}
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
                  ファーストアートメイク向き
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "東京・横浜・札幌・仙台・名古屋・広島・福岡など全国で通いたい",
                  "写真掲載なしの通常メニューも選択肢に入れたい",
                  "モニター2回コース（計88,000円〜）でお得に受けたい",
                  "クリーム麻酔0円で痛み対策の費用を抑えたい",
                  "「エアリーブロウ」のふんわり×リアル毛並みが好み",
                  "引っ越し・転勤の可能性があり多店舗展開が安心",
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
                <Link href="/review/first-artmake/" className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-lg font-bold transition-colors">
                  ファーストアートメイクの口コミ・評判を見る
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-6">
                <span className="inline-block bg-rose-500 text-white text-lg font-bold px-6 py-2 rounded-full">
                  トゥルーデザイン向き
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "大阪・関西在住で心斎橋に通いやすい",
                  "眉2回コースを40,000円〜の価格で受けたい",
                  "リップ・アイライン・ヘアラインの料金も事前に把握したい",
                  "指名料1,500円でアーティストを指名したい",
                  "2D・3D・4Dの方式から自分に合うものを選びたい",
                  "施術前後写真の掲載条件（実質モニター型）に抵抗がない",
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
                <Link href="/review/true-design/" className="block w-full text-center bg-rose-500 hover:bg-rose-600 text-white py-4 rounded-lg font-bold transition-colors">
                  トゥルーデザインの口コミ・評判を見る
                </Link>
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
            ファーストアートメイクとトゥルーデザインクリニックの比較で多い質問
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
      <Link href="/review/first-artmake/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">ファーストアートメイクの口コミ・評判</p>
      </Link>
      <Link href="/review/true-design/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">トゥルーデザインクリニックの口コミ・評判</p>
      </Link>
      <Link href="/review/dazzy/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">デイジークリニックの口コミ・評判</p>
      </Link>
      <Link href="/compare/dazzy-vs-true-design/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">デイジー vs トゥルーデザイン比較</p>
      </Link>
      <Link href="/compare/dazzy-vs-firstartmake/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">デイジー vs ファーストアートメイク比較</p>
      </Link>
      <Link href="/compare/true-design-vs-creage/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">トゥルーデザイン vs クレアージュ比較</p>
      </Link>
      <Link href="/area/osaka/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">エリア</span>
        <p className="font-semibold mt-1">大阪のアートメイクおすすめクリニック</p>
      </Link>
      <Link href="/compare/price/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">アートメイク料金比較表</p>
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
            まずはカウンセリングで仕上がりイメージと料金条件を確認しましょう
          </p>
          <p className="text-sm mb-10 opacity-75">
            全国27院の通いやすさならファーストアートメイク、大阪在住で価格重視ならトゥルーデザイン
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/review/first-artmake/" className="bg-white text-amber-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              ファーストアートメイクの詳細を見る
            </Link>
            <Link href="/review/true-design/" className="bg-white/20 backdrop-blur text-white border-2 border-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors shadow-lg">
              トゥルーデザインの詳細を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}

      <div className="max-w-4xl mx-auto px-4">
        <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "ファーストアートメイクとトゥルーデザインクリニックどっちがいい？料金・店舗数・施術方式を徹底比較", description: "ファーストアートメイクとトゥルーデザインクリニックを料金・店舗数・施術方式の10項目で徹底比較。", datePublished: "2026-06-12", dateModified: "2026-06-12", author: { "@type": "Person", name: "佐藤 美咲" }, publisher: { "@type": "Organization", name: "アートメイク比較ナビ", url: "https://artmake-hikaku.com/" }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://artmake-hikaku.com/compare/firstartmake-vs-true-design/" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "ファーストアートメイク vs トゥルーデザインクリニック", "item": "https://artmake-hikaku.com/compare/firstartmake-vs-true-design/"}]}) }} />
    </main>
  );
}
