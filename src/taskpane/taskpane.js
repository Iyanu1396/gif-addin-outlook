export function insertGif(gifUrl) {
  return new Promise((resolve, reject) => {
    try {
      const html = `
        <div style="margin-top: 15px;">
          <img src="${gifUrl}" style="max-width: 250px; height: auto;">
          <div style="font-size: 11px; color: #777777; margin-top: 5px;">
            <a href="https://iyanu-codes.vercel.app/" target="_blank" style="color: #0066cc; text-decoration: none;">
              Sent with dynamic GIF signature
            </a>
          </div>
        </div>
      `;

      Office.context.mailbox.item.body.setSelectedDataAsync(
        html,
        { coercionType: Office.CoercionType.Html },
        (result) => {
          if (result.status === Office.AsyncResultStatus.Succeeded) {
            resolve();
          } else {
            reject(result.error);
          }
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}
