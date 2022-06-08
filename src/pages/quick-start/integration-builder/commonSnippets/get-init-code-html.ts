export const getInitCodeHTML = (isWhiteLabled: boolean) => {
  let code = `
      await web3auth.initModal();`;
  if (isWhiteLabled) {
    code = `
      await web3auth.initModal({
        modalConfig: {
          ["openlogin"]: {
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
