export const getInitCode = (isWhiteLabled: boolean) => {
  let code = `
      await web3auth.initModal();
      if (web3auth.provider) {
        setProvider(web3auth.provider);
      }`;
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
      });
      if (web3auth.provider) {
        setProvider(web3auth.provider);
      }`;
  }
  return code;
};
