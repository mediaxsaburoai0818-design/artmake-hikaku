import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイクの経過を徹底解説｜施術当日〜1年後まで時系列レポート【2026年最新】',
  description: '眉毛アートメイクの経過を施術当日から1年後まで時系列で詳しく解説。各段階の見た目の変化・注意点・ダウンタイム中のケア方法、部位別（眉・リップ・アイライン）の経過の違いも紹介。',
  keywords: 'アートメイク 経過,アートメイク ダウンタイム,眉毛アートメイク 経過,アートメイク 経過写真,アートメイク 1週間後',
  openGraph: {
    title: 'アートメイクの経過を徹底解説｜施術当日〜1年後まで',
    description: '眉毛アートメイクの経過を施術当日から1年後まで時系列で詳しく解説。',
    type: 'article',
  },
}

const timelineStages = [
  {
    period: '施術当日',
    appearance: '施術直後は色が最も濃く見える時期です。眉の形がくっきりと濃く描かれたような印象で、「濃すぎる？」と不安になる方が多いですが、これは正常な状態。施術部位は赤みを帯び、軽い腫れが出ることもあります。',
    care: 'ワセリンをたっぷり塗布して保湿。施術部位を触らない・濡らさない。枕カバーは清潔なものに交換。',
    ng: '洗顔で施術部位を濡らす、メイクをする、汗をかく激しい運動、飲酒',
  },
  {
    period: '翌日（1日後）',
    appearance: '当日よりさらに色が濃く見えることがあります。腫れは少し引きますが、赤みは残る場合があります。眉の輪郭がはっきりしており、まだ不自然に感じるかもしれません。',
    care: 'ワセリンでの保湿を継続。施術部位を清潔に保つ。シャワーは短時間で、顔に直接お湯をかけない。',
    ng: '施術部位をこする、長時間の入浴、サウナ、プール',
  },
  {
    period: '3日目',
    appearance: '色がやや落ち着き始めます。施術部位にかさぶた（薄い膜状）ができ始める時期。かさぶたが色素と一緒に見えるため、まだら模様に感じることがありますが、自然な過程です。',
    care: 'かさぶたを絶対に剥がさない。ワセリンで保湿を継続。洗顔時は施術部位を避けてやさしく。',
    ng: 'かさぶたを無理に剥がす、スクラブ洗顔、ピーリング、化粧水を直接塗る',
  },
  {
    period: '1週間後',
    appearance: 'かさぶたが自然に剥がれ始めます。剥がれた部分は色が薄く見え、「色が消えた？」と心配になる方が多い時期。これは表面の色素が剥がれただけで、真皮に入った色素は残っています。全体的に施術直後の50〜60%程度の濃さに感じます。',
    care: 'かさぶたが残っている部分は引き続き触らない。保湿を継続。軽いメイクは剥がれた部分のみ可。',
    ng: 'まだ残っているかさぶたを引っ張る、施術部位への刺激、日焼け',
  },
  {
    period: '2週間後',
    appearance: 'かさぶたがほぼ完全に剥がれ、色の定着具合が見えてきます。施術直後の40〜50%程度の濃さに落ち着きます。「薄すぎる」と感じる方もいますが、ここからさらに色が馴染んでいきます。肌のターンオーバーにより色味が安定していない時期。',
    care: '日焼け止めの使用を開始。通常のスキンケアに徐々に戻してOK。施術部位のメイクも可能に。',
    ng: '強い紫外線を浴びる、レーザー治療、ケミカルピーリング',
  },
  {
    period: '1ヶ月後',
    appearance: '色がほぼ安定し、最終的な仕上がりに近い状態に。施術直後の30〜40%程度の濃さで、自然な色味に落ち着きます。この時点で2回目の施術（リタッチ）が可能になるクリニックが多いです。デザインの微調整もこのタイミングで相談。',
    care: '通常のスキンケア・メイクが可能。日焼け対策は引き続き意識。2回目の施術の予約を検討。',
    ng: '特になし（通常の生活でOK）。ただし過度な日焼けは色褪せの原因に。',
  },
  {
    period: '3ヶ月後',
    appearance: '色素が完全に定着し、本来の仕上がりが完成。肌に馴染んだ自然な色味になります。すっぴんでも「もともと眉がある人」に見える理想的な状態。2回目の施術を受けた方は、さらに色持ちが良くなっています。',
    care: '日焼け対策を継続（色持ちに影響）。スキンケアは通常通りでOK。',
    ng: '過度なピーリング、レーザー治療（担当医に相談）',
  },
  {
    period: '半年後',
    appearance: '個人差が出始める時期。脂性肌の方や代謝が活発な方は、やや薄くなり始めることがあります。乾燥肌の方は比較的色持ちが良い傾向。全体的にはまだ十分な色味を保っています。',
    care: '色の薄くなりが気になり始めたら、リタッチの時期を検討。保湿ケアを意識すると色持ちが良くなります。',
    ng: '特になし',
  },
  {
    period: '1年後',
    appearance: '施術時の30〜50%程度の濃さに。まだアートメイクの形は残っていますが、自然にぼんやりとした印象になります。「そろそろリタッチしたい」と感じる方が多い時期。メディカルブロー（95点）やクレアージュ東京（92点）では1年〜1年半でのリタッチを推奨しています。',
    care: 'リタッチを検討。前回と同じクリニックなら、カルテが残っているのでスムーズ。デザイン変更の相談も可能。',
    ng: '特になし',
  },
]

const partDifferences = [
  {
    part: '眉（アイブロウ）',
    timeline: '定着まで約1ヶ月。かさぶた期間は5〜7日。色残りは1〜3年。',
    features: '最もポピュラーな部位。ダウンタイムが比較的軽く、日常生活への影響が少ない。かさぶたが薄い膜状なので目立ちにくい。脂性肌の方は色抜けが早い傾向。',
    painLevel: '痛みレベル：★★☆☆☆（軽い）',
  },
  {
    part: 'リップ（唇）',
    timeline: '定着まで約1〜2ヶ月。かさぶた期間は7〜10日。色残りは1〜3年。',
    features: '眉より腫れが出やすく、施術後2〜3日はぷっくりと腫れることがある。かさぶたは唇全体に厚めにできる。色の変化が大きく、施術直後は非常に濃い赤やピンクに見えるが、最終的には自然な血色感に。ヘルペスの既往がある方は事前に抗ウイルス薬の服用が推奨される。',
    painLevel: '痛みレベル：★★★☆☆（中程度）',
  },
  {
    part: 'アイライン',
    timeline: '定着まで約1ヶ月。かさぶた期間は3〜5日。色残りは2〜3年。',
    features: '施術後は目の周りが腫れやすく、泣いた後のようなむくみが出る場合がある。ダウンタイム中はコンタクトレンズの使用を控える必要がある。かさぶたは細かい粒状。眉に比べて色持ちが良い傾向にある。',
    painLevel: '痛みレベル：★★★★☆（やや強い）',
  },
]

const faqs = [
  {
    q: 'アートメイクの経過で最も色が濃い時期はいつですか？',
    a: '施術当日〜翌日が最も濃く見えます。これは色素が肌表面にも残っている状態で、かさぶたと一緒に表面の色素が剥がれ落ちることで徐々に薄くなります。最終的な色味は施術直後の30〜40%程度に落ち着くため、施術直後の濃さで判断しないことが重要です。',
  },
  {
    q: 'かさぶたが剥がれた後、色がまだらに見えるのは失敗ですか？',
    a: '失敗ではありません。かさぶたの剥がれ方には個人差があり、部分的に剥がれることでまだら模様に見えることがあります。全てのかさぶたが剥がれ、1ヶ月程度経過すると色が均一に馴染んできます。それでもまだらが気になる場合は、2回目の施術（リタッチ）で修正可能です。',
  },
  {
    q: 'ダウンタイム中にどうしてもメイクしたい場合はどうすれば良い？',
    a: '施術部位以外のメイクは当日から可能です。施術部位のメイクは、かさぶたが完全に剥がれた後（約1〜2週間後）から可能になります。どうしても外出が必要な場合は、帽子や前髪で眉を隠す、マスクでリップを隠すなどの対策がおすすめです。',
  },
  {
    q: 'アートメイク後に温泉やプールに入れるのはいつからですか？',
    a: 'かさぶたが完全に剥がれた後、施術から約2週間後を目安に入れるようになります。温泉の成分やプールの塩素は色素の定着に影響を与える可能性があるため、施術後2週間以内は避けてください。サウナも同様に2週間は控えましょう。',
  },
  {
    q: '2回目の施術（リタッチ）はいつ受けるのが最適ですか？',
    a: '1回目の施術から1〜3ヶ月後が最適です。メディカルブロー（95点）では1.5ヶ月〜、クレアージュ東京（92点）では1ヶ月〜のリタッチを推奨しています。早すぎると肌への負担が大きく、遅すぎると色素が薄くなりすぎて2回目の効果が出にくくなります。',
  },
  {
    q: '経過中に左右差が出てきた場合、修正できますか？',
    a: 'はい、2回目の施術（リタッチ）で修正可能です。1回目の施術後は左右で色の定着に差が出ることがあり、これは肌質や筋肉の動きの違いによるものです。1ヶ月程度経過して色が安定してから、左右のバランスを見て2回目で調整するのが一般的な方法です。',
  },
]

export default function ProgressPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: '経過レポート' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">PROGRESS REPORT</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイクの経過を徹底解説<br className="md:hidden" />施術当日〜1年後まで</h1>
            <p className="text-[#6B6560] leading-relaxed">
              「施術後どうなるの？」「いつ完成するの？」という不安を解消。<br />
              眉毛アートメイクの経過を時系列で詳しく解説します。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>施術当日〜1年後までの見た目の変化</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>各段階で気をつけるべきこと・やってはいけないこと</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>ダウンタイム中の正しいケア方法</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>部位別（眉・リップ・アイライン）の経過の違い</li>
            </ul>
          </div>

          {/* 経過タイムライン */}
          <h2 className="text-2xl font-bold mb-8 text-center">眉毛アートメイクの経過タイムライン</h2>
          <div className="space-y-6">
            {timelineStages.map((stage, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                  {stage.period}
                </h3>
                <div className="space-y-3">
                  <div className="bg-[var(--blush)] rounded-xl p-4">
                    <p className="text-sm"><strong className="text-[var(--gold)]">見た目の変化：</strong>{stage.appearance}</p>
                  </div>
                  <div className="bg-[#F0FAF0] rounded-xl p-4">
                    <p className="text-sm"><strong className="text-green-700">ケア方法：</strong>{stage.care}</p>
                  </div>
                  <div className="bg-[#FFF0F0] rounded-xl p-4">
                    <p className="text-sm"><strong className="text-red-400">NG行動：</strong>{stage.ng}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 色の変化まとめ */}
          <div className="mt-12 glass-card rounded-3xl p-6 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">色の濃さの変化まとめ</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--blush)]">
                    <th className="p-3 text-left font-bold">時期</th>
                    <th className="p-3 text-center font-bold">濃さの目安</th>
                    <th className="p-3 text-center font-bold">状態</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--pink-beige)]">
                    <td className="p-3">施術当日〜翌日</td>
                    <td className="p-3 text-center font-bold text-[var(--gold)]">100%</td>
                    <td className="p-3 text-center">最も濃い</td>
                  </tr>
                  <tr className="border-b border-[var(--pink-beige)]">
                    <td className="p-3">3日目〜1週間</td>
                    <td className="p-3 text-center font-bold text-[var(--gold)]">50〜60%</td>
                    <td className="p-3 text-center">かさぶた期間</td>
                  </tr>
                  <tr className="border-b border-[var(--pink-beige)]">
                    <td className="p-3">2週間後</td>
                    <td className="p-3 text-center font-bold text-[var(--gold)]">40〜50%</td>
                    <td className="p-3 text-center">色が落ち着く</td>
                  </tr>
                  <tr className="border-b border-[var(--pink-beige)]">
                    <td className="p-3">1ヶ月後</td>
                    <td className="p-3 text-center font-bold text-[var(--gold)]">30〜40%</td>
                    <td className="p-3 text-center">ほぼ完成</td>
                  </tr>
                  <tr className="border-b border-[var(--pink-beige)]">
                    <td className="p-3">3ヶ月後</td>
                    <td className="p-3 text-center font-bold text-[var(--gold)]">30〜40%</td>
                    <td className="p-3 text-center">完全定着</td>
                  </tr>
                  <tr>
                    <td className="p-3">1年後</td>
                    <td className="p-3 text-center font-bold text-[var(--gold)]">30〜50%</td>
                    <td className="p-3 text-center">自然退色開始</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 部位別の経過の違い */}
          <h2 className="text-2xl font-bold mt-16 mb-8 text-center">部位別の経過の違い</h2>
          <div className="space-y-6">
            {partDifferences.map((part, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <span className="badge-gold px-3 py-1 rounded-full text-sm">{part.part}</span>
                  <span className="text-sm text-[#8B8580]">{part.painLevel}</span>
                </h3>
                <div className="space-y-3">
                  <div className="bg-[var(--blush)] rounded-xl p-4">
                    <p className="text-sm"><strong className="text-[var(--gold)]">経過の目安：</strong>{part.timeline}</p>
                  </div>
                  <p className="text-sm text-[#6B6560]">{part.features}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ダウンタイム中のケアまとめ */}
          <div className="mt-12 glass-card rounded-3xl p-8 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-6 text-[var(--gold)]">ダウンタイム中のケア完全ガイド</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3 text-green-700">やるべきこと</h3>
                <ul className="space-y-2 text-sm text-[#6B6560]">
                  <li className="flex items-start gap-2"><span className="text-green-600">○</span>ワセリンで施術部位を保湿（1日3〜5回）</li>
                  <li className="flex items-start gap-2"><span className="text-green-600">○</span>清潔な手で優しくケア</li>
                  <li className="flex items-start gap-2"><span className="text-green-600">○</span>枕カバーを毎日交換</li>
                  <li className="flex items-start gap-2"><span className="text-green-600">○</span>日焼け止めの使用（2週間後から）</li>
                  <li className="flex items-start gap-2"><span className="text-green-600">○</span>十分な睡眠で回復を促進</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3 text-red-400">やってはいけないこと</h3>
                <ul className="space-y-2 text-sm text-[#6B6560]">
                  <li className="flex items-start gap-2"><span className="text-red-400">×</span>かさぶたを無理に剥がす</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">×</span>施術部位を触る・こする</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">×</span>サウナ・温泉・プール（2週間以内）</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">×</span>激しい運動・飲酒（1週間以内）</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">×</span>施術部位へのメイク（2週間以内）</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-16 mb-8 text-center">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card rounded-xl border border-[var(--pink-beige)] group">
                <summary className="px-6 py-5 cursor-pointer font-semibold hover:bg-[var(--blush)] transition-colors rounded-xl text-[var(--foreground)] list-none flex items-center justify-between">
                  <span>Q{i + 1}. {faq.q}</span>
                  <span className="text-[var(--gold)] ml-4 flex-shrink-0 transition-transform group-open:rotate-45 text-xl">+</span>
                </summary>
                <div className="px-6 py-5 border-t border-[var(--pink-beige)] text-[#6B6560] leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 glass-card rounded-3xl p-8 border border-[var(--gold-light)] text-center">
            <h2 className="text-xl font-bold mb-4">経過が不安ならカウンセリングで確認</h2>
            <p className="text-[#6B6560] mb-6">施術後の経過やダウンタイムについて、事前に詳しく説明してくれるクリニックを選びましょう。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/knowledge/pain" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">痛みはどれくらい？</p>
                <p className="text-xs text-[#8B8580] mt-1">部位別の痛みレベルを解説</p>
              </Link>
              <Link href="/knowledge/duration" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">持続期間は？</p>
                <p className="text-xs text-[#8B8580] mt-1">何年持つか徹底解説</p>
              </Link>
              <Link href="/purpose/first-time" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">初めてのアートメイク</p>
                <p className="text-xs text-[#8B8580] mt-1">初心者向け完全ガイド</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
