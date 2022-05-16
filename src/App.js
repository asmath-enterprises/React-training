const app = () => {
  return (
    <div>
      <h1>Arithmetic Operation</h1>
    </div>
  );
};
export default app;

const Mybtn = (props) => {
  return (
    <div>
      <button onClick={props.clickMe} style={props.btnstyle}>
        {props.text}
      </button>
    </div>
  );
};

export const Btndynamic = () => {
  const Addbtn = (a, b) => {
    alert(a + b);
  };
  const Subbtn = (a, b) => {
    alert(a - b);
  };
  const Mulbtn = (a, b) => {
    alert(a * b);
  };
  const Divbtn = (a, b) => {
    alert(a / b);
  };
  return (
    <div>
      <Mybtn
        text="click me to add"
        clickMe={() => Addbtn(10, 20)}
        btnstyle={{
          marginBottom: "20px",
          fontWeight: "400",
          color: "white",
          lineHeight: "1.5",
          textAlign: "center",
          textDecoration: "none",
          verticalAlign: "middle",
          cursor: "pointer",
          backgroundColor: "#0d6efd",
          border: "1px solid transparent",
          padding: "0.375rem 0.75rem",
          fontSize: "1rem",
          borderRadius: "0.25rem",
        }}
      />
      <Mybtn
        text="click me to Sub"
        clickMe={() => Subbtn(30, 40)}
        btnstyle={{
          marginBottom: "20px",
          fontWeight: "400",
          color: "white",
          lineHeight: "1.5",
          textAlign: "center",
          textDecoration: "none",
          verticalAlign: "middle",
          cursor: "pointer",
          backgroundColor: "#0d6efd",
          border: "1px solid transparent",
          padding: "0.375rem 0.75rem",
          fontSize: "1rem",
          borderRadius: "0.25rem",
        }}
      />
      <Mybtn
        text="click me to Multiply"
        clickMe={() => Mulbtn(40, 10)}
        btnstyle={{
          marginBottom: "20px",
          fontWeight: "400",
          color: "white",
          lineHeight: "1.5",
          textAlign: "center",
          textDecoration: "none",
          verticalAlign: "middle",
          cursor: "pointer",
          backgroundColor: "#0d6efd",
          border: "1px solid transparent",
          padding: "0.375rem 0.75rem",
          fontSize: "1rem",
          borderRadius: "0.25rem",
        }}
      />
      <Mybtn
        text="click me to divison"
        clickMe={() => Divbtn(1, 10.5)}
        btnstyle={{
          marginBottom: "20px",
          fontWeight: "400",
          color: "white",
          lineHeight: "1.5",
          textAlign: "center",
          textDecoration: "none",
          verticalAlign: "middle",
          cursor: "pointer",
          backgroundColor: "#0d6efd",
          border: "1px solid transparent",
          padding: "0.375rem 0.75rem",
          fontSize: "1rem",
          borderRadius: "0.25rem",
        }}
      />
    </div>
  );
};
