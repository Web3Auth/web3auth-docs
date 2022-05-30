export const getInitCode = (
  isWhiteLabled: boolean,
  isCustomAuth: boolean
): {
  code: string;
} => {
  let code = `
      await web3auth.initModal();`;
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
      };
      await web3auth.initModal(initParams);`;
  }
  if (isCustomAuth) {
    code = `
      await web3auth.init();`;
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
      };
      await web3auth.init(initParams);`;
    }
  }
  return {
    code,
  };
};
