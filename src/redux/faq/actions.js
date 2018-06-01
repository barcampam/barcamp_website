const faqActons = {
  FAQ_REQUEST: 'FAQ_REQUEST',
  FAQ_SUCCESS: 'FAQ_SUCCESS',
  FAQ_ERROR: 'FAQ_ERROR',
  faqSubmit: () => ({
    type: faqActons.FAQ_REQUEST,
  }),
};
export default faqActons;
