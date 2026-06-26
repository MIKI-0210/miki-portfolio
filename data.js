/**
 * ========================================
 *  みきのポートフォリオ — コンテンツデータ
 * ========================================
 *
 * このファイルを編集するだけで、サイトに自動反映されます。
 * ① 写真ギャラリーを追加 → GALLERY_ITEMS に追記
 * ② ツール動画を追加    → TOOL_VIDEOS に追記
 * ③ Gemを追加          → GEM_ITEMS に追記
 *
 * タグは自由に作れます。同じ文字列を使うと自動でフィルターに追加されます。
 */

// ─────────────────────────────────────────
//  サイト基本設定
// ─────────────────────────────────────────
const SITE_CONFIG = {
  name: "Miki",
  tagline: "Sweet Tech, Beautiful Life.",
  subtitle: "パティシエが作った、AIと菓子の世界",
  description: "お菓子の現場で培った「見た目と精度へのこだわり」をAIに込めました。\nフードビジネスに寄り添うツールたちをご紹介します。\n\n現場を知るパティシエだからこそ作れる道具がある。\n飲食 × AI で、業界のDXをもっと身近にすることを目指しています。",
  lineUrl: "https://lin.ee/y12dk9P",
  xUrl: "https://x.com/campagne202504",
  lineGiftText: "お友だち登録で、素敵なプレゼントをお届けします 🎁",
  contactFormUrl: "https://script.google.com/macros/s/AKfycbxOG1XdWm12K-mTWrmMdfu5V0ThddtPzwiuL-dHQ0Gqr08kUp4rryS0ltNML11Lw3m2/exec",
};

// ─────────────────────────────────────────
//  写真ギャラリー
// ─────────────────────────────────────────
// prompt: クリックしたときに表示するAIプロンプトや制作メモ
// tags: ["nanobanana", "断面図", "キッチン", etc.]
const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "キャラメルとスパイスティーのムース断面図",
    src: "images/gallery/Gemini_Generated_Image_.png",
    prompt: "# 制約事項画像内に、ケーキとテキストラベル以外の余計なカトラリー（フォークなど）や過度な装飾品は置かないでください。ケーキと情報に集中させます。テキストラベルの英語は、簡潔で正確な表現を使用してください。# ユーザーへの対応ユーザーから画像が提供されたら、まず「素晴らしいケーキですね！内部構造の指定はありますか？なければ、私が外観から魅力的な断面を推測して作成します」と問いかけてください。ユーザーの回答を待ってから、最終的な画像を生成します（または、最初の指示で画像と構造が両方提供されている場合は、即座に生成を開始します）。",
    caption: "キャラメルのムースとイチジクの赤ワイン煮とスパイスのきいた紅茶の組み合わせ。ミルクチョコでまろやかさを演出した大人なケーキ",
    tags: ["断面図"],
  },
  {
    id: "g2",
    title: "タルトレット　SAKURA 断面図",
    src: "images/gallery/桜ムースタルトの断面図.png",
    prompt: "桜の紅茶を使用したムースタルトを断面図に。sakura-scented tea strawberry mousse / strawberry jelly core / almond cream の層を英日バイリンガルで注釈付き生成。",
    caption: "桜の紅茶を使用したムースタルト。ふわっとしたくちどけのストロベリームースと桜の香りがふわっと鼻を抜ける。お花見のおともに",
    tags: ["断面図"],
  },
  {
    id: "g3",
    title: "ストロベリーと紅茶のパフェスケッチ",
    src: "images/gallery/層状デザートのスケッチ.png",
    prompt: "Gemini で生成。ワイングラス仕立てのパフェをスケッチ風断面図で表現。strawberry-infused black tea jelly / amaretti cookies / ice cream の構成を詳細プロンプトで指定。",
    caption: "イチゴの香りの紅茶を使用した香り高いパフェ。ゼリーやフレッシュのイチゴ、マカロンの始祖のアマレッティに２種類のアイス。トッピングのチョコレートもお茶を加えたお茶好きにはもってこいのパフェの完成",
    tags: ["断面図"],
  },
  {
    id: "g4",
    title: "ココナッツの香りの紅茶とパイナップルのパフェスケッチ",
    src: "images/gallery/ココナッツティーパフェの分解図 (1).png",
    prompt: "Gemini で生成。パフェの分解図（exploded view）として各素材を上から順に配置。英日バイリンガルの注釈で素材感を視覚的に伝える構成。",
    caption: "ココナッツの香りとパイナップルで南国の雰囲気に。グラス上部のパイナップルとバジルのグラニテで清涼感、中盤のメレンゲやパインの紅茶煮で満足感。暑さ吹き飛ぶパフェの完成",
    tags: ["断面図"],
  },
  {
    id: "g5",
    title: "ドゥーブルフロマージュ",
    src: "images/gallery/Gemini_Generated_Image_pz5q2bpz5q2bpz5q.png",
    prompt: "Gemini で生成した断面図イラスト。",
    caption: "ベイクドチーズケーキとレアチーズケーキの２層仕立て。センターにオレンジのゼリーとグラサージュでさわやかに。アクセントでダージリンティーのクリームやキャラメルソースで味変を",
    tags: ["断面図"],
  },
  {
    id: "g6",
    title: "イチゴとアールグレイのケーキ",
    src: "images/gallery/Gemini_Generated_Image_wz7bivwz7bivwz7b.png",
    prompt: "Gemini で生成した断面図イラスト。",
    caption: "ストロベリームースの中にアールグレイのブリュレを閉じ込めたムース。ホワイトチョコのグラサージュで甘めの仕上がりに。ビターなコーヒーやシンプルな紅茶との相性抜群",
    tags: ["断面図"],
  },
  {
    id: "g7",
    title: "タルトレット　オ　シトロン",
    src: "images/gallery/Gemini_Generated_Image_esz9x8esz9x8esz9.png",
    prompt: "Gemini で生成した断面図イラスト。",
    caption: "レモンタルトをロココ調にアレンジ。タルトの上に薄くチョコレートクリームをひろげて、その上に酸味抜群のレモンカード。周りはレモン香るルイボスティを抽出したクリーム。さっぱりとでも食べた感が欲しい時用のケーキ",
    tags: ["断面図"],
  },
  {
    id: "g8",
    title: "オートンヌ（紫芋とシナモンの紅茶のケーキ）",
    src: "images/gallery/Gemini_Generated_Image_pcfxwwpcfxwwpcfx.png",
    prompt: "Gemini で生成した断面図イラスト。",
    caption: "紫芋のスイートポテトとシナモンの香るクリーム、アクセントにラズベリーの酸味のあるジャム。和になりやすい紫芋を洋菓子にアレンジしたケーキ",
    tags: ["断面図"],
  },
  {
    id: "g9",
    title: "ストロベリーサンデー",
    src: "images/gallery/Gemini_Generated_Image_gi6iyygi6iyygi6i.png",
    prompt: "Gemini で生成した断面図イラスト。",
    caption: "これでもか！とふんだんに苺を使用。イチゴのゼリー、ジャム、マカロン、アイス、メレンゲ、フレッシュイチゴとイチゴ好きのための一品。",
    tags: ["断面図"],
  },
  {
    id: "g10",
    title: "紅茶とストロベリーパフェ",
    src: "images/gallery/Gemini_Generated_Image_4f8t814f8t814f8t.png",
    prompt: "Gemini で生成した断面図イラスト。",
    caption: "写真テイストバージョンの断面図",
    tags: ["断面図"],
  },
  // ↓ ここに新しい写真を追加してください ↓
  // nanobanana作品を追加するときはtagsを ["ケーキビフォーアフター"] に
  // {
  //   id: "g11",
  //   title: "作品名",
  //   src: "images/gallery/filename.png",
  //   prompt: "使ったプロンプトや制作メモ",
  //   caption: "ひとこと説明",
  //   tags: ["ケーキビフォーアフター"],
  // },
];

// ─────────────────────────────────────────
//  ツール紹介動画
// ─────────────────────────────────────────
// videoUrl: YouTubeのURL、またはMP4ファイルパス
// buyUrl: 購入ページのURL
// videoType: "youtube" | "mp4"
const TOOL_VIDEOS = [
  {
    id: "v1",
    title: "シフト管理ツール",
    subtitle: "人時生産性を数字で改善",
    videoUrl: "https://www.youtube.com/embed/jpq87yKrLCE",
    videoType: "youtube",
    description: "パッと見でシフトの過不足を確認。数字に基づいた適正な人員配置で人時生産性を高め、店舗の利益構造を根本から改善します。",
    buyUrl: "https://youtu.be/jpq87yKrLCE",
    buyLabel: "詳細を見る",
    price: "",
    tags: ["自動化"],
  },
  {
    id: "v2",
    title: "タスク管理",
    subtitle: "Googleカレンダー連携 × AIフィードバック",
    videoUrl: "https://www.youtube.com/embed/Ljl9Bx3wLTc",
    videoType: "youtube",
    description: "モチベーションに合わせて、鬼軍曹か優しい先生か選べるフィードバック付き。Googleカレンダー連携で見やすさばっちりのタスク管理表。",
    buyUrl: "https://youtu.be/Ljl9Bx3wLTc",
    buyLabel: "詳細を見る",
    price: "",
    tags: ["管理"],
  },
  {
    id: "v3",
    title: "情報スクレイピング",
    subtitle: "欲しい情報だけをLINE/Discord/Slackへ",
    videoUrl: "https://www.youtube.com/embed/tQi0dKVy7U4",
    videoType: "youtube",
    description: "ほしい情報だけがLINE/Discord/Slackに！その時だけでも、毎週8時設定も可能。スプレッドシート管理で、過去の記録や気になる情報をストック管理。",
    buyUrl: "https://youtu.be/tQi0dKVy7U4",
    buyLabel: "詳細を見る",
    price: "",
    tags: ["自動化"],
  },
  {
    id: "v4",
    title: "PDFデータ抽出",
    subtitle: "レシートをファイルに入れて月1転記",
    videoUrl: "https://www.youtube.com/embed/PcG8hvmcA-g",
    videoType: "youtube",
    description: "PDFデータやレシートをフォルダに入れて月1転記するだけ。簡単支出管理システムで、経理の手間をぐっと減らします。",
    buyUrl: "https://youtu.be/PcG8hvmcA-g",
    buyLabel: "詳細を見る",
    price: "",
    tags: ["自動化"],
  },
  {
    id: "v5",
    title: "顧客リスト Day3",
    subtitle: "AI分析 × 個別配信でファンを作る",
    videoUrl: "https://www.youtube.com/embed/1g3F6BnZJ-M",
    videoType: "youtube",
    description: "AI分析×個別配信でファンを作る。顧客管理からLINE・メール送付まで、接客の精度を一段階引き上げるDX。",
    buyUrl: "https://youtu.be/1g3F6BnZJ-M",
    buyLabel: "詳細を見る",
    price: "",
    tags: ["管理"],
  },
  {
    id: "v6",
    title: "LovartAI 動画",
    subtitle: "AIで動画・アニメ・雑誌風デザインを生成",
    videoUrl: "https://www.youtube.com/embed/hrTpVo3pz_0",
    videoType: "youtube",
    description: "LovartAIで作った動画です。アニメや10秒動画、雑誌風や写真風のデザインを作れます。イメージ画像やジャンルの違う画像生成も可能。",
    buyUrl: "https://youtu.be/hrTpVo3pz_0",
    buyLabel: "詳細を見る",
    price: "",
    tags: ["Tool"],
  },
  {
    id: "v7",
    title: "原価計算ツール",
    subtitle: "材料費を自動計算",
    videoUrl: "",   // 動画URL準備中
    videoType: "youtube",
    description: "材料費を自動計算します。販売価格から原価率を即算出。値付けの根拠が数字でわかるから、自信を持って価格設定できます。",
    buyUrl: "",
    buyLabel: "準備中",
    price: "",
    tags: ["計算"],
  },
  {
    id: "v8",
    title: "動画コンテスト受賞作品",
    subtitle: "Miricanvas主催 奨励賞",
    videoUrl: "https://www.youtube.com/embed/OalTPNPKD4M",
    videoType: "youtube",
    description: "【Miricanvas】主催の動画コンテスト奨励賞作品。パティシエの日常をアニメ風に描いた作品です。",
    buyUrl: "https://youtube.com/shorts/OalTPNPKD4M?feature=share",
    buyLabel: "作品を見る",
    price: "",
    tags: ["作品紹介"],
  },
  // ↓ ここに新しい動画を追加してください ↓
  // {
  //   id: "v9",
  //   title: "ツール名",
  //   subtitle: "サブタイトル",
  //   videoUrl: "https://www.youtube.com/embed/ZZZZZZZZZ",
  //   videoType: "youtube",
  //   description: "ツールの説明文",
  //   buyUrl: "https://youtu.be/ZZZZZZZZZ",
  //   buyLabel: "詳細を見る",
  //   price: "",
  //   tags: ["タグ名"],
  // },
];

// ─────────────────────────────────────────
//  Gemini Gems（GIF紹介）
// ─────────────────────────────────────────
// gifUrl: GIFファイルのパス（または静止画）
// type: "gem" | "tool" など自由に設定可
const GEM_ITEMS = [
  {
    id: "gem1",
    title: "クレーム対策Gem",
    label: "Gemini Gem",
    emoji: "🛡️",
    gifUrl: "images/gems/claim-response.gif",
    description: "お客様からのクレームメールに対し、誠実かつ的確な返信文をAIが生成。トーンと法的リスクを考慮した文章で、初動対応の質を高めます。",
    tags: ["Gem", "接客"],
  },
  {
    id: "gem2",
    title: "口コミ返信Gem",
    label: "Gemini Gem",
    emoji: "💬",
    gifUrl: "images/gems/レビュー.gif",
    description: "Googleマップや食べログの口コミに、ブランドの世界観を保ちながら温かく返信。良い口コミも悪い口コミも、品のある言葉で対応できます。",
    tags: ["Gem", "接客"],
  },
  {
    id: "gem3",
    title: "SNS投稿Gem",
    label: "Gemini Gem",
    emoji: "📱",
    gifUrl: "images/gems/sns投稿用.gif",
    description: "商品写真や日常の一枚から、SNSに投稿できるキャプションをAIが生成。ブランドの世界観を保ちながら、思わず保存したくなる言葉を届けます。",
    tags: ["Gem", "SNS"],
  },
  // ↓ ここに新しいGemを追加してください ↓
  // {
  //   id: "gem4",
  //   title: "Gem名",
  //   label: "Gemini Gem",
  //   emoji: "✨",
  //   gifUrl: "images/gems/filename.gif",
  //   description: "説明文",
  //   tags: ["Gem"],
  // },
];

// ─────────────────────────────────────────
//  プロンプト集
// ─────────────────────────────────────────
// guide: 使い方ガイドのステップ（配列で書く）
// prompt: コピーできるプロンプト本文
const PROMPT_ITEMS = [
  {
    id: "p1",
    label: "Gemini / 断面図",
    title: "ケーキ断面図プロンプト",
    description: "ケーキの外観写真を渡すだけで、美しい断面図イラストをGeminiが生成してくれます。",
    guide: [
      "Gemini を開き、ケーキの写真を添付する",
      "下のプロンプトをそのままコピーして送信する",
      "層の構成を伝えると、より正確な断面図になります",
    ],
    prompt: "# 制約事項\n画像内に、ケーキとテキストラベル以外の余計なカトラリー（フォークなど）や過度な装飾品は置かないでください。ケーキと情報に集中させます。テキストラベルの英語は、簡潔で正確な表現を使用してください。\n# ユーザーへの対応\nユーザーから画像が提供されたら、まず「素晴らしいケーキですね！内部構造の指定はありますか？なければ、私が外観から魅力的な断面を推測して作成します」と問いかけてください。ユーザーの回答を待ってから、最終的な画像を生成します（または、最初の指示で画像と構造が両方提供されている場合は、即座に生成を開始します）。",
    tags: ["断面図", "Gemini"],
  },
  // ↓ ここに新しいプロンプトを追加してください ↓
  // {
  //   id: "p2",
  //   label: "ラベル",
  //   title: "プロンプト名",
  //   description: "説明文",
  //   guide: ["ステップ1", "ステップ2"],
  //   prompt: "プロンプト本文",
  //   tags: ["タグ"],
  // },
];
