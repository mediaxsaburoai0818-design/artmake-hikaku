import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アートメイクとは？仕組み・種類・メリットを完全解説【2026年最新】| アートメイク比較ナビ",
  description:
    "メディカルアートメイクとは何か？眉毛・リップ・アイラインの施術方法（2D/3D/4D/7D）、タトゥーとの違い、メリット・デメリット、料金相場、施術の流れまで完全解説。アートメイクの基礎知識がこの1ページでわかる。",
  keywords: "アートメイクとは,メディカルアートメイク,アートメイク 仕組み,アートメイク 種類,アートメイク メリット,アートメイク デメリット,アートメイク 料金相場",
  openGraph: {
    title: "アートメイクとは？仕組み・種類・メリットを完全解説",
    description:
      "メディカルアートメイクの定義、タトゥーとの違い、施術部位、施術方法、メリット・デメリット、料金相場まで網羅的に解説。",
    type: "article",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* ===== 1. Hero ===== */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            アートメイク基礎知識
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイクとは？
            <br className="hidden md:block" />
            仕組み・種類・メリットを完全解説
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            メディカルアートメイクの定義からタトゥーとの違い、施術方法、
            <br className="hidden md:block" />
            料金相場まで、初めての方にもわかりやすく解説します。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#definition"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              詳しく読む
            </a>
            <a
              href="/"
              className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500"
            >
              クリニックランキングへ
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
                <a href="#definition" className="hover:underline">
                  1. アートメイク（メディカルアートメイク）の定義
                </a>
              </li>
              <li>
                <a href="#vs-tattoo" className="hover:underline">
                  2. アートメイクとタトゥーの違い
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:underline">
                  3. 施術可能な部位
                </a>
              </li>
              <li>
                <a href="#methods" className="hover:underline">
                  4. 施術方法の種類
                </a>
              </li>
              <li>
                <a href="#merits" className="hover:underline">
                  5. アートメイクのメリット5つ
                </a>
              </li>
              <li>
                <a href="#demerits" className="hover:underline">
                  6. アートメイクのデメリット5つ
                </a>
              </li>
              <li>
                <a href="#flow" className="hover:underline">
                  7. 施術の流れ（6ステップ）
                </a>
              </li>
              <li>
                <a href="#price" className="hover:underline">
                  8. 料金相場（部位別）
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  9. よくある質問（FAQ）
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ===== 2. アートメイクの定義 ===== */}
      <section className="py-16 px-4 bg-white" id="definition">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            アートメイク（メディカルアートメイク）の定義
          </h2>

          <div className="bg-rose-50 rounded-xl p-8 mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong className="text-rose-600">アートメイク</strong>
              とは、皮膚の浅い層（表皮）に専用の極細針で色素を注入し、
              眉毛・アイライン・リップなどのメイクを持続させる
              <strong className="text-rose-600">医療行為</strong>です。
              正式には「メディカルアートメイク」と呼ばれ、医師または看護師の資格を持つ施術者のみが施術を行えます。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏥",
                title: "医療行為",
                desc: "厚生労働省の通達により、アートメイクは医療行為に該当。医師免許または看護師免許を持つ施術者のみが施術可能です。",
              },
              {
                icon: "💉",
                title: "表皮に色素注入",
                desc: "皮膚の浅い層（表皮：0.02〜0.03mm）に色素を注入します。タトゥーのように真皮まで達しないため、身体への負担が少ないのが特徴です。",
              },
              {
                icon: "⏳",
                title: "1〜3年持続",
                desc: "ターンオーバー（肌の新陳代謝）により徐々に薄くなり、1〜3年で自然に退色します。定期的なリタッチで美しさを維持できます。",
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

      {/* ===== 3. タトゥーとの違い ===== */}
      <section className="py-16 px-4 bg-gray-50" id="vs-tattoo">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            アートメイクとタトゥーの違い
          </h2>
          <p className="text-center text-gray-600 mb-8">
            アートメイクとタトゥー（刺青）は混同されがちですが、深さ・持続期間・目的など多くの点で異なります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">比較項目</th>
                  <th className="p-4 text-center">アートメイク</th>
                  <th className="p-4 text-center">タトゥー（刺青）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: "色素を入れる深さ",
                    art: "表皮（0.02〜0.03mm）",
                    tattoo: "真皮（0.3mm以上）",
                  },
                  {
                    label: "持続期間",
                    art: "1〜3年で徐々に退色",
                    tattoo: "半永久的に残る",
                  },
                  {
                    label: "痛み",
                    art: "麻酔使用でほぼ無痛",
                    tattoo: "部位により強い痛み",
                  },
                  {
                    label: "除去の難易度",
                    art: "比較的容易（レーザー等）",
                    tattoo: "困難（複数回のレーザー必要）",
                  },
                  {
                    label: "施術者の資格",
                    art: "医師・看護師（医療資格必須）",
                    tattoo: "資格不要（彫り師）",
                  },
                  {
                    label: "施術場所",
                    art: "医療機関（クリニック）",
                    tattoo: "タトゥーショップ",
                  },
                  {
                    label: "主な目的",
                    art: "メイクの持続・美容目的",
                    tattoo: "自己表現・ファッション",
                  },
                  {
                    label: "MRI検査",
                    art: "基本的に問題なし",
                    tattoo: "制限される場合あり",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}
                  >
                    <td className="p-4 font-semibold text-gray-800">
                      {row.label}
                    </td>
                    <td className="p-4 text-center text-sm text-gray-700">
                      {row.art}
                    </td>
                    <td className="p-4 text-center text-sm text-gray-700">
                      {row.tattoo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== 4. 施術可能な部位 ===== */}
      <section className="py-16 px-4 bg-white" id="areas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            施術可能な部位
          </h2>
          <p className="text-center text-gray-600 mb-8">
            アートメイクは顔のさまざまなパーツに施術が可能です。最も人気が高いのは眉毛で、全体の約70%を占めます。
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                icon: "✏️",
                name: "眉毛",
                popularity: "人気No.1",
                desc: "最も人気の高い部位。自然な毛並みからふんわりパウダー眉まで幅広いデザインが可能。薄眉・左右非対称の悩みを解消。",
              },
              {
                icon: "💋",
                name: "リップ",
                popularity: "人気No.2",
                desc: "唇に血色感をプラス。くすみ補正やリップラインの補正に。すっぴんでも健康的な印象に。",
              },
              {
                icon: "👁️",
                name: "アイライン",
                popularity: "人気No.3",
                desc: "まつげの間を埋めるように色素を入れ、目元をパッチリ見せる効果。上のみ・上下セットから選択可能。",
              },
              {
                icon: "💇",
                name: "ヘアライン",
                popularity: "注目度上昇中",
                desc: "生え際や分け目の薄毛をカバー。小顔効果やおでこの形を整える目的にも。男女ともに需要増加中。",
              },
              {
                icon: "✨",
                name: "ほくろ",
                popularity: "手軽に人気",
                desc: "チャームポイントとしてほくろをプラス。口元やまぶたなどに施術するセクシーほくろが人気。施術時間は短め。",
              },
            ].map((area, i) => (
              <div
                key={i}
                className="bg-rose-50 rounded-xl p-5 text-center hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{area.icon}</div>
                <h3 className="font-bold text-lg mb-1">{area.name}</h3>
                <span className="inline-block bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full mb-2">
                  {area.popularity}
                </span>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. 施術方法の種類 ===== */}
      <section className="py-16 px-4 bg-gray-50" id="methods">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            施術方法の種類
          </h2>
          <p className="text-center text-gray-600 mb-10">
            アートメイクの施術方法は大きく分けて「パウダー」「ストローク」「コンビネーション」の3系統があり、
            それぞれ2D〜7Dと呼ばれるバリエーションがあります。
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                name: "2D（パウダー）",
                badge: "ふんわり派",
                color: "bg-pink-100 text-pink-700",
                desc: "機械（マシン）で細かいドットを均一に入れ、パウダーファンデーションで仕上げたようなふんわり眉に。グラデーションも可能。",
                who: "脂性肌の方、メイクしている感を出したい方",
                pain: "比較的少ない",
              },
              {
                name: "3D（ストローク）",
                badge: "ナチュラル派",
                color: "bg-rose-100 text-rose-700",
                desc: "手彫りで毛を1本1本描くように色素を入れ、まるで自毛のような自然な毛並み感を再現。すっぴんでも違和感のない仕上がり。",
                who: "ナチュラルに仕上げたい方、すっぴんでも自然に見せたい方",
                pain: "やや感じる場合あり",
              },
              {
                name: "4D（コンビネーション）",
                badge: "いいとこどり",
                color: "bg-fuchsia-100 text-fuchsia-700",
                desc: "2D（パウダー）と3D（ストローク）を組み合わせた技法。毛並み感とメイク感の両方を実現し、最も立体的で完成度の高い仕上がり。",
                who: "立体感のある眉にしたい方、メイクの完成形に近づけたい方",
                pain: "ストローク部分でやや感じる",
              },
              {
                name: "7D（ストローク R）",
                badge: "最先端技術",
                color: "bg-red-100 text-red-700",
                desc: "メディカルブロー独自の最新技術。極細ニードルを使用し、毛の流れ・太さ・方向まで精密に再現。最も自然で美しい仕上がり。",
                who: "最高品質を求める方、メディカルブロー希望の方",
                pain: "麻酔使用でほぼ無痛",
              },
            ].map((method, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-bold text-xl">{method.name}</h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-semibold ${method.color}`}
                  >
                    {method.badge}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {method.desc}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="text-rose-500 font-semibold shrink-0">
                      おすすめ：
                    </span>
                    <span className="text-gray-600">{method.who}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-rose-500 font-semibold shrink-0">
                      痛み：
                    </span>
                    <span className="text-gray-600">{method.pain}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 技法比較まとめ */}
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg text-sm">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-3">技法</th>
                  <th className="p-3">別名</th>
                  <th className="p-3">仕上がり</th>
                  <th className="p-3">施術方法</th>
                  <th className="p-3">料金目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "2D",
                    alias: "パウダー / マシン彫り",
                    finish: "ふんわりメイク眉",
                    method: "機械で均一にドット",
                    price: "安め",
                  },
                  {
                    name: "3D",
                    alias: "ストローク / 毛並み",
                    finish: "自毛のような自然さ",
                    method: "手彫りで1本ずつ",
                    price: "中程度",
                  },
                  {
                    name: "4D",
                    alias: "コンビネーション",
                    finish: "立体的で完成度高",
                    method: "2D+3Dの組み合わせ",
                    price: "やや高め",
                  },
                  {
                    name: "7D",
                    alias: "ストローク R",
                    finish: "毛流れまで再現",
                    method: "極細ニードル手彫り",
                    price: "高め",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}
                  >
                    <td className="p-3 font-bold text-center">{row.name}</td>
                    <td className="p-3 text-center">{row.alias}</td>
                    <td className="p-3 text-center">{row.finish}</td>
                    <td className="p-3 text-center">{row.method}</td>
                    <td className="p-3 text-center">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== 6. メリット5つ ===== */}
      <section className="py-16 px-4 bg-white" id="merits">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            アートメイクのメリット5つ
          </h2>
          <div className="space-y-6">
            {[
              {
                num: 1,
                title: "毎日のメイク時間を大幅に短縮",
                desc: "眉毛を描く時間は平均5〜10分。アートメイクならその時間がゼロに。朝の忙しい時間に余裕が生まれ、年間で約30〜60時間の時短効果が期待できます。",
              },
              {
                num: 2,
                title: "汗・水・皮脂で落ちない",
                desc: "プールやジム、温泉でもメイクが落ちる心配がありません。スポーツをする方、汗をかきやすい方にとって、常にベストな状態をキープできる大きなメリットです。",
              },
              {
                num: 3,
                title: "すっぴんに自信が持てる",
                desc: "ノーメイクでも整った眉毛・血色のある唇をキープ。急な来客や災害時にも慌てず対応できます。パートナーにすっぴんを見せることへの抵抗感も軽減。",
              },
              {
                num: 4,
                title: "左右対称の美しい眉を実現",
                desc: "自分で描くと左右差が出やすい眉毛も、プロの技術で黄金比に基づいた理想的なバランスに。骨格・筋肉・毛流れを考慮したデザインで、最も似合う眉に仕上がります。",
              },
              {
                num: 5,
                title: "薄眉・まばら眉の悩みを解消",
                desc: "加齢による眉毛の減少、過度な毛抜きで生えなくなった部分、元々の毛量が少ない方でも、自然でふさふさの眉毛を手に入れることができます。",
              },
            ].map((merit) => (
              <div
                key={merit.num}
                className="flex gap-4 bg-green-50 rounded-xl p-6"
              >
                <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {merit.num}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-800">
                    {merit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {merit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. デメリット5つ ===== */}
      <section className="py-16 px-4 bg-gray-50" id="demerits">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            アートメイクのデメリット5つ
          </h2>
          <div className="space-y-6">
            {[
              {
                num: 1,
                title: "完全に消すことが難しい",
                desc: "1〜3年で薄くなりますが、完全に消えるわけではありません。レーザー除去は可能ですが、複数回の施術が必要で費用もかかります。デザインは慎重に決めましょう。",
              },
              {
                num: 2,
                title: "ダウンタイムがある",
                desc: "施術後1〜2日は赤みや腫れが出ることがあります。眉毛は3〜7日でかさぶたが形成され、1〜2週間で自然に剥がれます。リップは腫れが目立ちやすく、約1週間のダウンタイムが必要です。",
              },
              {
                num: 3,
                title: "MRI検査時に注意が必要",
                desc: "アートメイクの色素には微量の金属成分が含まれる場合があり、MRI検査時にピリピリ感や熱感を感じる可能性があります。事前に医療機関へアートメイクを受けていることを伝えましょう。",
              },
              {
                num: 4,
                title: "費用がかかる",
                desc: "眉毛アートメイクの相場は2回で5〜15万円。リタッチ費用もかかるため、長期的なコストを考慮する必要があります。ただし毎日のメイク代を考えるとコスパが良い場合も。",
              },
              {
                num: 5,
                title: "施術者の技術で仕上がりに差が出る",
                desc: "施術者のスキルや美的センスが仕上がりを大きく左右します。経験豊富な施術者を選ぶこと、症例写真をしっかり確認すること、カウンセリングで相性を見極めることが重要です。",
              },
            ].map((demerit) => (
              <div
                key={demerit.num}
                className="flex gap-4 bg-red-50 rounded-xl p-6"
              >
                <div className="bg-red-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {demerit.num}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-800">
                    {demerit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {demerit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. 施術の流れ ===== */}
      <section className="py-16 px-4 bg-white" id="flow">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            施術の流れ（6ステップ）
          </h2>
          <p className="text-center text-gray-600 mb-10">
            初めてのアートメイクでも安心。カウンセリングから施術完了まで、一般的な流れをご紹介します。
          </p>
          <div className="relative">
            {/* 縦の線（PC表示のみ） */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-rose-200" />

            <div className="space-y-8">
              {[
                {
                  step: "STEP 1",
                  title: "カウンセリング（30〜60分）",
                  desc: "肌質・骨格の確認、希望のデザイン・色味のヒアリング。施術のリスクや注意事項の説明も行われます。疑問点はここで全て確認しましょう。",
                  time: "所要時間：30〜60分",
                },
                {
                  step: "STEP 2",
                  title: "デザイン（20〜30分）",
                  desc: "骨格・表情筋・黄金比をもとに、あなたに最も似合うデザインを提案。鏡を見ながら微調整を繰り返し、納得いくまでデザインを固めます。",
                  time: "所要時間：20〜30分",
                },
                {
                  step: "STEP 3",
                  title: "麻酔（20〜30分）",
                  desc: "施術部位に麻酔クリームを塗布し、浸透するまで待ちます。これにより施術中の痛みを最小限に抑えます。",
                  time: "所要時間：20〜30分",
                },
                {
                  step: "STEP 4",
                  title: "施術（60〜120分）",
                  desc: "選択した技法（パウダー・ストローク・コンビネーション）で色素を注入。施術中も痛みが強ければ追加麻酔が可能です。",
                  time: "所要時間：60〜120分",
                },
                {
                  step: "STEP 5",
                  title: "アフターケア説明（10〜15分）",
                  desc: "施術後の過ごし方、洗顔方法、塗り薬の使い方、避けるべき行為（サウナ・プール等）を丁寧に説明。アフターケアが仕上がりを大きく左右します。",
                  time: "所要時間：10〜15分",
                },
                {
                  step: "STEP 6",
                  title: "2回目の施術予約（4〜6週間後）",
                  desc: "1回目の色素定着を見て、2回目で色味やデザインを微調整。2回施術で完成するのが一般的です（クレアージュは3回）。",
                  time: "次回予約：4〜6週間後",
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="relative z-10 shrink-0">
                    <div className="bg-rose-500 text-white w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-md">
                      <span className="text-[10px] font-semibold leading-none">
                        {step.step.split(" ")[0]}
                      </span>
                      <span className="text-lg font-bold leading-none">
                        {step.step.split(" ")[1]}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 flex-1">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-2">
                      {step.desc}
                    </p>
                    <span className="text-xs text-rose-500 font-semibold">
                      {step.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. 料金相場 ===== */}
      <section className="py-16 px-4 bg-gray-50" id="price">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            アートメイクの料金相場（部位別）
          </h2>
          <p className="text-center text-gray-600 mb-8">
            2026年最新のアートメイク料金相場です。クリニックや施術者のランク、技法によって料金は変動します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">施術部位</th>
                  <th className="p-4 text-center">回数</th>
                  <th className="p-4 text-center">料金相場</th>
                  <th className="p-4 text-center">リタッチ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    area: "眉毛（2D パウダー）",
                    times: "2回",
                    price: "50,000〜80,000円",
                    retouch: "20,000〜40,000円",
                  },
                  {
                    area: "眉毛（3D ストローク）",
                    times: "2回",
                    price: "60,000〜100,000円",
                    retouch: "25,000〜45,000円",
                  },
                  {
                    area: "眉毛（4D コンビネーション）",
                    times: "2回",
                    price: "80,000〜130,000円",
                    retouch: "30,000〜50,000円",
                  },
                  {
                    area: "リップ",
                    times: "2回",
                    price: "80,000〜150,000円",
                    retouch: "30,000〜60,000円",
                  },
                  {
                    area: "アイライン（上）",
                    times: "2回",
                    price: "40,000〜70,000円",
                    retouch: "15,000〜30,000円",
                  },
                  {
                    area: "アイライン（上下）",
                    times: "2回",
                    price: "60,000〜100,000円",
                    retouch: "25,000〜45,000円",
                  },
                  {
                    area: "ヘアライン",
                    times: "2回",
                    price: "80,000〜150,000円",
                    retouch: "30,000〜50,000円",
                  },
                  {
                    area: "ほくろ",
                    times: "1回",
                    price: "10,000〜20,000円",
                    retouch: "5,000〜10,000円",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}
                  >
                    <td className="p-4 font-semibold text-gray-800 text-sm">
                      {row.area}
                    </td>
                    <td className="p-4 text-center text-sm">{row.times}</td>
                    <td className="p-4 text-center text-sm font-semibold text-rose-600">
                      {row.price}
                    </td>
                    <td className="p-4 text-center text-sm text-gray-600">
                      {row.retouch}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            ※ 料金は税込の目安です。クリニック・施術者ランクにより変動します。モニター価格が適用される場合はさらに安くなることがあります。
          </p>
        </div>
      </section>

      {/* ===== 10. FAQ 8問 ===== */}
      <section className="py-16 px-4 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            アートメイクに関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "アートメイクは痛いですか？",
                a: "施術前に麻酔クリームを塗布するため、強い痛みを感じることはほとんどありません。「毛抜きで毛を抜く程度」「チクチクする程度」と表現する方が多いです。痛みに弱い方は、事前にクリニックへ相談すると追加麻酔の対応も可能です。",
              },
              {
                q: "アートメイクの持続期間はどれくらいですか？",
                a: "一般的に1〜3年程度です。肌質（脂性肌の方は早く薄くなる傾向）、生活習慣（紫外線、ピーリング等）、施術部位によって個人差があります。1〜2年ごとのリタッチで美しい状態を維持できます。",
              },
              {
                q: "施術後のダウンタイムはどれくらい？",
                a: "眉毛の場合、施術後1〜2日は赤みが出る程度。3〜7日でかさぶたが形成され、1〜2週間で自然に剥がれます。リップは2〜3日腫れが目立つことがあります。施術当日〜3日は洗顔料の使用やサウナ・プールは控えてください。",
              },
              {
                q: "アートメイクを受けた後、MRI検査は受けられますか？",
                a: "基本的に問題なく受けられます。ただし、色素に含まれる微量の金属成分により、施術部位にピリピリ感や熱感を感じる可能性があります。MRI検査を受ける際は、事前に医療機関にアートメイクを受けていることをお伝えください。",
              },
              {
                q: "アートメイクを失敗したら修正できますか？",
                a: "はい、修正は可能です。色味の修正はリタッチ時に調整できます。形の大幅な変更やデザインの除去にはレーザー治療が必要になる場合もあります。失敗を防ぐには、症例写真が豊富で実績のあるクリニックを選び、カウンセリングで入念にデザインを決めることが大切です。",
              },
              {
                q: "何回施術を受ければ完成しますか？",
                a: "一般的には2回の施術で完成です。1回目で土台を作り、4〜6週間後の2回目で色味やデザインを微調整して仕上げます。クレアージュ東京は3回に分けて施術し、より自然な定着を目指すアプローチを採用しています。",
              },
              {
                q: "男性でもアートメイクは受けられますか？",
                a: "もちろん受けられます。メンズアートメイクは年々需要が増加しており、眉毛の薄さや左右非対称に悩む男性に人気です。メディカルブローやデイジークリニックなど、男性の施術実績が豊富なクリニックを選ぶと安心です。",
              },
              {
                q: "妊娠中・授乳中でも施術できますか？",
                a: "妊娠中の施術は基本的にお断りされるクリニックがほとんどです。麻酔クリームの使用や、施術中のストレスが母体に影響する可能性があるためです。授乳中についてはクリニックにより対応が異なるため、直接ご相談ください。",
              },
            ].map((faq, i) => (
              <details key={i} className="bg-gray-50 rounded-lg shadow-sm group">
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

      {/* ===== 11. CTA → ランキングへ ===== */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            自分に合ったクリニックを見つけよう
          </h2>
          <p className="text-xl mb-4 opacity-90">
            アートメイクの基礎知識を理解したら、次はクリニック選び。
          </p>
          <p className="text-lg mb-8 opacity-80">
            料金・技術力・口コミで厳選したおすすめクリニックランキングをチェック。
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
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-bold text-white text-lg mb-4">
            アートメイク比較ナビ
          </p>
          <nav className="flex justify-center gap-6 text-sm mb-6 flex-wrap">
            <a href="/" className="hover:text-white transition-colors">
              ランキング
            </a>
            <a href="/about" className="text-white font-semibold">
              アートメイクとは
            </a>
            <a href="/compare" className="hover:text-white transition-colors">
              比較表
            </a>
            <a href="/faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>
          <p className="text-sm mb-6">
            眉毛・アイライン・リップのアートメイククリニックを徹底比較
          </p>
          <p className="text-xs">
            &copy; 2026 アートメイク比較ナビ. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
