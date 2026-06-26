import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title:
    "クレアージュとデイジークリニックどっちがいい？【2026年6月】料金・店舗数・施術方式を徹底比較",
  description:
    "【2026年6月最新】クレアージュとデイジークリニックの眉アートメイクを10項目で徹底比較。眉・リップ・アイラインの料金（1回あたり換算）・施術回数・院数・予約方法まで結論付き。3回かけて自然に仕上げたいならクレアージュ、2回で早く完成させたいならデイジー。",
  keywords:
    "クレアージュ デイジークリニック どっち, クレアージュ デイジー 比較, アートメイク 比較, クレアージュ アートメイク, デイジークリニック アートメイク",
  openGraph: {
    title: "クレアージュとデイジークリニックどっちがいい？【2026年6月】徹底比較",
    description:
      "クレアージュとデイジークリニックを料金・施術回数・院数など10項目で徹底比較。",
    type: "article",
  },
};

const comparisonItems = [
  {
    label: "眉の料金（1回あたり換算）",
    creage: "パウダーグラデーション\n初回132,000円（3回分）\n＝1回あたり44,000円",
    dazzy: "Natural Brow 2回93,800円\n＝1回あたり46,900円\n（1回のみは55,000円）",
    winner: "creage",
    detail:
      "クレアージュは3回セット、デイジーは2回セットが基本のため、公平に「1回あたり換算」で比較すると、クレアージュのパウダーグラデーションが44,000円/回、デイジーのNatural Browが46,900円/回と、わずかにクレアージュが安くなります。デイジーは1回のみ（55,000円）も選べる柔軟さがあり、人気のdazzy Browは2回113,800円（56,900円/回）です。なおデイジーは公式サイト内のページにより金額表記に差があるため、院・時期により異なる場合があります。最新は公式サイトでご確認ください。",
  },
  {
    label: "リップの料金",
    creage: "初回198,000円（3回分）\n＝1回あたり66,000円",
    dazzy: "dazzy Lip 2回120,000円\n＝1回あたり60,000円\n（1回のみは77,000円）",
    winner: "dazzy",
    detail:
      "リップアートメイクを1回あたり換算で比べると、デイジーのdazzy Lipが60,000円/回、クレアージュが66,000円/回でデイジーがやや割安です。総額でもデイジーは2回120,000円に対し、クレアージュは3回198,000円。ただしクレアージュは3回かけて色味を段階的に調整する設計のため、単純な金額だけでなく仕上げ方の違いも考慮して選びましょう。デイジーの料金は院・時期により異なる場合があるため、最新は公式サイトでご確認ください。",
  },
  {
    label: "アイラインの料金",
    creage: "上：初回99,000円（3回分）\n＝1回あたり33,000円",
    dazzy: "上2回95,000円（47,500円/回）\n下2回80,000円\n上下セット2回125,000円",
    winner: "creage",
    detail:
      "アイライン上を1回あたり換算で比較すると、クレアージュが33,000円/回、デイジーが47,500円/回でクレアージュが割安です。一方デイジーは下アイライン（2回80,000円）や上下セット（2回125,000円）などメニューの幅が広いのが特徴。下まぶたや上下まとめて入れたい方はデイジーの選択肢が豊富です。デイジーの金額は院・時期により異なる場合があるため、公式サイトで最新をご確認ください。",
  },
  {
    label: "施術回数の設計",
    creage: "3回セットが基本\n（1回目は薄め→複数回で調整）",
    dazzy: "2回セットが基本\n（1回のみも選択可）",
    winner: "creage",
    detail:
      "クレアージュは業界では珍しい3回セット構成を採用。1回目はあえて薄めに入れ、2回目・3回目で色味や形を調整していく設計のため、「いきなり濃くなりすぎる」失敗が起きにくいのが特徴です。デイジーは2回セットが基本で、1回のみの施術も選べるため、短期間で完成させたい方やまず試したい方に向いています。じっくり丁寧に仕上げたいならクレアージュが優位です。",
  },
  {
    label: "施術方式・メニュー",
    creage: "パウダーグラデーション\nマイクロブレーディング\nコンビネーション（165,000円/3回）",
    dazzy: "dazzy Brow（人気No.1）\nNatural Brow / Powder Brow",
    winner: "draw",
    detail:
      "クレアージュはパウダーグラデーション・マイクロブレーディング（各132,000円/3回）・コンビネーション（165,000円/3回）の3方式から選択可能。デイジーはナチュラルとパウダーを組み合わせた「dazzy Brow」が公式で人気No.1とされるメニューで、ほかにNatural Brow・Powder Browがあります。どちらも毛並み・パウダー・組み合わせの選択肢が揃っており、方式の幅はほぼ同等です。",
  },
  {
    label: "指名料",
    creage: "公式記載なし\n（要確認）",
    dazzy: "22,000円〜\n（スタッフにより異なる）",
    winner: "draw",
    detail:
      "デイジーは指名料が22,000円〜とスタッフによって設定されており、指名する場合は施術料金に上乗せされます。クレアージュは指名料について公式サイトに記載がないため、指名を希望する場合はカウンセリング時に確認しましょう。両院とも詳細は公式サイト・カウンセリングでご確認ください。",
  },
  {
    label: "展開エリア（院数）",
    creage: "全国5院\n（東京・大阪・名古屋・福岡・札幌）",
    dazzy: "3院\n（新宿本院・札幌・福岡天神）",
    winner: "creage",
    detail:
      "クレアージュは東京・大阪・名古屋・福岡・札幌の全国5院、デイジーは新宿本院・札幌・福岡天神の3院体制です（公式記載。旧・大阪心斎橋院は別ブランドに改称済み）。大阪・名古屋で通うならクレアージュ、新宿・天神など繁華街アクセス重視ならデイジーが便利です。",
  },
  {
    label: "モニター制度",
    creage: "眉モニター（全顔）あり\n札幌/大阪/福岡105,600円\n名古屋92,400円",
    dazzy: "公式で未確認",
    winner: "creage",
    detail:
      "クレアージュは札幌・大阪・福岡（105,600円）、名古屋（92,400円）で全顔写真のモニター制度があり、通常より費用を抑えられます。デイジーのモニター割引は公式サイトで確認できませんでした。モニター希望の方はクレアージュの対象院をチェックするのがおすすめです（東京は対象外の点に注意）。",
  },
  {
    label: "初診料・諸費用",
    creage: "初診料3,300円\n（麻酔代は公式記載なし）",
    dazzy: "初診料・麻酔代とも\n公式で未確認",
    winner: "draw",
    detail:
      "クレアージュは初診料3,300円が明記されています。麻酔代については公式記載が確認できませんでした。デイジーは初診料・麻酔代とも公式サイトで確認できなかったため、カウンセリング時に総額を確認するのが確実です。施術料金以外の諸費用は、両院とも事前に公式サイト・カウンセリングでご確認ください。",
  },
  {
    label: "予約方法",
    creage: "Web・電話・LINE",
    dazzy: "電話・Web",
    winner: "creage",
    detail:
      "クレアージュはWeb・電話に加えてLINEからも予約でき、予約手段の幅が広いのが便利です。デイジーは電話・Webでの予約に対応しています。日常的にLINEで完結させたい方にはクレアージュが手軽です。",
  },
];

const faqs = [
  {
    q: "クレアージュとデイジークリニック、眉アートメイクの料金はどっちが安い？",
    a: "1回あたり換算では、クレアージュのパウダーグラデーションが44,000円/回（3回セット132,000円）、デイジーのNatural Browが46,900円/回（2回セット93,800円）で、わずかにクレアージュが安い計算です。ただし総額ではデイジーの2回93,800円の方が低く、初期費用を抑えたい方はデイジーが選びやすいです。デイジーの料金は院・時期により異なる場合があるため、最新は公式サイトでご確認ください。",
  },
  {
    q: "3回セットと2回セット、どちらを選ぶべき？",
    a: "クレアージュの3回セットは、1回目を薄めに入れて2回目・3回目で調整する設計のため、「濃くなりすぎた」という失敗が起きにくく、自然な仕上がりを重視する方に向いています。デイジーの2回セットは完成までの期間が短く、通院回数を減らしたい方や早く仕上げたい方に向いています。重視するポイントで選びましょう。",
  },
  {
    q: "リップアートメイクならどっちがおすすめ？",
    a: "1回あたり換算ではデイジーのdazzy Lip（2回120,000円＝60,000円/回）の方が、クレアージュ（3回198,000円＝66,000円/回）より割安です。総額でもデイジーが低く抑えられます。一方、色味を複数回かけて慎重に調整したい方はクレアージュの3回設計が安心材料になります。",
  },
  {
    q: "クレアージュとデイジー、通いやすいのはどっち？",
    a: "クレアージュは東京・大阪・名古屋・福岡・札幌の全国5院、デイジーは新宿本院・札幌・福岡天神の3院です（旧・大阪心斎橋院はDAILY SKIN CLINICに改称）。大阪・名古屋ならクレアージュ、新宿・天神の繁華街アクセス重視ならデイジーが便利です。札幌・福岡は両院がカバーしています。",
  },
  {
    q: "施術者やクリニックの体制に違いはある？",
    a: "クレアージュは施術者全員が看護師資格を保有し、皮膚科医歴45年の医師が在籍していると公式サイトに記載されています。デイジーも医療機関としてアートメイクを提供していますが、体制の詳細は公式サイトでご確認ください。医療アートメイクは医療行為のため、どちらを選ぶ場合もカウンセリングでリスクや経過について十分に説明を受けることが大切です。",
  },
];

export default function CreageVsDazzyPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "比較" }, { name: "クレアージュ vs デイジークリニック" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3 tracking-wide">
            2026年6月最新
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            クレアージュ vs デイジークリニック
            <br />
            <span className="text-rose-500">徹底比較</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            眉毛アートメイクで人気の2院を10項目で比較。
            <br className="hidden md:block" />
            料金（1回あたり換算）・施術回数・院数まで、どっちが自分に合うか丸わかり。
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
                  自然さ重視・じっくり仕上げたいなら
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
                  眉は1回あたり44,000円換算でデイジーよりやや割安
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  施術者は全員看護師資格保有・皮膚科医歴45年の医師が在籍（公式記載）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  全国5院＋札幌/大阪/名古屋/福岡はモニター制度あり
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                濃くなりすぎる失敗を避けたい方、複数回かけて自然に仕上げたい方、名古屋で受けたい方に最適
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-300 rounded-2xl p-8">
              <div className="text-center mb-4">
                <span className="inline-block bg-rose-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
                  短期間で完成・リップ重視なら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  デイジークリニック
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  2回セット基本＋1回のみも選べる柔軟さ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  リップは1回あたり60,000円換算でクレアージュより割安
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  ナチュラル＋パウダーの「dazzy Brow」が人気No.1メニュー
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  下アイライン・上下セットなどアイラインの選択肢が豊富
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                通院回数を抑えて早く完成させたい方、リップやアイライン下も入れたい方、新宿・札幌・天神で受けたい方に最適
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
            クレアージュとデイジークリニックを10の観点で徹底比較
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
                    デイジークリニック
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
                      className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === "dazzy" ? "bg-rose-50 font-semibold text-rose-700" : "text-gray-700"}`}
                    >
                      {item.dazzy}
                    </td>
                    <td className="p-4 text-center">
                      {item.winner === "creage" && (
                        <span className="inline-block bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          CRE
                        </span>
                      )}
                      {item.winner === "dazzy" && (
                        <span className="inline-block bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          DZ
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
              DZ = デイジークリニック優位
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
              ※クレアージュは3回セット、デイジークリニックは2回セットが基本のため、公平を期して「1回あたり換算」を併記しています。
            </p>
            <p className="mt-2">
              ※デイジークリニックは公式サイト内のページにより金額表記に差があり、院・時期により異なる場合があります。最新は公式サイトで必ずご確認ください。
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
                        : "デイジークリニック優位"}
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
                    className={`rounded-lg p-4 ${item.winner === "dazzy" ? "bg-rose-50 border border-rose-200" : "bg-white border border-gray-200"}`}
                  >
                    <p className="text-xs font-bold text-rose-500 mb-1">
                      デイジークリニック
                    </p>
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {item.dazzy}
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
                  "眉の1回あたり料金を抑えたい（44,000円/回換算）",
                  "アイライン上を1回あたり割安に受けたい",
                  "看護師資格保有の施術者・医師在籍の体制を重視したい",
                  "札幌・大阪・名古屋・福岡のモニター制度を活用したい",
                  "LINEで気軽に予約したい",
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
                  デイジークリニック向き
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "2回で短期間に完成させたい",
                  "まず1回だけ試してみたい（Natural Brow 1回55,000円）",
                  "人気No.1メニュー「dazzy Brow」を受けてみたい",
                  "リップを1回あたり割安に受けたい（60,000円/回換算）",
                  "下アイライン・上下セットも検討したい",
                  "新宿・すすきの・天神など繁華街アクセスを重視したい",
                  "総額（初期費用）を抑えてスタートしたい",
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
                  デイジークリニック 公式サイト
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
            クレアージュとデイジークリニックの比較で多い質問
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
      <Link href="/review/dazzy/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">デイジークリニックの口コミ・評判</p>
      </Link>
      <Link href="/review/first-artmake/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">ファーストアートメイクの口コミ・評判</p>
      </Link>
      <Link href="/compare/creage-vs-medicalbrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">クレアージュ vs メディカルブロー比較</p>
      </Link>
      <Link href="/compare/creage-vs-firstartmake/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">クレアージュ vs ファーストアートメイク比較</p>
      </Link>
      <Link href="/compare/medicalbrow-vs-dazzy/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">メディカルブロー vs デイジー比較</p>
      </Link>
      <Link href="/compare/dazzy-vs-firstartmake/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">デイジー vs ファーストアートメイク比較</p>
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
            まずはカウンセリングで仕上がりイメージを確認しましょう
          </p>
          <p className="text-sm mb-10 opacity-75">
            3回かけて自然に仕上げたいならクレアージュ、2回で早く完成・リップ重視ならデイジークリニック
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              クレアージュ 公式サイト
            </button>
            <button className="bg-white/20 backdrop-blur text-white border-2 border-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors shadow-lg">
              デイジークリニック 公式サイト
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}

      <div className="max-w-4xl mx-auto px-4">
              <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 border border-[var(--gold-light)] text-center">
          <h2 className="text-xl font-bold mb-4">公式サイトで予約・詳細を確認</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://t.felmat.net/fmcl?ak=E5617B.1.A96263G.G135747X" target="_blank" rel="sponsored noopener noreferrer" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">クレアージュ公式へ →</a>
            <a href="https://t.felmat.net/fmcl?ak=M4536K.1.297497C.G135747X" target="_blank" rel="sponsored noopener noreferrer" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">デイジークリニック公式へ →</a>
          </div>
        </div>
      </section>
      <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "クレアージュ vs デイジークリニック", "item": "https://artmake-hikaku.com/compare/creage-vs-dazzy/"}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "クレアージュとデイジークリニックどっちがいい？【2026年6月】料金・店舗数・施術方式を徹底比較", datePublished: "2026-06-12", dateModified: "2026-06-12", author: { "@type": "Organization", name: "アートメイク比較ナビ編集部" }, publisher: { "@type": "Organization", name: "アートメイク比較ナビ" }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://artmake-hikaku.com/compare/creage-vs-dazzy/" } }) }} />
    </main>
  );
}
