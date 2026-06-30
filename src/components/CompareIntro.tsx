import Link from 'next/link'

type ClinicSide = {
  /** クリニック名 */
  name: string
  /** /review/ への内部リンクslug（例: "creage"）。指定時はリンク表示 */
  reviewSlug?: string
  /** この院が向く人（1行） */
  suitFor: string
  /** 実質総額の目安（料金比較DB / review の確認済み値より転記） */
  totalPrice: string
}

type Props = {
  /** 「どっちがおすすめ？」への一文回答 */
  verdict: string
  a: ClinicSide
  b: ClinicSide
}

/**
 * 指名比較ペア共通の「30秒結論ボックス」。
 * - 一文回答＋両院の向く人＋実質総額の目安（料金比較DBから転記）
 * - 各 /review/ への内部リンク
 * - 医療広告ガイドライン: 最上級・効果保証表現は使わない
 */
export function ThirtySecVerdict({ verdict, a, b }: Props) {
  return (
    <section className="py-10 px-4 bg-white border-y border-rose-100" id="quick-verdict">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl border-2 border-rose-200 bg-rose-50/60 p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              30秒でわかる結論
            </span>
            <h2 className="text-lg md:text-xl font-bold text-gray-900">
              どっちがおすすめ？
            </h2>
          </div>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6">
            {verdict}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[a, b].map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-5"
              >
                <p className="font-bold text-gray-900 mb-1">{c.name}が向く人</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  {c.suitFor}
                </p>
                <p className="text-xs text-gray-500">
                  実質総額の目安：
                  <span className="font-semibold text-rose-600">{c.totalPrice}</span>
                </p>
                {c.reviewSlug && (
                  <Link
                    href={`/review/${c.reviewSlug}/`}
                    className="inline-block mt-3 text-sm text-rose-600 font-semibold underline underline-offset-2"
                  >
                    {c.name}の口コミ・評判を見る →
                  </Link>
                )}
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-gray-500 leading-relaxed">
            ※料金は2026年6月12日に各院公式サイトで確認した税込価格ベースの目安です（指名料・麻酔・初診/再診の扱いは院により異なります）。最新・正確な総額は
            <Link href="/compare/price/" className="text-rose-600 underline">料金比較DB</Link>
            と各院のカウンセリングでご確認ください。アートメイクは医師・看護師が在籍する医療機関で行う医療行為で、効果・リスク・持ちには個人差があります。
          </p>
        </div>
      </div>
    </section>
  )
}

type ReviewTrendProps = {
  aName: string
  bName: string
  aGood: string[]
  aBad: string[]
  bGood: string[]
  bBad: string[]
  aReviewSlug?: string
  bReviewSlug?: string
}

/**
 * 口コミ・評判の傾向（検索意図「口コミ・評判」対応）。
 * 出典のある傾向のみ・断定回避。実名/星/日付つきの創作口コミは入れない。
 * データは各 /review/ の確認済み傾向まとめから転記。
 */
export function ReviewTrendSection({
  aName,
  bName,
  aGood,
  aBad,
  bGood,
  bBad,
  aReviewSlug,
  bReviewSlug,
}: ReviewTrendProps) {
  const cols: {
    name: string
    good: string[]
    bad: string[]
    slug?: string
  }[] = [
    { name: aName, good: aGood, bad: aBad, slug: aReviewSlug },
    { name: bName, good: bGood, bad: bBad, slug: bReviewSlug },
  ]
  return (
    <section className="py-14 px-4 bg-gray-50" id="reviews">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          口コミ・評判の傾向
        </h2>
        <p className="text-center text-gray-500 text-sm mb-10 max-w-2xl mx-auto leading-relaxed">
          レビューサイト等で一般に観測される傾向を、断定を避けてまとめたものです（個別の体験談・点数評価・創作エピソードではありません）。感じ方には個人差があります。
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {cols.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">{c.name}</h3>
              <p className="text-xs font-bold text-emerald-600 mb-2">
                評価されやすい点
              </p>
              <ul className="space-y-2 mb-5">
                {c.good.map((t, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-emerald-500 font-bold mt-0.5">+</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs font-bold text-rose-500 mb-2">
                注意したい点・指摘されやすい点
              </p>
              <ul className="space-y-2">
                {c.bad.map((t, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-rose-400 font-bold mt-0.5">!</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              {c.slug && (
                <Link
                  href={`/review/${c.slug}/`}
                  className="inline-block mt-5 text-sm text-rose-600 font-semibold underline underline-offset-2"
                >
                  {c.name}の口コミ・評判をもっと見る →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
