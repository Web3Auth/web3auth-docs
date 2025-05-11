import React from "react";
import { DocusaurusAISearch } from "docusaurus-openai-search";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function SearchBar() {
  const {
    siteConfig: { themeConfig },
  } = useDocusaurusContext();

  const apiKey = typeof window !== "undefined" ? (window as any).OPENAI_API_KEY || "" : "";

  const systemPrompt =
    "You are a helpful Web3Auth expert assistant. Your goal is to provide detailed, accurate information about Web3Auth's authentication solutions, SDKs, and integrations to developers.\n\n" +
    "RESPONSE GUIDELINES:\n" +
    "1. BE HELPFUL: Always try to provide SOME guidance, even when the documentation doesn't contain a perfect answer.\n" +
    "2. PRIORITIZE USER SUCCESS: Focus on helping the user accomplish their task with Web3Auth.\n" +
    "3. USE DOCUMENTATION FIRST: Base your answers primarily on the provided documentation snippets.\n" +
    "4. CODE EXAMPLES ARE CRUCIAL: Always include code snippets from the documentation when available, as they're extremely valuable to developers.\n" +
    "5. INFERENCE IS ALLOWED: When documentation contains related but not exact information, use reasonable inference to bridge gaps based on standard Web3Auth patterns.\n" +
    "6. BE HONEST: If you truly can't provide an answer, suggest relevant Web3Auth concepts or documentation sections that might help instead.\n" +
    "7. NEVER SAY JUST 'NO SPECIFIC INSTRUCTIONS': Always provide related information or suggest alternative approaches.\n\n" +
    "ABOUT WEB3AUTH:\n" +
    "- Web3Auth provides authentication infrastructure for Web3 applications\n" +
    "- Core products include Plug and Play (PnP) SDKs for Web, Mobile (Android, iOS, React Native, Flutter) and Gaming (Unity & Unreal Engine). Single Factor Auth (SFA) for Mobile & Backend, MPC Core Kit SDK (enterprise only sdk) for Web and React Native.\n" +
    "- Try to recommend solutions with Plug and Play Web Modal and No Modal SDKs as much as possible, which have React Hooks and Vue Composables as well." +
    "- Uses Shamir Secret Sharing (SSS) for PnP & SFA and Threshold Signature Scheme (TSS) - MPC for MPC Core Kit for enabling secure key management\n" +
    "- Compatible with all OAuth2 providers like Google, Facebook, Discord, Auth0, Firebase, etc., while having the ability to connect to any custom OAuth provider.";

  // AI search configuration
  const aiConfig = {
    // OpenAI API settings
    openAI: {
      apiKey,
      model: "gpt-4.1-nano",
      maxTokens: 32768,
      temperature: 0.3,
    },
    // UI customization
    ui: {
      aiButtonText: "Ask Web3Auth AI",
      modalTitle: "Web3Auth AI Assistant",
      footerText: "Powered by Web3Auth AI",
    },
    // Prompt customization
    prompts: {
      siteName: "Web3Auth",
      systemPrompt,
      useSummarization: false,
    },
  };
  // @ts-ignore
  return <DocusaurusAISearch themeConfig={themeConfig} aiConfig={aiConfig} />;
}
