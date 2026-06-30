import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";
import AuthorBox from '@/components/AuthorBox'
import { ThirtySecVerdict, ReviewTrendSection } from '@/components/CompareIntro'
import { clinicData } from '@/lib/clinicData'

export const metadata: Metadata = {
  title:
    "メディカルブローとファーストアートメイクどっちがいい？【2026年6月】料金・店舗数・施術方式を徹底比較",
  description:
    "【2026年6月最新】メディカルブローとファーストアートメイクを10項目で徹底比較。眉1回はメディカルブロー50,000円〜（初回モニター28,000円〜）、ファーストアートメイクは60,000円〜。全国27院の通いやすさ・麻酔0円ならファーストアートメイク、お試し価格・割引重視ならメディカルブロー。",
  keywords:
    "メディカルブロー ファーストアートメイク どっち, メディカルブロー ファーストアートメイク 比較, アートメイク 比較, ファーストアートメイク 料金, メディカルブロー 料金",
};

const comparisonItems = [
  {
    label: "眉1回料金",
    medical: "50,000〜80,000円\n（ランク別 50,000/60,000/80,000円）",
    rival: "60,000〜80,000円\n（銀座本院・ランク別 60,000/70,000/80,000円）",
    winner: "medical",
    detail:
      "どちらも施術者のランク制を採用しています。メディカルブローはグローバルアーティスト50,000円・マスター60,000円・グランドマスター80,000円。ファーストアートメイクは銀座本院でフレッシュ60,000円・スタンダード70,000円・トップ80,000円です。上限の80,000円は同額ですが、下限価格はメディカルブローが10,000円低く、通常1回料金ではメディカルブローがやや有利です。",
  },
  {
    label: "眉2回セット",
    medical: "90,000〜150,000円\n（ランク別 90,000/110,000/150,000円）",
    rival: "トップ 150,000円\n（その他ランクは公式サイトでご確認ください）",
    winner: "medical",
    detail:
      "メディカルブローの2回セットは90,000円/110,000円/150,000円のランク別。ファーストアートメイクの2回コースは確認できた範囲でトップ150,000円（通常料金）で、最上位ランク同士は同額です。メディカルブローは下位ランクなら90,000円から選べる分、予算に合わせた選択肢の幅があります。ファーストアートメイクの他ランクの2回コース料金は公式サイトでご確認ください。",
  },
  {
    label: "モニター価格",
    medical: "眉初回モニター 1回28,000〜48,000円\n（ランク別）",
    rival: "モニター2回コース 計88,000〜98,000円\n（フレッシュ平日34,900円/回〜トップ全日49,000円/回）",
    winner: "medical",
    detail:
      "入口価格ではメディカルブローの眉初回モニター28,000〜48,000円が低く、1回だけ安く試したい方に向いています。ファーストアートメイクのモニターは2回コース型で、フレッシュ平日34,900円/回〜トップ全日49,000円/回、2回合計88,000〜98,000円。2回完了を前提にモニターを使う場合は、両者の合計額とモニター条件を比較して選びましょう。",
  },
  {
    label: "施術方式",
    medical: "7Dストローク®・ヘアストローク\n（マシンによる毛並み再現）",
    rival: "エアリーブロウ\n（ふんわり感×リアル毛並み）",
    winner: "draw",
    detail:
      "メディカルブローは商標技術「7Dストローク」と、マシンで毛並みを描く「ヘアストローク」。ファーストアートメイクはふんわり感とリアルな毛並みの両立をうたう「エアリーブロウ」が看板メニューです。どちらも毛並み再現系の技術で、名称だけで優劣は判断できません。公式サイトの症例写真やカウンセリングで、好みの仕上がりに近い方を選ぶのがおすすめです。仕上がりには個人差があります。",
  },
  {
    label: "店舗数・エリア",
    medical: "全国8院\n（表参道・銀座・新宿・横浜・名古屋・大阪・広島・福岡天神）",
    rival: "全国27院\n（銀座本院・新宿・池袋・横浜・大宮・札幌・仙台・名古屋・大阪・神戸・広島・福岡など）",
    winner: "rival",
    detail:
      "店舗数はファーストアートメイクが全国27院と大きくリード。札幌・仙台・大宮・池袋・神戸など、メディカルブローが展開していないエリアにも院があります。メディカルブローは表参道・銀座・新宿・横浜・名古屋・大阪・広島・福岡天神の8院。お住まいの地域に院があるかどうかが、通いやすさを左右する大きなポイントです。",
  },
  {
    label: "麻酔・初診料",
    medical: "初診料2,200円・再診料1,100円\nカルテ作成料1,100円（麻酔代は公式記載なし）",
    rival: "初診料0円・クリーム麻酔0円\n（ブロック麻酔5,500円・カウンセリングのみ3,300円）",
    winner: "rival",
    detail:
      "ファーストアートメイクは初診料0円・クリーム麻酔0円が公式に明記されており、ブロック麻酔を希望する場合は5,500円、カウンセリングのみの場合は3,300円です。メディカルブローは初診料2,200円・再診料1,100円・カルテ作成料1,100円がかかり、麻酔代は公式サイトに記載が見当たらないためカウンセリング時にご確認ください。初期費用の明瞭さ・低さではファーストアートメイクが優位です。",
  },
  {
    label: "指名料",
    medical: "10,000〜20,000円\n（アンバサダー35,000円）",
    rival: "5,500〜11,000円",
    winner: "rival",
    detail:
      "指名料はファーストアートメイクが5,500〜11,000円に対し、メディカルブローは10,000〜20,000円、最上位のアンバサダー指名は35,000円です。担当者を指名して受けたい場合の追加費用はファーストアートメイクの方が抑えやすくなっています。",
  },
  {
    label: "割引制度",
    medical: "学割10%・ミドル割（50歳以上）5%\nモニター割5%・複数部位割5〜10%",
    rival: "モニター価格・平日料金あり\n（その他の割引は公式サイトでご確認ください）",
    winner: "medical",
    detail:
      "メディカルブローは学割10%、50歳以上のミドル割5%、モニター割5%、複数部位割（2部位5%/3部位以上10%）と割引体系が明確で豊富です。ファーストアートメイクはモニター2回コースに平日価格の設定がありますが、その他の割引制度は確認できなかったため公式サイトでご確認ください。条件に当てはまる割引を組み合わせたい方にはメディカルブローが向いています。",
  },
  {
    label: "リップ・アイライン",
    medical: "リップ1回 55,000円/65,000円\nアイライン上2回 60,000〜80,000円",
    rival: "公式サイトでご確認ください",
    winner: "medical",
    detail:
      "メディカルブローはリップ1回55,000円/65,000円（モニター40,000〜50,000円）、アイライン上2回60,000〜80,000円と料金が公式サイトで確認できます。ファーストアートメイクのリップ・アイラインの具体的な料金は本記事執筆時点で確認できなかったため、公式サイトまたはカウンセリングでご確認ください。眉以外の部位も検討している方は、料金を確認しやすいメディカルブローが比較検討しやすいでしょう。",
  },
  {
    label: "予約方法",
    medical: "電話・Web",
    rival: "LINE・Web・電話",
    winner: "rival",
    detail:
      "ファーストアートメイクは電話・Webに加えてLINEからの予約に対応しています。メディカルブローは電話・Webでの予約です。LINEで気軽に予約・相談したい方にはファーストアートメイクが便利です。",
  },
];

const faqs = [
  {
    q: "メディカルブローとファーストアートメイク、結局どっちが安い？",
    a: "通常の眉1回料金は、下限価格でメディカルブロー（50,000円〜）がファーストアートメイク（銀座本院60,000円〜）より10,000円低めです。1回だけ安く試すならメディカルブローの眉初回モニター28,000〜48,000円が最安の入口。一方、ファーストアートメイクはモニター2回コースが計88,000〜98,000円で、2回前提なら有力候補です。最終的な総額は指名料・初診料などの諸費用も含めて比較しましょう。",
  },
  {
    q: "地方在住ならどっちが通いやすい？",
    a: "店舗数はファーストアートメイクが全国27院（銀座本院・新宿・池袋・横浜・大宮・札幌・仙台・名古屋・大阪・神戸・広島・福岡など）で、メディカルブローの8院を大きく上回ります。札幌・仙台・大宮・神戸など、メディカルブローが展開していないエリアにお住まいの方はファーストアートメイクが現実的な選択肢です。",
  },
  {
    q: "麻酔代や初診料などの追加費用はどれくらい違う？",
    a: "ファーストアートメイクは初診料0円・クリーム麻酔0円が公式に明記されており、ブロック麻酔は5,500円、カウンセリングのみの場合は3,300円です。メディカルブローは初診料2,200円・再診料1,100円・カルテ作成料1,100円がかかり、麻酔代は公式サイトに記載が見当たらないため、カウンセリング時にご確認ください。",
  },
  {
    q: "7Dストロークとエアリーブロウはどう違う？",
    a: "メディカルブローの「7Dストローク」は同社の商標技術で、マシンで毛並みを描く「ヘアストローク」も展開しています。ファーストアートメイクの「エアリーブロウ」はふんわり感とリアルな毛並みの両立をうたう技術です。どちらも毛並み再現系で、名称だけで優劣は判断できません。仕上がりの好みは公式サイトの症例写真とカウンセリングで確認するのが確実です。",
  },
  {
    q: "リップやアイラインのアートメイクも受けられる？",
    a: "メディカルブローはリップ1回55,000円/65,000円（モニター40,000〜50,000円）、アイライン上2回60,000〜80,000円と公式サイトで料金が確認できます。ファーストアートメイクのリップ・アイラインの具体的な料金は本記事執筆時点で確認できなかったため、公式サイトまたはカウンセリングでご確認ください。",
  },
];

export default function MedicalbrowVsFirstartmakePage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "比較" }, { name: "メディカルブロー vs ファーストアートメイク" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3 tracking-wide">
            2026年6月最新
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            メディカルブロー vs ファーストアートメイク
            <br />
            <span className="text-rose-500">徹底比較</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            眉毛アートメイクで人気の2院を10項目で比較。
            <br className="hidden md:block" />
            料金・施術方式・店舗数・麻酔代まで、どっちが自分に合うか丸わかり。
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
        verdict="毛並み感の技法（7Dストローク）や割引制度の幅広さを重視するならメディカルブロー、クリーム麻酔・初診0円の諸費用の安さや全国27院の通いやすさを重視するならファーストアートメイクが向いています。どちらもランク制のため、指名料込みの実質総額で比較しましょう。"
        a={{ name: clinicData.medicalbrow.name, reviewSlug: clinicData.medicalbrow.reviewSlug, totalPrice: clinicData.medicalbrow.totalPrice, suitFor: '毛並み感の技法を求める人、モニター価格や学割・ペア割を活用したい人、メンズアートメイクも検討する人。' }}
        b={{ name: clinicData.firstartmake.name, reviewSlug: clinicData.firstartmake.reviewSlug, totalPrice: clinicData.firstartmake.totalPrice, suitFor: '諸費用（麻酔・初診0円）を抑えたい人、全国27院で通いやすさを重視する人、ふんわり毛並みを求める人。' }}
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
                  お試し価格・割引重視なら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  メディカルブロー
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  眉初回モニター28,000円〜と入口価格が低い
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  眉1回50,000円〜・2回セット90,000円〜とランクの選択肢が広い
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  学割10%・ミドル割・複数部位割など割引が豊富
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  リップ・アイラインの料金も公式で確認しやすい
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                まず安く試したい方、割引を組み合わせたい方、眉以外の部位も検討中の方に最適
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-8">
              <div className="text-center mb-4">
                <span className="inline-block bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
                  店舗数・通いやすさ・麻酔0円なら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  ファーストアートメイク
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  全国27院展開（札幌・仙台・大宮・神戸などもカバー）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  初診料0円・クリーム麻酔0円で初期費用が明瞭
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  指名料5,500〜11,000円と追加費用が抑えやすい
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  「エアリーブロウ」のふんわり毛並み・LINE予約対応
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                近くに院がある方、麻酔代・初診料を抑えたい方、LINEで気軽に予約したい方に最適
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
            メディカルブローとファーストアートメイクを10の観点で徹底比較
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
          <div className="mt-4 flex justify-center gap-6 text-xs text-gray-500">
            <span>
              <span className="inline-block w-3 h-3 bg-rose-500 rounded-full mr-1 align-middle" />
              MB = メディカルブロー優位
            </span>
            <span>
              <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mr-1 align-middle" />
              FA = ファーストアートメイク優位
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
                        ? "ファーストアートメイク優位"
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
                      ファーストアートメイク
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
                  "まず初回モニター28,000円〜で1回試したい",
                  "眉1回50,000円〜とランクの選択肢を広く持ちたい",
                  "学割10%・ミドル割5%・複数部位割を活用したい",
                  "7Dストローク・ヘアストロークの技術に興味がある",
                  "リップ・アイラインの料金も確認したうえで検討したい",
                  "表参道・銀座など主要都市の院に通える",
                  "経験豊富な上位ランクを指名して受けたい",
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
                  ファーストアートメイク向き
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "札幌・仙台・大宮・神戸など全国27院から近い院を選びたい",
                  "初診料0円・クリーム麻酔0円で初期費用を抑えたい",
                  "指名料5,500円〜と追加費用を抑えて指名したい",
                  "「エアリーブロウ」のふんわり毛並みに興味がある",
                  "モニター2回コース（計88,000〜98,000円）で仕上げたい",
                  "平日に通ってモニター平日価格を活用したい",
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
                  ファーストアートメイク 公式サイト
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewTrendSection
        aName={clinicData.medicalbrow.name} bName={clinicData.firstartmake.name}
        aGood={clinicData.medicalbrow.goodTrends} aBad={clinicData.medicalbrow.badTrends}
        bGood={clinicData.firstartmake.goodTrends} bBad={clinicData.firstartmake.badTrends}
        aReviewSlug={clinicData.medicalbrow.reviewSlug} bReviewSlug={clinicData.firstartmake.reviewSlug}
      />

      {/* FAQ */}
      <section className="py-14 px-4 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            よくある質問（FAQ）
          </h2>
          <p className="text-center text-gray-500 mb-10">
            メディカルブローとファーストアートメイクの比較で多い質問
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
      <Link href="/review/first-artmake/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">ファーストアートメイクの口コミ・評判</p>
      </Link>
      <Link href="/compare/creage-vs-medicalbrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">クレアージュ vs メディカルブロー比較</p>
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
            お試し価格・割引重視ならメディカルブロー、店舗数・通いやすさ・麻酔0円ならファーストアートメイク
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-rose-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              メディカルブロー 公式サイト
            </button>
            <button className="bg-white/20 backdrop-blur text-white border-2 border-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors shadow-lg">
              ファーストアートメイク 公式サイト
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
            <a href="https://t.felmat.net/fmcl?ak=S10480F.1.7147979S.G135747X" target="_blank" rel="sponsored noopener noreferrer" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">ファーストアートメイク公式へ →</a>
          </div>
        </div>
      </section>
      <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "メディカルブローとファーストアートメイクどっちがいい？料金・店舗数・施術方式を徹底比較", description: "メディカルブローとファーストアートメイクを料金・施術方式・店舗数など10項目で比較。", datePublished: "2026-06-12", dateModified: "2026-06-12", author: { "@type": "Person", name: "佐藤 美咲" }, publisher: { "@type": "Organization", name: "アートメイク比較ナビ" }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://artmake-hikaku.com/compare/medicalbrow-vs-firstartmake/" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "メディカルブロー vs ファーストアートメイク", "item": "https://artmake-hikaku.com/compare/medicalbrow-vs-firstartmake/"}]}) }} />
    </main>
  );
}
