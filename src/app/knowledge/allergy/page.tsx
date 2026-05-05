import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイクとアレルギー｜金属アレルギーでも施術できる？ | アートメイク比較ナビ',
  description: '金属アレルギーの方がアートメイクを受ける際の注意点を解説。パッチテストの重要性、酸化鉄系色素の安全性、アレルギー反応の種類と対処法を詳しく紹介します。',
  keywords: 'アートメイク アレルギー,金属アレルギー アートメイク,アートメイク パッチテスト,アートメイク 色素 安全性',
  openGraph: {
    title: 'アートメイクとアレルギー｜金属アレルギーでも施術できる？',
    description: '金属アレルギーでもアートメイクは可能？パッチテスト・色素の安全性・対処法を解説。',
    type: 'article',
  },
}

const allergyTypes = [
  {
    type: '即時型アレルギー（I型）',
    timing: '施術後数分〜数時間以内',
    symptoms: '蕁麻疹、かゆみ、赤み、腫れ、まれにアナフィラキシー',
    frequency: 'まれ',
    treatment: '抗ヒスタミン薬の投与。重症の場合はステロイド投与やエピネフリン注射。すぐにクリニックまたは医療機関を受診。',
  },
  {
    type: '遅延型アレルギー（IV型）',
    timing: '施術後24〜72時間後',
    symptoms: '持続的な赤み、かゆみ、硬結（しこり）、湿疹様の皮膚炎',
    frequency: 'やや多い',
    treatment: 'ステロイド外用薬の処方。症状が治まらない場合はクリニックに相談。色素の除去が必要になるケースもある。',
  },
  {
    type: '肉芽腫性反応',
    timing: '施術後数週間〜数ヶ月後',
    symptoms: '施術部位に硬いしこり（肉芽腫）が形成される',
    frequency: 'まれ',
    treatment: 'ステロイド注射、外科的切除が必要な場合もある。アートメイクを行ったクリニックと皮膚科の連携が重要。',
  },
]

const pigmentInfo = [
  {
    component: '酸化鉄（Iron Oxide）',
    role: '主要色素成分。ブラウン・ブラック系の発色に使用',
    safety: '化粧品にも広く使用される成分で、FDA（米国食品医薬品局）やEUの化粧品規制でも認められている。金属アレルギーの原因となる「イオン化した金属」とは異なり、安定した酸化物の状態のため反応が起きにくい。',
  },
  {
    component: '二酸化チタン（Titanium Dioxide）',
    role: '白色顔料。色の明度調整に使用',
    safety: '日焼け止めや化粧品に広く使われる安定した成分。アレルギー反応はきわめて少ない。',
  },
  {
    component: 'カーボンブラック',
    role: '黒色色素。アイラインなどに使用',
    safety: '化粧品やインクに広く使われる成分。高純度品は安全性が高い。',
  },
  {
    component: '有機顔料（アゾ系色素）',
    role: '赤・オレンジ系の発色。リップに使用されることがある',
    safety: 'EU圏ではREACH規制に基づき安全性が管理されている。一部のアゾ系色素は分解時にアミンを生成する可能性があるため、高品質なクリニックでは規制準拠品を使用。',
  },
]

const patchTestFlow = [
  {
    step: '1. カウンセリング予約',
    detail: 'アレルギー歴（金属アレルギー、化粧品かぶれ、食物アレルギーなど）を事前に伝える。お薬手帳があれば持参する。',
  },
  {
    step: '2. パッチテスト実施',
    detail: '実際に使用する色素を腕の内側などに少量塗布し、テープで覆う。費用はクリニックによって無料〜5,000円程度。',
  },
  {
    step: '3. 48時間後の判定',
    detail: '48時間後にクリニックを再訪し、塗布部位の反応を医師が確認。赤み、腫れ、かゆみなどの有無をチェック。',
  },
  {
    step: '4. 72時間後の最終判定',
    detail: '遅延型アレルギーの有無を確認するため、72時間後にも再度判定を行うクリニックもある。これにより安全性がより高まる。',
  },
  {
    step: '5. 施術の可否決定',
    detail: '反応がなければ施術可能と判断。反応が出た場合は、別の色素での再テストまたは施術中止の判断を医師と相談する。',
  },
]

const precautions = [
  {
    title: '必ず医療機関（クリニック）で受ける',
    detail: 'アレルギーリスクがある方こそ、医師が常駐し緊急対応が可能な医療機関での施術が必須です。エステサロンでのアートメイクは避けてください。',
  },
  {
    title: 'アレルギー歴を正確に申告する',
    detail: '金属アレルギーだけでなく、化粧品かぶれ、ラテックスアレルギー、食物アレルギーなども申告してください。過去のアクセサリーでかぶれた経験も重要な情報です。',
  },
  {
    title: 'パッチテストを必ず受ける',
    detail: '金属アレルギーの方はパッチテストを省略しないでください。テスト結果が陰性でもリスクはゼロではないため、施術後の経過観察も重要です。',
  },
  {
    title: '使用色素のメーカー・成分を確認する',
    detail: 'FDAやEU認証を取得している色素を使用しているか、オーガニック色素や金属フリー色素に対応しているかを確認しましょう。',
  },
  {
    title: '施術後の異常にすぐ対応する',
    detail: '施術後に通常のダウンタイムを超える腫れ、かゆみ、痛み、水疱などが出た場合は、すぐに施術クリニックに連絡してください。',
  },
]

const faqs = [
  {
    q: '金属アレルギーでもアートメイクは受けられますか？',
    a: '多くの場合、受けられます。アートメイクの色素に含まれる酸化鉄は安定した酸化物であり、アクセサリーなどで反応する「イオン化した金属」とは性質が異なります。ただし、反応には個人差があるため、必ず事前にパッチテストを受けてから判断してください。',
  },
  {
    q: 'パッチテストはどこで受けられますか？費用はいくらですか？',
    a: 'アートメイクを行うクリニックで受けられます。費用はクリニックによって異なりますが、無料〜5,000円程度が一般的です。カウンセリング時に「パッチテストを受けたい」と伝えれば対応してもらえます。',
  },
  {
    q: 'パッチテストで問題なければ100%安全ですか？',
    a: '残念ながら100%安全とは言い切れません。パッチテストは腕の皮膚で行いますが、顔の皮膚は腕より薄くデリケートなため、異なる反応が出る可能性がゼロではありません。ただし、パッチテストにより大部分のリスクを事前に把握できます。',
  },
  {
    q: 'アレルギー反応が出た場合、どのくらいで治りますか？',
    a: '軽度の赤み・かゆみであれば、抗ヒスタミン薬やステロイド外用薬で数日〜1週間程度で改善するケースが多いです。肉芽腫などの重度の反応は治療に数ヶ月かかる場合もあります。いずれの場合も早期受診が回復を早めます。',
  },
  {
    q: 'MRI検査に影響はありますか？',
    a: 'アートメイクの色素に微量の金属成分が含まれるため、MRI検査時にまれに熱感やピリピリ感を覚えるケースが報告されています。ただし、現在主流の高品質色素では金属含有量がごくわずかであり、重大な問題が起きるケースはほとんどありません。MRI検査時には必ず施術歴を申告してください。',
  },
  {
    q: 'アレルギー体質でも安心なクリニックの選び方は？',
    a: 'パッチテストに対応しているか、FDA認証またはEU認証の色素を使用しているか、医師が常駐してアレルギー対応が可能か、の3点を確認してください。カウンセリング時にアレルギー歴を伝えた際の対応が丁寧かどうかも重要な判断基準です。',
  },
]

export default function AllergyPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "知識", href: "/knowledge" }, { name: "アレルギー" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3">2026年最新 完全ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイクとアレルギー<br />金属アレルギーでも施術できる？
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            「金属アレルギーだけどアートメイクは大丈夫？」「パッチテストは必要？」<br className="hidden md:block" />
            アレルギーの方が安全に施術を受けるための知識を解説します。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#pigment" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">色素の安全性を見る</a>
            <a href="#patchtest" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">パッチテストの流れ</a>
          </div>
        </div>
      </section>

      {/* 結論 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold">結論</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">金属アレルギーでも多くの方が施術可能</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              アートメイクの色素に含まれる酸化鉄は<strong className="text-rose-600">安定した酸化物</strong>であり、
              アクセサリーで反応する「イオン化した金属」とは性質が異なります。
              ただし<strong className="text-rose-600">パッチテストは必須</strong>です。
              必ず医療機関で事前検査を受けてから施術を判断しましょう。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">酸化鉄</div>
                <div className="text-sm text-gray-600">主要色素は<br />安定した酸化物</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">パッチテスト</div>
                <div className="text-sm text-gray-600">48〜72時間の<br />事前検査が必須</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">医療機関</div>
                <div className="text-sm text-gray-600">緊急対応可能な<br />クリニックで施術</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* アレルギー反応の種類 */}
      <section className="py-16 px-4 bg-gray-50" id="allergy-types">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">アートメイクで起こりうるアレルギー反応の種類</h2>
          <p className="text-center text-gray-600 mb-12">反応のタイプによって発症時期や対処法が異なります</p>
          <div className="space-y-6">
            {allergyTypes.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-rose-500 text-white px-6 py-3">
                  <h3 className="font-bold text-lg">{item.type}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-rose-600 text-xs font-semibold bg-rose-50 px-2 py-1 rounded">発症時期</span>
                      <p className="text-gray-700 leading-relaxed mt-2">{item.timing}</p>
                    </div>
                    <div>
                      <span className="text-orange-600 text-xs font-semibold bg-orange-50 px-2 py-1 rounded">頻度</span>
                      <p className="text-gray-700 leading-relaxed mt-2">{item.frequency}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-red-600 text-xs font-semibold bg-red-50 px-2 py-1 rounded">症状</span>
                    <p className="text-gray-700 leading-relaxed mt-2">{item.symptoms}</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <span className="text-blue-600 text-xs font-semibold">対処法</span>
                    <p className="text-blue-700 text-sm mt-1">{item.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 色素の安全性 */}
      <section className="py-16 px-4 bg-white" id="pigment">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">アートメイク色素の成分と安全性</h2>
          <p className="text-center text-gray-600 mb-12">現在主流の色素は化粧品にも使われる安定した成分です</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="px-4 py-4 text-left font-semibold">成分名</th>
                  <th className="px-4 py-4 text-left font-semibold">用途</th>
                  <th className="px-4 py-4 text-left font-semibold">安全性</th>
                </tr>
              </thead>
              <tbody>
                {pigmentInfo.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-4 font-semibold text-gray-800 text-sm whitespace-nowrap">{item.component}</td>
                    <td className="px-4 py-4 text-gray-700 text-sm">{item.role}</td>
                    <td className="px-4 py-4 text-gray-700 text-sm">{item.safety}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* パッチテストの流れ */}
      <section className="py-16 px-4 bg-gradient-to-b from-rose-50 to-pink-50" id="patchtest">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">パッチテストの流れ</h2>
          <p className="text-center text-gray-600 mb-12">施術前に必ず受けておきたいパッチテストの手順</p>
          <div className="space-y-6">
            {patchTestFlow.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm">{item.step}</span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* アレルギー体質の方への注意点 */}
      <section className="py-16 px-4 bg-white" id="precautions">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">アレルギー体質の方が施術を受ける際の注意点</h2>
          <p className="text-center text-gray-600 mb-12">安全に施術を受けるために押さえておくべきポイント</p>
          <div className="space-y-4">
            {precautions.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="bg-rose-100 text-rose-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed ml-10">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-rose-50 border border-rose-200 rounded-xl p-6 text-center">
            <p className="text-gray-700">
              <strong className="text-rose-600">重要：</strong>
              アレルギー反応は個人差が大きく、パッチテストだけでは完全に予測できない場合があります。
              必ず医師と十分に相談した上で施術の可否を判断してください。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">よくある質問（FAQ）</h2>
          <p className="text-center text-gray-600 mb-12">アートメイクとアレルギーに関する疑問にお答えします</p>
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
            <Link href="/knowledge/pain" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">痛み・ダウンタイム完全ガイド</p>
            </Link>
            <Link href="/knowledge/mri" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクとMRI検査</p>
            </Link>
            <Link href="/knowledge/aftercare" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アフターケア完全ガイド</p>
            </Link>
            <Link href="/knowledge/clinic-vs-salon" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">クリニックとサロンの違い</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">アレルギー対応も万全な<br />クリニックを選ぼう</h2>
          <p className="text-xl mb-4 opacity-90">
            パッチテスト対応・高品質色素使用のクリニックを比較。<br className="hidden md:block" />
            安心して施術を受けられるクリニックを見つけましょう。
          </p>
          <p className="mb-8 opacity-80">アレルギー対応力で選ぶクリニックランキング</p>
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
