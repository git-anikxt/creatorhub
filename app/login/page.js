"use client"
import React, { useEffect } from "react"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push("/dashboard")
    }
  }, [session, router])

  return (
    <div className="hero-mesh dot-grid min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        <div className="glass-card p-8">

          {/* Logo */}
          <div className="text-center mb-2">
  <img
  src="/logo.png"
  alt="FundFlow"
  className="mx-auto"
  style={{
  width: "160px",
  height: "auto",
  marginBottom: "-8px",
}}
/>
</div>

          {/* Heading */}
          <div className="text-center mb-6">
            <h1
              className="text-3xl font-bold text-white"
              style={{
                marginBottom: "0.75rem",
              }}
            >
              Welcome Back
            </h1>

            <p
              style={{
                color: "var(--color-text-muted)",
                lineHeight: "1.6",
              }}
            >
              Sign in to continue to FundFlow.
            </p>
          </div>

          {/* GitHub */}
          <button
            onClick={() => signIn("github")}
            className="w-full flex items-center justify-center gap-3 py-3 px-5 font-semibold text-white transition-all"
            style={{
              background: "#161b22",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "12px",
              cursor: "pointer",
              marginBottom: "0.9rem",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>

            Continue with GitHub
          </button>

          {/* Google */}
          <button
  onClick={() => signIn("google")}
  className="w-full flex items-center justify-center gap-3 py-3 px-5 font-semibold transition-all"
  style={{
    background: "#ffffff",
    color: "#1f2937",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    cursor: "pointer",
  }}
>
  <FcGoogle size={22} />
  Continue with Google
</button>

          {/* Trust */}
          <div
            style={{
              marginTop: "1.5rem",
              paddingTop: "1rem",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              textAlign: "center",
              color: "var(--color-text-muted)",
              fontSize: "0.85rem",
              lineHeight: "1.8",
            }}
          >
            🔒 Secure Authentication • 🌐 Trusted OAuth Providers
          </div>
        </div>

        <p
          style={{
            color: "var(--color-text-faint)",
            fontSize: "0.8rem",
            textAlign: "center",
            marginTop: "1.5rem",
          }}
        >
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>

      </div>
    </div>
  )
}

export default Login