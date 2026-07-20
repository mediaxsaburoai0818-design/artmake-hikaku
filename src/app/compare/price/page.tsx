import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: "アートメイクの値段・相場はいくら？【2026年】眉・リップの料金比較DBと実際に払う総額",
  description:
    "主要8クリニックの公式サイト料金を調査した料金比較データベース（主要5院2026年6月12日＋AMG・Gメディカル・THE ARTMAKE TOKYO 2026年7月7日確認・税込）。眉2回4万円〜・1回あたり換算・モニター価格・指名料/麻酔代などの追加費用まで出典付きで比較。毎月定点更新し、改定履歴も記録します。",
  keywords:
    "アートメイク 料金比較,アートメイク 安い,眉毛アートメイク 値段,アートメイク 相場,アートメイク モニター価格",
  openGraph: {
    title: "アートメイクの値段・相場はいくら？【2026年】料金比較DB・毎月定点更新",
    description:
      "眉毛・リップ・アイラインのアートメイク料金を5社比較。モニター最安28,000円〜。料金を安くするコツも解説。",
    type: "article",
  },
};

// 2026年6月12日に各クリニック公式サイトで確認した料金（税込）。毎月定点更新。
const surveyDate = "2026年6月12日";
const clinics = [
  {
    name: "メディカルブロー",
    eyebrow: "2回 90,000〜150,000円（ランク別）／1回 50,000〜80,000円",
    eyebrowMonitor: "初回モニター 28,000〜48,000円（ランク別）",
    lip: "1回 55,000〜65,000円（モニター40,000円〜）",
    eyeliner: "上2回 60,000〜80,000円",
    nomination: "10,000〜20,000円（アンバサダー35,000円）",
    retouch: "初診料2,200円・再診料1,100円が別途",
    note: "7Dストローク（商標）。学割10%・ミドル割5%・複数部位割あり。全国8院。",
  },
  {
    name: "クレアージュ",
    eyebrow: "初回 132,000円（3回分・1回あたり44,000円）",
    eyebrowMonitor: "全顔モニター 92,400〜105,600円（院による）",
    lip: "初回 198,000円（3回分）",
    eyeliner: "上 初回 99,000円（3回分）",
    nomination: "公式記載なし（要確認）",
    retouch: "眉44,000円／アイライン33,000円／リップ66,000円",
    note: "業界では珍しい3回セット設計。施術者は全員看護師資格。初診料3,300円。5院。",
  },
  {
    name: "デイジークリニック",
    eyebrow: "Natural Brow 2回93,800円／dazzy Brow 2回113,800円（新宿本院ページ）",
    eyebrowMonitor: "公式記載なし（要確認）",
    lip: "dazzy Lip 2回120,000円・1回77,000円",
    eyeliner: "上2回95,000円・上下2回125,000円",
    nomination: "22,000円〜（スタッフによる）",
    retouch: "アイライン上47,500円ほか",
    note: "公式サイト内のページで料金表記に差があるため最新は要確認。4院。",
  },
  {
    name: "ファーストアートメイク",
    eyebrow: "1回 60,000〜80,000円（ランク別・銀座本院）／トップ2回150,000円",
    eyebrowMonitor: "モニター2回 計88,000〜98,000円（平日34,900円/回〜）",
    lip: "公式サイトで要確認",
    eyeliner: "公式サイトで要確認",
    nomination: "5,500〜11,000円",
    retouch: "クリーム麻酔0円・初診料0円・カウンセリングのみ3,300円",
    note: "エアリーブロウ（ふんわり毛並み）。全国27院で通いやすさ最強クラス。",
  },
  {
    name: "トゥルーデザイン",
    eyebrow: "2回 40,000円（2D）／60,000円（3D）／70,000円（4D）",
    eyebrowMonitor: "施術写真の掲載条件込みの料金設定（実質モニター型）",
    lip: "2回 80,000円",
    eyeliner: "2回 70,000円",
    nomination: "1回 1,500円",
    retouch: "初診料0円・再診料1,500円・麻酔3,000円（ピコ施術時）",
    note: "眉2回4万円〜は今回調査の最安（写真掲載条件付き）。大阪・心斎橋1院のみ。",
  },
  {
    name: "アートメイクギャラリー（AMG）",
    eyebrow: "2回 140,000円（AMGストローク/パウダー）〜150,000円（オーダーメイド）／1回 75,000円〜",
    eyebrowMonitor: "モニター2回 平日88,000円・土日98,000円",
    lip: "ナチュラリーリップ 2回140,000円（モニター98,000円）",
    eyeliner: "公式サイトで要確認",
    nomination: "3,300〜35,000円（指名しなければ基準料金）",
    retouch: "カウンセリング診察料1,100円が別途。除去はピコ別メニュー",
    note: "指名なしなら全アーティスト一律料金。除去・ヘアラインまで対応（6院）。2026年7月7日公式確認。",
  },
  {
    name: "Gメディカルアートメイク",
    eyebrow: "1回 75,000円（2回まとめ購入で−5,000円→145,000円）",
    eyebrowMonitor: "公式料金表に記載なし（要確認）",
    lip: "1回 85,000円",
    eyeliner: "1回 55,000円",
    nomination: "11,000円（施術者により異なる場合あり）",
    retouch: "60,000円（3回目以降）",
    note: "旧グロウクリニック。シンプルな1回単価＋まとめ割。表参道・新宿・大阪の3院。2026年7月7日公式確認。",
  },
  {
    name: "THE ARTMAKE TOKYO",
    eyebrow: "通常1回 80,000円／2回 150,000円",
    eyebrowMonitor: "平日モニター2回 88,000円（土日祝98,000円）",
    lip: "通常1回 89,000円／2回 160,000円（モニター2回128,000円）",
    eyeliner: "上 通常1回 60,000円／2回 110,000円（モニター上2回88,000円）",
    nomination: "5,500〜33,000円/回（アーティスト別）",
    retouch: "自院2回以上施術の方限定（他院歴は初回扱い）。2026年7月1日改定",
    note: "全国6院（銀座・横浜・名古屋・大阪・福岡・広島）。眉はモニター中心の料金設計。アートメイク経験者はモニター料金＋20,000円の公式注記あり。2026年7月7日公式確認。",
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
      name: "ファーストアートメイク",
      price: "モニター2回 計88,000円〜（平日34,900円/回〜）",
      detail: "平日モニターが割安。全国27院。",
    },
    {
      rank: 3,
      name: "クレアージュ",
      price: "全顔モニター 92,400円〜（3回分）",
      detail: "名古屋・札幌・大阪・福岡院のモニター価格。",
    },
  ],
  regular: [
    {
      rank: 1,
      name: "トゥルーデザイン",
      price: "眉2回 40,000円（2Dパウダー）",
      detail: "今回調査の通常料金最安。写真掲載条件あり。",
    },
    {
      rank: 2,
      name: "クレアージュ",
      price: "1回あたり換算 44,000円（132,000円/3回）",
      detail: "3回セットを1回換算すると割安。",
    },
    {
      rank: 3,
      name: "デイジークリニック",
      price: "Natural Brow 2回 93,800円",
      detail: "1回あたり46,900円（新宿本院ページ）。",
    },
  ],
  total: [
    {
      rank: 1,
      name: "トゥルーデザイン",
      price: "眉2回 40,000円〜＋指名料1,500円/回",
      detail: "追加費用が最小構成（初診0円・再診1,500円）。",
    },
    {
      rank: 2,
      name: "クレアージュ",
      price: "132,000円で3回分（リタッチ44,000円）",
      detail: "初診料3,300円のみ。回数込み設計で総額が読みやすい。",
    },
    {
      rank: 3,
      name: "ファーストアートメイク",
      price: "モニター2回 計88,000円〜＋麻酔0円",
      detail: "クリーム麻酔・初診料0円で追加費用が少ない。",
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
    a: "モニター価格ではメディカルブローの眉1回28,000円〜が最安クラスです。通常価格では、当サイトが公式サイトで確認した範囲ではトゥルーデザインの眉2回40,000円〜（2Dパウダー・写真掲載条件付き）が最安の部類に入ります。ただし、安さだけで選ぶと仕上がりに不満が出る可能性もあるため、技術力とのバランスも重要です。料金は改定されるため、必ず各院公式サイトで最新額をご確認ください。",
  },
  {
    q: "アートメイクの料金に含まれないものはありますか？",
    a: "一般的に施術料金に含まれないことがあるのは、指名料（5,000〜25,000円）、麻酔代（一部クリニック）、カウンセリング料（ほとんど無料）、リタッチ料金です。クレアージュのように指名料無料のクリニックもあります。事前にカウンセリングで総額を確認しましょう。",
  },
  {
    q: "リタッチはいつ必要ですか？費用はどれくらい？",
    a: "一般的に1〜2年でアートメイクは薄くなり始めます。リタッチの費用は1回20,000〜50,000円程度が目安ですが、院・部位・前回施術からの期間で大きく異なり、料金改定も頻繁なため、必ず各院の公式サイト・カウンセリングで最新額をご確認ください。リタッチ料金も含めた総額で比較するのがおすすめです。",
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
            2026年7月最新
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイク料金比較【2026年最新】
            <br className="hidden md:block" />
            眉毛・リップ・アイラインの相場
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            人気クリニック8社の料金を徹底比較。
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
      <section className="py-14 bg-white border-b" id="survey-log">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">料金定点観測について（調査日・改定履歴）</h2>
          <p className="text-center text-gray-500 text-sm mb-6">当サイトは毎月、掲載クリニックの公式サイト料金を確認し、変更があればこのページに履歴を記録します。</p>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 text-left">
                  <th className="py-2 pr-4">調査日</th>
                  <th className="py-2">確認結果</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-bold whitespace-nowrap">2026年7月17日</td>
                  <td className="py-2 text-gray-600">THE ARTMAKE TOKYO（銀座・横浜・名古屋・大阪・福岡・広島の6院／眉中心）の公式実額（2026年7月7日確認・税込）を「実質総額」比較表と料金比較表に追加し、横断比較を主要8院に拡充。眉2回の実勢レンジ上限を更新（通常料金・指名なしベース）。</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-bold whitespace-nowrap">2026年7月16日</td>
                  <td className="py-2 text-gray-600">アートメイクギャラリー（AMG）・Gメディカルアートメイクの公式実額（2026年7月7日確認・税込）を「実質総額」比較表と料金比較表に追加し、横断比較を主要7院に拡充。指名なし・通常料金ベースの実勢レンジを更新。</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-bold whitespace-nowrap">2026年6月23日</td>
                  <td className="py-2 text-gray-600">「眉2回 実質総額（指名料・麻酔・初診/再診込み）比較」を新設。料金本体の数値は6月12日調査値を継続採用（各院公式に改定の告知は確認されず）。次回の料金一斉再調査時に差分を反映予定。</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-bold whitespace-nowrap">2026年6月12日</td>
                  <td className="py-2 text-gray-600">定点観測を開始。5クリニックの公式料金を一斉確認し、本ページの全料金を最新化（メディカルブロー・クレアージュ・デイジー・ファーストアートメイク・トゥルーデザイン）。デイジークリニックは公式サイト内のページ間で料金表記に差異があることを確認（新宿本院ページの数値を採用・要最新確認の注記つき）。</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-400 mt-4">出典: 各クリニック公式サイトの料金ページ。料金は全て税込表記。キャンペーン・院により異なる場合があるため、申込前に必ず公式サイトでご確認ください。</p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-b" id="market-price">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            アートメイク料金の相場
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            主要5院を2026年6月12日、AMG・Gメディカル・THE ARTMAKE TOKYOを2026年7月7日に公式サイト料金で確認（毎月定点更新）
          </p>
          <div className="max-w-3xl mx-auto bg-white border-2 border-rose-200 rounded-xl p-6 mb-8">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-rose-600">結論（当サイト検証値）</strong>：メニュー表の価格だけでなく指名料等を含めた「実際に払う総額」で見ると、当サイト掲載の主要8院では<strong>眉アートメイク2回で概ね約9.3万〜15万円</strong>が指名なし・通常料金の実勢レンジです（トゥルーデザインは写真掲載条件付きで約4.3万円〜、THE ARTMAKE TOKYOも平日モニター2回88,000円〜あり、モニター利用時はこれより下がります）。数値は各院公式サイト確認・税込（主要5院2026年6月12日／AMG・Gメディカル・THE ARTMAKE TOKYO 2026年7月7日）。「安く見えるが指名料で上がる院」「高く見えるが指名料無料の院」があるため、下の比較表は総額ベースでご覧ください。
            </p>
          </div>
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

      {/* 眉2回 実質総額（追加費用込み） */}
      <section className="py-16 px-4 bg-white" id="real-total">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            眉アートメイク「実質総額」比較（2回・追加費用込み）
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            施術料だけでなく<strong>指名料・麻酔・初診/再診料を合算</strong>した「実際に払う総額」の目安。多くの比較サイトが載せない一次データです（主要5院は{surveyDate}、AMG・Gメディカル・THE ARTMAKE TOKYOは2026年7月7日に各院公式サイトで確認）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg text-sm border border-gray-100">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-3 text-left min-w-[130px]">クリニック</th>
                  <th className="p-3 min-w-[150px]">眉2回 施術料</th>
                  <th className="p-3 min-w-[120px]">指名料</th>
                  <th className="p-3 min-w-[150px]">麻酔・初診/再診</th>
                  <th className="p-3 min-w-[150px]">実質総額の目安</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-rose-50/40">
                  <td className="p-3 font-bold">トゥルーデザイン</td>
                  <td className="p-3">40,000円（2D）</td>
                  <td className="p-3">1,500円/回</td>
                  <td className="p-3">初診0円・再診1,500円・麻酔3,000円（ピコ時）</td>
                  <td className="p-3 font-bold text-rose-600">約43,000〜46,000円</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-bold">ファーストアートメイク</td>
                  <td className="p-3">モニター2回 88,000円〜</td>
                  <td className="p-3">5,500〜11,000円</td>
                  <td className="p-3">クリーム麻酔0円・初診0円</td>
                  <td className="p-3 font-bold text-rose-600">約93,500円〜（モニター）</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-bold">メディカルブロー</td>
                  <td className="p-3">2回 90,000円〜（ランク別）</td>
                  <td className="p-3">10,000〜20,000円</td>
                  <td className="p-3">初診2,200円・再診1,100円</td>
                  <td className="p-3 font-bold text-rose-600">約103,000円〜（ランク・指名で変動）</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-bold">デイジークリニック</td>
                  <td className="p-3">Natural Brow 2回 93,800円</td>
                  <td className="p-3">22,000円〜</td>
                  <td className="p-3">公式要確認</td>
                  <td className="p-3 font-bold text-rose-600">約115,800円〜</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-bold">クレアージュ</td>
                  <td className="p-3">132,000円（3回分）</td>
                  <td className="p-3">公式記載なし</td>
                  <td className="p-3">初診3,300円</td>
                  <td className="p-3 font-bold text-rose-600">約135,300円（※3回分）</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-bold">アートメイクギャラリー（AMG）</td>
                  <td className="p-3">140,000円（指名なし基準）</td>
                  <td className="p-3">3,300〜35,000円/回（任意）</td>
                  <td className="p-3">カウンセリング診察料1,100円</td>
                  <td className="p-3 font-bold text-rose-600">約141,100円〜（指名なし・モニター2回88,000円〜／&apos;26.7.7確認）</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-bold">Gメディカルアートメイク</td>
                  <td className="p-3">145,000円（75,000×2−5,000割）</td>
                  <td className="p-3">11,000円/回（任意）</td>
                  <td className="p-3">公式記載なし</td>
                  <td className="p-3 font-bold text-rose-600">約145,000円（指名なし／&apos;26.7.7確認）</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-bold">THE ARTMAKE TOKYO</td>
                  <td className="p-3">150,000円（通常）／平日モニター 88,000円</td>
                  <td className="p-3">5,500〜33,000円/回（任意）</td>
                  <td className="p-3">初診0円・クリーム麻酔0円（相談のみ来院3,300円）</td>
                  <td className="p-3 font-bold text-rose-600">約150,000円（指名なし・通常／平日モニター2回88,000円〜・&apos;26.7.7確認）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※メディカルブロー・クレアージュ・デイジー・ファースト・トゥルーデザインは{surveyDate}、アートメイクギャラリー（AMG）・Gメディカル・THE ARTMAKE TOKYOは2026年7月7日に各院公式サイトで確認した通常料金ベースの概算です。モニター・ランク・院・キャンペーンで変動します。クレアージュは3回セット設計のため回数が他院（2回）と異なる点に注意（1回あたり44,000円）。AMG・Gメディカル・THE ARTMAKE TOKYOの指名料は任意（指名しなければ基準料金）。THE ARTMAKE TOKYOはモニター利用時、アートメイク経験者はモニター料金＋20,000円の公式注記があります。麻酔・初診/再診は施術内容により変わります。最新・正確な総額は各院のカウンセリングでご確認ください。
          </p>
          <p className="text-xs text-gray-500 mt-1">
            「安く見えて高くなる落とし穴」など実質総額の考え方は<a href="/knowledge/price-guide/" className="text-rose-600 underline">料金相場ガイド</a>でも解説しています。
          </p>
        </div>
      </section>

      {/* 5社料金比較表 */}
      <section className="py-16 px-4 bg-gray-50" id="price-table">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            人気8社の料金比較表
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
            ※ 料金は公式サイト情報に基づきます（主要5院2026年6月12日／AMG・Gメディカル・THE ARTMAKE TOKYO 2026年7月7日確認）。税込表示。最新料金は各クリニック公式サイトでご確認ください。
          </p>
        </div>
      </section>

      {/* モニター価格ミニ比較表 */}
      <section className="py-16 px-4 bg-white" id="monitor-price">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            モニター価格ミニ比較表（眉・公式確認分のみ）
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            公式サイトでモニター料金と条件が確認できた院だけを掲載。上の通常料金の実質総額とは適用範囲が異なります。
          </p>
          <div className="max-w-3xl mx-auto mb-8 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              <span className="font-semibold">モニター価格についての注意：</span>
              モニターは、施術前後の症例写真の提供・SNSやサイトへの掲載同意などを条件とする割引枠です。適用条件・対象範囲・提供枚数などが通常価格と異なり、平日限定や審査・経験者加算がある院もあります。金額・条件は各院公式サイトの記載に基づき、確認日を併記しています（税込）。仕上がりや効果を保証するものではありません。申込前に必ず公式サイト・カウンセリングで最新条件をご確認ください。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg text-sm border border-gray-100">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left min-w-[150px]">クリニック</th>
                  <th className="p-4 min-w-[190px]">眉モニター料金</th>
                  <th className="p-4 text-left min-w-[260px]">主な条件</th>
                  <th className="p-4 min-w-[110px]">確認日</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "THE ARTMAKE TOKYO",
                    price: "平日モニター2回 88,000円（土日祝98,000円）",
                    cond: "施術前後の写真をサイト・Instagramに掲載（顔50%以下等のトリミング条件）。アートメイク経験者は+20,000円（公式明記）。",
                    date: "2026年7月7日",
                  },
                  {
                    name: "AMG（アートメイクギャラリー）",
                    price: "モニター2回 平日88,000円（土日98,000円）",
                    cond: "SNSでの症例写真掲載への同意＋アンケート回答が条件（AMGストローク／ナチュラリーパウダー）。",
                    date: "2026年7月7日",
                  },
                  {
                    name: "ファーストアートメイク",
                    price: "眉モニター2回 88,000〜98,000円（平日34,900円/回〜）",
                    cond: "平日枠・写真掲載等の条件付き。クリーム麻酔0円・初診料0円。",
                    date: "2026年6月12日",
                  },
                  {
                    name: "メディカルブロー",
                    price: "初回モニター 28,000〜48,000円（1回・ランク別）",
                    cond: "SNS掲載が条件。ランク・院・キャンペーンで金額が変動。",
                    date: "2026年6月12日",
                  },
                  {
                    name: "ELM CLINIC（表参道院）",
                    price: "眉モニター 48,000〜62,000円（毛並みモニター58,000円）",
                    cond: "表参道院のモニター枠。院・条件は公式サイトで要確認（予約はLINEのみ）。",
                    date: "2026年7月7日",
                  },
                  {
                    name: "トゥルーデザインクリニック",
                    price: "眉2回 40,000円（2D）〜（実質モニター型価格）",
                    cond: "掲載料金自体が施術前後写真をSNS等に掲載する条件付き設定。3D・4Dは60,000〜70,000円に上がる。",
                    date: "2026年6月12日",
                  },
                ].map((m, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}`}
                  >
                    <td className="p-4 font-semibold text-gray-800">{m.name}</td>
                    <td className="p-4 text-center text-rose-600 font-semibold">
                      {m.price}
                    </td>
                    <td className="p-4 text-left text-gray-600 leading-relaxed">
                      {m.cond}
                    </td>
                    <td className="p-4 text-center text-gray-500">{m.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            ※ 本表は公式サイトでモニター料金と条件を確認できた院のみを掲載しています（税込）。Gメディカルアートメイクは公式料金表にモニター価格の記載が確認できず（2026年7月7日時点）、DAZZY CLINICはモニター制度の公式記載が確認できないため、クレアージュは眉単体のモニター料金がなく全顔モニターのみのため、いずれも本表から除外しています。モニターは条件付きの割引枠で通常価格と適用範囲が異なります。金額・条件は改定される場合があるため、申込前に各院公式サイトで最新情報をご確認ください。
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
      <Link href="/review/medicalbrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">メディカルブローの口コミ・評判</p>
      </Link>
      <Link href="/review/dazzy/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">デイジークリニックの口コミ・評判</p>
      </Link>
      <Link href="/compare/medicalbrow-vs-dazzy/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">メディカルブロー vs デイジー比較</p>
      </Link>
      <Link href="/purpose/cheap/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">目的別</span>
        <p className="font-semibold mt-1">安くて上手いアートメイク</p>
      </Link>
      <Link href="/compare/all-clinics/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
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
      
      <div className="max-w-4xl mx-auto px-4">
        <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "料金比較", "item": "https://artmake-hikaku.com/compare/price/"}]}) }} />
    </main>
  );
}
