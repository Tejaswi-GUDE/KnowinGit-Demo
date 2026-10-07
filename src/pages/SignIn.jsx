import Logo from "../components/Logo.jsx";
import Button from "../components/Button.jsx";
import { Input, Field } from "../components/Input.jsx";
import StatBlock from "../components/StatBlock.jsx";
import { GoogleIcon } from "../components/icons.jsx";
import "../styles/theme.css";
import "../components/components.css";
import "./SignIn.css";

export default function SignIn() {
  return (
    <div className="signin-shell">
      <section className="mission">
        <Logo />

        <div className="mission-body">
          <h1>Every grant, program, and donor in one place.</h1>
          <p>
            Terrafund helps land-restoration nonprofits track the work in the
            field and the funding that keeps it going — without spreadsheets
            in between.
          </p>
        </div>

        <div className="mission-stats">
          <StatBlock variant="panel" label="Lives reached" value="1.2M" />
          <StatBlock variant="panel" label="Active programs" value="48" />
          <StatBlock variant="panel" label="Volunteers" value="6,400" />
        </div>
      </section>

      <section className="signin-panel">
        <div className="form-wrap">
          <div className="intro">
            <h2>Welcome back</h2>
            <p>Sign in to pick up where your team left off.</p>
          </div>

          <Button variant="outline" fullWidth icon={<GoogleIcon />} type="button">
            Continue with Google
          </Button>

          <div className="divider">
            <span>or sign in with email</span>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Wire up to your auth flow here.
            }}
          >
            <Field id="email" label="Email">
              <Input
                type="email"
                id="email"
                name="email"
                autoComplete="username"
                placeholder="you@organization.org"
              />
            </Field>

            <Field
              id="password"
              label="Password"
              rightSlot={
                <a className="forgot" href="/forgot-password">
                  Forgot password?
                </a>
              }
            >
              <Input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                placeholder="Enter your password"
              />
            </Field>

            <Button variant="solid" fullWidth type="submit">
              Sign in
            </Button>
          </form>

          <div className="footer">
            New to Terrafund? <a href="/sign-up">Create an account</a>
          </div>
        </div>
      </section>
    </div>
  );
}
