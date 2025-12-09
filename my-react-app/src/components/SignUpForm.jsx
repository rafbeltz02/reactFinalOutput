export default function SignUpForm() {
  return (
    <div style={{padding:20}}>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Full Name" /><br /><br />
      <input type="email" placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button>Create Account</button>
    </div>
  );
}
