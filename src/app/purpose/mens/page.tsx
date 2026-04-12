import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "メンズアートメイク｜男性向け眉毛アートメイクおすすめクリニック【2026年最新】| アートメイク比較ナビ",
  description:
    "男性向け眉毛アートメイクの完全ガイド。メンズ対応クリニック（メディカルブロー・デイジー等）の料金比較、男性向けデザイン、ビジネスシーンでの効果を解説。",
  keywords: "アートメイク メンズ,男性 眉毛 アートメイク,メンズ アートメイク おすすめ,男性 眉毛 整える,メンズ眉アートメイク",
  openGraph: {
    title: "メンズアートメイク｜男性向け眉毛アートメイクおすすめクリニック",
    description:
      "男性向け眉毛アートメイクの料金・クリニック・デザインを徹底解説。ビジネスマンに人気の施術。",
    type: "article",
  },
};

export default function MensPage() {
  return (
    <main className="min-h-screen">
      {/* ===== Hero ===== */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            目的別ガイド
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            メンズアートメイク
            <br className="hidden md:block" />
            男性の眉毛を自然に整える
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            清潔感のある眉はビジネスの武器になる。
            <br className="hidden md:block" />
            男性のアートメイク需要が急増中。対応クリニック・料金・デザインを徹底解説。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#clinic"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              対応クリニックを見る
            </a>
            <a
              href="/"
              className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500"
            >
              総合ランキングへ
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
                <a href="#why-mens" className="hover:underline">
                  1. 男性にアートメイクが選ばれる理由
                </a>
              </li>
              <li>
                <a href="#design" className="hover:underline">
                  2. メンズ向けデザインの特徴
                </a>
              </li>
              <li>
                <a href="#clinic" className="hover:underline">
                  3. メンズ対応クリニック紹介
                </a>
              </li>
              <li>
                <a href="#price" className="hover:underline">
                  4. メンズアートメイクの料金比較
                </a>
              </li>
              <li>
                <a href="#business" className="hover:underline">
                  5. ビジネスシーンでの効果
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  6. よくある質問（FAQ）
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ===== 1. 男性にアートメイクが選ばれる理由 ===== */}
      <section className="py-16 px-4 bg-white" id="why-mens">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            男性にアートメイクが選ばれる理由
          </h2>
          <div className="bg-rose-50 rounded-xl p-8 mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              メンズアートメイクの施術件数は
              <strong className="text-rose-600">過去3年で約3倍に増加</strong>。
              眉毛を整えるだけで顔の印象が大きく変わることに気づいた男性が急増しています。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "👔",
                title: "第一印象の改善",
                desc: "眉毛は顔の印象を左右する重要パーツ。整った眉は清潔感・信頼感を与え、ビジネスや対人関係にプラスの効果をもたらします。",
              },
              {
                icon: "⏰",
                title: "毎朝の手入れが不要",
                desc: "毎朝の眉カット・整えに時間をかけていた方も、アートメイクなら手入れゼロ。朝の時短で生活にゆとりが生まれます。",
              },
              {
                icon: "💪",
                title: "スポーツでも崩れない",
                desc: "ジムやランニングで汗をかいても、眉毛は常にベストな状態をキープ。スポーツマンにも人気が高まっています。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-rose-200 rounded-xl p-6 text-center shadow-sm"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. メンズ向けデザインの特徴 ===== */}
      <section className="py-16 px-4 bg-gray-50" id="design">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            メンズ向けデザインの特徴
          </h2>
          <p className="text-center text-gray-600 mb-8">
            男性の眉アートメイクは女性とは異なるデザインアプローチが必要です。
          </p>
          <div className="space-y-6">
            {[
              {
                num: 1,
                title: "直線的でシャープなライン",
                desc: "女性の眉が柔らかいアーチ型なのに対し、男性は直線的でキリッとした眉が好印象。角度を控えめにし、眉山を強調しすぎないデザインが主流です。",
              },
              {
                num: 2,
                title: "太めで力強い仕上がり",
                desc: "男性の眉は女性より太めが自然。細すぎると違和感が出るため、適度な太さを保ちながら形を整えます。",
              },
              {
                num: 3,
                title: "色は黒〜ダークブラウン",
                desc: "男性の髪色に合わせて、黒〜ダークブラウンが基本。明るすぎる色は不自然に見えるため、自毛に近い色味を選びます。",
              },
              {
                num: 4,
                title: "左右対称の整った眉",
                desc: "男性は女性よりも眉の左右差が目立ちやすい傾向。プロの技術で骨格に合わせた左右対称の眉に仕上げます。",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-4 bg-white rounded-xl p-6 border border-rose-200 shadow-sm"
              >
                <div className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. メンズ対応クリニック紹介 ===== */}
      <section className="py-16 px-4 bg-white" id="clinic">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            メンズ対応クリニック紹介
          </h2>
          <p className="text-center text-gray-600 mb-8">
            男性の施術実績が豊富で、メンズ専用メニューがあるクリニックを厳選。
          </p>
          <div className="space-y-6">
            {[
              {
                name: "メディカルブロー",
                badge: "メンズ実績No.1",
                price: "28,000円〜",
                point: "男性の施術実績が業界最多レベル。メンズ専門のアーティストも在籍し、男性特有の骨格・毛流れに合わせたデザインが得意。全国に院があり通いやすい。",
                link: "/review/medicalbrow",
              },
              {
                name: "デイジークリニック",
                badge: "メンズメニューあり",
                price: "49,800円〜",
                point: "男性向けメニュー「dazzy brow for MEN」を展開。ナチュラルかつ男性らしいシャープな眉に仕上がると好評。渋谷・新宿など好立地。",
                link: "/review/dazzy",
              },
              {
                name: "トゥルーデザインクリニック",
                badge: "完全オーダーメイド",
                price: "59,400円〜",
                point: "性別に関係なく一人ひとりに最適なデザインを提案。骨格分析に基づくオーダーメイドデザインで、男性からも高い満足度を獲得。",
                link: "/review/true-design",
              },
              {
                name: "ファーストアートメイク",
                badge: "初回価格が魅力",
                price: "38,500円〜",
                point: "男女問わずリーズナブルな価格設定。初めてのアートメイクに挑戦する男性にも手が出しやすい料金体系。",
                link: "/review/first-artmake",
              },
            ].map((clinic, i) => (
              <div
                key={i}
                className="bg-white border border-rose-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-bold text-xl text-gray-800">
                    {clinic.name}
                  </h3>
                  <span className="bg-rose-100 text-rose-600 text-xs px-3 py-1 rounded-full font-semibold">
                    {clinic.badge}
                  </span>
                  <span className="text-xl font-bold text-rose-500 ml-auto">
                    {clinic.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {clinic.point}
                </p>
                <a
                  href={clinic.link}
                  className="text-rose-500 text-sm font-semibold hover:underline"
                >
                  詳しいレビューを見る &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. メンズアートメイクの料金比較 ===== */}
      <section className="py-16 px-4 bg-gray-50" id="price">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            メンズアートメイクの料金比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">クリニック</th>
                  <th className="p-4 text-center">眉（メンズ）</th>
                  <th className="p-4 text-center">回数</th>
                  <th className="p-4 text-center">メンズ専用メニュー</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "メディカルブロー",
                    price: "28,000円〜",
                    times: "2回",
                    menu: "あり",
                  },
                  {
                    name: "ファーストアートメイク",
                    price: "38,500円〜",
                    times: "1回",
                    menu: "共通メニュー",
                  },
                  {
                    name: "デイジークリニック",
                    price: "49,800円〜",
                    times: "2回",
                    menu: "あり（for MEN）",
                  },
                  {
                    name: "トゥルーデザインクリニック",
                    price: "59,400円〜",
                    times: "2回",
                    menu: "共通メニュー",
                  },
                  {
                    name: "クレアージュ東京",
                    price: "132,000円",
                    times: "3回",
                    menu: "共通メニュー",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}
                  >
                    <td className="p-4 font-semibold text-gray-800 text-sm">
                      {row.name}
                    </td>
                    <td className="p-4 text-center text-sm font-semibold text-rose-600">
                      {row.price}
                    </td>
                    <td className="p-4 text-center text-sm">{row.times}</td>
                    <td className="p-4 text-center text-sm">{row.menu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            ※ 料金は税込の目安です。施術者ランクにより変動します。メンズ専用メニューがなくても男性の施術は可能です。
          </p>
        </div>
      </section>

      {/* ===== 5. ビジネスシーンでの効果 ===== */}
      <section className="py-16 px-4 bg-white" id="business">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            ビジネスシーンでの効果
          </h2>
          <p className="text-center text-gray-600 mb-8">
            眉毛を整えるだけで、ビジネスシーンでの印象が大きく変わります。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🤝",
                title: "商談・プレゼンでの第一印象UP",
                desc: "整った眉毛は「きちんとした人」「信頼できる人」という印象を与えます。初対面の商談やプレゼンで好印象を獲得できます。",
              },
              {
                icon: "📹",
                title: "Web会議での見栄え向上",
                desc: "リモートワークが増えた現在、カメラ越しの顔の印象は重要。整った眉は画面映えし、プロフェッショナルな印象を強化します。",
              },
              {
                icon: "🎯",
                title: "自信がパフォーマンスを上げる",
                desc: "外見に自信が持てると、内面にもポジティブな影響が。自信を持って話せるようになることで、仕事のパフォーマンスも向上します。",
              },
              {
                icon: "🏢",
                title: "身だしなみの評価向上",
                desc: "昇進や人事評価で「身だしなみ」は意外と見られているポイント。清潔感のある眉毛は、普段のグルーミングへの意識の高さを示します。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-rose-50 rounded-xl p-6 border border-rose-200"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            メンズアートメイクに関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "男性がアートメイクを受けるのは恥ずかしくないですか？",
                a: "全く恥ずかしいことではありません。メンズアートメイクの施術件数は年々増加しており、現在では男性の来院比率が2〜3割を占めるクリニックもあります。美容医療は男女問わず一般的になっています。",
              },
              {
                q: "アートメイクしたことが周りにバレますか？",
                a: "自然なデザイン・色味で施術すれば、ほとんどバレません。「眉を整えた？」と言われる程度で、アートメイクだと気づかれることは稀です。施術直後は少し濃く見えますが、1〜2週間で自然に馴染みます。",
              },
              {
                q: "男性の施術で痛みは強いですか？",
                a: "麻酔クリームを使用するため、強い痛みは感じません。男性は女性より皮膚が厚いため、痛みを感じにくい傾向があるという声もあります。「チクチクする程度」という方がほとんどです。",
              },
              {
                q: "施術後すぐに仕事に復帰できますか？",
                a: "はい、基本的に翌日から通常通り仕事ができます。眉毛のアートメイクはダウンタイムが軽く、赤みも1〜2日で引きます。ただし施術直後は濃く見えるため、気になる方は金曜夕方の施術がおすすめです。",
              },
              {
                q: "将来的に眉の形を変えたくなったらどうなりますか？",
                a: "アートメイクは1〜3年で徐々に薄くなるため、次回施術時にデザインを変更できます。完全に消したい場合はレーザー除去も可能です。流行に合わせてデザインを微調整できる柔軟性がアートメイクのメリットです。",
              },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-lg shadow-sm group">
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

      {/* ===== CTA ===== */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            清潔感のある眉で自信をつけよう
          </h2>
          <p className="text-xl mb-4 opacity-90">
            メンズ対応クリニックを総合ランキングでチェック。
          </p>
          <p className="text-lg mb-8 opacity-80">
            料金・技術力・男性の施術実績で厳選した5社を徹底比較。
          </p>
          <a
            href="/"
            className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            おすすめクリニックランキングを見る
          </a>
          <p className="mt-6 text-sm opacity-70">
            2026年4月最新 - 5社を100点独自採点で徹底比較
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      
    </main>
  );
}
