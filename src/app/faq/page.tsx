import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'アートメイクよくある質問30選【2026年最新】全疑問を徹底解説',
  description: '【2026年最新】アートメイクのよくある質問30選を6カテゴリに分類して徹底回答。痛み・料金相場・持続期間・安全性・クリニック選びまで、初めてのアートメイクで気になる疑問をすべて解決します。',
  keywords: 'アートメイク よくある質問,アートメイク FAQ,アートメイク 疑問,アートメイク 痛み,アートメイク 料金,アートメイク 持続期間',
  openGraph: {
    title: 'アートメイクよくある質問30選【2026年最新】全疑問を徹底解説',
    description: 'アートメイクのよくある質問30選を6カテゴリに分類して徹底回答。痛み・料金・持続期間・安全性まで完全網羅。',
    type: 'article',
  },
}

const categories = [
  { id: 'basic', label: '基本知識', icon: '1', count: 'Q1〜Q5' },
  { id: 'procedure', label: '施術について', icon: '2', count: 'Q6〜Q10' },
  { id: 'maintenance', label: '持続・メンテナンス', icon: '3', count: 'Q11〜Q15' },
  { id: 'cost', label: '料金', icon: '4', count: 'Q16〜Q20' },
  { id: 'safety', label: '安全性', icon: '5', count: 'Q21〜Q25' },
  { id: 'clinic', label: 'クリニック選び', icon: '6', count: 'Q26〜Q30' },
]

const faqData: { categoryId: string; categoryTitle: string; faqs: { q: string; a: string }[] }[] = [
  {
    categoryId: 'basic',
    categoryTitle: '基本知識',
    faqs: [
      {
        q: 'アートメイクとは何ですか？',
        a: 'アートメイクとは、皮膚の浅い層（表皮）に専用の針で色素を注入し、眉・アイライン・リップなどに色をつける施術です。メイクをしなくても美しい状態を保てるため「落ちないメイク」とも呼ばれます。持続期間は1〜3年程度で、タトゥーのように永久に残ることはありません。近年は技術が大幅に進化し、7Dストロークなど毛並みを1本1本再現する技法により、すっぴんでも自然な仕上がりが可能になっています。',
      },
      {
        q: 'アートメイクとタトゥーの違いは何ですか？',
        a: 'アートメイクとタトゥーは「色素を入れる深さ」が根本的に異なります。アートメイクは表皮（0.02〜0.03mm）に色素を入れるため、肌のターンオーバーにより1〜3年で徐々に薄くなります。一方、タトゥーは真皮（0.3mm以上）に入れるため半永久的に残ります。また、アートメイクは医療行為として医療機関でのみ施術が許可されていますが、タトゥーは必ずしも医療機関で行われるわけではありません。使用する色素もアートメイク専用のものが使われ、安全性が考慮されています。',
      },
      {
        q: 'アートメイクは医療行為ですか？',
        a: 'はい、アートメイクは医療行為です。厚生労働省の通達により、針を使って皮膚に色素を注入する行為は医療行為と位置づけられています。そのため、医師の管理のもと、医師または看護師の資格を持つ施術者が行う必要があります。エステサロンやネイルサロンでのアートメイク施術は違法です。クリニックを選ぶ際は、医療機関であること、医師が常駐していることを必ず確認しましょう。',
      },
      {
        q: 'アートメイクは誰でも受けられますか？',
        a: '基本的に健康な成人であれば受けられますが、以下の方は施術を受けられない、または注意が必要です。妊娠中・授乳中の方、ケロイド体質の方、重度の金属アレルギーの方、皮膚疾患がある方、血液疾患のある方、免疫抑制剤を服用中の方などが該当します。持病がある方や服薬中の方は、事前にカウンセリングで相談し、医師の判断を仰ぎましょう。',
      },
      {
        q: 'アートメイクは何歳から受けられますか？',
        a: 'アートメイクは基本的に18歳以上から受けることができます。未成年（18歳未満）の場合は、多くのクリニックで保護者の同意書が必要となります。ただし、クリニックによっては16歳以上から対応している場合もあれば、20歳以上のみとしている場合もあります。年齢に上限はなく、60代・70代で眉毛アートメイクを受ける方も増えています。加齢で眉毛が薄くなった方にとって、毎日のメイクの負担を軽減できるメリットがあります。',
      },
    ],
  },
  {
    categoryId: 'procedure',
    categoryTitle: '施術について',
    faqs: [
      {
        q: 'アートメイクの施術は痛いですか？',
        a: '施術前に麻酔クリームを塗布するため、強い痛みを感じる方は少数です。多くの方が「毛抜きで眉毛を抜く程度」「チクチクする程度」と表現しています。部位別では、眉は比較的痛みが少なく、リップはやや痛みを感じやすい傾向があります。痛みの感じ方には個人差がありますが、施術中に耐えられないほどの痛みを感じることは稀です。痛みに弱い方は事前にカウンセリングで相談すれば、麻酔の追加や種類の変更で対応してもらえます。',
      },
      {
        q: 'アートメイクのダウンタイムはどのくらいですか？',
        a: 'ダウンタイムは部位により異なりますが、一般的に3日〜1週間程度です。眉の場合、施術直後は色が濃く見えますが、2〜3日でかさぶたが形成され、1週間程度で自然な色味に落ち着きます。リップは腫れが出やすく、2〜3日はマスクが必要な場合があります。アイラインは1〜3日程度の腫れが見られることがあります。ダウンタイム中は患部を清潔に保ち、こすったり触ったりしないことが大切です。',
      },
      {
        q: 'アートメイクの施術時間はどのくらいですか？',
        a: '施術時間は部位やクリニックにより異なりますが、目安は以下の通りです。眉毛は約1.5〜2.5時間（カウンセリング・デザイン込み）、アイラインは約1〜1.5時間、リップは約2〜3時間です。初回はカウンセリングやデザインの相談に時間がかかるため、やや長めになります。2回目以降の施術は、デザインの微調整のみで済むため、初回より30分〜1時間短くなることが多いです。',
      },
      {
        q: 'アートメイクは何回の施術が必要ですか？',
        a: '一般的に2〜3回の施術が推奨されています。1回目の施術では色素の定着率が30〜50%程度のため、2回目で色ムラを整え、理想の仕上がりに近づけます。クリニックによっては「2回セット」で料金を設定しているところが多いです。クレアージュのように3回に分けて自然に定着させる方式もあります。1回の施術で完成させるのではなく、複数回に分けて少しずつ仕上げていくのがアートメイクの基本です。',
      },
      {
        q: 'アートメイク施術後の注意点は何ですか？',
        a: '施術後1週間は以下の点に注意が必要です。施術部位を水で濡らさない（洗顔時はラップで保護）、かさぶたを無理に剥がさない、激しい運動やサウナ・プール・温泉を避ける、施術部位への化粧品の使用を控える、直射日光を避ける、処方されたワセリンや保湿剤をこまめに塗る。これらを守ることで色素の定着率が大きく変わります。特にかさぶたを無理に剥がすと色ムラの原因になるため注意しましょう。',
      },
    ],
  },
  {
    categoryId: 'maintenance',
    categoryTitle: '持続・メンテナンス',
    faqs: [
      {
        q: 'アートメイクは何年持ちますか？',
        a: 'アートメイクの持続期間は一般的に1〜3年です。ただし、個人の肌質・生活習慣・施術部位により大きく異なります。脂性肌の方やターンオーバーが早い方は退色が早い傾向があります。部位別では、眉は1〜2年、アイラインは2〜3年、リップは1〜1.5年が目安です。紫外線を多く浴びる方、ピーリングやレチノール配合の化粧品を使用する方は退色が早まることがあります。',
      },
      {
        q: 'リタッチ（メンテナンス）はどのくらいの頻度で必要ですか？',
        a: '一般的に1〜2年に1回のリタッチが推奨されています。完全に色が消えてからではなく、やや薄くなったと感じた時点でリタッチするのが理想的です。完全に消えてしまうと、再度2回コースが必要になり費用がかさみます。定期的にリタッチすることで、常に美しい状態を維持でき、1回あたりの施術費用も抑えられます。リタッチ料金は通常20,000〜50,000円程度です。',
      },
      {
        q: 'アートメイクは完全に消えますか？',
        a: 'アートメイクは時間の経過とともに徐々に薄くなりますが、完全に消えるかどうかは個人差があります。多くの場合、3〜5年でかなり薄くなりますが、うっすらと色が残ることもあります。完全に消したい場合はレーザー除去が可能で、1〜5回の施術で除去できます。ただし、レーザー除去にも費用（1回15,000〜50,000円）がかかるため、施術前にデザインを十分検討することが重要です。',
      },
      {
        q: 'アートメイクは変色しますか？',
        a: '以前のアートメイクでは変色リスクがありましたが、現在は高品質なFDA認可色素の使用により、変色リスクは大幅に低減しています。ただし、完全にゼロではありません。黒い色素は時間とともにグレーやブルーがかった色に変化する場合があり、赤系の色素は退色してオレンジっぽくなることがあります。変色を防ぐには、実績のあるクリニックで品質の良い色素を使用してもらうこと、紫外線対策をすること、定期的なリタッチが有効です。',
      },
      {
        q: 'アートメイクの除去方法にはどんなものがありますか？',
        a: '主な除去方法は3つあります。(1)レーザー除去：最も一般的な方法で、レーザーで色素を分解します。1〜5回の施術が必要で、費用は1回15,000〜50,000円。(2)除去液（リムーバー）：専用の薬剤で色素を浮かせて除去する方法。レーザーで対応しにくい色にも効果的ですが、ダウンタイムがやや長い。(3)色修正（カモフラージュ）：完全除去ではなく、肌色の色素で目立たなくする方法。いずれも医療機関での施術が必要です。除去を検討する場合は、除去実績の多いクリニックに相談しましょう。',
      },
    ],
  },
  {
    categoryId: 'cost',
    categoryTitle: '料金',
    faqs: [
      {
        q: 'アートメイクの料金相場はいくらですか？',
        a: '2026年現在のアートメイク料金相場は以下の通りです。眉毛（2回セット）：50,000〜150,000円、リップ（2回セット）：80,000〜200,000円、アイライン（2回セット）：40,000〜80,000円。クリニックやアーティストのランクによって料金は大きく異なります。モニター価格であれば眉毛1回28,000円〜、2回49,800円〜で受けられるクリニックもあります。料金だけでなく、技術力・症例数・アフターケアを総合的に判断することが重要です。',
      },
      {
        q: 'アートメイクに保険は適用されますか？',
        a: 'アートメイクは基本的に自由診療（保険適用外）です。美容目的の施術であるため、健康保険は適用されません。ただし、医療目的の場合は一部保険適用になるケースがあります。例えば、無毛症（脱毛症）による眉毛の消失、外傷や手術後の眉毛の欠損、乳がん手術後の乳輪再建などです。これらの場合は医師の診断書が必要になりますので、まずは医療機関に相談してみましょう。',
      },
      {
        q: 'アートメイクで追加費用はかかりますか？',
        a: '施術料金以外に発生する可能性のある費用は以下の通りです。指名料（5,000〜20,000円）：人気アーティストを指名する場合にかかります。麻酔代（0〜3,000円）：多くのクリニックでは施術料金に含まれていますが、追加麻酔は別料金の場合があります。カウンセリング料（0〜5,000円）：無料のクリニックが多いですが、有料の場合もあります。リタッチ料金（20,000〜50,000円）：2回セット終了後の追加施術。事前に総額を確認し、追加費用が発生しないか明確にしておきましょう。',
      },
      {
        q: 'アートメイクを安く受ける方法はありますか？',
        a: 'アートメイクを安く受ける方法はいくつかあります。(1)モニター価格を利用する：症例写真やSNS掲載を許可する代わりに、通常より30〜50%安く受けられます。メディカルブローでは1回28,000円〜。(2)キャンペーンを活用する：初回限定割引やペア割、学割を実施しているクリニックがあります。(3)新人アーティストを選ぶ：アーティストランク制のクリニックでは、ランクの低い施術者を選ぶと料金が安くなります。ただし、安さだけで選ぶのはリスクがあるため、症例写真を必ず確認しましょう。',
      },
      {
        q: '2回セットと都度払い、どちらがお得ですか？',
        a: '多くの場合、2回セットの方がお得です。アートメイクは2回の施術が基本であり、セット料金は都度払いの合計より10〜30%安く設定されているのが一般的です。例えば、都度払い1回50,000円のクリニックでもセット料金は2回で80,000円（1回あたり40,000円）になるケースがあります。ただし、1回で満足する可能性もあるため、初めてのクリニックで不安がある場合は都度払いで試してみるのも一つの手です。クレアージュのように3回セットを提供しているクリニックもあるので、自分に合ったプランを選びましょう。',
      },
    ],
  },
  {
    categoryId: 'safety',
    categoryTitle: '安全性',
    faqs: [
      {
        q: 'アートメイクをしてもMRI検査は受けられますか？',
        a: 'はい、基本的にMRI検査は受けられます。アートメイクの色素には微量の金属成分（酸化鉄など）が含まれていますが、現在の大手クリニックではMRI対応の色素を使用しています。MRI検査を受ける際は「アートメイクをしている」と事前に医療機関に申告してください。極めて稀にピリピリとした熱感を感じることがありますが、健康上の問題が生じるケースはほとんどありません。不安な方は施術前にクリニックで「MRI対応色素を使用しているか」を確認しましょう。',
      },
      {
        q: '妊娠中・授乳中でもアートメイクは受けられますか？',
        a: '妊娠中のアートメイクは基本的にNGです。その理由は、麻酔クリームに含まれるリドカインなどの成分が胎児に影響を与える可能性があること、ホルモンバランスの変化により色素の定着が不安定になること、施術による痛みやストレスが母体に影響する可能性があることです。授乳中については、クリニックにより判断が分かれます。施術可能とするクリニックもありますが、念のため授乳期間終了後の施術をおすすめします。妊活中の方は、妊娠前に施術を済ませておくと安心です。',
      },
      {
        q: 'アートメイクでアレルギー反応が出ることはありますか？',
        a: '極めて稀ですが、色素に含まれる成分にアレルギー反応が出る可能性はあります。特に金属アレルギー（ニッケル、コバルト、酸化鉄など）をお持ちの方は注意が必要です。信頼できるクリニックでは施術前にパッチテストを実施してくれます。パッチテストでは、腕の内側などに少量の色素を塗布し、24〜48時間後にアレルギー反応が出ないか確認します。金属アレルギーの自覚がある方は必ず事前にカウンセリングで申告し、パッチテストを受けましょう。',
      },
      {
        q: 'アートメイクで感染症になるリスクはありますか？',
        a: '適切な医療機関で施術を受ければ、感染症のリスクは極めて低いです。医療機関では滅菌・消毒が徹底されており、施術に使用する針はすべて使い捨て（ディスポーザブル）です。リスクが生じるのは、無資格者による違法施術（エステサロン等）や、衛生管理が不十分な施設で施術を受けた場合です。クリニック選びの際は、医療機関の認可を受けているか、施術室の衛生環境、使い捨て器具の使用について確認しましょう。施術後は医師の指示に従い、患部を清潔に保つことも重要です。',
      },
      {
        q: 'アートメイクに失敗したらどうすればいいですか？',
        a: '万が一アートメイクに失敗した場合も、対処法はあります。まず、施術直後は色が濃く見えるのが正常で、2週間程度で30〜50%薄くなります。2週間経過しても気になる場合は以下の対処法があります。(1)施術クリニックに相談：保証期間内であれば無料でリタッチ修正してもらえる場合があります。(2)レーザー除去：1回15,000〜50,000円で色素を分解できます。(3)色修正：別の色素を重ねてデザインを修正する方法。(4)セカンドオピニオン：別のクリニックに相談することも有効です。焦らず、まずは施術クリニックに相談することをおすすめします。',
      },
    ],
  },
  {
    categoryId: 'clinic',
    categoryTitle: 'クリニック選び',
    faqs: [
      {
        q: 'アートメイククリニックの選び方を教えてください。',
        a: 'アートメイククリニック選びで重要なポイントは5つあります。(1)医療機関であること：医師常駐・看護師資格保持者が施術することが必須。(2)症例数・実績：累計症例数が多いクリニックは技術力が安定しています。(3)カウンセリングの質：デザイン提案力、リスク説明の有無、質問への丁寧な対応をチェック。(4)料金の透明性：指名料・麻酔代・リタッチ料金を含めた総額を事前に確認。(5)アフターケア体制：施術後のトラブル対応、保証期間内の無料リタッチの有無。2〜3院の無料カウンセリングを受けて比較検討することをおすすめします。',
      },
      {
        q: 'アートメイクの指名料はいくらですか？',
        a: '指名料はクリニックやアーティストのランクにより異なりますが、一般的に5,000〜20,000円程度です。メディカルブローのようにアーティストランク制を採用しているクリニックでは、ランクが上がるほど施術料金自体が高くなる仕組みのため、別途の指名料はかからないケースもあります。クレアージュは指名料無料を明確に打ち出しています。指名料が気になる方は、指名料込みの総額で比較するか、指名料無料のクリニックを選ぶとよいでしょう。',
      },
      {
        q: 'カウンセリングだけ受けることはできますか？',
        a: 'はい、多くのクリニックで無料カウンセリングのみの受診が可能です。カウンセリングでは、希望のデザインの相談、自分に合った施術方法の提案、料金の説明、施術のリスクやダウンタイムの説明などを受けられます。当日に施術を決める必要はなく、複数のクリニックのカウンセリングを受けてから決めるのが賢い方法です。カウンセリング時にはデザインのシミュレーションを行ってくれるクリニックもあるので、仕上がりイメージを事前に確認できます。',
      },
      {
        q: '男性（メンズ）でもアートメイクは受けられますか？',
        a: 'はい、男性のアートメイクは近年急増しています。特に眉毛アートメイクの需要が高く、ビジネスシーンでの清潔感アップや、薄い眉毛のコンプレックス解消のために受ける男性が増えています。メディカルブローやデイジークリニックなど、メンズ対応のクリニックも多数あります。男性の場合は、太すぎず自然な毛並み感のあるデザインが人気です。料金は女性と同じ設定のクリニックがほとんどですが、男性専用メニューを用意しているクリニックもあります。',
      },
      {
        q: '結局、どのクリニックがおすすめですか？',
        a: '一人ひとりの優先事項（料金・技術力・通いやすさなど）によっておすすめは異なりますが、2026年現在の人気クリニックTOP3は以下の通りです。コスパと技術力の両立ならメディカルブロー（累計23万件超の実績、モニター1回28,000円〜）、自然な仕上がり重視ならクレアージュ（3回施術で自然に定着、指名料無料）、リーズナブルさ重視ならデイジークリニック（2回49,800円〜）。詳しい比較・ランキングは当サイトのトップページで詳しく解説しています。',
      },
    ],
  },
]

export default function FaqPage() {
  let questionNumber = 0

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3">2026年最新 完全版</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイク<br className="md:hidden" />よくある質問30選
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            初めてのアートメイクで気になる疑問を6カテゴリ・30問に分類して徹底回答。<br className="hidden md:block" />
            痛み・料金・持続期間・安全性・クリニック選びまで、すべての疑問を解決します。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#categories" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">カテゴリから探す</a>
            <Link href="/" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">おすすめクリニックを見る</Link>
          </div>
        </div>
      </section>

      {/* カテゴリ目次 */}
      <section className="py-16 px-4 bg-white" id="categories">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">カテゴリから質問を探す</h2>
          <p className="text-center text-gray-600 mb-10">気になるカテゴリをタップして、該当の質問へジャンプできます</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-100 hover:border-rose-300 rounded-xl p-5 text-center transition-all hover:shadow-md group"
              >
                <span className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3 group-hover:bg-rose-600 transition-colors">{cat.icon}</span>
                <span className="block font-bold text-gray-900 mb-1">{cat.label}</span>
                <span className="text-sm text-rose-400">{cat.count}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      {faqData.map((section) => {
        const catInfo = categories.find((c) => c.id === section.categoryId)
        return (
          <section
            key={section.categoryId}
            id={section.categoryId}
            className={section.categoryId === 'procedure' || section.categoryId === 'cost' || section.categoryId === 'clinic' ? 'py-16 px-4 bg-gray-50' : 'py-16 px-4 bg-white'}
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 justify-center mb-4">
                <span className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">{catInfo?.icon}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{section.categoryTitle}</h2>
              </div>
              <p className="text-center text-gray-500 text-sm mb-10">{catInfo?.count}</p>
              <div className="space-y-4">
                {section.faqs.map((faq, i) => {
                  questionNumber++
                  const num = questionNumber
                  return (
                    <details key={i} className="bg-white rounded-xl shadow-sm group border border-gray-100">
                      <summary className="px-6 py-5 cursor-pointer font-semibold hover:bg-rose-50/50 transition-colors rounded-xl flex items-center justify-between gap-4">
                        <span className="flex items-center gap-3">
                          <span className="bg-rose-100 text-rose-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {num}
                          </span>
                          <span className="text-left">{faq.q}</span>
                        </span>
                        <span className="text-rose-400 group-open:rotate-180 transition-transform flex-shrink-0">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 ml-11">
                        {num === 30 ? (
                          <>
                            {faq.a.split('詳しい比較・ランキングは当サイトのトップページで詳しく解説しています。')[0]}
                            詳しい比較・ランキングは<Link href="/" className="text-rose-500 hover:text-rose-600 underline font-semibold">当サイトのおすすめクリニックランキング</Link>で詳しく解説しています。
                          </>
                        ) : (
                          faq.a
                        )}
                      </div>
                    </details>
                  )
                })}
              </div>
            </div>
          </section>
        )
      })}

      {/* 構造化データ（FAQPage Schema） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqData.flatMap((section) =>
              section.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              }))
            ),
          }),
        }}
      />


      {/* 関連記事 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">関連記事</h2>
          <div className="grid md:grid-cols-2 gap-4">
      <Link href="/about" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">基本情報</span>
        <p className="font-semibold mt-1">アートメイクとは？基礎知識まとめ</p>
      </Link>
      <Link href="/knowledge/duration" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">知識</span>
        <p className="font-semibold mt-1">アートメイクの持続期間</p>
      </Link>
      <Link href="/knowledge/pain" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">知識</span>
        <p className="font-semibold mt-1">アートメイクの痛みについて</p>
      </Link>
      <Link href="/knowledge/risk" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">知識</span>
        <p className="font-semibold mt-1">アートメイクのリスク・副作用</p>
      </Link>
      <Link href="/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">ランキング</span>
        <p className="font-semibold mt-1">アートメイクおすすめクリニックTOP5</p>
      </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">まだ疑問が残っていますか？<br />まずは無料カウンセリングへ</h2>
          <p className="text-xl mb-4 opacity-90">
            実際にクリニックで相談すれば、<br className="hidden md:block" />
            あなたに合った施術方法・料金・デザインが分かります。
          </p>
          <p className="mb-8 opacity-80">技術力・症例数・コスパで厳選したおすすめクリニックをチェック</p>
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
