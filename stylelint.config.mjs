/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    "comment-empty-line-before": null,
  },
  customSyntax: "postcss-html",
};
