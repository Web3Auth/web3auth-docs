export const getInitCode = (
  isWhiteLabled: boolean
): {
  code: string;
} => {
  let code = `
    const initParams = {}
  `;
  if (isWhiteLabled) {
    code = `

    const initParams = {
        modalConfig: {
          [WALLET_ADAPTERS.OPENLOGIN]: {
            label: "openlogin",
            loginMethods: {
              reddit: {
                showOnModal: false,
                name: "reddit",
              },
            },
          },
        },
      };`;
  }
  return {
    code,
  };
};
