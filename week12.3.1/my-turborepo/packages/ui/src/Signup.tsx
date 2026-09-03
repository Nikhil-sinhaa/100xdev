export const Signup = () => {
  return (
    <div
      style={{
        width: 400,
        border: "1px solid black",
        padding: 20,
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        gap: 15,
        borderRadius: 10,
      }}
    >
      <h2>Sign Up</h2>

      <input
        type="email"
        placeholder="Email"
        style={{
          padding: "10px",
          fontSize: "16px",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        style={{
          padding: "10px",
          fontSize: "16px",
        }}
      />

      <button
        style={{
          padding: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Sign Up
      </button>
    </div>
  );
};