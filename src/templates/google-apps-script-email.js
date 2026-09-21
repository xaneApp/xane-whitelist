/**
 * =========================================================================
 * XANE WAITLIST - GOOGLE APPS SCRIPT WITH AUTOMATED EMAIL NOTIFICATION
 * =========================================================================
 * 
 * Instructions:
 * 1. Open your Google Sheet connected to the waitlist.
 * 2. Go to Extensions -> Apps Script.
 * 3. Replace the code with this script.
 * 4. Click 'Deploy' -> 'Manage Deployments' -> Edit (pencil) -> New Version -> Deploy.
 * 
 * Whenever a user signs up on the website, this script will:
 * 1. Append their details into the Google Sheet.
 * 2. Automatically send them the stunning branded Welcome Email!
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 1. Extract form parameters
    var name = (e.parameter && e.parameter.Name) || "Waitlist Member";
    var phone = (e.parameter && e.parameter.Phone) || "";
    var email = (e.parameter && e.parameter.Email) || "";
    var freeTag = (e.parameter && e.parameter.FreeXaneTag) || "";
    var premiumTag = (e.parameter && e.parameter.PremiumXaneTag) || "";
    var tag = premiumTag && premiumTag !== "None" ? premiumTag : freeTag;
    if (tag && !tag.endsWith(".xane")) {
      tag = tag + ".xane";
    }
    
    var timestamp = new Date();
    
    // 2. Append row to Sheet
    sheet.appendRow([timestamp, name, phone, email, freeTag, premiumTag]);
    
    // 3. Compute Waitlist Position
    var userRank = sheet.getLastRow(); // Current row number as waitlist position
    var referralLink = "https://xane.app/waitlist?ref=" + encodeURIComponent(tag.replace("@", ""));
    var leaderboardLink = "https://xane.app/waitlist?view=leaderboard";

    // 4. Send Confirmation Email if Email exists
    if (email && email.indexOf("@") !== -1) {
      sendWelcomeEmail(email, tag, userRank, referralLink, leaderboardLink);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", row: userRank }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Sends the Figma-designed Welcome Email
 */
function sendWelcomeEmail(recipientEmail, userTag, userRank, referralLink, leaderboardLink) {
  var subject = "You're on the Xane Waitlist! 🎉";
  
  var htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; padding: 0; background-color: #f2f4f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .btn-pill { display: inline-block; background-color: #0047FF; color: #ffffff !important; font-size: 15px; font-weight: 800; padding: 14px 32px; border-radius: 50px; text-decoration: none; }
    .btn-share { display: inline-block; background-color: #0047FF; color: #ffffff !important; font-size: 13px; font-weight: 700; padding: 10px 18px; border-radius: 50px; text-decoration: none; margin: 4px; }
  </style>
</head>
<body style="margin: 0; padding: 20px 0; background-color: #f2f4f8;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 71, 255, 0.1);">
          
          <!-- HERO BANNER -->
          <tr>
            <td style="background-color: #0047FF; text-align: center; padding: 24px 20px 30px 20px; color: #ffffff;">
              <div style="font-size: 18px; font-weight: 900; letter-spacing: 2px; margin-bottom: 8px;">⩕ XANE</div>
              <h1 style="font-size: 34px; font-weight: 900; margin: 0 0 12px 0;">You’re on the list</h1>
              <div style="font-size: 40px; margin: 10px 0;">🎉 🎊 🥳</div>
              <div style="font-size: 26px; font-weight: 900; opacity: 0.3; letter-spacing: 3px;">WAITLIST</div>
            </td>
          </tr>

          <!-- BODY CONTENT -->
          <tr>
            <td style="padding: 32px 30px;">
              <div style="font-size: 20px; font-weight: 800; color: #111111; margin-bottom: 12px;">
                ${userTag} —
              </div>
              <p style="font-size: 15px; line-height: 1.6; color: #222222; margin: 0 0 12px 0;">
                Your XaneTag is reserved. Nobody else can take it.
              </p>
              <p style="font-size: 15px; line-height: 1.6; color: #222222; margin: 0 0 12px 0;">
                You’re <strong>#${userRank}</strong> on the waitlist. The first 100 get rewards when Xane launches.
              </p>
              <p style="font-size: 15px; line-height: 1.6; color: #222222; margin: 0 0 24px 0;">
                Here's how to move: <strong>refer 1 person and you jump 3 places.</strong>
              </p>

              <div style="text-align: center; margin: 24px 0;">
                <a href="${referralLink}" class="btn-pill" target="_blank" style="display: inline-block; background-color: #0047FF; color: #ffffff; font-size: 15px; font-weight: 800; padding: 14px 32px; border-radius: 50px; text-decoration: none;">
                  Copy your referral link
                </a>
              </div>

              <p style="font-size: 13px; color: #555555; text-align: center; margin: 16px 0 24px 0;">
                Every referral moves you up the waitlist and counts toward your level. Three referrals makes you a Xane Scout.
              </p>
            </td>
          </tr>

          <!-- SECTION: BADGE -->
          <tr>
            <td style="background-color: #002999; color: #ffffff; font-size: 13px; font-weight: 800; padding: 10px 20px;">
              Your Waitlist Badge
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 20px; text-align: center; background-color: #ffffff;">
              <img src="https://raw.githubusercontent.com/xaneApp/xane-whitelist/main/src/assets/mascot1.png" alt="Badge" style="width: 130px; height: auto; display: inline-block;" />
              <p style="font-size: 14px; font-weight: 600; color: #111111; margin: 8px 0;">
                Your Level 1 badge — yours the moment you joined.
              </p>
              <a href="${leaderboardLink}" style="color: #0047FF; font-size: 14px; font-weight: 800; text-decoration: none;">
                See all levels ➔
              </a>
            </td>
          </tr>

          <!-- SECTION: SHARE MOMENT -->
          <tr>
            <td style="background-color: #002999; color: #ffffff; font-size: 13px; font-weight: 800; padding: 10px 20px;">
              Share your Xane Waitlist moment
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 24px; background-color: #ffffff;">
              <div style="background-color: #161616; border-radius: 14px; padding: 18px; text-align: left; color: #ffffff; margin-bottom: 20px;">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #0047FF; border-radius: 12px; padding: 16px;">
                  <tr>
                    <td>
                      <div style="font-size: 11px; opacity: 0.8;">YOUR XANETAG</div>
                      <div style="font-size: 20px; font-weight: 900; margin-bottom: 10px;">${userTag}</div>
                      <div style="font-size: 11px; opacity: 0.8;">YOUR POSITION</div>
                      <div style="font-size: 20px; font-weight: 900;">#${userRank}</div>
                    </td>
                    <td align="right" style="vertical-align: middle;">
                      <span style="font-size: 11px; font-weight: 800; border: 1px solid rgba(255,255,255,0.4); padding: 6px 10px; border-radius: 6px;">WAITLIST MEMBER</span>
                    </td>
                  </tr>
                </table>
              </div>

              <p style="font-size: 14px; color: #333333; text-align: center; margin-bottom: 16px;">
                If you would like to share it with your network we’ve created an image you can post.
              </p>

              <div style="text-align: center; margin-bottom: 20px;">
                <a href="https://api.whatsapp.com/send?text=I%20just%20claimed%20my%20XaneTag%20on%20Xane!%20Join%20the%20waitlist:%20${encodeURIComponent(referralLink)}" class="btn-share" target="_blank" style="display: inline-block; background-color: #0047FF; color: #ffffff; font-size: 13px; font-weight: 700; padding: 10px 18px; border-radius: 50px; text-decoration: none; margin: 4px;">
                  Share to Whatsapp or Instagram
                </a>
                <a href="https://twitter.com/intent/tweet?text=I%20just%20claimed%20my%20XaneTag%20on%20@XaneApp_!%20Join%20the%20waitlist:%20${encodeURIComponent(referralLink)}" class="btn-share" target="_blank" style="display: inline-block; background-color: #0047FF; color: #ffffff; font-size: 13px; font-weight: 700; padding: 10px 18px; border-radius: 50px; text-decoration: none; margin: 4px;">
                  Share to Twitter
                </a>
              </div>

              <div style="text-align: center; margin-bottom: 20px;">
                <a href="${leaderboardLink}" style="display: inline-block; background-color: #0047FF; color: #ffffff; font-size: 14px; font-weight: 800; padding: 12px 28px; border-radius: 50px; text-decoration: none;" target="_blank">
                  View the leaderboard
                </a>
              </div>

              <p style="font-size: 13px; color: #888888; text-align: center;">— The Xane Team</p>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color: #0047FF; color: #ffffff; text-align: center; padding: 28px 20px;">
              <div style="font-size: 20px; font-weight: 900; letter-spacing: 2px; margin-bottom: 10px;">⩕ XANE</div>
              <p style="font-size: 13px; margin: 4px 0;">You're receiving this email because you joined the Xane waitlist.</p>
              <div style="margin: 12px 0;">
                <a href="https://x.com/XaneApp_" style="color: #ffffff; margin: 0 8px; font-size: 12px; text-decoration: none;">X (Twitter)</a> •
                <a href="https://www.instagram.com/xaneapp_" style="color: #ffffff; margin: 0 8px; font-size: 12px; text-decoration: none;">Instagram</a> •
                <a href="https://www.linkedin.com/company/xaneapp/" style="color: #ffffff; margin: 0 8px; font-size: 12px; text-decoration: none;">LinkedIn</a>
              </div>
              <p style="font-size: 11px; opacity: 0.7; margin: 8px 0 0 0;">© All Rights Reserved. Xane, LLC</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
  
  MailApp.sendEmail({
    to: recipientEmail,
    subject: subject,
    htmlBody: htmlBody
  });
}
