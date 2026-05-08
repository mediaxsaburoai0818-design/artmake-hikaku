import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アートメイク料金比較【2026年最新】眉毛・リップ・アイラインの相場と最安クリニック",
  description:
    "【2026年4月最新】アートメイクの料金を5社徹底比較。眉毛2回5〜15万円、リップ2回7〜20万円、アイライン2回5〜10万円の相場を解説。モニター価格28,000円〜の最安情報や、料金を安くする5つのコツも紹介。",
  keywords:
    "アートメイク 料金比較,アートメイク 安い,眉毛アートメイク 値段,アートメイク 相場,アートメイク モニター価格",
  openGraph: {
    title: "アートメイク料金比較【2026年最新】眉毛・リップ・アイラインの相場",
    description:
      "眉毛・リップ・アイラインのアートメイク料金を5社比較。モニター最安28,000円〜。料金を安くするコツも解説。",
    type: "article",
  },
};

const clinics = [
  {
    name: "メディカルブロー",
    eyebrow: "2回 50,000〜170,000円",
    eyebrowMonitor: "1回 28,000円〜",
    lip: "2回 100,000〜170,000円",
    eyeliner: "2回 60,000〜80,000円",
    nomination: "ランクにより変動（5,000〜25,000円）",
    retouch: "1回 20,000〜90,000円",
    note: "アーティストランク制。モニター価格あり。学割・ペア割最大25%OFF。",
  },
  {
    name: "クレアージュ",
    eyebrow: "3回 132,000円",
    eyebrowMonitor: "なし",
    lip: "3回 198,000円",
    eyeliner: "要問合せ",
    nomination: "無料",
    retouch: "44,000円 / 回",
    note: "3回施術で自然定着。指名料なし。明朗会計。",
  },
  {
    name: "デイジークリニック",
    eyebrow: "2回 49,800〜99,800円",
    eyebrowMonitor: "2回 49,800円〜（手彫り）",
    lip: "2回 99,000〜132,000円",
    eyeliner: "2回 66,000〜88,000円",
    nomination: "要確認",
    retouch: "1回 33,000円〜",
    note: "モニター最大50%OFF。3種類の技法から選択可。",
  },
  {
    name: "ファーストアートメイク",
    eyebrow: "2回 71,500円〜",
    eyebrowMonitor: "なし",
    lip: "1回 49,500円〜",
    eyeliner: "1回 33,000円〜",
    nomination: "要確認",
    retouch: "1回 33,000円〜",
    note: "初心者向け丁寧カウンセリング。銀座駅徒歩3分。",
  },
  {
    name: "トゥルーデザイン",
    eyebrow: "2回 59,400円〜",
    eyebrowMonitor: "なし",
    lip: "2回 79,200円〜",
    eyeliner: "2回 49,500円〜",
    nomination: "要確認",
    retouch: "29,700円〜",
    note: "リタッチ料金が安い。40代50代に人気。大阪・心斎橋。",
  },
];

const cheapRankings = {
  monitor: [
    {
      rank: 1,
      name: "メディカルブロー",
      price: "1回 28,000円〜",
      detail: "モニター価格。SNS掲載が条件。",
    },
    {
      rank: 2,
      name: "デイジークリニック",
      price: "2回 49,800円〜",
      detail: "手彫りモニター。新宿・福岡院限定。",
    },
    {
      rank: 3,
      name: "トゥルーデザイン",
      price: "2回 59,400円〜",
      detail: "通常価格がモニター級の安さ。",
    },
  ],
  regular: [
    {
      rank: 1,
      name: "デイジークリニック",
      price: "2回 49,800円〜",
      detail: "手彫りプラン。機械+手彫りは69,800円〜。",
    },
    {
      rank: 2,
      name: "メディカルブロー",
      price: "2回 50,000円〜",
      detail: "ノービスアーティストランク。",
    },
    {
      rank: 3,
      name: "トゥルーデザイン",
      price: "2回 59,400円〜",
      detail: "リタッチ込みの総額もお得。",
    },
  ],
  total: [
    {
      rank: 1,
      name: "トゥルーデザイン",
      price: "2回+リタッチ1回 = 約89,100円〜",
      detail: "リタッチ29,700円が圧倒的に安い。",
    },
    {
      rank: 2,
      name: "デイジークリニック",
      price: "2回+リタッチ1回 = 約82,800円〜",
      detail: "手彫りプラン+リタッチ。",
    },
    {
      rank: 3,
      name: "ファーストアートメイク",
      price: "2回+リタッチ1回 = 約104,500円〜",
      detail: "初心者安心の丁寧対応。",
    },
  ],
};

const tips = [
  {
    title: "モニター価格を活用する",
    description:
      "多くのクリニックでは、症例写真のSNS掲載を条件にモニター価格を設定しています。メディカルブローなら通常の約50〜70%OFFで施術を受けられることも。顔出しNGのモニターを用意しているクリニックもあるので、まずは相談してみましょう。",
    saving: "最大50〜70%OFF",
  },
  {
    title: "学割・ペア割を使う",
    description:
      "メディカルブローでは学割・ペア割で最大25%OFF。友人や家族と一緒に予約することで、1人あたり数万円の節約になります。学生証があれば学割も適用可能です。",
    saving: "最大25%OFF",
  },
  {
    title: "キャンペーン時期を狙う",
    description:
      "年末年始、GW、夏休み前、クリスマスシーズンなどにキャンペーンを実施するクリニックが多いです。また、新院オープン記念や周年記念で大幅値引きが行われることもあります。公式LINEやSNSをフォローして情報をキャッチしましょう。",
    saving: "10〜30%OFF",
  },
  {
    title: "初回限定プランを探す",
    description:
      "多くのクリニックが初めての方向けに特別価格を用意しています。「初回限定」「はじめてプラン」などの名称で、通常価格より1〜3万円安いことが多いです。複数院でカウンセリングを受けて、最もお得なプランを比較しましょう。",
    saving: "1〜3万円OFF",
  },
  {
    title: "アーティストランクを選ぶ",
    description:
      "メディカルブローのようにランク制を導入しているクリニックでは、ノービス〜ロイヤルアーティストまでランクごとに料金が異なります。技術の差はありますが、ノービスランクでも研修を修了したプロが担当するため、予算重視なら下位ランクも十分選択肢に入ります。",
    saving: "2〜10万円の差",
  },
];

const risks = [
  {
    title: "医療資格のない施術者",
    description:
      "アートメイクは医療行為です。看護師または医師の資格がない施術者による施術は違法であり、感染症や重大なトラブルのリスクがあります。",
  },
  {
    title: "色素の品質が低い",
    description:
      "安価なクリニックでは認可されていない安い色素を使っている可能性があります。変色（青み・赤みが出る）やアレルギー反応のリスクが高まります。",
  },
  {
    title: "衛生管理が不十分",
    description:
      "使い捨ての針やグローブを再利用するなど、衛生管理が疎かなケースがあります。感染症（肝炎、HIVなど）の原因になりえます。",
  },
  {
    title: "アフターケアがない",
    description:
      "施術後のトラブル対応やリタッチの相談に応じてもらえず、最終的に他院で修正する費用がかかり、結果的に高くつくケースがあります。",
  },
  {
    title: "デザイン力の不足",
    description:
      "経験不足の施術者によるデザインの失敗は修正が困難です。左右非対称、不自然な形、濃すぎる仕上がりなど、レーザー除去が必要になることもあります。",
  },
];

const faqs = [
  {
    q: "アートメイクの料金相場はどれくらいですか？",
    a: "眉毛アートメイクの相場は2回セットで5〜15万円です。リップは2回7〜20万円、アイラインは2回5〜10万円が目安です。モニター価格を利用すれば、眉毛1回28,000円〜で施術を受けられるクリニックもあります。料金はアーティストのランクや技法によっても変動します。",
  },
  {
    q: "一番安いアートメイククリニックはどこですか？",
    a: "モニター価格ではメディカルブローの眉1回28,000円〜が最安クラスです。通常価格ではデイジークリニックの眉2回49,800円〜（手彫り）が最も安い部類に入ります。ただし、安さだけで選ぶと仕上がりに不満が出る可能性もあるため、技術力とのバランスも重要です。",
  },
  {
    q: "アートメイクの料金に含まれないものはありますか？",
    a: "一般的に施術料金に含まれないことがあるのは、指名料（5,000〜25,000円）、麻酔代（一部クリニック）、カウンセリング料（ほとんど無料）、リタッチ料金です。クレアージュのように指名料無料のクリニックもあります。事前にカウンセリングで総額を確認しましょう。",
  },
  {
    q: "リタッチはいつ必要ですか？費用はどれくらい？",
    a: "一般的に1〜2年でアートメイクは薄くなり始めます。リタッチの費用は1回20,000〜50,000円が相場で、トゥルーデザインクリニックでは29,700円〜とリーズナブルです。定期的なリタッチで美しい状態をキープできるため、リタッチ料金も含めた総額で比較することをおすすめします。",
  },
  {
    q: "アートメイクで追加料金がかかるケースはありますか？",
    a: "主な追加料金は、アーティスト指名料（ランク制の場合）、2回目以降の追加施術料、デザイン変更料（大幅な変更の場合）、他院の修正料金（通常より高い場合あり）です。カウンセリング時に「総額でいくらかかるか」を必ず確認しましょう。クレアージュやトゥルーデザインのように明朗会計のクリニックを選ぶのも一つの方法です。",
  },
];

export default function PriceComparisonPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "比較" }, { name: "料金比較" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            2026年4月最新
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイク料金比較【2026年最新】
            <br className="hidden md:block" />
            眉毛・リップ・アイラインの相場
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            人気クリニック5社の料金を徹底比較。
            <br />
            モニター価格・通常価格・リタッチ込み総額まで、
            <br className="hidden md:block" />
            あなたに合った最安プランが見つかります。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#price-table"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              料金比較表を見る
            </a>
            <a
              href="#cheap-ranking"
              className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500"
            >
              最安ランキング
            </a>
          </div>
        </div>
      </section>

      {/* 料金相場サマリー */}
      <section className="py-14 bg-white border-b" id="market-price">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            アートメイク料金の相場
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            2026年4月時点の主要クリニック調査に基づく
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 text-center border border-rose-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-rose-100 rounded-full mb-4">
                <span className="text-2xl">&#128076;</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                眉毛アートメイク
              </h3>
              <div className="text-3xl font-bold text-rose-500 mb-1">
                5〜15万円
              </div>
              <p className="text-sm text-gray-500">2回セットの相場</p>
              <p className="text-xs text-gray-400 mt-2">
                モニター価格なら1回28,000円〜
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 text-center border border-pink-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-pink-100 rounded-full mb-4">
                <span className="text-2xl">&#128139;</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                リップアートメイク
              </h3>
              <div className="text-3xl font-bold text-pink-500 mb-1">
                7〜20万円
              </div>
              <p className="text-sm text-gray-500">2回セットの相場</p>
              <p className="text-xs text-gray-400 mt-2">
                施術範囲が広く技術力が必要
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 text-center border border-rose-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-rose-100 rounded-full mb-4">
                <span className="text-2xl">&#128065;</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                アイラインアートメイク
              </h3>
              <div className="text-3xl font-bold text-rose-500 mb-1">
                5〜10万円
              </div>
              <p className="text-sm text-gray-500">2回セットの相場</p>
              <p className="text-xs text-gray-400 mt-2">
                上のみ・上下セットで料金変動
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5社料金比較表 */}
      <section className="py-16 px-4 bg-gray-50" id="price-table">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            人気5社の料金比較表
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            眉毛・リップ・アイライン・指名料・リタッチ料を一覧比較
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg text-sm">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left min-w-[140px]">クリニック</th>
                  <th className="p-4 min-w-[160px]">眉毛</th>
                  <th className="p-4 min-w-[140px]">モニター価格</th>
                  <th className="p-4 min-w-[150px]">リップ</th>
                  <th className="p-4 min-w-[140px]">アイライン</th>
                  <th className="p-4 min-w-[130px]">指名料</th>
                  <th className="p-4 min-w-[130px]">リタッチ</th>
                </tr>
              </thead>
              <tbody>
                {clinics.map((c, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}`}
                  >
                    <td className="p-4 font-semibold text-gray-800">
                      {c.name}
                    </td>
                    <td className="p-4 text-center">{c.eyebrow}</td>
                    <td className="p-4 text-center">
                      {c.eyebrowMonitor !== "なし" ? (
                        <span className="text-rose-600 font-semibold">
                          {c.eyebrowMonitor}
                        </span>
                      ) : (
                        <span className="text-gray-400">{c.eyebrowMonitor}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">{c.lip}</td>
                    <td className="p-4 text-center">{c.eyeliner}</td>
                    <td className="p-4 text-center">
                      {c.nomination === "無料" ? (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                          無料
                        </span>
                      ) : (
                        c.nomination
                      )}
                    </td>
                    <td className="p-4 text-center">{c.retouch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-2">
            {clinics.map((c, i) => (
              <p key={i} className="text-xs text-gray-500">
                <span className="font-semibold">{c.name}：</span>
                {c.note}
              </p>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            ※ 料金は2026年4月時点の公式サイト情報に基づきます。税込表示。最新料金は各クリニック公式サイトでご確認ください。
          </p>
        </div>
      </section>

      {/* 最安ランキング */}
      <section className="py-16 px-4 bg-white" id="cheap-ranking">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            眉毛アートメイク最安ランキング
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            モニター価格・通常価格・リタッチ込み総額の3軸で比較
          </p>

          <div className="space-y-10">
            {/* モニター価格 */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm">
                  1
                </span>
                モニター価格ランキング
              </h3>
              <div className="space-y-3">
                {cheapRankings.monitor.map((item) => (
                  <div
                    key={item.rank}
                    className={`flex items-center gap-4 p-4 rounded-lg border ${item.rank === 1 ? "border-rose-300 bg-rose-50" : "border-gray-200 bg-white"}`}
                  >
                    <span
                      className={`text-2xl font-bold min-w-[40px] text-center ${item.rank === 1 ? "text-rose-500" : "text-gray-400"}`}
                    >
                      {item.rank}位
                    </span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">{item.detail}</div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`font-bold ${item.rank === 1 ? "text-rose-500 text-lg" : "text-gray-700"}`}
                      >
                        {item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 通常価格 */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm">
                  2
                </span>
                通常価格ランキング
              </h3>
              <div className="space-y-3">
                {cheapRankings.regular.map((item) => (
                  <div
                    key={item.rank}
                    className={`flex items-center gap-4 p-4 rounded-lg border ${item.rank === 1 ? "border-rose-300 bg-rose-50" : "border-gray-200 bg-white"}`}
                  >
                    <span
                      className={`text-2xl font-bold min-w-[40px] text-center ${item.rank === 1 ? "text-rose-500" : "text-gray-400"}`}
                    >
                      {item.rank}位
                    </span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">{item.detail}</div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`font-bold ${item.rank === 1 ? "text-rose-500 text-lg" : "text-gray-700"}`}
                      >
                        {item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* リタッチ込み総額 */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm">
                  3
                </span>
                リタッチ込み総額ランキング
              </h3>
              <div className="space-y-3">
                {cheapRankings.total.map((item) => (
                  <div
                    key={item.rank}
                    className={`flex items-center gap-4 p-4 rounded-lg border ${item.rank === 1 ? "border-rose-300 bg-rose-50" : "border-gray-200 bg-white"}`}
                  >
                    <span
                      className={`text-2xl font-bold min-w-[40px] text-center ${item.rank === 1 ? "text-rose-500" : "text-gray-400"}`}
                    >
                      {item.rank}位
                    </span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">{item.detail}</div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`font-bold ${item.rank === 1 ? "text-rose-500 text-lg" : "text-gray-700"}`}
                      >
                        {item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金を安くする5つのコツ */}
      <section className="py-16 px-4 bg-gray-50" id="tips">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            アートメイクの料金を安くする5つのコツ
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            賢く活用すれば数万円の節約が可能です
          </p>
          <div className="space-y-6">
            {tips.map((tip, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <span className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-bold text-lg text-gray-800">
                        {tip.title}
                      </h3>
                      <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs font-semibold">
                        節約目安：{tip.saving}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 安すぎるクリニックのリスク */}
      <section className="py-16 px-4 bg-white" id="risk">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-red-700">
              安すぎるクリニックには要注意
            </h2>
            <p className="text-center text-red-600 text-sm mb-8">
              相場より極端に安い料金には理由があります。以下のリスクを必ず確認しましょう。
            </p>
            <div className="space-y-4">
              {risks.map((risk, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-5 border border-red-100"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-lg flex-shrink-0">
                      !
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        {risk.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {risk.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-red-100 rounded-lg p-4">
              <p className="text-sm text-red-700 leading-relaxed">
                <strong>安全なクリニック選びのポイント：</strong>
                医療機関であること（医師常駐）、施術者が看護師資格保有者であること、カウンセリングが丁寧であること、症例写真が豊富であること、口コミ評価が安定していることを必ず確認しましょう。料金だけでなく「技術力と安全性」のバランスが重要です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            アートメイク料金に関するよくある質問
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            料金・費用に関する疑問にお答えします
          </p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-lg shadow-sm border border-gray-100 group"
              >
                <summary className="px-6 py-5 cursor-pointer font-semibold hover:bg-rose-50/50 transition-colors flex items-center justify-between">
                  <span>
                    Q{i + 1}. {faq.q}
                  </span>
                  <span className="text-rose-400 ml-4 flex-shrink-0 group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <div className="px-6 py-5 border-t border-gray-100 text-gray-600 leading-relaxed text-sm">
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
      <Link href="/compare/medicalbrow-vs-dazzy" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">メディカルブロー vs デイジー比較</p>
      </Link>
      <Link href="/purpose/cheap" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">目的別</span>
        <p className="font-semibold mt-1">安くて上手いアートメイク</p>
      </Link>
      <Link href="/compare/all-clinics" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">全5クリニック15項目完全比較</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            まずは無料カウンセリングで料金を確認
          </h2>
          <p className="text-lg mb-3 opacity-90">
            実際の料金は肌質やデザインによって変動します。
          </p>
          <p className="text-lg mb-8 opacity-90">
            2〜3院のカウンセリングを受けて、自分に合ったプランを見つけましょう。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/"
              className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              おすすめランキングTOP5を見る
            </a>
          </div>
          <p className="text-sm mt-6 opacity-75">
            当サイト経由のカウンセリング予約で追加費用は一切かかりません
          </p>
        </div>
      </section>

      {/* Footer */}
      
    </main>
  );
}
