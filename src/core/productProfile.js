export const productProfile = {
  "rank": 28,
  "tier": "P1",
  "score": 63,
  "domain": "AdobePlugin",
  "ideaNo": 3,
  "ideaName": "撮影選別・現像証跡パネル",
  "repositoryName": "photo-selection-develop-evidence-panel",
  "publishTarget": "BOOTH / GitHub Release",
  "featureFocus": "Lightroom Classicの選別理由、現像意図、書き出し用途を証跡化するパネル",
  "records": [
    "photoId",
    "selectionReason",
    "developSnapshot",
    "exportUse"
  ],
  "requiredFields": [
    "title",
    "selectionReason",
    "nextAction"
  ],
  "warningFields": [
    "developSnapshot",
    "reviewDate"
  ],
  "primaryAction": "採用写真ごとに用途、現像メモ、再編集メモをレポート化する",
  "privacyPolicy": "写真本体ではなくID、採用理由、書き出しメモだけを保持する",
  "competitors": [
    "Lightroom Classic",
    "Photo Mechanic",
    "Capture One"
  ],
  "androidPermissions": [],
  "adobeHost": "Lightroom",
  "hostReason": "metadata.json の integration が Lightroom Classic で、アイデア名も撮影選別と現像証跡を示すため。"
};
