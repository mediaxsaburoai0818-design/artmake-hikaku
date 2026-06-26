import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title:
    "デイジークリニックとトゥルーデザインクリニックどっちがいい？【2026年6月】料金・店舗数・施術方式を徹底比較",
  description:
    "【2026年6月最新】デイジークリニックとトゥルーデザインクリニックを10項目で徹底比較。眉・リップ・アイラインの料金、施術方式、店舗数、大阪・心斎橋でのアクセスまで。大阪で受けるならトゥルーデザイン（デイジーの旧心斎橋院は改称済み）、東京・札幌・福岡ならデイジーも選択肢。",
  keywords:
    "デイジークリニック トゥルーデザイン どっち, デイジークリニック トゥルーデザイン 比較, アートメイク 大阪 比較, デイジークリニック アートメイク, トゥルーデザインクリニック アートメイク",
  openGraph: {
    title: "デイジークリニック vs トゥルーデザインクリニック 徹底比較【2026年6月】",
    description: "デイジークリニックとトゥルーデザインクリニックを料金・店舗数・施術方式の10項目で徹底比較。",
    type: "article",
  },
};

const comparisonItems = [
  {
    label: "料金（眉2回）",
    dazzy: "Natural Brow 2回 93,800円\ndazzy Brow 2回 113,800円\nPowder Brow 2回 113,800円\n※院・時期により異なる場合あり",
    trueDesign: "2Dパウダー 2回 40,000円\n3D毛並み 2回 60,000円\n4D（パウダー×毛並み）2回 70,000円",
    winner: "trueDesign",
    detail:
      "眉2回コースの価格はトゥルーデザインが大きくリードしています。最上位の4D（パウダー×毛並み）でも2回70,000円で、デイジーのNatural Brow 2回93,800円より安価です。ただしトゥルーデザインの料金は、施術前後の写真をSNS等に掲載する条件付きの料金設定（実質モニター型価格）である点に注意が必要です。デイジーは公式サイト内のページにより金額表記に差があるため、最新料金は必ず公式サイトでご確認ください。",
  },
  {
    label: "料金（リップ）",
    dazzy: "dazzy Lip 2回 120,000円\n（1回 77,000円）\n※院・時期により異なる場合あり",
    trueDesign: "リップ 2回 80,000円",
    winner: "trueDesign",
    detail:
      "リップアートメイクもトゥルーデザインが2回80,000円と、デイジーのdazzy Lip 2回120,000円より40,000円安い設定です。トゥルーデザインは全て税込表記で、施術前後写真の掲載条件付き料金である点は眉と同様です。デイジーのリップは1回77,000円の単発プランも用意されています。",
  },
  {
    label: "料金（アイライン）",
    dazzy: "上 2回 95,000円\n下 2回 80,000円\n上下 2回 125,000円\n※院・時期により異なる場合あり",
    trueDesign: "アイライン 2回 70,000円",
    winner: "trueDesign",
    detail:
      "アイラインもトゥルーデザインが2回70,000円とリーズナブルです。デイジーは上・下・上下セットとプランが細かく分かれており、上下セットなら2回125,000円。部位を細かく選びたい方はデイジー、シンプルな料金で受けたい方はトゥルーデザインが選びやすいでしょう。",
  },
  {
    label: "施術方式",
    dazzy: "dazzy brow\n（ナチュラル＋パウダーの\n組み合わせ・人気No.1メニュー）",
    trueDesign: "2D（パウダー調）\n3D（1本1本手彫り）\n4D（パウダー＋手彫り）",
    winner: "draw",
    detail:
      "デイジーの看板メニュー「dazzy brow」は、ナチュラルな毛並みとパウダーを組み合わせた人気No.1メニュー（公式表現）です。トゥルーデザインは2D（パウダー調）・3D（1本1本手彫りの毛並み）・4D（パウダー＋手彫りの組み合わせ）の3方式から選べます。どちらも毛並み＋パウダーの組み合わせ施術に対応しており、方式の選択肢はほぼ同等と言えます。",
  },
  {
    label: "初診料・麻酔代",
    dazzy: "初診料・麻酔代は公式で未確認\n（公式サイトでご確認ください）",
    trueDesign: "初診料 0円\n再診料 1,500円\n麻酔 3,000円（ピコレーザー施術時）",
    winner: "trueDesign",
    detail:
      "トゥルーデザインは初診料0円・再診料1,500円・麻酔3,000円（ピコレーザー施術時）と諸費用を公式サイトで明示しており、料金の透明性が高いです。デイジーの初診料・麻酔代は公式サイトで確認できなかったため、カウンセリング時または公式サイトでご確認ください。",
  },
  {
    label: "指名料",
    dazzy: "22,000円〜\n（スタッフによる）",
    trueDesign: "1回 1,500円",
    winner: "trueDesign",
    detail:
      "指名料はトゥルーデザインが1回1,500円と低額です。デイジーはスタッフによって22,000円〜となっており、人気アーティストを指名する場合は総額が大きく変わる可能性があります。指名にこだわらない場合はどちらも追加費用なしで受けられますが、指名料込みの総額で比較する際は注意しましょう。",
  },
  {
    label: "店舗数・展開エリア",
    dazzy: "3院\n（新宿本院・札幌・福岡天神）",
    trueDesign: "大阪・心斎橋の1院のみ\n（西心斎橋1-5-5）",
    winner: "dazzy",
    detail:
      "デイジーは新宿本院・札幌・福岡天神の3院体制です（公式サイトに2025年2月現在3院体制と記載。旧・大阪心斎橋院は別ブランド「DAILY SKIN CLINIC」に改称されており、デイジーのアートメイクは大阪では受けられません）。したがって大阪・心斎橋でアートメイクを受けるなら、現在も心斎橋に院を構えるトゥルーデザインが選択肢になります。",
  },
  {
    label: "大阪でのアクセス",
    dazzy: "大阪心斎橋院あり",
    trueDesign: "心斎橋駅から徒歩約5分\n（西心斎橋1-5-5）",
    winner: "draw",
    detail:
      "実は両クリニックとも大阪・心斎橋エリアに院を構えています。「大阪でアートメイクを受けたい」という方は、心斎橋で2院を比較検討できる恵まれた立地です。トゥルーデザインは心斎橋駅から徒歩約5分。どちらもカウンセリングを受けてから決めるのがおすすめです。",
  },
  {
    label: "料金の条件",
    dazzy: "通常価格メニュー\n（写真掲載などの条件なしで\n公式記載の価格）",
    trueDesign: "施術前後写真をSNS等に\n掲載する条件の料金設定\n（実質モニター型価格）",
    winner: "dazzy",
    detail:
      "トゥルーデザインの低価格は、施術前後の写真をSNS等に掲載することが条件の料金設定（実質モニター型価格）です。症例写真の掲載に抵抗がある方は事前に条件の詳細を確認しましょう。デイジーの公式記載価格は写真掲載条件のない通常メニューです（モニター割引の有無は公式で未確認）。条件なしで受けたい方にはデイジーが選びやすいです。",
  },
  {
    label: "予約方法",
    dazzy: "電話・Web",
    trueDesign: "電話・Web・LINE",
    winner: "trueDesign",
    detail:
      "トゥルーデザインは電話・Webに加えてLINE予約に対応しており、気軽に問い合わせ・予約ができます。デイジーは電話・Webからの予約に対応しています。LINEで相談しながら予約したい方にはトゥルーデザインが便利です。",
  },
];

const faqs = [
  {
    q: "大阪でアートメイクを受けるなら、デイジーとトゥルーデザインどっちがいい？",
    a: "両クリニックとも大阪・心斎橋エリアに院があります。価格重視なら眉2回40,000円〜のトゥルーデザイン（心斎橋駅徒歩約5分）が有力候補です。ただしトゥルーデザインの料金は施術前後写真をSNS等に掲載する条件付きのため、写真掲載に抵抗がある方は通常価格メニューのデイジー大阪心斎橋院が選びやすいでしょう。どちらもカウンセリングで仕上がりイメージや条件を確認してから決めるのがおすすめです。",
  },
  {
    q: "眉アートメイクの総額が安いのはどっち？",
    a: "公式記載の眉2回コースで比較すると、トゥルーデザインは2Dパウダー40,000円・3D毛並み60,000円・4D70,000円、デイジーはNatural Brow 93,800円・dazzy Brow 113,800円で、トゥルーデザインが安価です。ただしトゥルーデザインは施術前後写真の掲載条件付き料金、デイジーは指名する場合に指名料22,000円〜がかかる点など、条件込みの総額で比較してください。最新料金は各公式サイトでご確認ください。",
  },
  {
    q: "トゥルーデザインクリニックの料金が安い理由は？",
    a: "トゥルーデザインの料金は、施術前後の写真をSNS等に掲載することを条件とした料金設定（実質モニター型価格）です。全て税込表記で、初診料0円・指名料1回1,500円など諸費用も低めに設定されています。写真掲載の範囲や条件の詳細は、カウンセリング時に必ず確認しましょう。",
  },
  {
    q: "デイジークリニックの料金は院によって違う？",
    a: "デイジーの公式サイト内では、ページにより金額表記に差があるケースが確認されています。本記事では新宿本院ページの料金（2026年6月12日確認）を掲載していますが、院・時期により異なる場合があるため、受診予定の院の最新料金は必ず公式サイトまたはカウンセリングでご確認ください。",
  },
  {
    q: "東京・札幌・福岡在住の場合はどっちを選ぶべき？",
    a: "トゥルーデザインは大阪・心斎橋の1院のみのため、関西圏以外にお住まいの方はデイジー（新宿本院・札幌・福岡天神・大阪心斎橋の4院）が現実的な選択肢です。アートメイクは2回の施術とリタッチで複数回通院するのが一般的なので、無理なく通える立地のクリニックを選ぶことが大切です。",
  },
];

export default function DazzyVsTrueDesignPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "比較" }, { name: "デイジークリニック vs トゥルーデザインクリニック" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3 tracking-wide">
            2026年6月最新
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            デイジークリニック vs<br className="md:hidden" /> トゥルーデザインクリニック
            <br />
            <span className="text-rose-500">徹底比較</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            どちらも大阪・心斎橋に院がある人気2院を10項目で比較。
            <br className="hidden md:block" />
            料金・施術方式・店舗数まで、どっちが自分に合うか丸わかり。
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
                  全国展開・通常価格メニューなら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  デイジークリニック
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  新宿本院・札幌・福岡天神・大阪心斎橋の全国4院
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  人気No.1メニュー「dazzy brow」（ナチュラル＋パウダー）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  公式記載価格は写真掲載条件のない通常メニュー
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  アイラインは上・下・上下とプランを細かく選べる
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                関西圏以外にお住まいの方、症例写真の掲載なしで受けたい方に向いています
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
                  初診料0円・指名料1,500円と諸費用が明確
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  2D・3D・4Dの3方式から選べる
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
            デイジークリニックとトゥルーデザインクリニックを10の観点で徹底比較
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="p-4 text-left rounded-tl-xl min-w-[120px]">
                    比較項目
                  </th>
                  <th className="p-4 text-center min-w-[200px]">
                    デイジークリニック
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
                      className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === "dazzy" ? "bg-amber-50 font-semibold text-amber-700" : "text-gray-700"}`}
                    >
                      {item.dazzy}
                    </td>
                    <td
                      className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === "trueDesign" ? "bg-rose-50 font-semibold text-rose-700" : "text-gray-700"}`}
                    >
                      {item.trueDesign}
                    </td>
                    <td className="p-4 text-center">
                      {item.winner === "dazzy" && (
                        <span className="inline-block bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          DZ
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
              DZ = デイジー優位
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
            デイジークリニックは公式サイト内のページにより金額表記に差があるため、院・時期により異なる場合があります。
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
                      className={`text-xs font-bold px-3 py-1 rounded-full ${item.winner === "dazzy" ? "bg-amber-100 text-amber-600" : "bg-rose-100 text-rose-600"}`}
                    >
                      {item.winner === "dazzy"
                        ? "デイジー優位"
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
                    className={`rounded-lg p-4 ${item.winner === "dazzy" ? "bg-amber-50 border border-amber-200" : "bg-white border border-gray-200"}`}
                  >
                    <p className="text-xs font-bold text-amber-500 mb-1">
                      デイジークリニック
                    </p>
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {item.dazzy}
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
                  デイジー向き
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "東京・札幌・福岡など関西圏以外に住んでいる",
                  "人気No.1メニュー「dazzy brow」を受けてみたい",
                  "症例写真の掲載条件なしの通常メニューが良い",
                  "アイラインを上・下・上下から細かく選びたい",
                  "全国4院展開の知名度あるクリニックが安心",
                  "1回プランから試したい（Natural Brow 1回55,000円）",
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
                <Link href="/review/dazzy/" className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-lg font-bold transition-colors">
                  デイジーの口コミ・評判を見る
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
                  "大阪・関西在住で通いやすさを重視したい",
                  "眉2回コースを40,000円〜の価格で受けたい",
                  "初診料0円・指名料1,500円など諸費用を明確にしたい",
                  "2D・3D・4Dの方式から自分に合うものを選びたい",
                  "施術前後写真の掲載条件（実質モニター型）に抵抗がない",
                  "LINEで気軽に予約・相談したい",
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
            デイジークリニックとトゥルーデザインクリニックの比較で多い質問
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
      <Link href="/review/dazzy/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">デイジークリニックの口コミ・評判</p>
      </Link>
      <Link href="/review/true-design/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">トゥルーデザインクリニックの口コミ・評判</p>
      </Link>
      <Link href="/compare/firstartmake-vs-true-design/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">ファーストアートメイク vs トゥルーデザイン比較</p>
      </Link>
      <Link href="/compare/dazzy-vs-firstartmake/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">デイジー vs ファーストアートメイク比較</p>
      </Link>
      <Link href="/compare/true-design-vs-creage/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">トゥルーデザイン vs クレアージュ比較</p>
      </Link>
      <Link href="/compare/medicalbrow-vs-dazzy/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">メディカルブロー vs デイジー比較</p>
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
            全国展開・通常価格メニューならデイジー、大阪在住で価格重視ならトゥルーデザイン
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/review/dazzy/" className="bg-white text-amber-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              デイジーの詳細を見る
            </Link>
            <Link href="/review/true-design/" className="bg-white/20 backdrop-blur text-white border-2 border-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors shadow-lg">
              トゥルーデザインの詳細を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}

      <div className="max-w-4xl mx-auto px-4">
              <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 border border-[var(--gold-light)] text-center">
          <h2 className="text-xl font-bold mb-4">公式サイトで予約・詳細を確認</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://t.felmat.net/fmcl?ak=M4536K.1.297497C.G135747X" target="_blank" rel="sponsored noopener noreferrer" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">デイジークリニック公式へ →</a>
          </div>
        </div>
      </section>
      <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "デイジークリニックとトゥルーデザインクリニックどっちがいい？料金・店舗数・施術方式を徹底比較", description: "デイジークリニックとトゥルーデザインクリニックを料金・店舗数・施術方式の10項目で徹底比較。", datePublished: "2026-06-12", dateModified: "2026-06-12", author: { "@type": "Person", name: "佐藤 美咲" }, publisher: { "@type": "Organization", name: "アートメイク比較ナビ", url: "https://artmake-hikaku.com/" }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://artmake-hikaku.com/compare/dazzy-vs-true-design/" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "デイジークリニック vs トゥルーデザインクリニック", "item": "https://artmake-hikaku.com/compare/dazzy-vs-true-design/"}]}) }} />
    </main>
  );
}
