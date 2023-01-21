export default function handler(req, res) {
  res.setPreviewData({ user: "Shubham" });
  res.redirect(req.query.redirect);
}
