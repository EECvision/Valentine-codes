const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    "@media (max-width: 768px)": {
      height: "auto",
    },
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  link: {
    margin: "10px 0",
  },
  "@media (max-width: 768px)": {
    link: {
      fontSize: "14px",
    },
  },
};

export default styles;
