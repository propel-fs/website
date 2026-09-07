const SHEET_NAME = "Demo requests";
const NOTIFY = "hello@propel-fs.com";
const FIELDS = ["name", "email", "firm", "phone", "size", "message"];

function doPost(e) {
  try {
    const data = (e && e.parameter) || {};

    if (data._company) {
      return json({ success: true });
    }

    if (!data.name || !data.email || !data.firm) {
      return json({ success: false, message: "Missing required fields" });
    }

    const sheet = getSheet();
    sheet.appendRow([new Date()].concat(FIELDS.map(function (f) { return data[f] || ""; })));

    notify(data);
    return json({ success: true });
  } catch (err) {
    return json({ success: false, message: String(err) });
  }
}

function doGet() {
  return json({ success: true, message: "Propel demo endpoint is live" });
}

function getSheet() {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = book.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = book.insertSheet(SHEET_NAME);
    sheet.appendRow(["Received"].concat(FIELDS));
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function notify(data) {
  if (!NOTIFY) return;
  const lines = FIELDS.map(function (f) {
    return f + ": " + (data[f] || "-");
  }).join("\n");

  MailApp.sendEmail({
    to: NOTIFY,
    subject: "Demo request: " + data.firm,
    replyTo: data.email,
    body: lines + "\n\nReceived " + new Date().toISOString(),
  });
}

function json(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
