import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'アートメイクは痛い？部位別の痛みレベルとダウンタイム完全ガイド【2026年最新】',
  description: 'アートメイクの痛みはどのくらい？眉毛・リップ・アイラインの部位別痛みレベル、麻酔の種類と効果、ダウンタイムの経過を徹底解説。痛みを軽減する5つの方法も紹介。',
  keywords: 'アートメイク 痛い,アートメイク ダウンタイム,アートメイク 痛み,アートメイク 麻酔',
  openGraph: {
    title: 'アートメイクは痛い？部位別の痛みレベルとダウンタイム完全ガイド',
    description: '部位別の痛みレベル、麻酔の効果、ダウンタイムの経過を徹底解説。',
    type: 'article',
  },
}

const painLevels = [
  {
    part: '眉毛',
    level: '毛抜き程度',
    stars: 2,
    description: '痛みレベルは比較的低く、「眉毛を毛抜きで抜く程度」と感じる方が多いです。麻酔クリームを塗布するため、施術中はほとんど痛みを感じない方もいます。骨に近い部分（眉頭・眉尻）はやや痛みを感じやすいです。',
    duration: '施術時間: 1.5〜2.5時間（デザイン含む）',
  },
  {
    part: 'リップ',
    level: 'やや痛い',
    stars: 3,
    description: '唇は神経が集中している部位のため、眉毛より痛みを感じやすいです。「唇を噛んだ時のようなジンジンする痛み」と表現する方が多いです。ただし麻酔の追加塗布で軽減可能です。施術後の腫れもやや大きめです。',
    duration: '施術時間: 2〜3時間（デザイン含む）',
  },
  {
    part: 'アイライン',
    level: 'チクチク',
    stars: 2.5,
    description: 'まぶたは皮膚が薄いため、「チクチクする」「くすぐったい」と感じる方が多いです。痛みというよりも違和感に近い感覚です。目を閉じた状態で施術するため、恐怖感から痛みを強く感じる方もいます。',
    duration: '施術時間: 1〜1.5時間',
  },
  {
    part: 'ヘアライン',
    level: '毛抜き程度',
    stars: 2,
    description: '頭皮は比較的痛みを感じにくい部位です。「毛抜きで産毛を抜く程度」の痛みで、麻酔クリームの効果も出やすいです。広範囲の施術になるため、施術時間はやや長めです。',
    duration: '施術時間: 2〜3時間',
  },
]

const anesthesiaTypes = [
  {
    type: 'クリーム麻酔（表面麻酔）',
    description: '施術部位に塗布するタイプの麻酔。最も一般的で、施術の20〜30分前に塗布します。リドカインを主成分とし、皮膚表面の感覚を鈍くします。',
    effect: '痛みを70〜80%軽減',
    duration: '効果持続: 1〜2時間',
    note: 'ほぼ全てのクリニックで使用。追加塗布も可能。',
  },
  {
    type: 'ジェル麻酔',
    description: '施術中に傷口に直接塗布するタイプ。クリーム麻酔の後に追加で使用することで、さらに痛みを軽減します。施術中でも随時追加できるのがメリットです。',
    effect: '痛みをさらに軽減',
    duration: '効果持続: 30分〜1時間',
    note: '施術中の追加麻酔として使用。特にリップで有効。',
  },
  {
    type: '局所注射麻酔（ブロック麻酔）',
    description: '注射で麻酔薬を注入するタイプ。痛みに非常に弱い方や、リップなど痛みが強い部位で使用されることがあります。歯医者の麻酔に近い感覚です。',
    effect: '痛みをほぼ完全に遮断',
    duration: '効果持続: 2〜3時間',
    note: '一部のクリニックで対応。追加費用がかかる場合あり。',
  },
]

const downtimeTimeline = [
  {
    day: '当日',
    eyebrow: '赤み・腫れあり。色が非常に濃く見える。',
    lip: '腫れが目立つ。唇が通常の1.5倍程度に腫れる。',
    eyeline: '目元の腫れ・赤み。泣いた後のような見た目。',
  },
  {
    day: '1〜2日目',
    eyebrow: '赤みが引き始める。まだ濃い印象。',
    lip: '腫れのピーク。ヘルペスのような見た目になることも。',
    eyeline: '腫れが徐々に引く。まだ目元に違和感あり。',
  },
  {
    day: '3〜4日目',
    eyebrow: 'かさぶたが形成され始める。かゆみが出ることも。',
    lip: '腫れが引き、皮剥けが始まる。乾燥しやすい。',
    eyeline: 'ほぼ腫れは引く。自然な見た目に近づく。',
  },
  {
    day: '5〜7日目',
    eyebrow: 'かさぶたが自然に剥がれ始める。色が一時的に薄く見える。',
    lip: '皮剥けが続く。色がまだらに見える時期。',
    eyeline: 'ほぼ通常通り。メイク可能な状態に。',
  },
  {
    day: '1〜2週間後',
    eyebrow: 'かさぶたが完全に取れ、色が落ち着く。最終的な仕上がりに近づく。',
    lip: '皮剥けが完了し、自然な色味に落ち着く。',
    eyeline: '完全に回復。定着した色味が確認できる。',
  },
]

const painReductionTips = [
  {
    num: 1,
    title: '生理前後の施術を避ける',
    description: '生理前後はホルモンバランスの影響で痛みに敏感になります。生理が終わって1週間後（卵胞期）が最も痛みを感じにくいタイミングです。予約時に生理周期を考慮しましょう。',
  },
  {
    num: 2,
    title: '前日の飲酒・カフェインを控える',
    description: 'アルコールやカフェインは血管を拡張させ、出血しやすくなるため痛みが増す原因になります。施術前日は飲酒を控え、当日朝のコーヒーも避けることをおすすめします。',
  },
  {
    num: 3,
    title: '十分な睡眠を取る',
    description: '睡眠不足は痛みへの閾値を下げます。施術前夜は7時間以上の睡眠を確保し、リラックスした状態で施術に臨みましょう。体調が悪い場合はリスケジュールも検討してください。',
  },
  {
    num: 4,
    title: '痛みに弱いことを事前に伝える',
    description: 'カウンセリング時に「痛みに弱い」と伝えれば、麻酔の量を増やしたり、施術中にこまめに声をかけてくれたりと、配慮してもらえます。我慢せずに正直に伝えることが大切です。',
  },
  {
    num: 5,
    title: '麻酔時間を長めに取ってもらう',
    description: '通常の麻酔時間（20〜30分）を延長してもらうことで、麻酔の効果をより深くすることができます。予約時に「麻酔を長めにお願いしたい」と伝えておきましょう。',
  },
]

const aftercareNotes = [
  {
    title: '施術部位を触らない・こすらない',
    description: 'かさぶたを無理に剥がすと色素が抜けてムラになります。かゆくても触らず、自然に剥がれるのを待ちましょう。',
  },
  {
    title: '1週間は患部の水濡れを最小限に',
    description: '洗顔時は施術部位を避け、シャワーも直接当てないようにしましょう。長風呂やサウナ、プールは1〜2週間控えてください。',
  },
  {
    title: '処方された軟膏で保湿する',
    description: 'クリニックから処方されたワセリンや軟膏を1日2〜3回塗布し、患部を乾燥から守りましょう。市販の化粧品は使用しないでください。',
  },
  {
    title: '激しい運動・飲酒を1週間控える',
    description: '発汗や血行促進は色素の定着を妨げ、腫れを悪化させる可能性があります。軽い散歩程度にとどめましょう。',
  },
  {
    title: '紫外線対策を徹底する',
    description: '施術部位が紫外線を浴びると変色や退色の原因になります。外出時は帽子やサングラスで保護し、2週間後からは日焼け止めを使用しましょう。',
  },
]

const faqs = [
  {
    q: 'アートメイクの痛みは我慢できるレベルですか？',
    a: 'はい、ほとんどの方が我慢できるレベルです。麻酔クリームを使用するため、施術中の痛みは「毛抜きで毛を抜く程度」「チクチクする程度」と感じる方が大半です。過去に施術を中断するほど痛みを感じた方は極めて稀です。痛みに弱い方も麻酔の追加で対応できます。',
  },
  {
    q: 'ダウンタイム中は仕事に行けますか？',
    a: '眉毛は翌日から通常通り出勤可能です（やや濃い印象になりますが）。リップは2〜3日間腫れが目立つため、可能であれば2〜3日の休みを取ることをおすすめします。アイラインは翌日から可能ですが、目元の腫れが気になる場合はサングラスで対応できます。',
  },
  {
    q: '麻酔が効かない体質でも施術できますか？',
    a: '麻酔が完全に効かないことは非常に稀ですが、効きにくい体質の方はいます。その場合、麻酔の量を増やす、麻酔時間を延長する、ブロック麻酔（注射）を追加するなどの対応が可能です。事前にカウンセリングで伝えておけば、適切に対応してもらえます。',
  },
  {
    q: 'ダウンタイム中にメイクはできますか？',
    a: '施術部位へのメイクは1〜2週間避けてください。かさぶたが完全に取れるまでは化粧品が傷口に入り、感染や色素の定着不良の原因になります。施術部位以外のメイクは翌日から可能です。アイラインの場合はマスカラも1週間控えましょう。',
  },
  {
    q: 'リップアートメイクのダウンタイムで食事に制限はありますか？',
    a: 'はい、施術後3〜5日間は注意が必要です。辛い食べ物、熱い食べ物、刺激の強い食べ物は避けてください。ストローを使って飲み物を飲む、食事後は優しく口元を拭くなどの工夫が有効です。色の濃い食べ物（カレー等）も色素への影響を避けるため控えめに。',
  },
  {
    q: '2回目の施術は1回目より痛いですか？',
    a: 'いいえ、2回目の方が痛みが少ないと感じる方が多いです。1回目で施術の流れを把握しているためリラックスでき、また前回の色素が残っている部分は施術が軽くなるためです。1回目で痛みが気になった方は、2回目で麻酔の調整を相談しましょう。',
  },
]

export default function PainPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-500 text-sm font-semibold mb-3">2026年最新 完全ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            アートメイクは痛い？<br />部位別の痛みレベルとダウンタイム
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            「アートメイクって痛いの？」「ダウンタイムはどのくらい？」<br className="hidden md:block" />
            部位別の痛み・麻酔・回復経過をすべて解説します。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#pain-level" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">痛みレベルを見る</a>
            <a href="#downtime" className="bg-white hover:bg-gray-50 text-rose-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border-2 border-rose-500">ダウンタイム経過</a>
          </div>
        </div>
      </section>

      {/* 結論セクション */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold">結論</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">麻酔で痛みは最小限に</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              アートメイクは針を使う施術ですが、<strong className="text-rose-600">麻酔クリームを使用するため激痛を感じることはほぼありません</strong>。
              多くの方が「思ったより痛くなかった」と感じています。
              ダウンタイムも<strong className="text-rose-600">1〜2週間で完全回復</strong>し、日常生活への影響は最小限です。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">毛抜き程度</div>
                <div className="text-sm text-gray-600">眉毛の痛みレベル<br />麻酔でほぼ無痛</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">1〜2週間</div>
                <div className="text-sm text-gray-600">ダウンタイム<br />完全回復までの期間</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-rose-500 mb-1">3種類</div>
                <div className="text-sm text-gray-600">麻酔の選択肢<br />痛みに応じて対応</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 部位別痛みレベル */}
      <section className="py-16 px-4 bg-gray-50" id="pain-level">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">部位別の痛みレベル</h2>
          <p className="text-center text-gray-600 mb-12">施術経験者の声をもとに、部位ごとの痛みを比較します</p>
          <div className="space-y-6">
            {painLevels.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-rose-500 text-white px-6 py-3 flex items-center justify-between">
                  <h3 className="font-bold text-lg">{item.part}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm opacity-90">痛み:</span>
                    <span className="bg-white text-rose-500 px-3 py-1 rounded-full text-sm font-bold">{item.level}</span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400 text-sm">
                      {'★'.repeat(Math.floor(item.stars))}{'☆'.repeat(5 - Math.floor(item.stars))}
                    </span>
                    <span className="text-gray-500 text-sm">（{item.stars}/5 痛みレベル）</span>
                  </div>
                  <p className="text-gray-500 text-sm">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 麻酔の種類と効果 */}
      <section className="py-16 px-4 bg-white" id="anesthesia">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">麻酔の種類と効果</h2>
          <p className="text-center text-gray-600 mb-12">アートメイクで使用される3種類の麻酔を解説します</p>
          <div className="space-y-6">
            {anesthesiaTypes.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-rose-100 text-rose-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{item.type}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <span className="text-green-600 text-xs font-semibold">効果</span>
                    <p className="text-gray-700 text-sm mt-1">{item.effect}</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <span className="text-blue-600 text-xs font-semibold">持続時間</span>
                    <p className="text-gray-700 text-sm mt-1">{item.duration}</p>
                  </div>
                  <div className="bg-rose-50 border border-rose-200 rounded-lg p-3">
                    <span className="text-rose-600 text-xs font-semibold">備考</span>
                    <p className="text-gray-700 text-sm mt-1">{item.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ダウンタイムの経過 */}
      <section className="py-16 px-4 bg-gray-50" id="downtime">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">ダウンタイムの経過タイムライン</h2>
          <p className="text-center text-gray-600 mb-12">施術当日から2週間後までの回復経過を部位別に解説します</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="px-4 py-4 text-left font-semibold min-w-[100px]">時期</th>
                  <th className="px-4 py-4 text-left font-semibold">眉毛</th>
                  <th className="px-4 py-4 text-left font-semibold">リップ</th>
                  <th className="px-4 py-4 text-left font-semibold">アイライン</th>
                </tr>
              </thead>
              <tbody>
                {downtimeTimeline.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-4 font-semibold text-rose-600 whitespace-nowrap">{item.day}</td>
                    <td className="px-4 py-4 text-gray-700 text-sm">{item.eyebrow}</td>
                    <td className="px-4 py-4 text-gray-700 text-sm">{item.lip}</td>
                    <td className="px-4 py-4 text-gray-700 text-sm">{item.eyeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 痛みを軽減する5つの方法 */}
      <section className="py-16 px-4 bg-gradient-to-b from-rose-50 to-pink-50" id="reduction">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">痛みを軽減する5つの方法</h2>
          <p className="text-center text-gray-600 mb-12">施術前の準備で痛みを最小限に抑えましょう</p>
          <div className="space-y-6">
            {painReductionTips.map((tip) => (
              <div key={tip.num} className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="bg-rose-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {tip.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 施術後の注意点 */}
      <section className="py-16 px-4 bg-white" id="aftercare">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">施術後の注意点</h2>
          <p className="text-center text-gray-600 mb-12">ダウンタイムを短くし、色素の定着を良くするために守るべきポイント</p>
          <div className="grid md:grid-cols-2 gap-6">
            {aftercareNotes.map((note, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-rose-100 text-rose-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                  <h3 className="font-bold text-gray-900">{note.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{note.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-rose-50 border border-rose-200 rounded-xl p-6 text-center">
            <p className="text-gray-700">
              <strong className="text-rose-600">重要：</strong>
              施術後に異常な腫れ、発熱、膿などの症状が出た場合は、すぐに施術を受けたクリニックに連絡してください。<br />
              アフターケアの指示はクリニックごとに異なるため、処方された指示に従いましょう。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">よくある質問（FAQ）</h2>
          <p className="text-center text-gray-600 mb-12">アートメイクの痛み・ダウンタイムに関する疑問にお答えします</p>
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

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">痛みが心配なら<br />まずは無料カウンセリングへ</h2>
          <p className="text-xl mb-4 opacity-90">
            痛みの感じ方には個人差があります。<br className="hidden md:block" />
            カウンセリングで麻酔やダウンタイムについて詳しく相談できます。
          </p>
          <p className="mb-8 opacity-80">技術力の高いクリニックなら痛み対策も万全です</p>
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
