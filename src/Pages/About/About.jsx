import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import styles from "./About.module.scss";

const timeline = [
  {
    year: "~2025",
    title: "前職での経験",
    desc: "飲食・小売業界で勤務。チームでの業務を通じてコミュニケーション能力を培う。",
  },
  {
    year: "2025",
    title: "Webの世界へ",
    desc: "プログラミングに興味を持ち、独学でHTML・CSSを学習開始。",
  },
  {
    year: "2025 ~ 2026",
    title: "職業訓練校",
    desc: "リカレントスクール広島校に入校。『はじめてのReact:ステップbyステップで学ぶWEBアプリ開発科』コースにて実践的なWeb制作技術を習得。",
  },
  {
    year: "現在",
    title: "ポートフォリオ制作・就活中",
    desc: "習得したスキルを活かして転職活動中。常に新しい技術のキャッチアップを続けています。",
  },
];

const skillList = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "React",
  "React Router",
  "microCMS",
  "GitHub",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "VSCode",
  "Responsive Design",
];

const interest = ["PHP", "Next.js", "Shopify", "Unity", "ゲーム制作","動画編集", "3Dモデリング"];

const photos = [
  {
    src: "images/1.JPG",
    label: "山口：ときわ公園",
    desc: "植物を撮るの大好きです",
    camera: "Canon",
  },
  {
    src: "images/4.JPEG",
    label: "山口：ときわ公園",
    desc: "緑に映える花の色が好きです",
    camera: "iPhone",
  },
  {
    src: "images/5.JPEG",
    label: "山口：湯田",
    desc: "湯田温泉で癒されました",
    camera: "iPhone",
  },
  {
    src: "images/17.JPEG",
    label: "山口：唐戸市場",
    desc: "天国に来たかと思いました",
    camera: "iPhone",
  },
  {
    src: "images/12.JPEG",
    label: "山口：秋芳洞",
    desc: "洞窟の中は非日常的で圧倒されました",
    camera: "iPhone",
  },
  {
    src: "images/3.JPEG",
    label: "大阪：USJ",
    desc: "テーマパークも大好きです",
    camera: "iPhone",
  },
  {
    src: "images/10.JPEG",
    label: "大阪：USJ",
    desc: "一人でインパークしましたが、はちゃめちゃに楽しみました",
    camera: "iPhone",
  },
  {
    src: "images/11.JPG",
    label: "大阪：USJ",
    desc: "ハリーポッターファンなので、いつかイギリスにも行ってみたいです",
    camera: "Canon",
  },
  {
    src: "images/6.JPEG",
    label: "尾道：裏路地",
    desc: "旅先の裏路地によく惹かれます",
    camera: "iPhone",
  },
  {
    src: "images/8.JPEG",
    label: "尾道：猫の細道",
    desc: "あまり猫ちゃんに出会えませんでした",
    camera: "iPhone",
  },
  {
    src: "images/9.JPEG",
    label: "尾道：サイクリングロード",
    desc: "思い立って一人でサイクリングしてみました。現地の方が優しかったです",
    camera: "iPhone",
  },
  {
    src: "images/13.JPEG",
    label: "広島：夏の雲",
    desc: "夏の雲のビジュはいつも最高で好きです",
    camera: "iPhone",
  },
  {
    src: "images/14.JPG",
    label: "福岡：居酒屋",
    desc: "1つ1,600円の生牡蠣。水筒に入れて持ち歩きたいくらい美味しかったです",
    camera: "Canon",
  },
  {
    src: "images/15.JPG",
    label: "福岡：寿司酒場さしす",
    desc: "行列に並ぶ価値あります。特に『えび7』がおすすめです",
    camera: "Canon",
  },
  {
    src: "images/16.JPEG",
    label: "宮島：うえの",
    desc: "煮穴子LOVE",
    camera: "iPhone",
  },
  {
    src: "images/18.JPG",
    label: "熊本",
    desc: "自然良し、食べ物良し、人柄も良しの素敵な場所でした",
    camera: "iPhone",
  },
  {
    src: "images/19.JPG",
    label: "京都",
    desc: "伏見稲荷大社への山道を歩いて、運動不足を痛感しました",
    camera: "iPhone",
  },
  {
    src: "images/2.JPG",
    label: "静岡：富士山",
    desc: "いつか自分の足で登山してみたいです",
    camera: "Canon",
  },
  {
    src: "images/7.JPG",
    label: "旅先の植物",
    desc: "どこかで撮った花の写真。お気に入りの一枚です",
    camera: "Canon",
  },
];

const cameraLabel = {
  Canon: { text: "Canon", color: "#d08585" },
  iPhone: { text: "iPhone", color: "#6ad2d6" },
};

function About() {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <p className={styles.breadcrumb}>
            <Link to="/">Top</Link>
            <span>›</span>
            About
          </p>
          <h1 className={styles.pageTitle}>About</h1>
        </div>

        <div className={styles.profileSection}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatar}>
              <img src="products/prof.jpeg" alt="プロフィール画像" />
            </div>
            <div className={styles.nameBlock}>
              <p className={styles.nameJa}>まつい</p>
              <p className={styles.nameEn}>Matsui</p>
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/Matsumi0810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="GitHub"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.bio}>
            <div className={styles.bioBlock}>
              <p className={styles.bioLabel}>Profile</p>
              <h2 className={styles.bioTitle}>はじめまして</h2>
              <p className={styles.bioText}>
                はじめまして、松井と申します。今までは主に飲食・小売関係の仕事をしていましたが、
                「自分でサイトを作ってみたい」という想いからWebの世界に飛び込みました。
                <br />
                職業訓練校でHTML/CSS・JavaScriptからReactまで幅広く学び、
                現在はフロントエンド開発やサイトデザインの技術を活かせる仕事を目指しています。
              </p>
            </div>

            <div className={styles.bioBlock}>
              <p className={styles.bioLabel}>History</p>
              <h2 className={styles.bioTitle}>これまで</h2>
              <div className={styles.timeline}>
                {timeline.map((item) => (
                  <div key={item.year} className={styles.timelineItem}>
                    <p className={styles.timelineYear}>{item.year}</p>
                    <p className={styles.timelineTitle}>{item.title}</p>
                    <p className={styles.timelineDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.bioBlock}>
              <p className={styles.bioLabel}>Skills</p>
              <h2 className={styles.bioTitle}>使える技術</h2>
              <div className={styles.skillList}>
                {skillList.map((s) => (
                  <span key={s} className={styles.skillBadge}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.bioBlock}>
              <p className={styles.bioLabel}>Interest</p>
              <h2 className={styles.bioTitle}>興味があるもの</h2>
              <div className={styles.skillList}>
                {interest.map((s) => (
                  <span key={s} className={styles.skillBadge}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className={styles.photoSection}>
          <div className={styles.photoInner}>
            <p className={styles.bioLabel}>Hobby</p>
            <h2 className={styles.photoTitle}>旅 ✖️ 写真 ✖️ 食</h2>
            <p className={styles.photoIntro}>
              <span className={styles.hobbyText}>旅行</span>が趣味で、旅先で見かける植物や風景、建物、食べ物を<span className={styles.hobbyText}>写真</span>に収めることが大好きです。
              <br />
              <span className={styles.hobbyText}>食</span>べることが何よりも好きで、白米があれば一生幸せでいられます。{" "}
            </p>
            <p className={styles.camera}>使用機材：iPhone / Canon EOS R10</p>
            <p className={styles.photoZoom}>＊クリックで拡大表示できます＊</p>
            <div className={styles.photoGrid}>
              {photos.map((p, i) => (
                <div
                  key={i}
                  className={styles.photoCard}
                  onClick={() => setSelectedImage(p)}
                  style={{ cursor: "zoom-in" }}
                >
                  {p.src ? (
                    <img
                      src={p.src}
                      alt={p.label}
                      style={{ width: "100%", display: "block" }}
                    />
                  ) : (
                    <div className={styles.photoPlaceholder}>
                      <span className={styles.photoEmoji}>{p.emoji}</span>
                    </div>
                  )}
                  <div className={styles.photoCaption}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.4rem",
                      }}
                    >
                      <p className={styles.photoCaptionLabel}>{p.label}</p>
                      <span
                        style={{
                          fontSize: "1rem",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "0.4rem",
                          color: "#fff",
                          fontWeight: "600",
                          background: cameraLabel[p.camera].color,
                        }}
                      >
                        {cameraLabel[p.camera].text}
                      </span>
                    </div>
                    <p className={styles.photoCaptionDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {selectedImage && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "2rem",
            cursor: "zoom-out",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "90%",
              maxHeight: "90%",
              textAlign: "center",
            }}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.label}
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "0.4rem",
              }}
            />
            <p
              style={{ color: "#fff", marginTop: "1.6rem", fontSize: "1.8rem" }}
            >
              {selectedImage.label}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default About;
