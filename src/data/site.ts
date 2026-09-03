const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const url = (path: string) => `${base}${path}`;

export const indexable = import.meta.env.PUBLIC_INDEXABLE === "true";

export const site = {
  name: "Propel",
  tagline: "The AI close platform for accounting firms",
  description:
    "Propel reconciles every client's books automatically, surfaces the findings that need a partner, and turns the month into a branded pack you can sign.",
  domain: "propel-fs.com",
  email: "hello@propel-fs.com",
  location: "Dubai, United Arab Emirates",
};

export const nav = [
  { label: "Platform", href: "/platform" },
  { label: "For firms", href: "/firms" },
  { label: "Security", href: "/security" },
];

export const heroStats = [
  { value: "1", label: "workspace per client, from their files to their pack" },
  { value: "100%", label: "of figures traceable to the transaction behind them" },
  { value: "0", label: "numbers an AI is allowed to write" },
];

export const problems = [
  {
    title: "The client gets a file, not a finance function",
    body: "A trial balance and a P&L land in their inbox. Nothing in it tells them their delivery channel is quietly eating the margin, because nobody had the hours left to look.",
  },
  {
    title: "The month is gone before the numbers are trusted",
    body: "Three weeks of chasing files and agreeing figures, then a report about a month the client can no longer do anything about.",
  },
  {
    title: "Every question reopens the books",
    body: "A client asks why one line moved. Someone goes back to the exports, rebuilds the working, and hopes the same answer falls out. That is an afternoon, per question.",
  },
  {
    title: "Your best people are doing the least valuable work",
    body: "Qualified staff matching rows and formatting packs. The advisory work that would justify a higher fee never gets started, because compliance eats the month first.",
  },
];

export const clientGets = [
  {
    title: "A pack under your name",
    body: "A branded monthly pack with a profit and loss, the cash bridge, channel economics and a basis of preparation. Maker, checker and approver named on the document itself.",
  },
  {
    title: "Findings, not just figures",
    body: "The things that need a decision, grouped liquidity, profitability and growth, each with the evidence behind it and the options open to them.",
  },
  {
    title: "An answer without a wait",
    body: "Any figure walks down to the transaction that produced it. A question in November about an August number is answered from the stored trail, not by reopening the books.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Connect and map",
    body: "Drop in files or connect a feed. Propel infers what each file is and what its columns mean, then a person confirms once. The profile is saved, so the same shape is never inferred twice.",
    chips: ["Folder and email drop", "Column inference", "Versioned mapping profiles"],
  },
  {
    n: "02",
    title: "Reconcile deterministically",
    body: "Four match layers run over the whole open book: order to payment, payment to settlement, settlement to bank. Every match is SQL, never a model, so it produces the same answer twice.",
    chips: ["Order to bank line", "Fee decomposition", "Re-matched every import"],
  },
  {
    n: "03",
    title: "Escalate only what needs a person",
    body: "Genuine ambiguity is categorised, aged and routed. Everything else clears itself. Your team works a queue instead of working a spreadsheet.",
    chips: ["Categorised exceptions", "Owner and ageing", "Answers are remembered"],
  },
  {
    n: "04",
    title: "Deliver the pack",
    body: "The month closes into a pack that goes out under your firm's name, with a query trail from any figure down to the transaction that produced it.",
    chips: ["Your branding", "Query trail on every number", "Maker, checker, approver"],
  },
];

export const workspaceTabs = [
  {
    tab: "Ingestion",
    body: "Every feed and file drop for the month, each with its mapping profile, row count and how fresh it is. Connected sources pull themselves; the rest arrive by folder or email.",
  },
  {
    tab: "Receivables",
    body: "Revenue by channel or payer, whether it synced, the sales journal posted to the client's own ledger, and the ageing behind it.",
  },
  {
    tab: "Payables",
    body: "Bills, bill payments, card and cash spend, bank activity and payroll, with the ageing that tells you what is actually due.",
  },
  {
    tab: "Insights",
    body: "The business findings that need a person, grouped the way a partner already frames a performance review.",
  },
  {
    tab: "MIS pack",
    body: "The deliverable, assembled and branded, with a drill path from any figure and an assistant that edits the pack but refuses to change a number.",
  },
];

export const capabilities = [
  {
    title: "Ingest anything",
    body: "A new file from a new provider is configuration, not an engineering ticket. Columns are inferred from the header and a sample, and confirmed once by a person.",
  },
  {
    title: "Deterministic matching",
    body: "Proven above 90% back to the individual order on a book where 70% of rows shared no reference at all. Every match is SQL, and every match is explainable.",
  },
  {
    title: "Bank line classification",
    body: "A statement goes in and every line comes out coded, with the settlement to clearing join already done.",
  },
  {
    title: "Fee decomposition",
    body: "Commission, delivery, processing and reserve split into separate lines and checked against the contract you have on file. This is how overcharging gets caught.",
  },
  {
    title: "Exceptions that own themselves",
    body: "Missing payments, unlinked payments, unmatched receipts, orphan refunds and chargebacks are raised and categorised, then aged and routed to a named owner.",
  },
  {
    title: "Findings, not just numbers",
    body: "Business findings grouped by liquidity, profitability and growth, each with the evidence behind it and the choices open to you.",
  },
  {
    title: "The client-ready pack",
    body: "A branded monthly pack with a basis of preparation, a sign-off block, and a drill path from any figure to the underlying rows.",
  },
  {
    title: "An assistant with a hard boundary",
    body: "It edits the pack, its wording and its structure. It will not change a figure. That refusal is what lets a licensed firm sign the output.",
  },
];

export const personas = [
  {
    role: "Partners",
    line: "See the whole book at once",
    body: "Every client, the state of their month, what is blocked and what is waiting on a person. You find the client that needs you before they call.",
    points: ["Book-wide close status", "Blocked clients surfaced early", "Packs due this week"],
  },
  {
    role: "Managers",
    line: "Work a queue, not a spreadsheet",
    body: "Reconciliation clears itself overnight. Your team arrives to a short list of genuine exceptions with an owner, an age, and the evidence attached.",
    points: ["Categorised exception queue", "Ownership and ageing", "Decisions remembered per client"],
  },
  {
    role: "Clients",
    line: "Get an answer, not a wait",
    body: "A question about a number is answered from the stored query trail without reopening the books. The pack arrives with the findings already flagged.",
    points: ["Query trail on every figure", "Findings with evidence", "Delivered under your brand"],
  },
];

export const differentiators = [
  {
    title: "Deterministic where it counts",
    body: "The model performs schema inference only. Everything involving money, dates or matching is deterministic SQL. An AI that guesses at a balance is worse than no AI at all.",
  },
  {
    title: "Built for how the GCC actually pays",
    body: "Bank statements arrive as PDFs. Aggregator portals have no API. Books live in Zoho, Xero or Tally. Propel is built for that reality rather than around it.",
  },
  {
    title: "Auditable by construction",
    body: "Every match traces back to the rule and the human decision that produced it. Every step is a stored record, not a recalculation.",
  },
  {
    title: "A cumulative ledger, not a run",
    body: "Canonical rows outlive the import that created them and every import re-matches the whole open book, so a July payout still settles a June order.",
  },
];

export const faqs = [
  {
    q: "Does an AI decide what matches what?",
    a: "No. The model does schema inference only, which is reading a file it has not seen and proposing what each column means. Everything that touches money, dates or matching is deterministic SQL, so the same book produces the same answer every time and a reviewer can follow the rule that fired.",
  },
  {
    q: "What if a client's bank has no API?",
    a: "Most in the region do not, which is why file drop is a first-class path rather than a fallback. Statements arrive by folder or email drop and are parsed per bank template. Anything Propel cannot classify is raised rather than guessed at.",
  },
  {
    q: "Which ledgers do you write to?",
    a: "Zoho Books is live and Xero is in QA. Tally, QuickBooks, NetSuite and Wafeq are on the roadmap, and until then those clients run as a file drop, which reconciles exactly the same way.",
  },
  {
    q: "Can the assistant change a number?",
    a: "It cannot, by design. It edits the pack's structure and wording only. If a figure is wrong the fix happens upstream in the data, where it leaves a trail. This is the boundary that lets a licensed firm put its name on the output.",
  },
  {
    q: "How long does onboarding a client take?",
    a: "The first month is the work: connecting sources and confirming mapping profiles. After that the profiles are saved and each month runs on the same configuration. Firms typically start with two or three clients before rolling the book across.",
  },
  {
    q: "Where does client data live?",
    a: "Each client is an isolated ledger enforced at the database level by row-level security, not by application code that could be bypassed. See the security page for how that is enforced.",
  },
];

export const securityPoints = [
  {
    title: "Isolation enforced by the database",
    body: "Every client is a separate ledger under Postgres row-level security. The application connects as a non-superuser role that cannot bypass the policy, so isolation does not depend on a query being written correctly.",
  },
  {
    title: "An audit trail by construction",
    body: "Every match records the rule that produced it and the human decision that confirmed it. Nothing is recalculated on the way out, so a figure shown today can be reproduced months later.",
  },
  {
    title: "Deterministic money handling",
    body: "No model output ever becomes a balance. Amounts, dates and matching are computed in SQL, which means a result can be re-derived and checked independently of any model.",
  },
  {
    title: "Data minimisation by default",
    body: "Propel ingests the transaction data it needs to reconcile. It does not require customer identities, card numbers or credentials to the client's bank.",
  },
];
