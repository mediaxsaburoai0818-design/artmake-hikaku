import Link from 'next/link'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "眉毛アートメイク完全ガイド｜2D/3D/4D/7Dの違い・おすすめクリニック5選【2026年最新】| アートメイク比較ナビ",
  description:
    "眉毛アートメイクの施術方法（2D・3D・4D・7D）の違いを徹底比較。デザインの種類、おすすめクリニック5社、料金相場、ダウンタイム経過まで完全解説。眉毛アートメイク選びに必要な情報がすべてわかる。",
  keywords:
    "眉毛アートメイク,眉毛アートメイク おすすめ,3D 4D 違い,眉毛アートメイク 料金,眉アートメイク クリニック,眉毛アートメイク ダウンタイム",
  openGraph: {
    title: "眉毛アートメイク完全ガイド｜2D/3D/4D/7Dの違い・おすすめクリニック5選",
    description:
      "眉毛アートメイクの施術方法4種の違い、デザインの種類、おすすめクリニック、料金相場、ダウンタイムまで網羅的に解説。",
    type: "article",
  },
};

export default function EyebrowPage() {
  return (
    <main className="min-h-screen">
      {/* ===== 1. Hero ===== */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            部位別ガイド - 眉毛
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            眉毛アートメイク完全ガイド
            <br className="hidden md:block" />
            2D/3D/4D/7Dの違いを徹底比較
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            施術方法の違い、デザインの種類、おすすめクリニック5社、
            <br className="hidden md:block" />
            料金相場からダウンタイムまで、初めての方にも丁寧に解説します。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#methods"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              施術方法の違いを見る
            </a>
            <a
              href="#clinics"
              className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500"
            >
              おすすめクリニック5選
            </a>
          </div>
        </div>
      </section>

      {/* ===== 目次 ===== */}
      <section className="py-10 px-4 bg-white border-b">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-bold mb-4 text-gray-800">目次</h2>
          <nav>
            <ol className="space-y-2 text-sm text-rose-600">
              <li>
                <a href="#methods" className="hover:underline">
                  1. 施術方法4種（2D/3D/4D/7D）の詳細比較
                </a>
              </li>
              <li>
                <a href="#design" className="hover:underline">
                  2. デザインの種類
                </a>
              </li>
              <li>
                <a href="#clinics" className="hover:underline">
                  3. おすすめクリニック5選
                </a>
              </li>
              <li>
                <a href="#price" className="hover:underline">
                  4. 料金相場テーブル
                </a>
              </li>
              <li>
                <a href="#downtime" className="hover:underline">
                  5. ダウンタイム経過（1日目〜2週間）
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  6. よくある質問（FAQ）8問
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ===== 2. 施術方法4種の詳細比較 ===== */}
      <section className="py-16 px-4 bg-white" id="methods">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            施術方法4種（2D/3D/4D/7D）の詳細比較
          </h2>
          <p className="text-center text-gray-600 mb-10">
            眉毛アートメイクには大きく4つの施術方法があります。
            仕上がりのイメージや持続期間、料金が異なるため、自分の理想に合った技法を選ぶことが重要です。
          </p>

          <div className="overflow-x-auto mb-10">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">技法</th>
                  <th className="p-4 text-center">別名</th>
                  <th className="p-4 text-center">施術方法</th>
                  <th className="p-4 text-center">仕上がり</th>
                  <th className="p-4 text-center">持続期間</th>
                  <th className="p-4 text-center">痛み</th>
                  <th className="p-4 text-center">料金目安（2回）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "2D",
                    alias: "パウダー / グラデーション",
                    method: "マシンで細かいドットを均一に注入",
                    finish: "ふんわりパウダー眉。メイクしたような仕上がり",
                    duration: "1〜2年",
                    pain: "少ない",
                    price: "5〜8万円",
                  },
                  {
                    name: "3D",
                    alias: "ストローク / 毛並み",
                    method: "手彫りで1本1本毛を描く",
                    finish: "自毛のような自然な毛並み。すっぴんでも自然",
                    duration: "1〜2年",
                    pain: "やや感じる",
                    price: "6〜10万円",
                  },
                  {
                    name: "4D",
                    alias: "コンビネーション / ミックス",
                    method: "3D（手彫り）+2D（マシン）の組み合わせ",
                    finish: "立体的で完成度が高い。メイク感+自然さの両立",
                    duration: "1〜3年",
                    pain: "中程度",
                    price: "8〜13万円",
                  },
                  {
                    name: "7D",
                    alias: "ストロークR / ハイパーリアル",
                    method: "極細ニードルで毛流れまで再現する手彫り",
                    finish: "最も自然。毛の太さ・流れ・濃淡まで再現",
                    duration: "1〜3年",
                    pain: "中程度",
                    price: "10〜17万円",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}
                  >
                    <td className="p-3 font-bold text-center text-rose-600">
                      {row.name}
                    </td>
                    <td className="p-3 text-center text-sm">{row.alias}</td>
                    <td className="p-3 text-sm">{row.method}</td>
                    <td className="p-3 text-sm">{row.finish}</td>
                    <td className="p-3 text-center text-sm">{row.duration}</td>
                    <td className="p-3 text-center text-sm">{row.pain}</td>
                    <td className="p-3 text-center text-sm font-semibold">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 技法ごとの詳細カード */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "2D（パウダー眉）",
                badge: "ふんわり派におすすめ",
                color: "bg-pink-100 text-pink-700",
                who: "メイクしている感が欲しい方、眉が薄い方、普段からパウダーで眉を描く方",
                merit: "均一な仕上がりで色ムラが少ない。施術時間が短く、痛みも少ない",
                demerit: "すっぴん時にやや不自然に見える場合がある",
              },
              {
                name: "3D（ストローク眉）",
                badge: "ナチュラル派におすすめ",
                color: "bg-amber-100 text-amber-700",
                who: "すっぴんでも自然に見せたい方、眉毛が部分的に欠けている方",
                merit: "1本1本の毛並みを再現し、自毛のような仕上がり",
                demerit: "施術者の技術力に仕上がりが大きく左右される",
              },
              {
                name: "4D（コンビネーション眉）",
                badge: "人気No.1",
                color: "bg-rose-100 text-rose-700",
                who: "自然さとメイク感の両方が欲しい方、どの技法か迷っている方",
                merit: "3Dの自然な毛並み+2Dのふんわり感で最も完成度が高い",
                demerit: "料金がやや高め。施術時間も長くなる傾向",
              },
              {
                name: "7D（ハイパーリアル眉）",
                badge: "最高級仕上がり",
                color: "bg-purple-100 text-purple-700",
                who: "とにかく自然さを追求したい方、予算に余裕がある方",
                merit: "毛の太さ・濃淡・流れまで再現。見分けがつかないレベルの自然さ",
                demerit: "対応クリニックが限られる。料金が最も高い",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-rose-200 rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-bold text-lg text-gray-800">
                    {item.name}
                  </h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-semibold ${item.color}`}
                  >
                    {item.badge}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold text-gray-800">
                      向いている人：
                    </span>
                    {item.who}
                  </p>
                  <p>
                    <span className="font-semibold text-green-600">
                      メリット：
                    </span>
                    {item.merit}
                  </p>
                  <p>
                    <span className="font-semibold text-red-400">
                      デメリット：
                    </span>
                    {item.demerit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. デザインの種類 ===== */}
      <section className="py-16 px-4 bg-gray-50" id="design">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            眉毛デザインの種類
          </h2>
          <p className="text-center text-gray-600 mb-10">
            眉毛の形は顔の印象を大きく左右します。骨格や顔立ちに合ったデザインを選ぶことで、
            より自然で魅力的な仕上がりになります。
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "〰️",
                name: "アーチ眉",
                desc: "緩やかなカーブを描く定番の眉。女性らしい柔らかさと上品さを演出。丸顔・卵型の方に特におすすめ。",
                who: "女性らしい印象にしたい方",
              },
              {
                icon: "➖",
                name: "ストレート眉（平行眉）",
                desc: "眉山を作らず水平に近い形。若々しくナチュラルな印象に。韓国風の眉として人気が高い。面長の方に特におすすめ。",
                who: "トレンド感・若見えしたい方",
              },
              {
                icon: "📐",
                name: "角度眉（キリッと眉）",
                desc: "眉山にしっかり角度をつけたシャープな眉。知的でクールな印象を与え、意思の強さを演出。逆三角形の方におすすめ。",
                who: "知的・クールな印象にしたい方",
              },
              {
                icon: "🌿",
                name: "ナチュラル眉",
                desc: "自眉の形を活かしつつ、足りない部分を補う自然なデザイン。アートメイクだと気づかれにくい仕上がりが特徴。",
                who: "自然体を大切にしたい方",
              },
              {
                icon: "✨",
                name: "上がり眉",
                desc: "眉尻を少し上げたデザイン。明るく活発な印象を与える。たれ目がちの方のバランス調整にも効果的。",
                who: "明るい印象にしたい方",
              },
              {
                icon: "🎀",
                name: "太眉（しっかり眉）",
                desc: "やや太めに仕上げる眉。顔全体に存在感が出て、小顔効果も期待できる。メイク映えするデザイン。",
                who: "存在感のある眉にしたい方",
              },
            ].map((design, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-rose-100 hover:shadow-md transition"
              >
                <div className="text-3xl mb-3">{design.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {design.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {design.desc}
                </p>
                <span className="inline-block bg-rose-50 text-rose-600 text-xs px-3 py-1 rounded-full font-semibold">
                  {design.who}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. おすすめクリニック5選 ===== */}
      <section className="py-16 px-4 bg-white" id="clinics">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            眉毛アートメイク おすすめクリニック5選
          </h2>
          <p className="text-center text-gray-600 mb-10">
            技術力・症例数・料金・口コミを総合的に評価し、眉毛アートメイクにおすすめのクリニックを厳選しました。
          </p>

          <div className="space-y-6">
            {[
              {
                rank: 1,
                name: "メディカルブロー",
                badge: "症例数No.1",
                badgeColor: "bg-yellow-400 text-yellow-900",
                techniques: "2D / 3D / 4D / 7D（6Dストローク）",
                price: "2回 55,000〜150,000円",
                retouch: "22,000〜60,000円",
                areas: "表参道・銀座・新宿・大阪・名古屋・福岡 他全国17院",
                points: [
                  "年間症例数60,000件以上で国内トップクラス",
                  "施術者ランク制で技術レベルを選べる（ノービス〜グランドマスター）",
                  "6Dストロークで超極細の毛並みを再現",
                  "モニター価格あり（最大50%OFF）",
                ],
              },
              {
                rank: 2,
                name: "デイジークリニック",
                badge: "デザイン力",
                badgeColor: "bg-pink-400 text-white",
                techniques: "dazzy brow（4D） / natural brow（3D） / powder brow（2D）",
                price: "2回 49,800〜132,000円",
                retouch: "33,000〜55,000円",
                areas: "渋谷・新宿・札幌・大阪・福岡・名古屋",
                points: [
                  "独自技法「dazzy brow」は自然さとメイク感を両立",
                  "カラー調合の自由度が高く、肌色に合わせた微調整が得意",
                  "オンラインカウンセリング対応で来院前に相談可能",
                  "眉毛・リップ・アイラインのセットプランあり",
                ],
              },
              {
                rank: 3,
                name: "クレアージュ東京",
                badge: "3回施術",
                badgeColor: "bg-blue-400 text-white",
                techniques: "パウダーグラデーション / コンビネーション / ストローク",
                price: "3回 132,000〜198,000円",
                retouch: "33,000〜55,000円",
                areas: "有楽町（東京）",
                points: [
                  "業界唯一の3回施術で色素の定着を最大化",
                  "開院から10,000件以上の実績",
                  "皮膚科・形成外科の医師が在籍で安心",
                  "完全個室でプライバシーに配慮",
                ],
              },
              {
                rank: 4,
                name: "湘南美容クリニック",
                badge: "コスパ良",
                badgeColor: "bg-green-400 text-white",
                techniques: "2D / 3D / 4D",
                price: "1回 34,650〜59,400円",
                retouch: "20,000〜35,000円",
                areas: "全国100院以上",
                points: [
                  "大手ならではのリーズナブルな価格設定",
                  "全国100院以上でアクセスしやすい",
                  "SBCポイントで実質割引あり",
                  "他の美容施術との併用がしやすい",
                ],
              },
              {
                rank: 5,
                name: "アートメイクギャラリー",
                badge: "技術力",
                badgeColor: "bg-purple-400 text-white",
                techniques: "AMGストローク / AMGオーダーメイド",
                price: "2回 110,000〜154,000円",
                retouch: "44,000〜66,000円",
                areas: "銀座・横浜・梅田・芦屋",
                points: [
                  "海外の最新技術を導入。国際大会受賞歴のある施術者が在籍",
                  "完全オーダーメイドデザインで黄金比を徹底追求",
                  "他院修正やカバーアップにも対応",
                  "丁寧なカウンセリングが高評価（60〜90分）",
                ],
              },
            ].map((clinic) => (
              <div
                key={clinic.rank}
                className="bg-white border border-rose-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                    {clinic.rank}
                  </div>
                  <h3 className="font-bold text-xl text-gray-800">
                    {clinic.name}
                  </h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-semibold ${clinic.badgeColor}`}
                  >
                    {clinic.badge}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold text-gray-800">
                        対応技法：
                      </span>
                      <span className="text-gray-600">{clinic.techniques}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-gray-800">
                        料金：
                      </span>
                      <span className="text-rose-600 font-semibold">
                        {clinic.price}
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold text-gray-800">
                        リタッチ：
                      </span>
                      <span className="text-gray-600">{clinic.retouch}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-gray-800">
                        院数・エリア：
                      </span>
                      <span className="text-gray-600">{clinic.areas}</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-2">
                      おすすめポイント：
                    </p>
                    <ul className="space-y-1">
                      {clinic.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 flex items-start gap-2"
                        >
                          <span className="text-rose-400 shrink-0">+</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. 料金相場テーブル ===== */}
      <section className="py-16 px-4 bg-gray-50" id="price">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            眉毛アートメイクの料金相場
          </h2>
          <p className="text-center text-gray-600 mb-8">
            2026年最新の眉毛アートメイク料金を技法別・クリニック別に比較しました。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">クリニック</th>
                  <th className="p-4 text-center">2D（パウダー）</th>
                  <th className="p-4 text-center">3D（ストローク）</th>
                  <th className="p-4 text-center">4D（コンビ）</th>
                  <th className="p-4 text-center">リタッチ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    clinic: "メディカルブロー",
                    d2: "55,000円〜",
                    d3: "80,000円〜",
                    d4: "110,000円〜",
                    retouch: "22,000円〜",
                  },
                  {
                    clinic: "デイジー",
                    d2: "49,800円〜",
                    d3: "69,800円〜",
                    d4: "99,800円〜",
                    retouch: "33,000円〜",
                  },
                  {
                    clinic: "クレアージュ",
                    d2: "132,000円（3回）",
                    d3: "143,000円（3回）",
                    d4: "198,000円（3回）",
                    retouch: "33,000円〜",
                  },
                  {
                    clinic: "湘南美容",
                    d2: "34,650円（1回）",
                    d3: "49,500円（1回）",
                    d4: "59,400円（1回）",
                    retouch: "20,000円〜",
                  },
                  {
                    clinic: "AMGギャラリー",
                    d2: "-",
                    d3: "110,000円〜",
                    d4: "132,000円〜",
                    retouch: "44,000円〜",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}
                  >
                    <td className="p-4 font-semibold text-gray-800 text-sm">
                      {row.clinic}
                    </td>
                    <td className="p-4 text-center text-sm">{row.d2}</td>
                    <td className="p-4 text-center text-sm">{row.d3}</td>
                    <td className="p-4 text-center text-sm font-semibold text-rose-600">
                      {row.d4}
                    </td>
                    <td className="p-4 text-center text-sm text-gray-600">
                      {row.retouch}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 text-center">
            ※ 料金は税込の目安です。施術者ランク・キャンペーンにより変動します。モニター価格はさらにお得になる場合があります。
          </p>
        </div>
      </section>

      {/* ===== 6. ダウンタイム経過 ===== */}
      <section className="py-16 px-4 bg-white" id="downtime">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            ダウンタイム経過（1日目〜2週間）
          </h2>
          <p className="text-center text-gray-600 mb-10">
            眉毛アートメイク施術後の経過と注意点を時系列でまとめました。
          </p>

          <div className="space-y-4">
            {[
              {
                day: "施術当日",
                color: "bg-red-400",
                status: "赤み・腫れ",
                desc: "施術直後は色が濃く見えます。赤みや軽い腫れがありますが、数時間で落ち着くことがほとんど。施術部位を触らず、水を避けてください。",
                care: "ワセリンをこまめに塗布。洗顔時は施術部位を避ける。",
              },
              {
                day: "1〜2日目",
                color: "bg-orange-400",
                status: "色が濃い",
                desc: "施術直後より色がさらに濃く見える時期。「濃すぎるかも」と不安になりますが、正常な経過です。腫れはほぼ引きます。",
                care: "引き続きワセリン塗布。サウナ・激しい運動・プール・飲酒は避ける。",
              },
              {
                day: "3〜5日目",
                color: "bg-yellow-400",
                status: "かさぶた形成",
                desc: "薄いかさぶたが形成され始めます。かゆみを感じることがありますが、絶対にかさぶたを剥がさないでください。色ムラの原因になります。",
                care: "かさぶたを触らない。保湿を継続。メイクは施術部位を避ける。",
              },
              {
                day: "5〜7日目",
                color: "bg-green-400",
                status: "かさぶた剥離",
                desc: "かさぶたが自然に剥がれ始めます。一時的に色が薄く感じられますが、これも正常な経過。まだら状に見えることもあります。",
                care: "自然に剥がれるのを待つ。無理に剥がさない。保湿を継続。",
              },
              {
                day: "1〜2週間",
                color: "bg-blue-400",
                status: "色の定着",
                desc: "かさぶたが完全に取れ、色が落ち着きます。施術直後より30〜50%ほど薄く見えるのが通常。最終的な仕上がりに近い色味になります。",
                care: "紫外線対策を開始。クレンジングは優しく。2回目の施術は4〜6週間後に。",
              },
            ].map((period, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="relative z-10 shrink-0">
                  <div
                    className={`${period.color} text-white w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-md`}
                  >
                    <span className="text-[10px] font-semibold leading-none">
                      {period.status}
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 flex-1">
                  <h3 className="font-bold text-lg mb-1 text-gray-800">
                    {period.day}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    {period.desc}
                  </p>
                  <p className="text-xs text-rose-500 font-semibold">
                    ケア：{period.care}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. FAQ 8問 ===== */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            眉毛アートメイクに関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "眉毛アートメイクの3Dと4Dの違いは何ですか？",
                a: "3D（ストローク）は手彫りで1本ずつ毛並みを描く技法で、自毛のような自然な仕上がりが特徴です。4D（コンビネーション）は3Dの毛並み描写に加えて、2D（パウダー）の技法を組み合わせた施術です。毛並みの自然さにふんわり感がプラスされ、立体的で完成度の高い仕上がりになります。メイクしている時もすっぴんの時も美しく見えるため、現在最も人気のある技法です。",
              },
              {
                q: "眉毛アートメイクは何回で完成しますか？",
                a: "一般的には2回の施術で完成します。1回目で土台を作り、4〜6週間後の2回目で色味やデザインを微調整して仕上げます。1回だけだと色素の定着率が30〜50%程度のため、2回目で密度を上げることできれいに仕上がります。なお、クレアージュ東京は3回に分けて施術するアプローチを採用しています。",
              },
              {
                q: "眉毛アートメイクの持続期間はどれくらいですか？",
                a: "一般的に1〜3年程度です。技法（2D/3D/4Dなど）、肌質（脂性肌の方は退色が早い傾向）、生活習慣（紫外線、ピーリング、代謝の速さなど）によって個人差があります。1〜2年ごとにリタッチを受けることで、美しい状態を長期間維持できます。",
              },
              {
                q: "痛みはどれくらいですか？麻酔は効きますか？",
                a: "施術前に麻酔クリームを塗布するため、強い痛みを感じることはほとんどありません。「毛抜きで毛を抜く程度」「軽いチクチク感」と表現する方が多いです。2D（マシン）は比較的痛みが少なく、3D/4D（手彫り含む）はやや感じる方もいます。痛みに弱い方は事前にクリニックに相談すると、追加麻酔にも対応してもらえます。",
              },
              {
                q: "どのデザイン（眉の形）を選べばいいですか？",
                a: "顔の形によって似合う眉は異なります。丸顔の方はアーチ眉、面長の方はストレート眉（平行眉）、逆三角形の方はやや角度のある眉がおすすめです。ただし、カウンセリング時にプロの施術者が骨格・表情筋・黄金比をもとに最適なデザインを提案してくれるので、あまり悩みすぎなくても大丈夫です。",
              },
              {
                q: "アートメイク後にメイクはできますか？",
                a: "施術後1週間程度は施術部位（眉）へのメイクは避けてください。かさぶたが完全に取れるまでは、クレンジングや化粧品が色素の定着を妨げる恐れがあります。眉以外の部分（ファンデーション、アイメイク等）は翌日から可能なクリニックが多いです。",
              },
              {
                q: "失敗した場合、修正や除去はできますか？",
                a: "修正は可能です。色味が薄すぎる・濃すぎる場合はリタッチ時に調整できます。形の大幅な変更や完全な除去にはレーザー治療が必要になることがあり、複数回の施術と追加費用がかかります。失敗を防ぐには、症例写真を多数確認し、カウンセリングで入念にデザインを決めることが大切です。",
              },
              {
                q: "男性でも眉毛アートメイクは受けられますか？",
                a: "もちろん受けられます。メンズアートメイクは年々需要が増加しており、薄眉・左右非対称・まばら眉に悩む男性に人気です。男性の場合は太めのストレート眉やナチュラル眉が人気で、メイクをしている印象にならない自然な仕上がりが求められます。メディカルブローやデイジーなど、メンズの症例実績が豊富なクリニックがおすすめです。",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-lg shadow-sm group"
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-gray-50 transition-colors flex justify-between items-center">
                  <span>
                    Q{i + 1}. {faq.q}
                  </span>
                  <span className="text-rose-400 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 py-4 border-t text-gray-600 leading-relaxed text-sm">
                  <span className="font-semibold text-rose-500">A.</span>{" "}
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
      <Link href="/parts/lip" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">部位別</span>
        <p className="font-semibold mt-1">リップアートメイクの種類・相場</p>
      </Link>
      <Link href="/parts/eyeliner" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">部位別</span>
        <p className="font-semibold mt-1">アイラインアートメイクの種類・相場</p>
      </Link>
      <Link href="/purpose/natural" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">目的別</span>
        <p className="font-semibold mt-1">自然な仕上がりのアートメイク</p>
      </Link>
      <Link href="/purpose/cheap" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">目的別</span>
        <p className="font-semibold mt-1">安くて上手いアートメイク</p>
      </Link>
      <Link href="/about" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">基本情報</span>
        <p className="font-semibold mt-1">アートメイクとは？基礎知識まとめ</p>
      </Link>
          </div>
        </div>
      </section>

      {/* ===== 8. CTA ===== */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            自分にぴったりの眉毛アートメイクを見つけよう
          </h2>
          <p className="text-xl mb-4 opacity-90">
            技法・デザイン・クリニック選びで仕上がりは大きく変わります。
          </p>
          <p className="text-lg mb-8 opacity-80">
            まずは無料カウンセリングで、あなたに最適な眉毛デザインを相談してみましょう。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/"
              className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              おすすめクリニックランキングを見る
            </a>
            <a
              href="/compare"
              className="inline-block bg-transparent text-white border-2 border-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-white/10 transition-colors"
            >
              クリニック比較表を見る
            </a>
          </div>
          <p className="mt-6 text-sm opacity-70">
            2026年4月最新 - 料金・技術力・口コミで厳選
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      
    </main>
  );
}
