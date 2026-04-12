import Link from 'next/link'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "リップアートメイク完全ガイド｜施術方法・おすすめクリニック・料金相場【2026年最新】| アートメイク比較ナビ",
  description:
    "リップアートメイクの施術方法（フルリップ・リップライン・グラデーション）、カラー選び、おすすめクリニック3選、料金相場（2回7〜20万円）、ダウンタイムまで完全解説。",
  keywords:
    "リップアートメイク おすすめ,リップアートメイク,リップアートメイク 料金,リップアートメイク ダウンタイム,唇 アートメイク",
  openGraph: {
    title: "リップアートメイク完全ガイド｜施術方法・おすすめクリニック・料金相場",
    description:
      "リップアートメイクの施術方法、カラー選び、おすすめクリニック、料金相場、ダウンタイムまで網羅的に解説。",
    type: "article",
  },
};

export default function LipPage() {
  return (
    <main className="min-h-screen">
      {/* ===== 1. Hero ===== */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            部位別ガイド - リップ
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            リップアートメイク完全ガイド
            <br className="hidden md:block" />
            施術方法・カラー選び・おすすめクリニック
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            すっぴんでも血色感のある唇に。施術方法の違い、カラー選びのコツ、
            <br className="hidden md:block" />
            おすすめクリニック、料金相場、ダウンタイムまで丁寧に解説します。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#methods"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              施術方法を見る
            </a>
            <a
              href="#clinics"
              className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500"
            >
              おすすめクリニック3選
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
                  1. リップアートメイクの施術方法
                </a>
              </li>
              <li>
                <a href="#color" className="hover:underline">
                  2. カラー選びのポイント
                </a>
              </li>
              <li>
                <a href="#clinics" className="hover:underline">
                  3. おすすめクリニック3選
                </a>
              </li>
              <li>
                <a href="#price" className="hover:underline">
                  4. 料金相場
                </a>
              </li>
              <li>
                <a href="#downtime" className="hover:underline">
                  5. ダウンタイム（1週間〜10日）
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  6. よくある質問（FAQ）6問
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ===== 2. 施術方法 ===== */}
      <section className="py-16 px-4 bg-white" id="methods">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            リップアートメイクの施術方法
          </h2>
          <p className="text-center text-gray-600 mb-10">
            リップアートメイクには主に3つの施術方法があります。
            仕上がりの印象が大きく異なるため、理想のリップイメージに合わせて選びましょう。
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: "💋",
                name: "フルリップ",
                badge: "人気No.1",
                badgeColor: "bg-rose-500 text-white",
                desc: "唇全体に色素を入れる施術。くすみをカバーし、リップを塗ったような均一な発色が特徴。血色感がしっかり出るため、すっぴんでも華やかな印象に。",
                who: "唇のくすみが気になる方、リップなしでも華やかに見せたい方",
                merit: "くすみ補正効果が高い。発色がしっかりで存在感のある唇に",
                demerit: "ダウンタイムがやや長め。色選びを慎重に",
              },
              {
                icon: "✏️",
                name: "リップライン",
                badge: "ナチュラル",
                badgeColor: "bg-amber-400 text-amber-900",
                desc: "唇の輪郭（リップライン）のみに色素を入れる施術。唇の形を整え、輪郭をくっきりさせる効果。内側は自分のリップメイクで調整できる自由度が魅力。",
                who: "唇の形を整えたい方、ナチュラルな仕上がりが好みの方",
                merit: "自然な仕上がり。メイクとの組み合わせが自由",
                demerit: "唇全体のくすみ補正は難しい",
              },
              {
                icon: "🌸",
                name: "グラデーションリップ",
                badge: "韓国風",
                badgeColor: "bg-pink-400 text-white",
                desc: "唇の中央から外側に向かって色が薄くなるグラデーション仕上げ。韓国風の「じゅわっと」した血色感が出て、立体的で色っぽい印象に。最もトレンド感がある技法。",
                who: "韓国風リップが好きな方、立体感を出したい方",
                merit: "トレンド感がある。自然なのにおしゃれ",
                demerit: "施術者の技術力で仕上がりに差が出やすい",
              },
            ].map((method, i) => (
              <div
                key={i}
                className="bg-white border border-rose-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl mb-3 text-center">{method.icon}</div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <h3 className="font-bold text-lg text-gray-800">
                    {method.name}
                  </h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-semibold ${method.badgeColor}`}
                  >
                    {method.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {method.desc}
                </p>
                <div className="space-y-2 text-sm border-t border-rose-100 pt-3">
                  <p>
                    <span className="font-semibold text-gray-800">
                      向いている人：
                    </span>
                    <span className="text-gray-600">{method.who}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-green-600">+</span>{" "}
                    <span className="text-gray-600">{method.merit}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-red-400">-</span>{" "}
                    <span className="text-gray-600">{method.demerit}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 施術方法比較テーブル */}
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">比較項目</th>
                  <th className="p-4 text-center">フルリップ</th>
                  <th className="p-4 text-center">リップライン</th>
                  <th className="p-4 text-center">グラデーション</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: "仕上がり",
                    full: "均一な発色",
                    line: "輪郭くっきり",
                    grad: "中央濃→外側薄",
                  },
                  {
                    label: "くすみ補正",
                    full: "◎ 非常に高い",
                    line: "△ 輪郭のみ",
                    grad: "○ 高い",
                  },
                  {
                    label: "自然さ",
                    full: "○",
                    line: "◎ 最も自然",
                    grad: "◎ おしゃれ感",
                  },
                  {
                    label: "施術時間",
                    full: "90〜120分",
                    line: "60〜90分",
                    grad: "90〜120分",
                  },
                  {
                    label: "痛み",
                    full: "中程度",
                    line: "やや少ない",
                    grad: "中程度",
                  },
                  {
                    label: "料金（2回）",
                    full: "10〜20万円",
                    line: "7〜12万円",
                    grad: "10〜18万円",
                  },
                  {
                    label: "ダウンタイム",
                    full: "7〜10日",
                    line: "5〜7日",
                    grad: "7〜10日",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}
                  >
                    <td className="p-4 font-semibold text-gray-800 text-sm">
                      {row.label}
                    </td>
                    <td className="p-4 text-center text-sm">{row.full}</td>
                    <td className="p-4 text-center text-sm">{row.line}</td>
                    <td className="p-4 text-center text-sm">{row.grad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== 3. カラー選び ===== */}
      <section className="py-16 px-4 bg-gray-50" id="color">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            リップアートメイクのカラー選び
          </h2>
          <p className="text-center text-gray-600 mb-10">
            リップアートメイクの仕上がりはカラー選びで大きく左右されます。
            パーソナルカラーや普段のメイクに合わせて選びましょう。
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "ピンク系",
                colors: ["ベビーピンク", "ローズピンク", "モーヴピンク"],
                swatch: "bg-pink-300",
                personal: "ブルべ（夏・冬）",
                impression: "可愛らしい・女性らしい・清楚な印象",
                desc: "最も人気の高いカラー系統。日本人の肌色に馴染みやすく、ナチュラルからフェミニンまで幅広い印象に対応。ブルベ肌の方に特に似合います。",
              },
              {
                name: "コーラル系",
                colors: ["コーラルピンク", "サーモンピンク", "アプリコット"],
                swatch: "bg-orange-300",
                personal: "イエベ（春・秋）",
                impression: "ヘルシー・明るい・親しみやすい印象",
                desc: "オレンジとピンクの中間色。イエベ肌の方に特に似合い、健康的な血色感を演出。カジュアルな印象からオフィス向きまで万能なカラー。",
              },
              {
                name: "レッド系",
                colors: ["チェリーレッド", "ワインレッド", "ブリックレッド"],
                swatch: "bg-red-400",
                personal: "ブルべ冬・イエベ秋",
                impression: "華やか・大人っぽい・セクシーな印象",
                desc: "しっかり発色で存在感のある唇に。くすみが強い方のカバーに最適。はっきりした顔立ちの方や、リップメイクが好きな方におすすめ。",
              },
            ].map((color, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-rose-100"
              >
                <div
                  className={`w-full h-4 rounded-full ${color.swatch} mb-4`}
                />
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {color.name}
                </h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {color.colors.map((c, j) => (
                    <span
                      key={j}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {color.desc}
                </p>
                <div className="space-y-1 text-xs border-t border-gray-100 pt-3">
                  <p>
                    <span className="font-semibold text-gray-700">
                      パーソナルカラー：
                    </span>
                    <span className="text-rose-500">{color.personal}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      印象：
                    </span>
                    {color.impression}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-rose-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3 text-gray-800">
              カラー選びの3つのポイント
            </h3>
            <div className="space-y-3">
              {[
                {
                  num: 1,
                  title: "パーソナルカラーを基準にする",
                  desc: "ブルベ（夏・冬）の方はピンク〜ローズ系、イエベ（春・秋）の方はコーラル〜オレンジ系が馴染みやすい傾向です。",
                },
                {
                  num: 2,
                  title: "普段のメイクより1〜2トーン薄めを選ぶ",
                  desc: "アートメイクは施術直後が最も濃く、定着後は30〜50%薄くなります。普段のリップカラーそのままだと濃すぎる仕上がりになることも。",
                },
                {
                  num: 3,
                  title: "カウンセリングで実際に色を当てて確認する",
                  desc: "モニター上と実際の肌に乗せた時では印象が異なります。必ずカウンセリングで試し塗りをして、日光の下で確認しましょう。",
                },
              ].map((point) => (
                <div key={point.num} className="flex gap-3 items-start">
                  <div className="bg-rose-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {point.num}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-800">
                      {point.title}
                    </p>
                    <p className="text-sm text-gray-600">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. おすすめクリニック3選 ===== */}
      <section className="py-16 px-4 bg-white" id="clinics">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            リップアートメイク おすすめクリニック3選
          </h2>
          <p className="text-center text-gray-600 mb-10">
            リップアートメイクの技術力・症例実績・口コミを総合的に評価し、おすすめクリニックを厳選しました。
          </p>

          <div className="space-y-6">
            {[
              {
                rank: 1,
                name: "メディカルブロー",
                badge: "症例数No.1",
                badgeColor: "bg-yellow-400 text-yellow-900",
                techniques: "フルリップ / リップライン / グラデーションリップ",
                price: "2回 80,000〜170,000円",
                retouch: "35,000〜70,000円",
                areas: "表参道・銀座・新宿・大阪・名古屋・福岡 他全国17院",
                points: [
                  "リップアートメイクの症例数が国内トップクラス",
                  "施術者ランク制（ノービス〜グランドマスター）で技術レベルを選択可能",
                  "くすみ補正に定評があり、唇の色ムラ・くすみが気になる方に特におすすめ",
                  "カラーバリエーションが豊富。パーソナルカラー診断を参考にした色提案",
                ],
              },
              {
                rank: 2,
                name: "デイジークリニック",
                badge: "カラー調合力",
                badgeColor: "bg-pink-400 text-white",
                techniques: "dazzy lip / カイリー lip / グラデーションリップ",
                price: "2回 99,000〜154,000円",
                retouch: "44,000〜66,000円",
                areas: "渋谷・新宿・札幌・大阪・福岡・名古屋",
                points: [
                  "独自の「dazzy lip」技法でじゅわっとした血色感を再現",
                  "カラー調合の自由度が非常に高く、肌色に合わせた微調整が得意",
                  "韓国風グラデーションリップが特に人気",
                  "眉毛とのセットプランでお得に施術可能",
                ],
              },
              {
                rank: 3,
                name: "クレアージュ東京",
                badge: "3回施術で定着",
                badgeColor: "bg-blue-400 text-white",
                techniques: "フルリップ / グラデーションリップ",
                price: "3回 154,000〜198,000円",
                retouch: "44,000〜55,000円",
                areas: "有楽町（東京）",
                points: [
                  "業界唯一の3回施術でリップの色素定着を最大化",
                  "皮膚科・形成外科の医師が在籍で唇のデリケートな施術も安心",
                  "丁寧なカウンセリングで色味・形を入念にすり合わせ",
                  "完全個室・プライバシー配慮。リラックスして施術を受けられる",
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

      {/* ===== 5. 料金相場 ===== */}
      <section className="py-16 px-4 bg-gray-50" id="price">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            リップアートメイクの料金相場
          </h2>
          <p className="text-center text-gray-600 mb-8">
            2026年最新のリップアートメイク料金を施術方法別・クリニック別に比較しました。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">クリニック</th>
                  <th className="p-4 text-center">フルリップ</th>
                  <th className="p-4 text-center">リップライン</th>
                  <th className="p-4 text-center">グラデーション</th>
                  <th className="p-4 text-center">リタッチ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    clinic: "メディカルブロー",
                    full: "100,000〜170,000円",
                    line: "80,000〜120,000円",
                    grad: "100,000〜150,000円",
                    retouch: "35,000〜70,000円",
                  },
                  {
                    clinic: "デイジー",
                    full: "132,000〜154,000円",
                    line: "99,000〜110,000円",
                    grad: "132,000〜154,000円",
                    retouch: "44,000〜66,000円",
                  },
                  {
                    clinic: "クレアージュ",
                    full: "176,000〜198,000円（3回）",
                    line: "154,000円（3回）",
                    grad: "176,000〜198,000円（3回）",
                    retouch: "44,000〜55,000円",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}
                  >
                    <td className="p-4 font-semibold text-gray-800 text-sm">
                      {row.clinic}
                    </td>
                    <td className="p-4 text-center text-sm font-semibold text-rose-600">
                      {row.full}
                    </td>
                    <td className="p-4 text-center text-sm">{row.line}</td>
                    <td className="p-4 text-center text-sm">{row.grad}</td>
                    <td className="p-4 text-center text-sm text-gray-600">
                      {row.retouch}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-rose-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3 text-gray-800">
              リップアートメイクの料金ポイント
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 shrink-0">+</span>
                リップは眉毛より料金が高め。唇はデリケートな部位で高い技術力が求められるため
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 shrink-0">+</span>
                2回セットで7〜20万円が相場。1回のみの施術では色素が定着しにくい
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 shrink-0">+</span>
                モニター価格やセットプラン（眉+リップ）で割引が適用されるケースも多い
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 shrink-0">+</span>
                リタッチは1〜2年後に1回3〜7万円程度。定期的なメンテナンスで色を維持
              </li>
            </ul>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            ※ 料金は税込の目安です。施術者ランク・キャンペーンにより変動します。
          </p>
        </div>
      </section>

      {/* ===== 6. ダウンタイム ===== */}
      <section className="py-16 px-4 bg-white" id="downtime">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            ダウンタイム経過（1週間〜10日）
          </h2>
          <p className="text-center text-gray-600 mb-4">
            リップアートメイクは眉毛に比べてダウンタイムがやや長めです。
            腫れや皮むけの経過を事前に把握しておきましょう。
          </p>
          <div className="bg-red-50 rounded-xl p-4 mb-10 text-center">
            <p className="text-sm text-red-600 font-semibold">
              リップは腫れが目立ちやすい部位です。大事な予定の1〜2週間前は避けて施術しましょう。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                day: "施術当日",
                color: "bg-red-400",
                status: "腫れ・発色濃い",
                desc: "施術直後は唇が大きく腫れ、色も非常に濃く見えます。「たらこ唇」のような状態になることも。痛みやヒリヒリ感を感じる場合があります。",
                care: "処方された軟膏をこまめに塗布。冷やしすぎに注意（保冷剤はタオルで包む）。刺激物・辛い食べ物は避ける。",
              },
              {
                day: "1〜2日目",
                color: "bg-orange-400",
                status: "腫れピーク",
                desc: "腫れのピーク。唇が通常の1.5倍程度に腫れることも。色は引き続き濃いまま。マスクでカバーできるレベルです。",
                care: "軟膏を継続塗布。ストローで飲み物を飲む。熱い食べ物・飲み物を避ける。唇を舐めない。",
              },
              {
                day: "3〜4日目",
                color: "bg-yellow-400",
                status: "腫れ引き・皮むけ開始",
                desc: "腫れが引き始め、薄い皮がむけ始めます。唇の表面がカサカサした状態に。かゆみを感じることがありますが、触らないでください。",
                care: "皮を絶対に剥がさない。保湿を継続。リップメイクはまだNG。",
              },
              {
                day: "5〜7日目",
                color: "bg-green-400",
                status: "皮むけ完了",
                desc: "皮むけがほぼ完了。一時的に色がかなり薄く見えますが、これは正常な経過です。1〜2週間で色が戻ってきます。",
                care: "保湿を継続。刺激の強いリップは避ける。紫外線対策を開始。",
              },
              {
                day: "1〜2週間後",
                color: "bg-blue-400",
                status: "色の定着",
                desc: "色が安定し、最終的な仕上がりに近い状態に。施術直後より40〜60%薄く定着するのが通常です。2回目の施術で色味を調整します。",
                care: "通常のリップメイク再開OK。2回目の施術は4〜6週間後に予約。",
              },
            ].map((period, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="relative z-10 shrink-0">
                  <div
                    className={`${period.color} text-white w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-md`}
                  >
                    <span className="text-[10px] font-semibold leading-none text-center px-1">
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

      {/* ===== 7. FAQ 6問 ===== */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            リップアートメイクに関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "リップアートメイクは痛いですか？",
                a: "唇は顔の中でも特に敏感な部位のため、眉毛より痛みを感じやすい傾向があります。ただし、施術前に麻酔クリームをしっかり塗布し、施術中も追加麻酔が可能なため、「我慢できないほどの痛み」ではありません。「唇をピリピリつねられる感じ」「ヒリヒリする程度」と表現する方が多いです。痛みに弱い方は事前にクリニックに相談しましょう。",
              },
              {
                q: "リップアートメイクの持続期間は？",
                a: "一般的に1〜3年程度です。唇は粘膜に近く代謝が活発なため、眉毛よりも退色が早い傾向があります。食事や歯磨きなど日常的な摩擦も影響します。1〜2年ごとにリタッチを受けることで、美しい発色を維持できます。",
              },
              {
                q: "ヘルペスのリスクはありますか？",
                a: "リップアートメイク後は唇に微細な傷がつくため、口唇ヘルペスのウイルスを保有している方は再発するリスクがあります。多くのクリニックでは予防のために抗ウイルス薬の事前処方を行っています。過去に口唇ヘルペスの経験がある方は、必ずカウンセリング時に申告してください。",
              },
              {
                q: "施術後いつからリップメイクができますか？",
                a: "皮むけが完了する1〜2週間後からリップメイクが可能です。施術後1週間は唇への刺激を最小限にする必要があるため、口紅やグロスの使用は控えてください。施術後は処方された軟膏でしっかり保湿することが大切です。",
              },
              {
                q: "食事はいつから普通にできますか？",
                a: "施術当日から食事は可能ですが、施術後3〜5日間は注意が必要です。辛い食べ物・熱い食べ物・酸っぱい食べ物は刺激になるため避けてください。ストローで飲み物を飲む、食後はすぐに軟膏を塗り直すなどのケアを心がけましょう。",
              },
              {
                q: "どのカラーを選べばいいですか？",
                a: "パーソナルカラーを基準に選ぶのがおすすめです。ブルベの方はピンク〜ローズ系、イエベの方はコーラル〜サーモン系が馴染みやすい傾向です。また、普段のリップカラーより1〜2トーン薄めを選ぶのがポイント。施術直後は濃く見えますが、定着後は30〜50%薄くなります。迷ったらカウンセリングで施術者に相談し、実際に肌に色を当てて確認しましょう。",
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
      <Link href="/parts/eyebrow" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">部位別</span>
        <p className="font-semibold mt-1">眉毛アートメイクの種類・相場</p>
      </Link>
      <Link href="/parts/eyeliner" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">部位別</span>
        <p className="font-semibold mt-1">アイラインアートメイクの種類・相場</p>
      </Link>
      <Link href="/purpose/40s-50s" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">目的別</span>
        <p className="font-semibold mt-1">40代50代向けアートメイク</p>
      </Link>
      <Link href="/knowledge/pain" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">知識</span>
        <p className="font-semibold mt-1">アートメイクの痛みについて</p>
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
            理想のリップカラーを手に入れよう
          </h2>
          <p className="text-xl mb-4 opacity-90">
            すっぴんでも血色感のある、自分らしい唇に。
          </p>
          <p className="text-lg mb-8 opacity-80">
            まずは無料カウンセリングで、あなたに似合うカラーと施術方法を相談してみましょう。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/"
              className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              おすすめクリニックランキングを見る
            </a>
            <a
              href="/parts/eyebrow"
              className="inline-block bg-transparent text-white border-2 border-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-white/10 transition-colors"
            >
              眉毛アートメイクガイドを見る
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
