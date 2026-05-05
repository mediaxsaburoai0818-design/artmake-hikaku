import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイクはクリニックとサロンどっちがいい？違いを徹底比較 | アートメイク比較ナビ',
  description: 'アートメイクを受けるならクリニック（医療機関）とエステサロンどちらがいい？法律面、安全性、料金、トラブル対応の違いを徹底比較。失敗しないクリニック選びのポイントを解説。',
  keywords: 'アートメイク クリニック サロン 違い,アートメイク 医療機関,アートメイク エステサロン,アートメイク 選び方',
  openGraph: {
    title: 'アートメイクはクリニックとサロンどっちがいい？違いを徹底比較',
    description: 'クリニックとサロンの違いを法律・安全性・料金・トラブル対応の観点から解説。',
    type: 'article',
  },
}

const comparisonItems = [
  {
    category: '法的位置づけ',
    clinic: 'アートメイクは医療行為（医師法第17条）。医師の管理下で看護師が施術を行う。合法。',
    salon: '医師免許なしでのアートメイク施術は医師法違反。2001年に厚生労働省が通達で医療行為と明確化。違法施術のリスクがある。',
  },
  {
    category: '施術者の資格',
    clinic: '医師または医師の指示を受けた看護師（准看護師を含む）。医療従事者としての教育を受けている。',
    salon: '美容師免許やエステティシャン資格のみの場合が多い。医療資格を持たない施術者による施術。',
  },
  {
    category: '麻酔の使用',
    clinic: '医療機関のため、麻酔クリームや局所麻酔の使用が可能。痛みを軽減して施術を受けられる。',
    salon: '医療機関ではないため、医療用麻酔の使用は不可。市販の表面麻酔のみ、または麻酔なしでの施術。',
  },
  {
    category: '使用する色素',
    clinic: '医療機関向けの高品質な色素を使用。FDA認証やEU認証取得のものが多い。成分表示が明確。',
    salon: '色素の品質にばらつきがある。安価な色素を使用しているケースもあり、成分が不明確な場合がある。',
  },
  {
    category: '衛生管理',
    clinic: '医療機関としての衛生基準を遵守。使い捨て器具の使用、滅菌設備の完備、感染症対策が徹底されている。',
    salon: '医療機関レベルの衛生基準は義務付けられていない。衛生管理の水準はサロンによって大きく異なる。',
  },
  {
    category: '料金相場（眉2回）',
    clinic: '8万〜15万円程度。高品質な色素・医療設備・有資格者の人件費が含まれる。',
    salon: '3万〜8万円程度。クリニックより安いが、安さの理由（色素の品質・施術者の技術力）を確認すべき。',
  },
  {
    category: 'トラブル発生時の対応',
    clinic: '医師が常駐しているため、アレルギー反応・感染症・腫れなどに即座に医療対応が可能。抗生物質やステロイドの処方もできる。',
    salon: '医師不在のため医療対応ができない。トラブル発生時は結局クリニックに駆け込むことになり、対応が遅れる。',
  },
  {
    category: 'カウンセリング',
    clinic: '医師によるカウンセリングで、肌質・アレルギー・持病などを考慮した施術プランを提案。既往歴の確認も行う。',
    salon: '医学的な観点からのカウンセリングは期待できない。肌トラブルのリスク評価が不十分な場合がある。',
  },
  {
    category: 'アフターフォロー',
    clinic: '施術後の経過観察、トラブル時の再診、処方薬の提供が可能。継続的な医療サポートを受けられる。',
    salon: '施術後のアフターフォロー体制はサロンによって差が大きい。医療的な対応はできない。',
  },
]

const legalPoints = [
  {
    title: '厚生労働省の通達（2001年）',
    detail: '2001年、厚生労働省は「針先に色素を付けて皮膚に墨等の色素を入れる行為」を医師法第17条に基づく医療行為と通達しました。これにより、アートメイクは医師または医師の指示を受けた看護師のみが行える施術と明確に位置づけられました。',
  },
  {
    title: '無資格施術の罰則',
    detail: '医師免許を持たない者がアートメイクの施術を行った場合、医師法違反として3年以下の懲役もしくは100万円以下の罰金が科される可能性があります。実際に摘発・逮捕されたケースも複数報告されています。',
  },
  {
    title: '国民生活センターへの相談件数',
    detail: '国民生活センターにはアートメイクに関する相談が毎年寄せられています。サロンでの施術後に皮膚トラブルが発生し、医療機関での治療が必要になったケースが多く報告されています。',
  },
]

const safetyRisks = [
  {
    risk: '感染症のリスク',
    clinicLevel: '低い',
    salonLevel: '高い',
    detail: 'クリニックでは滅菌設備と使い捨て器具を徹底使用。サロンでは医療機関レベルの衛生管理が担保されていない場合があり、針の管理や衛生面に不安が残る。',
  },
  {
    risk: 'アレルギー反応',
    clinicLevel: '即座に対応可',
    salonLevel: '対応不可',
    detail: 'クリニックでは医師がその場で抗ヒスタミン薬やステロイドを投与可能。サロンでは医療対応ができず、別の医療機関を受診するまで時間がかかる。',
  },
  {
    risk: '色素の品質',
    clinicLevel: '管理されている',
    salonLevel: 'ばらつきがある',
    detail: 'クリニックはFDA認証・EU認証色素の使用が一般的。サロンでは安価な色素や出所が不明な色素を使用しているケースが報告されている。',
  },
  {
    risk: '施術ミス（左右非対称など）',
    clinicLevel: '修正可能',
    salonLevel: '修正困難',
    detail: 'クリニックでは医師監修のもとで施術が行われ、問題があれば医療的な修正対応が可能。サロンでは施術者のスキルのみに依存し、修正対応力に限界がある。',
  },
]

const choosingPoints = [
  {
    point: '医療機関であることを確認する',
    detail: '「クリニック」「医院」と名乗っていても、実態がエステサロンである場合があります。公式サイトで医師の名前・経歴が公開されているか、開設届が出されている医療機関かを確認しましょう。',
  },
  {
    point: '施術者の資格と実績を確認する',
    detail: '看護師免許を持つ施術者か、アートメイクの施術実績はどのくらいか、症例写真は豊富かを確認。指名制度があるクリニックでは、特定の施術者の症例を確認できます。',
  },
  {
    point: '使用色素のメーカー・認証を確認する',
    detail: 'FDAやEUの認証を取得した色素を使用しているかを確認。公式サイトに色素のブランド名が記載されていることが望ましいです。',
  },
  {
    point: 'カウンセリングの丁寧さで判断する',
    detail: '無料カウンセリングを活用して、アレルギーの確認、デザインの相談、リスク説明が丁寧に行われるかを判断材料にしましょう。急かされたり、リスク説明が不十分な場合は注意。',
  },
  {
    point: '料金の透明性を確認する',
    detail: '総額が明示されているか、追加料金の有無、麻酔代やアフターケア用品が含まれているかを確認。極端に安い料金は技術や色素の品質に不安があります。',
  },
  {
    point: '口コミ・レビューを複数チェックする',
    detail: 'Google Maps、SNS、口コミサイトなど複数の情報源を確認。極端に良い口コミだけでなく、低評価の口コミの内容も確認しましょう。',
  },
]

const faqs = [
  {
    q: 'サロンのアートメイクは違法ですか？',
    a: '2001年の厚生労働省通達により、アートメイクは医療行為と位置づけられています。医師免許を持たない者による施術は医師法違反となる可能性があります。安全性と合法性の両面から、医療機関（クリニック）での施術をおすすめします。',
  },
  {
    q: 'サロンの方が安いのですが、クリニックを選ぶべき理由は？',
    a: 'クリニックの料金には、医療資格を持つ施術者の技術力、高品質な認証色素、滅菌設備、医師によるカウンセリング、トラブル時の医療対応が含まれています。サロンで施術を受けてトラブルが発生した場合、結果的にクリニックでの治療費がかかり、総額がクリニックの施術料金を上回ることもあります。',
  },
  {
    q: 'クリニックでの施術でもトラブルは起きますか？',
    a: 'クリニックでの施術でもリスクがゼロになるわけではありません。ただし、医師の管理下で施術が行われ、トラブル発生時には即座に医療対応が可能です。事前のパッチテストや丁寧なカウンセリングでリスクを最小化できます。',
  },
  {
    q: '看護師が施術するクリニックは安全ですか？',
    a: 'はい、医師法上、医師の指示を受けた看護師による施術は合法であり、多くのクリニックで看護師が施術を担当しています。重要なのは、看護師のアートメイク施術の実績・経験と、医師による管理体制が整っているかどうかです。',
  },
  {
    q: '「眉サロン」「アイブロウサロン」でのアートメイクも違法ですか？',
    a: '「サロン」と名乗っていても、医師が管理する医療機関として届け出ているケースもあります。一方で、医療機関ではないサロンでアートメイクを行っている場合は違法です。施術を受ける前に、医療機関としての届出があるか、医師が管理しているかを必ず確認してください。',
  },
  {
    q: 'サロンでアートメイクを受けてトラブルが起きたらどうすればいいですか？',
    a: '皮膚に異常が出た場合は、すぐに皮膚科やアートメイクを扱うクリニックを受診してください。また、国民生活センター（消費者ホットライン188）に相談することもできます。施術の記録（日時、店名、施術内容）は証拠として保管しておきましょう。',
  },
]

export default function ClinicVsSalonPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "知識", href: "/knowledge" }, { name: "クリニック vs サロン" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3">2026年最新 完全ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイクは<br />クリニックとサロンどっちがいい？
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            「サロンの方が安いけど大丈夫？」「クリニックとの違いは？」<br className="hidden md:block" />
            法律面・安全性・料金・トラブル対応の違いを徹底比較します。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#comparison" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">比較表を見る</a>
            <a href="#legal" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">法律面を確認</a>
          </div>
        </div>
      </section>

      {/* 結論 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold">結論</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">アートメイクは必ずクリニック（医療機関）で</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              アートメイクは<strong className="text-rose-600">2001年の厚生労働省通達で医療行為</strong>と明確化されています。
              医師免許のない施術者によるアートメイクは<strong className="text-rose-600">医師法違反</strong>の可能性があります。
              安全性・合法性・トラブル対応のすべてにおいて、<strong className="text-rose-600">クリニックでの施術を強くおすすめ</strong>します。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">医療行為</div>
                <div className="text-sm text-gray-600">厚労省通達で<br />明確に位置づけ</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">安全性</div>
                <div className="text-sm text-gray-600">医師常駐で<br />トラブルに即対応</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">合法性</div>
                <div className="text-sm text-gray-600">医療機関での<br />施術が法的に適正</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 比較表 */}
      <section className="py-16 px-4 bg-gray-50" id="comparison">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">クリニック vs サロン 徹底比較表</h2>
          <p className="text-center text-gray-600 mb-12">あらゆる観点から違いを比較しました</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="px-4 py-4 text-left font-semibold min-w-[120px]">比較項目</th>
                  <th className="px-4 py-4 text-left font-semibold min-w-[200px]">クリニック（医療機関）</th>
                  <th className="px-4 py-4 text-left font-semibold min-w-[200px]">エステサロン</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-4 font-semibold text-gray-800 text-sm">{item.category}</td>
                    <td className="px-4 py-4 text-gray-700 text-sm">{item.clinic}</td>
                    <td className="px-4 py-4 text-gray-700 text-sm">{item.salon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 法律面 */}
      <section className="py-16 px-4 bg-white" id="legal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">法律面での位置づけ</h2>
          <p className="text-center text-gray-600 mb-12">アートメイクは医療行為です</p>
          <div className="space-y-6">
            {legalPoints.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-rose-100 text-rose-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed ml-10">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 安全性比較 */}
      <section className="py-16 px-4 bg-gradient-to-b from-rose-50 to-pink-50" id="safety">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">安全性の比較</h2>
          <p className="text-center text-gray-600 mb-12">リスクごとの対応力を比較</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="px-4 py-4 text-left font-semibold">リスク項目</th>
                  <th className="px-4 py-4 text-center font-semibold min-w-[100px]">クリニック</th>
                  <th className="px-4 py-4 text-center font-semibold min-w-[100px]">サロン</th>
                  <th className="px-4 py-4 text-left font-semibold">詳細</th>
                </tr>
              </thead>
              <tbody>
                {safetyRisks.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-4 font-semibold text-gray-800 text-sm">{item.risk}</td>
                    <td className="px-4 py-4 text-center text-green-600 font-semibold text-sm">{item.clinicLevel}</td>
                    <td className="px-4 py-4 text-center text-red-600 font-semibold text-sm">{item.salonLevel}</td>
                    <td className="px-4 py-4 text-gray-700 text-sm">{item.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* クリニック選びのポイント */}
      <section className="py-16 px-4 bg-white" id="choosing">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">失敗しないクリニック選びのポイント</h2>
          <p className="text-center text-gray-600 mb-12">安全なクリニックを見極めるチェック項目</p>
          <div className="space-y-4">
            {choosingPoints.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="bg-rose-100 text-rose-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                  {item.point}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed ml-10">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-rose-50 border border-rose-200 rounded-xl p-6 text-center">
            <p className="text-gray-700">
              <strong className="text-rose-600">重要：</strong>
              「安さ」だけで選ぶのは危険です。アートメイクは皮膚に色素を入れる医療行為であり、
              一度入れると簡単には消せません。料金よりも安全性と技術力を最優先にしましょう。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">よくある質問（FAQ）</h2>
          <p className="text-center text-gray-600 mb-12">クリニックとサロンの違いに関する疑問にお答えします</p>
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
            <Link href="/knowledge/risk" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクのリスク・副作用</p>
            </Link>
            <Link href="/knowledge/allergy" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクとアレルギー</p>
            </Link>
            <Link href="/knowledge/price-guide" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">料金相場ガイド</p>
            </Link>
            <Link href="/knowledge/counseling" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">カウンセリングのポイント</p>
            </Link>
            <Link href="/knowledge/failure" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクの失敗事例と対策</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">安全で信頼できる<br />クリニックを見つけよう</h2>
          <p className="text-xl mb-4 opacity-90">
            医療機関として届出がある安全なクリニックを比較。<br className="hidden md:block" />
            技術力・料金・口コミで厳選したおすすめランキングを公開中。
          </p>
          <p className="mb-8 opacity-80">安全性と技術力で選ぶクリニックランキング</p>
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
