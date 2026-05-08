import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイク カウンセリング質問集20選｜聞くべき質問と準備【2026年最新】',
  description: 'アートメイクのカウンセリングで聞くべき質問20選を徹底解説。料金・技法・アフターケア・保証・失敗対応まで完全網羅。準備すべきこと、当日の流れ、複数院比較のコツまで紹介。',
  keywords: 'アートメイク カウンセリング 質問,アートメイク カウンセリング 準備,アートメイク 質問集',
  openGraph: {
    title: 'アートメイク カウンセリング質問集20選｜聞くべき質問と準備',
    description: 'アートメイクのカウンセリングで聞くべき20の質問を徹底解説。',
    type: 'article',
  },
}

const questions = [
  { cat: '料金', num: 1, q: '総額でいくらかかりますか？（指名料・麻酔・アフターケア込み）', why: '表示価格以外に指名料・麻酔代・初診料が発生するケースがあります。必ず「総額」で確認することが重要です。' },
  { cat: '料金', num: 2, q: 'リタッチ料金はいくらですか？何回目から適用されますか？', why: '2回目以降の料金は初回より安くなるのが一般的。長期コストを把握するために必須の質問です。' },
  { cat: '料金', num: 3, q: '支払い方法は何がありますか？分割やローンは使えますか？', why: '現金・クレジットカード・医療ローン・後払いなど対応を確認。分割手数料の有無も重要です。' },
  { cat: '料金', num: 4, q: '追加費用が発生するケースはありますか？', why: '「追加施術」「色の補充」「予定外のリタッチ」などで追加料金が発生する可能性を事前に確認。' },
  { cat: '技法', num: 5, q: 'どんな技法がありますか？私に合うのはどれですか？', why: '2D（パウダー）・3D（毛並み）・4D/6D/7D（複合）など技法は多様。肌質・希望に合う技法を相談。' },
  { cat: '技法', num: 6, q: '使用する色素はFDA認可ですか？', why: '安全性の高い色素を使用しているかの確認。安価な非認可色素は変色・アレルギーリスクがあります。' },
  { cat: '技法', num: 7, q: '施術者の経歴・症例数を教えてください', why: '施術者の経験値は仕上がりに直結。何年経験で何例施術しているかを確認しましょう。' },
  { cat: '技法', num: 8, q: '何回で完成しますか？1回あたりの所要時間は？', why: '一般的に2〜3回で完成。1回の施術時間（1.5〜3時間）を把握してスケジュール調整を。' },
  { cat: 'ケア', num: 9, q: 'ダウンタイムはどれくらいですか？', why: '施術後の赤み・腫れ・かさぶたの期間を把握。大事なイベント前の施術は避けられるように。' },
  { cat: 'ケア', num: 10, q: 'アフターケアの具体的な方法を教えてください', why: '軟膏の塗布・洗顔方法・触ってはいけない期間など、色素定着に影響する重要情報。' },
  { cat: 'ケア', num: 11, q: '施術後はいつからメイクできますか？', why: '部位別のメイク解禁タイミング（眉1週間・リップ10-14日など）を把握。' },
  { cat: 'ケア', num: 12, q: '運動・サウナ・温泉・プールはいつから可能ですか？', why: '汗や水分で色素定着が妨げられるため、最低1〜2週間は避けるのが一般的。詳細を確認。' },
  { cat: '保証', num: 13, q: '定着が悪かった場合の追加施術・保証はありますか？', why: '「定着保証」「再施術保証」の有無と期限を確認。保証制度があれば安心度が大幅UP。' },
  { cat: '保証', num: 14, q: 'アレルギーや感染症が出た場合の対応は？', why: '医療機関としてのトラブル対応体制を確認。抗生物質処方・医師の診察体制があるか。' },
  { cat: '保証', num: 15, q: '仕上がりに満足できなかった場合の対応は？', why: 'デザイン修正・カラー調整・リタッチの対応可否と追加料金の有無を確認。' },
  { cat: 'デザイン', num: 16, q: '私の顔型・骨格に合うデザインを提案してもらえますか？', why: '流行ではなく顔に合うデザインを提案してくれるかが重要。プロとしての提案力を判断。' },
  { cat: 'デザイン', num: 17, q: 'デザイン確定前にシミュレーションしてもらえますか？', why: '施術前にペンシル等で仕上がりを確認できるか。納得いくまで調整してもらえるかが大切。' },
  { cat: 'その他', num: 18, q: '指名制度はありますか？指名料はいくら？', why: '特定の施術者を希望する場合の追加料金を確認。指名無料のクリニックもあります。' },
  { cat: 'その他', num: 19, q: 'モニター制度・割引キャンペーンは今ありますか？', why: '時期によってモニター募集や割引があることも。カウンセリング時に必ず質問しましょう。' },
  { cat: 'その他', num: 20, q: 'キャンセル規定・変更規定はどうなっていますか？', why: '予約変更・キャンセル時のペナルティを確認。直前キャンセルで全額負担となるケースも。' },
]

const preparations = [
  { num: 1, title: '理想の眉・リップの写真を複数用意', desc: 'SNSや雑誌の切り抜き、芸能人の写真など、好みのデザインを3〜5枚準備しましょう。口頭で説明するより正確に伝わります。' },
  { num: 2, title: '自分の肌質・体質を整理', desc: '脂性肌・乾燥肌、アレルギー歴、服用中の薬、ケロイド体質の有無など、事前にメモしておきましょう。' },
  { num: 3, title: '予算の上限を決めておく', desc: '「初回30万円まで」「年間予算10万円」など、上限を決めておくと追加提案に流されにくくなります。' },
  { num: 4, title: 'スケジュールを確認', desc: '施術日とダウンタイム期間に大事なイベントがないか、再施術の時期にも休みが取れるか確認。' },
  { num: 5, title: '口コミ・症例を事前チェック', desc: 'カウンセリング前にSNS・Google口コミで評判を確認し、疑問点をまとめておくと有意義な時間になります。' },
]

const dayFlow = [
  { step: 1, title: '受付・問診票記入（10〜15分）', desc: '持病・アレルギー・服用薬・希望などを記入。正直に記入することが重要です。' },
  { step: 2, title: 'カウンセリング（30〜60分）', desc: '医師またはカウンセラーと希望・不安を共有。写真を見せて具体的なイメージを伝えましょう。' },
  { step: 3, title: 'デザイン提案・見積もり（20〜30分）', desc: '顔型に合わせたデザインを提案。総額見積もりも受け取ります。' },
  { step: 4, title: '即日施術 or 後日予約', desc: 'その日に施術できるクリニックもあれば、別日予約のみのクリニックも。時間に余裕を持ちましょう。' },
]

const compareTips = [
  { icon: '📝', title: 'メモは必須', desc: '2〜3院を比較する場合、記憶だけでは混同します。院ごとにメモを取りましょう。' },
  { icon: '💰', title: '総額見積書をもらう', desc: '口頭での説明だけでなく、書面で総額見積もりをもらうことで後日の比較が正確になります。' },
  { icon: '🏥', title: '雰囲気・清潔感も評価軸に', desc: '待合室の清潔感、スタッフの対応、院内の衛生管理など、感覚的な部分も重要な判断材料です。' },
  { icon: '⏰', title: '即決を迫られたら要注意', desc: 'その日限定割引などで即決を迫るクリニックは避けましょう。冷静に比較する時間が必要です。' },
]

const faqs = [
  { q: 'カウンセリングは無料ですか？', a: 'ほとんどのクリニックで無料です。ただし一部のクリニックでは初診料（3,300円程度）や契約しない場合のカウンセリング料が発生することもあります。予約時に必ず確認しましょう。' },
  { q: 'カウンセリングだけで契約しなくても大丈夫ですか？', a: 'もちろん大丈夫です。むしろ複数院を比較するためには、1院で決めずに2〜3院のカウンセリングを受けるのが推奨されます。その場で契約を迫るクリニックは避けたほうが無難です。' },
  { q: 'カウンセリングの所要時間はどれくらいですか？', a: '30分〜1時間半が一般的です。丁寧なクリニックほど時間をかけて説明してくれます。スケジュールは2時間ほど確保しておくのが安心です。' },
  { q: 'カウンセリング当日にすっぴんで行ったほうがいい？', a: 'はい、すっぴんが理想です。特に眉アートメイクは現在の眉の状態を見てデザインを提案するため、メイクしていない状態のほうが正確な提案が受けられます。' },
  { q: 'オンラインカウンセリングは利用できますか？', a: '近年オンラインカウンセリングに対応するクリニックも増えています。ただし施術前には必ず対面でのカウンセリングが必要です。遠方の方はオンラインで候補を絞り、本命1〜2院を対面訪問するのがおすすめです。' },
  { q: '複数院のカウンセリングを受けるのは失礼ではないですか？', a: '全く問題ありません。クリニック側も比較検討されることを前提としています。自分に最適なクリニックを選ぶために、2〜3院のカウンセリング比較は積極的に推奨されます。' },
]

export default function CounselingPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: 'カウンセリング質問集' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">COUNSELING QUESTIONS</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイク カウンセリング質問集20選<br className="md:hidden" />聞くべき質問と準備すべきこと</h1>
            <p className="text-[#6B6560] leading-relaxed">
              カウンセリングは「納得して契約するか決める場」。<br />
              聞き忘れゼロで臨めるよう、重要な20質問を徹底整理しました。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>カウンセリングで聞くべき20質問（料金・技法・保証など）</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>カウンセリング前に準備すべき5つのこと</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>当日の流れと所要時間</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>複数院カウンセリングを比較するコツ</li>
            </ul>
          </div>

          {/* 20質問 */}
          <h2 className="text-2xl font-bold mb-6 text-center">カウンセリングで聞くべき20質問</h2>
          <div className="space-y-4 mb-10">
            {questions.map((q) => (
              <div key={q.num} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <div className="flex items-start gap-3 mb-2">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0">{q.num}</span>
                  <div className="flex-1">
                    <span className="bg-[var(--blush)] text-[var(--gold)] text-xs px-2 py-0.5 rounded-full mb-2 inline-block">{q.cat}</span>
                    <h3 className="font-bold mb-2">{q.q}</h3>
                    <p className="text-[#6B6560] text-xs leading-relaxed">💡 {q.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 準備すべきこと */}
          <h2 className="text-2xl font-bold mb-6 text-center">カウンセリング前に準備すべき5つのこと</h2>
          <div className="space-y-4 mb-10">
            {preparations.map((p) => (
              <div key={p.num} className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm">{p.num}</span>
                  <h3 className="font-bold text-lg">{p.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm ml-12">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* 当日の流れ */}
          <h2 className="text-2xl font-bold mb-6 text-center">カウンセリング当日の流れ</h2>
          <div className="space-y-4 mb-10">
            {dayFlow.map((f) => (
              <div key={f.step} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-[var(--gold)] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">STEP {f.step}</span>
                  <h3 className="font-bold">{f.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm ml-14">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* 複数院比較のコツ */}
          <h2 className="text-2xl font-bold mb-6 text-center">複数院カウンセリング比較のコツ</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {compareTips.map((t, i) => (
              <div key={i} className="glass-card rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{t.icon}</span>
                  <h3 className="font-bold">{t.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mb-6 text-center">よくある質問（FAQ）</h2>
          <div className="space-y-4 mb-10">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card rounded-2xl group border border-[var(--pink-beige)]">
                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-[var(--blush)] transition-colors flex justify-between items-center">
                  <span>Q{i + 1}. {faq.q}</span>
                  <span className="text-[var(--gold)] text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 py-4 border-t border-[var(--pink-beige)] text-[#6B6560] leading-relaxed text-sm">
                  <span className="font-semibold text-[var(--gold)]">A.</span> {faq.a}
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="glass-card rounded-3xl p-8 border border-[var(--gold-light)] text-center mb-12">
            <h2 className="text-xl font-bold mb-4">複数院のカウンセリングから選ぼう</h2>
            <p className="text-[#6B6560] mb-6">信頼できる候補を絞り込むための情報は、ランキングページから確認できます。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div>
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/knowledge/failure" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">失敗事例10選</p>
                <p className="text-xs text-[#8B8580] mt-1">後悔しないための対策</p>
              </Link>
              <Link href="/knowledge/price-guide" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">料金相場ガイド</p>
                <p className="text-xs text-[#8B8580] mt-1">相場と内訳を解説</p>
              </Link>
              <Link href="/purpose/first-time" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">初めての方へ</p>
                <p className="text-xs text-[#8B8580] mt-1">初心者向けガイド</p>
              </Link>
              <Link href="/compare/all-clinics" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">全5クリニック完全比較</p>
                <p className="text-xs text-[#8B8580] mt-1">15項目で徹底ランキング</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />
    </main>
  )
}
