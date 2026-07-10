import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";
import AuthorBox from '@/components/AuthorBox'
import { ThirtySecVerdict, ReviewTrendSection } from '@/components/CompareIntro'
import { clinicData } from '@/lib/clinicData'

export const metadata: Metadata = {
  title:
    "Gメディカルアートメイク vs メディカルブロー 徹底比較【2026年最新】料金・症例・技法をどっちか10項目で解説",
  description:
    "【2026年7月最新】Gメディカルアートメイク（旧グロウクリニック）とメディカルブローを10項目で比較。Gメディカルは眉1回75,000円・指名料なしの明朗会計、メディカルブローは7Dストローク（商標）と累計23万件超の症例が強み。料金体系・展開エリア・対応メニューまで、どっちを選ぶべきか公式情報で解説します（数値は各院公式公表・効果には個人差があります）。",
  keywords:
    "Gメディカル メディカルブロー どっち, グロウ メディカルブロー 比較, Gメディカルアートメイク メディカルブロー, グロウクリニック アートメイク, アートメイク 比較",
};

const comparisonItems = [
  {
    label: "料金（眉・総額目安）",
    gmedical: "1回 75,000円\n2回 145,000円（まとめ割−5,000円）\n指名料なし",
    medical: "モニター1回 28,000円〜\n2回 90,000円〜\n＋指名料・初診2,200円",
    winner: "draw",
    detail:
      "まず1回だけ安く試す入口価格ではメディカルブローのモニター1回28,000円〜が入りやすいです。一方Gメディカルは眉1回75,000円・2回まとめ割で145,000円と料金が固定で、指名料もないため総額が読みやすいのが特徴です。メディカルブローはランク・指名で総額が変わるため、実際に払う総額で比較しましょう（各院公式公表・2026年7月確認、料金は変更される場合があります）。",
  },
  {
    label: "料金体系の分かりやすさ",
    gmedical: "一律料金＋指名料なし",
    medical: "アーティストランク制\n（ランク・指名で変動）",
    winner: "gmedical",
    detail:
      "Gメディカルは施術者による基本料金の差がなく、指名料も設定されていないため、提示された料金がそのまま総額の目安になります。メディカルブローはアーティストのランクによって基本料金が変わり、上位ランクの指名で総額が上がるランク制です。追加費用を含めた総額の見積もりやすさではGメディカルが分かりやすく、じっくり技術者を選びたい場合はメディカルブローという住み分けになります。",
  },
  {
    label: "リップ・アイライン料金",
    gmedical: "リップ 1回85,000円/リタッチ70,000円\nアイライン 1回55,000円/リタッチ40,000円",
    medical: "ランク制（部位・ランクで変動）",
    winner: "gmedical",
    detail:
      "Gメディカルはリップ・アイラインも1回あたりの料金が固定で表示されており、眉以外も総額が読みやすい構成です。メディカルブローは部位もランク制のため、指名するアーティスト次第で金額が変わります。眉だけでなくリップやアイラインもまとめて、分かりやすい料金で検討したい方はGメディカルが向いています（各院公式・2026年7月確認）。",
  },
  {
    label: "症例・実績",
    gmedical: "70,000件以上（公式公表）",
    medical: "累計23万件超（公式公表）",
    winner: "medical",
    detail:
      "公表されている症例数ではメディカルブローが累計23万件超と大きく、実績の多さで安心したい方に向きます。Gメディカルも70,000件以上を公表しており、旧グロウクリニックからの実績を引き継いでいます。いずれも各院公式サイトの公表値であり第三者検証値ではないため、最終的には自分の受けたい部位の症例写真で確認するのがおすすめです。",
  },
  {
    label: "技法・ブランド",
    gmedical: "毛並み・パウダー・ミックス眉（手彫り）",
    medical: "7Dストローク®（商標）",
    winner: "medical",
    detail:
      "メディカルブローは1本ずつ毛流れを描く独自技法「7Dストローク（商標）」を前面に打ち出す技法ブランドで、毛並み感の自然さで指名されることが多いです。Gメディカルは毛並み眉・パウダー眉・ミックス眉を手彫り中心で提供し、質感を選べます。技法名でのブランド訴求はメディカルブローが強めですが、仕上がりの好みは症例写真で確認するのが確実です（効果・持ちには個人差があります）。",
  },
  {
    label: "展開エリア",
    gmedical: "3院\n（表参道・新宿・大阪）",
    medical: "全国8院\n（表参道・銀座・新宿・横浜・名古屋・大阪 他）",
    winner: "medical",
    detail:
      "メディカルブローは全国8院と展開が広く、地方の主要都市からも通いやすい体制です。Gメディカルは表参道・新宿・大阪の3院で、東京と関西の主要エリアはカバーしていますが、その他の地方は通いにくい場合があります。名古屋・横浜・福岡などで通いたい方はメディカルブローが便利です（2026年7月確認）。",
  },
  {
    label: "対応メニューの幅",
    gmedical: "眉・リップ・アイライン\n（ヘアライン・除去は料金表に記載なし）",
    medical: "眉・アイライン・リップ・ヘアライン・ほくろ（メンズあり）",
    winner: "medical",
    detail:
      "メニューの幅ではメディカルブローが広く、眉・リップ・アイラインに加えヘアラインやほくろ、メンズメニューまで対応しています。Gメディカルは眉・リップ・アイラインが中心で、ヘアラインやアートメイク除去は公式料金表に記載がありません（2026年7月確認）。眉・リップ・アイラインに絞って明朗な料金で受けたいならGメディカル、薄毛ヘアラインなど幅広く相談したいならメディカルブローです。",
  },
  {
    label: "割引・リタッチ",
    gmedical: "2回まとめ割−5,000円\nリタッチ 60,000円",
    medical: "学割・ペア割 最大25%OFF",
    winner: "draw",
    detail:
      "Gメディカルは2回分をまとめて購入すると5,000円割引になり、3回目以降のリタッチも60,000円と抑えめです。メディカルブローは学割・ペア割で最大25%OFFと、対象者には大きな割引があります。学生や友人と一緒に受ける方はメディカルブロー、定着まで通いながら総額を抑えたい方はGメディカルのリタッチ価格が向いています。",
  },
  {
    label: "初回定着・回数目安",
    gmedical: "2〜3回が目安（初回定着に個人差）",
    medical: "2回セットが基本（個人差あり）",
    winner: "draw",
    detail:
      "アートメイクは肌のターンオーバーで少しずつ薄くなるため、どちらも複数回の施術で定着させる前提です。Gメディカルは初回の定着に個人差があり2〜3回が目安、メディカルブローも2回セットが基本です。1回で完成するものではないため、必ず2回以上の総額で費用を比較しましょう（定着・持ちには個人差があります）。",
  },
  {
    label: "メンズ対応",
    gmedical: "公式料金表に専用メニューの記載なし",
    medical: "○（メンズメニューあり）",
    winner: "medical",
    detail:
      "男性のアートメイクを検討している場合、メディカルブローはメンズ専用メニューを設けており、男性の骨格や毛流れに合わせた提案の実績があります。Gメディカルは公式料金表にメンズ専用メニューの記載が見当たりません（2026年7月確認）。男性の方はメンズ実績のあるメディカルブローが選びやすいです。",
  },
];

const faqs = [
  {
    q: "Gメディカルアートメイクとメディカルブロー、どっちが向いている？",
    a: "眉1回75,000円・指名料なしという明朗な料金で総額を把握したい方、眉・リップ・アイラインを分かりやすい価格で受けたい方はGメディカルアートメイク（旧グロウクリニック）が向いています。累計23万件超という症例実績の多さ、7Dストローク（商標）の技法、ヘアラインを含む幅広いメニューや全国展開を重視する方はメディカルブローが向いています。効果や仕上がりには個人差があるため、両院のカウンセリングで比較するのがおすすめです。",
  },
  {
    q: "Gメディカルアートメイクは旧グロウクリニックと同じ？",
    a: "Gメディカルアートメイクは、旧グロウクリニックのアートメイク部門が名称変更したサービスです。表参道・新宿・大阪の3院で、症例70,000件以上を公表しています。改称後で口コミ情報が分散していることがあるため、料金や症例は公式サイトで最新の情報を確認するのがおすすめです（2026年7月確認）。",
  },
  {
    q: "料金の総額が分かりやすいのはどっち？",
    a: "料金体系の分かりやすさではGメディカルが優位です。眉は1回75,000円・2回まとめ割で145,000円と固定で、指名料もないため提示額がそのまま総額の目安になります。メディカルブローはアーティストのランクや指名で基本料金が変わるため、まず入口価格が安いのはモニター28,000円〜のメディカルブローですが、上位ランクを選ぶと総額が上がります。実際に払う総額で比較しましょう。",
  },
  {
    q: "症例実績で選ぶならどっち？",
    a: "公表されている症例数ではメディカルブローが累計23万件超と多く、実績の多さで安心したい方に向いています。Gメディカルも70,000件以上を公表しています。いずれも各院公式サイトの公表値であり第三者検証値ではないため、最終的には自分の受けたい部位の症例写真を確認して判断するのがおすすめです。",
  },
  {
    q: "ヘアライン（薄毛）や除去もできる？",
    a: "メディカルブローはヘアラインのメニューがあります。一方Gメディカルは公式料金表に眉・リップ・アイラインが中心で、ヘアラインやアートメイク除去の記載がありません（2026年7月確認）。薄毛のヘアラインや他院で入れたアートメイクの除去まで相談したい場合は、対応メニューの広いクリニックを選ぶ必要があります。適応や仕上がりには個人差があるため、カウンセリングで確認してください。",
  },
];

export default function GmedicalVsMedicalbrowPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "比較" }, { name: "Gメディカル vs メディカルブロー" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3 tracking-wide">
            2026年7月最新
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Gメディカルアートメイク vs メディカルブロー
            <br />
            <span className="text-rose-500">徹底比較</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            旧グロウクリニックの明朗会計と、症例23万件超の実績を10項目で比較。
            <br className="hidden md:block" />
            料金の分かりやすさで選ぶならGメディカル、実績・技法・展開ならメディカルブロー。
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
        verdict="眉1回75,000円・指名料なしという明朗な料金で総額を把握したい人、眉・リップ・アイラインをシンプルな価格で受けたい人はGメディカルアートメイク（旧グロウクリニック）。累計23万件超の症例実績、7Dストローク（商標）の技法、ヘアラインを含む幅広いメニューや全国展開を重視する人はメディカルブロー。どちらも複数回の総額で比較しましょう。"
        a={{ name: clinicData.gmedical.name, reviewSlug: clinicData.gmedical.reviewSlug, totalPrice: clinicData.gmedical.totalPrice, suitFor: '料金の分かりやすさ（一律・指名料なし）を重視する人、眉・リップ・アイラインをシンプルな価格で受けたい人、東京・大阪で通える人。' }}
        b={{ name: clinicData.medicalbrow.name, reviewSlug: clinicData.medicalbrow.reviewSlug, totalPrice: clinicData.medicalbrow.totalPrice, suitFor: '症例実績の多さで安心したい人、7Dストローク（商標）の技法を求める人、ヘアラインやメンズなど幅広いメニュー・全国展開を重視する人。' }}
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
                  料金の分かりやすさなら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  Gメディカルアートメイク
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  眉1回75,000円・指名料なしで総額が読みやすい
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  リップ・アイラインも1回あたり固定料金
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  症例70,000件以上（旧グロウクリニックの実績）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  表参道・新宿・大阪で通える
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                指名料やランクで迷わず、提示額そのままの明朗な料金で受けたい方に
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-fuchsia-50 border-2 border-pink-300 rounded-2xl p-8">
              <div className="text-center mb-4">
                <span className="inline-block bg-pink-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
                  実績・技法・幅広さなら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  メディカルブロー
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold mt-0.5">&#10003;</span>
                  累計23万件超の症例実績を公表
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold mt-0.5">&#10003;</span>
                  7Dストローク（商標）で毛流れを描く技法
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold mt-0.5">&#10003;</span>
                  ヘアライン・ほくろ・メンズまで幅広いメニュー
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold mt-0.5">&#10003;</span>
                  全国8院で地方からも通いやすい
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                症例実績の多さや技法、ヘアライン含む幅広い対応・全国展開を重視する方に
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
            Gメディカルアートメイクとメディカルブローを10の観点で比較
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="p-4 text-left rounded-tl-xl min-w-[120px]">
                    比較項目
                  </th>
                  <th className="p-4 text-center min-w-[200px]">
                    Gメディカルアートメイク
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
                      className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === "gmedical" ? "bg-rose-50 font-semibold text-rose-700" : "text-gray-700"}`}
                    >
                      {item.gmedical}
                    </td>
                    <td
                      className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === "medical" ? "bg-pink-50 font-semibold text-pink-700" : "text-gray-700"}`}
                    >
                      {item.medical}
                    </td>
                    <td className="p-4 text-center">
                      {item.winner === "gmedical" && (
                        <span className="inline-block bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          GM
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
              GM = Gメディカル優位
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
                  {item.winner === "gmedical" && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-100 text-rose-600">
                      Gメディカル優位
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
                    className={`rounded-lg p-4 ${item.winner === "gmedical" ? "bg-rose-50 border border-rose-200" : "bg-white border border-gray-200"}`}
                  >
                    <p className="text-xs font-bold text-rose-500 mb-1">
                      Gメディカルアートメイク
                    </p>
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {item.gmedical}
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
                  Gメディカル向き
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "指名料やランクで迷わず明朗な料金で受けたい",
                  "眉・リップ・アイラインを固定料金で検討したい",
                  "総額を事前にはっきり把握したい",
                  "2回まとめ割やリタッチ価格で総額を抑えたい",
                  "表参道・新宿・大阪に通える",
                  "旧グロウクリニックの実績に安心を感じる",
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
                <Link href="/review/gmedical/" className="block text-center w-full bg-rose-500 hover:bg-rose-600 text-white py-4 rounded-lg font-bold transition-colors">
                  Gメディカルアートメイクの詳細を見る
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
                  "症例実績の多さで安心したい",
                  "7Dストローク（商標）の技法で眉を整えたい",
                  "薄毛のヘアラインも相談したい",
                  "全国展開で通いやすいクリニックが良い",
                  "まずモニター1回から試してみたい",
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
        aName={clinicData.gmedical.name} bName={clinicData.medicalbrow.name}
        aGood={clinicData.gmedical.goodTrends} aBad={clinicData.gmedical.badTrends}
        bGood={clinicData.medicalbrow.goodTrends} bBad={clinicData.medicalbrow.badTrends}
        aReviewSlug={clinicData.gmedical.reviewSlug} bReviewSlug={clinicData.medicalbrow.reviewSlug}
      />

      {/* FAQ */}
      <section className="py-14 px-4 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            よくある質問（FAQ）
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Gメディカルとメディカルブローの比較で多い質問
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
            <Link href="/review/gmedical/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">クリニック</span>
              <p className="font-semibold mt-1">Gメディカルアートメイクの口コミ・評判</p>
            </Link>
            <Link href="/review/medicalbrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">クリニック</span>
              <p className="font-semibold mt-1">メディカルブローの口コミ・評判</p>
            </Link>
            <Link href="/compare/amg-vs-medicalbrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">比較</span>
              <p className="font-semibold mt-1">アートメイクギャラリー vs メディカルブロー比較</p>
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
            明朗会計か、実績か。あなたはどっち？
          </h2>
          <p className="text-lg mb-4 opacity-90">
            まずは各院のカウンセリングで仕上がりイメージとリスクを確認しましょう
          </p>
          <p className="text-sm mb-10 opacity-75">
            料金の分かりやすさならGメディカル、実績・技法・幅広さならメディカルブロー
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/review/gmedical/" className="bg-white text-rose-500 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Gメディカルアートメイクの詳細
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
              <a href="https://artmake-glow-clinic.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">Gメディカルアートメイク公式へ →</a>
              <a href="https://t.felmat.net/fmcl?ak=Y4616D.1.683500A.G135747X" target="_blank" rel="sponsored noopener noreferrer" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">メディカルブロー公式へ →</a>
            </div>
            <p className="mt-4 text-xs text-gray-400">※本ページの料金・メニュー・院数は各院公式サイトの2026年7月時点の情報をもとに当サイトが整理したものです。最新・正確な情報は各公式サイトでご確認ください。アートメイクは医療行為であり、効果・持続・仕上がりには個人差があります。</p>
          </div>
        </section>
        <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "Gメディカル vs メディカルブロー", "item": "https://artmake-hikaku.com/compare/gmedical-vs-medicalbrow/"}]}) }} />
    </main>
  );
}
