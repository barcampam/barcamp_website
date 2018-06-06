const faqActons = {
  FAQ_REQUEST: 'FAQ_REQUEST',
  FAQ_SUCCESS: 'FAQ_SUCCESS',
  FAQ_ERROR: 'FAQ_ERROR',
  faqSubmit: (email, text) => ({
    type: faqActons.FAQ_REQUEST,
    email: email,
    text: text
  }),
};
export default faqActons;
