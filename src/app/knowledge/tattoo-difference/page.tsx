import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイクとタトゥーの違いとは？8項目で徹底比較【2026年最新】',
  description: 'アートメイクとタトゥーの違いを8つの項目で徹底比較。深さ・持続期間・痛み・除去・資格・施術場所・目的・MRIの観点から、両者の違いを分かりやすく解説します。',
  keywords: 'アートメイク タトゥー 違い,アートメイク 刺青 違い,アートメイク 入れ墨 違い',
  openGraph: {
    title: 'アートメイクとタトゥーの違いとは？8項目で徹底比較',
    description: '深さ・持続期間・痛み・除去・資格・施術場所・目的・MRIの8項目で徹底比較。',
    type: 'article',
  },
}

const comparisonItems = [
  {
    category: '針を入れる深さ',
    artmake: '表皮（0.02〜0.03mm）',
    tattoo: '真皮（1〜2mm）',
    detail: 'アートメイクは表皮のごく浅い層に色素を入れるため、肌のターンオーバーで徐々に排出されます。タトゥーは真皮層の深い位置に色素を入れるため、ターンオーバーの影響を受けず半永久的に残ります。',
  },
  {
    category: '持続期間',
    artmake: '1〜3年（徐々に薄くなる）',
    tattoo: '半永久的（一生残る）',
    detail: 'アートメイクは数年で薄くなるため、トレンドや加齢に合わせてデザインを変更できます。タトゥーは基本的に一生残るため、入れる際は慎重な判断が必要です。',
  },
  {
    category: '痛み',
    artmake: '毛抜き程度（麻酔使用）',
    tattoo: '部位により強い痛み',
    detail: 'アートメイクは麻酔クリームを必ず使用し、痛みを最小限に抑えます。タトゥーは麻酔を使用しないことが一般的で、施術時間も長いため痛みを感じやすいです。',
  },
  {
    category: '除去の難易度',
    artmake: '比較的容易（1〜3年で自然に薄くなる）',
    tattoo: '困難（レーザー複数回または外科手術）',
    detail: 'アートメイクは時間経過で薄くなるほか、レーザー除去も比較的少ない回数で対応可能です。タトゥーは完全除去に10回以上のレーザー照射が必要な場合もあり、費用も高額になります。',
  },
  {
    category: '必要な資格',
    artmake: '医師免許または看護師免許（医療行為）',
    tattoo: '法的には資格不要（2023年最高裁判決）',
    detail: 'アートメイクは厚生労働省通知により医療行為と定められており、医師または医師の指示のもと看護師が施術します。タトゥーは2023年の最高裁判決により医療行為ではないとされ、資格なく施術可能です。',
  },
  {
    category: '施術場所',
    artmake: '医療機関（クリニック・病院）',
    tattoo: 'タトゥースタジオ・彫り師の店舗',
    detail: 'アートメイクは医療機関でのみ施術が認められており、滅菌・衛生管理が医療レベルで徹底されています。タトゥーは専門スタジオで施術されますが、衛生管理の基準は店舗により異なります。',
  },
  {
    category: '目的',
    artmake: '美容・メイクの手間削減・コンプレックス解消',
    tattoo: '自己表現・ファッション・記念',
    detail: 'アートメイクは「すっぴんを美しく」「毎日のメイク時間を短縮」など実用的な目的が中心です。タトゥーはアート・自己表現・思い出の記録など、より個人的・芸術的な目的で入れることが多いです。',
  },
  {
    category: 'MRI検査',
    artmake: '基本的に問題なし（微量の金属成分）',
    tattoo: '火傷のリスクあり（金属成分が多い場合）',
    detail: 'アートメイクは微量の金属成分のため、MRI検査は基本的に受けられます。タトゥーは色素によっては金属成分が多く含まれ、MRI時に火傷や痛みを感じるリスクがあるため、事前申告が必要です。',
  },
]

const confusionReasons = [
  {
    title: '「針で色素を入れる」という共通点',
    description: 'どちらも針を使って皮膚に色素を入れるという施術方法が同じため、同一視されやすいです。しかし、入れる深さが根本的に異なります。',
  },
  {
    title: '過去の「アートメイク＝永久」のイメージ',
    description: '昔のアートメイクは現在より深く入れていたため持続期間が長く、タトゥーとの違いが曖昧でした。現在の技術は大きく進歩し、明確に異なるものになっています。',
  },
  {
    title: '海外での呼称の混乱',
    description: '海外では「permanent makeup」「cosmetic tattoo」「micropigmentation」など様々な呼び方があり、「tattoo」という言葉が含まれることで混同されがちです。',
  },
  {
    title: 'メディアでの不正確な報道',
    description: 'テレビや雑誌で「顔にタトゥーを入れる」と表現されることがあり、正確な情報が伝わりにくい状況があります。',
  },
]

const legalDifferences = [
  {
    aspect: '法的位置づけ',
    artmake: '医療行為（厚生労働省通知 2001年）',
    tattoo: '医療行為ではない（最高裁判決 2023年）',
  },
  {
    aspect: '施術者の要件',
    artmake: '医師または看護師（医師の指示下）',
    tattoo: '法的な資格要件なし',
  },
  {
    aspect: '施術場所の要件',
    artmake: '医療機関（開設届が必要）',
    tattoo: '特別な許可不要（保健所届出を推奨する自治体あり）',
  },
  {
    aspect: '違反した場合',
    artmake: '医師法違反（3年以下の懲役または100万円以下の罰金）',
    tattoo: '特になし（ただし傷害罪の可能性）',
  },
  {
    aspect: '広告規制',
    artmake: '医療広告ガイドライン適用',
    tattoo: '景品表示法の一般規制のみ',
  },
]

const prosConsArtmake = {
  pros: [
    '1〜3年で薄くなるため、やり直しが可能',
    '医療機関で施術されるため安全性が高い',
    '麻酔使用で痛みが少ない',
    'すっぴんでも自然な美しさを維持できる',
    'MRI検査も基本的に問題なし',
    'トレンドに合わせてデザイン変更可能',
  ],
  cons: [
    '定期的なリタッチが必要（1〜3年ごと）',
    '永久ではないため長期的にはコストがかかる',
    '施術直後は色が濃く見える期間がある',
    '即日の修正は難しい（薄くなるのを待つ必要）',
  ],
}

const prosConsTattoo = {
  pros: [
    '半永久的に持続するため、リタッチ不要',
    '一度の費用で永続的に楽しめる',
    '自由度の高いデザイン・カラーが可能',
    '自己表現やアートとしての価値がある',
  ],
  cons: [
    '除去が非常に困難で高額（数十万〜100万円以上）',
    '就職や温泉など社会的制約がある',
    '加齢による体型変化でデザインが崩れる可能性',
    'MRI検査でリスクがある場合がある',
    '施術中の痛みが強い（麻酔なしが一般的）',
    '感染症リスクが施術環境による',
  ],
}

const faqs = [
  {
    q: 'アートメイクはタトゥーと同じように社会的に問題になりますか？',
    a: 'いいえ、アートメイクはメイクの延長として社会的に受け入れられています。温泉やプール、就職活動で問題になることはほとんどありません。見た目も自然なメイクと区別がつかないレベルです。一方、タトゥーは温泉施設での入浴制限や就職への影響が依然としてあります。',
  },
  {
    q: 'タトゥーが入っている上からアートメイクはできますか？',
    a: '基本的にはできません。タトゥーは真皮に色素が入っているため、その上からアートメイクを施しても効果的ではありません。タトゥーの除去（レーザー等）をしてからアートメイクを施術するか、タトゥーの色を活かしたカバーアップを専門クリニックで相談してください。',
  },
  {
    q: 'アートメイクが「医療行為」になった経緯は？',
    a: '2001年に厚生労働省が「針先に色素を付けながら、皮膚の表面に墨等の色素を入れる行為」は医師法第17条に規定する医業に該当すると通知しました。これにより、アートメイクは医療機関でのみ施術が認められることになりました。無資格での施術は医師法違反となります。',
  },
  {
    q: 'アートメイクとタトゥー、どちらが痛いですか？',
    a: '一般的にタトゥーの方が痛みが強いです。アートメイクは必ず麻酔クリームを使用し、針を入れる深さも浅いため痛みは最小限です。タトゥーは麻酔を使用しないことが多く、深い層まで針を入れるため痛みを強く感じます。また施術時間もタトゥーの方が長い傾向があります。',
  },
  {
    q: '将来タトゥーを入れたい場所にアートメイクをしても大丈夫？',
    a: 'アートメイクは1〜3年で薄くなるため、将来その場所にタトゥーを入れること自体は可能です。ただし、アートメイクの色素が完全に消えていない状態でタトゥーを入れると、色が混ざる可能性があります。完全に退色してから施術するか、タトゥーアーティストに事前に相談しましょう。',
  },
]

export default function TattooDifferencePage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "知識" }, { name: "タトゥーとの違い" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3">2026年最新 完全ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイクとタトゥーの違いとは？<br />8項目で徹底比較
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            「アートメイクってタトゥーと何が違うの？」という疑問を完全解消。<br className="hidden md:block" />
            深さ・持続期間・資格・法律など、あらゆる観点から違いを解説します。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#comparison" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">8項目比較表を見る</a>
            <a href="#legal" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">法律上の違い</a>
          </div>
        </div>
      </section>

      {/* 結論セクション */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold">結論</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">全く別物です</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              アートメイクとタトゥーは「針で色素を入れる」という点は共通していますが、
              <strong className="text-rose-600">深さ・持続期間・法的位置づけ・目的が根本的に異なります</strong>。
              アートメイクは<strong className="text-rose-600">医療行為として安全に管理された美容施術</strong>であり、
              タトゥーとは全く別のカテゴリのものです。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-rose-400">
                <div className="text-lg font-bold text-rose-500 mb-1">アートメイク</div>
                <div className="text-sm text-gray-600">医療行為 / 表皮0.02mm / 1〜3年で薄くなる</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-gray-400">
                <div className="text-lg font-bold text-gray-700 mb-1">タトゥー</div>
                <div className="text-sm text-gray-600">非医療行為 / 真皮1〜2mm / 半永久的に残る</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8項目比較表 */}
      <section className="py-16 px-4 bg-gray-50" id="comparison">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">アートメイクとタトゥーの8項目比較</h2>
          <p className="text-center text-gray-600 mb-12">あらゆる観点から両者の違いを比較します</p>
          <div className="space-y-6">
            {comparisonItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-rose-500 text-white px-6 py-3 flex items-center gap-3">
                  <span className="bg-white text-rose-500 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                  <h3 className="font-bold text-lg">{item.category}</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                      <span className="text-rose-600 text-xs font-bold">アートメイク</span>
                      <p className="text-gray-900 font-semibold mt-1">{item.artmake}</p>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                      <span className="text-gray-600 text-xs font-bold">タトゥー</span>
                      <p className="text-gray-900 font-semibold mt-1">{item.tattoo}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* なぜ混同されるのか */}
      <section className="py-16 px-4 bg-white" id="confusion">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">なぜ混同されるのか？</h2>
          <p className="text-center text-gray-600 mb-12">アートメイクとタトゥーが混同される4つの理由を解説します</p>
          <div className="grid md:grid-cols-2 gap-6">
            {confusionReasons.map((reason, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-rose-100 text-rose-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                  <h3 className="font-bold text-gray-900">{reason.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 法律上の違い */}
      <section className="py-16 px-4 bg-gray-50" id="legal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">法律上の違い</h2>
          <p className="text-center text-gray-600 mb-12">アートメイクは「医療行為」、タトゥーは「非医療行為」と法的に明確に区別されています</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="px-4 py-4 text-left font-semibold min-w-[120px]">項目</th>
                  <th className="px-4 py-4 text-left font-semibold">アートメイク</th>
                  <th className="px-4 py-4 text-left font-semibold">タトゥー</th>
                </tr>
              </thead>
              <tbody>
                {legalDifferences.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-4 font-semibold text-gray-900 text-sm">{item.aspect}</td>
                    <td className="px-4 py-4 text-gray-700 text-sm">{item.artmake}</td>
                    <td className="px-4 py-4 text-gray-700 text-sm">{item.tattoo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-rose-50 border border-rose-200 rounded-xl p-6">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong className="text-rose-600">重要：</strong>
              エステサロンやネイルサロンでアートメイクを提供している場合、それは<strong>違法行為</strong>です。
              アートメイクは必ず医療機関（クリニック・病院）で受けてください。
              無資格施術は感染症や施術事故のリスクが非常に高く、万が一のトラブルにも法的保護が受けられません。
            </p>
          </div>
        </div>
      </section>

      {/* それぞれのメリット・デメリット */}
      <section className="py-16 px-4 bg-white" id="pros-cons">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">それぞれのメリット・デメリット</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* アートメイク */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-center text-rose-600">アートメイク</h3>
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                <h4 className="font-bold text-green-600 mb-4">メリット</h4>
                <ul className="space-y-3">
                  {prosConsArtmake.pros.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                <h4 className="font-bold text-red-600 mb-4">デメリット</h4>
                <ul className="space-y-3">
                  {prosConsArtmake.cons.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">&#x2715;</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* タトゥー */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-center text-gray-700">タトゥー</h3>
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                <h4 className="font-bold text-green-600 mb-4">メリット</h4>
                <ul className="space-y-3">
                  {prosConsTattoo.pros.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                <h4 className="font-bold text-red-600 mb-4">デメリット</h4>
                <ul className="space-y-3">
                  {prosConsTattoo.cons.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">&#x2715;</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">よくある質問（FAQ）</h2>
          <p className="text-center text-gray-600 mb-12">アートメイクとタトゥーの違いに関する疑問にお答えします</p>
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
      <Link href="/about" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">基本情報</span>
        <p className="font-semibold mt-1">アートメイクとは？基礎知識まとめ</p>
      </Link>
      <Link href="/faq" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">FAQ</span>
        <p className="font-semibold mt-1">アートメイクよくある質問</p>
      </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">安全なアートメイクは<br />医療機関で受けましょう</h2>
          <p className="text-xl mb-4 opacity-90">
            タトゥーとは違い、アートメイクは医療行為。<br className="hidden md:block" />
            信頼できるクリニックで安心の施術を受けましょう。
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
