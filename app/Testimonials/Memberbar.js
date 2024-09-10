import Link from "next/link";

const Memberbar = () => {
  return (
    <div>
      <header style={styles.testimonialsHeader}>
        <div style={styles.content}>
          <div style={styles.textContainer}>
            <h1 style={styles.testimonialsTitle}>
              Discover why millions love Logical Quiz
            </h1>
            <h3 style={styles.testimonialsSubtitle}>
              Learners around the world are achieving more with Quiz. Find out
              what students, educators, and families are saying!
            </h3>
          </div>
          {/* <Link href="/" style={styles.button}>
            Become a Member
          </Link> */}
        </div>
      </header>
    </div>
  );
};

export default Memberbar;

const styles = {
  testimonialsHeader: {
    backgroundColor: "#87CEEB",
    padding: "10px",
    width: "100%",
    height: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    textAlign: "center",
  },
  textContainer: {
    marginBottom: "20px",
  },
  testimonialsTitle: {
    fontSize: "24px",
    color: "#333",
    alignItems: "center",
    margin: 0, //
  },
  testimonialsSubtitle: {
    fontSize: "16px",
    color: "#000",
    margin: 0,
  },
  button: {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "18px",
    textDecoration: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    marginTop: "10px",
  },
};
