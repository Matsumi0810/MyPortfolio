import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import styles from "./Works.module.scss";

const works = [
  {
    id: 1,
    title: "水族館 Webサイト",
    image: "/images/aquarium.png",
    link: "https://aquarium-rho.vercel.app/",
    desc: "HTML・CSS・JavaScriptで制作した水族館のWEBサイトです。jsでアニメーションを実装し、動きのあるサイトに仕上げました。性格診断占いや、名前募集の応募フォームにもこだわりました。",
    tags: ["HTML", "CSS", "JavaScript"],
    time: "制作期間：約14日",
  },
  {
    id: 2,
    title: "カフェ Webサイト",
    image: "/images/komorebi.png",
    link: "https://komorebi-kitchin-one.vercel.app/",
    desc: "microCMSやSSGフォームとの連携やモーダル表示など、JavaScriptを活用して動的な要素を実装したカフェのWEBサイトです。",
    tags: ["microCMS", "SSGform", "React"],
    time: "制作期間：約30日",
  },
];

const banners = [
  {
    id: 1,
    title: "カワウソお名前募集",
    image: "/banners/kawauso.png",
    desc: "はじめてのバナー制作。お名前募集ページの雰囲気に合わせて柔らかい雰囲気に仕上げました。",
  },
  {
    id: 2,
    title: "カフェ従業員募集",
    image: "/banners/recruit.png",
    desc: "ターゲットを若い女性に絞り、実際に働いている様子が想像しやすい画像を使用することで、応募意欲を高めることを意識して制作しました。",
  },
  {
    id: 3,
    title: "新規登録キャンペーン",
    image: "/banners/coupon.png",
    desc: "サイトのテーマやカラーを踏襲しつつ、キャンペーンの内容が一目でわかるようにシンプルなデザインを心がけました。",
  },
  {
    id: 4,
    title: "バレンタインフェア1",
    image: "/banners/Valentine1.png",
    desc: "画像の配置にこだわったり深めの赤を使用することでしてラグジュアリーな雰囲気になるように制作しました。",
  },
  {
    id: 5,
    title: "バレンタインフェア2",
    image: "/banners/Valentine2.png",
    desc: "1つ目の案より動きを抑えめにして少しシンプル目に仕上げました。",
  },
  {
    id: 6,
    title: "バレンタインフェア3",
    image: "/banners/Valentine3.png",
    desc: "フォントの種類を変えて少しカジュアル目な雰囲気になるように仕上げました。",
  },
  {
    id: 7,
    title: "モバイルオーダー開始",
    image: "/banners/mobileOder.png",
    desc: "モバイルオーダーの開始を告知するためのバナーです。目立ちやすい色と、わかりやすいイラストを使用して制作しました。",
  },
  {
    id: 8,
    title: "ダブルポイントキャンペーン",
    image: "/banners/w-point3.png",
    desc: "ニューモーフィズムデザインの練習として作成しました。",
  },
];

const games = [
  {
    id: 1,
    title: "ナンバーサム",
    image: "/images/numsum.png",
    link: "https://num-sum.vercel.app/",
    desc: "数字を並べて、合計値を求めるパズルゲームです。広告なしで遊びたかったので制作しました。スマホのブラウザで開き、ホーム画面にアイコンを追加することでオフラインでもプレイ可能にしました。",
  },
  // {
  //   id: 2,
  //   title: "カフェ Webサイト",
  //   image: "/images/komorebi.png",
  //   link: "https://komorebi-kitchin-one.vercel.app/",
  //   desc: "microCMSやSSGフォームとの連携やモーダル表示など、JavaScriptを活用して動的な要素を実装したカフェのWEBサイトです。",
  // },
];

function Works() {
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
            Works
          </p>
          <h1 className={styles.pageTitle}>Works</h1>
          <p className={styles.pageDesc}>
            職業訓練校での学習・課題制作を中心に、
            <br />
            これまで制作したプロジェクトをまとめています。
          </p>
        </div>
        <section className={styles.worksSection}>
        {/* ウェブサイト＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
          <h3 className={styles.worksCategory}>Site</h3>
          <p className={styles.workNote}>＊クリックでサイトに移動＊</p>
          <div className={styles.worksGrid}>
            {works.map((work) => (
              <a
                key={work.id}
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.workCard}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className={styles.workThumb} style={{ cursor: "pointer" }}>
                  <img
                    src={work.image}
                    alt={work.title}
                    className={styles.workImage}
                  />
                </div>
                <div className={styles.workBody}>
                  <h2 className={styles.workTitle}>{work.title}</h2>
                  <p className={styles.workDesc}>{work.desc}</p>
                  <div className={styles.workTags}>
                    {work.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={styles.makeTime}>{work.time}</div>
                </div>
              </a>
            ))}
          </div>

          {/* バナー＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
          <h3 className={styles.worksCategory}>Banner</h3>
          <p className={styles.bannerText}>
            <span>3</span>秒以内に伝わるデザインを目指しています
          </p>
          <p className={styles.bannerNote}>
            【制作時間目安】1案目：2〜3時間、2案目：1〜2時間、3案目：1時間
          </p>
          <p className={styles.workNote}>＊クリックで画像を拡大＊</p>
          <div className={styles.bannersGrid}>
            {banners.map((banner) => (
              <article key={banner.id} className={styles.workCard}>
                <div
                  className={styles.workThumb}
                  onClick={() => setSelectedImage(banner)}
                >
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className={styles.workImage}
                  />
                </div>
                <div className={styles.workBody}>
                  <h2 className={styles.workTitle}>{banner.title}</h2>
                  <p className={styles.workDesc}>{banner.desc}</p>
                </div>
              </article>
            ))}
          </div>

          {/* ゲーム＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
          <h3 className={styles.worksCategory}>Game</h3>
          <p className={styles.bannerText}>
            <span>AI</span>のみで制作しました
          </p>
          <p className={styles.workNote}>＊クリックでサイトに移動＊</p>
          <div className={styles.worksGrid}>
            {games.map((game) => (
              <a
                key={game.id}
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.workCard}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className={styles.workThumb} style={{ cursor: "pointer" }}>
                  <img
                    src={game.image}
                    alt={game.title}
                    className={styles.workImage}
                  />
                </div>
                <div className={styles.workBody}>
                  <h2 className={styles.workTitle}>{game.title}</h2>
                  <p className={styles.workDesc}>{game.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {selectedImage && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className={styles.modalImage}
            />
            <p className={styles.modalCaption}>{selectedImage.title}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Works;
