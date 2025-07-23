// @ts-check
const { visit } = require("unist-util-visit");

/**
 * A remark plugin for Twoslash TypeScript code blocks
 * Only processes code blocks that explicitly request twoslash processing
 */
function remarkTwoslash() {
  let twoslashRunner;
  let isInitialized = false;

  async function initializeTwoslash() {
    if (isInitialized) return;

    try {
      // Try to use the TypeScript twoslash
      const ts = require("typescript");
      const { twoslasher } = require("@typescript/twoslash");

      twoslashRunner = twoslasher;
      isInitialized = true;
    } catch (error) {
      console.warn("⚠️ Twoslash initialization failed, using fallback:", error.message);
      // Create a simple fallback that just marks code blocks
      twoslashRunner = {
        runTwoSlash: (code) => ({
          code,
          queries: [],
          errors: [],
          staticQuickInfos: [],
          highlights: [],
        }),
      };
      isInitialized = true;
    }
  }

  return async function transformer(ast) {
    await initializeTwoslash();

    const codeblocks = [];

    // Only collect code blocks that explicitly request twoslash processing
    visit(ast, "code", (node, index, parent) => {
      const { lang, meta, value } = node;

      // ONLY process blocks that explicitly have 'twoslash' in the meta string
      if (meta && meta.includes("twoslash") && value) {
        codeblocks.push({ node, index, parent, lang, meta, value });
      }
    });

    // Process only the explicitly marked twoslash code blocks
    for (const { node, lang, meta, value } of codeblocks) {
      try {
        // Extract magic comments and create options
        const compilerOptions = {
          allowJs: true,
          target: "esnext",
          module: "esnext",
          lib: ["esnext", "dom"],
          moduleResolution: "node",
          strict: false,
          esModuleInterop: true,
          skipLibCheck: true,
          declaration: false,
          allowSyntheticDefaultImports: true,
          isolatedModules: false,
          noEmit: true,
        };

        // Parse magic comments from code
        const lines = value.split("\n");
        const expectedErrors = [];

        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith("// @errors:")) {
            const errorsMatch = trimmed.match(/\/\/ @errors:\s*(.+)$/);
            if (errorsMatch) {
              expectedErrors.push(...errorsMatch[1].split(",").map((s) => parseInt(s.trim())));
            }
          }
        }

        let processedCode;

        // Try to run twoslash if available
        if (twoslashRunner && typeof twoslashRunner === "function") {
          processedCode = twoslashRunner(value, lang || "ts", {
            compilerOptions,
            expectedErrors,
          });
        } else if (twoslashRunner?.runTwoSlash) {
          processedCode = twoslashRunner.runTwoSlash(value, `index.${lang || "ts"}`, {
            compilerOptions,
            expectedErrors,
          });
        } else {
          // Fallback: just return the code with empty annotations
          processedCode = {
            code: value,
            queries: [],
            errors: [],
            staticQuickInfos: [],
            highlights: [],
          };
        }

        // Enhance the node with twoslash data
        const enhancedMeta = `${meta || ""} twoslash-processed`.trim();
        node.meta = enhancedMeta;

        // Create comprehensive twoslash data
        const twoslashData = {
          code: processedCode.code || value,
          queries: processedCode.queries || [],
          errors: processedCode.errors || [],
          staticQuickInfos: processedCode.staticQuickInfos || [],
          highlights: processedCode.highlights || [],
          lang: lang || "typescript",
        };

        // Store twoslash data for the theme components
        node.data = node.data || {};
        node.data.twoslash = twoslashData;

        // Add as hProperties for rehype plugins and MDX
        node.data.hProperties = node.data.hProperties || {};

        // Try multiple approaches to get data through MDX
        node.data.hProperties.twoslash = twoslashData;
        node.data.hProperties["data-twoslash"] = JSON.stringify(twoslashData);
        node.data.hProperties["data-twoslash-queries"] = twoslashData.queries.length;
        node.data.hProperties["data-twoslash-errors"] = twoslashData.errors.length;
        node.data.hProperties["data-twoslash-processed"] = "true";

        // Also try setting directly on the node for MDX
        node.twoslash = twoslashData;

        // Set properties that might get passed through as component props
        Object.assign(node, {
          "data-twoslash": JSON.stringify(twoslashData),
          "data-twoslash-queries": twoslashData.queries.length,
          "data-twoslash-errors": twoslashData.errors.length,
        });
      } catch (error) {
        console.warn(`⚠️ Failed to process twoslash for ${lang}:`, error.message);

        // Mark as attempted but failed - still add basic support
        node.meta = `${meta || ""} twoslash-error`.trim();
        node.data = node.data || {};
        node.data.twoslash = {
          error: error.message,
          code: value,
          queries: [],
          errors: [],
          staticQuickInfos: [],
          highlights: [],
          lang: lang || "typescript",
        };

        // Also add as hProperties and direct property
        node.data.hProperties = node.data.hProperties || {};
        node.data.hProperties.twoslash = node.data.twoslash;
        node.twoslash = node.data.twoslash;
      }
    }
  };
}

module.exports = remarkTwoslash;
