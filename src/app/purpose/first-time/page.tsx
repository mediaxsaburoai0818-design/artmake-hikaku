import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アートメイク初めての方へ｜初心者ガイド・施術の流れ・痛み解説【2026年最新】| アートメイク比較ナビ",
  description:
    "アートメイク初めての方に向けた完全ガイド。施術の流れ6ステップ、痛み・ダウンタイム、初心者におすすめのクリニック（ファーストアートメイク等）、初回カウンセリングのポイントを徹底解説。",
  keywords: "アートメイク 初めて,アートメイク 初心者,アートメイク 流れ,アートメイク 痛み,アートメイク ダウンタイム",
  openGraph: {
    title: "アートメイク初めての方へ｜初心者ガイド・施術の流れ・痛み解説",
    description:
      "初めてのアートメイクで失敗しないための完全ガイド。施術の流れ・痛み・おすすめクリニックを紹介。",
    type: "article",
  },
};

export default function FirstTimePage() {
  return (
    <main className="min-h-screen">
      {/* ===== Hero ===== */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            目的別ガイド
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイク初めての方へ
            <br className="hidden md:block" />
            初心者のための完全ガイド
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            「興味はあるけど不安...」「痛くないの？」「失敗しない？」
            <br className="hidden md:block" />
            初めてのアートメイクに必要な知識をすべてお伝えします。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#flow"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              施術の流れを見る
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
                <a href="#beginner-guide" className="hover:underline">
                  1. アートメイク初心者ガイド
                </a>
              </li>
              <li>
                <a href="#flow" className="hover:underline">
                  2. 施術の流れ6ステップ
                </a>
              </li>
              <li>
                <a href="#pain" className="hover:underline">
                  3. 痛み・ダウンタイム解説
                </a>
              </li>
              <li>
                <a href="#clinic" className="hover:underline">
                  4. 初心者におすすめのクリニック
                </a>
              </li>
              <li>
                <a href="#counseling" className="hover:underline">
                  5. 初回カウンセリングのポイント
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

      {/* ===== 1. 初心者ガイド ===== */}
      <section className="py-16 px-4 bg-white" id="beginner-guide">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            アートメイク初心者ガイド
          </h2>
          <div className="bg-rose-50 rounded-xl p-8 mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              アートメイクとは、皮膚の浅い層に専用の極細針で色素を注入し、
              <strong className="text-rose-600">眉毛・アイライン・リップなどのメイクを1〜3年持続させる医療行為</strong>
              です。タトゥーとは異なり、自然に薄くなるため安心。医師・看護師の有資格者が施術を行います。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏥",
                title: "医療機関で受ける",
                desc: "アートメイクは医療行為のため、必ず医療機関（クリニック）で受けましょう。医師・看護師の資格を持つ施術者が対応します。",
              },
              {
                icon: "🎨",
                title: "自分に合ったデザイン",
                desc: "骨格・顔のバランスに合わせてプロがデザイン。カウンセリングで希望を伝え、納得するまで調整できます。",
              },
              {
                icon: "🔄",
                title: "2回の施術で完成",
                desc: "一般的に2回の施術で完成します。1回目で土台を作り、2回目で微調整。間に4〜6週間空けます。",
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

      {/* ===== 2. 施術の流れ6ステップ ===== */}
      <section className="py-16 px-4 bg-gray-50" id="flow">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            施術の流れ6ステップ
          </h2>
          <p className="text-center text-gray-600 mb-10">
            初めてでも安心。カウンセリングから施術完了まで、一般的な流れを詳しく解説します。
          </p>
          <div className="relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-rose-200" />
            <div className="space-y-8">
              {[
                {
                  step: "STEP 1",
                  title: "カウンセリング（30〜60分）",
                  desc: "初めに医師またはカウンセラーが肌質・骨格を確認し、希望のデザイン・色味をヒアリングします。施術のリスクや注意事項の説明もここで行われます。疑問や不安は遠慮なく質問しましょう。",
                  tip: "写真を持参するとイメージが伝わりやすい",
                },
                {
                  step: "STEP 2",
                  title: "デザイン（20〜30分）",
                  desc: "骨格・表情筋・黄金比をもとに、あなたに最も似合うデザインを提案してもらいます。鏡を見ながら微調整を繰り返し、完全に納得いくまでデザインを固めます。",
                  tip: "納得するまで何度でも修正OK",
                },
                {
                  step: "STEP 3",
                  title: "麻酔（20〜30分）",
                  desc: "施術部位に麻酔クリームを塗布し、浸透するまで待ちます。これにより施術中の痛みを大幅に軽減できます。痛みに弱い方も安心です。",
                  tip: "塗る麻酔なので注射は不要",
                },
                {
                  step: "STEP 4",
                  title: "施術（60〜120分）",
                  desc: "いよいよ施術開始。選んだ技法（パウダー・ストローク・コンビネーション）で色素を注入していきます。痛みが強ければ途中で追加麻酔も可能。",
                  tip: "施術中はリラックスして寝てしまう方も",
                },
                {
                  step: "STEP 5",
                  title: "アフターケア説明（10〜15分）",
                  desc: "施術後の過ごし方を詳しく説明してもらいます。洗顔方法、塗り薬の使い方、避けるべき行為（サウナ・プール・激しい運動等）をしっかり確認。アフターケアが仕上がりを左右します。",
                  tip: "メモを取るか、説明書をもらう",
                },
                {
                  step: "STEP 6",
                  title: "2回目の施術予約（4〜6週間後）",
                  desc: "1回目の色素定着を確認してから、2回目で色味やデザインを微調整して完成させます。2回セットが一般的（クレアージュは3回）。2回目を受けないと色が薄いまま退色してしまうので、必ず受けましょう。",
                  tip: "1回目から4〜6週間後がベストタイミング",
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
                  <div className="bg-white rounded-xl p-6 flex-1 shadow-sm">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-2">
                      {step.desc}
                    </p>
                    <span className="text-xs text-rose-500 font-semibold">
                      Point: {step.tip}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. 痛み・ダウンタイム解説 ===== */}
      <section className="py-16 px-4 bg-white" id="pain">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            痛み・ダウンタイム解説
          </h2>

          {/* 痛み */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              痛みについて
            </h3>
            <div className="bg-rose-50 rounded-xl p-8 mb-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                麻酔クリームを使用するため、
                <strong className="text-rose-600">強い痛みを感じることはほとんどありません</strong>。
                多くの方が「毛抜きで毛を抜く程度」「チクチクする程度」と表現しています。
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg">
                <thead className="bg-rose-500 text-white">
                  <tr>
                    <th className="p-4 text-left">施術部位</th>
                    <th className="p-4 text-center">痛みレベル</th>
                    <th className="p-4 text-center">感覚の例え</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      area: "眉毛",
                      level: "★★☆☆☆（低い）",
                      feel: "毛抜きで抜く程度のチクチク感",
                    },
                    {
                      area: "アイライン",
                      level: "★★★☆☆（中程度）",
                      feel: "目元の皮膚が薄いためやや感じる",
                    },
                    {
                      area: "リップ",
                      level: "★★★★☆（やや強い）",
                      feel: "唇は敏感な部位のためピリピリ感あり",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}
                    >
                      <td className="p-4 font-semibold text-gray-800 text-sm">
                        {row.area}
                      </td>
                      <td className="p-4 text-center text-sm text-rose-500 font-semibold">
                        {row.level}
                      </td>
                      <td className="p-4 text-center text-sm text-gray-600">
                        {row.feel}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ダウンタイム */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              ダウンタイムについて
            </h3>
            <div className="space-y-6">
              {[
                {
                  day: "施術当日",
                  desc: "施術部位に赤みが出ます。眉毛は少し濃く見えますが正常です。施術部位に水がかからないよう注意してください。",
                  color: "bg-red-400",
                },
                {
                  day: "2〜3日目",
                  desc: "赤みが落ち着いてきます。眉毛はまだ濃い状態。洗顔時は施術部位を避けるか、優しく拭き取るようにしましょう。",
                  color: "bg-orange-400",
                },
                {
                  day: "4〜7日目",
                  desc: "薄いかさぶたが形成されます。かゆくても絶対に剥がさないでください。自然に剥がれるのを待ちましょう。",
                  color: "bg-yellow-400",
                },
                {
                  day: "1〜2週間後",
                  desc: "かさぶたが自然に剥がれ、色が一旦薄く見えます（一時的）。その後、皮膚の下に定着した色素が浮き上がり、最終的な色味に落ち着きます。",
                  color: "bg-green-400",
                },
                {
                  day: "4〜6週間後",
                  desc: "完全に色味が定着。2回目の施術を受けるベストタイミングです。",
                  color: "bg-blue-400",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start"
                >
                  <div
                    className={`${item.color} text-white text-xs font-bold px-3 py-2 rounded-lg shrink-0 w-24 text-center`}
                  >
                    {item.day}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. 初心者におすすめのクリニック ===== */}
      <section className="py-16 px-4 bg-gray-50" id="clinic">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            初心者におすすめのクリニック
          </h2>
          <p className="text-center text-gray-600 mb-8">
            初めての方に安心のカウンセリング体制・実績・料金を兼ね備えたクリニックを厳選。
          </p>
          <div className="space-y-6">
            {[
              {
                name: "ファーストアートメイク",
                badge: "初心者に最もおすすめ",
                price: "38,500円〜",
                point: "その名の通り「初めてのアートメイク」に特化したクリニック。初心者向けの丁寧なカウンセリングが好評で、不安を解消してから施術に進めます。初回特別価格も魅力的で、初めての方が最も通いやすい環境が整っています。",
                link: "/review/first-artmake",
              },
              {
                name: "メディカルブロー",
                badge: "実績No.1の安心感",
                price: "28,000円〜",
                point: "年間60,000例以上の圧倒的な施術実績。多くの初心者を施術してきたノウハウが豊富で、カウンセリングから施術まで安心して任せられます。全国に院があり、通いやすさも魅力。",
                link: "/review/medicalbrow",
              },
              {
                name: "デイジークリニック",
                badge: "SNSで人気",
                price: "49,800円〜",
                point: "SNSでの口コミ・症例写真が豊富で、仕上がりイメージが事前に確認しやすい。20〜30代の初めてのアートメイクに人気が高く、トレンドに敏感なデザインが得意。",
                link: "/review/dazzy",
              },
              {
                name: "クレアージュ東京",
                badge: "慎重派におすすめ",
                price: "132,000円（3回セット）",
                point: "3回に分けて少しずつ仕上げるため、一気に変わることへの不安がある方に最適。途中で色味やデザインの微調整がしやすく、失敗リスクが最も低いアプローチです。",
                link: "/review/creage",
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

      {/* ===== 5. 初回カウンセリングのポイント ===== */}
      <section className="py-16 px-4 bg-white" id="counseling">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            初回カウンセリングのポイント
          </h2>
          <p className="text-center text-gray-600 mb-8">
            カウンセリングで確認すべきことを事前に把握しておくと、初めてでも安心です。
          </p>
          <div className="space-y-6">
            {[
              {
                num: 1,
                title: "理想の眉の写真を持参する",
                desc: "雑誌やSNSで見つけた理想の眉の写真を3〜5枚持参しましょう。言葉だけでは伝わりにくいイメージも、写真があれば施術者と共有しやすくなります。自分では気づかない「好みの傾向」も施術者が読み取ってくれます。",
              },
              {
                num: 2,
                title: "普段のメイクで来院する",
                desc: "施術者に普段の印象を知ってもらうため、いつも通りのメイクで来院するのがおすすめ。メイクの濃さ・雰囲気に合わせたデザイン提案をしてもらえます。",
              },
              {
                num: 3,
                title: "不安な点はすべて質問する",
                desc: "「痛みはどのくらい？」「失敗したらどうなる？」「MRIは受けられる？」など、気になることは遠慮なく質問。良いクリニックは丁寧に答えてくれます。質問への回答が曖昧なクリニックは避けましょう。",
              },
              {
                num: 4,
                title: "施術者の症例写真を確認する",
                desc: "クリニック全体の症例ではなく、実際に自分を担当する施術者の症例写真を見せてもらいましょう。その施術者の得意なデザイン・仕上がりの傾向がわかります。",
              },
              {
                num: 5,
                title: "総額費用を確認する",
                desc: "施術費用に加えて、麻酔代・指名料・カウンセリング料・アフターケア用品など追加費用の有無を確認。2回目の施術費用も含めた総額で比較することが大切です。",
              },
            ].map((tip) => (
              <div
                key={tip.num}
                className="flex gap-4 bg-green-50 rounded-xl p-6"
              >
                <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {tip.num}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-800">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            初めてのアートメイクに関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "アートメイクは痛いですか？",
                a: "麻酔クリームを使用するため、強い痛みはほとんどありません。「毛抜きで毛を抜く程度」「チクチクする程度」という方が多いです。痛みに弱い方は事前に相談すると追加麻酔の対応も可能です。",
              },
              {
                q: "アートメイクで失敗することはありますか？",
                a: "施術者の技術やデザイン力に左右されるため、クリニック選びが重要です。失敗を防ぐには、症例写真が豊富な実績あるクリニックを選び、カウンセリングで入念にデザインを決めましょう。万一の修正も2回目の施術で調整可能です。",
              },
              {
                q: "施術後いつからメイクできますか？",
                a: "施術部位以外のメイクは当日からOK。施術部位のメイクは、かさぶたが完全に剥がれた後（約1〜2週間後）から可能です。クレンジング時に施術部位を強くこすらないよう注意してください。",
              },
              {
                q: "何回通えば完成しますか？",
                a: "一般的に2回の施術で完成です。1回目で土台を作り、4〜6週間後の2回目で微調整して仕上げます。クレアージュ東京は3回に分けて施術するアプローチです。1回だけでは色素の定着が不十分なため、必ず2回目を受けましょう。",
              },
              {
                q: "カウンセリングだけ受けて帰ることはできますか？",
                a: "はい、ほとんどのクリニックでカウンセリングのみの来院が可能です。無料カウンセリングを実施しているクリニックも多いため、まずは話を聞いてから判断できます。複数のクリニックを比較検討することをおすすめします。",
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
            初めてのアートメイクを成功させよう
          </h2>
          <p className="text-xl mb-4 opacity-90">
            初心者にも安心のクリニックを総合ランキングでチェック。
          </p>
          <p className="text-lg mb-8 opacity-80">
            料金・技術力・カウンセリング体制で厳選した5社を徹底比較。
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
