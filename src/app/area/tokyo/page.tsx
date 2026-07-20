import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "東京のアートメイクおすすめクリニック比較【2026年】実際に払う総額・エリア別に解説",
  description:
    "東京でおすすめのアートメイククリニック5院を表参道・新宿・銀座・六本木エリア別に徹底比較。メディカルブロー、デイジー、ファーストアートメイク、クレアージュの料金・アクセス・口コミを紹介。",
  keywords: "アートメイク 東京 おすすめ,アートメイク 東京,眉毛アートメイク 東京,アートメイク 東京 安い,アートメイク 東京 人気",
  openGraph: {
    title: "アートメイク 東京 おすすめクリニック5選｜エリア別徹底比較",
    description:
      "東京のアートメイククリニックを表参道・新宿・銀座・六本木エリア別に比較。料金・技術・アクセスで選ぶ。",
    type: "article",
  },
};

export default function TokyoAreaPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "エリア" }, { name: "東京" }]} />
      {/* ===== Hero ===== */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">
            エリア別ガイド
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            東京でおすすめの
            <br className="hidden md:block" />
            アートメイククリニック8選
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            東京はアートメイククリニックの激戦区。
            <br className="hidden md:block" />
            表参道・新宿・銀座・六本木の人気エリア別に厳選クリニックをご紹介します。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#clinics"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              クリニック一覧を見る
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

      {/* ===== エリア特徴 ===== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            東京エリアの特徴
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                area: "表参道・青山",
                desc: "美容感度の高いエリア。トレンド最先端の技術を取り入れたクリニックが集中。芸能人御用達の院も多い。",
                station: "表参道駅・明治神宮前駅",
              },
              {
                area: "新宿",
                desc: "アクセス抜群で通いやすさNo.1。大手クリニックの旗艦院が揃い、夜遅くまで営業している院も。",
                station: "新宿駅・新宿三丁目駅",
              },
              {
                area: "銀座",
                desc: "高級感のあるクリニックが多数。丁寧なカウンセリングと上質な空間で、大人の女性に人気。",
                station: "銀座駅・有楽町駅",
              },
              {
                area: "六本木",
                desc: "外国人対応可能なクリニックも。海外トレンドを取り入れた最新技術が受けられる。",
                station: "六本木駅・乃木坂駅",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-rose-50 rounded-xl p-6 border border-rose-200"
              >
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {item.area}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  {item.desc}
                </p>
                <p className="text-xs text-rose-500 font-semibold">
                  最寄駅: {item.station}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== クリニック一覧 ===== */}
      <section className="py-16 px-4 bg-gray-50" id="clinics">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            東京の掲載クリニック（当サイト検証済み4院）
          </h2>
          <div className="space-y-6">
            {[
              {
                rank: 1,
                name: "メディカルブロー（表参道・新宿ほか）",
                price: "総額 約102,200円〜",
                access: "表参道ほか都内複数院（詳細は公式サイトで要確認）",
                point: "累計23万件超の実績と7Dストローク®が強み。ランク制のため指名料込みの総額で比較を（当サイト検証: 眉2回・指名料込み目安）。",
                areas: "表参道・新宿ほか",
                link: "/review/medicalbrow",
                color: "bg-yellow-400",
              },
              {
                rank: 2,
                name: "DAZZY CLINIC（デイジー）新宿本院",
                price: "眉2回 93,800円〜",
                access: "新宿（新宿本院）",
                point: "3種類の技法から選べる。院ごとに料金が異なり、新宿本院のNatural Browは93,800円（2026年6月12日公式確認・税込）。LINEビデオカウンセリング対応。",
                areas: "新宿（ほか札幌・福岡天神）",
                link: "/review/dazzy",
                color: "bg-gray-300",
              },
              {
                rank: 3,
                name: "クレアージュ東京",
                price: "総額 約135,300円（眉3回）",
                access: "有楽町",
                point: "指名料なしの明朗会計が特徴。眉3回セットで約135,300円（2026年6月12日公式確認・税込）。回数を重ねて仕上げたい人向け。",
                areas: "有楽町",
                link: "/review/creage",
                color: "bg-amber-600",
              },
              {
                rank: 4,
                name: "ファーストアートメイク（銀座）",
                price: "モニター総額 約93,500円〜",
                access: "銀座（全国27院展開）",
                point: "全国27院・ランク制。モニター利用で総額を抑えやすい（2026年6月12日公式確認・税込）。適用条件はカウンセリングで要確認。",
                areas: "銀座ほか全国",
                link: "/review/first-artmake",
                color: "bg-rose-400",
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
                    </div>
                    <p className="text-xs text-gray-500 mb-2">
                      アクセス: {clinic.access}
                    </p>
                    <p className="text-xs text-rose-400 mb-2">
                      展開エリア: {clinic.areas}
                    </p>
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
          <p className="text-xs text-gray-400 mt-4">※掲載は当サイトが公式サイトで料金・院情報を確認できたクリニックのみです（2026年6月12日確認・税込）。駅からの徒歩分数・営業時間は変動するため記載していません。最新情報は各公式サイトでご確認ください。</p>
        </div>
      </section>

      {/* ===== 料金比較表 ===== */}
      <section className="py-16 px-4 bg-white" id="comparison">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            東京エリア料金比較表
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th className="p-4 text-left">クリニック</th>
                  <th className="p-4 text-center">眉（税込）</th>
                  <th className="p-4 text-center">回数</th>
                  <th className="p-4 text-center">エリア</th>
                  <th className="p-4 text-center">最寄駅</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "メディカルブロー", price: "総額 約102,200円〜", times: "2回", area: "表参道/新宿ほか", station: "公式サイトで要確認" },
                  { name: "DAZZY CLINIC（新宿本院）", price: "93,800円〜", times: "2回", area: "新宿", station: "公式サイトで要確認" },
                  { name: "クレアージュ東京", price: "総額 約135,300円", times: "3回", area: "有楽町", station: "公式サイトで要確認" },
                  { name: "ファーストアートメイク", price: "モニター総額 約93,500円〜", times: "2回", area: "銀座ほか全国27院", station: "公式サイトで要確認" },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-rose-50/30" : "bg-white"}
                  >
                    <td className="p-4 font-semibold text-gray-800 text-sm">{row.name}</td>
                    <td className="p-4 text-center text-sm font-semibold text-rose-600">{row.price}</td>
                    <td className="p-4 text-center text-sm">{row.times}</td>
                    <td className="p-4 text-center text-sm">{row.area}</td>
                    <td className="p-4 text-center text-sm text-gray-600">{row.station}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            ※ 2026年6月12日に各院公式サイトで確認した税込価格（総額表記は指名料等込みの当サイト検証目安）。施術者ランク・キャンペーン時期により変動します。公式で料金・院情報を確認できたクリニックのみ掲載しています。
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            東京のアートメイクに関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "東京で一番おすすめのアートメイククリニックはどこですか？",
                a: "実績重視ならメディカルブロー（累計23万件超・7Dストローク®）、指名料なしの明朗会計ならクレアージュ東京、総額を抑えるならファーストアートメイクのモニター、と目的で分かれます。当サイト検証の総額目安は眉2回で約9.3万〜13.6万円です（2026年6月12日確認・税込）。",
              },
              {
                q: "東京のどのエリアがアートメイクに通いやすいですか？",
                a: "アクセス重視なら新宿がおすすめです。JR・私鉄・地下鉄が集中し、どこからでも通いやすい立地です。高級感を重視するなら銀座・表参道エリアがおすすめです。",
              },
              {
                q: "東京のクリニックは予約が取りにくいですか？",
                a: "人気院は土日の予約が埋まりやすい傾向があります。平日夕方以降や、開院直後の時間帯が比較的予約を取りやすいです。2〜3週間前の予約がおすすめです。",
              },
              {
                q: "東京で安くアートメイクを受けるコツはありますか？",
                a: "モニター制度の活用が最も効果的です（例: ファーストアートメイクはモニターで総額約93,500円〜・2026年6月12日確認）。ランク制の院では施術者ランクを下げる選択肢もありますが、メニュー表の価格だけでなく指名料込みの総額で比較するのが失敗しないコツです。",
              },
              {
                q: "仕事帰りに通えるクリニックはありますか？",
                a: "新宿・有楽町エリアには夜間まで受け付けるクリニックもありますが、営業時間は院・時期により変わるため、各公式サイトの最新情報でご確認ください。DAZZY CLINICはLINEのビデオカウンセリングに対応しており、来院前の相談は仕事帰りでもしやすい仕組みです。",
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
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 text-center mb-10">
            <p className="text-sm text-gray-700 mb-3">主要8院の公式料金を、指名料・麻酔・初診/再診などの追加費用まで含めた「実際に払う総額」で横断比較できます（税込・確認日付き）。アートメイクは医療行為で、料金・仕上がりには個人差があります。</p>
            <Link href="/compare/price/" className="inline-flex items-center justify-center gap-2 bg-rose-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-rose-700 transition">各院の公式料金を横断比較する →</Link>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">関連記事</h2>
          <div className="grid md:grid-cols-2 gap-4">
      <Link href="/area/ginza/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">エリア</span>
        <p className="font-semibold mt-1">銀座エリアのおすすめクリニック</p>
      </Link>
      <Link href="/area/shinjuku/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">エリア</span>
        <p className="font-semibold mt-1">新宿エリアのおすすめクリニック</p>
      </Link>
      <Link href="/review/medicalbrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">メディカルブローの口コミ・評判</p>
      </Link>
      <Link href="/review/dazzy/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">デイジークリニックの口コミ・評判</p>
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
            東京であなたに合ったクリニックを見つけよう
          </h2>
          <p className="text-xl mb-4 opacity-90">
            エリア・料金・技術力で総合比較。
          </p>
          <p className="text-lg mb-8 opacity-80">
            表参道・新宿・銀座・六本木、あなたにぴったりの1院が見つかります。
          </p>
          <a
            href="/"
            className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            おすすめクリニックランキングを見る
          </a>
          <p className="mt-6 text-sm opacity-70">
            2026年4月最新 - 東京エリアのクリニックを徹底比較
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      
      <div className="max-w-4xl mx-auto px-4">
        <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "東京で一番おすすめのアートメイククリニックはどこですか？", "acceptedAnswer": {"@type": "Answer", "text": "実績重視ならメディカルブロー（累計23万件超・7Dストローク®）、指名料なしの明朗会計ならクレアージュ東京、総額を抑えるならファーストアートメイクのモニター、と目的で分かれます。当サイト検証の総額目安は眉2回で約9.3万〜13.6万円です（2026年6月12日確認・税込）。"}}, {"@type": "Question", "name": "東京のどのエリアがアートメイクに通いやすいですか？", "acceptedAnswer": {"@type": "Answer", "text": "アクセス重視なら新宿がおすすめです。JR・私鉄・地下鉄が集中し、どこからでも通いやすい立地です。高級感を重視するなら銀座・表参道エリアがおすすめです。"}}, {"@type": "Question", "name": "東京のクリニックは予約が取りにくいですか？", "acceptedAnswer": {"@type": "Answer", "text": "人気院は土日の予約が埋まりやすい傾向があります。平日夕方以降や、開院直後の時間帯が比較的予約を取りやすいです。2〜3週間前の予約がおすすめです。"}}, {"@type": "Question", "name": "東京で安くアートメイクを受けるコツはありますか？", "acceptedAnswer": {"@type": "Answer", "text": "モニター制度の活用が最も効果的です（例: ファーストアートメイクはモニターで総額約93,500円〜・2026年6月12日確認）。ランク制の院では施術者ランクを下げる選択肢もありますが、メニュー表の価格だけでなく指名料込みの総額で比較するのが失敗しないコツです。"}}, {"@type": "Question", "name": "仕事帰りに通えるクリニックはありますか？", "acceptedAnswer": {"@type": "Answer", "text": "新宿・有楽町エリアには夜間まで受け付けるクリニックもありますが、営業時間は院・時期により変わるため、各公式サイトの最新情報でご確認ください。DAZZY CLINICはLINEのビデオカウンセリングに対応しており、来院前の相談は仕事帰りでもしやすい仕組みです。"}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "東京", "item": "https://artmake-hikaku.com/area/tokyo/"}]}) }} />
    </main>
  );
}
