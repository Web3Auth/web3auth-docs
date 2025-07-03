import React from "react";
import { DocusaurusAISearch } from "docusaurus-openai-search";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function SearchBar() {
  const {
    siteConfig: { themeConfig },
  } = useDocusaurusContext();

  // AI search configuration
  const aiConfig = {
    backend: {
      url: "https://docusaurus-openai-search-backend.vercel.app",
    },
    context: {
      siteName: "Web3Auth Documentation",
      systemContext:
        "ABOUT WEB3AUTH:\n" +
        "- Web3Auth provides authentication infrastructure for Web3 applications\n" +
        "- Core products include Plug and Play (PnP) SDKs for Web, Mobile (Android, iOS, React Native, Flutter) and Gaming (Unity & Unreal Engine). Other SDKs are there, like Single Factor Auth (SFA) for Mobile & Backend, MPC Core Kit SDK (enterprise only sdk) for Web and React Native.\n, However we want to focus on PnP SDKs and their integrations with other services." +
        "- Try to recommend solutions with Plug and Play Web Modal and No Modal SDKs as much as possible, which have React Hooks and Vue Composables as well." +
        "- Uses Shamir Secret Sharing (SSS) for PnP & SFA and Threshold Signature Scheme (TSS) - MPC for MPC Core Kit for enabling secure key management\n" +
        "- Compatible with all OAuth2 providers like Google, Facebook, Discord, Auth0, Firebase, etc., while having the ability to connect to any custom OAuth provider.",
    },
    ui: {
      aiButtonText: "Ask Web3Auth AI",
      modalTitle: "Web3Auth AI Assistant",
      footerText: "Powered by Web3Auth AI",
      searchButtonText: "Search with AI",
      searchButtonAriaLabel: "Search with Web3Auth AI",
      showSearchButtonShortcut: false,
      useCustomSearchButton: true,
    },
    enableLogging: false,
    enableCaching: true,
    recaptcha: {
      siteKey: "6LeotlkrAAAAAEREf2umQgDoO2l3zfqUdJR599LV",
    },
    features: {
      // Conversational memory for context-aware follow-up questions
      conversationalMemory: {
        enabled: true,
        sessionDuration: 3600, // Session duration in seconds (default: 1 hour)
      },

      // Multi-source search (GitHub, blog, changelog integration)
      multiSource: {
        enabled: true,
        // GitHub integration for issues and discussions
        github: {
          repo: "Web3Auth/web3auth-web", // Your GitHub repository
          // Note: GitHub Personal Access Token should be configured in the backend environment
          // as GITHUB_TOKEN for security reasons
          searchTypes: ["issues", "discussions"], // What to search
          maxResults: 5, // Max results from GitHub (default: 5)
        },
        // Blog search integration
        blog: {
          url: "https://blog.web3auth.io",
          platform: "ghost", // 'wordpress', 'ghost', 'medium', or 'generic'
          maxResults: 3, // Max blog posts to include (default: 3)
        },
        // Source weighting for result aggregation
        aggregationWeights: {
          documentation: 0.8, // Primary weight for docs
          github: 0.1, // Secondary weight for GitHub
          blog: 0.1, // Tertiary weight for blog
        },
      },

      // Other advanced features
      queryUnderstanding: true, // Enhanced query analysis (default: true)
      intelligentRanking: true, // Smart result ranking (default: true)
      followUpSuggestions: true, // Generate follow-up questions (default: true)
      qualityScoring: true, // Answer quality assessment (default: true)
    },
  };
  // @ts-ignore
  return <DocusaurusAISearch themeConfig={themeConfig} aiConfig={aiConfig} />;
}
