import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "クレアージュ vs メディカルブロー 徹底比較【2026年最新】料金・技法・口コミ10項目で解説",
  description:
    "【2026年4月最新】クレアージュとメディカルブローを10項目で徹底比較。料金・技法・症例数・施術回数・指名料・展開エリアなど、どっちを選ぶべきか結論付き。自然さ最優先・40代以上ならクレアージュ、コスパ・技術力ならメディカルブロー。",
  keywords:
    "クレアージュ メディカルブロー どっち, クレアージュ メディカルブロー 比較, アートメイク 比較, クレアージュ アートメイク, メディカルブロー アートメイク",
};

const comparisonItems = [
  {
    label: "料金（眉）",
    creage: "3回セット 132,000円\n（1回あたり44,000円）",
    medical: "モニター1回 28,000円〜\n2回セット 90,000円〜",
    winner: "medical",
    detail:
      "料金面ではメディカルブローが有利です。モニター価格なら1回28,000円から受けられ、2回セットでも90,000円〜。クレアージュは3回セットで132,000円ですが、1回あたり44,000円で3回施術が含まれるため、仕上がりの完成度を考えるとコスパは悪くありません。ただし初期費用を抑えたい方にはメディカルブローが選びやすいです。",
  },
  {
    label: "施術回数",
    creage: "3回セット\n（段階的に完成させる）",
    medical: "2回セット\n（1回のみも可）",
    winner: "creage",
    detail:
      "クレアージュは3回に分けて段階的に色味や形を調整していく独自のアプローチを採用。1回目でベースを作り、2回目・3回目で微調整するため、より自然で繊細な仕上がりが可能です。メディカルブローは2回セットが基本で、モニターなら1回のみも選べます。じっくり丁寧に仕上げたい方はクレアージュ、短期間で完成させたい方はメディカルブローが向いています。",
  },
  {
    label: "技法",
    creage: "マイクロブレーディング\n（自然な毛並み重視）",
    medical: "7Dストローク\u00AE（独自技術）\n超精密な毛流れ再現",
    winner: "medical",
    detail:
      "メディカルブローの7Dストロークは毛流れまで再現する独自の超精密技術で、業界でも高い評価を得ています。クレアージュもマイクロブレーディングで自然な毛並みを再現しますが、3回施術で段階的に仕上げることで「やりすぎない自然さ」を実現。技法の先進性ではメディカルブロー、ナチュラルな仕上がりではクレアージュに軍配が上がります。",
  },
  {
    label: "症例数",
    creage: "累計10,000件以上",
    medical: "累計23万件超",
    winner: "medical",
    detail:
      "症例数ではメディカルブローが累計23万件超と圧倒的な実績を誇ります。クレアージュも累計10,000件以上と十分な実績がありますが、数の上ではメディカルブローが大きくリード。ただしクレアージュは40代・50代の施術実績が豊富で、年齢層に特化した症例の質の高さが強みです。",
  },
  {
    label: "指名料",
    creage: "指名料無料\n（追加費用なし）",
    medical: "ランク制（別途指名料あり）\n上位ランクほど高額",
    winner: "creage",
    detail:
      "クレアージュは指名料が完全無料。料金体系がシンプルで、追加費用を気にせず好みのアーティストを指名できます。メディカルブローはアーティストランク制を採用しており、上位ランクを指名するほど料金がアップ。トップアーティストを希望すると総額が大きく変わることも。料金の透明性・わかりやすさではクレアージュが優れています。",
  },
  {
    label: "展開エリア",
    creage: "全国5院\n（東京・大阪・名古屋・福岡・札幌）",
    medical: "全国9院以上\n（東京・大阪・名古屋・福岡・横浜 他）",
    winner: "medical",
    detail:
      "展開数ではメディカルブローが全国9院以上と優位。東京だけでも表参道・新宿・六本木など複数院を展開しています。クレアージュは全国5院と少なめですが、東京・大阪・名古屋・福岡・札幌の主要都市をカバー。どちらも主要都市にはアクセスしやすいですが、選択肢の多さではメディカルブローがリードしています。",
  },
  {
    label: "ターゲット年齢層",
    creage: "40代・50代に人気\n（大人世代に特化）",
    medical: "20代〜40代が中心\n（幅広い年齢層に対応）",
    winner: "draw",
    detail:
      "クレアージュは40代・50代の大人世代から圧倒的な支持を得ています。加齢による眉の薄さや左右差を自然にカバーするデザインが得意で、「やりすぎない上品さ」が好評です。メディカルブローは20代〜40代を中心に幅広い年齢層に対応。トレンド感のある眉デザインも豊富です。年齢層によって最適なクリニックが変わるため引き分けとしました。",
  },
  {
    label: "痛み",
    creage: "麻酔クリーム使用\nほぼ痛みなし",
    medical: "麻酔クリーム使用\nほぼ痛みなし",
    winner: "draw",
    detail:
      "どちらも施術前に麻酔クリームを塗布するため、強い痛みを感じることは少ないです。個人差はありますが、「毛抜きで眉毛を抜く程度」と表現される方が多いです。クレアージュは3回に分けて施術するため1回あたりの施術範囲が少なく、痛みの負担が軽いという声もあります。痛み対策は両院とも万全です。",
  },
  {
    label: "ダウンタイム",
    creage: "約1〜2週間\n（かさぶた期間含む）",
    medical: "約1〜2週間\n（かさぶた期間含む）",
    winner: "draw",
    detail:
      "ダウンタイムはどちらも同程度です。施術後1〜2日は赤みが出ることがあり、3〜7日でかさぶたができ、1〜2週間で自然に剥がれます。クレアージュは3回施術のため、ダウンタイムの回数は多くなりますが、1回あたりの施術が軽めなので回復も早い傾向があります。いずれも術後のケア説明が丁寧で初めての方でも安心です。",
  },
  {
    label: "カウンセリング",
    creage: "対面カウンセリング\n丁寧なデザイン提案",
    medical: "対面カウンセリング\n骨格分析あり",
    winner: "draw",
    detail:
      "どちらも対面でのカウンセリングに力を入れています。クレアージュは3回施術の初回で特に時間をかけてデザインを決定し、患者の希望と骨格に合った自然な眉を提案。メディカルブローも骨格分析を行い、7Dストローク技法に基づいた精密なデザインを提案します。カウンセリングの質はどちらも高水準で、安心して相談できます。",
  },
];

const faqs = [
  {
    q: "クレアージュとメディカルブロー、初めてのアートメイクならどっちがいい？",
    a: "初めての方でどちらも安心ですが、40代以上で自然さを最優先するならクレアージュがおすすめです。3回施術で段階的に仕上げるため、「いきなり濃くなりすぎた」という失敗が起きにくいのがメリット。一方、コスパを重視する方や最新技術を試したい方はメディカルブローが向いています。モニター価格なら1回28,000円〜と手頃に始められます。",
  },
  {
    q: "3回施術と2回施術、仕上がりに違いはある？",
    a: "クレアージュの3回施術は段階的に色味・形を調整するため、より繊細で自然な仕上がりになりやすいです。特に「やりすぎない自然さ」を求める方には向いています。メディカルブローの2回施術でも十分美しい仕上がりが得られますが、1回あたりの施術範囲が広いため、完成までの期間が短いのがメリットです。",
  },
  {
    q: "総額で比較すると、どっちが安い？",
    a: "メディカルブローの方が総額は安く抑えられます。モニター2回セットで90,000円〜に対し、クレアージュは3回セットで132,000円。ただしクレアージュは指名料無料・追加費用なしのため、メディカルブローで上位ランクを指名すると総額が逆転するケースもあります。最終的な総額はランク選択次第で変わります。",
  },
  {
    q: "40代・50代におすすめなのはどっち？",
    a: "40代・50代にはクレアージュがおすすめです。大人世代の施術実績が豊富で、加齢による眉の変化を考慮した自然なデザイン提案が得意。3回施術で丁寧に仕上げるアプローチも、大人世代の「上品で自然な眉」というニーズにマッチしています。指名料無料でわかりやすい料金体系も安心材料です。",
  },
  {
    q: "指名料の違いは総額にどう影響する？",
    a: "クレアージュは指名料が完全無料なので、3回132,000円が総額です。メディカルブローはアーティストランクによって料金が変動し、上位ランクを指名すると基本料金に加えて指名料がかかります。ノービスアーティストなら安く済みますが、グランドマスターなどのトップランクを選ぶと総額15万円以上になることもあります。",
  },
];

export default function CreageVsMedicalbrowPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3 tracking-wide">
            2026年4月最新
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            クレアージュ vs メディカルブロー
            <br />
            <span className="text-rose-500">徹底比較</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            眉毛アートメイクで人気の2院を10項目で比較。
            <br className="hidden md:block" />
            料金・技法・施術回数・指名料まで、どっちが自分に合うか丸わかり。
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
                  自然さ最優先・40代以上なら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  クレアージュ
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  3回施術で段階的に仕上げる丁寧なアプローチ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  指名料完全無料で追加費用なし
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  累計10,000件の実績、40代50代に圧倒的人気
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">&#10003;</span>
                  「やりすぎない上品さ」が大人世代に好評
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                自然で上品な仕上がりを求める方、40代以上の方、料金の透明性を重視する方に最適
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-300 rounded-2xl p-8">
              <div className="text-center mb-4">
                <span className="inline-block bg-rose-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
                  コスパ・技術力なら
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  メディカルブロー
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  7Dストロークで毛流れまで再現する超精密技術
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  モニター1回28,000円〜の圧倒的コスパ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  累計23万件超の業界トップクラスの実績
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">&#10003;</span>
                  全国9院以上で通いやすい
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500 bg-white rounded-lg p-3">
                コスパ重視の方、最新技術を求める方、実績の多さで安心したい方に最適
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
            クレアージュとメディカルブローを10の観点で徹底比較
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
                      className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === "creage" ? "bg-amber-50 font-semibold text-amber-700" : "text-gray-700"}`}
                    >
                      {item.creage}
                    </td>
                    <td
                      className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === "medical" ? "bg-rose-50 font-semibold text-rose-700" : "text-gray-700"}`}
                    >
                      {item.medical}
                    </td>
                    <td className="p-4 text-center">
                      {item.winner === "creage" && (
                        <span className="inline-block bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          CRE
                        </span>
                      )}
                      {item.winner === "medical" && (
                        <span className="inline-block bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
              <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mr-1 align-middle" />
              CRE = クレアージュ優位
            </span>
            <span>
              <span className="inline-block w-3 h-3 bg-rose-500 rounded-full mr-1 align-middle" />
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
                  {item.winner !== "draw" && (
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${item.winner === "creage" ? "bg-amber-100 text-amber-600" : "bg-rose-100 text-rose-600"}`}
                    >
                      {item.winner === "creage"
                        ? "クレアージュ優位"
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
                    className={`rounded-lg p-4 ${item.winner === "medical" ? "bg-rose-50 border border-rose-200" : "bg-white border border-gray-200"}`}
                  >
                    <p className="text-xs font-bold text-rose-500 mb-1">
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
                <span className="inline-block bg-amber-500 text-white text-lg font-bold px-6 py-2 rounded-full">
                  クレアージュ向き
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "自然で上品な眉に仕上げたい（40代・50代）",
                  "3回施術で丁寧に完成させたい",
                  "指名料無料でわかりやすい料金が良い",
                  "加齢による眉の悩みを自然にカバーしたい",
                  "やりすぎないナチュラルなアートメイクが理想",
                  "追加費用なしの安心感を重視",
                  "大人世代の実績が豊富なクリニックが良い",
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
                  メディカルブロー向き
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "コスパ重視でまず試してみたい（モニター28,000円〜）",
                  "7Dストロークの最新技術を受けたい",
                  "累計23万件の圧倒的な実績で安心したい",
                  "全国9院以上から通いやすい院を選びたい",
                  "学割・ペア割で最大25%OFFを活用したい",
                  "短期間（2回）で仕上げたい",
                  "まず1回だけお試しで受けてみたい",
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
            クレアージュとメディカルブローの比較で多い質問
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
            自然さ最優先・40代以上ならクレアージュ、コスパ・技術力ならメディカルブロー
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              クレアージュ 公式サイト
            </button>
            <button className="bg-white/20 backdrop-blur text-white border-2 border-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors shadow-lg">
              メディカルブロー 公式サイト
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </main>
  );
}
