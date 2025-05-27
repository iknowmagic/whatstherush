// Create a new file: eslint-plugin-quotes.js
const rule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Replace straight single quotes with HTML entity &rsquo;",
      category: "Stylistic Issues",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    function reportAndFix(node, text) {
      if (text && text.includes("’")) {
        context.report({
          node,
          message: "Replace curly single quotes (’) with HTML entity &rsquo;",
          fix(fixer) {
            const fixedText = text.replace(/’/g, "&rsquo;");
            return fixer.replaceText(node, fixedText);
          },
        });
      }
    }

    return {
      Literal(node) {
        if (typeof node.value === "string") {
          const sourceCode = context.getSourceCode();
          const text = sourceCode.getText(node);
          reportAndFix(node, text);
        }
      },
      TemplateElement(node) {
        const sourceCode = context.getSourceCode();
        const text = sourceCode.getText(node);
        reportAndFix(node, text);
      },
      JSXText(node) {
        const sourceCode = context.getSourceCode();
        const text = sourceCode.getText(node);
        reportAndFix(node, text);
      },
      // Also check JSX expressions
      JSXExpressionContainer(node) {
        if (
          node.expression.type === "Literal" &&
          typeof node.expression.value === "string"
        ) {
          const sourceCode = context.getSourceCode();
          const text = sourceCode.getText(node.expression);
          reportAndFix(node.expression, text);
        }
      },
    };
  },
};

const plugin = {
  rules: {
    "curly-quotes": rule,
  },
};

export default plugin;
