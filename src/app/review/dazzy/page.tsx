import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'dazzy skin clinic（デイジークリニック）の口コミ・評判・料金【2026年7月】指名料込み総額・院別を徹底解説',
  description: 'dazzy skin clinic（デイジークリニック／dazzy CLINIC）の口コミ・評判・料金を徹底調査。眉2回93,800円〜、指名料22,000円〜を含む「実際に払う総額」の目安、新宿・札幌・福岡天神の院別料金、美容皮膚科「dazzy skin clinic（デイジースキンクリニック）」との関係まで公式情報（2026年7月10日確認・税込）で解説。アートメイクは医師・看護師が施術する医療行為です。',
}

const goodReviews = [
  { user: '口コミ集計（GLAM・計235件の分析より）', rating: 5, text: '公開されている口コミ集計では、仕上がりへの満足が97%・全体の肯定的評価が約94%とされています。特にリップアートメイクの技術への評価が高い傾向です。' },
  { user: 'レビューサイトの傾向（みん評・ホットペッパー等）', rating: 5, text: '「カウンセリングが丁寧」「無理な勧誘がなかった」「LINEのビデオカウンセリングが便利」という声が多く見られます。札幌院はホットペッパーで4.86点（16件）と高評価です。' },
  { user: 'レビューサイトの傾向', rating: 4, text: '「毎朝のメイク時間が短縮された」「痛みが想定より軽かった」「当日施術にも対応してもらえた」など、施術体験への好意的な声が多数あります。' },
]

const badReviews = [
  { user: 'レビューサイトの傾向', rating: 3, text: '「施術者のランクによって仕上がりに差がある」という指摘が複数サイトで見られます。指名料（院により5,500円〜33,000円）を払って上位ランクやベテランを指名する利用者も多いようです。' },
  { user: 'レビューサイトの傾向', rating: 2, text: '「色が濃すぎた」「思ったより早く薄くなった」という仕上がりへの不満や、「カウンセラーの提案の圧が強かった」という声が一部にあります。デザイン確認は納得いくまで行いましょう。' },
  { user: 'レビューサイトの傾向', rating: 3, text: 'ランク制の追加料金やデザイン提案が有料である点への不満が見られます。料金は院とランクで大きく変わるため、総額を事前に確認するのが重要です。' },
]

// 2026年6月12日に各院の公式ページで確認。料金は3院で別建て(全院共通ではない)
const pricingTable = [
  { menu: '眉 natural brow（福岡天神院）', price: '49,800円', sessions: '2回', note: '3院で最安水準' },
  { menu: '眉 dazzy brow（福岡天神院）', price: '69,800円', sessions: '2回', note: '' },
  { menu: '眉 dazzy brow Royal（札幌院）', price: '85,800円', sessions: '2回', note: 'ランク別（〜Premium 138,600円）' },
  { menu: '眉 Natural Brow（新宿本院）', price: '93,800円', sessions: '2回', note: '' },
  { menu: '眉 dazzy Brow（新宿本院）', price: '113,800円', sessions: '2回', note: '公式サイトで人気メニューと記載' },
  { menu: 'リップ dazzy Lip', price: '福岡99,000円／新宿120,000円', sessions: '2回', note: '院で異なる' },
  { menu: 'アイライン上', price: '福岡66,000円／新宿95,000円', sessions: '2回', note: '院で異なる' },
]

export default function DazzyClinicReviewPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: "クリニック" }, { name: "デイジークリニック" }]} />
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-2">口コミ・評判レビュー</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">dazzy skin clinic（デイジークリニック）の口コミ・評判・料金</h1>
          <p className="text-xl text-gray-600">新宿・札幌・福岡天神の3院体制｜院ごとに異なる料金・指名料・実質総額を正確に解説</p>
        </div>
      </section>

      {/* 30秒でわかる結論 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><span className="text-rose-500">30秒</span>でわかる結論</h2>
            <p className="text-sm text-gray-500 mb-6">「dazzy skin clinic（カタカナ表記：デイジースキンクリニック）」で検索された方の多くは、アートメイクのデイジークリニックを探しています（美容皮膚科部門・旧心斎橋院との違いは<a href="#skin" className="text-rose-600 underline">後述</a>）。</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-green-200">
                <p className="font-bold text-green-700 mb-2">おすすめできる人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-green-500">✓</span>新宿・札幌・福岡天神エリアで通える方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>機械彫り・手彫り・コンビから技法を選びたい方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>来院前にオンラインで相談したい方</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>リップ・アイラインも合わせて検討したい方</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-red-200">
                <p className="font-bold text-red-700 mb-2">他院も検討したい人</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-red-400">✗</span>大阪・名古屋で受けたい方（大阪の旧心斎橋院は別ブランドへ改称済み）</li>
                  <li className="flex gap-2"><span className="text-red-400">✗</span>指名料を含めた総額をできるだけ抑えたい方</li>
                  <li className="flex gap-2"><span className="text-red-400">✗</span>全国の多店舗から選びたい方</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-rose-100">
              <p className="font-bold text-gray-800 mb-3">料金総額の目安（眉・新宿本院・2026年6月12日公式確認・税込）</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex justify-between border-b border-gray-100 pb-1.5"><span>眉 Natural Brow 2回（施術料）</span><span className="font-semibold">93,800円</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1.5"><span>指名料（アーティスト個人指名）</span><span className="font-semibold">22,000円〜</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1.5"><span>麻酔・初診/再診料</span><span className="font-semibold text-gray-500">公式要確認</span></li>
                <li className="flex justify-between pt-1"><span className="font-bold">指名する場合の実質総額の目安</span><span className="font-bold text-rose-600">約115,800円〜</span></li>
              </ul>
              <p className="text-xs text-gray-400 mt-3">※福岡天神院は眉2回49,800円〜（natural brow）と院により大きく異なります。指名しない場合は指名料はかかりません。最新・正確な総額は公式カウンセリングでご確認ください。</p>
            </div>
            <p className="text-xs text-gray-500 mt-4">アートメイクは医師・看護師のいる医療機関で行う医療行為です。効果・色持ち・ダウンタイム・リスクには個人差があります。</p>
          </div>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">DAZZY CLINIC 基本情報</h2>
            <table className="w-full">
              <tbody>
                {[
                  ['クリニック名', 'DAZZY CLINIC（デイジークリニック）'],
                  ['特徴', '世界で活躍する有名アーティスト監修'],
                  ['技法', '3種類（機械彫り、機械彫り+手彫り、手彫り）'],
                  ['眉毛料金', '2回 49,800円〜（福岡天神院 natural brow）〜113,800円（新宿本院 dazzy Brow）※院別料金'],
                  ['リップ料金', '2回 99,000円〜'],
                  ['アイライン料金', '2回 66,000円〜'],
                  ['モニター割引', '最大50%OFF'],
                  ['展開院', '新宿本院・札幌院・福岡天神院の3院体制（公式・2025年2月現在）。旧大阪心斎橋院は「DAILY SKIN CLINIC」へ改称'],
                  ['オンライン対応', 'オンラインカウンセリング対応'],
                  ['対応施術', '眉・リップ・アイライン・ヘアライン・ほくろ'],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-rose-50/30' : ''}><td className="p-3 font-semibold w-1/3">{label}</td><td className="p-3">{value}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3種類の技法 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">3種類の技法から選べる</h2>
          <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-8">
            <p className="text-gray-700 mb-4">DAZZY CLINICでは、世界的に活躍する有名アーティスト監修のもと、3種類の技法を用意。お客様の希望や肌質に合わせて最適な施術を提案してくれます。</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">機械彫り</h3>
                <p className="text-sm text-gray-600">マシンを使用した施術。色持ちが良く、均一で美しい仕上がりが特徴。パウダー眉のようなふんわり感を実現。</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">機械彫り+手彫り</h3>
                <p className="text-sm text-gray-600">マシンと手彫りを組み合わせたハイブリッド施術。毛並み感と色持ちを両立した、公式で人気メニューと案内される技法。</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">手彫り</h3>
                <p className="text-sm text-gray-600">手作業で1本1本描く繊細な施術。最も自然な毛並み感を実現。すっぴんでも違和感のない仕上がり。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金表 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">施術メニュー別料金表（税込）</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-rose-500 text-white">
                <tr><th className="p-3">メニュー</th><th className="p-3">料金</th><th className="p-3">回数</th><th className="p-3">備考</th></tr>
              </thead>
              <tbody>
                {pricingTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-rose-50/30' : ''}>
                    <td className="p-3 font-semibold">{row.menu}</td><td className="p-3 text-center">{row.price}</td><td className="p-3 text-center">{row.sessions}</td><td className="p-3 text-sm text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">※ 出典: デイジークリニック公式 各院ページ（2026年7月10日確認・税込）。料金は3院で別建てのため、受診予定院の最新料金は公式サイトでご確認ください。</p>
        </div>
      </section>

      {/* 実際に払う総額 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">「実際に払う総額」の目安</h2>
          <p className="text-center text-gray-500 text-sm mb-8">施術料だけでなく、<strong>指名料・麻酔・初診/再診</strong>を含めた目安です（新宿本院・眉2回・2026年6月12日公式確認・税込）。</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg text-sm border border-gray-100">
              <thead className="bg-rose-500 text-white">
                <tr><th className="p-3 text-left">項目</th><th className="p-3">金額（税込）</th><th className="p-3 text-left">含む / 含まない</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-rose-50/30"><td className="p-3 font-semibold">眉 Natural Brow 2回（施術料）</td><td className="p-3 text-center">93,800円</td><td className="p-3">基本施術料に含む</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold">指名料（アーティスト個人指名）</td><td className="p-3 text-center">22,000円〜</td><td className="p-3">指名する場合のみ別途</td></tr>
                <tr className="border-b border-gray-100 bg-rose-50/30"><td className="p-3 font-semibold">麻酔代</td><td className="p-3 text-center text-gray-500">公式要確認</td><td className="p-3">公式サイトで未確認</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold">初診料・再診料</td><td className="p-3 text-center text-gray-500">公式要確認</td><td className="p-3">公式サイトで未確認</td></tr>
                <tr className="bg-rose-50"><td className="p-3 font-bold">実質総額の目安（指名あり）</td><td className="p-3 text-center font-bold text-rose-600">約115,800円〜</td><td className="p-3 text-xs text-gray-500">指名なしなら93,800円〜</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※院・ランク・指名するアーティスト・キャンペーンで変動します。福岡天神院は眉2回49,800円〜と最安水準です。麻酔・初診/再診の有無は公式サイトで明示が確認できなかったため「要確認」としています。正確な総額はカウンセリングでご確認ください。</p>
          <div className="mt-6 bg-rose-50 border border-rose-200 rounded-xl p-5 text-center">
            <p className="text-sm text-gray-700 mb-3">dazzy（デイジークリニック）を含む主要8院の公式料金（実質総額）を、指名料・追加費用まで横断で比較できます。</p>
            <Link href="/compare/price/" className="inline-flex items-center justify-center gap-2 bg-rose-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-rose-700 transition">8院の公式料金を横断比較する →</Link>
            <p className="text-xs text-gray-500 mt-3">全項目の比較は<Link href="/compare/all-clinics/" className="text-rose-600 underline">全5クリニック比較</Link>をご覧ください。</p>
          </div>
        </div>
      </section>

      {/* 院別情報（院長・指名料） */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">院別の基本情報（院長・指名料・アクセス）</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300 text-left">
                    <th className="py-2 pr-3">院</th>
                    <th className="py-2 pr-3">院長</th>
                    <th className="py-2 pr-3">指名料</th>
                    <th className="py-2">アクセス</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200"><td className="py-2 pr-3 font-bold whitespace-nowrap">新宿本院</td><td className="py-2 pr-3">松 清士 院長</td><td className="py-2 pr-3">アーティスト個人指名 22,000円〜（KURAZONO 33,000円等）</td><td className="py-2">新宿駅徒歩5分（歌舞伎町1-6-2）</td></tr>
                  <tr className="border-b border-gray-200"><td className="py-2 pr-3 font-bold whitespace-nowrap">札幌院</td><td className="py-2 pr-3">民谷 健太郎 院長</td><td className="py-2 pr-3">ランク指名 5,500〜11,000円</td><td className="py-2">大通駅36番出口徒歩1分</td></tr>
                  <tr><td className="py-2 pr-3 font-bold whitespace-nowrap">福岡天神院</td><td className="py-2 pr-3">寺田 小百合 院長（形成外科専門医・2025年就任）</td><td className="py-2 pr-3">ランク指名 11,000〜33,000円・個人指名22,000円</td><td className="py-2">天神駅西1番出口徒歩2分</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">出典: デイジークリニック公式 各院ページ（2026年7月10日確認）。予約はWeb・電話のほか、カウンセリングはLINEのビデオ通話に対応（公式FAQ）。</p>
          </div>

          <div id="skin" className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-100 scroll-mt-20">
            <h2 className="text-xl font-bold mb-3">「dazzy skin clinic（デイジースキンクリニック）」とは？アートメイクとの関係</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              「dazzy skin clinic」（カタカナで「デイジースキンクリニック」とも表記されます）で検索される方が探しているのは、次の2つのどちらかです。
            </p>
            <ul className="space-y-2 text-sm text-gray-700 mb-3">
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">①</span><span><strong>デイジークリニックの美容皮膚科部門（SKIN）</strong>：公式サイト内にダーマペン4（9,800円〜）・HIFU・ピコレーザー・医療脱毛・点滴などを扱う美容皮膚科セクションがあります。アートメイクとは別メニューです。</span></li>
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">②</span><span><strong>旧・大阪心斎橋院の改称先</strong>：デイジークリニック心斎橋院は「DAILY SKIN CLINIC 心斎橋院」へ改称し、別ブランドとして運営されています。<strong>デイジーのアートメイクは現在、大阪では受けられません</strong>。大阪でアートメイクを受けたい方は<Link href="/compare/dazzy-vs-true-design/" className="text-rose-600 underline">心斎橋のトゥルーデザインとの比較</Link>をご覧ください。</span></li>
            </ul>
            <p className="text-xs text-gray-400">出典: デイジークリニック公式（skinセクション・院一覧）、ホットペッパービューティー（改称の記載）。2026年7月10日確認</p>
          </div>
        </div>
      </section>

      {/* メリデメ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">メリット・デメリット</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4 text-green-700">メリット</h3>
              <ul className="space-y-2">
                {['口コミ集計で仕上がり満足97%・肯定率約94%（GLAM・235件分析）', 'リップの技術評価が高い（dazzy Lip）', '福岡天神院は眉2回49,800円〜と料金が手頃', 'LINEビデオ通話でのカウンセリングに対応', '医療ローン・未成年の親権者同意など制度面の案内が明確', '美容皮膚科・医療脱毛も同グループで受けられる', '新宿・札幌・福岡天神の3都市をカバー'].map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><span className="text-green-500 font-bold">✓</span>{m}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4 text-red-700">デメリット</h3>
              <ul className="space-y-2">
                {['3院体制のため大阪・名古屋等では受けられない（旧心斎橋院は改称）', '料金・指名料が院ごとに異なり分かりにくい', '施術者ランクで仕上がりに差があるという口コミ傾向', '公式サイトの料金ページが閲覧できない状態が続いている（院別ページで要確認）', 'モニター制度の公式記載がない（第三者サイトの割引情報は要裏取り）'].map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><span className="text-red-500 font-bold">✗</span>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 良い口コミ */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">良い口コミ・評判</h2>
          <div className="space-y-4">
            {goodReviews.map((r, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="mb-2"><span className="text-sm font-semibold text-gray-600">{r.user}</span></div>
                <p className="text-gray-600 italic">&quot;{r.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 悪い口コミ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">気になる口コミ・評判</h2>
          <div className="space-y-4">
            {badReviews.map((r, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-300">
                <div className="mb-2"><span className="text-sm font-semibold text-gray-600">{r.user}</span></div>
                <p className="text-gray-600 italic">&quot;{r.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* おすすめ/おすすめしない */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">DAZZY CLINICはこんな方におすすめ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">モニター価格で安くアートメイクを受けたい方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">技法を自分で選びたい方（機械彫り・手彫り・コンビ）</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">来院前にオンラインで相談したい方</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5"><p className="font-semibold text-green-800">眉以外（リップ・アイライン）も検討中の方</p></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">名古屋・広島エリアの方 → メディカルブローがおすすめ</p></div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5"><p className="font-semibold text-red-800">アーティストを細かく指名したい方 → メディカルブローがおすすめ</p></div>
          </div>
        </div>
      </section>

      {/* 施術の流れ */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">予約から施術当日までの流れ</h2>
          <p className="text-sm text-gray-500 text-center mb-8">公式サイトの案内と医療アートメイクの一般的な流れをもとに整理（詳細は院・メニューで異なるためカウンセリングで要確認）</p>
          <div className="space-y-4">
            {[
              { step: '1. 予約・カウンセリング予約', text: '公式サイト・LINEから予約。DAZZY CLINICはオンライン（ビデオ通話）カウンセリングに対応しており、来院前に自宅からデザインや料金の相談ができます。' },
              { step: '2. カウンセリング・デザイン相談', text: '肌状態や希望のデザインを確認し、技法（機械彫り／手彫り／併用）とメニュー・担当ランクを決定。指名料や総額はこの段階で必ず確認しましょう。' },
              { step: '3. 施術当日（麻酔→施術）', text: '施術部位に麻酔クリームを塗布してから施術します。眉の場合の所要時間は2〜3時間程度が一般的です。アートメイクは医療行為のため、医師の管理下で看護師等の有資格者が施術します。' },
              { step: '4. ダウンタイム・アフターケア', text: '施術後数日は赤み・濃さが出やすく、1週間程度は患部を濡らす・こする行為を避けるのが一般的です。かさぶたが自然に剥がれると色が落ち着きます。詳しいケア方法は施術時の案内に従ってください。' },
              { step: '5. 2回目の施術', text: '医療アートメイクは1回では定着しにくく、多くのメニューが2回1セットです。1回目から1〜3ヶ月あけて2回目を行い、色と形を仕上げるのが一般的なスケジュールです。' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-5">
                <p className="font-bold text-rose-600 mb-1">{f.step}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">※個人差があります。施術可否・ダウンタイムの詳細は医師の診察・カウンセリングでご確認ください。</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">よくある質問</h2>
          <div className="space-y-4">
            {[
              { q: 'DAZZY CLINICのモニター価格はいくらですか？', a: '眉アートメイクのモニター手彫り2回で49,800円が最安です。通常価格から最大50%OFFになりますが、モニター枠には限りがあるため早めの予約をおすすめします。' },
              { q: 'DAZZY CLINICの3種類の技法の違いは？', a: '「機械彫り」はマシンで均一に色を入れるパウダー仕上げ、「手彫り」は1本1本手作業で描く自然な毛並み仕上げ、「機械彫り+手彫り」は両方を組み合わせたハイブリッド施術です。迷ったらカウンセリングで相談しましょう。' },
              { q: 'DAZZY CLINICは痛いですか？', a: '施術前に麻酔クリームを塗布するため、強い痛みを感じる方は少ないです。口コミでは「チクチクする程度」「思ったより全然痛くなかった」という声が多いです。痛みに弱い方は事前に相談しましょう。' },
              { q: 'DAZZY CLINICとメディカルブローどっちがいい？', a: 'コスパ重視＋技法の選択肢ならDAZZY CLINIC、実績数＋全国展開ならメディカルブローがおすすめです。DAZZY CLINICは3種類の技法から選べるのが強み、メディカルブローは累計23万件の実績と7Dストローク®が強みです。' },
              { q: '「dazzy skin clinic」とアートメイクのDAZZY CLINICは同じですか？', a: '「dazzy skin clinic」は美容皮膚科部門の名称で、アートメイクのDAZZY CLINIC（デイジークリニック）と同じ系列です。アートメイク目的の場合はDAZZY CLINICのアートメイクメニュー（新宿・札幌・福岡天神）が該当します。詳しくは本ページ内の「dazzy skin clinicとは？」の項をご覧ください。' },
              { q: 'オンラインカウンセリングはどうやって受けられますか？', a: '公式サイトからオンラインカウンセリングの予約が可能です。ビデオ通話で自宅にいながらデザインの相談や料金の確認ができるため、遠方の方や初めての方に特におすすめです。' },
            ].map((faq, i) => (
              <details key={i} className="bg-gray-50 rounded-lg shadow-sm">
                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-gray-100 transition-colors">Q{i + 1}. {faq.q}</summary>
                <div className="px-6 py-4 border-t text-gray-600">{faq.a}</div>
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
      <Link href="/review/medicalbrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">メディカルブローの口コミ・評判</p>
      </Link>
      <Link href="/review/creage/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">クレアージュ東京の口コミ・評判</p>
      </Link>
      <Link href="/review/the-artmake-tokyo/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">THE ARTMAKE TOKYOの口コミ・評判</p>
      </Link>
      <Link href="/review/true-design/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">トゥルーデザインクリニックの口コミ・評判</p>
      </Link>
      <Link href="/compare/technique/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">技法</span>
        <p className="font-semibold mt-1">2D・3D・4D・6Dの違いを技法別に比較</p>
      </Link>
      <Link href="/review/elm-clinic/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">クリニック</span>
        <p className="font-semibold mt-1">エルムクリニックの口コミ・料金（広島・岡山院ほか）</p>
      </Link>
      <Link href="/compare/medicalbrow-vs-dazzy/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">メディカルブロー vs デイジー徹底比較</p>
      </Link>
      <Link href="/compare/price/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">アートメイク料金比較表</p>
      </Link>
      <Link href="/compare/creage-vs-dazzy/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">クレアージュ vs デイジー徹底比較</p>
      </Link>
      <Link href="/compare/dazzy-vs-firstartmake/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">デイジー vs ファーストアートメイク徹底比較</p>
      </Link>
      <Link href="/compare/dazzy-vs-true-design/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">デイジー vs トゥルーデザイン徹底比較</p>
      </Link>
      <Link href="/compare/all-clinics/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
        <span className="text-rose-500 text-xs font-semibold">比較</span>
        <p className="font-semibold mt-1">全5クリニック完全比較</p>
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
          <h2 className="text-4xl font-bold mb-6">dazzy skin clinic（デイジークリニック）で理想の眉を</h2>
          <p className="text-xl mb-8">モニター2回49,800円〜。まずはオンラインカウンセリングから。</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://t.felmat.net/fmcl?ak=M4536K.1.297497C.G135747X" target="_blank" rel="sponsored noopener noreferrer" className="inline-block bg-white text-rose-500 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">DAZZY CLINIC公式サイトへ →</a>
            <Link href="/" className="border-2 border-white text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-white/10 transition-colors">他のクリニックと比較する</Link>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4">
        <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "DAZZY CLINICのモニター価格はいくらですか？", "acceptedAnswer": {"@type": "Answer", "text": "眉アートメイクのモニター手彫り2回で49,800円が最安です。通常価格から最大50%OFFになりますが、モニター枠には限りがあるため早めの予約をおすすめします。"}}, {"@type": "Question", "name": "DAZZY CLINICの3種類の技法の違いは？", "acceptedAnswer": {"@type": "Answer", "text": "「機械彫り」はマシンで均一に色を入れるパウダー仕上げ、「手彫り」は1本1本手作業で描く自然な毛並み仕上げ、「機械彫り+手彫り」は両方を組み合わせたハイブリッド施術です。迷ったらカウンセリングで相談しましょう。"}}, {"@type": "Question", "name": "DAZZY CLINICは痛いですか？", "acceptedAnswer": {"@type": "Answer", "text": "施術前に麻酔クリームを塗布するため、強い痛みを感じる方は少ないです。口コミでは「チクチクする程度」「思ったより全然痛くなかった」という声が多いです。痛みに弱い方は事前に相談しましょう。"}}, {"@type": "Question", "name": "DAZZY CLINICとメディカルブローどっちがいい？", "acceptedAnswer": {"@type": "Answer", "text": "コスパ重視＋技法の選択肢ならDAZZY CLINIC、実績数＋全国展開ならメディカルブローがおすすめです。DAZZY CLINICは3種類の技法から選べるのが強み、メディカルブローは累計23万件の実績と7Dストローク®が強みです。"}}, {"@type": "Question", "name": "オンラインカウンセリングはどうやって受けられますか？", "acceptedAnswer": {"@type": "Answer", "text": "公式サイトからオンラインカウンセリングの予約が可能です。ビデオ通話で自宅にいながらデザインの相談や料金の確認ができるため、遠方の方や初めての方に特におすすめです。"}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "デイジークリニック", "item": "https://artmake-hikaku.com/review/dazzy/"}]}) }} />
    </main>
  )
}
