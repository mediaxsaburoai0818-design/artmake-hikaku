import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "医療アートメイクとは｜がん治療・脱毛症でお悩みの方へ | アートメイク比較ナビ",
  description:
    "医療アートメイクの定義、抗がん剤治療後の眉毛・まつげ再現、円形脱毛症への対応、保険適用の有無、施術可能なタイミングを丁寧に解説。お悩みの方に寄り添う情報をお届けします。",
  keywords: "医療アートメイク,がん アートメイク,脱毛症 アートメイク,抗がん剤 眉毛,医療補助 アートメイク",
  openGraph: {
    title: "医療アートメイクとは｜がん治療・脱毛症でお悩みの方へ",
    description:
      "がん治療後の外見ケア、脱毛症への対応として注目される医療アートメイクを解説。",
    type: "article",
  },
};

const whatIsMedicalArtmake = [
  {
    title: '医療アートメイクとは',
    description: '医療アートメイクは、医療機関（クリニック）で医師または看護師が行うアートメイク施術です。皮膚の浅い層に色素を入れ、眉毛やまつげ、リップなどの外見を自然に再現します。美容目的だけでなく、病気や治療の影響で外見に変化が生じた方のQOL（生活の質）向上を目的として行われることもあります。',
  },
  {
    title: '医療アートメイクが求められる場面',
    description: '抗がん剤治療による脱毛（眉毛・まつげの脱落）、円形脱毛症、無毛症、外傷や手術による瘢痕など、さまざまな理由で眉毛やまつげを失った方が、自然な外見を取り戻すための手段として医療アートメイクが活用されています。',
  },
  {
    title: '美容目的との違い',
    description: '美容目的のアートメイクと医療補助目的のアートメイクは、施術内容自体に大きな違いはありません。ただし、医療補助目的の場合は、患者さまの心理的な状態やお身体の状況に十分配慮した施術が求められます。経験豊富なクリニックを選ぶことが大切です。',
  },
]

const cancerTreatment = [
  {
    title: '抗がん剤治療と脱毛について',
    description: '抗がん剤治療では、頭髪だけでなく眉毛やまつげも脱落することがあります。眉毛を失うと顔の印象が大きく変わり、外出や人と会うことへの心理的なハードルが高くなる方も少なくありません。医療アートメイクは、そうしたお悩みに寄り添う選択肢の一つです。',
  },
  {
    title: '施術が可能なタイミング',
    description: '一般的に、抗がん剤治療が完了し、主治医から「施術を受けても問題ない」との許可を得てから施術を行います。治療中や免疫力が低下している期間は感染リスクがあるため、施術は控えてください。施術のタイミングは必ず主治医とアートメイククリニックの両方に相談しましょう。',
  },
  {
    title: '眉毛・まつげの再現',
    description: 'ストローク技法（毛並み）を用いることで、1本1本の毛を描くように自然な眉毛を再現できます。まつげが脱落した場合は、アイラインのアートメイクでまつげの密度感を演出することも可能です。施術者の技術力が仕上がりに大きく影響するため、症例実績の多いクリニックを選びましょう。',
  },
]

const alopecia = [
  {
    title: '円形脱毛症とアートメイク',
    description: '円形脱毛症により眉毛の一部または全部が脱落した場合、医療アートメイクで自然な眉を再現することができます。脱毛の範囲や状態に応じて、部分的な施術も可能です。皮膚科での治療と並行して、外見のケアとしてアートメイクを検討される方が増えています。',
  },
  {
    title: '無毛症・乏毛症への対応',
    description: '生まれつき眉毛が薄い、または生えない無毛症・乏毛症の方にも、医療アートメイクは有効な選択肢です。毛が全くない状態からでも、ストローク技法で自然な眉毛のデザインを施すことが可能です。',
  },
  {
    title: '施術時の配慮',
    description: '脱毛症の方は皮膚が敏感になっている場合があるため、施術前にパッチテストを行うクリニックもあります。また、脱毛の原因や治療状況に応じて、使用する色素や施術方法を調整する必要があります。事前のカウンセリングで十分な情報を共有しましょう。',
  },
]

const insuranceInfo = [
  {
    title: '保険適用について',
    description: '現在のところ、アートメイクは美容目的・医療補助目的を問わず、健康保険の適用外（自由診療）です。費用は全額自己負担となります。ただし、一部の民間保険や医療費控除の対象となる場合がありますので、ご加入の保険会社や税理士にご相談ください。',
  },
  {
    title: '費用の目安',
    description: '医療補助目的のアートメイクも、美容目的と同程度の費用（眉毛2回セットで5〜15万円程度）がかかります。一部のクリニックでは、医療補助目的の方向けに割引制度を設けている場合もあります。公式サイトで最新情報をご確認ください。',
  },
  {
    title: '自治体の助成制度',
    description: 'がん患者さまの外見ケア（アピアランスケア）に対する助成金制度を設けている自治体もあります。ウィッグ購入費の助成は広がりつつありますが、アートメイクが対象となるかは自治体により異なります。お住まいの自治体にお問い合わせください。',
  },
]

const faqs = [
  {
    q: 'がん治療中でもアートメイクを受けられますか？',
    a: '治療中の施術は推奨されていません。抗がん剤治療中は免疫力が低下しているため、感染リスクが高まります。治療が完了し、主治医から許可を得てからの施術をおすすめします。施術のタイミングは必ず主治医にご相談ください。',
  },
  {
    q: '抗がん剤治療後、どのくらい経てば施術を受けられますか？',
    a: '一般的には治療終了後3〜6ヶ月程度が目安とされていますが、個人の回復状況によって異なります。血液検査の結果が安定し、主治医から「問題ない」との判断をいただいてからの施術が安全です。焦らず、お身体の回復を最優先にしてください。',
  },
  {
    q: '医療アートメイクは保険が適用されますか？',
    a: '残念ながら、現在のところ医療アートメイクは健康保険の適用外（自由診療）です。全額自己負担となります。ただし、一部の自治体でがん患者さまのアピアランスケアに対する助成金制度があるため、お住まいの自治体にお問い合わせされることをおすすめします。',
  },
  {
    q: '脱毛症で眉毛が全くない場合でもアートメイクは可能ですか？',
    a: 'はい、可能です。眉毛が全くない状態からでも、ストローク技法で1本1本の毛並みを描くように施術し、自然な眉を再現できます。施術者の技術力が非常に重要になるため、脱毛症の方の施術実績が豊富なクリニックを選ぶことをおすすめします。',
  },
  {
    q: '施術による副作用や合併症のリスクはありますか？',
    a: 'アートメイクは一般的に安全な施術ですが、まれに施術部位の腫れ、赤み、感染、アレルギー反応などが起こる可能性があります。特に免疫力が回復途中の方はリスクが高くなる場合があるため、必ず主治医とクリニックの両方に相談の上、施術を受けてください。',
  },
  {
    q: 'まつげが抜けた場合もアートメイクで対応できますか？',
    a: 'はい、アイラインのアートメイクでまつげの密度感を再現することが可能です。まつげの間を埋めるインライン施術により、自然にまつげが生えているような印象を与えられます。ただし、目元はデリケートな部位のため、施術経験が豊富なアーティストに依頼しましょう。',
  },
]

export default function CancerPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "目的別" }, { name: "医療アートメイク" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">目的別ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            医療アートメイクとは<br className="hidden md:block" />
            がん治療・脱毛症でお悩みの方へ
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            治療や病気の影響で眉毛やまつげを失った方へ。<br className="hidden md:block" />
            医療アートメイクで自然な外見を取り戻す方法をご案内します。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#cancer" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">がん治療後の方へ</a>
            <a href="#alopecia" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">脱毛症の方へ</a>
          </div>
        </div>
      </section>

      {/* 大切なお知らせ */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-blue-800 mb-3">お読みいただく前に</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              本ページでは、がん治療や脱毛症による外見の変化に対する選択肢の一つとして、医療アートメイクに関する情報を提供しています。
              施術の可否は個人の状態により異なるため、<strong>必ず主治医にご相談の上</strong>、ご判断ください。
              本ページの情報は一般的なものであり、個別の医学的アドバイスに代わるものではありません。
            </p>
          </div>
        </div>
      </section>

      {/* 医療アートメイクとは */}
      <section className="py-16 px-4 bg-white" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">医療アートメイクとは</h2>
          <div className="space-y-6">
            {whatIsMedicalArtmake.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* がん治療後の方へ */}
      <section className="py-16 px-4 bg-gray-50" id="cancer">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">がん治療後の方へ</h2>
          <p className="text-center text-gray-600 mb-10">抗がん剤治療による脱毛でお悩みの方への情報です</p>
          <div className="space-y-6">
            {cancerTreatment.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-rose-50 border border-rose-200 rounded-xl p-6">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong className="text-rose-600">大切なこと：</strong>
              施術を検討される際は、必ず主治医（がんの治療を担当する医師）に相談してください。
              お身体の状態を最もよく把握しているのは主治医です。施術の可否やタイミングについて、安全な判断をしてもらいましょう。
            </p>
          </div>
        </div>
      </section>

      {/* 脱毛症の方へ */}
      <section className="py-16 px-4 bg-white" id="alopecia">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">脱毛症でお悩みの方へ</h2>
          <p className="text-center text-gray-600 mb-10">円形脱毛症・無毛症の方への情報です</p>
          <div className="space-y-6">
            {alopecia.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 保険適用・費用 */}
      <section className="py-16 px-4 bg-gray-50" id="insurance">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">保険適用・費用について</h2>
          <div className="space-y-6">
            {insuranceInfo.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-lg shadow-sm group border border-gray-100">
                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-gray-50 transition-colors flex justify-between items-center">
                  <span>Q{i + 1}. {faq.q}</span>
                  <span className="text-rose-400 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 py-4 border-t text-gray-600 leading-relaxed text-sm">
                  <span className="font-semibold text-rose-500">A.</span> {faq.a}
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
            <Link href="/knowledge/pain" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">痛み・ダウンタイム完全ガイド</p>
            </Link>
            <Link href="/knowledge/risk" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクのリスク・副作用</p>
            </Link>
            <Link href="/knowledge/aftercare" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アフターケア完全ガイド</p>
            </Link>
            <Link href="/knowledge/mri" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-rose-500 text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクとMRI検査</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">まずはカウンセリングで<br />ご相談ください</h2>
          <p className="text-xl mb-4 opacity-90">
            経験豊富なクリニックなら、お一人おひとりの状況に<br className="hidden md:block" />
            合わせた丁寧な提案をしてくれます。
          </p>
          <p className="text-lg mb-8 opacity-80">
            無理のないタイミングで、まずは情報収集から始めましょう。
          </p>
          <a href="/" className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            おすすめクリニックランキングを見る
          </a>
          <p className="mt-6 text-sm opacity-70">2026年4月最新 - 医療アートメイク対応クリニック情報</p>
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
  );
}
