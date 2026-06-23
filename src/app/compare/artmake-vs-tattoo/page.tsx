import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title:
    "アートメイクとタトゥー（刺青）の違い7項目【2026年】持続期間・深さ・法律・除去まで医療ライターが解説",
  description:
    "アートメイクとタトゥー（刺青）の違いを「色素を入れる深さ・持続期間・法律上の扱い・施術者の資格・MRI・除去・費用」の7項目で比較。アートメイクは医行為で1〜3年で薄くなる一方、タトゥーは半永久。彫師は2020年最高裁で医師免許不要が確定。どちらを選ぶべきかが分かります。",
  keywords:
    "アートメイク タトゥー 違い, アートメイク 刺青 違い, アートメイク タトゥー, アートメイク 消える, アートメイク 持続期間, アートメイク 医療行為",
};

const rows = [
  {
    label: "入れる深さ",
    artmake: "表皮〜真皮のごく浅い層（およそ0.02〜0.03mm）",
    tattoo: "真皮の深い層（およそ1〜2mm）",
    note: "アートメイクは皮膚のターンオーバー（新陳代謝）が届く浅い層に色素を入れるため、時間とともに少しずつ薄くなります。タトゥーはターンオーバーの届かない深い層に入れるため色が残り続けます。深さの数値は技法・部位により幅があります。",
  },
  {
    label: "持続期間",
    artmake: "およそ1〜3年で徐々に退色（定期的なメンテナンスが前提）",
    tattoo: "半永久的（基本的に消えない）",
    note: "アートメイクは「色が抜けたら入れ直す」前提の施術です。流行や顔の変化に合わせてデザインを変えられる柔軟さがある一方、リタッチ費用が継続的にかかります。",
  },
  {
    label: "法律上の扱い・施術者",
    artmake: "「医行為」に該当。医師、または医師の指示下の看護師のみ施術可",
    tattoo: "彫師（タトゥーアーティスト）が施術。医師免許は不要",
    note: "アートメイクは針で色素を入れる行為が医行為にあたるとされ（厚生労働省通知）、医療機関でしか受けられません。一方タトゥーの彫師については、2020年9月の最高裁判所の決定で「医師免許がなくても医師法違反にあたらない」と確定しています。両者は法律上まったく異なる枠組みで扱われます。",
  },
  {
    label: "痛み・麻酔",
    artmake: "医療機関なので麻酔（表面麻酔・局所麻酔）を使用できる",
    tattoo: "医療麻酔は使えない（医療機関でないため）",
    note: "アートメイクはクリニックで行うため、医療用の麻酔クリームや注射で痛みを抑えられます。タトゥーは医療麻酔が使えないぶん、痛みを感じやすい傾向があります。",
  },
  {
    label: "MRI検査への影響",
    artmake: "ごくまれに発熱・画像の乱れの報告あり。事前申告が無難",
    tattoo: "同様に発熱・画像の乱れの報告あり。事前申告が必要",
    note: "色素に含まれる金属成分（酸化鉄など）が原因とされますが、近年のアートメイク色素はリスクが低いものが中心です。いずれの場合もMRIを受ける際は施術歴を医療機関に伝えてください。",
  },
  {
    label: "除去・修正のしやすさ",
    artmake: "退色するため修正しやすい。レーザー除去も選択可",
    tattoo: "除去は困難。複数回のレーザーや切除が必要なことも",
    note: "アートメイクは「やり直しやすさ」が大きな利点です。デザインが気に入らない・流行が変わった場合も、退色を待つ／リタッチで調整／除去という選択肢があります。",
  },
  {
    label: "費用の目安",
    artmake: "眉2回でおよそ4〜13万円（クリニック・技法による）",
    tattoo: "デザイン・サイズ次第で大きく変動",
    note: "アートメイクは定期的なリタッチ費用も含めた「総額」で考えるのが実務的です。クリニック別の料金は当サイトの比較ページで確認できます。",
  },
];

const faqs = [
  {
    q: "アートメイクとタトゥーは何が一番違うのですか？",
    a: "最大の違いは「色素を入れる深さ」と「持続期間」、そして「法律上の扱い」です。アートメイクは皮膚の浅い層に色素を入れるため1〜3年で徐々に薄くなり、医師または医師の指示下の看護師が行う医行為です。タトゥーは皮膚の深い層に入れるため半永久的に残り、彫師が施術します（2020年の最高裁決定で医師免許は不要と確定）。",
  },
  {
    q: "アートメイクは完全に消えますか？",
    a: "多くの場合、1〜3年かけて徐々に薄くなりますが、入れた色素や肌質によっては薄く残ることがあります。完全に消したい場合はクリニックでのレーザー除去などの方法があります。タトゥーと違い浅い層のため、相対的に修正・除去はしやすいとされています。",
  },
  {
    q: "アートメイクは医療行為なのですか？",
    a: "はい。針で皮膚に色素を入れる行為は「医行為」にあたるとされ（厚生労働省の通知）、医師または医師の指示のもとで看護師が行う必要があります。エステサロンなど医療機関以外でのアートメイク施術は違法となるため、必ず医療機関（クリニック）を選んでください。",
  },
  {
    q: "MRIは受けられますか？",
    a: "基本的には受けられますが、色素に含まれる金属成分の影響でまれに発熱や画像の乱れが報告されています。MRI検査を受ける際は、アートメイクやタトゥーの施術歴を医療機関に必ず申告してください。",
  },
  {
    q: "眉アートメイクとタトゥー、どちらが向いていますか？",
    a: "「毎日のメイクを時短したい」「眉が薄い・すっぴんに自信を持ちたい」「数年単位でデザインを更新したい」という方にはアートメイクが向いています。「恒久的にデザインを残したい」「ファッションとしての装飾」を求める方はタトゥーが選択肢になります。眉の自然さや医療的な安心感を重視するならアートメイクです。",
  },
];

export default function ArtmakeVsTattooPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: '比較', href: '/compare/all-clinics/' },
          { name: 'アートメイクとタトゥーの違い' },
        ]}
      />

      <section className="py-12 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            アートメイクとタトゥー（刺青）の違い<br className="md:hidden" />7項目で徹底比較【2026年】
          </h1>
          <p className="text-[#6B6560] leading-relaxed">
            「アートメイクとタトゥーって何が違うの？」という疑問に、<strong>色素を入れる深さ・持続期間・法律上の扱い・施術者の資格・MRI・除去・費用</strong>の7項目で答えます。結論から言うと、両者は<strong>消えるか／消えないか</strong>、そして<strong>医療行為か／そうでないか</strong>という点で根本的に異なります。
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-6 mb-10">
            <h2 className="text-xl font-bold mb-3">結論：3行でわかる違い</h2>
            <ul className="space-y-2 text-[#4B4540] leading-relaxed">
              <li>① <strong>アートメイク</strong>＝皮膚の浅い層に色素を入れる。<strong>1〜3年で薄くなり</strong>、<strong>医師・看護師が行う医療行為</strong>。</li>
              <li>② <strong>タトゥー（刺青）</strong>＝皮膚の深い層に色素を入れる。<strong>半永久的に残り</strong>、<strong>彫師が施術（医師免許は不要）</strong>。</li>
              <li>③ 眉やリップを「自然に・やり直せる形で」整えたいならアートメイク、恒久的な装飾ならタトゥー。</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">7項目 比較表</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-rose-100">
                  <th className="p-3 text-left border border-rose-200">項目</th>
                  <th className="p-3 text-left border border-rose-200">アートメイク</th>
                  <th className="p-3 text-left border border-rose-200">タトゥー（刺青）</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="align-top">
                    <td className="p-3 border border-rose-200 font-bold whitespace-nowrap bg-rose-50">{r.label}</td>
                    <td className="p-3 border border-rose-200">{r.artmake}</td>
                    <td className="p-3 border border-rose-200">{r.tattoo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">各項目をくわしく解説</h2>
          <div className="space-y-6 mb-12">
            {rows.map((r, i) => (
              <div key={r.label} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-lg mb-2">{i + 1}. {r.label}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{r.note}</p>
              </div>
            ))}
            <p className="text-xs text-[#8B8580]">
              ※法律上の扱いについて：アートメイクが医行為にあたる点は厚生労働省の通知に基づきます。タトゥー彫師に医師免許が不要である点は、2020年9月の最高裁判所の決定（医師法違反に問われた事件で無罪が確定）に基づきます。深さ・持続期間の数値は技法・肌質により幅があるため目安です。最新・正確な情報は各医療機関でご確認ください。
            </p>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">よくある質問（FAQ）</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <p className="font-bold mb-2">Q{i + 1}. {faq.q}</p>
                  <p className="text-sm text-[#6B6560] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 関連記事 */}
          <section className="bg-gray-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4 text-center">関連記事</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/compare/all-clinics/" className="text-rose-600 font-medium hover:underline">アートメイク全クリニック比較ランキング【12院】</Link></li>
              <li><Link href="/compare/eyebrow-salon/" className="text-rose-600 font-medium hover:underline">アートメイクは「クリニック」と「サロン」どちらが安全？</Link></li>
              <li><Link href="/compare/price/" className="text-rose-600 font-medium hover:underline">アートメイク料金比較DB｜実質総額で比べる</Link></li>
            </ul>
          </section>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">自分に合うのはどのクリニック？</h2>
          <p className="text-white/90 mb-6 leading-relaxed">アートメイクは医療機関でしか受けられません。料金・技法・症例数で比較して、自分に合う1院を見つけましょう。</p>
          <Link href="/compare/all-clinics/" className="inline-block bg-white text-rose-600 font-bold py-3 px-8 rounded-full hover:bg-rose-50 transition-colors">クリニック比較ランキングを見る</Link>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4">
        <AuthorBox />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
    </>
  );
}
