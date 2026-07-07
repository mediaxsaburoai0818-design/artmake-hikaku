import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: "メンズアートメイクの料金はいくら？【2026年】男性対応を公式確認できた3院を比較",
  description:
    "メンズアートメイク（男性の眉毛アートメイク）の料金と選び方。男性対応を公式サイトで確認できた3院（メディカルブローのメンズブロー・トゥルーデザイン・ファーストアートメイク）の実額比較（2026年7月6日確認・税込）、男性向けデザイン4スタイル、ビジネスでの印象効果を解説。",
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
      <Breadcrumb items={[{ name: "目的別" }, { name: "メンズ" }]} />
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
            男性への対応を各公式サイトで確認できたクリニックのみ掲載しています（2026年7月6日確認）。
          </p>
          <div className="space-y-6">
            {[
              {
                name: "メディカルブロー（メンズブロー）",
                badge: "男性専門院あり",
                price: "眉2回 90,000〜150,000円（ランク別）",
                point: "公式のメンズ専門ブランド「MEN'S BROWS」を展開し、男性専門のメンズブロー六本木院を持つ唯一の大手（公式明記）。通常8院（表参道・新宿・福岡天神等）でも男性の予約が可能。NATURAL/STANDARD/INTELLIGENCE/COOLの男性向け4スタイルから選べる（2026年7月6日公式確認・税込）。",
                link: "/review/medicalbrow",
              },
              {
                name: "トゥルーデザインクリニック（大阪・心斎橋）",
                badge: "メンズLPあり・低価格",
                price: "眉2回 40,000〜70,000円（男女同額）",
                point: "公式にメンズアートメイク専用ページを持ち、予約フォームに男性区分あり。2D 2回40,000円／3D 60,000円／4D 70,000円と検証3院で最安クラス（男女同額・指名料1回1,500円・2026年7月6日公式確認・税込）。所在地は大阪・心斎橋。",
                link: "#",
              },
              {
                name: "ファーストアートメイク",
                badge: "メンズ眉対応アーティスト在籍",
                price: "眉2回 99,000〜150,000円（男女共通）",
                point: "公式サイトのアーティスト紹介に「メンズ眉」対応タグを持つ施術者が銀座・新宿・大阪など複数院に在籍。料金は男女共通（フレッシュ2回99,000円〜トップ2回150,000円・平日モニター2回88,000円・2026年7月6日公式確認・税込）。",
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
                    name: "トゥルーデザイン（大阪）",
                    price: "40,000〜70,000円（男女同額）",
                    times: "2回",
                    menu: "メンズ専用ページあり",
                  },
                  {
                    name: "メディカルブロー（メンズブロー）",
                    price: "90,000〜150,000円（ランク別）",
                    times: "2回",
                    menu: "男性専門院あり（六本木）",
                  },
                  {
                    name: "ファーストアートメイク",
                    price: "99,000〜150,000円（モニター88,000円）",
                    times: "2回",
                    menu: "メンズ眉対応アーティスト在籍",
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
                icon: "",
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
                a: "恥ずかしいことではありません。メディカルブローが男性専門院（メンズブロー六本木院）を公式に展開するなど、男性のアートメイクは市場として確立しています。美容医療は男女問わず一般的になっています。",
              },
              {
                q: "アートメイクしたことが周りにバレますか？",
                a: "自然なデザイン・色味で施術すれば、ほとんどバレません。「眉を整えた？」と言われる程度で、アートメイクだと気づかれることは稀です。施術直後は少し濃く見えますが、1〜2週間で自然に馴染みます。",
              },
              {
                q: "男性の施術で痛みは強いですか？",
                a: "多くのクリニックで麻酔クリームが使用され、痛みは軽減されます。痛みの感じ方には個人差があるため、不安な場合はカウンセリングで麻酔の方法を確認しましょう（医療行為のため施術は医療機関で行われます）。",
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


      {/* メンズ関連メニューの接続 */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-3">眉以外のメンズメニューも検討する方へ</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-bold text-gray-800 mb-1">薄毛向けヘアアートメイク（SMP）</p>
                <p className="text-gray-600 mb-2">M字・頭頂部に対応するメンズSMPはAMGが公式メニュー化（1回75,000円・2026年7月7日確認）。生え際の後退が気になる方は眉と同時相談も可能です。</p>
                <Link href="/review/amg/" className="text-rose-500 font-semibold underline">AMGのレビュー →</Link>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-bold text-gray-800 mb-1">男性専門院で受けたい方</p>
                <p className="text-gray-600 mb-2">メディカルブローのメンズ専門「メンズブロー」（六本木）は男性専門院として実在を公式確認済み。男性の来院しやすさを重視するならこちら。</p>
                <Link href="/review/medicalbrow/" className="text-rose-500 font-semibold underline">メディカルブローのレビュー →</Link>
              </div>
            </div>
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
      <Link href="/parts/eyebrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">部位別</span>
        <p className="font-semibold mt-1">眉毛アートメイクの種類・相場</p>
      </Link>
      <Link href="/purpose/natural/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">目的別</span>
        <p className="font-semibold mt-1">自然な仕上がりのアートメイク</p>
      </Link>
      <Link href="/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">ランキング</span>
        <p className="font-semibold mt-1">アートメイクおすすめクリニックTOP5</p>
      </Link>
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
      
      <div className="max-w-4xl mx-auto px-4">
        <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "男性がアートメイクを受けるのは恥ずかしくないですか？", "acceptedAnswer": {"@type": "Answer", "text": "恥ずかしいことではありません。メディカルブローが男性専門院（メンズブロー六本木院）を公式に展開するなど、男性のアートメイクは市場として確立しています。美容医療は男女問わず一般的になっています。"}}, {"@type": "Question", "name": "アートメイクしたことが周りにバレますか？", "acceptedAnswer": {"@type": "Answer", "text": "自然なデザイン・色味で施術すれば、ほとんどバレません。「眉を整えた？」と言われる程度で、アートメイクだと気づかれることは稀です。施術直後は少し濃く見えますが、1〜2週間で自然に馴染みます。"}}, {"@type": "Question", "name": "男性の施術で痛みは強いですか？", "acceptedAnswer": {"@type": "Answer", "text": "多くのクリニックで麻酔クリームが使用され、痛みは軽減されます。痛みの感じ方には個人差があるため、不安な場合はカウンセリングで麻酔の方法を確認しましょう（医療行為のため施術は医療機関で行われます）。"}}, {"@type": "Question", "name": "施術後すぐに仕事に復帰できますか？", "acceptedAnswer": {"@type": "Answer", "text": "はい、基本的に翌日から通常通り仕事ができます。眉毛のアートメイクはダウンタイムが軽く、赤みも1〜2日で引きます。ただし施術直後は濃く見えるため、気になる方は金曜夕方の施術がおすすめです。"}}, {"@type": "Question", "name": "将来的に眉の形を変えたくなったらどうなりますか？", "acceptedAnswer": {"@type": "Answer", "text": "アートメイクは1〜3年で徐々に薄くなるため、次回施術時にデザインを変更できます。完全に消したい場合はレーザー除去も可能です。流行に合わせてデザインを微調整できる柔軟性がアートメイクのメリットです。"}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "メンズ", "item": "https://artmake-hikaku.com/purpose/mens/"}]}) }} />
    </main>
  );
}
