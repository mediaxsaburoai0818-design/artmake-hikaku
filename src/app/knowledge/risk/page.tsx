import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'アートメイクはやめたほうがいい？後悔・失敗しないための完全ガイド【2026年最新】',
  description: 'アートメイクはやめたほうがいい？後悔・失敗の実例と対策を徹底解説。デメリット7つの真実、失敗事例5選、後悔しないための5つのポイントを紹介。やめたほうがいい人・おすすめな人の特徴も。',
  keywords: 'アートメイク やめたほうがいい,アートメイク 後悔,アートメイク 失敗,アートメイク デメリット',
  openGraph: {
    title: 'アートメイクはやめたほうがいい？後悔・失敗しないための完全ガイド',
    description: 'アートメイクのデメリット・失敗事例・後悔しないためのポイントを徹底解説。',
    type: 'article',
  },
}

const reasons = [
  {
    title: '簡単には消えない',
    myth: 'アートメイクは一度入れたら一生消えない。タトゥーと同じで取り返しがつかない。',
    fact: 'アートメイクは表皮（0.02〜0.03mm）に色素を入れるため、1〜3年で徐々に薄くなります。タトゥーは真皮（0.3mm以上）に入れるため半永久的ですが、アートメイクとは根本的に異なります。万が一デザインが気に入らない場合もレーザー除去や色修正で対応可能です。',
  },
  {
    title: '施術が痛い',
    myth: '針を使うから激痛。痛みに耐えられないという口コミも多い。',
    fact: '施術前に麻酔クリームを塗布するため、強い痛みを感じる方は少数です。多くの方が「毛抜きで眉毛を抜く程度」と感じています。痛みに弱い方は事前にカウンセリングで相談すれば、麻酔の追加対応をしてくれるクリニックもあります。',
  },
  {
    title: '費用が高い',
    myth: '10万円以上かかる高額施術。気軽にできる金額ではない。',
    fact: '眉毛アートメイクの相場は2回で5〜15万円ですが、モニター価格なら1回28,000円〜のクリニックもあります。毎日のメイク時間（1日10分 x 365日 = 約60時間/年）やアイブロウコスメ代を考えると、2〜3年持つアートメイクはコスパが良い選択肢です。',
  },
  {
    title: 'デザインが不自然になる',
    myth: '眉毛が「描きました感」丸出しで不自然。いかにもアートメイクとバレる。',
    fact: '最新の4Dや7Dストローク技術では、毛並みを1本1本再現し、すっぴんでも自然な仕上がりが可能です。「不自然」になるのは技術力の低い施術者に当たった場合。症例写真の確認とアーティスト選びが重要です。',
  },
  {
    title: '色が変色する',
    myth: '時間が経つと青や赤に変色して見た目が悪くなる。',
    fact: '以前のアートメイクでは変色リスクがありましたが、現在は高品質な色素が使用されており、変色リスクは大幅に低減しています。ただし、紫外線や肌質により多少の色味変化はあるため、定期的なリタッチで美しい状態を維持できます。',
  },
  {
    title: 'MRI検査が受けられなくなる',
    myth: 'アートメイクをするとMRI検査を受けられなくなり、健康診断に支障が出る。',
    fact: '現在使用されている色素は微量の金属成分のため、MRI検査は基本的に受けられます。事前に「アートメイクをしている」と医療機関に伝えれば対応してもらえます。日本の大手クリニックではMRI対応の色素を使用しています。',
  },
  {
    title: '感染症のリスクがある',
    myth: '針を使うので感染症にかかる危険がある。衛生面が心配。',
    fact: 'アートメイクは医療行為であり、医師または看護師資格を持つ施術者が対応します。医療機関では滅菌・消毒が徹底されており、使い捨て針を使用するため感染リスクは極めて低いです。ただし、無資格の違法サロンでは危険があるため、必ず医療機関を選びましょう。',
  },
]

const failureCases = [
  {
    title: '左右非対称になった',
    description: '眉毛の高さや太さが左右で異なり、バランスが悪い仕上がりに。原因は施術者のデザイン力不足やカウンセリング不足。',
    prevention: 'カウンセリングでデザインを細かく確認し、左右のバランスを鏡で何度も確認してから施術に入るクリニックを選ぶ。',
  },
  {
    title: '色が濃すぎた',
    description: '施術直後に想像以上に濃い仕上がりになり、外出できないほどの状態に。「海苔を貼ったよう」という口コミも。',
    prevention: '施術直後は通常より濃く見えるのが正常。2週間で30〜50%薄くなります。事前にこの説明があるクリニックは信頼できる。',
  },
  {
    title: '色が変色してしまった',
    description: '半年〜1年後にグレーや赤みがかった色に変色。特に安価な色素を使用しているクリニックで起きやすい。',
    prevention: 'FDA認可の高品質色素を使用しているか事前に確認。リタッチで色味を調整できるので、定期メンテナンスを前提にする。',
  },
  {
    title: 'デザインが自分に合わなかった',
    description: 'トレンド眉にしたが自分の顔立ちに合わず、違和感が取れない。流行が変わって古く見えるようになった。',
    prevention: 'トレンドに左右されない「黄金比」に基づいたデザインを提案してくれるクリニックを選ぶ。骨格や顔のパーツに合わせた提案力が重要。',
  },
  {
    title: 'アフターケア不足でかさぶたが悪化',
    description: '施術後のケアを怠り、かさぶたを無理に剥がしてしまい色素が定着しなかった。部分的にムラになった。',
    prevention: 'アフターケアの説明が丁寧なクリニックを選ぶ。施術後1週間は患部を清潔に保ち、保湿ケアを徹底する。',
  },
]

const preventionPoints = [
  {
    num: 1,
    title: '医療機関であることを必ず確認する',
    description: 'アートメイクは医療行為です。医師常駐・看護師資格を持つ施術者がいるクリニックを選びましょう。エステサロンやネイルサロンでの施術は違法であり、感染症や施術事故のリスクがあります。',
  },
  {
    num: 2,
    title: '症例写真を徹底的にチェックする',
    description: '「施術直後」だけでなく「2週間後」「1ヶ月後」の症例写真を確認しましょう。施術直後は濃く見えるため、定着後の仕上がりが実力を反映します。SNSや公式サイトで多数の症例を公開しているクリニックは信頼度が高いです。',
  },
  {
    num: 3,
    title: 'カウンセリングの質で判断する',
    description: '無料カウンセリングを2〜3院受けて比較するのがおすすめです。デザインの提案力、質問への回答の丁寧さ、施術のリスク説明の有無をチェック。急かすクリニックは避け、じっくり相談に乗ってくれるクリニックを選びましょう。',
  },
  {
    num: 4,
    title: '料金の総額を事前に確認する',
    description: '施術料金だけでなく、指名料・麻酔代・リタッチ料金・カウンセリング料を含めた総額を確認しましょう。「2回セット」の料金設定が一般的ですが、追加費用が発生しないか事前に明確にしておくことが重要です。',
  },
  {
    num: 5,
    title: 'アフターケア体制を確認する',
    description: '施術後のトラブル対応、リタッチの保証期間、色修正の対応可否を事前に確認しましょう。アフターケアが充実しているクリニックは、万が一の場合にも安心です。保証期間内の無料リタッチがあるかも重要なポイントです。',
  },
]

const faqs = [
  {
    q: 'アートメイクで後悔する人の割合はどのくらいですか？',
    a: '適切なクリニックを選んだ場合、後悔する方は全体の5〜10%程度と言われています。後悔の多くはクリニック選びの失敗やカウンセリング不足が原因です。症例数が多く、カウンセリングが丁寧なクリニックを選ぶことで、後悔のリスクを大幅に減らせます。',
  },
  {
    q: 'アートメイクの失敗はどのくらいの期間で消えますか？',
    a: 'アートメイクは1〜3年で徐々に薄くなるため、失敗した場合も時間の経過とともに目立たなくなります。ただし完全に消えるまでには個人差があり、早く対処したい場合はレーザー除去（1回15,000〜50,000円程度）や色修正での対応が可能です。',
  },
  {
    q: 'アートメイクのデメリットを上回るメリットは何ですか？',
    a: '毎朝のメイク時間の短縮（年間約60時間）、すっぴんへの自信、汗や水で落ちない、左右対称の美しい眉が手に入るなどのメリットがあります。特に眉毛が薄い方、毎日のメイクに時間がかかる方、スポーツをする方には大きなメリットです。',
  },
  {
    q: 'アートメイクの痛みはどのくらいですか？',
    a: '麻酔クリームを使用するため、多くの方が「毛抜きで眉毛を抜く程度」「チクチクする程度」と感じています。痛みの感じ方には個人差がありますが、施術中に耐えられないほどの痛みを感じることは稀です。痛みに弱い方は事前に相談すれば対応してもらえます。',
  },
  {
    q: 'アートメイク後にMRI検査は本当に受けられますか？',
    a: 'はい、基本的に受けられます。現在の大手クリニックではMRI対応の色素を使用しています。検査時に「アートメイクをしている」と申告すれば、医療機関側で適切に対応してもらえます。念のため、施術前にクリニックでMRI対応の色素を使用しているか確認しましょう。',
  },
  {
    q: '安いクリニックを選んでも大丈夫ですか？',
    a: '料金が安いこと自体は問題ありませんが、安さだけで選ぶのは危険です。モニター価格やキャンペーンで安くなっている場合は問題ありませんが、相場（2回5〜15万円）を大幅に下回る場合は、技術力や使用する色素の質に不安があります。料金・技術力・症例数のバランスで判断しましょう。',
  },
]

export default function RiskPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3">2026年最新 完全ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイクはやめたほうがいい？<br />後悔・失敗しないための完全ガイド
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            「アートメイクはやめたほうがいい」「後悔した」という声の真実を徹底調査。<br className="hidden md:block" />
            デメリット・失敗事例・後悔しないためのポイントをすべて解説します。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#reasons" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">やめたほうがいい理由を見る</a>
            <a href="#prevention" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">後悔しないポイント</a>
          </div>
        </div>
      </section>

      {/* 結論セクション */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold">結論</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">正しく選べば後悔しない</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              「アートメイクはやめたほうがいい」という声の多くは、<strong className="text-rose-600">クリニック選びの失敗</strong>が原因です。
              技術力の高い医療機関で、十分なカウンセリングを受けて施術すれば、後悔するリスクは大幅に下がります。
              重要なのは「アートメイクをするかどうか」ではなく、<strong className="text-rose-600">「どのクリニックで受けるか」</strong>です。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">90%以上</div>
                <div className="text-sm text-gray-600">適切なクリニック選びで<br />満足している方の割合</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">1〜3年</div>
                <div className="text-sm text-gray-600">持続期間<br />永久ではないので安心</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">対処可能</div>
                <div className="text-sm text-gray-600">万が一の失敗も<br />レーザー除去・色修正で対応</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* やめたほうがいいと言われる7つの理由 */}
      <section className="py-16 px-4 bg-gray-50" id="reasons">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">「やめたほうがいい」と言われる7つの理由</h2>
          <p className="text-center text-gray-600 mb-12">よく聞く不安の声と、事実に基づく反論を解説します</p>
          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-rose-500 text-white px-6 py-3 flex items-center gap-3">
                  <span className="bg-white text-rose-500 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                  <h3 className="font-bold text-lg">{reason.title}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-red-500 font-bold text-sm">よくある不安</span>
                    </div>
                    <p className="text-gray-700 text-sm">{reason.myth}</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-green-600 font-bold text-sm">事実</span>
                    </div>
                    <p className="text-gray-700 text-sm">{reason.fact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 実際の失敗事例5つ */}
      <section className="py-16 px-4 bg-white" id="failures">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">実際にあった失敗事例5選</h2>
          <p className="text-center text-gray-600 mb-12">よくある失敗パターンと、その予防策を紹介します</p>
          <div className="space-y-6">
            {failureCases.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-rose-100 text-rose-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <div className="ml-0 md:ml-13 space-y-3">
                  <div>
                    <span className="text-red-500 text-sm font-semibold">失敗の内容</span>
                    <p className="text-gray-700 text-sm mt-1">{item.description}</p>
                  </div>
                  <div className="bg-rose-50 rounded-lg p-4">
                    <span className="text-rose-600 text-sm font-semibold">予防策</span>
                    <p className="text-gray-700 text-sm mt-1">{item.prevention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 後悔しないための5つのポイント */}
      <section className="py-16 px-4 bg-gradient-to-b from-rose-50 to-pink-50" id="prevention">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">後悔しないための5つのポイント</h2>
          <p className="text-center text-gray-600 mb-12">これを押さえればアートメイクで失敗しません</p>
          <div className="space-y-6">
            {preventionPoints.map((point) => (
              <div key={point.num} className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="bg-rose-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {point.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* やめたほうがいい人 vs おすすめな人 */}
      <section className="py-16 px-4 bg-white" id="comparison">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">やめたほうがいい人 vs おすすめな人</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-red-600 mb-6 text-center">やめたほうがいい人</h3>
              <ul className="space-y-4">
                {[
                  '頻繁に眉のトレンドを変えたい人',
                  '施術前のカウンセリングを面倒に感じる人',
                  'ケロイド体質で傷跡が残りやすい人',
                  '妊娠中・授乳中の方',
                  '金属アレルギーが重度の方',
                  '料金の安さだけでクリニックを選ぶ人',
                  '施術後のアフターケアを守れない人',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">&#x2715;</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-green-600 mb-6 text-center">おすすめな人</h3>
              <ul className="space-y-4">
                {[
                  '毎朝の眉メイクに時間がかかる人',
                  'すっぴんに自信を持ちたい人',
                  '眉毛が薄い・まばらで悩んでいる人',
                  'スポーツや汗でメイクが落ちやすい人',
                  '左右対称の眉を手に入れたい人',
                  'メイク技術に自信がない人',
                  '40代以上で眉毛が薄くなってきた人',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 万が一失敗した場合の対処法 */}
      <section className="py-16 px-4 bg-gray-50" id="remedy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">万が一失敗した場合の対処法</h2>
          <p className="text-center text-gray-600 mb-12">失敗しても対処法はあります。焦らず適切に対応しましょう</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="bg-rose-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-rose-500 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-center mb-3">レーザー除去</h3>
              <p className="text-sm text-gray-600 mb-4">レーザーで色素を分解し除去する方法。1〜5回の施術が必要で、1回あたり15,000〜50,000円が相場。完全な除去には時間がかかりますが、確実に薄くできます。</p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500"><strong>費用目安：</strong>1回 15,000〜50,000円</p>
                <p className="text-xs text-gray-500"><strong>回数目安：</strong>1〜5回</p>
                <p className="text-xs text-gray-500"><strong>期間目安：</strong>3ヶ月〜1年</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="bg-rose-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-rose-500 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-center mb-3">色修正（カモフラージュ）</h3>
              <p className="text-sm text-gray-600 mb-4">変色や色ムラを修正するために、上から別の色素を重ねる方法。レーザーより手軽で、デザインを微調整しながら修正できるのがメリットです。</p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500"><strong>費用目安：</strong>20,000〜60,000円</p>
                <p className="text-xs text-gray-500"><strong>回数目安：</strong>1〜2回</p>
                <p className="text-xs text-gray-500"><strong>期間目安：</strong>1〜3ヶ月</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="bg-rose-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-rose-500 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-center mb-3">リタッチ（修正施術）</h3>
              <p className="text-sm text-gray-600 mb-4">色が薄くなった部分やデザインの微調整を行うリタッチ施術。多くのクリニックでは保証期間内のリタッチに対応しており、追加費用が抑えられます。</p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500"><strong>費用目安：</strong>20,000〜50,000円</p>
                <p className="text-xs text-gray-500"><strong>回数目安：</strong>1回</p>
                <p className="text-xs text-gray-500"><strong>期間目安：</strong>施術後1ヶ月以降</p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-rose-50 border border-rose-200 rounded-xl p-6 text-center">
            <p className="text-gray-700">
              <strong className="text-rose-600">重要：</strong>
              失敗の修正は、施術を受けたクリニック以外でも対応可能です。<br />
              セカンドオピニオンとして別のクリニックに相談することもおすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">よくある質問（FAQ）</h2>
          <p className="text-center text-gray-600 mb-12">アートメイクのデメリット・後悔に関する疑問にお答えします</p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 rounded-xl shadow-sm group">
                <summary className="px-6 py-5 cursor-pointer font-semibold hover:bg-gray-100 transition-colors rounded-xl flex items-center justify-between">
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

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">後悔しないアートメイクは<br />クリニック選びで決まる</h2>
          <p className="text-xl mb-4 opacity-90">
            技術力・症例数・カウンセリングの質で厳選した<br className="hidden md:block" />
            おすすめクリニックをランキングで比較できます。
          </p>
          <p className="mb-8 opacity-80">まずは無料カウンセリングで相談してみましょう</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/" className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              おすすめクリニックランキングを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </main>
  )
}
