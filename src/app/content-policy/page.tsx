import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '記事制作ポリシー | アートメイク比較ナビ',
  description: 'アートメイク比較ナビの記事制作ポリシーです。ユーザーファーストの情報発信と独自採点制度について説明します。',
}

export default function ContentPolicyPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: '記事制作ポリシー' }]} />

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">記事制作ポリシー</h1>
          <p className="text-center text-[#6B6560] mb-12">
            アートメイク比較ナビは、利用者に正確で有益な情報を届けるため、<br className="hidden md:inline" />
            以下のポリシーに基づいて記事を制作しています。
          </p>

          <div className="space-y-12 text-sm leading-relaxed text-[#4A4540]">

            {/* ポリシー1 */}
            <article>
              <h2 className="text-xl font-bold mb-4">1. ユーザーファーストであり続けます</h2>
              <p>
                アートメイク比較ナビは、「アートメイクに興味があるけれど、どのクリニックを選べばいいかわからない」という方に向けて、各クリニックの特性や強みをわかりやすく発信しています。
              </p>
              <p className="mt-2">
                施術部位（眉毛・リップ・アイライン）ごとの特徴、料金体系、施術者の技術力など、利用者が本当に知りたい情報を優先して掲載します。広告主の意向ではなく、利用者にとっての価値を最優先に考え、クリニック選びをサポートします。
              </p>
            </article>

            {/* ポリシー2 */}
            <article>
              <h2 className="text-xl font-bold mb-4">2. 正確かつ最新な情報発信</h2>
              <p>
                アートメイククリニックの料金やメニューは頻繁に改定されます。アートメイク比較ナビでは、各クリニックの公式サイトを定期的に確認し、料金改定やメニュー変更を速やかに反映しています。
              </p>
              <p className="mt-2">
                掲載情報は、公式サイト・公式SNS・直接問い合わせなど、信頼性の高い情報源に基づいています。万が一、掲載内容と実際の情報に相違がある場合は、お問い合わせよりご連絡ください。速やかに確認・修正いたします。
              </p>
            </article>

            {/* ポリシー3 */}
            <article>
              <h2 className="text-xl font-bold mb-4">3. 中立的な口コミ評価</h2>
              <p>
                当サイトに掲載する口コミ・評判情報は、特定のクリニックに有利になるような操作を一切行いません。良い口コミも悪い口コミも公平に掲載し、利用者が正確な判断を行えるようにしています。
              </p>
              <p className="mt-2">
                口コミ情報は、Googleマップ、SNS、口コミサイトなど複数の情報源から収集・精査しています。ステルスマーケティングや虚偽の口コミを排除し、信頼性の高い情報のみを掲載するよう努めています。
              </p>
            </article>

            {/* ポリシー4 */}
            <article>
              <h2 className="text-xl font-bold mb-4">4. わかりやすさを追求</h2>
              <p>
                アートメイクには、「4D眉」「パウダーブロウ」「マイクロブレーディング」など、初めての方にはわかりにくい専門用語が多くあります。当サイトでは、施術方法の違いや料金の比較を、図表やランキング形式を用いてわかりやすく解説しています。
              </p>
              <p className="mt-2">
                「結局どのクリニックがいいの？」という疑問にストレートに答えられるよう、比較表、料金シミュレーション、目的別おすすめなど、直感的に理解できるコンテンツ設計を心がけています。
              </p>
            </article>

            {/* 記事制作フロー */}
            <article>
              <h2 className="text-xl font-bold mb-6">記事制作フロー</h2>
              <p className="mb-6">アートメイク比較ナビでは、以下の4ステップで記事を制作しています。</p>

              <div className="space-y-4">
                <div className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <h3 className="font-bold">企画設計</h3>
                  </div>
                  <p className="ml-11 text-[#6B6560]">
                    利用者の検索意図やニーズを分析し、どのような情報が求められているかを調査します。競合サイトの分析、キーワード調査を行い、利用者にとって最も価値のある記事構成を設計します。
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <h3 className="font-bold">ライティング</h3>
                  </div>
                  <p className="ml-11 text-[#6B6560]">
                    各クリニックの公式サイト、公式SNS、口コミサイトなどから情報を収集し、正確な情報に基づいて記事を執筆します。専門用語にはわかりやすい解説を添え、読みやすい文章を心がけます。
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <h3 className="font-bold">公開</h3>
                  </div>
                  <p className="ml-11 text-[#6B6560]">
                    執筆された記事は、事実確認・校正を経た上で公開します。料金やメニュー情報は公式サイトと照合し、誤りがないことを確認してから掲載します。
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <h3 className="font-bold">更新</h3>
                  </div>
                  <p className="ml-11 text-[#6B6560]">
                    公開後も定期的に情報を見直し、料金改定やメニュー変更があれば速やかに更新します。古い情報が残り続けないよう、全記事を定期的にチェックしています。
                  </p>
                </div>
              </div>
            </article>

            {/* 独自100点採点制度 */}
            <article>
              <h2 className="text-xl font-bold mb-6">独自100点採点制度</h2>
              <p className="mb-6">
                アートメイク比較ナビでは、各クリニックを独自の100点満点制度で評価しています。客観的で透明性の高い評価を行うため、以下の5つの評価基準を設定しています。
              </p>

              <div className="space-y-4">
                <div className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">料金</h3>
                    <span className="bg-[var(--gold)] text-white px-3 py-1 rounded-full text-xs font-bold">30点</span>
                  </div>
                  <p className="text-[#6B6560]">
                    施術料金の相場比較、指名料・麻酔代等の追加費用の有無、リタッチ料金、総額のわかりやすさを評価します。コストパフォーマンスの高さを重視しています。
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">実績</h3>
                    <span className="bg-[var(--gold)] text-white px-3 py-1 rounded-full text-xs font-bold">25点</span>
                  </div>
                  <p className="text-[#6B6560]">
                    症例数、施術実績、施術者の資格・経験年数、メディア掲載実績などを総合的に評価します。豊富な実績は技術力の裏付けとなります。
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">カウンセリング</h3>
                    <span className="bg-[var(--gold)] text-white px-3 py-1 rounded-full text-xs font-bold">20点</span>
                  </div>
                  <p className="text-[#6B6560]">
                    カウンセリングの丁寧さ、デザイン提案力、施術前の説明の充実度、利用者の希望をヒアリングする姿勢を評価します。満足のいく仕上がりにはカウンセリングの質が不可欠です。
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">安全性</h3>
                    <span className="bg-[var(--gold)] text-white px-3 py-1 rounded-full text-xs font-bold">15点</span>
                  </div>
                  <p className="text-[#6B6560]">
                    医療機関としての体制、使用する色素の安全性（FDA認可等）、衛生管理、アフターケアの充実度を評価します。アートメイクは医療行為であり、安全性は最重要項目です。
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">アクセス</h3>
                    <span className="bg-[var(--gold)] text-white px-3 py-1 rounded-full text-xs font-bold">10点</span>
                  </div>
                  <p className="text-[#6B6560]">
                    最寄り駅からの距離、院数（通いやすさ）、営業時間、予約の取りやすさを評価します。複数回の通院が必要なアートメイクでは、通いやすさも重要な要素です。
                  </p>
                </div>
              </div>
            </article>

            {/* 運営情報 */}
            <article>
              <h2 className="text-xl font-bold mb-4">運営情報</h2>
              <div className="p-4 bg-[var(--blush)] rounded-xl">
                <p>運営会社：株式会社MediaX</p>
                <p>所在地：〒150-0011 東京都渋谷区東一丁目27番10号</p>
                <p>サイト名：アートメイク比較ナビ</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
