import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";
import AuthorBox from '@/components/AuthorBox'
import { ThirtySecVerdict, ReviewTrendSection } from '@/components/CompareIntro'
import { clinicData } from '@/lib/clinicData'

export const metadata: Metadata = {
  title:
    "メディカルブローとトゥルーデザインクリニックどっちがいい？【2026年6月】料金・店舗数・施術方式を徹底比較",
  description:
    "【2026年6月最新】メディカルブローとトゥルーデザインクリニックを10項目で徹底比較。眉2回はトゥルーデザイン40,000円〜、メディカルブローは90,000円〜（初回モニター28,000円〜）。店舗数・通いやすさならメディカルブロー、価格重視・大阪在住ならトゥルーデザイン。",
  keywords:
    "メディカルブロー トゥルーデザイン どっち, メディカルブロー トゥルーデザインクリニック 比較, アートメイク 比較, トゥルーデザインクリニック 料金, メディカルブロー 料金",
};

const comparisonItems = [
  {
    label: "料金（眉2回）",
    medical: "2回セット 90,000〜150,000円\n（ランク別）初回モニター28,000円〜",
    rival: "2回コース 40,000〜70,000円\n（2D 40,000円/3D 60,000円/4D 70,000円）",
    winner: "rival",
    detail:
      "眉2回の総額ではトゥルーデザインが優位です。2Dパウダー40,000円・3D毛並み60,000円・4D（パウダー×毛並み）70,000円（いずれも2回コース・税込）に対し、メディカルブローの2回セットは90,000円/110,000円/150,000円のアーティストランク別。ただしメディカルブローには眉初回モニター28,000〜48,000円があり、まず1回試したい場合の入口価格は低めです。なお、トゥルーデザインの料金は施術前後写真をSNS等に掲載する条件付き（実質モニター型価格）である点に注意してください。",
  },
  {
    label: "施術方式",
    medical: "7Dストローク®・ヘアストローク\n（マシンによる毛並み再現）",
    rival: "2D（パウダー調）/3D（手彫り毛並み）\n/4D（パウダー×毛並み）",
    winner: "draw",
    detail:
      "メディカルブローは商標技術「7Dストローク」に加え、マシンで毛並みを描く「ヘアストローク」を展開。トゥルーデザインはパウダー調の2D、1本1本手彫りで毛並みを描く3D、両方を組み合わせる4Dの3方式から選べます。名称は異なりますが、毛並み系・パウダー系・ミックス系という選択肢はどちらにもあり、症例写真を見て好みの仕上がりイメージで選ぶのがおすすめです。仕上がりには個人差があります。",
  },
  {
    label: "リップ料金",
    medical: "1回 55,000円/65,000円\n（モニター40,000〜50,000円）",
    rival: "2回コース 80,000円",
    winner: "rival",
    detail:
      "トゥルーデザインはリップ2回コースで80,000円。メディカルブローは1回55,000円/65,000円（ランク別）のため、2回受けると単純計算で110,000〜130,000円となり、2回完了までの総額ではトゥルーデザインが抑えやすい計算です。メディカルブローのリップモニター価格（1回40,000〜50,000円）を利用できれば差は縮まります。",
  },
  {
    label: "アイライン料金",
    medical: "上2回 60,000〜80,000円\n（ランク別）",
    rival: "2回コース 70,000円",
    winner: "draw",
    detail:
      "アイライン（上）はメディカルブローが2回60,000〜80,000円（ランク別）、トゥルーデザインが2回70,000円。価格帯はほぼ重なっており、大きな差はありません。メディカルブローはランクの選び方次第でトゥルーデザインより安くも高くもなるため、ほぼ同等としました。",
  },
  {
    label: "指名料",
    medical: "10,000〜20,000円\n（アンバサダー35,000円）",
    rival: "1回 1,500円",
    winner: "rival",
    detail:
      "指名料はトゥルーデザインが1回1,500円と低額です。メディカルブローはアーティストランク制で指名料10,000〜20,000円、最上位のアンバサダー指名では35,000円。担当者を指名して受けたい場合の追加費用には大きな差があります。",
  },
  {
    label: "初診料・諸費用",
    medical: "初診料2,200円・再診料1,100円\nカルテ作成料1,100円",
    rival: "初診料0円・再診料1,500円\n麻酔3,000円（ピコレーザー施術時）",
    winner: "rival",
    detail:
      "トゥルーデザインは初診料0円・再診料1,500円・麻酔3,000円（ピコレーザー施術時）と諸費用が明確かつ低額。メディカルブローは初診料2,200円・再診料1,100円・カルテ作成料1,100円がかかります。なお、メディカルブローの麻酔代は公式サイトに記載が見当たらないため、カウンセリング時にご確認ください。",
  },
  {
    label: "割引制度",
    medical: "学割10%・ミドル割（50歳以上）5%\nモニター割5%・複数部位割5〜10%",
    rival: "写真掲載条件の料金設定\n（実質モニター型価格）",
    winner: "medical",
    detail:
      "メディカルブローは学割10%、50歳以上のミドル割5%、モニター割5%、複数部位割（2部位5%/3部位以上10%）と割引メニューが豊富です。トゥルーデザインは個別の割引制度ではなく、施術前後写真をSNS等に掲載する条件で料金全体を抑えた実質モニター型の価格設定。条件に当てはまる割引を活用したい方にはメディカルブローが向いています。",
  },
  {
    label: "店舗数・エリア",
    medical: "全国8院\n（表参道・銀座・新宿・横浜・名古屋・大阪・広島・福岡天神）",
    rival: "大阪・心斎橋の1院のみ\n（心斎橋駅から徒歩約5分）",
    winner: "medical",
    detail:
      "メディカルブローは表参道・銀座・新宿・横浜・名古屋・大阪・広島・福岡天神の全国8院を展開。トゥルーデザインクリニックは大阪・心斎橋（西心斎橋1-5-5）の1院のみで、心斎橋駅から徒歩約5分です。関東・東海・中国・九州エリアの方はメディカルブローが現実的な選択肢となり、通いやすさでは大きな差があります。",
  },
  {
    label: "モニター制度",
    medical: "眉初回モニター28,000〜48,000円\n（ランク別）＋モニター割5%",
    rival: "全メニューが写真掲載条件の料金\n（実質モニター型価格）",
    winner: "draw",
    detail:
      "メディカルブローは眉初回モニター28,000〜48,000円（ランク別）など、部位別のモニター価格を用意しています。トゥルーデザインはそもそも全メニューが施術前後写真の掲載に同意する前提の料金設定で、いわば「全員モニター価格」型。写真掲載に抵抗がない方なら、どちらも通常より抑えた価格で受けられます。掲載条件の詳細は各公式サイトでご確認ください。",
  },
  {
    label: "予約方法",
    medical: "電話・Web",
    rival: "電話・Web・LINE",
    winner: "rival",
    detail:
      "トゥルーデザインは電話・Webに加えてLINEからの予約に対応しています。メディカルブローは電話・Webでの予約です。LINEで気軽に予約・相談したい方にはトゥルーデザインが便利です。",
  },
];

const faqs = [
  {
    q: "メディカルブローとトゥルーデザイン、結局どっちが安い？",
    a: "眉2回の総額ではトゥルーデザインが安く、2Dパウダー40,000円・3D毛並み60,000円・4D 70,000円（いずれも2回コース・税込）です。メディカルブローの2回セットは90,000〜150,000円ですが、眉初回モニターなら1回28,000〜48,000円で試せます。なお、トゥルーデザインの料金は施術前後写真をSNS等に掲載する条件付き（実質モニター型価格）のため、条件を確認したうえで比較しましょう。",
  },
  {
    q: "東京在住ならどっちを選ぶべき？",
    a: "トゥルーデザインクリニックは大阪・心斎橋の1院のみのため、東京在住の方はメディカルブロー（表参道・銀座・新宿など）が現実的です。アートメイクは2回程度の施術と経過確認で複数回通うことが多く、無理なく通える立地を優先するのがおすすめです。",
  },
  {
    q: "大阪在住ならどっちがおすすめ？",
    a: "大阪在住ならどちらも通えます。眉2回40,000円〜の価格重視・指名料1,500円の低コスト重視ならトゥルーデザイン、アーティストランク制から施術者を選びたい方や学割・ミドル割などの割引を使いたい方はメディカルブロー大阪院が候補になります。両院のカウンセリングで仕上がりイメージを比較するのも良い方法です。",
  },
  {
    q: "トゥルーデザインの「写真掲載条件」とは？",
    a: "トゥルーデザインクリニックの料金は、施術前後の写真をSNS等に掲載することに同意する条件での価格設定（実質モニター型価格）です。掲載範囲や条件の詳細は公式サイトおよびカウンセリングでご確認ください。写真掲載に抵抗がある方は、事前に必ず確認しておきましょう。",
  },
  {
    q: "麻酔代はかかる？痛みが心配です。",
    a: "トゥルーデザインは麻酔3,000円（ピコレーザー施術時）と公式に記載されています。メディカルブローは麻酔代の公式記載が見当たらないため、カウンセリング時にご確認ください。どちらも医師・看護師が在籍する医療機関で行う医療アートメイクです。痛みの感じ方には個人差があるため、不安な方はカウンセリングで麻酔の有無・方法を相談しましょう。",
  },
];

export default function MedicalbrowVsTrueDesignPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "比較" }, { name: "メディカルブロー vs トゥルーデザインクリニック" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3 tracking-wide">
            2026年6月最新
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            メディカルブロー vs トゥルーデザインクリニック
            <br />
            <span className="text-rose-500">徹底比較</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            眉毛アートメイクで注目の2院を10項目で比較。
            <br className="hidden md:block" />
            料金・施術方式・店舗数・指名料まで、どっちが自分に合うか丸わかり。
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
        verdict="毛並み感の技法（7Dストローク）・全国8院の通いやすさ・割引制度を重視するならメディカルブロー、大阪（心斎橋）で費用を最優先するならトゥルーデザイン（眉2回40,000円〜・写真掲載条件付き料金）が向いています。通えるエリアと予算で絞り込むのがおすすめです。"
        a={{ name: clinicData.medicalbrow.name, reviewSlug: clinicData.medicalbrow.reviewSlug, totalPrice: clinicData.medicalbrow.totalPrice, suitFor: '毛並み感の技法を求める人、全国8院で通いやすさを重視する人、モニター・割引を活用したい人。' }}
        b={{ name: clinicData.trueDesign.name, reviewSlug: clinicData.trueDesign.reviewSlug, totalPrice: clinicData.trueDesign.totalPrice, suitFor: '大阪・心斎橋で受けられる人、料金を最優先したい人、写真掲載条件付き料金に納得できる人。' }}
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
                  店舗数・通いやすさなら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  メディカルブロー
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  全国8院（表参道・銀座・新宿・横浜・名古屋・大阪・広島・福岡天神）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  7Dストロークとヘアストロークの2方式
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  眉初回モニター28,000円〜で試しやすい
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  学割10%・ミドル割・複数部位割など割引が豊富
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                東京・横浜・名古屋・広島・福岡など大阪以外にお住まいの方、割引制度を活用したい方に最適
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-8">
              <div className="text-center mb-4">
                <span className="inline-block bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
                  価格重視・大阪で受けるなら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  トゥルーデザインクリニック
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  眉2回コース40,000円〜（2D/3D/4Dから選択）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  指名料1回1,500円・初診料0円と諸費用が低額
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  リップ2回80,000円・アイライン2回70,000円
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  心斎橋駅徒歩約5分・LINE予約対応
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                大阪・関西在住で総額を抑えたい方に最適。料金は施術前後写真の掲載条件付き（実質モニター型価格）な点は要確認
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
            メディカルブローとトゥルーデザインクリニックを10の観点で徹底比較
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="p-4 text-left rounded-tl-xl min-w-[120px]">
                    比較項目
                  </th>
                  <th className="p-4 text-center min-w-[200px]">
                    メディカルブロー
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
                      className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === "medical" ? "bg-rose-50 font-semibold text-rose-700" : "text-gray-700"}`}
                    >
                      {item.medical}
                    </td>
                    <td
                      className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === "rival" ? "bg-amber-50 font-semibold text-amber-700" : "text-gray-700"}`}
                    >
                      {item.rival}
                    </td>
                    <td className="p-4 text-center">
                      {item.winner === "medical" && (
                        <span className="inline-block bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          MB
                        </span>
                      )}
                      {item.winner === "rival" && (
                        <span className="inline-block bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
          <div className="mt-4 flex justify-center gap-6 text-xs text-gray-500">
            <span>
              <span className="inline-block w-3 h-3 bg-rose-500 rounded-full mr-1 align-middle" />
              MB = メディカルブロー優位
            </span>
            <span>
              <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mr-1 align-middle" />
              TD = トゥルーデザイン優位
            </span>
            <span>
              <span className="inline-block w-3 h-3 bg-gray-400 rounded-full mr-1 align-middle" />
              引分 = ほぼ同等
            </span>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            出典: 各クリニック公式サイト（2026年6月12日確認）。最新料金は公式サイトでご確認ください。
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
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.label}
                  </h3>
                  {item.winner !== "draw" && (
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${item.winner === "rival" ? "bg-amber-100 text-amber-600" : "bg-rose-100 text-rose-600"}`}
                    >
                      {item.winner === "rival"
                        ? "トゥルーデザイン優位"
                        : "メディカルブロー優位"}
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
                    className={`rounded-lg p-4 ${item.winner === "medical" ? "bg-rose-50 border border-rose-200" : "bg-white border border-gray-200"}`}
                  >
                    <p className="text-xs font-bold text-rose-500 mb-1">
                      メディカルブロー
                    </p>
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {item.medical}
                    </p>
                  </div>
                  <div
                    className={`rounded-lg p-4 ${item.winner === "rival" ? "bg-amber-50 border border-amber-200" : "bg-white border border-gray-200"}`}
                  >
                    <p className="text-xs font-bold text-amber-500 mb-1">
                      トゥルーデザイン
                    </p>
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {item.rival}
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
                  メディカルブロー向き
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "東京・横浜・名古屋・広島・福岡など大阪以外で通いたい",
                  "全国8院から通いやすい院を選びたい",
                  "まず初回モニター28,000円〜で1回試したい",
                  "7Dストローク・ヘアストロークの毛並み技術に興味がある",
                  "学割10%・ミドル割5%・複数部位割を活用したい",
                  "ランク制で施術者の経験値を選んで指名したい",
                  "リップやアイラインのモニター価格も検討したい",
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
                  メディカルブロー 公式サイト
                </button>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-6">
                <span className="inline-block bg-amber-500 text-white text-lg font-bold px-6 py-2 rounded-full">
                  トゥルーデザイン向き
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "大阪・関西在住で心斎橋に通いやすい",
                  "眉2回コースを40,000〜70,000円に抑えたい",
                  "2D/3D/4Dから仕上がりの質感を選びたい",
                  "指名料1,500円・初診料0円で諸費用を抑えたい",
                  "リップ・アイライン・ヘアラインも低価格帯で受けたい",
                  "施術前後写真の掲載条件（実質モニター型価格）に抵抗がない",
                  "LINEで気軽に予約・相談したい",
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
                  トゥルーデザイン 公式サイト
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewTrendSection
        aName={clinicData.medicalbrow.name} bName={clinicData.trueDesign.name}
        aGood={clinicData.medicalbrow.goodTrends} aBad={clinicData.medicalbrow.badTrends}
        bGood={clinicData.trueDesign.goodTrends} bBad={clinicData.trueDesign.badTrends}
        aReviewSlug={clinicData.medicalbrow.reviewSlug} bReviewSlug={clinicData.trueDesign.reviewSlug}
      />

      {/* FAQ */}
      <section className="py-14 px-4 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            よくある質問（FAQ）
          </h2>
          <p className="text-center text-gray-500 mb-10">
            メディカルブローとトゥルーデザインの比較で多い質問
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
      <Link href="/review/medicalbrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">メディカルブローの口コミ・評判</p>
      </Link>
      <Link href="/review/true-design/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">トゥルーデザインクリニックの口コミ・評判</p>
      </Link>
      <Link href="/compare/creage-vs-medicalbrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">クレアージュ vs メディカルブロー比較</p>
      </Link>
      <Link href="/compare/true-design-vs-creage/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">トゥルーデザイン vs クレアージュ比較</p>
      </Link>
      <Link href="/compare/medicalbrow-vs-dazzy/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">メディカルブロー vs デイジー比較</p>
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
            店舗数・通いやすさならメディカルブロー、価格重視・大阪在住ならトゥルーデザインクリニック
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-rose-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              メディカルブロー 公式サイト
            </button>
            <button className="bg-white/20 backdrop-blur text-white border-2 border-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors shadow-lg">
              トゥルーデザイン 公式サイト
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
            <a href="https://t.felmat.net/fmcl?ak=Y4616D.1.683500A.G135747X" target="_blank" rel="sponsored noopener noreferrer" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">メディカルブロー公式へ →</a>
          </div>
        </div>
      </section>
      <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "メディカルブローとトゥルーデザインクリニックどっちがいい？料金・店舗数・施術方式を徹底比較", description: "メディカルブローとトゥルーデザインクリニックを料金・施術方式・店舗数など10項目で比較。", datePublished: "2026-06-12", dateModified: "2026-06-12", author: { "@type": "Person", name: "佐藤 美咲" }, publisher: { "@type": "Organization", name: "アートメイク比較ナビ" }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://artmake-hikaku.com/compare/medicalbrow-vs-true-design/" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "メディカルブロー vs トゥルーデザインクリニック", "item": "https://artmake-hikaku.com/compare/medicalbrow-vs-true-design/"}]}) }} />
    </main>
  );
}
