import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "メディカルブロー vs デイジークリニック 徹底比較【2026年最新】料金・技法・口コミ10項目で解説",
  description:
    "【2026年4月最新】メディカルブローとデイジークリニックを10項目で徹底比較。料金・技法・症例数・展開エリア・割引・痛み・ダウンタイムなど、どっちを選ぶべきか結論付き。毛並み重視ならメディカルブロー、デザイン重視ならデイジー。",
  keywords:
    "メディカルブロー デイジー 比較, メディカルブロー デイジー どっち, メディカルブロー デイジークリニック, アートメイク 比較",
};

const comparisonItems = [
  {
    label: "料金（眉）",
    medical: "1回 28,000円〜（モニター）\n2回 90,000円〜",
    dazzy: "2回 49,800円〜（モニター手彫り）\n2回 69,800円〜（機械彫り+手彫り）",
    winner: "dazzy",
    detail:
      "モニター価格で比較すると、デイジーの手彫り2回49,800円は業界最安水準。メディカルブローはモニター1回28,000円からですが、2回セットだと90,000円〜となるため、総額ではデイジーがお得です。ただしメディカルブローはアーティストランクによって料金が変動するため、トップランクの技術を求める場合はさらに高額になります。",
  },
  {
    label: "技法",
    medical: "7Dストローク\u00AE（独自技術）",
    dazzy: "dazzy brow\n3技法から選択可（機械彫り・手彫り・コンビ）",
    winner: "medical",
    detail:
      "メディカルブローの7Dストロークは毛流れまで再現する独自技術で、自然な毛並み感に定評があります。一方デイジーは機械彫り・手彫り・コンビネーションの3技法から選べる柔軟性が強み。世界的アーティスト監修のdazzy browはトレンド感のあるデザインが得意です。毛並みの自然さならメディカルブロー、デザインの幅ならデイジーが優位。",
  },
  {
    label: "症例数",
    medical: "累計23万件超",
    dazzy: "非公開（多数の実績あり）",
    winner: "medical",
    detail:
      "メディカルブローは累計23万件超と、国内アートメイク業界でトップクラスの実績を公開しています。デイジーは具体的な症例数を公開していませんが、SNSでのビフォーアフター投稿は豊富で、仕上がりの質は十分確認できます。実績の安心感を重視するならメディカルブローが圧倒的です。",
  },
  {
    label: "展開エリア",
    medical: "全国9院以上\n（東京・大阪・名古屋・福岡・横浜 他）",
    dazzy: "全国4院\n（東京・大阪・福岡・札幌）",
    winner: "medical",
    detail:
      "メディカルブローは東京だけでも表参道・新宿・六本木など複数院あり、全国9院以上を展開。地方在住の方でも通いやすい体制です。デイジーは東京（新宿）・大阪・福岡・札幌の4院と限定的ですが、主要都市はカバーしています。名古屋や横浜エリアの方はメディカルブローが便利です。",
  },
  {
    label: "指名料",
    medical: "ランク制（別途指名料あり）",
    dazzy: "アーティスト指名可（料金に含む場合あり）",
    winner: "dazzy",
    detail:
      "メディカルブローはアーティストランク制を採用しており、上位ランクを指名するほど料金が上がります。トップアーティストを指名すると総額が大きく変わることも。デイジーは指名料が料金に含まれるケースが多く、追加費用が発生しにくい仕組みです。料金の透明性ではデイジーがやや有利。",
  },
  {
    label: "割引制度",
    medical: "学割・ペア割 最大25%OFF",
    dazzy: "モニター最大50%OFF",
    winner: "dazzy",
    detail:
      "メディカルブローは学割・ペア割で最大25%OFFと幅広い割引を用意。学生やお友達と一緒に施術する方にお得です。デイジーはモニター割引が最大50%OFFと非常に大きく、コストを最重視する方には魅力的。ただしモニター枠には限りがあるため、早めの予約がおすすめです。",
  },
  {
    label: "痛み",
    medical: "麻酔クリーム使用\nほぼ痛みなし",
    dazzy: "麻酔クリーム使用\nほぼ痛みなし",
    winner: "draw",
    detail:
      "どちらも施術前に麻酔クリームを塗布するため、強い痛みを感じることは少ないです。個人差はありますが、「毛抜きで眉毛を抜く程度」と表現される方が多いです。痛みに不安がある方はカウンセリング時に相談することで、追加の麻酔対応も可能です。両院とも痛み対策は万全。",
  },
  {
    label: "ダウンタイム",
    medical: "約1〜2週間\n（かさぶた期間含む）",
    dazzy: "約1〜2週間\n（かさぶた期間含む）",
    winner: "draw",
    detail:
      "ダウンタイムはどちらも同程度です。施術後1〜2日は赤みが出ることがあり、3〜7日でかさぶたができ、1〜2週間で自然に剥がれます。施術後はワセリンでの保湿ケアが推奨されます。いずれも術後の注意事項を丁寧に説明してくれるため、初めての方でも安心して過ごせます。",
  },
  {
    label: "メンズ対応",
    medical: "対応あり\n（メンズ専用メニューあり）",
    dazzy: "対応あり",
    winner: "medical",
    detail:
      "メディカルブローはメンズアートメイク専用のメニューを設けており、男性の骨格や毛流れに合わせたデザイン提案が得意です。デイジーも男性の施術に対応していますが、メンズ専用プランは限定的。男性でアートメイクを検討している方は、メンズ実績が豊富なメディカルブローがおすすめです。",
  },
  {
    label: "オンラインカウンセリング",
    medical: "なし（来院のみ）",
    dazzy: "対応あり",
    winner: "dazzy",
    detail:
      "デイジークリニックはオンラインカウンセリングに対応しており、来院前に自宅からデザインの相談が可能です。遠方の方や初めてで不安な方には大きなメリット。メディカルブローは来院でのカウンセリングのみですが、その分対面でのデザイン提案に力を入れています。",
  },
];

const faqs = [
  {
    q: "メディカルブローとデイジークリニック、初めてのアートメイクならどっちがいい？",
    a: "初めての方でどちらも安心ですが、自然な毛並み感を重視するならメディカルブロー、トレンド感のあるデザインや予算を抑えたい方はデイジークリニックがおすすめです。デイジーはオンラインカウンセリングにも対応しているため、事前に不安を解消しやすい点もメリットです。",
  },
  {
    q: "2回セットの総額で比較すると、どっちが安い？",
    a: "モニター価格で比較すると、デイジークリニックの手彫り2回49,800円が最安。メディカルブローは2回セットで90,000円〜です。ただしメディカルブローはモニター1回28,000円から受けられるため、まず1回試してみたい方にはメディカルブローが選びやすいです。",
  },
  {
    q: "技法の違いは仕上がりにどう影響する？",
    a: "メディカルブローの7Dストロークは毛流れまで再現する超精密な技法で、すっぴんでも自然な眉に仕上がります。デイジーのdazzy browは機械彫り・手彫り・コンビの3技法から選べるため、パウダー眉からナチュラル眉まで幅広い仕上がりに対応できます。",
  },
  {
    q: "地方在住ですが、どちらが通いやすい？",
    a: "メディカルブローは全国9院以上を展開しているため、地方の方でも通いやすいです。デイジーは東京・大阪・福岡・札幌の4院ですが、オンラインカウンセリングで事前相談ができるため、来院回数を減らせる可能性があります。",
  },
  {
    q: "メンズアートメイクならどっちがおすすめ？",
    a: "メンズアートメイクならメディカルブローがおすすめです。メンズ専用メニューがあり、男性の骨格や毛質に合わせたデザイン提案の実績が豊富。累計23万件の症例の中には男性のビフォーアフターも多数あるため、仕上がりイメージがつかみやすいです。",
  },
];

export default function MedicalbrowVsDazzyPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "比較" }, { name: "メディカルブロー vs デイジー" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3 tracking-wide">
            2026年4月最新
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            メディカルブロー vs デイジークリニック
            <br />
            <span className="text-rose-500">徹底比較</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            眉毛アートメイクで人気の2院を10項目で比較。
            <br className="hidden md:block" />
            料金・技法・症例数・割引まで、どっちが自分に合うか丸わかり。
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
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-300 rounded-2xl p-8">
              <div className="text-center mb-4">
                <span className="inline-block bg-rose-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
                  毛並み重視なら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  メディカルブロー
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  7Dストロークで毛流れまで再現する超自然な仕上がり
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  累計23万件超の圧倒的な症例実績
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  全国9院以上で地方からも通いやすい
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  メンズ専用メニューあり
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                すっぴんでも自然に見える毛並み感を求める方、実績重視の方、男性の方に最適
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-fuchsia-50 border-2 border-pink-300 rounded-2xl p-8">
              <div className="text-center mb-4">
                <span className="inline-block bg-pink-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
                  デザイン重視なら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  デイジークリニック
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold mt-0.5">&#10003;</span>
                  3技法から選べる柔軟なデザイン対応
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold mt-0.5">&#10003;</span>
                  モニター最大50%OFFで2回49,800円〜
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold mt-0.5">&#10003;</span>
                  オンラインカウンセリング対応
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold mt-0.5">&#10003;</span>
                  世界的アーティスト監修のトレンド眉
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                トレンド感のあるデザインを求める方、コスパ重視の方、遠方で事前相談したい方に最適
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
            メディカルブローとデイジークリニックを10の観点で徹底比較
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
                      className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === "medical" ? "bg-rose-50 font-semibold text-rose-700" : "text-gray-700"}`}
                    >
                      {item.medical}
                    </td>
                    <td
                      className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === "dazzy" ? "bg-pink-50 font-semibold text-pink-700" : "text-gray-700"}`}
                    >
                      {item.dazzy}
                    </td>
                    <td className="p-4 text-center">
                      {item.winner === "medical" && (
                        <span className="inline-block bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          MB
                        </span>
                      )}
                      {item.winner === "dazzy" && (
                        <span className="inline-block bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          DC
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
              <span className="inline-block w-3 h-3 bg-pink-500 rounded-full mr-1 align-middle" />
              DC = デイジークリニック優位
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
                  {item.winner !== "draw" && (
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${item.winner === "medical" ? "bg-rose-100 text-rose-600" : "bg-pink-100 text-pink-600"}`}
                    >
                      {item.winner === "medical"
                        ? "メディカルブロー優位"
                        : "デイジー優位"}
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
                    className={`rounded-lg p-4 ${item.winner === "dazzy" ? "bg-pink-50 border border-pink-200" : "bg-white border border-gray-200"}`}
                  >
                    <p className="text-xs font-bold text-pink-500 mb-1">
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
                <span className="inline-block bg-rose-500 text-white text-lg font-bold px-6 py-2 rounded-full">
                  メディカルブロー向き
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "すっぴんでも自然な毛並み眉にしたい",
                  "症例実績の多さで安心感を重視",
                  "全国展開のクリニックが良い",
                  "学割・ペア割を使いたい",
                  "メンズアートメイクを検討中",
                  "まず1回だけ試してみたい",
                  "名古屋・横浜エリアに住んでいる",
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
                <span className="inline-block bg-pink-500 text-white text-lg font-bold px-6 py-2 rounded-full">
                  デイジークリニック向き
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "トレンド感のあるデザイン眉にしたい",
                  "なるべく費用を抑えたい（2回5万円以下）",
                  "技法を自分で選びたい（3種類対応）",
                  "オンラインで事前カウンセリングしたい",
                  "モニター割引50%OFFを利用したい",
                  "東京・大阪・福岡・札幌に住んでいる",
                  "世界的アーティスト監修の技術に魅力を感じる",
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
                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-lg font-bold transition-colors">
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
            メディカルブローとデイジーの比較で多い質問
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
      <Link href="/review/medicalbrow" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">メディカルブローの口コミ・評判</p>
      </Link>
      <Link href="/review/dazzy" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">デイジークリニックの口コミ・評判</p>
      </Link>
      <Link href="/compare/price" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">アートメイク料金比較表</p>
      </Link>
      <Link href="/compare/creage-vs-medicalbrow" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">クレアージュ vs メディカルブロー比較</p>
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
            まずは無料カウンセリングで仕上がりイメージを確認しましょう
          </p>
          <p className="text-sm mb-10 opacity-75">
            毛並み重視ならメディカルブロー、デザイン重視ならデイジークリニック
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-rose-500 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              メディカルブロー 公式サイト
            </button>
            <button className="bg-white/20 backdrop-blur text-white border-2 border-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors shadow-lg">
              デイジークリニック 公式サイト
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </main>
  );
}
