// /api/verify-otp.js - mock OTP verifier (POST)
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Only POST allowed");
  const { otp } = req.body || {};
  if (otp === "123456") {
    return res.status(200).json({ ok: true, token: "fake-jwt-token" });
  }
  res.status(401).json({ ok: false, error: "Invalid OTP" });
}