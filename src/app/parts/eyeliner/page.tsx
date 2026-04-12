import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アイラインアートメイク完全ガイド｜施術方法・おすすめクリニック・料金相場【2026年最新】| アートメイク比較ナビ",
  description:
    "アイラインアートメイクの施術方法（上アイライン・下アイライン・テールあり・粘膜ライン）、デザインの種類、おすすめクリニック、料金相場（2回5〜10万円）、ダウンタイム、注意点を完全解説。",
  keywords:
    "アイライン アートメイク おすすめ,アイラインアートメイク,アイライン アートメイク 料金,アイライン アートメイク ダウンタイム,目元 アートメイク",
  openGraph: {
    title: "アイラインアートメイク完全ガイド｜施術方法・おすすめクリニック・料金相場",
    description:
      "アイラインアートメイクの施術方法、デザインの種類、おすすめクリニック、料金相場、ダウンタイム、注意点を網羅的に解説。",
    type: "article",
  },
};

export default function EyelinerPage() {
  return (
    <main className="min-h-screen">
      {/* ===== 1. Hero ===== */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            部位別ガイド - アイライン
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アイラインアートメイク完全ガイド
            <br className="hidden md:block" />
            施術方法・デザイン・おすすめクリニック
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            目元の印象を自然にアップ。施術方法の違い、デザインの種類、
            <br className="hidden md:block" />
            おすすめクリニック、料金相場、注意点まで丁寧に解説します。
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
              おすすめクリニック
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
                  1. アイラインアートメイクの施術方法
                </a>
              </li>
              <li>
                <a href="#design" className="hover:underline">
                  2. デザインの種類
                </a>
              </li>
              <li>
                <a href="#clinics" className="hover:underline">
                  3. おすすめクリニック
                </a>
              </li>
              <li>
                <a href="#price" className="hover:underline">
                  4. 料金相場
                </a>
              </li>
              <li>
                <a href="#downtime" className="hover:underline">
                  5. ダウンタイム
                </a>
              </li>
              <li>
                <a href="#caution" className="hover:underline">
                  6. 注意点（コンタクト・まつエク）
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  7. よくある質問（FAQ）6問
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
            アイラインアートメイクの施術方法
          </h2>
          <p className="text-center text-gray-600 mb-10">
            アイラインアートメイクには4つの施術方法があります。
            目元の悩みや理想の仕上がりに合わせて選びましょう。
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: "👁️",
                name: "上アイライン",
                badge: "人気No.1",
                badgeColor: "bg-rose-500 text-white",
                desc: "上まぶたのまつげの間を埋めるように色素を入れる最もスタンダードな施術。目を開けた時にアイラインが自然に見え、目力がアップします。",
                who: "目力をアップさせたい方、毎日のアイラインが面倒な方",
                merit: "最もナチュラル。すっぴんでも目元がはっきり",
                demerit: "劇的な変化は出にくい（自然さ重視のため）",
                time: "60〜90分",
                price: "2回 40,000〜70,000円",
              },
              {
                icon: "✨",
                name: "下アイライン",
                badge: "目元強調",
                badgeColor: "bg-amber-400 text-amber-900",
                desc: "下まぶたのまつげの際に沿って色素を入れる施術。目の縦幅が強調され、大きく見える効果があります。単体よりも上アイラインとのセットが人気。",
                who: "目を大きく見せたい方、下まぶたのメイク崩れが気になる方",
                merit: "目の縦幅がアップ。たれ目・つり目の印象調整にも",
                demerit: "単体だと不自然に見える場合がある",
                time: "40〜60分",
                price: "2回 30,000〜50,000円",
              },
              {
                icon: "🎨",
                name: "テールあり（跳ね上げライン）",
                badge: "デザイン性",
                badgeColor: "bg-pink-400 text-white",
                desc: "目尻にテール（跳ね上げ）を加えたデザイン。キャットラインとも呼ばれ、目尻が上がることでキリッとした印象やセクシーな目元に。",
                who: "目尻を印象的に見せたい方、アイメイク感が欲しい方",
                merit: "華やかで印象的な目元に。小顔効果も期待できる",
                demerit: "トレンドの変化で古く見える可能性。メイクの自由度が下がる",
                time: "60〜90分",
                price: "2回 50,000〜80,000円",
              },
              {
                icon: "💫",
                name: "粘膜ライン（インライン）",
                badge: "究極のナチュラル",
                badgeColor: "bg-purple-400 text-white",
                desc: "まつげの生え際よりもさらに内側の粘膜部分に色素を入れる施術。最もナチュラルで、アートメイクをしていることが全くわからないレベルの仕上がり。",
                who: "とにかく自然に目力を出したい方、アートメイクがバレたくない方",
                merit: "最も自然。まつげが濃く見える効果",
                demerit: "対応クリニックが限られる。退色が早い傾向",
                time: "60〜90分",
                price: "2回 50,000〜90,000円",
              },
            ].map((method, i) => (
              <div
                key={i}
                className="bg-white border border-rose-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{method.icon}</span>
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
                  <div className="flex gap-4 pt-2">
                    <span className="text-xs text-gray-500">
                      施術時間：{method.time}
                    </span>
                    <span className="text-xs text-rose-500 font-semibold">
                      {method.price}
                    </span>
                  </div>
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
                  <th className="p-4 text-center">上アイライン</th>
                  <th className="p-4 text-center">下アイライン</th>
                  <th className="p-4 text-center">テールあり</th>
                  <th className="p-4 text-center">粘膜ライン</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: "自然さ",
                    upper: "◎",
                    lower: "○",
                    tail: "○",
                    inner: "◎◎",
                  },
                  {
                    label: "目力アップ",
                    upper: "○",
                    lower: "○",
                    tail: "◎",
                    inner: "○",
                  },
                  {
                    label: "デザイン性",
                    upper: "△",
                    lower: "△",
                    tail: "◎",
                    inner: "△",
                  },
                  {
                    label: "痛み",
                    upper: "やや感じる",
                    lower: "感じる",
                    tail: "やや感じる",
                    inner: "感じやすい",
                  },
                  {
                    label: "退色の速さ",
                    upper: "普通",
                    lower: "やや早い",
                    tail: "普通",
                    inner: "早い",
                  },
                  {
                    label: "料金（2回）",
                    upper: "4〜7万円",
                    lower: "3〜5万円",
                    tail: "5〜8万円",
                    inner: "5〜9万円",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}
                  >
                    <td className="p-4 font-semibold text-gray-800 text-sm">
                      {row.label}
                    </td>
                    <td className="p-4 text-center text-sm">{row.upper}</td>
                    <td className="p-4 text-center text-sm">{row.lower}</td>
                    <td className="p-4 text-center text-sm">{row.tail}</td>
                    <td className="p-4 text-center text-sm">{row.inner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== 3. デザインの種類 ===== */}
      <section className="py-16 px-4 bg-gray-50" id="design">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            アイラインデザインの種類
          </h2>
          <p className="text-center text-gray-600 mb-10">
            目の形や理想の印象に合わせて、アイラインのデザインを選びましょう。
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "〜",
                name: "ナチュラルライン",
                desc: "まつげの間を埋める程度の自然なライン。アートメイクだとわからないレベルの仕上がり。初めてアイラインアートメイクをする方に最適。",
                impression: "ナチュラル・清楚",
              },
              {
                icon: "→",
                name: "キャットライン",
                desc: "目尻を上向きに跳ね上げたシャープなデザイン。目元にキリッとした印象を与え、小顔効果も。しっかりメイク感が欲しい方向け。",
                impression: "クール・セクシー",
              },
              {
                icon: "↘",
                name: "たれ目ライン",
                desc: "目尻を下向きに伸ばしたデザイン。優しく柔らかい印象を演出。つり目がコンプレックスの方や、フェミニンな目元にしたい方におすすめ。",
                impression: "やさしい・フェミニン",
              },
              {
                icon: "━",
                name: "太めライン",
                desc: "通常より太めに入れるデザイン。目元の存在感が増し、アイメイクをしっかりした時のような華やかさに。二重幅が広い方に似合いやすい。",
                impression: "華やか・ゴージャス",
              },
              {
                icon: "...",
                name: "細めライン（インライン風）",
                desc: "極細のラインでまつげの根元だけを埋めるデザイン。最もすっぴん感が強く、まつげが増えたような自然な印象に。一重・奥二重の方にも好相性。",
                impression: "超ナチュラル・まつげ増量感",
              },
              {
                icon: "↔",
                name: "上下セット",
                desc: "上アイラインと下アイラインの両方を施術。目の上下から挟み込むことで目のフレームが際立ち、最も目力がアップするデザイン。",
                impression: "目力最大・印象的",
              },
            ].map((design, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-rose-100 hover:shadow-md transition"
              >
                <div className="text-3xl mb-3 text-center font-bold text-rose-400">
                  {design.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800 text-center">
                  {design.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {design.desc}
                </p>
                <span className="inline-block bg-rose-50 text-rose-600 text-xs px-3 py-1 rounded-full font-semibold">
                  {design.impression}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. おすすめクリニック ===== */}
      <section className="py-16 px-4 bg-white" id="clinics">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            アイラインアートメイク おすすめクリニック
          </h2>
          <p className="text-center text-gray-600 mb-10">
            アイラインアートメイクの技術力・症例実績・口コミを総合的に評価し、おすすめクリニックを厳選しました。
          </p>

          <div className="space-y-6">
            {[
              {
                rank: 1,
                name: "メディカルブロー",
                badge: "症例数No.1",
                badgeColor: "bg-yellow-400 text-yellow-900",
                techniques: "上アイライン / 下アイライン / テールあり",
                price: "2回 60,000〜80,000円（上）",
                retouch: "25,000〜40,000円",
                areas: "表参道・銀座・新宿・大阪・名古屋・福岡 他全国17院",
                points: [
                  "アイライン施術の症例数が豊富で安心感が高い",
                  "施術者ランク制で技術レベルを選べる",
                  "上下セットプランでお得に施術可能",
                  "モニター価格あり（最大50%OFF）",
                ],
              },
              {
                rank: 2,
                name: "デイジークリニック",
                badge: "デザイン力",
                badgeColor: "bg-pink-400 text-white",
                techniques: "ナチュラルライン / キャットライン / インライン",
                price: "2回 55,000〜77,000円（上）",
                retouch: "33,000〜44,000円",
                areas: "渋谷・新宿・札幌・大阪・福岡・名古屋",
                points: [
                  "目の形に合わせた繊細なデザイン提案が好評",
                  "インライン（粘膜ライン）にも対応",
                  "眉毛・リップとのセットプランでトータルコーディネート可能",
                  "オンラインカウンセリング対応",
                ],
              },
              {
                rank: 3,
                name: "湘南美容クリニック",
                badge: "コスパ良",
                badgeColor: "bg-green-400 text-white",
                techniques: "上アイライン / 下アイライン",
                price: "1回 30,800〜40,700円（上）",
                retouch: "15,000〜25,000円",
                areas: "全国100院以上",
                points: [
                  "大手ならではのリーズナブルな価格設定",
                  "全国どこでもアクセスしやすい",
                  "SBCポイントで実質割引あり",
                  "他の美容施術（まつげパーマ等）との併用相談可能",
                ],
              },
              {
                rank: 4,
                name: "アートメイクギャラリー",
                badge: "技術力",
                badgeColor: "bg-purple-400 text-white",
                techniques: "ナチュラルライン / テールあり / 粘膜ライン",
                price: "2回 88,000〜110,000円（上）",
                retouch: "33,000〜55,000円",
                areas: "銀座・横浜・梅田・芦屋",
                points: [
                  "国際大会受賞歴のある施術者による高品質な施術",
                  "粘膜ラインの施術実績が豊富",
                  "他院修正・カバーアップにも対応",
                  "丁寧なカウンセリング（60〜90分）でデザインを入念にすり合わせ",
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
            アイラインアートメイクの料金相場
          </h2>
          <p className="text-center text-gray-600 mb-8">
            2026年最新のアイラインアートメイク料金を施術方法別・クリニック別に比較しました。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">クリニック</th>
                  <th className="p-4 text-center">上ライン</th>
                  <th className="p-4 text-center">下ライン</th>
                  <th className="p-4 text-center">上下セット</th>
                  <th className="p-4 text-center">リタッチ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    clinic: "メディカルブロー",
                    upper: "60,000〜80,000円",
                    lower: "40,000〜55,000円",
                    set: "85,000〜120,000円",
                    retouch: "25,000〜40,000円",
                  },
                  {
                    clinic: "デイジー",
                    upper: "55,000〜77,000円",
                    lower: "44,000〜55,000円",
                    set: "88,000〜110,000円",
                    retouch: "33,000〜44,000円",
                  },
                  {
                    clinic: "湘南美容",
                    upper: "30,800〜40,700円（1回）",
                    lower: "30,800円（1回）",
                    set: "55,000〜66,000円（1回）",
                    retouch: "15,000〜25,000円",
                  },
                  {
                    clinic: "AMGギャラリー",
                    upper: "88,000〜110,000円",
                    lower: "66,000〜88,000円",
                    set: "132,000〜176,000円",
                    retouch: "33,000〜55,000円",
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
                      {row.upper}
                    </td>
                    <td className="p-4 text-center text-sm">{row.lower}</td>
                    <td className="p-4 text-center text-sm">{row.set}</td>
                    <td className="p-4 text-center text-sm text-gray-600">
                      {row.retouch}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 text-center">
            ※ 料金は税込の目安です（2回施術の場合）。施術者ランク・キャンペーンにより変動します。
          </p>
        </div>
      </section>

      {/* ===== 6. ダウンタイム ===== */}
      <section className="py-16 px-4 bg-white" id="downtime">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            ダウンタイム経過
          </h2>
          <p className="text-center text-gray-600 mb-10">
            アイラインアートメイクのダウンタイムは比較的短めですが、目元はデリケートな部位です。
            適切なアフターケアで色素の定着率を高めましょう。
          </p>

          <div className="space-y-4">
            {[
              {
                day: "施術当日",
                color: "bg-red-400",
                status: "腫れ・赤み",
                desc: "施術直後は目元に赤みと軽い腫れが出ます。泣いた後のような腫れ方で、アイラインは濃く見えます。麻酔が切れるとヒリヒリ感を感じることがあります。",
                care: "施術部位を触らない。コンタクトレンズは外す。アイメイクはNG。冷タオルで軽く冷やすのはOK。",
              },
              {
                day: "1〜2日目",
                color: "bg-orange-400",
                status: "腫れピーク",
                desc: "腫れのピーク。まぶたが重く感じることがあります。朝起きた時が最も腫れやすいですが、時間の経過とともに改善します。色は引き続き濃いまま。",
                care: "コンタクトレンズは避ける。目をこすらない。洗顔時は目元を避ける。",
              },
              {
                day: "3〜5日目",
                color: "bg-yellow-400",
                status: "腫れ引き・薄い皮むけ",
                desc: "腫れがほぼ引き、薄い皮がむけ始めます。かゆみを感じることがありますが、触ったり擦ったりしないでください。色ムラが出ることがありますが一時的です。",
                care: "皮を剥がさない。保湿を継続。コンタクトレンズは3日目以降から再開可能（クリニック確認）。",
              },
              {
                day: "5〜7日目",
                color: "bg-green-400",
                status: "ほぼ回復",
                desc: "皮むけが完了し、ほぼ通常の状態に戻ります。色は定着し始め、施術直後より薄くなった最終的な色味に近づきます。",
                care: "アイメイク再開OK（優しく）。まつエクは2週間後から。",
              },
              {
                day: "1〜2週間後",
                color: "bg-blue-400",
                status: "色の安定",
                desc: "色が完全に安定。施術直後より30〜40%薄く定着するのが通常です。2回目の施術で太さや濃さを微調整します。",
                care: "2回目の施術は4〜6週間後に。クレンジングは優しく。",
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

      {/* ===== 7. 注意点（コンタクト・まつエク） ===== */}
      <section className="py-16 px-4 bg-gray-50" id="caution">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            アイラインアートメイクの注意点
          </h2>
          <p className="text-center text-gray-600 mb-10">
            アイラインアートメイクは目元のデリケートな施術です。
            コンタクトレンズやまつエクとの関係を事前に確認しておきましょう。
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "👁️",
                title: "コンタクトレンズについて",
                items: [
                  {
                    label: "施術当日",
                    text: "コンタクトレンズは外して来院してください。メガネをご持参ください。",
                  },
                  {
                    label: "ソフトレンズ",
                    text: "施術後2〜3日は装着を避けてください。3日目以降、違和感がなければ再開可能です。",
                  },
                  {
                    label: "ハードレンズ",
                    text: "施術後3〜5日は装着を避けてください。ソフトレンズより長めの休止期間が必要です。",
                  },
                  {
                    label: "カラコン",
                    text: "施術後1週間は装着を避けることをおすすめします。色素がレンズに付着するリスクがあります。",
                  },
                ],
              },
              {
                icon: "✨",
                title: "まつエク・まつげパーマについて",
                items: [
                  {
                    label: "施術前",
                    text: "まつエクは施術の3日前までに外してください。まつげパーマは施術の2週間前までに。",
                  },
                  {
                    label: "施術後のまつエク",
                    text: "アートメイク施術後2週間以上経過してから。色素が完全に定着してからの施術が安全です。",
                  },
                  {
                    label: "施術後のまつげパーマ",
                    text: "アートメイク施術後2〜3週間以上経過してから。目元に刺激を与えるため、余裕を持って。",
                  },
                  {
                    label: "注意",
                    text: "まつエク装着中のアイラインアートメイクは施術不可のクリニックが多いです。必ず事前確認を。",
                  },
                ],
              },
            ].map((section, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-rose-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{section.icon}</span>
                  <h3 className="font-bold text-lg text-gray-800">
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {section.items.map((item, j) => (
                    <div key={j} className="border-l-2 border-rose-200 pl-4">
                      <p className="font-semibold text-sm text-rose-600">
                        {item.label}
                      </p>
                      <p className="text-sm text-gray-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* その他の注意点 */}
          <div className="mt-8 bg-red-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3 text-gray-800">
              その他の注意点
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold shrink-0">!</span>
                ドライアイの方は施術中に目が乾きやすいため、事前にクリニックに相談してください
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold shrink-0">!</span>
                緑内障などの目の疾患がある方は、施術前に眼科医に相談が必要です
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold shrink-0">!</span>
                施術後1週間はアイメイク（マスカラ・アイシャドウ含む）を控えてください
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold shrink-0">!</span>
                目元の美容整形（埋没法・切開法）を受けた方は、施術後3ヶ月以上経過してから
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 8. FAQ 6問 ===== */}
      <section className="py-16 px-4 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            アイラインアートメイクに関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "アイラインアートメイクは痛いですか？",
                a: "目元は顔の中でも敏感な部位のため、多少の痛みやチクチク感を感じる方が多いです。ただし、施術前に点眼タイプの麻酔や塗布麻酔をしっかり行うため、「我慢できないほどの痛み」ではありません。粘膜ラインは特に敏感なため、追加麻酔で対応します。痛みに弱い方は事前にクリニックに相談してください。",
              },
              {
                q: "上アイラインと下アイライン、どちらがおすすめですか？",
                a: "初めての方には上アイラインがおすすめです。上アイラインだけで目力が十分にアップし、最もナチュラルな仕上がりになります。下アイラインは単体だとやや不自然に見える場合があるため、上アイラインとのセットで施術する方が多いです。カウンセリングで目の形に合ったアドバイスをもらいましょう。",
              },
              {
                q: "アイラインアートメイクの持続期間は？",
                a: "一般的に1〜2年程度です。眉毛やリップに比べるとやや退色が早い傾向があります。特に粘膜ライン（インライン）は涙や分泌物の影響で退色が早く、1年程度で薄くなることもあります。上アイラインの通常の位置であれば1〜2年持続するのが一般的です。",
              },
              {
                q: "施術後にコンタクトレンズはいつから使えますか？",
                a: "ソフトコンタクトレンズは施術後2〜3日から、ハードコンタクトレンズは3〜5日から装着可能です。カラーコンタクトは1週間後から。施術当日はメガネをご持参ください。違和感がある場合はさらに休止期間を延ばしてください。クリニックによって指示が異なるため、必ず施術後の説明に従いましょう。",
              },
              {
                q: "まつエクをしていても施術できますか？",
                a: "基本的にはまつエクを外してから施術する必要があります。まつエクが付いていると施術の妨げになり、デザインの精度が下がるためです。施術の3日前までにまつエクを外してご来院ください。施術後のまつエク再開は2週間以上経過してからが目安です。",
              },
              {
                q: "テール（跳ね上げライン）は後悔しませんか？",
                a: "テールラインは華やかで人気がありますが、トレンドの変化で後悔する可能性もあるため、慎重に検討しましょう。アートメイクは1〜2年で薄くなりますが、完全には消えません。初めての方はまずナチュラルなライン（まつげの間を埋めるタイプ）から始め、テールはメイクで足すのが安心な選択肢です。施術者とよく相談してデザインを決めましょう。",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-gray-50 rounded-lg shadow-sm group"
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-gray-100 transition-colors flex justify-between items-center">
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

      {/* ===== 9. CTA ===== */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            目元の印象を変えるアイラインアートメイク
          </h2>
          <p className="text-xl mb-4 opacity-90">
            毎日のアイライン描きから解放。自然な目力をずっとキープ。
          </p>
          <p className="text-lg mb-8 opacity-80">
            まずは無料カウンセリングで、あなたの目の形に合ったデザインを相談してみましょう。
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
