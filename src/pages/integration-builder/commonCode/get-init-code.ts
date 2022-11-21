export const getInitCode = (whitelabel: boolean, useModal: boolean) => {
  if (useModal) {
    let code = `
        // HIGHLIGHTSTART-initialize
        await web3auth.initModal();
        // HIGHLIGHTEND-initialize`;
    if (whitelabel) {
      code = `
        // HIGHLIGHTSTART-initialize
        await web3auth.initModal({
          // HIGHLIGHTSTART-whiteLabeling
          modalConfig: {
            [WALLET_ADAPTERS.OPENLOGIN]: {
              label: "openlogin",
              loginMethods: {
                google: {
                  name: "google login",
                  logoDark: "url to your custom logo which will shown in dark mode",
                },
                facebook: {
                  // it will hide the facebook option from the Web3Auth modal.
                  showOnModal: false,
                },
              },
              // setting it to false will hide all social login methods from modal.
              showOnModal: true,
            },
          },
          // HIGHLIGHTEND-whiteLabeling
        });
        // HIGHLIGHTEND-initialize`;
    }
    return code;
  }
  const code = `
        // HIGHLIGHTSTART-initialize
        await web3auth.init();
        // HIGHLIGHTEND-initialize`;
  return code;
};
