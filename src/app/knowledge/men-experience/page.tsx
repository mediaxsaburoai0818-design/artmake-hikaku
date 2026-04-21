import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'メンズアートメイク体験談｜実際にやってみた男性のリアルな声 | アートメイク比較ナビ',
  description: 'メンズアートメイクの体験談を営業職30代・IT40代・経営者50代の3パターンで紹介。施術の流れ、ビフォーアフターの感想、男性特有の注意点をリアルに解説。',
  keywords: 'メンズアートメイク 体験談,男 アートメイク,メンズ アートメイク 口コミ,男性 眉毛アートメイク 体験',
  openGraph: {
    title: 'メンズアートメイク体験談｜実際にやってみた男性のリアルな声',
    description: '3名の男性のリアルな体験談。施術の流れと感想を詳しく紹介。',
    type: 'article',
  },
}

const experiences = [
  {
    name: 'Aさん（30代・営業職）',
    profile: '大手メーカー営業。商談が多く第一印象を重視。眉毛が薄く左右非対称が悩み。',
    motivation: '商談で自信を持ちたかった。毎朝眉を描くのが面倒で、汗で落ちるのも気になっていた。同僚の女性がアートメイクで眉が変わったのを見て興味を持った。',
    clinic: '大手クリニックで6Dストローク（毛並み）を選択。2回セットで約8万円。',
    flow: [
      { step: 'カウンセリング（約30分）', detail: '骨格分析をしてもらい、直線的でシャープな眉のデザインを提案された。男性スタッフが対応してくれて話しやすかった。' },
      { step: '麻酔（約20分）', detail: 'クリーム麻酔を塗布。待ち時間はスマホを触って過ごした。' },
      { step: '施術（約1.5時間）', detail: '毛抜きで抜く程度のチクチク感。途中で麻酔を追加してもらった。思ったほど痛くなかった。' },
      { step: '仕上がり確認', detail: '鏡を見て「おお、整った」と感動。やや濃いが1週間で落ち着くと説明された。' },
    ],
    afterThought: '翌日から出社。「なんか雰囲気変わった？」と言われたが、アートメイクだとは気づかれなかった。1週間でかさぶたが取れ、自然な仕上がりに。2回目の施術後は完璧な左右対称の眉になり、商談にも自信が持てるようになった。',
    rating: 5,
    advice: '男性スタッフがいるクリニックを選ぶと安心。施術後2〜3日は眉が濃く見えるので、木曜か金曜の施術がおすすめ。',
  },
  {
    name: 'Bさん（40代・ITエンジニア）',
    profile: 'リモートワーク中心。Web会議が多く画面映りが気になっていた。眉毛がまばらで老けて見えるのが悩み。',
    motivation: 'Web会議で自分の顔を見るたびに、眉毛のまばらさが気になっていた。妻にアートメイクを勧められて決意。美容院以外の施術は初めてで緊張した。',
    clinic: '自然な仕上がりに定評のあるクリニックでパウダー+ストロークのコンビネーション技法を選択。2回セットで約10万円。',
    flow: [
      { step: 'カウンセリング（約40分）', detail: '顔全体のバランスを見ながらデザイン。「自然さ重視」と伝えたところ、パウダーとストロークの組み合わせを提案された。' },
      { step: '麻酔（約25分）', detail: 'クリーム麻酔。痛みに弱いと伝えたので長めに時間を取ってくれた。' },
      { step: '施術（約2時間）', detail: '最初はチクチクしたが、途中から慣れてウトウトした。男性の施術に慣れたアーティストで安心感があった。' },
      { step: '仕上がり確認', detail: '「やりすぎない自然さ」がまさに理想通り。まばらだった部分が埋まり、若返った印象に。' },
    ],
    afterThought: 'ダウンタイムは思ったより軽く、翌日のWeb会議も問題なし。同僚には「なんか若返った？」と言われた。2回目の施術で色の定着が安定し、毎朝の身支度が5分短縮。妻にも「やって良かったね」と言われて満足。',
    rating: 4,
    advice: 'パウダーとストロークの組み合わせだと、まばらな眉でも自然に仕上がる。Web会議が多い方には特におすすめ。',
  },
  {
    name: 'Cさん（50代・経営者）',
    profile: '中小企業の社長。人前に出る機会が多い。加齢で眉毛が薄くなり、頼りない印象になるのを気にしていた。',
    motivation: '取引先との会食やプレゼンで「目力がない」と感じることが増えた。知人の経営者がアートメイクで印象が変わったと聞き、興味を持った。年齢的にも自然さが重要だった。',
    clinic: 'オーダーメイドデザインに定評のある完全個室クリニックを選択。2回セットで約12万円。',
    flow: [
      { step: 'カウンセリング（約45分）', detail: '完全個室で丁寧なヒアリング。年齢に合った上品な眉のデザインを複数提案してもらい、鏡を見ながら選択。' },
      { step: '麻酔（約30分）', detail: 'クリーム麻酔を十分な時間置いてくれた。50代の肌への配慮を感じた。' },
      { step: '施術（約2時間）', detail: '痛みはほぼ感じなかった。施術中もデザインの微調整をしてくれる丁寧さが良かった。' },
      { step: '仕上がり確認', detail: '「やりすぎていない、品のある眉」に感動。社長として恥ずかしくない仕上がりに満足。' },
    ],
    afterThought: '施術翌日は少し赤みがあったが、3日目にはほぼ分からなくなった。社員には「お休みでリフレッシュされました？」と言われた程度。2回目の施術後は完全に自然で、名刺交換の際の印象が確実に変わった実感がある。投資対効果は非常に高い。',
    rating: 5,
    advice: '50代以上は完全個室のクリニックが安心。加齢による皮膚の変化を理解したアーティストを選ぶことが大切。デザインは「控えめ」が正解。',
  },
]

const mensNotes = [
  {
    title: '男性の肌は女性より厚い',
    description: '男性の皮膚は女性より約20%厚いとされています。そのため色素の定着に差が出ることがあり、2回目の施術で調整が必要になるケースもあります。経験豊富なアーティストに任せましょう。',
  },
  {
    title: '毛量が多い場合のデザイン',
    description: '男性は眉毛の毛量が多い方も多く、自毛とアートメイクのバランスが重要です。毛流れに沿ったストロークで自毛に馴染ませるデザインが自然に仕上がります。',
  },
  {
    title: '施術後のヒゲ剃りに注意',
    description: '眉付近のヒゲ剃りや産毛処理は、施術後2週間は控えてください。かさぶたが取れるまでは施術部位に刃物を近づけないようにしましょう。',
  },
  {
    title: '汗をかくスポーツは1週間控える',
    description: 'ジムやランニングなど発汗を伴うスポーツは、施術後1週間は控えましょう。汗が色素の定着を妨げ、仕上がりにムラが出る原因になります。',
  },
]

const faqs = [
  {
    q: '男性のアートメイクは女性と施術内容が違いますか？',
    a: '基本的な施術方法は同じですが、デザインのアプローチが異なります。男性は直線的でシャープなライン、太めの仕上がり、ダークブラウン〜ブラック系の色味が基本です。また、男性の骨格・筋肉・毛流れに合わせたデザインが必要なため、メンズ施術の経験が豊富なアーティストを選ぶことが重要です。',
  },
  {
    q: '施術したことが取引先にバレませんか？',
    a: '自然なデザインで施術すれば、アートメイクだと気づかれることはほぼありません。体験者の多くが「雰囲気が変わった」「若返った」と言われる程度で、施術を受けたとは思われなかったと報告しています。施術直後2〜3日は色が濃く見えるため、週末前の施術がおすすめです。',
  },
  {
    q: '男性がクリニックに行くのは恥ずかしくないですか？',
    a: '全く恥ずかしくありません。メンズアートメイクの需要は年々増加しており、男性の来院率が2〜3割を占めるクリニックも珍しくありません。男性スタッフが在籍するクリニックや完全個室のクリニックを選べば、より安心して施術を受けられます。',
  },
  {
    q: '2回目の施術は必ず必要ですか？',
    a: '強く推奨されます。1回目の施術では色素の定着率が50〜70%程度のことが多く、2回目で色ムラや薄い部分を補正して完成度を高めます。特に男性は皮膚が厚いため、2回施術でしっかり定着させることが重要です。',
  },
  {
    q: '施術後どのくらいで完成しますか？',
    a: '1回目の施術後1〜2週間でかさぶたが取れ、色が落ち着きます。その後1〜3ヶ月空けて2回目の施術を行い、2回目から2週間後が最終的な完成です。トータルで約2〜4ヶ月で完成するスケジュールです。',
  },
  {
    q: '体験談の方々はどのクリニックで受けましたか？',
    a: '本記事の体験談はプライバシー保護のため、具体的なクリニック名は伏せています。メンズ対応のクリニック選びについては、当サイトのランキングページで料金・技術力・男性の施術実績を比較していますので、そちらをご参考ください。',
  },
]

export default function MenExperiencePage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "知識" }, { name: "メンズ体験談" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3">2026年最新 体験レポート</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            メンズアートメイク体験談<br />男性のリアルな声
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            「実際どうだった？」「バレない？」「痛くない？」<br className="hidden md:block" />
            3名の男性のリアルな体験談をお届けします。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#experiences" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">体験談を読む</a>
            <a href="#notes" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">男性の注意点</a>
          </div>
        </div>
      </section>

      {/* 結論 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold">体験者の声</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">3名全員が「やって良かった」</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              営業職30代・ITエンジニア40代・経営者50代の3名全員が<strong className="text-rose-600">「思ったより痛くない」「自然に仕上がった」「周囲にバレなかった」</strong>と回答。
              共通して<strong className="text-rose-600">第一印象の向上と朝の時短</strong>を実感しています。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">3/3名</div>
                <div className="text-sm text-gray-600">全員が満足<br />「やって良かった」</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">バレない</div>
                <div className="text-sm text-gray-600">自然な仕上がりで<br />周囲に気づかれない</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">8〜12万円</div>
                <div className="text-sm text-gray-600">2回セットの<br />相場感</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 体験談 */}
      <section className="py-16 px-4 bg-gray-50" id="experiences">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">3名の体験談</h2>
          <p className="text-center text-gray-600 mb-12">年代・職種が異なる3名のリアルな声をお届けします</p>
          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-rose-500 text-white px-6 py-4">
                  <h3 className="font-bold text-xl">{exp.name}</h3>
                  <p className="text-sm opacity-90 mt-1">{exp.profile}</p>
                </div>
                <div className="p-6 md:p-8 space-y-6">
                  {/* きっかけ */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs font-bold">きっかけ</span>
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{exp.motivation}</p>
                  </div>
                  {/* クリニック選び */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs font-bold">選んだ施術</span>
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{exp.clinic}</p>
                  </div>
                  {/* 施術の流れ */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs font-bold">施術の流れ</span>
                    </h4>
                    <div className="space-y-3">
                      {exp.flow.map((f, fi) => (
                        <div key={fi} className="flex gap-3 bg-gray-50 rounded-lg p-4">
                          <span className="bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{fi + 1}</span>
                          <div>
                            <p className="font-semibold text-gray-800 text-sm">{f.step}</p>
                            <p className="text-gray-600 text-sm mt-1">{f.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* 感想 */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs font-bold">施術後の感想</span>
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{exp.afterThought}</p>
                  </div>
                  {/* 満足度 */}
                  <div className="flex items-center gap-3 bg-rose-50 rounded-lg p-4">
                    <span className="text-sm font-semibold text-gray-700">満足度:</span>
                    <span className="text-rose-400">{'★'.repeat(exp.rating)}{'☆'.repeat(5 - exp.rating)}</span>
                    <span className="text-gray-500 text-sm">（{exp.rating}/5）</span>
                  </div>
                  {/* アドバイス */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-700"><strong>これから受ける方へのアドバイス：</strong>{exp.advice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 男性特有の注意点 */}
      <section className="py-16 px-4 bg-white" id="notes">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">男性特有の注意点</h2>
          <p className="text-center text-gray-600 mb-12">男性がアートメイクを受ける際に知っておくべきポイント</p>
          <div className="grid md:grid-cols-2 gap-6">
            {mensNotes.map((note, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-rose-100 text-rose-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                  <h3 className="font-bold text-gray-900">{note.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{note.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">よくある質問（FAQ）</h2>
          <p className="text-center text-gray-600 mb-12">メンズアートメイクに関する疑問にお答えします</p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl shadow-sm group">
                <summary className="px-6 py-5 cursor-pointer font-semibold hover:bg-gray-50 transition-colors rounded-xl flex items-center justify-between">
                  <span>Q{i + 1}. {faq.q}</span>
                  <span className="text-rose-400 group-open:rotate-180 transition-transform ml-4 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">{faq.a}</div>
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
            <Link href="/purpose/mens" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">目的別</span>
              <p className="font-semibold mt-1">メンズアートメイク完全ガイド</p>
            </Link>
            <Link href="/knowledge/pain" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">痛み・ダウンタイム完全ガイド</p>
            </Link>
            <Link href="/compare/price" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">比較</span>
              <p className="font-semibold mt-1">アートメイク料金比較</p>
            </Link>
            <Link href="/knowledge/aftercare" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アフターケア完全ガイド</p>
            </Link>
            <Link href="/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">ランキング</span>
              <p className="font-semibold mt-1">おすすめクリニックTOP5</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">清潔感のある眉で<br />自信をつけよう</h2>
          <p className="text-xl mb-4 opacity-90">
            メンズ対応クリニックを料金・技術力で比較。<br className="hidden md:block" />
            男性の施術実績が豊富なクリニックを厳選しました。
          </p>
          <p className="mb-8 opacity-80">まずは無料カウンセリングから始めましょう</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/" className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              おすすめクリニックランキングを見る
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </main>
  )
}
