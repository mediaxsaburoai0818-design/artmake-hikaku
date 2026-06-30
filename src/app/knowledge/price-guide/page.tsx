import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '眉毛アートメイク1回いくら？料金相場と総額ガイド【2026年6月】',
  description: 'アートメイクの料金相場を部位別（眉・リップ・アイライン）に徹底解説。1回・2回・3回の違い、5クリニック料金比較表、追加費用の注意点、総額シミュレーション、節約テクニックまで網羅。',
  keywords: '眉毛アートメイク 1回 いくら,アートメイク 料金相場,アートメイク 値段,眉毛アートメイク 料金,アートメイク 費用',
  openGraph: {
    title: '眉毛アートメイク1回いくら？料金相場と総額ガイド',
    description: 'アートメイクの料金相場・総額費用を徹底解説。',
    type: 'article',
  },
}

const partsPrices = [
  { part: '眉（毛並み）', low: '30,000円', high: '80,000円', average: '55,000円', note: '最も人気の部位。技法により価格差あり。' },
  { part: '眉（パウダー）', low: '40,000円', high: '90,000円', average: '60,000円', note: 'ふんわりメイク風。毛並みより高めの傾向。' },
  { part: 'リップ', low: '50,000円', high: '120,000円', average: '80,000円', note: '2回セットが基本。ダウンタイムやや長め。' },
  { part: 'アイライン（上）', low: '30,000円', high: '70,000円', average: '50,000円', note: 'ナチュラルからしっかりラインまで対応。' },
  { part: 'アイライン（下）', low: '25,000円', high: '60,000円', average: '40,000円', note: '上ラインとセットで割引になることも。' },
  { part: 'ヘアライン', low: '50,000円', high: '100,000円', average: '75,000円', note: '生え際の形を整える。範囲により価格変動。' },
  { part: 'ほくろ', low: '10,000円', high: '20,000円', average: '15,000円', note: '1箇所あたり。施術時間は短い。' },
]

const sessionComparison = [
  { sessions: '1回施術', price: '25,000〜50,000円', merit: '費用が安い。お試しに最適。', demerit: '色の定着が弱い。薄くなりやすい。', recommend: 'まず試してみたい方、予算を抑えたい方' },
  { sessions: '2回施術', price: '50,000〜100,000円', merit: '最も一般的。色の定着が安定。', demerit: '1回より費用がかかる。', recommend: '初めての方、しっかり定着させたい方' },
  { sessions: '3回施術', price: '100,000〜150,000円', merit: '最も自然で美しい仕上がり。慎重にデザイン調整できる。', demerit: '費用が最も高い。通院回数が多い。', recommend: '完璧な仕上がりを求める方、慎重派の方' },
]

const clinicPrices = [
  { name: 'メディカルブロー', score: 95, eyebrow: '28,000円〜', lip: '60,000円〜', eyeline: '30,000円〜', sessions: '1回〜', nomination: '5,000〜25,000円', anesthesia: '無料', retouch: '20,000円〜' },
  { name: 'クレアージュ東京', score: 92, eyebrow: '132,000円', lip: '154,000円', eyeline: '88,000円', sessions: '3回', nomination: '無料', anesthesia: '無料', retouch: '44,000円〜' },
  { name: 'デイジークリニック', score: 90, eyebrow: '49,800円〜', lip: '99,000円〜', eyeline: '55,000円〜', sessions: '2回', nomination: '要確認', anesthesia: '無料', retouch: '30,000円〜' },
  { name: 'ファーストアートメイク', score: 87, eyebrow: '75,000円〜', lip: '90,000円〜', eyeline: '45,000円〜', sessions: '2回', nomination: '無料', anesthesia: '無料', retouch: '25,000円〜' },
  { name: 'トゥルーデザインクリニック', score: 85, eyebrow: '70,000円〜', lip: '85,000円〜', eyeline: '40,000円〜', sessions: '2回', nomination: '無料', anesthesia: '込み', retouch: '28,000円〜' },
]

const additionalCosts = [
  { item: '指名料', range: '0〜25,000円', desc: 'クレアージュ・ファーストアートメイク・トゥルーデザインは無料。メディカルブローは施術者ランクにより5,000〜25,000円。' },
  { item: '麻酔代', range: '0〜3,000円', desc: 'ほとんどのクリニックが施術料金に含む。一部クリニックでは別途請求の場合あり。' },
  { item: 'リタッチ代', range: '20,000〜50,000円', desc: '初回施術後1〜2年で色が薄くなった際の追加施術。2回目以降は割引価格が適用されることが多い。' },
  { item: 'カウンセリング料', range: '0〜5,000円', desc: '大手クリニックは無料が多い。事前に確認を。' },
  { item: 'パッチテスト代', range: '0〜3,000円', desc: 'アレルギー体質の方は事前にパッチテスト推奨。無料のクリニックも多い。' },
]

const savingTips = [
  { num: 1, title: 'モニター制度を活用する', desc: '症例写真の提供を条件に、最大50〜60%OFFで施術を受けられます。メディカルブローなら1回28,000円から。' },
  { num: 2, title: '初回限定キャンペーンを狙う', desc: '多くのクリニックが新規患者向けの割引キャンペーンを実施。公式サイトやSNSで最新情報をチェック。' },
  { num: 3, title: '指名料無料のクリニックを選ぶ', desc: 'クレアージュ東京のように指名料が無料のクリニックなら、トップ施術者を選んでも追加費用ゼロ。' },
  { num: 4, title: '平日・オフピーク時間に予約する', desc: '平日割引やオフピーク割引を実施しているクリニックも。3,000〜5,000円程度の割引が期待できます。' },
  { num: 5, title: '複数部位のセット割を利用する', desc: '眉＋リップ、眉＋アイラインなど複数部位を同時に施術すると、セット割引が適用されることがあります。' },
]

const faqs = [
  { q: '眉毛アートメイク1回いくらですか？', a: '眉毛アートメイク1回の相場は25,000〜80,000円です。メディカルブローなら1回28,000円〜と業界最安クラス。クレアージュ東京は3回132,000円（1回あたり44,000円）で、自然な仕上がりが特徴です。' },
  { q: 'アートメイクは1回と2回どちらがいいですか？', a: '初めての方には2回施術がおすすめです。1回目で色を入れ、2回目で微調整・色の補充を行うことで、自然で長持ちする仕上がりになります。1回のみだと色の定着が弱く、2〜3ヶ月で薄くなることもあります。' },
  { q: 'アートメイクの総額はいくらになりますか？', a: '眉2回セットの総額目安は50,000〜150,000円です。施術料金に加え、指名料（0〜25,000円）、リタッチ代（20,000〜50,000円/回）も考慮すると、2年間の総額は80,000〜200,000円程度です。' },
  { q: 'リタッチは何回必要ですか？', a: 'アートメイクは1〜3年で徐々に薄くなるため、色を維持するには1〜2年に1回のリタッチが一般的です。初回2回施術後、最初のリタッチは1〜1.5年後が目安。肌質やライフスタイルにより個人差があります。' },
  { q: '保険は適用されますか？', a: 'アートメイクは美容目的の自由診療のため、健康保険は適用されません。ただし、医療用アートメイク（無毛症や傷跡のカバーなど）の場合は保険適用となるケースもあります。' },
  { q: '分割払いやローンは利用できますか？', a: '多くのクリニックでクレジットカードの分割払いや医療ローンに対応しています。メディカルブロー・デイジークリニックなどは月々3,000円程度からの分割も可能です。' },
]

export default function PriceGuidePage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: '料金ガイド' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">PRICE GUIDE & COST SIMULATION</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイクの料金相場<br className="md:hidden" />総額ガイド2026</h1>
            <p className="text-[#6B6560] leading-relaxed">
              「眉毛アートメイク1回いくら？」「総額でいくらかかる？」<br />
              部位別の料金相場から追加費用、節約テクニックまで徹底解説します。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>部位別の料金相場（眉・リップ・アイライン・ヘアライン・ほくろ）</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>1回・2回・3回施術の違いとコスパ比較</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>5クリニックの料金比較表</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>見落としがちな追加費用と総額シミュレーション</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>賢く節約する5つのテクニック</li>
            </ul>
          </div>

          {/* 部位別料金相場 */}
          <h2 className="text-2xl font-bold mb-6 text-center">部位別料金相場</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full glass-card rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white">
                  <th className="p-4 text-left text-sm">部位</th>
                  <th className="p-4 text-center text-sm">安値</th>
                  <th className="p-4 text-center text-sm">高値</th>
                  <th className="p-4 text-center text-sm">平均</th>
                  <th className="p-4 text-left text-sm">備考</th>
                </tr>
              </thead>
              <tbody>
                {partsPrices.map((p, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-[var(--blush)]' : 'bg-white/50'}>
                    <td className="p-4 text-sm font-bold">{p.part}</td>
                    <td className="p-4 text-center text-sm">{p.low}</td>
                    <td className="p-4 text-center text-sm">{p.high}</td>
                    <td className="p-4 text-center text-sm font-bold text-[var(--gold)]">{p.average}</td>
                    <td className="p-4 text-sm text-[#6B6560]">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-[#8B8580] mt-2 text-center">※ 2回施術セットの相場です。1回のみの場合は上記の50〜60%が目安。</p>
          </div>

          {/* 1回vs2回vs3回 */}
          <h2 className="text-2xl font-bold mb-6 text-center">1回 vs 2回 vs 3回施術の違い</h2>
          <div className="space-y-4 mb-10">
            {sessionComparison.map((s, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-4 py-1 rounded-full text-sm font-bold">{s.sessions}</span>
                  <span className="font-bold text-[var(--gold)]">{s.price}</span>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-[#F0FAF0] rounded-xl p-3">
                    <p className="text-xs font-bold text-green-700 mb-1">メリット</p>
                    <p className="text-sm text-[#6B6560]">{s.merit}</p>
                  </div>
                  <div className="bg-[#FFF0F0] rounded-xl p-3">
                    <p className="text-xs font-bold text-red-400 mb-1">デメリット</p>
                    <p className="text-sm text-[#6B6560]">{s.demerit}</p>
                  </div>
                  <div className="bg-[var(--blush)] rounded-xl p-3">
                    <p className="text-xs font-bold text-[var(--gold)] mb-1">おすすめの方</p>
                    <p className="text-sm text-[#6B6560]">{s.recommend}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 5クリニック料金比較表 */}
          <h2 className="text-2xl font-bold mb-6 text-center">5クリニック料金比較表</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full glass-card rounded-2xl overflow-hidden text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white">
                  <th className="p-3 text-left">クリニック</th>
                  <th className="p-3 text-center">眉</th>
                  <th className="p-3 text-center">リップ</th>
                  <th className="p-3 text-center">回数</th>
                  <th className="p-3 text-center">指名料</th>
                  <th className="p-3 text-center">麻酔</th>
                  <th className="p-3 text-center">リタッチ</th>
                </tr>
              </thead>
              <tbody>
                {clinicPrices.map((c, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-[var(--blush)]' : 'bg-white/50'}>
                    <td className="p-3">
                      <span className="font-bold">{c.name}</span>
                      <span className="badge-gold text-xs ml-1">{c.score}点</span>
                    </td>
                    <td className="p-3 text-center font-bold text-[var(--gold)]">{c.eyebrow}</td>
                    <td className="p-3 text-center">{c.lip}</td>
                    <td className="p-3 text-center">{c.sessions}</td>
                    <td className="p-3 text-center">{c.nomination}</td>
                    <td className="p-3 text-center">{c.anesthesia}</td>
                    <td className="p-3 text-center">{c.retouch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-[#8B8580] mt-2 text-center">※ 料金は税込の目安です。キャンペーン・施術者ランクにより変動します。</p>
          </div>

          {/* 追加費用の注意 */}
          <h2 className="text-2xl font-bold mb-6 text-center">見落としがちな追加費用</h2>
          <div className="space-y-3 mb-10">
            {additionalCosts.map((c, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="font-bold">{c.item}</h3>
                  <span className="text-[var(--gold)] font-bold text-sm">{c.range}</span>
                </div>
                <p className="text-[#6B6560] text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* 総額シミュレーション */}
          <h2 className="text-2xl font-bold mb-6 text-center">総額シミュレーション</h2>
          <div className="glass-card rounded-2xl p-6 mb-10 border border-[var(--gold-light)]">
            <p className="text-[#6B6560] text-sm mb-4">眉アートメイク2回施術＋1回リタッチの2年間総額目安</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[var(--blush)] rounded-xl p-5 text-center">
                <p className="text-xs text-[#8B8580] mb-1">コスパ重視</p>
                <p className="font-bold text-lg">メディカルブロー</p>
                <p className="text-2xl font-bold text-[var(--gold)] mt-2">76,000円〜</p>
                <p className="text-xs text-[#8B8580] mt-2">28,000円×2回＋リタッチ20,000円</p>
              </div>
              <div className="bg-[var(--blush)] rounded-xl p-5 text-center">
                <p className="text-xs text-[#8B8580] mb-1">バランス型</p>
                <p className="font-bold text-lg">デイジークリニック</p>
                <p className="text-2xl font-bold text-[var(--gold)] mt-2">129,800円〜</p>
                <p className="text-xs text-[#8B8580] mt-2">49,800円×2回＋リタッチ30,000円</p>
              </div>
              <div className="bg-[var(--blush)] rounded-xl p-5 text-center">
                <p className="text-xs text-[#8B8580] mb-1">品質重視</p>
                <p className="font-bold text-lg">クレアージュ東京</p>
                <p className="text-2xl font-bold text-[var(--gold)] mt-2">176,000円〜</p>
                <p className="text-xs text-[#8B8580] mt-2">132,000円（3回）＋リタッチ44,000円</p>
              </div>
            </div>
          </div>

          {/* 節約テクニック */}
          <h2 className="text-2xl font-bold mb-6 text-center">賢く節約する5つのテクニック</h2>
          <div className="space-y-4 mb-10">
            {savingTips.map((t) => (
              <div key={t.num} className="glass-card rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">{t.num}</span>
                  <h3 className="font-bold">{t.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm ml-11">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* 実質総額 */}
          <h2 className="text-2xl font-bold mb-3 text-center">「実質総額」で見る眉アートメイク料金</h2>
          <p className="text-center text-gray-500 text-sm mb-6">施術代だけでなく、指名料・麻酔代・初診料・リタッチまで含めた“結局いくら払うか”で比較しました（2026年6月12日 各公式サイト調査）</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-rose-50 text-left">
                  <th className="p-2 border-b-2 border-rose-200">クリニック</th>
                  <th className="p-2 border-b-2 border-rose-200">眉の基本料金</th>
                  <th className="p-2 border-b-2 border-rose-200">1回あたり換算</th>
                  <th className="p-2 border-b-2 border-rose-200">主な追加費用</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200"><td className="p-2 font-bold">トゥルーデザイン</td><td className="p-2">2回 40,000円(2D)</td><td className="p-2 font-bold text-rose-600">20,000円</td><td className="p-2">指名料1,500円/回・初診0円・再診1,500円</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2 font-bold">クレアージュ</td><td className="p-2">3回 132,000円</td><td className="p-2 font-bold text-rose-600">44,000円</td><td className="p-2">初診料3,300円・指名料は公式記載なし</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2 font-bold">デイジー(福岡)</td><td className="p-2">2回 49,800円〜</td><td className="p-2 font-bold text-rose-600">24,900円〜</td><td className="p-2">指名料11,000〜33,000円(院による)</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2 font-bold">ファースト</td><td className="p-2">モニター2回 88,000円〜</td><td className="p-2 font-bold text-rose-600">44,000円〜</td><td className="p-2">クリーム麻酔0円・初診0円・指名5,500円〜</td></tr>
                <tr><td className="p-2 font-bold">メディカルブロー</td><td className="p-2">2回 90,000円〜(ランク別)</td><td className="p-2 font-bold text-rose-600">45,000円〜</td><td className="p-2">指名料10,000円〜・初診2,200円</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
            <h3 className="font-bold text-gray-900 mb-2">「安く見えて高くなる」3つの落とし穴</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>① <strong>回数の違い</strong>: クレアージュは1回の表示でも3回セットが基本。2回設計の他社と単純比較せず「1回あたり換算」で見るのが正解です。</li>
              <li>② <strong>指名料</strong>: 人気アーティストやランク指名で1回1,500円〜33,000円が上乗せ。2回受ければその倍かかります。</li>
              <li>③ <strong>リタッチ別料金</strong>: 色は1〜2年で薄れるため、維持にはリタッチ代（眉で2〜6万円程度）が継続的に発生します。初回総額だけでなく維持費も確認しましょう。</li>
            </ul>
            <p className="text-xs text-gray-400 mt-3">出典: 各クリニック公式サイト（2026年6月12日確認）。料金・キャンペーンは変動します。詳細は<a href="/compare/price/" className="text-rose-600 underline">料金比較DB</a>をご覧ください。</p>
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
            <h2 className="text-xl font-bold mb-4">料金で後悔しないクリニック選びを</h2>
            <p className="text-[#6B6560] mb-6">総額で比較すれば、本当にコスパの良いクリニックが見えてきます。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div>
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/compare/price/" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">料金比較表</p>
                <p className="text-xs text-[#8B8580] mt-1">全クリニックの料金を一覧比較</p>
              </Link>
              <Link href="/purpose/cheap/" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">安いクリニック特集</p>
                <p className="text-xs text-[#8B8580] mt-1">コスパ重視の選び方</p>
              </Link>
              <Link href="/purpose/monitor/" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">モニター募集情報</p>
                <p className="text-xs text-[#8B8580] mt-1">最大60%OFFで受ける方法</p>
              </Link>
              <Link href="/compare/all-clinics/" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">全5クリニック完全比較</p>
                <p className="text-xs text-[#8B8580] mt-1">15項目で徹底ランキング</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4">
        <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://artmake-hikaku.com/"}, {"@type": "ListItem", "position": 2, "name": "料金ガイド", "item": "https://artmake-hikaku.com/knowledge/price-guide/"}]}) }} />
    </main>
  )
}
