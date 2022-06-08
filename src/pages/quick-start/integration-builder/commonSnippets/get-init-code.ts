export const getInitCode = (isWhiteLabled: boolean) => {
  let code = `
      await web3auth.initModal();`;
  if (isWhiteLabled) {
    code = `
      await web3auth.initModal({
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
      });`;
  }
  return code;
};
