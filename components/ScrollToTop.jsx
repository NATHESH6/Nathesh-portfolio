import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {show && (
        <div onClick={goTop} style={styles.arrow}>
          ⬆
        </div>
      )}
    </div>
  );
};

const styles = {
  arrow: {
    position: "fixed",
    bottom: "25px",
    right: "25px",
    width: "50px",
    height: "50px",
    backgroundColor: "#00ffff",
    color: "#000",
    fontSize: "28px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 9999,
    boxShadow: "0 0 15px rgba(0,255,255,0.8)",
  },
};

export default ScrollToTop;
