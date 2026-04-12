import Link from 'next/link'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アートメイクが安いクリニックランキング｜コスパ最強はどこ？【2026年最新】| アートメイク比較ナビ",
  description:
    "アートメイクが安いクリニック5社を料金比較ランキングで紹介。メディカルブロー28,000円〜、ファーストアートメイク38,500円〜など最安値を徹底比較。モニター価格・割引情報・安すぎるリスクも解説。",
  keywords: "アートメイク 安い,アートメイク コスパ,アートメイク 料金 安い,アートメイク モニター,眉毛アートメイク 安い",
  openGraph: {
    title: "アートメイクが安いクリニックランキング｜コスパ最強はどこ？",
    description:
      "アートメイクが安いクリニック5社を料金比較。モニター価格・割引・節約テクニックも紹介。",
    type: "article",
  },
};

export default function CheapPage() {
  return (
    <main className="min-h-screen">
      {/* ===== Hero ===== */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            目的別ガイド
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイクが安い
            <br className="hidden md:block" />
            クリニックランキング
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            「安く受けたいけど失敗は嫌」そんなあなたへ。
            <br className="hidden md:block" />
            コスパ最強のクリニック5社を料金・品質の両面から徹底比較します。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#ranking"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              料金ランキングを見る
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
                <a href="#ranking" className="hover:underline">
                  1. 安いクリニック料金ランキング
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:underline">
                  2. 5社の料金比較表
                </a>
              </li>
              <li>
                <a href="#monitor" className="hover:underline">
                  3. モニター価格・割引情報
                </a>
              </li>
              <li>
                <a href="#saving-tips" className="hover:underline">
                  4. 節約テクニック5選
                </a>
              </li>
              <li>
                <a href="#risk" className="hover:underline">
                  5. 安すぎるクリニックのリスク
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

      {/* ===== 1. 安いクリニック料金ランキング ===== */}
      <section className="py-16 px-4 bg-white" id="ranking">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            安いクリニック料金ランキング
          </h2>
          <p className="text-center text-gray-600 mb-8">
            眉毛アートメイクの最安プランをベースに、コスパの良い順にランキング。
            <br className="hidden md:block" />
            料金だけでなく品質とのバランスも評価しています。
          </p>

          <div className="space-y-6">
            {[
              {
                rank: 1,
                name: "メディカルブロー",
                price: "28,000円〜",
                note: "（2回セット・グランドマスターコース）",
                point: "業界最安水準でありながら年間症例数60,000例以上の圧倒的実績。6Dストロークで仕上がりも高品質。",
                link: "/review/medicalbrow",
                color: "bg-yellow-400",
              },
              {
                rank: 2,
                name: "ファーストアートメイク",
                price: "38,500円〜",
                note: "（パウダー眉1回）",
                point: "初回限定価格が魅力的。パウダー眉の仕上がりが上品で、コスパ重視の方におすすめ。",
                link: "/review/first-artmake",
                color: "bg-gray-300",
              },
              {
                rank: 3,
                name: "クレアージュ東京",
                price: "44,000円/回",
                note: "（3回セット132,000円）",
                point: "1回あたりの単価は安め。3回施術で自然な仕上がり。リタッチ料金も良心的。",
                link: "/review/creage",
                color: "bg-amber-600",
              },
              {
                rank: 4,
                name: "デイジークリニック",
                price: "49,800円〜",
                note: "（dazzy brow 2回セット）",
                point: "オリジナル技法「dazzy brow」が人気。モニター割引で更にお得に受けられる。",
                link: "/review/dazzy",
                color: "bg-rose-200",
              },
              {
                rank: 5,
                name: "トゥルーデザインクリニック",
                price: "59,400円〜",
                note: "（2回セット）",
                point: "完全オーダーメイドデザインでこの価格は良心的。技術力を考えればコスパは良い。",
                link: "/review/true-design",
                color: "bg-rose-100",
              },
            ].map((clinic) => (
              <div
                key={clinic.rank}
                className="bg-white border border-rose-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`${clinic.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0`}
                  >
                    {clinic.rank}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h3 className="font-bold text-xl text-gray-800">
                        {clinic.name}
                      </h3>
                      <span className="text-2xl font-bold text-rose-500">
                        {clinic.price}
                      </span>
                      <span className="text-xs text-gray-500">
                        {clinic.note}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. 5社の料金比較表 ===== */}
      <section className="py-16 px-4 bg-gray-50" id="comparison">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            5社の料金比較表
          </h2>
          <p className="text-center text-gray-600 mb-8">
            眉毛アートメイクの料金を部位・プラン別に一覧比較。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">クリニック</th>
                  <th className="p-4 text-center">眉（最安プラン）</th>
                  <th className="p-4 text-center">回数</th>
                  <th className="p-4 text-center">1回あたり</th>
                  <th className="p-4 text-center">リタッチ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "メディカルブロー",
                    price: "28,000円〜",
                    times: "2回",
                    per: "14,000円〜",
                    retouch: "20,000円〜",
                  },
                  {
                    name: "ファーストアートメイク",
                    price: "38,500円〜",
                    times: "1回",
                    per: "38,500円〜",
                    retouch: "要確認",
                  },
                  {
                    name: "クレアージュ東京",
                    price: "132,000円",
                    times: "3回",
                    per: "44,000円",
                    retouch: "33,000円〜",
                  },
                  {
                    name: "デイジークリニック",
                    price: "49,800円〜",
                    times: "2回",
                    per: "24,900円〜",
                    retouch: "30,000円〜",
                  },
                  {
                    name: "トゥルーデザインクリニック",
                    price: "59,400円〜",
                    times: "2回",
                    per: "29,700円〜",
                    retouch: "33,000円〜",
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
                    <td className="p-4 text-center text-sm font-semibold text-rose-600">
                      {row.per}
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
            ※ 料金は税込の目安です。施術者ランク・キャンペーン時期により変動します。
          </p>
        </div>
      </section>

      {/* ===== 3. モニター価格・割引情報 ===== */}
      <section className="py-16 px-4 bg-white" id="monitor">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            モニター価格・割引情報
          </h2>
          <p className="text-center text-gray-600 mb-8">
            さらにお得に受けたい方は、モニター制度や割引を活用しましょう。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "📸",
                title: "モニター割引",
                desc: "施術写真の提供を条件に、通常価格から10〜30%OFFになるモニター制度。メディカルブローやデイジークリニックで実施中。顔出しの有無で割引率が変動します。",
              },
              {
                icon: "👥",
                title: "友達紹介割引",
                desc: "既存患者の紹介で5,000〜10,000円OFFになるクリニックが多数。紹介者にもポイントや割引が適用されるWin-Winの制度です。",
              },
              {
                icon: "🎉",
                title: "初回限定キャンペーン",
                desc: "初めての方限定で大幅割引を実施するクリニックも。ファーストアートメイクは初回特別価格が常時設定されています。",
              },
              {
                icon: "📅",
                title: "平日・オフピーク割引",
                desc: "平日の日中限定で割引が適用されるプランも。時間に融通がきく方は平日予約がお得です。",
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

      {/* ===== 4. 節約テクニック5選 ===== */}
      <section className="py-16 px-4 bg-gray-50" id="saving-tips">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            アートメイクを安く受ける節約テクニック5選
          </h2>
          <div className="space-y-6">
            {[
              {
                num: 1,
                title: "施術者ランクを下げて受ける",
                desc: "多くのクリニックでは施術者にランク制度があり、下位ランクは大幅に安くなります。メディカルブローでは「ノービスアーティスト」と「グランドマスター」で数万円の差。技術研修は全ランク共通なので、新人でも基本品質は保証されています。",
              },
              {
                num: 2,
                title: "モニター制度を活用する",
                desc: "症例写真の提供に同意するだけで10〜30%OFFになるケースが多数。SNS掲載なしの院内モニターなら、プライバシーも守られます。",
              },
              {
                num: 3,
                title: "キャンペーン時期を狙う",
                desc: "年末年始、GW、夏のボーナス時期にキャンペーンが行われやすい傾向。公式LINEやSNSをフォローしておくと、限定クーポンの配布情報をキャッチできます。",
              },
              {
                num: 4,
                title: "セットプランを選ぶ",
                desc: "眉+アイラインなど複数部位をセットで受けると、個別で申し込むより割安に。まとめて施術することで通院回数も減らせます。",
              },
              {
                num: 5,
                title: "クレジットカードの医療ローンを利用",
                desc: "一括払いが難しい場合、分割払い対応のクリニックを選ぶのも手。月々3,000〜5,000円から受けられるプランもあります。",
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

      {/* ===== 5. 安すぎるクリニックのリスク ===== */}
      <section className="py-16 px-4 bg-white" id="risk">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            安すぎるクリニックのリスク
          </h2>
          <div className="bg-red-50 rounded-xl p-8 mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong className="text-red-600">要注意：</strong>
              相場を大幅に下回る料金（眉2回で2万円以下など）のクリニックには注意が必要です。
              安さの裏にはリスクが潜んでいる可能性があります。
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                num: 1,
                title: "無資格者による施術の可能性",
                desc: "アートメイクは医療行為です。医師・看護師の資格を持たない施術者が行っている違法サロンが存在します。感染症やアレルギーのリスクが高まります。",
              },
              {
                num: 2,
                title: "低品質な色素の使用",
                desc: "安い色素は変色（赤や青に変わる）のリスクがあります。認証を受けた安全な色素を使用しているか確認しましょう。",
              },
              {
                num: 3,
                title: "経験不足の施術者",
                desc: "練習台として安価に提供しているケースも。症例写真の数や実績年数を事前に確認することが重要です。",
              },
              {
                num: 4,
                title: "追加料金で結局高くなる",
                desc: "初回は安くても、麻酔代・指名料・デザイン料などが別途加算され、最終的に相場と変わらないケースもあります。総額で比較しましょう。",
              },
            ].map((risk) => (
              <div
                key={risk.num}
                className="flex gap-4 bg-red-50 rounded-xl p-6"
              >
                <div className="bg-red-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {risk.num}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-800">
                    {risk.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {risk.desc}
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
            安いアートメイクに関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "一番安いクリニックはどこですか？",
                a: "眉毛アートメイクの最安値はメディカルブローの28,000円〜（2回セット・グランドマスターコース）です。ただし施術者ランクにより料金が変動するため、最安ランクの場合はさらに安くなる場合もあります。",
              },
              {
                q: "安いクリニックでも仕上がりは大丈夫？",
                a: "大手クリニックの下位ランクプランであれば、技術研修は上位ランクと共通のため基本品質は保証されています。ただし経験の差は仕上がりに影響するため、症例写真を確認してから予約することをおすすめします。",
              },
              {
                q: "モニター価格にデメリットはありますか？",
                a: "症例写真がクリニックのSNSやサイトに掲載される可能性があります。顔全体が映るかどうか、掲載媒体はどこかを事前に確認しましょう。目元のみ・院内資料のみのモニターならプライバシーリスクは低いです。",
              },
              {
                q: "分割払いは利用できますか？",
                a: "多くの大手クリニックで医療ローンやクレジットカード分割に対応しています。月々3,000〜5,000円程度の支払いプランも。金利手数料がかかる場合があるので、総支払額を確認しましょう。",
              },
              {
                q: "相場より極端に安い個人サロンは危険ですか？",
                a: "はい、注意が必要です。アートメイクは医療行為のため、医師・看護師の資格が必要です。医療機関ではない個人サロンは違法の可能性があり、感染症やアレルギー、仕上がりのトラブルリスクが高まります。",
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
      <Link href="/compare/price" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">アートメイク料金比較表</p>
      </Link>
      <Link href="/parts/eyebrow" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">部位別</span>
        <p className="font-semibold mt-1">眉毛アートメイクの種類・相場</p>
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
            コスパ最強のクリニックを見つけよう
          </h2>
          <p className="text-xl mb-4 opacity-90">
            料金だけでなく技術力・口コミも含めた総合評価で比較。
          </p>
          <p className="text-lg mb-8 opacity-80">
            あなたにぴったりのクリニックがきっと見つかります。
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
